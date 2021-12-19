import React, { useState, useEffect } from "react";
import { mergeStyleSets, Icon, Stack, Text } from "office-ui-fabric-react";

import { ScoreCard } from "../components/ScoreCard";

import questions from "../questions";
import Log from "../Log";

const State = {
  Error: "Error",
  OK: "OK",
  Warning: "Warning"
};

const styles = mergeStyleSets({
  container: {
    width: "100%"
  },

  stackContainer: {
    width: "100%",
    marginTop: "2vh"
  },

  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  titleItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#003366",
    padding: "20px"
  },

  contentItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgb(138, 136, 134)",
    borderBottomLeftRadius: "2px",
    borderBottomRightRadius: "2px"
  },

  title: {
    // color: DefaultPalette.white
  },
  icon: {
    fontSize: "3rem",
    marginRight: "30px",
    top: "0.9rem",
    position: "relative"
  }
});

const ResultsContainer = props => {
  const [results, setResults] = useState([]);
  const [header, setHeader] = useState("header");

  useEffect(() => {
    const errors = getAnswers({ answers: props.answers, state: State.Error });
    if (errors.length > 0) {
      const warnings = getAnswers({
        answers: props.answers,
        state: State.Warning
      });
      setResults([...errors], [...warnings]);
      setHeader(getHeader({ state: State.Error }));
    } else {
      const warnings = getAnswers({
        answers: props.answers,
        state: State.Warning
      });
      if (warnings.length > 0) {
        setResults([...warnings]);
        setHeader(getHeader({ state: State.Warning }));
      } else {
        const ok = getAnswers({ answers: props.answers, state: State.OK });
        setResults([...ok]);
        setHeader(getHeader({ state: State.OK }));
      }
    }
  }, [props]);

  const getHeader = ({ state }) => {
    switch (state) {
      case State.Error:
        return (
          <Stack
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              verticalAlign: "top",
              textAlign: "center",
            }}
            tokens={{ childrenGap: 20 }}
          >
            <Stack.Item
              style={{
                width: "100%",
                display: "flex",
                textAlign: "center",
              }}
            >
              <Icon
                iconName="Unknown"
                className={styles.icon}
                style={{ color: "#a80000" }}
              />
              <Text variant="xxLarge" className={styles.title}>
                Limited Lenders Available
              </Text>
            </Stack.Item>
            <Stack.Item
              style={{
                width: "100%",
                display: "flex",
                textAlign: "center",
              }}
            >
              <Text block variant="smallPlus">
                We advise you speak with a mortgage advisor before proceeding.
              </Text>
            </Stack.Item>
          </Stack>
        );
      case State.Warning:
        return (
          <Stack
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              verticalAlign: "top",
              textAlign: "center",
            }}
            tokens={{ childrenGap: 20 }}
          >
            <Stack.Item
              style={{
                width: "100%",
                display: "flex",
                textAlign: "center",
              }}
            >
              <Icon
                iconName="Warning"
                className={styles.icon}
                style={{ color: "#797673" }}
              />
              <Text variant="xxLarge" className={styles.title}>
                Limited Lenders Available
              </Text>
            </Stack.Item>
            <Stack.Item
              style={{
                width: "100%",
                display: "flex",
                textAlign: "center",
              }}
            >
              <Text block variant="smallPlus">
                We advise you speak with a mortgage advisor before proceeding.
              </Text>
            </Stack.Item>
          </Stack>
        );
      case State.OK:
        return (
          <Stack
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              verticalAlign: "top",
              textAlign: "center",
            }}
            tokens={{ childrenGap: 20 }}
          >
            <Stack.Item
              style={{
                width: "100%",
                display: "flex",
                textAlign: "center",
              }}
            >
              <Icon
                iconName="CompletedSolid"
                className={styles.icon}
                style={{ color: "#107c10" }}
              />
              <Text variant="xxLarge" className={styles.title}>
                Strong Case to Proceed
              </Text>
            </Stack.Item>
            <Stack.Item
              style={{
                width: "100%",
                display: "flex",
                textAlign: "center",
              }}
            >
              <Text variant="smallPlus">
                This is not an agreement in principle. A mortgage advisor can
                obtain you a full agreement in principle with interest rates. A
                mortage advisor will be in contact with you within 24 hours if
                you chose to be contacted.
              </Text>
            </Stack.Item>
          </Stack>
        );
      default:
        throw new Error("");
    }
  };

  const getAnswers = ({ answers, state }) => {
    const result = Object.keys(answers).map((answer) => {
      const questionSet = questions
        .map((q) => {
          return q.questions.filter((question) => {
            if (question.questionId == answer) {
              return question;
            }
          });
        })
        .reduce((acc, curr) => acc.concat(curr), [])[0];

      if (questionSet.input.options) {
        const answeredQuestions = questionSet.input.options.map((opt) => {
          if (opt.value == answers[answer] && opt.state == state) {
            return {
              id: answer,
              question: questionSet.question,
              answer: opt.text,
              reason: opt.reason,
            };
          }
        });

        const filtered = answeredQuestions.filter((aq) => {
          return aq !== undefined;
        });

        return filtered[0];
      }

      return undefined;
    });

    for (let key in result) {
      if (result[key] === undefined) {
        delete result[key];
      }
    }

    const myResult = [];

    Object.keys(result).map((r) => {
      Log.info(result[r]);
      myResult.push(result[r]);
    });

    Log.info(myResult);

    return myResult;
  };

  if (results === undefined) {
    return null;
  }
  return <ScoreCard results={results} header={header} />;
};

export default ResultsContainer;
