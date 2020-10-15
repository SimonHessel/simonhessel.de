import React from "react";
import useTranslation from "../hooks/useTranslation";
import { Data } from "../interfaces/Data";
import Layout from "./Layout";
import Banner from "./sections/Banner";
import Contact from "./sections/Contact";
import Presentation from "./sections/Presentation";
import Skills from "./sections/Skills";

interface MainProps {}

const Main: React.FC<MainProps> = () => {
  const { t } = useTranslation();
  const { skills, articles } = t<Data>("data");

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
