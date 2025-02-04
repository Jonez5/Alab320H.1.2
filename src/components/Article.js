import React from "react";

const Article = ({ date, title, imageSrc, altText, content }) => {
  return (
    <article className="article">
      <h3>{date}</h3>
      <h2>{title}</h2>
      <img src={imageSrc} alt={altText} />
      <p>
        <span className="dropcap">{content.charAt(0)}</span>{content.slice(1)}
      </p>
      <a href="#" className="continues">Continues...</a>
    </article>
  );
};

export default Article;