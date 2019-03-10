import React, { Fragment, memo } from "react";
import PropTypes from "prop-types";

const Layout = ({ title, subTitle, children }) => (
  <div style={{ marginTop: "4rem", marginBottom: "4rem" }}>
    <div className="flex-center flex-column">
      <div className="card" style={{ width: "50vw" }}>
        <h4 className="card-header white-text text-center py-4 devere-color">
          <strong>{title}</strong>
          {subTitle && (
            <Fragment>
              <br />
              <span style={{ fontSize: "60%" }}>
                <small>{subTitle}</small>
              </span>
            </Fragment>
          )}
        </h4>

        <div className="card-body px-lg-5 pt-0">{children}</div>
      </div>
    </div>
  </div>
);

Layout.propTypes = {
  subTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default memo(Layout);
