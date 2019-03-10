import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const SummaryItem = ({ status, question, answer, message, classes }) => {
  return (
    <Fragment>
      <div className="row" style={{ marginTop: "2rem" }}>
        <div className="col-12" style={{ display: "inline-flex" }}>
          <span
            className={classNames(
              "badge",
              { "badge-success": status === "Ok" },
              { "badge-warning": status === "Warning" },
              { "badge-danger": status === "Error" }
            )}
            style={{
              marginRight: "0.8rem"
            }}
          >
            {"  "}
          </span>
          <h4>
            <strong>{question}</strong>
          </h4>
        </div>
      </div>
      <div className="row" style={{ marginTop: "1rem" }}>
        <div className="col-12">
          <h6>
            <strong>Your Answer: </strong>
            <span className="devere-text-color">{answer}</span>
          </h6>
        </div>
      </div>

      {message && (
        <div className="row">
          <div className="col-12">
            <h5>
              <small className="text-muted">{message}</small>
            </h5>
          </div>
        </div>
      )}
    </Fragment>
  );
};

SummaryItem.propTypes = {
  status: PropTypes.oneOf(["Ok", "Warning", "Error"]).isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  message: PropTypes.string
};

export default SummaryItem;
