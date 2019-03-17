import React, { PureComponent } from "react";
import { Icon } from "semantic-ui-react";
import { Container, Header, Segment } from "semantic-ui-react";
import { Accordion } from "semantic-ui-react";

import { getAnswers } from "./ScoreCardCalculator";
import ScoreCardContent from "./ScoreCardContent";

const style = {
  container: {
    marginTop: "10vh"
  },
  header: {
    backgroundColor: "#003366"
  },
  title: {
    color: "#FFFFFF"
  }
};

const ScoreCard = ({ answers }) => {
  console.log("answers", answers);

  let result;
  let icon;
  let iconColor;
  let headerText;

  const errors = getAnswers(answers, "Error");
  if (errors.length > 0) {
    result = errors;
    icon = "question circle outline";
    iconColor = "red";
    headerText = "Error";
  } else {
    const warnings = getAnswers(answers, "Warning");
    console.log("warnings", warnings);
    if (warnings.length > 0) {
      result = warnings;
      icon = "warning circle";
      iconColor = "yellow";
      headerText = "Warning";
    } else {
      result = getAnswers(answers, "Ok");
      icon = "check circle";
      iconColor = "green";
      headerText = "Ok";
    }
  }

  return (
    <Container style={style.container}>
      <Segment.Group>
        <Segment>
          <Header as="h2">
            <Icon name={icon} color={iconColor} size="huge" />
            <Header.Content>{headerText}</Header.Content>
          </Header>
        </Segment>
        <Segment>
          <Accordion
            panels={[
              {
                key: "reasons",
                title: "View Reasons",
                content: result.map(a => (
                  <ScoreCardContent
                    key={a.id}
                    question={a.question}
                    answer={a.answer}
                    reason={a.reason}
                  />
                ))
              }
            ]}
          />
        </Segment>
      </Segment.Group>
    </Container>
  );
};

export default ScoreCard;
