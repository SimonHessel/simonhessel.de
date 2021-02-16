import { useTranslation } from "next-i18next";
import { Skill } from "../../interfaces/Skill";

export type SkillsProps = {
  skills: Skill[];
};

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const { t } = useTranslation("skill");

  return (
    <section style={{ paddingTop: "4em" }} className="wrapper special">
      <header className="major special">
        <h2>{t("skills")}</h2>
      </header>

      <div className="row">
        {skills.map(({ category, list }) => (
          <div key={category} className="3u 12u$(xsmall)">
            <h4>{t(category)}</h4>
            <ul className="alt">
              {list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
