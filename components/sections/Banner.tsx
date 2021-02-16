import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";

export type Props = {};

const Banner = (props: Props) => {
  const { t } = useTranslation("hero");

  return (
    <>
      <div className="background-image">
        <Image
          alt="Hero Image"
          id="banner-image"
          layout="fill"
          src="/static/images/hero.png"
        />
      </div>
      <section id="banner">
        <i className="icon fa-code"></i>
        <h2>{t("header")}</h2>
        <ul className="actions">
          <li>
            <a href="#four" className="button big special">
              {t("contactBtn")}
            </a>
          </li>
          <li>
            <Link href="https://drive.google.com/uc?export=download&id=1qax9mQQWEt_ugse6WEJBUaNKRHkJ_Neq">
              <a className="button big alt">{t("cvBtn")}</a>
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Banner;
