import React, { useContext } from "react";
import PropTypes from "prop-types";
// import { Segment } from "semantic-ui-react";

// import Footer from "../components/Footer";
// import Layout from "../layout";
// import { ProgressBar } from "../components/Spinners";
// import Winterfell from "../components/Winterfell";

// import schema from "../schema.js";
import { Stack, Text, Link, FontWeights } from "office-ui-fabric-react";

import { ProgressBar } from "../components/Spinners";
import { StoreContext } from "../context/StoreContext";
import { types } from "../context/reducers";

const boldStyle = { root: { fontWeight: FontWeights.semibold } };

// class Home extends React.PureComponent {
//   state = {
//     questionsCurrentCount: 0,
//     questionsTotalCount: 0
//   };

//   render() {
//     return (
//       <>
//         <Layout title="deVere UK Mortgages">
//           <Segment>
//             <Winterfell
//               schema={schema}
//               onUpdate={update => {
//                 this.setState({
//                   questionsCurrentCount: update.questionsCurrentCount,
//                   questionsTotalCount: update.questionsTotalCount
//                 });
//               }}
//               onSubmit={(questionAnswers, action) => {
//                 this.props.history.push({
//                   pathname: "/result",
//                   state: { answers: questionAnswers }
//                 });
//               }}
//               disableSubmit
//             />
//           </Segment>
//           <Segment>
//             <ProgressBar
//               value={this.state.questionsCurrentCount}
//               total={this.state.questionsTotalCount}
//               size="tiny"
//               color="blue"
//             />
//           </Segment>
//         </Layout>
//         <Footer />
//       </>
//     );
//   }
// }

const Home = () => {
  const { state, dispatch } = useContext(StoreContext);

  console.log("state", state);
  return (
    <Stack
      horizontalAlign="center"
      verticalAlign="center"
      verticalFill
      styles={{
        root: {
          width: "960px",
          margin: "0 auto",
          textAlign: "center",
          color: "#605e5c"
        }
      }}
      gap={15}
    >
      <button
        onClick={() =>
          dispatch({
            type: types.SET_PROGRESS,
            payload: {
              currentValue: 5,
              total: 15
            }
          })
        }
      >
        Progress
      </button>
      {state.progress.total === 0 && (
        <ProgressBar
          currentValue={state.progress.currentValue}
          total={state.progress.total}
        />
      )}
    </Stack>
  );
};

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
};

export default Home;
