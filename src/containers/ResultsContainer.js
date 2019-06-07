import React, { Fragment, useState, useEffect } from "react";
import {
  mergeStyleSets,
  DefaultPalette,
  Icon,
  Text
} from "office-ui-fabric-react";

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
    marginTop: "8vh"
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
    color: DefaultPalette.white
  }
});

const ResultsContainer = props => {
  const [results, setResults] = useState("results");
  const [header, setHeader] = useState("header");

  useEffect(() => {
    debugger;
    const errors = getAnswers(props.answers, State.Error);
    if (errors.length > 0) {
      setResults([...errors, ...getAnswers(props.answers, State.Warning)]);
      setHeader(getHeader(State.Error));
    }
  }, [props]);

  const getHeader = ({ state }) => {
    switch (state) {
      case State.Error:
        return (
          <Fragment>
            <Icon iconName="Unknown" />
            <Text variant="xxLarge" className={styles.title}>
              Limited Lenders Available
            </Text>
          </Fragment>
        );
      case State.Warning:
        return (
          <Fragment>
            <Icon iconName="Warning" />
            <Text variant="xxLarge" className={styles.title}>
              Limited Lenders Available
            </Text>
          </Fragment>
        );
      case State.OK:
        return (
          <Fragment>
            <Icon iconName="CompletedSolid" />
            <Text variant="xxLarge" className={styles.title}>
              deVere UK Mortgages
            </Text>
          </Fragment>
        );
      default:
        throw new Error("");
    }
  };

  const getAnswers = ({ answers, state }) => {
    const result = Object.keys(answers).map(answer => {
      const questionSet = questions
        .map(q => {
          return q.questions.filter(question => {
            if (question.questionId == answer) {
              return question;
            }
          });
        })
        .reduce((acc, curr) => acc.concat(curr), [])[0];

      const answeredQuestions = questionSet.input.options.map(opt => {
        if (opt.value == answers[answer] && opt.state == state) {
          return {
            id: answer,
            question: questionSet.question,
            answer: opt.text,
            reason: opt.reason
          };
        }
      });

      const filtered = answeredQuestions.filter(aq => {
        return aq !== undefined;
      });

      return filtered[0];
    });

    for (let key in result) {
      if (result[key] === undefined) {
        delete result[key];
      }
    }

    const myResult = [];

    Object.keys(result).map(r => {
      Log.info(result[r]);
      myResult.push(result[r]);
    });

    Log.info(myResult);

    return myResult;
  };

  return <ScoreCard results={results} header={header} />;
};

export default ResultsContainer;
