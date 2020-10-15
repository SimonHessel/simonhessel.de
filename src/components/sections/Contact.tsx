import useTranslation from "../../hooks/useTranslation";

type Props = {};

const Contact = ({}: Props) => {
  const { t } = useTranslation();
  const { header, messagePlaceholder, sendBtn, resetBtn } = t<{
    [key: string]: string;
  }>("form");
  return (
    <section id="four" className="wrapper style2 special">
      <div className="inner">
        <header className="major narrow">
          <h2 id="contactHeader">{header}</h2>
        </header>
        <form id="contact" action="#" method="POST">
          <div className="container 75%">
            <div className="row uniform 50%">
              <div className="6u 12u$(xsmall)">
                <input id="name" name="name" placeholder="Name" type="text" />
              </div>
              <div className="6u$ 12u$(xsmall)">
                <input
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
              </div>
              <div className="12u$">
                <textarea
                  id="message"
                  name="message"
                  placeholder={messagePlaceholder}
                  rows={4}
                ></textarea>
              </div>
            </div>
          </div>
          <ul className="actions">
            <li>
              <input
                id="send"
                type="submit"
                className="special"
                value={sendBtn}
              />
            </li>
            <li>
              <input type="reset" className="alt" value={resetBtn} />
            </li>
          </ul>
        </form>
      </div>
    </section>
  );
};
export default Contact;
