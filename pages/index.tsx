import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import firebase from "firebase";
import "firebase/firestore";
import React from "react";
import Main, { MainProps } from "../components/Main";
import fs from "fs";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSEGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
  };
  const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();
  const db = app.firestore();

  const keys = [{ key: "articles", orderBy: "timestamp" }, { key: "skills" }];
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

  const [articles, skills] = await Promise.all(res);

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
    },
    revalidate: 1800,
  };
};

const IndexPage: NextPage<MainProps> = (props) => {
  return <Main {...props} />;
};
export default IndexPage;
