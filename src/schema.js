import questions from "./questions";
import styles from "./Schema.module.css";

const schema = {
  classes: {
    form: styles.loginForm,
    controlButton: styles.pullRight,
    buttonBar: styles.buttonBar,
  },
  formPanels: [
    {
      index: 1,
      panelId: "start-panel",
    },
    {
      index: 2,
      panelId: "resi-age-panel",
    },
    {
      index: 3,
      panelId: "btl-age-panel",
    },
    {
      index: 4,
      panelId: "country-panel",
    },
    {
      index: 5,
      panelId: "limited-company-panel",
    },
    {
      index: 6,
      panelId: "uk-bank-account-panel",
    },
    {
      index: 7,
      panelId: "uk-passport-panel",
    },
    {
      index: 8,
      panelId: "eu-passport-panel",
    },
    {
      index: 9,
      panelId: "uk-credit-panel",
    },
    {
      index: 10,
      panelId: "adverse-credit-panel",
    },
    {
      index: 11,
      panelId: "employment-panel",
    },
    {
      index: 12,
      panelId: "employment-books-panel",
    },
    {
      index: 13,
      panelId: "currency-panel",
    },
    {
      index: 14,
      panelId: "first-time-buyer-panel",
    },
    {
      index: 15,
      panelId: "additional-funds-panel",
    },
    {
      index: 16,
      panelId: "contact-details-panel",
    },
  ],
  questionPanels: [
    {
      panelId: "start-panel",
      action: {
        default: {
          action: "GOTO",
          target: "btl-age-panel",
        },
        conditions: [
          {
            questionId: "BuyToLetResidential",
            value: 0,
            action: "GOTO",
            target: "btl-age-panel",
          },
          {
            questionId: "BuyToLetResidential",
            value: 1,
            action: "GOTO",
            target: "resi-age-panel",
          },
        ],
      },
      button: {
        text: "Next",
        disabled: false,
      },
      questionSets: [
        {
          index: 1,
          questionSetId: "btl-resi-set",
        },
      ],
    },
    {
      panelId: "btl-age-panel",
      action: {
        default: {
          action: "GOTO",
          target: "country-panel",
        },
      },
      button: {
        text: "Next",
        disabled: false,
      },
      questionSets: [
        {
          index: 1,
          questionSetId: "btl-age-set",
        },
      ],
    },
    {
      panelId: "resi-age-panel",
      action: {
        default: {
          action: "GOTO",
          target: "country-panel",
        },
      },
      button: {
        text: "Next",
        disabled: false,
      },
      questionSets: [
        {
          index: 1,
          questionSetId: "resi-age-set",
        },
      ],
    },
    {
      panelId: "country-panel",
      action: {
        default: {
          action: "GOTO",
          target: "limited-company-panel",
        },
      },
      button: {
        text: "Next",
        disabled: false,
      },
      questionSets: [
        {
          index: 1,
          questionSetId: "country-set",
        },
      ],
    },
    {
      panelId: "limited-company-panel",
      action: {
        default: {
          action: "GOTO",
          target: "uk-bank-account-panel",
        },
      },
      button: {
        text: "Next",
        disabled: false,
      },
      questionSets: [
        {
          index: 1,
          questionSetId: "limited-company-set",
        },
      ],
    },
    {
      panelId: "uk-bank-account-panel",
      action: {
        default: {
          action: "GOTO",
          target: "uk-passport-panel",
        },
      },
      button: {
        text: "Next",
        disabled: false,
      },
      questionSets: [
        {
          index: 1,
          questionSetId: "uk-bank-account-set",
        },
      ],
    },
    {
      panelId: "uk-passport-panel",
      action: {
        default: {
          action: "GOTO",
          target: "uk-credit-panel",
        },
        conditions: [
          {
            questionId: "UKPassport",
            value: 1,
            action: "GOTO",
            target: "uk-credit-panel",
          },
          {
            questionId: "UKPassport",
            value: 0,
            action: "GOTO",
            target: "eu-passport-panel",
          },
        ],
      },
      button: {
        text: "Next",
        disabled: false,
      },
      questionSets: [
        {
          index: 1,
          questionSetId: "uk-passport-set",
        },
      ],
    },
    {
      panelId: "eu-passport-panel",
      action: {
        default: {
          action: "GOTO",
          target: "uk-credit-panel",
        },
      },
      button: {
        text: "Next",
        disabled: false,
      },
      questionSets: [
        {
          index: 1,
          questionSetId: "eu-passport-set",
        },
      ],
    },
    {
      panelId: "uk-credit-panel",
      action: {
        default: {
          action: "GOTO",
          target: "employment-panel",
        },
        conditions: [
          {
            questionId: "UKCredit",
            value: 1,
            action: "GOTO",
            target: "adverse-credit-panel",
          },
        ],
      },
      button: {
        text: "Next",
        disabled: false,
      },
      questionSets: [
        {
          index: 1,
          questionSetId: "uk-credit-set",
        },
      ],
    },
    {
      panelId: "adverse-credit-panel",
      action: {
        default: {
          action: "GOTO",
          target: "employment-panel",
        },
      },
      button: {
        text: "Next",
        disabled: false,
      },
      questionSets: [
        {
          index: 1,
          questionSetId: "adverse-credit-set",
        },
      ],
    },
    {
      panelId: "employment-panel",
      action: {
        default: {
          action: "GOTO",
          target: "employment-books-panel",
        },
        conditions: [
          {
            questionId: "Employment",
            value: 1,
            action: "GOTO",
            target: "employment-books-panel",
          },
          {
            questionId: "Employment",
            value: 0,
            action: "GOTO",
            target: "currency-panel",
          },
        ],
      },
      button: {
        text: "Next",
        disabled: false,
      },
      questionSets: [
        {
          index: 1,
          questionSetId: "employment-set",
        },
      ],
    },
    {
      panelId: "employment-books-panel",
      action: {
        default: {
          action: "GOTO",
          target: "currency-panel",
        },
      },
      button: {
        text: "Next",
        disabled: false,
      },
      questionSets: [
        {
          index: 1,
          questionSetId: "employment-books-set",
        },
      ],
    },
    {
      panelId: "currency-panel",
      action: {
        default: {
          action: "GOTO",
          target: "first-time-buyer-panel",
        },
      },
      button: {
        text: "Next",
        disabled: false,
      },
      questionSets: [
        {
          index: 1,
          questionSetId: "currency-set",
        },
      ],
    },
    {
      panelId: "first-time-buyer-panel",
      action: {
        default: {
          action: "GOTO",
          target: "additional-funds-panel",
        },
      },
      button: {
        text: "Next",
        disabled: false,
      },
      questionSets: [
        {
          index: 1,
          questionSetId: "first-time-buyer-set",
        },
      ],
    },
    {
      panelId: "additional-funds-panel",
      action: {
        default: {
          action: "GOTO",
          target: "contact-details-panel",
        },
      },
      button: {
        text: "Next",
        disabled: false,
      },
      questionSets: [
        {
          index: 1,
          questionSetId: "additional-funds-set",
        },
      ],
    },
    {
      panelId: "contact-details-panel",
      action: {
        default: {
          action: "SUBMIT",
        },
      },
      button: {
        text: "SUBMIT",
      },
      questionSets: [
        {
          index: 1,
          questionSetId: "contact-details-set",
        },
      ],
    },
  ],
  questionSets: questions,
};

export default schema;
