import React from "react";
import "./ReadingPage.css";
const ArticleData = (props) => {
  return(
  <div className="article_page_container">
    <span className="article_page_tag">{props.tags}</span>
    <h1 className="article_page_title">{props.title}</h1>
    <div className="article_page_user">
      <div className="article_page_titlename">
        <div className="article_page_titleusername">{props.author}</div>
        <div className="article_page_titledate">{props.postedDate}</div>
      </div>
      <div className="article_page_titleicons">️</div>
    </div>
      <div className="main">

      </div>
  </div>
  );
};
export default ArticleData;
