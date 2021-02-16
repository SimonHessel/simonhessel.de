import { useTranslation } from "next-i18next";
import { BulltetPoints } from "../../interfaces/BulletPoints";

const BulletList = ({ title, items }: BulltetPoints) => {
  const { t } = useTranslation("article");

  return (
    <div className="6u 12u$(xsmall)">
      <h1>{t(title)}</h1>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default BulletList;
