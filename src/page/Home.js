import React from "react";
import { Segment } from "semantic-ui-react";

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
      <Layout title="deVere UK Mortgages">
        <Segment>
          <Winterfell
            schema={schema}
            onUpdate={update => {
              console.log(update);
              this.setState({
                questionsCurrentCount: update.questionsCurrentCount,
                questionsTotalCount: update.questionsTotalCount
              });
            }}
            onSwitchPanel={panel => console.log(panel)}
            onSubmit={(questionAnswers, action) => {
              console.log(questionAnswers);
              console.log("submit!");
            }}
            disableSubmit
          />
        </Segment>
        <Segment>
          <ProgressBar
            value={this.state.questionsCurrentCount}
            total={this.state.questionsTotalCount}
            size="tiny"
          />
        </Segment>
      </Layout>
    );
  }
}

export default Home;
