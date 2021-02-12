import { ReactNode } from "react";
import Image from "next/image";
import { Article } from "../../interfaces/Article";

type Props = { article: Article; children?: ReactNode };

const ArticleSection = ({
  article: {
    site,
    image: { name: image, width, height },
    title,
    description,
  },
  children,
}: Props) => {
  // console.log({ image, width, height });
  return (
    <article className={`feature ${site}`}>
      <span className="image">
        <Image src={`/images/${image}`} width={width} height={height} />
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
