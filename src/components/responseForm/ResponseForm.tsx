import React from "react";
import { Col, Row } from "react-bootstrap";
import "./ResponseForm.css";

function ResponseForm() {
  return (
    <section id="responseform">
      <div className="response-form">
        <h1>Let me know what's on your mind</h1>
        <Col className="form-container offset-lg-3" lg={6}>
          <Row className="form-elements">
            <Col className="form-group-container" md={6} xs={12}>
              <div className="form-group">
                <label>First Name</label>
                <input type="text" />
              </div>
            </Col>
            <Col className="form-group-container" md={6} xs={12}>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" />
              </div>
            </Col>
            <Col className="form-group-container" md={6} xs={12}>
              <div className="form-group">
                <label>Email</label>
                <input type="text" />
              </div>
            </Col>
            <Col className="form-group-container" md={6} xs={12}>
              <div className="textarea-with-arrows">
                <label>Leave us a message...</label>
                <textarea></textarea>
              </div>
            </Col>
          </Row>
          <button>Submit</button>
        </Col>
      </div>
    </section>
  );
}

export default ResponseForm;
