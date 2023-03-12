import React from "react";
import "./RecentPostsComponent.css";
import { BlogComponentProps } from "../../../propsTypes/Blog.type";

function RecentPostsComponent({ image, title }: BlogComponentProps) {
  return (
    <div className="post-container">
      <div className="post-image">
        <img src={image} alt="RecentPosts image" />
      </div>
      <div className="title">
        <h5>{title}</h5>
      </div>
    </div>
  );
}

export default RecentPostsComponent;
