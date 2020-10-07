import { GetStaticProps } from 'next';
import YAML from 'yaml'

import Layout from '../components/Layout';

import { Skill } from '../interfaces/Skill';
import { Article } from '../interfaces/Article';

import Banner from '../components/sections/Banner';
import Presentation from '../components/sections/Presentation';
import Contact from '../components/sections/Contact';
import Skills from '../components/sections/Skills';

import fs from 'fs'

type Props = {
  skills: Skill[];
  articles: Article[];
};

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: Props;
}> => {
  return {
    props: YAML.parse(fs.readFileSync("data.yaml").toString()) as Props,
  };
};

const IndexPage = ({ skills, articles }: Props) => (
  <Layout title="Simon Hessel">
    <Banner />
    <Presentation articles={articles} />
    <Skills skills={skills} />
    <Contact />
  </Layout>
);

export default IndexPage;
