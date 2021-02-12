import { useTranslation } from "next-i18next";
import { useState } from "react";

export type Props = {};

const Contact: React.FC<Props> = (_) => {
  const { t } = useTranslation("form");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section id="four" className="wrapper style2 special">
      <div className="inner">
        <header className="major narrow">
          <h2 id="contactHeader">{t("header")}</h2>
        </header>
        <form>
          <div className="container 75%">
            <div className="row uniform 50%">
              <div className="6u 12u$(xsmall)">
                <input
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="6u$ 12u$(xsmall)">
                <input
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="12u$">
                <textarea
                  id="message"
                  name="message"
                  placeholder={t("messagePlaceholder")}
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
          <ul className="actions">
            <li>
              <a
                className="button special"
                href={`mailto:hessel.simon@gmail.com?body=${encodeURIComponent(
                  `${message}
                  
                  Regards ${name}
                  ${email}`
                )}`}
              >
                {t("sendBtn")}
              </a>{" "}
            </li>
            <li>
              <input
                type="reset"
                className="alt"
                value={t("resetBtn") as string}
              />
            </li>
          </ul>
        </form>
      </div>
    </section>
  );
};
export default Contact;
