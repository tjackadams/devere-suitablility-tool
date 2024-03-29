import React, { useContext, Fragment } from "react";
import PropTypes from "prop-types";
import {
  mergeStyleSets,
  DefaultPalette,
  Dropdown,
  Stack,
  Text
} from "office-ui-fabric-react";

import schema from "../schema.js";

import Footer from "../components/Footer";
import { ProgressBar } from "../components/Progress";
import { StoreContext } from "../context/StoreContext";
import { types } from "../context/reducers";

import Winterfell from "../components/Winterfell";

import Log from "../Log";

const styles = mergeStyleSets({
  container: {
    width: "100%",
  },

  stackContainer: {
    width: "100%",
    marginTop: "8vh",
  },

  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  titleItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#003366",
    padding: "20px",
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
    borderBottomRightRadius: "2px",
  },

  title: {
    color: DefaultPalette.white,
  },
});

Winterfell.addInputType("myDropdown", Dropdown);

const Home = (props) => {
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
        <Stack
          className={styles.stackContainer}
          tokens={{ maxWidth: 960, padding: 10 }}
        >
          <Stack.Item className={styles.titleItem}>
            <Text variant="xxLarge" className={styles.title}>
              deVere UK Properties Expat Mortgage Suitability
            </Text>
          </Stack.Item>
          <Stack.Item className={styles.contentItem}>
            <Winterfell
              schema={schema}
              onUpdate={(update) => {
                Log.trace("Winterfell update: ", update);
                dispatch({
                  type: types.SET_PROGRESS,
                  payload: {
                    currentValue: update.currentCount,
                    total: update.totalCount,
                  },
                });
              }}
              onSubmit={(questionAnswers, action) => {
                dispatch({
                  type: types.SET_ANSWERS,
                  payload: questionAnswers,
                });
                props.history.push({
                  pathname: "/result",
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
