import React from "react";
import Layout from "./Layout";
import Banner, { BannerProps } from "./sections/Banner";
import Contact from "./sections/Contact";
import Presentation, { PresentationProps } from "./sections/Presentation";
import Skills, { SkillsProps } from "./sections/Skills";

export type MainProps = PresentationProps & SkillsProps & BannerProps;

const Main: React.FC<MainProps> = ({ articles, skills, cv }) => {
  return (
    <Layout title="Simon Hessel">
      <Banner cv={cv} />
      <Presentation articles={articles} />
      <Skills skills={skills} />
      <Contact />
    </Layout>
  );
};

export default Main;
