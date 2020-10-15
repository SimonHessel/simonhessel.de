import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
  language: string;
};

const Layout = ({ children, title = "simonhessel.de" }: Props) => (
  <div>
    <Head>
      <link rel="stylesheet" href="assets/css/main.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/css/flag-icon.min.css"
      />
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <header id="header" className="alt">
      <h1>
        <a href="index.html">Simon Hessel</a>
      </h1>
      {/* <div>
        <span
          style={{ fontSize: "1.6rem" }}
          className={`flag-icon flag-icon-${language === "de" ? "us" : "de"}`}
        ></span>
      </div> */}
    </header>

    {children}
    <footer id="footer">
      <div className="inner">
        <ul className="icons">
          <li>
            <a
              href="mailto:hessel.simon@gmail.com"
              className="icon fa-envelope"
            >
              <span className="label">Mail</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/SimonHessel" className="icon fa-github">
              <span className="label">Github</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon fa-linkedin">
              <span className="label">LinkedIn</span>
            </a>
          </li>
        </ul>
        <ul className="copyright">
          <li>&copy; SH.</li>
          <li>
            Images: <a href="http://unsplash.com">Unsplash</a>.
          </li>
          <li>
            Design: <a href="http://templated.co">TEMPLATED</a>.
          </li>
        </ul>
      </div>
    </footer>
  </div>
);

export default Layout;
