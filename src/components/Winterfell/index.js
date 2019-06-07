import React from "react";
import _ from "lodash";

import * as InputTypes from "./InputTypes";
import * as Validation from "./lib/Validation";
import QuestionPanel from "./QuestionPanel";

class Winterfell extends React.Component {
  constructor(props) {
    super(props);

    this.formComponent = null;

    this.panelHistory = [];

    const schema = _.extend(
      {
        classes: {},
        formPanels: [],
        questionPanels: [],
        questionSets: []
      },
      props.schema
    );

    schema.formPanels = schema.formPanels.sort((a, b) => a.index > b.index);

    const panelId =
      typeof props.panelId !== "undefined"
        ? props.panelId
        : schema.formPanels.length > 0
        ? schema.formPanels[0].panelId
        : undefined;

    const currentPanel =
      typeof schema !== "undefined" &&
      typeof schema.formPanels !== "undefined" &&
      typeof panelId !== "undefined"
        ? _.find(schema.formPanels, panel => panel.panelId == panelId)
        : undefined;

    if (!currentPanel) {
      throw new Error(
        "Winterfell: Could not find initial panel and failed to render."
      );
    }

    const add = (a, b) => a + b;
    const questionsTotalCount = Object.keys(schema.questionSets)
      .map(qs => {
        return schema.questionSets[qs].questions.length;
      })
      .reduce(add);

    this.state = {
      schema: schema,
      currentPanel: currentPanel,
      action: props.action,
      questionAnswers: props.questionAnswers,
      questionsCurrentCount: 0,
      questionsTotalCount: questionsTotalCount,
      preventHandleChange: true
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      action: nextProps.action,
      schema: nextProps.schema,
      questionAnswers: nextProps.questionAnswers
    });
  }

  handleAnswerChange = (questionId, questionAnswer) => {
    const questionAnswers = _.chain(this.state.questionAnswers)
      .set(questionId, questionAnswer)
      .value();

    if (this.state.preventHandleChange) {
      return;
    }

    const questionsCurrentCount = Object.keys(this.state.questionAnswers)
      .length;

    this.setState(
      state => {
        const newCount = Math.min(
          state.questionsCurrentCount,
          questionsCurrentCount
        );
        return {
          questionAnswers: questionAnswers,
          questionsCurrentCount: newCount + 1
        };
      },
      () => {
        this.props.onUpdate({
          questionAnswer,
          questionsCurrentCount: this.state.questionsCurrentCount,
          questionsTotalCount: this.state.questionsTotalCount
        });
      }
    );
  };

  handleSwitchPanel(panelId, preventHistory, preventHandleChange = false) {
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
      state => {
        return {
          preventHandleChange: preventHandleChange,
          currentPanel: panel
        };
      },
      () => {
        this.props.onSwitchPanel(panel);
      }
    );
  }

  handleBackButtonClick = () => {
    this.panelHistory.pop();

    this.handleSwitchPanel.call(
      this,
      this.panelHistory[this.panelHistory.length - 1],
      true,
      true
    );
    this.setState(
      state => {
        return {
          questionsCurrentCount: state.questionsCurrentCount - 1
        };
      },
      () => {
        this.props.onUpdate({
          questionAnswer: undefined,
          questionsCurrentCount: this.state.questionsCurrentCount,
          questionsTotalCount: this.state.questionsTotalCount
        });
      }
    );
  };

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
    var currentPanel = _.find(
      this.state.schema.questionPanels,
      panel => panel.panelId == this.state.currentPanel.panelId
    );

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

Winterfell.inputTypes = InputTypes;
Winterfell.errorMessages = require("./lib/errors");
Winterfell.validation = Validation;

Winterfell.addInputType = Winterfell.inputTypes.addInputType;
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
