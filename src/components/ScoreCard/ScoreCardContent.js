import React from "react";
import PropTypes from "prop-types";
import { Header, Segment } from "semantic-ui-react";

const style = {
  answer: {
    fontWeight: "bold",
    fontSize: "1.2rem"
  },
  answerText: {
    fontSize: "1.5rem"
  },
  reason: {
    fontStyle: "italic",
    fontSize: "1.1rem"
  }
};

const ScoreCardContent = ({ question, answer, reason }) => {
  return (
    <>
      <Header as="h4" content={question} attached="top" />
      <Segment attached>
        <p>
          <span style={style.answer}>Your Answer: </span>
          <span style={style.answerText}>{answer}</span> <br />
          {reason && <span style={style.reason}>{reason}</span>}
        </p>
      </Segment>
    </>
  );
};

ScoreCardContent.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  reason: PropTypes.string
};

export default ScoreCardContent;
