import React from "react";
import { Col, Row } from "react-bootstrap";
import "./BlogComponent.css";
import { BlogComponentProps } from "../../../propsTypes/Blog.type";
import { Link } from "react-router-dom";
import { useBlogsContext } from "../../../context/BlogsContext";


function BlogComponent({
  id,
  date,
  time,
  title,
  description,
  image,
}: BlogComponentProps) {

  const {addBlog, removeFromBlog} = useBlogsContext()

  const insertItems = () => {
    removeFromBlog(id)
    addBlog(Number(id))
    console.log(id);
    
  }

  return (

    <section className="blog-container">
   <button onClick={()=> insertItems()}>
   <Link to={'/blogs'} className='links'> 
   <Row className="blog-row">
      <Col xs={12} md={6}>
        <div className="image">
          <img src={image} alt="blogimage" className="img-fluid" />
        </div>
      </Col>
      <Col xs={12} md={6}>
        <div className="info">
          <div className="date-time d-flex mb-4">
            <p className="date me-1">{date}</p>
            <span>.</span>
            <p className="time ms-1">{time} mins</p>
          </div>
          <div>
            <h4>{title}</h4>
            <p className="description">{description}...</p>
          </div>
        </div>
      </Col>
    </Row>
   </Link> 
   </button>
  </section>
  );
}

export default BlogComponent;
