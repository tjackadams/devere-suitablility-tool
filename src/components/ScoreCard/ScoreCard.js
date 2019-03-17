import React from "react";
import { Icon } from "semantic-ui-react";
import { Container, Header, Segment } from "semantic-ui-react";
import { Accordion } from "semantic-ui-react";

import { getAnswers } from "./ScoreCardCalculator";
import Footer from "../Footer";
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

const ContactInformation = ({ state }) => {
  let text;
  switch (state) {
    case "Ok":
      text =
        "You have a strong case to obtain a UK Ex-pat mortgage, but if you would like to discuss further ";
      break;
    default:
      text = "";
  }

  const contact =
    "Please contact the deVere Mortgage Team on +44 3333449510, or alternatively email us to book in for a free telephone consulatation at mortgages@devere-mortgages.co.uk";

  return <Header as="h4" >
  <Header.Content>
  {text}<br />{contact}
  </Header.Content>
  </Header>;
};

const ScoreCard = ({ answers }) => {
  console.log("answers", answers);

  let result;
  let icon;
  let iconColor;
  let headerText;
  let contactInformation;

  const errors = getAnswers(answers, "Error");
  if (errors.length > 0) {
    result = errors.concat(getAnswers(answers, "Warning"));
    icon = "question circle outline";
    iconColor = "red";
    headerText = "Limited Lenders Available";
    contactInformation = <ContactInformation state="Error" />;
  } else {
    const warnings = getAnswers(answers, "Warning");
    if (warnings.length > 0) {
      result = warnings;
      icon = "warning circle";
      iconColor = "yellow";
      headerText = "Limited Lenders Available";
      contactInformation = <ContactInformation state="Warning" />;
    } else {
      result = getAnswers(answers, "Ok");
      icon = "check circle";
      iconColor = "green";
      headerText = "Strong Case to Proceed";
      contactInformation = <ContactInformation state="Ok" />;
    }
  }

  return (
    <>
      <Container style={style.container}>
        <Segment.Group>
          <Segment>
            <Header as="h2">
              <Icon name={icon} color={iconColor} size="huge" />
              <Header.Content>{headerText}</Header.Content>
            </Header>
          </Segment>
          <Segment textAlign="center">{contactInformation}</Segment>
          <Segment>
            <Accordion
              panels={[
                {
                  key: "reasons",
                  title: `View Reasons (${result.length})`,
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
      <Footer />
    </>
  );
};

export default ScoreCard;
