
import BlogComponent from "../blogCompoment/BlogComponent";
import "./MainComponent.css";
import blogItems from "../../../data/blog-items.json";
import { Col, Row } from "react-bootstrap";


function mainComponent() {

  let slicedBlogItems = blogItems.slice(0, 3);

  return (
    <>
      <main>
        <div className="main-container">
          <div className="main-content">
            <Row>
              <Col xs={12} lg={7}>
                <Row>
                  <Col xs={12}>
                    <div className="blogs">
                      {slicedBlogItems.map((item) => (
                        <div className="blog-component" key={item.id}>
                          <BlogComponent {...item} />
                        </div>
                      ))}
                    </div>
                  </Col>
                  <Col xs={12} className="blogs-button">
                    <button>All Posts</button>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} lg={5}>
                <div className="subscribe">
                  <div className="followup ">
                    <h1 className="fw-bold">Let the posts come to you.</h1>
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
                  <div className="instagram">{/* Insta Grid  */}</div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </main>
    </>
  );
}

export default mainComponent;
