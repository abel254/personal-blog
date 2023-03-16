import React from "react";
import "./RecentPostsComponent.css";
import { BlogComponentProps } from "../../../propsTypes/Blog.type";
import { Link } from "react-router-dom";
import { useBlogsContext } from "../../../context/BlogsContext";

function RecentPostsComponent({ id, image, title }: BlogComponentProps) {
  const { addBlog } = useBlogsContext();

  return (
    <section className="recent-blogs">
      <button onClick={() => addBlog(id)}>
        
          <Link to={"/blogs"} className="links">
            <div className="post-container">
              <div className="post-image">
                <img src={image} alt="RecentPosts image" />
              </div>
              <div className="title">
                <h5>{title}</h5>
              </div>
            </div>
          </Link>
       
      </button>
    </section>
  );
}

export default RecentPostsComponent;
