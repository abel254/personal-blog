import React from "react";
import { Col, Row } from "react-bootstrap";
import "./BlogComponent.css";
import { BlogComponentProps } from "../../../props/Blog.type";


function BlogComponent({
  date,
  time,
  title,
  description,
  image,
}: BlogComponentProps) {
  return (
    <section className="blog-container">
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
    </section>
  );
}

export default BlogComponent;
