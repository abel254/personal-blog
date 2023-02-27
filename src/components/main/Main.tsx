import React from "react";
import { CgAsterisk } from "react-icons/cg";
import './main.css'

function mainComponent() {
  return (
    <>
      <main>
        <div className="container">
          <div className="main-content ms-5">
            <div className="row">
              <div className="col-7">
                <div className="blogs">
                    {/* blogs component */}
                </div>
              </div>
              <div className="col-5">
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
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default mainComponent;
