import React, { useContext, Fragment } from "react";
import PropTypes from "prop-types";
import {
  mergeStyleSets,
  DefaultPalette,
  Stack,
  Text
} from "office-ui-fabric-react";

import Winterfell from "../components/Winterfell";
import schema from "../schema.js";

import Footer from "../components/Footer";
import { ProgressBar } from "../components/Progress";
import { StoreContext } from "../context/StoreContext";
import { types } from "../context/reducers";

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

const Home = props => {
  const { state, dispatch } = useContext(StoreContext);

  return (
    <Fragment>
      {state.progress.currentValue > 0 ? (
        <ProgressBar
          currentValue={state.progress.currentValue}
          total={state.progress.total}
        />
      ) : (
        <div style={{ height: "20px" }}> </div>
      )}

      <Stack
        horizontalAlign="center"
        verticalAlign="center"
        className={styles.container}
      >
        <Stack padding={10} maxWidth={960} className={styles.stackContainer}>
          <Stack.Item className={styles.titleItem}>
            <Text variant="xxLarge" className={styles.title}>
              deVere UK Mortgages
            </Text>
          </Stack.Item>
          <Stack.Item className={styles.contentItem}>
            <Winterfell
              schema={schema}
              onUpdate={update => {
                console.log("update", update);
                dispatch({
                  type: types.SET_PROGRESS,
                  payload: {
                    currentValue: update.questionsCurrentCount,
                    total: update.questionsTotalCount
                  }
                });
              }}
              onSubmit={(questionAnswers, action) => {
                props.history.push({
                  pathname: "/result",
                  state: { answers: questionAnswers }
                });
              }}
              disableSubmit
            />
          </Stack.Item>
          <Footer />
        </Stack>
      </Stack>
    </Fragment>
  );
};

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
};

export default Home;
