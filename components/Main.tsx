import React from "react";
import { Data } from "../interfaces/Data";
import Layout from "./Layout";
import Banner from "./sections/Banner";
import Contact from "./sections/Contact";
import Presentation from "./sections/Presentation";
import Skills from "./sections/Skills";

interface MainProps extends Data {
  language: string;
}

const Main: React.FC<MainProps> = ({ articles, skills, language }) => {
  return (
    <Layout language={language} title="Simon Hessel">
      <Banner />
      <Presentation articles={articles} />
      <Skills skills={skills} />
      <Contact />
    </Layout>
  );
};

export default Main;
