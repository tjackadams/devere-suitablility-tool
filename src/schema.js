import questions from "./questions";

const schema = {
  classes: {
    form: "login-form",
    question: "form-group form-group-margin",
    input: "form-control",
    controlButton: "btn devere-color pull-right",
    backButton: "btn btn-light pull-left",
    errorMessage: "alert alert-danger",
    buttonBar: "button-bar",
    select: "select-text",
    label: "question-label"
  },
  formPanels: [
    {
      index: 1,
      panelId: "start-panel"
    },
    {
      index: 2,
      panelId: "resi-age-panel"
    },
    {
      index: 3,
      panelId: "btl-age-panel"
    },
    {
      index: 4,
      panelId: "limited-company-panel"
    },
    {
      index: 5,
      panelId: "uk-bank-account-panel"
    },
    {
      index: 6,
      panelId: "uk-passport-panel"
    },
    {
      index: 7,
      panelId: "eu-passport-panel"
    },
    {
      index: 8,
      panelId: "uk-credit-panel"
    },
    {
      index: 9,
      panelId: "adverse-credit-panel"
    },
    {
      index: 10,
      panelId: "employment-panel"
    },
    {
      index: 11,
      panelId: "employment-books-panel"
    },
    {
      index: 12,
      panelId: "currency-panel"
    },
    {
      index: 13,
      panelId: "first-time-buyer-panel"
    },
    {
      index: 14,
      panelId: "additional-funds-panel"
    }
  ],
  questionPanels: [
    {
      panelId: "start-panel",
      action: {
        default: {
          action: "GOTO",
          target: "btl-age-panel"
        },
        conditions: [
          {
            questionId: "BuyToLetResidential",
            value: 0,
            action: "GOTO",
            target: "btl-age-panel"
          },
          {
            questionId: "BuyToLetResidential",
            value: 1,
            action: "GOTO",
            target: "resi-age-panel"
          }
        ]
      },
      button: {
        text: "Next",
        disabled: false
      },
      questionSets: [
        {
          index: 1,
          questionSetId: "btl-resi-set"
        }
      ]
    },
    {
      panelId: "btl-age-panel",
      action: {
        default: {
          action: "GOTO",
          target: "limited-company-panel"
        }
      },
      button: {
        text: "Next",
        disabled: false
      },
      questionSets: [
        {
          index: 1,
          questionSetId: "btl-age-set"
        }
      ]
    },
    {
      panelId: "resi-age-panel",
      action: {
        default: {
          action: "GOTO",
          target: "limited-company-panel"
        }
      },
      button: {
        text: "Next",
        disabled: false
      },
      questionSets: [
        {
          index: 1,
          questionSetId: "resi-age-set"
        }
      ]
    },
    {
      panelId: "limited-company-panel",
      action: {
        default: {
          action: "GOTO",
          target: "uk-bank-account-panel"
        }
      },
      button: {
        text: "Next",
        disabled: false
      },
      questionSets: [
        {
          index: 1,
          questionSetId: "limited-company-set"
        }
      ]
    },
    {
      panelId: "uk-bank-account-panel",
      action: {
        default: {
          action: "GOTO",
          target: "uk-passport-panel"
        }
      },
      button: {
        text: "Next",
        disabled: false
      },
      questionSets: [
        {
          index: 1,
          questionSetId: "uk-bank-account-set"
        }
      ]
    },
    {
      panelId: "uk-passport-panel",
      action: {
        default: {
          action: "GOTO",
          target: "uk-credit-panel"
        },
        conditions: [
          {
            questionId: "UKPassport",
            value: 1,
            action: "GOTO",
            target: "uk-credit-panel"
          },
          {
            questionId: "UKPassport",
            value: 0,
            action: "GOTO",
            target: "eu-passport-panel"
          }
        ]
      },
      button: {
        text: "Next",
        disabled: false
      },
      questionSets: [
        {
          index: 1,
          questionSetId: "uk-passport-set"
        }
      ]
    },
    {
      panelId: "eu-passport-panel",
      action: {
        default: {
          action: "GOTO",
          target: "uk-credit-panel"
        }
      },
      button: {
        text: "Next",
        disabled: false
      },
      questionSets: [
        {
          index: 1,
          questionSetId: "eu-passport-set"
        }
      ]
    },
    {
      panelId: "uk-credit-panel",
      action: {
        default: {
          action: "GOTO",
          target: "employment-panel"
        },
        conditions: [
          {
            questionId: "UKCredit",
            value: 1,
            action: "GOTO",
            target: "adverse-credit-panel"
          }
        ]
      },
      button: {
        text: "Next",
        disabled: false
      },
      questionSets: [
        {
          index: 1,
          questionSetId: "uk-credit-set"
        }
      ]
    },
    {
      panelId: "adverse-credit-panel",
      action: {
        default: {
          action: "GOTO",
          target: "employment-panel"
        }
      },
      button: {
        text: "Next",
        disabled: false
      },
      questionSets: [
        {
          index: 1,
          questionSetId: "adverse-credit-set"
        }
      ]
    },
    {
      panelId: "employment-panel",
      action: {
        default: {
          action: "GOTO",
          target: "employment-books-panel"
        },
        conditions: [
          {
            questionId: "Employment",
            value: 1,
            action: "GOTO",
            target: "employment-books-panel"
          },
          {
            questionId: "Employment",
            value: 0,
            action: "GOTO",
            target: "currency-panel"
          }
        ]
      },
      button: {
        text: "Next",
        disabled: false
      },
      questionSets: [
        {
          index: 1,
          questionSetId: "employment-set"
        }
      ]
    },
    {
      panelId: "employment-books-panel",
      action: {
        default: {
          action: "GOTO",
          target: "currency-panel"
        }
      },
      button: {
        text: "Next",
        disabled: false
      },
      questionSets: [
        {
          index: 1,
          questionSetId: "employment-books-set"
        }
      ]
    },
    {
      panelId: "currency-panel",
      action: {
        default: {
          action: "GOTO",
          target: "first-time-buyer-panel"
        }
      },
      button: {
        text: "Next",
        disabled: false
      },
      questionSets: [
        {
          index: 1,
          questionSetId: "currency-set"
        }
      ]
    },
    {
      panelId: "first-time-buyer-panel",
      action: {
        default: {
          action: "GOTO",
          target: "additional-funds-panel"
        }
      },
      button: {
        text: "Next",
        disabled: false
      },
      questionSets: [
        {
          index: 1,
          questionSetId: "first-time-buyer-set"
        }
      ]
    },
    {
      panelId: "additional-funds-panel",
      action: {
        default: {
          action: "SUBMIT"
        }
      },
      button: {
        text: "SUBMIT"
      },
      questionSets: [
        {
          index: 1,
          questionSetId: "additional-funds-set"
        }
      ]
    }
  ],
  questionSets: questions
};

export default schema;
