import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Banner.css";

const banner1 = require("../../img/banner1.webp");
const banner2 = require("../../img/banner2.webp");
const banner3 = require("../../img/banner3.webp");

function Banner() {
  return (
    <div className="banner">
      <div className="row flex-nowrap">
        <div className="col-sm-4">
          <img src={banner1} alt="banner1" />
        </div>
        <div className="col-sm-4">
          <img src={banner2} alt="banner2" />
        </div>
        <div className="col-sm-4">
          <img src={banner3} alt="banner3" />
        </div>
      </div>
      <div className="sticker-container d-flex justify-content-center">
        <div className="sticker">
          <span className="fw-bold">My Life. My Blog.</span>
        </div>
      </div>
    </div>
  );
}

export default Banner;
