import ArticleSection from "../tiles/Article";
import BulletList from "../tiles/BulletList";
import ActionRow from "../tiles/Button";
import { Article } from "../../interfaces/Article";
import { useTranslation } from "next-i18next";

export type PresentationProps = {
  articles: Article[];
};

const Presentation: React.FC<PresentationProps> = ({ articles }) => {
  // const { t } = useTranslation("common");
  // const articles: Article[] = t("articles", { returnObjects: true });

  return (
    <section id="one" className="wrapper style1">
      <div className="inner">
        {articles.map((item) => (
          <ArticleSection key={item.title} article={item}>
            {item.rows.map((row, index) => (
              <div key={index} className="row">
                {row.items.map((item) => (
                  <BulletList key={item.title} {...item} />
                ))}
              </div>
            ))}
            <ActionRow actions={item.actions} />
          </ArticleSection>
        ))}
      </div>
    </section>
  );
};

export default Presentation;
