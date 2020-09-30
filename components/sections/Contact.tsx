type Props = {};

const Contact = ({}: Props) => (
  <section id="four" className="wrapper style2 special">
    <div className="inner">
      <header className="major narrow">
        <h2 id="contactHeader">Kontakt aufnehmen</h2>
      </header>
      <form id="contact" action="#" method="POST">
        <div className="container 75%">
          <div className="row uniform 50%">
            <div className="6u 12u$(xsmall)">
              <input id="name" name="name" placeholder="Name" type="text" />
            </div>
            <div className="6u$ 12u$(xsmall)">
              <input id="email" name="email" placeholder="Email" type="email" />
            </div>
            <div className="12u$">
              <textarea
                id="message"
                name="message"
                placeholder="Nachricht"
                rows={4}
              ></textarea>
            </div>
          </div>
        </div>
        <ul className="actions">
          <li>
            <input id="send" type="submit" className="special" value="Senden" />
          </li>
          <li>
            <input type="reset" className="alt" value="Zurücksetzen" />
          </li>
        </ul>
      </form>
    </div>
  </section>
);
export default Contact;
