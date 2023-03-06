import React from "react";
import BlogComponent from "../blogCompoment/BlogComponent";
import './MainComponent.css'
import blogItems from "../../data/blog-items.json"
import { Col, Row } from "react-bootstrap";


function mainComponent() {

  let slicedBlogItems = blogItems.slice(0,3)


  return (
     <>
      <section id="main">
      <main>
      <div className="main-container">
           <div className="main-content ms-5">
             <Row>
              <Col xs={12} lg={7}>
              <div className="blogs">
                     {
                       slicedBlogItems.map((item)=>(
                         <div className="blog-component" key={item.id}>
                           <BlogComponent {...item}/>
                         </div>
                       ))
                     }
                    
                     <button>All Posts</button>
                 </div>
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
                       <button>Subscribe</button>
                     </form>
                   </div>
                   <div className="instagram"></div>
                 </div>
              </Col>
             </Row>
           </div>
         </div>
       </main>
      </section>
     </>
    
  );
}

export default mainComponent;
