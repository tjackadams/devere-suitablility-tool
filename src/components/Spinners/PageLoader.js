import React, { memo } from "react";

const PageLoader = () => (
  <div style={{ marginTop: "4rem", marginBottom: "4rem" }}>
    <div className="flex-center flex-column">
      <div style={{ width: "100vw" }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div
                className="spinner-border devere-text-color"
                role="status"
                style={{ width: "8rem", height: "8rem" }}
              >
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center" style={{ marginTop: "2rem" }}>
              <h4>
                <strong>
                  <span className="devere-text-color">
                    Loading Your deVere Mortgage Tool
                  </span>
                </strong>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default memo(PageLoader);
