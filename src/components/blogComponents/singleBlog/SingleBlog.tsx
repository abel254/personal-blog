import React, { useLayoutEffect } from "react";
import { Col, Row } from "react-bootstrap";
import "./SingleBlog.css";
import { CiMenuKebab } from "react-icons/ci";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLinkAlt } from "react-icons/bi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import bItems from "../../../data/blog-items.json";
import RecentPostsComponent from "../recentPosts/RecentPostsComponent";
import { useBlogsContext } from "../../../context/BlogsContext";

function SingleBlog() {

  useLayoutEffect(()=> {
    window.scrollTo(0, 0)
  })

  const recentItems = bItems.slice(0, 2);

  const { blogItems } = useBlogsContext();

  const itemId = blogItems.map((item) => item.id);
  const id = Number(itemId.join(""));

  const blogPageItems = bItems.find((item) => item.id === id);

  if (blogPageItems === null) return null;


  return (
    <>
      <section className="single-blog" id="single-blogs">
        <Row className="gx-0">
          <Col xs={12} lg={8}>
            <div className="main-content">
              <h6>All Posts</h6>

              <div className="info-content">
                <div className="top">
                  <div className="date-time">
                    <p className="date me-1">{blogPageItems?.date}</p>
                    <span>.</span>
                    <p className="time ms-1">{blogPageItems?.time} mins</p>
                  </div>
                  <CiMenuKebab />
                </div>
                <div className="info">
                  <h1>{blogPageItems?.title}</h1>
                  <p className="intro-one">{blogPageItems?.introone}</p>
                  <div className="image">
                    <img src={blogPageItems?.image} alt="singleBlog image" />
                  </div>
                  <p className="intro-two">{blogPageItems?.introtwo}</p>
                  <div className="subtitle with-notes">
                    <h5>{blogPageItems?.subonetitle}</h5>
                    <div className="notes">
                      <p>“{blogPageItems?.subonenotes}”</p>
                    </div>
                    <p className="description">
                      {blogPageItems?.subonedescription}
                    </p>
                  </div>
                  <div className="subtitle no-notes">
                    <h5>{blogPageItems?.subtwotitle}</h5>
                    <p className="description">
                      {blogPageItems?.subtwodescription}
                    </p>
                  </div>
                  <div className="subtitle with-notes">
                    <h5>{blogPageItems?.subthreetitle}</h5>
                    <div className="notes">
                      <p>“{blogPageItems?.subthreenotes}”</p>
                    </div>
                    <p className="description">
                      {blogPageItems?.subthreedescription}
                    </p>
                  </div>
                  <div className="subtitle no-notes">
                    <h5>{blogPageItems?.subfourtitle}</h5>
                    <p className="description">
                      {blogPageItems?.subfourdescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="social-links">
              <FaFacebookF />
              <AiOutlineTwitter />
              <FaLinkedinIn />
              <BiLinkAlt />
            </div>

            <div className="recent-blogs">
              <div className="top">
                <h5>Recent Posts</h5>
                <p>See All</p>
              </div>
              <div className="post-images">
                <Row>
                  {recentItems.map((item) => {
                    return (
                      <Col xs={12} sm={6}>
                        <RecentPostsComponent {...item} />
                      </Col>
                    );
                  })}
                </Row>
              </div>
            </div>
          </Col>

          <Col lg={4} className="aside-col">
            <div className="aside">
              <div className="aside-content">
                <div className="aside-image">
                  <img src="../img/profile.jpg" alt="" />
                </div>
                <div className="aside-info">
                  <h4>Hi, thanks for stopping by!</h4>
                  <p>
                    I'm a paragraph. Click here to add your own text and edit
                    me. I’m a great place for you to tell a story and let your
                    users know a little more about you.
                  </p>
                  <button>
                    <Link to="/about" className="links">
                      Read More
                    </Link>
                  </button>
                </div>
              </div>

              <div className="aside-subscribe">
                <h4>Let the posts come to you.</h4>
                <form>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" />
                  </div>
                  <div className="subscribe-button">
                    <button>Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
}

export default SingleBlog;
