import React from "react";
import { Container, Row } from "react-bootstrap";
import "./BlogPage.css";
import blogs from '../../../data/blog-items.json'
import MainBlogComponent from "../mainBlogComponent/MainBlogComponent";

function BlogPage() {
  return (
    <section className="blog-page">
      <h1>The Feed</h1>

      
        <div className="blog-content">
          <div className="posts">
            <h6>All Posts</h6>
            <button>Log in / Sign up</button>
          </div>
          <Row className="gx-4 mt-5">
            {
                blogs.map(blogItems => {
                    return <MainBlogComponent key={blogItems.id} {...blogItems}/>
                })
            }
          </Row>
        </div>
      
    </section>
  );
}

export default BlogPage;
