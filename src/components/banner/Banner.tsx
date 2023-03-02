import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Banner.css";

function Banner() {
  return (
    <>
      <div className="banner">
        <Row className="flex-nowrap">
          <Col>
            <div className="image">
              <img src="/img/banner1.webp" alt="banner1" />
            </div>
          </Col>
          <Col>
            <div className="image">
              <img src="/img/banner2.webp" alt="banner2" />
            </div>
          </Col>
          <Col>
            <div className="image">
              <img src="/img/banner3.webp" alt="banner3" />
            </div>
          </Col>

        </Row>

        <div className="sticker-container d-flex justify-content-center">
          <div className="sticker">
            <span className="fw-bold">My Life. My Blog.</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
