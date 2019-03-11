const YesNoOptions = [
  {
    text: "Yes",
    value: 1
  },
  {
    text: "No",
    value: 0
  }
];

const schema = {
  classes: {
    form: "login-form",
    question: "form-group form-group-margin",
    input: "form-control",
    controlButton: "btn devere-color pull-right",
    backButton: "btn btn-light pull-left",
    errorMessage: "alert alert-danger",
    buttonBar: "button-bar",
    select: "select-align"
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
        conditions: [
          {
            questionId: "BuyToLetResidential",
            value: "0",
            action: "GOTO",
            target: "btl-age-panel"
          },
          {
            questionId: "BuyToLetResidential",
            value: "1",
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
  questionSets: [
    {
      questionSetId: "btl-resi-set",
      questions: [
        {
          questionId: "BuyToLetResidential",
          question: "Is the purchase for Buy to Let or Residential purposes?",
          input: {
            type: "selectInput",
            required: true,
            options: [
              {
                text: "Buy to Let",
                value: 0
              },
              {
                text: "Residential",
                value: 1
              }
            ]
          }
        }
      ]
    },
    {
      questionSetId: "btl-age-set",
      questions: [
        {
          questionId: "BuyToLetAge",
          question: "Are any of the applicants over the age of 65?",
          input: {
            type: "selectInput",
            required: true,
            options: YesNoOptions
          }
        }
      ]
    },
    {
      questionSetId: "resi-age-set",
      questions: [
        {
          questionId: "ResidentialAge",
          question: "Are any of the applicants over the age of 55?",
          input: {
            type: "selectInput",
            required: true,
            options: YesNoOptions
          }
        }
      ]
    },
    {
      questionSetId: "limited-company-set",
      questions: [
        {
          questionId: "LimitedCompany",
          question: "Are you purchasing within a Limited Company?",
          input: {
            type: "selectInput",
            required: true,
            options: YesNoOptions
          }
        }
      ]
    },
    {
      questionSetId: "uk-bank-account-set",
      questions: [
        {
          questionId: "UKBankAccount",
          question: "Do any of the appliants hold a UK bank account?",
          input: {
            type: "selectInput",
            required: true,
            options: YesNoOptions
          }
        }
      ]
    },
    {
      questionSetId: "uk-passport-set",
      questions: [
        {
          questionId: "UKPassport",
          question: "Do any of the appliants hold a UK British Passport?",
          input: {
            type: "selectInput",
            required: true,
            options: YesNoOptions
          }
        }
      ]
    },
    {
      questionSetId: "eu-passport-set",
      questions: [
        {
          questionId: "EUPassport",
          question: "Do any of the appliants hold a passport within the EU?",
          input: {
            type: "selectInput",
            required: true,
            options: YesNoOptions
          }
        }
      ]
    },
    {
      questionSetId: "uk-credit-set",
      questions: [
        {
          questionId: "UKCredit",
          question: "Do any of the appliants hold a UK credit file?",
          input: {
            type: "selectInput",
            required: true,
            options: [
              ...YesNoOptions,
              {
                text: "Not Sure",
                value: 2
              }
            ]
          }
        }
      ]
    },
    {
      questionSetId: "adverse-credit-set",
      questions: [
        {
          questionId: "AdverseCredit",
          question:
            "Have any of the appliants ever held a CCJ, Default, Missed or late payments,IVA or any Adverse UK history?",
          input: {
            type: "selectInput",
            required: true,
            options: YesNoOptions
          }
        }
      ]
    },
    {
      questionSetId: "employment-set",
      questions: [
        {
          questionId: "Employment",
          question: "Are you self-employed?",
          input: {
            type: "selectInput",
            required: true,
            options: YesNoOptions
          }
        }
      ]
    },
    {
      questionSetId: "employment-books-set",
      questions: [
        {
          questionId: "EmploymentBooks",
          question: "Do you have 2 years books?",
          input: {
            type: "selectInput",
            required: true,
            options: YesNoOptions
          }
        }
      ]
    },
    {
      questionSetId: "currency-set",
      questions: [
        {
          questionId: "Currency",
          question: "What currency are you paid in?",
          input: {
            type: "selectInput",
            required: true,
            options: [
              {
                text: "GBP",
                value: "gbp"
              },
              {
                text: "SWF",
                value: "swf"
              },
              {
                text: "AED",
                value: "aed"
              },
              {
                text: "QR",
                value: "qr"
              },
              {
                text: "EUR",
                value: "eur"
              },
              {
                text: "USD",
                value: "usd"
              },
              {
                text: "Other",
                value: "other"
              }
            ]
          }
        }
      ]
    },
    {
      questionSetId: "first-time-buyer-set",
      questions: [
        {
          questionId: "FirstTimeBuyer",
          question:
            "Does any of the applicants currently own another property worldwide?",
          input: {
            type: "selectInput",
            required: true,
            options: YesNoOptions
          }
        }
      ]
    },
    {
      questionSetId: "additional-funds-set",
      questions: [
        {
          questionId: "AdditionalFunds",
          question:
            "Would you be able to provide a 35% deposit instead of the minimum 25% deposit required?",
          input: {
            type: "selectInput",
            required: true,
            options: YesNoOptions
          }
        }
      ]
    }
  ]
};

export default schema;
