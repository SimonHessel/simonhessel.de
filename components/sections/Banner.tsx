import Link from "next/link";

type Props = {};

const Banner = ({}: Props) => (
  <section id="banner">
    <i className="icon fa-code"></i>
    <h2>Willkommen</h2>
    <ul className="actions">
      <li>
        <a href="#four" className="button big special">
          Kontaktieren
        </a>
      </li>
      <li>
        <Link href="https://drive.google.com/uc?export=download&id=1qax9mQQWEt_ugse6WEJBUaNKRHkJ_Neq">
          <a className="button big alt">Lebenslauf</a>
        </Link>
      </li>
    </ul>
  </section>
);

export default Banner;
