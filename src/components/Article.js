import React from "react";
import ArticleBody from "../components/ArticleBody";
import ArticleActions from "../components/ArticleActions";
import ArticleAuthor from "../components/ArticleAuthor";
function Article() {
    return (
    <div className="article__title">
        <h2>NVIDIA Accelerated AI on Azure </h2>
        <ArticleBody/>
        <ArticleActions/>
        <ArticleAuthor/>
    </div> 
    );
  }
  export default Article;