import Link from "next/link";
import useTranslation from "../../hooks/useTranslation";

type Props = {};

const Banner = ({}: Props) => {
  const { t } = useTranslation();
  const { header, contactBtn, cvBtn } = t<{ [key: string]: string }>("hero");
  return (
    <section id="banner">
      <i className="icon fa-code"></i>
      <h2>{header}</h2>
      <ul className="actions">
        <li>
          <a href="#four" className="button big special">
            {contactBtn}
          </a>
        </li>
        <li>
          <Link href="https://drive.google.com/uc?export=download&id=1qax9mQQWEt_ugse6WEJBUaNKRHkJ_Neq">
            <a className="button big alt">{cvBtn}</a>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Banner;
