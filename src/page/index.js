import React, { Component } from "react";
import Winterfell from "winterfell";

import schema from "../schema.js";

import Layout from "../layout";
import Summary from "../components/Summary/Summary";

class App extends Component {
  state = {
    isComplete: false
  };
  render() {
    const { isComplete } = this.state;

    const title = isComplete ? "Summary" : "deVere Mortgages";

    return (
      <Layout title={title}>
        {isComplete ? (
          <Summary {...this.state} />
        ) : (
          <Winterfell
            schema={schema}
            onUpdate={questionAnswers => console.log(questionAnswers)}
            onSwitchPanel={panel => console.log(panel)}
            onSubmit={(questionAnswers, action) => {
              var state = Object.assign(this.state, questionAnswers, {
                isComplete: true
              });

              this.setState(state);
            }}
            disableSubmit
          />
        )}
      </Layout>
    );
  }
}

export default App;
