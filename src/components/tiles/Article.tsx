import {ReactNode} from 'react';
import {Article} from '../../interfaces/Article';

type Props = {article: Article; children?: ReactNode};

const ArticleSection = ({
  article: {site, image, title, description},
  children,
}: Props) => (
  <article className={`feature ${site}`}>
    <span className="image">
      <img src={`/images/${image}`} alt="" />
    </span>
    <div className="content">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      {children}
    </div>
  </article>
);

export default ArticleSection;
