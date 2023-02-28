import React from "react";
import "./BlogComponent.css";

type BlogComponentProps = {
  id: number
  date: string
  time: number
  title: string
  description: string
  image: string
}


function BlogComponent({date, time, title, description, image}: BlogComponentProps) {
  return (
    <div className="blog-container">
      <div className="img">
        <img src={image} alt="blogimage" />
      </div>
      <div className="info">
        <div className="date-time d-flex mb-4">
          <p className="date me-1">{date}</p>
          <span>.</span>
          <p className="time ms-1">{time} mins</p>
        </div>
        <div className="info-link">
          <h4>{title}</h4>
          <p className="description">
            {description}...
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogComponent;
