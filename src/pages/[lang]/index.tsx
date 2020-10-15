import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import {
  getLocalizationProps,
  LanguageProvider,
} from "../../context/LanguageContext";

import fs from "fs";
import YAML from "yaml";

import Main from "../../components/Main";
import { Localization } from "../../translations/types";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const localization = getLocalizationProps(ctx, "common");
  localization.translations.data = YAML.parse(
    fs
      .readFileSync(
        `./src//translations/locales/${localization.locale}/data.yaml`
      )
      .toString()
  );

  return {
    props: {
      localization,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ["de", "en"].map((lang) => ({ params: { lang } })),
    fallback: false,
  };
};

const IndexPage: NextPage<{
  localization: Localization;
}> = ({ localization }) => {
  return (
    <LanguageProvider localization={localization}>
      <Main />
    </LanguageProvider>
  );
};
export default IndexPage;
