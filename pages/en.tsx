import { GetStaticProps } from "next";

import Main from "../components/Main";
import { Data } from "../interfaces/Data";
import loadData from "../utils/loadData";

const language = "us";

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: Data;
}> => ({
  props: loadData(language),
});

export default (props: Data) => <Main language={language} {...props} />;
