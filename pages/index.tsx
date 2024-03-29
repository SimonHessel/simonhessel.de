import admin from "firebase-admin";
import fs from "fs";
import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import Main, { MainProps } from "../components/Main";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const app = !admin.apps.length
    ? admin.initializeApp({
        credential: admin.credential.cert(
          JSON.parse(process.env.FIREBASE_ADMIN_CONFIG)
        ),
      })
    : admin.app();

  const db = app.firestore();

  const keys = [
    { key: "articles", orderBy: "timestamp" },
    { key: "skills" },
    { key: "banner" },
  ];
  const res = keys.map(async ({ key, orderBy }) => {
    const collection = db.collection(key);

    const snapshot = await (orderBy
      ? collection.orderBy(orderBy, "desc").get()
      : collection.get());
    const data = [];
    snapshot.forEach((doc) => {
      const { timestamp, ...rest } = doc.data();
      data.push(rest);
    });
    return data;
  });

  const [articles, skills, banner] = await Promise.all(res);

  console.log(banner);

  return {
    props: {
      ...(await serverSideTranslations(
        locale,
        fs
          .readdirSync("./public/static/locales/de")
          .map((file) => file.split(".")[0])
      )),
      skills,
      articles,
      cv: banner[0].cv,
    },
    revalidate: 1800,
  };
};

const IndexPage: NextPage<MainProps> = (props) => {
  return <Main {...props} />;
};
export default IndexPage;
