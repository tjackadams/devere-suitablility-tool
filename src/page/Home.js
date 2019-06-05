import React, { useContext } from "react";
import PropTypes from "prop-types";
import {
  mergeStyleSets,
  DefaultPalette,
  Stack,
  Text,
  Link,
  FontWeights
} from "office-ui-fabric-react";

import Winterfell from "../components/Winterfell";
import schema from "../schema.js";
import { ProgressBar } from "../components/Spinners";
import { StoreContext } from "../context/StoreContext";
import { types } from "../context/reducers";

const boldStyle = { root: { fontWeight: FontWeights.semibold } };

const styles = mergeStyleSets({
  root: {
    background: DefaultPalette.white
  },

  item: {
    height: 50,
    width: 960,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: DefaultPalette.white
  },

  title: {
    color: DefaultPalette.white,
    fontWeight: "bold"
  }
});

const Home = () => {
  const { state, dispatch } = useContext(StoreContext);

  console.log("state", state);
  return (
    <Stack className={styles.root}>
      {state.progress.currentValue !== 0 && (
        <ProgressBar
          currentValue={state.progress.currentValue}
          total={state.progress.total}
        />
      )}
      <Stack
        className={styles.root}
        horizontalAlign="center"
        fillVertical
        styles={{ marginTop: "20px" }}
        padding={60}
      >
        <Stack horizontalAlign="center" />
        <Stack.Item
          horizontalAlign="center"
          className={styles.item}
          styles={{
            root: {
              backgroundColor: "#003366"
            }
          }}
        >
          <Text variant="xxLarge" className={styles.title}>
            deVere UK Mortgages
          </Text>
        </Stack.Item>
        <Stack.Item
          horizontalAlign="center"
          className={styles.item}
          styles={{ root: { background: DefaultPalette.white } }}
        >
          <Winterfell
            schema={schema}
            onUpdate={update => {
              dispatch({
                type: types.SET_PROGRESS,
                payload: {
                  currentValue: update.questionsCurrentCount,
                  total: update.questionsTotalCount
                }
              });
            }}
            onSubmit={(questionAnswers, action) => {
              this.props.history.push({
                pathname: "/result",
                state: { answers: questionAnswers }
              });
            }}
            disableSubmit
          />
        </Stack.Item>
      </Stack>
    </Stack>
  );
};

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
};

export default Home;
