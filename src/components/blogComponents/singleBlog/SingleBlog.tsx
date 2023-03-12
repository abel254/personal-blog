import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./SingleBlog.css";
import { CiMenuKebab } from "react-icons/ci";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLinkAlt } from "react-icons/bi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import bItems from "../../../data/blog-items.json";
import RecentPostsComponent from "../recentPosts/RecentPostsComponent";

function SingleBlog() {
  const selectedItems = bItems.slice(0, 2);

  return (
    <>
      <section className="single-blog">
        <Row className="gx-0">
          <Col xs={12} lg={8}>
            <div className="main-content">
              <h6>All Posts</h6>

              <div className="info-content">
                <div className="top">
                  <div className="date-time">
                    <p className="date me-1">Nov 29, 2022</p>
                    <span>.</span>
                    <p className="time ms-1">2 mins</p>
                  </div>
                  <CiMenuKebab />
                </div>
                <div className="info">
                  <h1>Transform your winter blues into winter creativity</h1>
                  <p className="intro-one">
                    Create a blog post subtitle that summarizes your post in a
                    few short, punchy sentences and entices your audience to
                    continue reading.
                  </p>
                  <div className="image">
                    <img src="../img/blog1.webp" alt="singleBlog image" />
                  </div>
                  <p className="intro-two">
                    Welcome to your blog post. Use this space to connect with
                    your readers and potential customers in a way that’s current
                    and interesting. Think of it as an ongoing conversation
                    where you can share updates about business, trends, news,
                    and more.
                  </p>
                  <div className="subtitle with-notes">
                    <h5>Design with Ease</h5>
                    <div className="notes">
                      <p>
                        “Do you have a design in mind for your blog? Whether you
                        prefer a trendy postcard look or you’re going for a more
                        editorial style blog - there’s a stunning layout for
                        everyone.”
                      </p>
                    </div>
                    <p className="description">
                      Every layout comes with the latest social features built
                      in. Readers will be able to easily share posts on social
                      networks like Facebook and Twitter, view how many people
                      have liked a post, made comments and more. With Wix,
                      building your online community has never been easier.
                    </p>
                  </div>
                  <div className="subtitle no-notes">
                    <h5>Create Relevant Content</h5>
                    <p className="description">
                      You’ll be posting loads of engaging content, so be sure to
                      keep your blog organized with Categories that also allow
                      readers to explore more of what interests them. Each
                      category of your blog has its own page that’s fully
                      customizable. Add a catchy title, a brief description and
                      a beautiful image to the category page header to truly
                      make it your own. You can also add tags (#vacation #dream
                      #summer) throughout your posts to reach more people, and
                      help readers search for relevant content. Using hashtags
                      can expand your post reach and help people find the
                      content that matters to them. Go ahead, #hashtag away.
                    </p>
                  </div>
                  <div className="subtitle with-notes">
                    <h5>Stun Your Readers</h5>
                    <div className="notes">
                      <p>
                        “Be original, show off your style, and tell your story.”
                      </p>
                    </div>
                    <p className="description">
                      Blogging gives your site a voice, so let your business’
                      personality shine through. Are you a creative agency? Go
                      wild with original blog posts about recent projects, cool
                      inspirational ideas, or what your company culture is like.
                      Add images, and videos to really spice it up, and pepper
                      it with slang to keep readers interested. Are you a
                      programmer? Stay on the more technical side by offering
                      weekly tips, tricks, and hacks that show off your
                      knowledge of the industry. No matter what type of business
                      you have, one thing is for sure - blogging gives your
                      business the opportunity to be heard in a way in a
                      different and unconventional way.
                    </p>
                  </div>
                  <div className="subtitle no-notes">
                    <h5>Get Inspired</h5>
                    <p className="description">
                      To keep up with all things Wix, including website building
                      tips and interesting articles, head over to the Wix Blog.
                      You may even find yourself inspired to start crafting your
                      own blog, adding unique content, and stunning images and
                      videos. Start creating your own blog now. Good luck!
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
                  {selectedItems.map((item) => {
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
                  <img src="../img/profile-pic.jpg" alt="" />
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
