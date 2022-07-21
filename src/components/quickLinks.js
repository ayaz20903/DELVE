import React from "react";
import "../App.css";

const QuickLinks = () => {
  return (
    <>
      <section className="quick-section">
        <div className="container quick-width p-0 w-100">
          <div className="d-flex mb-column justify-content-center align-items-center ">
            <div className="quick-links-1 quick-links">
              <h2>Book Your Slot</h2>
              <p>Lorem ipsum</p>
              <div className="levels">
                <span>Level 1</span>
                <span>Level 2</span>
              </div>
              <div className="levels">
                <span>Leve 3</span>
                <span>Enquiry</span>
              </div>
            </div>

            <div className="quick-links-2 quick-links">
              <p>Lorem ipsum</p>
              <div className="levels">
                <span>Level 1</span>
                <span>Level 2</span>
              </div>
              <div className="levels">
                <span>Leve 3</span>
                <span>Enquiry</span>
              </div>
            </div>
            <div className="quick-links-3 quick-links">
              <p>Lorem ipsum</p>
              <div className="levels">
                <span>Level 1</span>
                <span>Level 2</span>
              </div>
              <div className="levels">
                <span>Leve 3</span>
                <span>Enquiry</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuickLinks;
