import React from "react";
import _ from "lodash";

import { inputTypes, addInputType } from "./inputTypes";
import QuestionPanel from "./questionPanel";

class Winterfell extends React.Component {
  constructor(props) {
    super(props);

    this.formComponent = null;

    this.panelHistory = [];

    var schema = _.extend(
      {
        classes: {},
        formPanels: [],
        questionPanels: [],
        questionSets: []
      },
      props.schema
    );

    schema.formPanels = schema.formPanels.sort((a, b) => a.index > b.index);

    var panelId =
      typeof props.panelId !== "undefined"
        ? props.panelId
        : schema.formPanels.length > 0
        ? schema.formPanels[0].panelId
        : undefined;

    var currentPanel =
      typeof schema !== "undefined" &&
      typeof schema.formPanels !== "undefined" &&
      typeof panelId !== "undefined"
        ? schema.formPanels.find(function(o) {
            return o.panelId == panelId;
          })
        : undefined;

    if (!currentPanel) {
      throw new Error(
        "Winterfell: Could not find initial panel and failed to render."
      );
    }

    const totalQuestions = this.getQuestionTotal(schema);

    this.state = {
      schema: schema,
      currentPanel: currentPanel,
      action: props.action,
      questionAnswers: props.questionAnswers,
      currentQuestion: 0,
      totalQuestions: totalQuestions
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      action: nextProps.action,
      schema: nextProps.schema,
      questionAnswers: nextProps.questionAnswers
    });
  }

  getQuestionTotal = schema => {
    const add = (a, b) => a + b;
    return Object.keys(schema.questionSets)
      .map(qs => {
        return schema.questionSets[qs].questions.length;
      })
      .reduce(add);
  };

  handleAnswerChange(questionId, questionAnswer) {
    var questionAnswers = _.chain(this.state.questionAnswers)
      .set(questionId, questionAnswer)
      .value();

    const currentQuestions = Object.keys(this.state.questionAnswers).length;

    this.setState(
      state => {
        return {
          questionAnswers: questionAnswers,
          currentQuestion: currentQuestions
        };
      },
      this.props.onUpdate.bind(null, {
        questionAnswers,
        currentCount: this.state.currentQuestion,
        totalCount: this.state.totalQuestions
      })
    );
  }

  handleSwitchPanel(panelId, preventHistory) {
    var panel = _.find(this.props.schema.formPanels, {
      panelId: panelId
    });

    if (!panel) {
      throw new Error(
        'Winterfell: Tried to switch to panel "' +
          panelId +
          '", which does not exist.'
      );
    }

    if (!preventHistory) {
      this.panelHistory.push(panel.panelId);
    }

    this.setState(
      {
        currentPanel: panel
      },
      this.props.onSwitchPanel.bind(null, panel)
    );
  }

  handleBackButtonClick() {
    this.panelHistory.pop();

    this.handleSwitchPanel.call(
      this,
      this.panelHistory[this.panelHistory.length - 1],
      true
    );
  }

  handleSubmit(action) {
    if (this.props.disableSubmit) {
      this.props.onSubmit(this.state.questionAnswers, action);
      return;
    }

    /*
     * If we are not disabling the functionality of the form,
     * we need to set the action provided in the form, then submit.
     */
    this.setState(
      {
        action: action
      },
      () => {
        if (!this.formComponent) {
          return;
        }

        this.formComponent.submit();
      }
    );
  }

  render() {
    const currentPanel = this.state.schema.questionPanels.find(function(o) {
      return o.panelId == this.state.currentPanel.panelId;
    });

    return (
      <form
        method={this.props.method}
        encType={this.props.encType}
        action={this.state.action}
        ref={ref => (this.formComponent = ref)}
        className={this.state.schema.classes.form}
      >
        <div className={this.state.schema.classes.questionPanels}>
          <QuestionPanel
            schema={this.state.schema}
            classes={this.state.schema.classes}
            panelId={currentPanel.panelId}
            panelIndex={currentPanel.panelIndex}
            panelHeader={currentPanel.panelHeader}
            panelText={currentPanel.panelText}
            action={currentPanel.action}
            button={currentPanel.button}
            backButton={currentPanel.backButton}
            questionSets={currentPanel.questionSets}
            questionAnswers={this.state.questionAnswers}
            panelHistory={this.panelHistory}
            renderError={this.props.renderError}
            renderRequiredAsterisk={this.props.renderRequiredAsterisk}
            onAnswerChange={this.handleAnswerChange.bind(this)}
            onPanelBack={this.handleBackButtonClick.bind(this)}
            onSwitchPanel={this.handleSwitchPanel.bind(this)}
            onSubmit={this.handleSubmit.bind(this)}
          />
        </div>
      </form>
    );
  }

  componentDidMount() {
    this.panelHistory.push(this.state.currentPanel.panelId);
    this.props.onRender();
  }
}

Winterfell.inputTypes = inputTypes;
Winterfell.errorMessages = require("./lib/errors");
Winterfell.validation = require("./lib/validation");

Winterfell.addInputType = addInputType;
Winterfell.addInputTypes = Winterfell.inputTypes.addInputTypes;

Winterfell.addErrorMessage = Winterfell.errorMessages.addErrorMessage;
Winterfell.addErrorMessages = Winterfell.errorMessages.addErrorMessages;

Winterfell.addValidationMethod = Winterfell.validation.addValidationMethod;
Winterfell.addValidationMethods = Winterfell.validation.addValidationMethods;

Winterfell.defaultProps = {
  questionAnswers: {},
  encType: "application/x-www-form-urlencoded",
  method: "POST",
  action: "",
  panelId: undefined,
  disableSubmit: false,
  renderError: undefined,
  renderRequiredAsterisk: undefined,
  onSubmit: () => {},
  onUpdate: () => {},
  onSwitchPanel: () => {},
  onRender: () => {}
};

export default Winterfell;
