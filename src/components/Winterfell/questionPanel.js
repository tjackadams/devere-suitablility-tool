import React from "react";
import * as KeyCodez from "keycodez";

import * as Validation from "./lib/validation";
import * as ErrorMessages from "./lib/errors";

import Button from "./button";
import QuestionSet from "./questionSet";

class QuestionPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      validationErrors: this.props.validationErrors
    };
  }

  handleAnswerValidate(questionId, questionAnswer, validations) {
    if (typeof validations === "undefined" || validations.length === 0) {
      return;
    }

    /*
     * Run the question through its validations and
     * show any error messages if invalid.
     */
    const questionValidationErrors = [];
    validations.forEach(validation => {
      if (
        Validation.validateAnswer(
          questionAnswer,
          validation,
          this.props.questionAnswers
        )
      ) {
        return;
      }

      questionValidationErrors.push({
        type: validation.type,
        message: ErrorMessages.getErrorMessage(validation)
      });
    });

    const validationErrors = Object.assign(this.state.validationErrors, {
      [questionId]: questionValidationErrors
    });

    this.setState({
      validationErrors: validationErrors
    });
  }

  handleMainButtonClick() {
    let action = this.props.action.default;
    const conditions = this.props.action.conditions || [];

    /*
     * We need to get all the question sets for this panel.
     * Collate a list of the question set IDs required
     * and run through the schema to grab the question sets.
     */
    const questionSetIds = this.props.questionSets.map(qS => qS.questionSetId);

    const questionSets = this.props.schema.questionSets.filter(item => {
      return questionSetIds.indexOf(item.questionSetId) > -1;
    });

    /*
     * Get any incorrect fields that need error messages.
     */
    const invalidQuestions = Validation.getQuestionPanelInvalidQuestions(
      questionSets,
      this.props.questionAnswers
    );

    /*
     * If the panel isn't valid...
     */
    // if (Object.keys(invalidQuestions).length > 0) {
    //   const validationErrors = _.mapValues(invalidQuestions, validations => {
    //     return validations.map(validation => {
    //       return {
    //         type: validation.type,
    //         message: ErrorMessages.getErrorMessage(validation)
    //       };
    //     });
    //   });

    //   this.setState({
    //     validationErrors: validationErrors
    //   });
    //   return;
    // }

    /*
     * Panel is valid. So what do we do next?
     * Check our conditions and act upon them, or the default.
     */
    conditions.forEach(condition => {
      const answer = this.props.questionAnswers[condition.questionId];

      action =
        answer == condition.value
          ? {
              action: condition.action,
              target: condition.target
            }
          : action;
    });

    /*
     * Decide which action to take depending on
     * the action decided upon.
     */
    switch (action.action) {
      case "GOTO":
        this.props.onSwitchPanel(action.target);
        break;

      case "SUBMIT":
        this.props.onSubmit(action.target);
        break;
      default:
        throw Error("No action supplied");
    }
  }

  handleBackButtonClick() {
    if (this.props.panelHistory.length == 0) {
      return;
    }

    this.props.onPanelBack();
  }

  handleAnswerChange(questionId, questionAnswer, validations, validateOn) {
    this.props.onAnswerChange(questionId, questionAnswer);

    const validationErrors = Object.assign(this.state.validationErrors, {
      [questionId]: []
    });

    this.setState({
      validationErrors: validationErrors
    });

    if (validateOn === "change") {
      this.handleAnswerValidate(questionId, questionAnswer, validations);
    }
  }

  handleQuestionBlur(questionId, questionAnswer, validations, validateOn) {
    if (validateOn === "blur") {
      this.handleAnswerValidate(questionId, questionAnswer, validations);
    }
  }

  handleInputKeyDown(e) {
    if (KeyCodez[e.keyCode] === "enter") {
      e.preventDefault();
      this.handleMainButtonClick.call(this);
    }
  }

  render() {
    const questionSets = this.props.questionSets.map(questionSetMeta => {
      const questionSet = this.props.schema.questionSets.find(o => {
        return o.questionSetId == questionSetMeta.questionSetId;
      });

      if (!questionSet) {
        return undefined;
      }

      return (
        <QuestionSet
          key={questionSet.questionSetId}
          id={questionSet.questionSetId}
          name={questionSet.name}
          questionSetHeader={questionSet.questionSetHeader}
          questionSetText={questionSet.questionSetText}
          questions={questionSet.questions}
          classes={this.props.classes}
          questionAnswers={this.props.questionAnswers}
          renderError={this.props.renderError}
          renderRequiredAsterisk={this.props.renderRequiredAsterisk}
          validationErrors={this.state.validationErrors}
          onAnswerChange={this.handleAnswerChange.bind(this)}
          onQuestionBlur={this.handleQuestionBlur.bind(this)}
          onKeyDown={this.handleInputKeyDown.bind(this)}
        />
      );
    });

    return (
      <div className={this.props.classes.questionPanel}>
        {typeof this.props.panelHeader !== "undefined" ||
        typeof this.props.panelText !== "undefined" ? (
          <div className={this.props.classes.questionPanelHeaderContainer}>
            {typeof this.props.panelHeader !== "undefined" ? (
              <h3 className={this.props.classes.questionPanelHeaderText}>
                {this.props.panelHeader}
              </h3>
            ) : (
              undefined
            )}
            {typeof this.props.panelText !== "undefined" ? (
              <p className={this.props.classes.questionPanelText}>
                {this.props.panelText}
              </p>
            ) : (
              undefined
            )}
          </div>
        ) : (
          undefined
        )}
        <div className={this.props.classes.questionSets}>{questionSets}</div>
        <div className={this.props.classes.buttonBar}>
          {this.props.panelHistory.length > 1 &&
          !this.props.backButton.disabled ? (
            <Button
              text={this.props.backButton.text || "Back"}
              onClick={this.handleBackButtonClick.bind(this)}
              className={this.props.classes.backButton}
            />
          ) : (
            undefined
          )}
          {!this.props.button.disabled ? (
            <Button
              text={this.props.button.text}
              onClick={this.handleMainButtonClick.bind(this)}
              className={this.props.classes.controlButton}
              primary
            />
          ) : (
            undefined
          )}
        </div>
      </div>
    );
  }
}

QuestionPanel.defaultProps = {
  validationErrors: {},
  schema: {},
  classes: {},
  panelId: undefined,
  panelIndex: undefined,
  panelHeader: undefined,
  panelText: undefined,
  action: {
    default: {},
    conditions: []
  },
  button: {
    text: "Submit"
  },
  backButton: {
    text: "Back"
  },
  questionSets: [],
  questionAnswers: {},
  renderError: undefined,
  renderRequiredAsterisk: undefined,
  onAnswerChange: () => {},
  onSwitchPanel: () => {},
  onPanelBack: () => {},
  panelHistory: []
};

export default QuestionPanel;
