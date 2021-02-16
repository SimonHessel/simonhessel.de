import React from "react";
import Layout from "./Layout";
import Banner from "./sections/Banner";
import Contact from "./sections/Contact";
import Presentation, { PresentationProps } from "./sections/Presentation";
import Skills, { SkillsProps } from "./sections/Skills";

export type MainProps = PresentationProps & SkillsProps;

const Main: React.FC<MainProps> = ({ articles, skills }) => {
  return (
    <Layout title="Simon Hessel">
      <Banner />
      <Presentation articles={articles} />
      <Skills skills={skills} />
      <Contact />
    </Layout>
  );
};

export default Main;
