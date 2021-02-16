import { useTranslation } from "next-i18next";
import { Action } from "../../interfaces/Action";

type Props = {
  actions: Action[];
};

const ActionRow = ({ actions }: Props) => {
  const { t } = useTranslation("action");

  return (
    <ul className="actions">
      {actions.map(({ action, text, style }) => (
        <li key={action}>
          <a href={action} className={`button ${style ? style : ""}`}>
            {t(text)}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ActionRow;
