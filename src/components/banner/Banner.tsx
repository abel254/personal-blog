import React from "react";
import "./Banner.css";


function Banner() {
  return (
    <div className="banner">
      <div className="row flex-nowrap">
        <div className="col-sm-4">
          <img src='/img/banner1.webp' alt="banner1" />
        </div>
        <div className="col-sm-4">
          <img src="/img/banner2.webp" alt="banner2" />
        </div>
        <div className="col-sm-4">
          <img src="/img/banner3.webp" alt="banner3" />
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
