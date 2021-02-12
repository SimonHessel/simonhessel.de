import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import Main, { MainProps } from "../components/Main";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "hero", "form"])),
    },
  };
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: ["de", "en"].map((lang) => ({ params: { lang } })),
//     fallback: false,
//   };
// };

const IndexPage: NextPage<MainProps> = (props) => {
  return <Main {...props} />;
};
export default IndexPage;
