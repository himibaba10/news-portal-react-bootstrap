import React from "react";
import "./Headline.css";

const Headline = (props) => {
    const news = props.news;
  return (
      <div className="headline border border-primary border-3 m-2">
          <h1>Welcome To News Portal</h1>
          <h2>Top Headlines: {news.length}</h2>
      </div>
  );
};

export default Headline;
