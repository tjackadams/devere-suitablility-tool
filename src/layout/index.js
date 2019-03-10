import React from "react";
import PropTypes from "prop-types";

const Layout = ({ title, children }) => (
  <div style={{ marginTop: "4rem", marginBottom: "4rem" }}>
    <div className="flex-center flex-column">
      <div className="card" style={{ width: "50vw" }}>
        <h5 className="card-header white-text text-center py-4 devere-color">
          <strong>{title}</strong>
        </h5>
        <div className="card-body px-lg-5 pt-0">{children}</div>
      </div>
    </div>
  </div>
);

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Layout;
