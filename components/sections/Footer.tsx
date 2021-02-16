import React from "react";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
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
  );
};
