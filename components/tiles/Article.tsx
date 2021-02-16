import { ReactNode } from "react";
import Image from "next/image";
import { Article } from "../../interfaces/Article";

type Props = { article: Article; children?: ReactNode };

const ArticleSection = ({
  article: {
    site,
    image: { name: image, ...rest },
    title,
    description,
  },
  children,
}: Props) => {
  return (
    <article className={`feature ${site}`}>
      <span className="image">
        <Image src={"/static/images/" + image} {...rest} />
      </span>
      <div className="content">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
        {children}
      </div>
    </article>
  );
};

export default ArticleSection;
