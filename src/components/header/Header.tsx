import React from "react";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import "./Header.css";

function HeaderComponent() {
  return (
    <>
      <header>
        <div className="container d-flex align-items-center justify-content-between">
          <form>
            <div className="search d-flex align-items-center gap-2 ml-5 ms-5">
              <FiSearch />
              <input className="ps-4" type="search" placeholder="Search..." />
            </div>
          </form>
          <div className="links">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              {" "}
              <BsInstagram />
            </a>
            <a href="#">
              <AiOutlineTwitter />
            </a>
            <a href="#">
              {" "}
              <FaPinterestP />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderComponent;
