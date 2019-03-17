import React from "react";
import PropTypes from "prop-types";
import { Segment } from "semantic-ui-react";

import Footer from "../components/Footer";
import Layout from "../layout";
import { ProgressBar } from "../components/Spinners";
import Winterfell from "../components/Winterfell";

import schema from "../schema.js";

class Home extends React.PureComponent {
  state = {
    questionsCurrentCount: 0,
    questionsTotalCount: 0
  };

  render() {
    return (
      <>
        <Layout title="deVere UK Mortgages">
          <Segment>
            <Winterfell
              schema={schema}
              onUpdate={update => {
                this.setState({
                  questionsCurrentCount: update.questionsCurrentCount,
                  questionsTotalCount: update.questionsTotalCount
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
          </Segment>
          <Segment>
            <ProgressBar
              value={this.state.questionsCurrentCount}
              total={this.state.questionsTotalCount}
              size="tiny"
              color="blue"
            />
          </Segment>
        </Layout>
        <Footer />
      </>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
};

export default Home;
