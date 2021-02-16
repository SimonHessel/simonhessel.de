import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode, useCallback } from "react";
import { Footer } from "./sections/Footer";
type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "simonhessel.de" }: Props) => {
  const { locale, locales, ...router } = useRouter();

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/css/flag-icon.min.css"
        />
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Personal Home Page of Simon Hessel with a List of Projects and Skills."
        />
      </Head>

      <header id="header" className="alt">
        <h1>
          <a href="index.html">Simon Hessel</a>
        </h1>
        <Link href="/" locale={locale === "de" ? "en" : "de"}>
          <span
            style={{ cursor: "pointer", fontSize: "1.6rem" }}
            className={`flag-icon flag-icon-${locale === "de" ? "us" : "de"}`}
          ></span>
        </Link>
      </header>

      {children}
      <Footer />
    </div>
  );
};

export default Layout;
