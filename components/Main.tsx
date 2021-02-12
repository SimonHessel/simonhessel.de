import React from "react";
import { Article } from "../interfaces/Article";
import { Skill } from "../interfaces/Skill";
import Layout from "./Layout";
import Banner from "./sections/Banner";
import Contact from "./sections/Contact";
import Presentation from "./sections/Presentation";
import Skills from "./sections/Skills";

export type MainProps = {
  skills: Skill[];
  articles: Article[];
};

const Main: React.FC<MainProps> = (_) => {
  return (
    <Layout title="Simon Hessel">
      <Banner />
      <Presentation />
      <Skills />
      <Contact />
    </Layout>
  );
};

export default Main;
