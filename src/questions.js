const LimitChoiceOfLenders =
  "This can limit your choice of lenders depending upon circumstances. We would advise you contact us for a full consultation.";

const questions = [
  {
    questionSetId: "btl-resi-set",
    questions: [
      {
        questionId: "BuyToLetResidential",
        question: "Is the purchase for Buy to Let or Residential purposes?",
        input: {
          type: "selectInput",
          default: 0,
          required: true,
          options: [
            {
              text: "Buy to Let",
              value: 0,
              state: "OK",
              default: true,
            },
            {
              text: "Residential",
              value: 1,
              state: "OK",
            },
            {
              text: "Not Sure",
              value: 2,
              state: "Warning",
              reason: LimitChoiceOfLenders,
            },
          ],
        },
      },
    ],
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
          options: [
            {
              text: "No",
              value: 0,
              state: "OK",
              default: true,
            },
            {
              text: "Yes",
              value: 1,
              state: "Warning",
              reason: LimitChoiceOfLenders,
            },
          ],
        },
      },
    ],
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
          options: [
            {
              text: "No",
              value: 0,
              state: "OK",
            },
            {
              text: "Yes",
              value: 1,
              state: "Warning",
              reason:
                "If the mortgage term extends into retirement, then retirement income would need to be provided to ensure monthly repayments can be met. We would advise you contact us for a full consultation.",
            },
          ],
        },
      },
    ],
  },
  {
    questionSetId: "country-set",
    questions: [
      {
        questionId: "Country",
        question: "In which country do you currently reside?",
        input: {
          type: "selectInput",
          required: true,
          options: [
            {
              text: "China",
              value: "china",
              state: "OK",
            },
            {
              text: "France",
              value: "france",
              state: "OK",
            },
            {
              text: "Hong Kong",
              value: "hongkong",
              state: "OK",
            },
            {
              text: "Japan",
              value: "japan",
              state: "OK"
            },
            {
              text: "Kuwait",
              value: "kuwait",
              state: "OK",
            },
            {
              text: "Netherlands",
              value: "netherlands",
              state: "OK",
            },
            {
              text: "New Zealand",
              value: "newzealand",
              state: "OK",
            },
            {
              text: "Oman",
              value: "oman",
              state: "OK",
            },
            {
              text: "Qatar",
              value: "qatar",
              state: "OK",
            },
            {
              text: "Spain",
              value: "spain",
              state: "OK",
            },
            {
              text: "Switzerland",
              value: "switzerland",
              state: "OK",
            },
            {
              text: "United Arab Emirates",
              value: "uae",
              state: "OK",
            },

            {
              text: "United States of America",
              value: "usa",
              state: "OK",
            },

            {
              text: "Other",
              value: "other",
              state: "Warning",
              reason: LimitChoiceOfLenders,
            },
          ],
        },
      },
    ],
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
          options: [
            {
              text: "No",
              value: 0,
              state: "OK",
              default: true,
            },
            {
              text: "Yes",
              value: 1,
              state: "Warning",
              reason: LimitChoiceOfLenders,
            },
          ],
        },
      },
    ],
  },
  {
    questionSetId: "uk-bank-account-set",
    questions: [
      {
        questionId: "UKBankAccount",
        question: "Do any of the applicants hold a UK bank account?",
        input: {
          type: "selectInput",
          required: true,
          options: [
            {
              text: "Yes",
              value: 1,
              state: "OK",
              default: true,
            },
            {
              text: "No",
              value: 0,
              state: "Error",
              reason:
                "Most lenders require monthly payments to come from  UK mainland bank account. There are lenders that will accept offshore UK bank accounts, but this could have an adverse affect on the offered interest rate. We would advise you contact us for a full consultation.",
            },
            {
              text: "Not Sure",
              value: 2,
              state: "Warning",
              reason: LimitChoiceOfLenders,
            },
          ],
        },
      },
    ],
  },
  {
    questionSetId: "uk-passport-set",
    questions: [
      {
        questionId: "UKPassport",
        question: "Do any of the applicants hold a UK British Passport?",
        input: {
          type: "selectInput",
          required: true,
          options: [
            {
              text: "Yes",
              value: 1,
              state: "OK",
              default: true,
            },
            {
              text: "No",
              value: 0,
              state: "OK",
            },
            {
              text: "Not Sure",
              value: 2,
              state: "Warning",
              reason: LimitChoiceOfLenders,
            },
          ],
        },
      },
    ],
  },
  {
    questionSetId: "eu-passport-set",
    questions: [
      {
        questionId: "EUPassport",
        question: "Do any of the applicants hold a passport within the EU?",
        input: {
          type: "selectInput",
          required: true,
          options: [
            {
              text: "Yes",
              value: 1,
              state: "Warning",
              reason: LimitChoiceOfLenders,
              default: true,
            },
            {
              text: "No",
              value: 0,
              state: "Warning",
              reason: LimitChoiceOfLenders,
            },
          ],
        },
      },
    ],
  },
  {
    questionSetId: "uk-credit-set",
    questions: [
      {
        questionId: "UKCredit",
        question: "Do any of the applicants hold a UK credit file?",
        input: {
          type: "selectInput",
          required: true,
          options: [
            {
              text: "Yes",
              value: 1,
              state: "OK",
              default: true,
            },
            {
              text: "No",
              value: 0,
              state: "Warning",
              reason: LimitChoiceOfLenders,
            },
            {
              text: "Not Sure",
              value: 2,
              state: "Warning",
              reason: LimitChoiceOfLenders,
            },
          ],
        },
      },
    ],
  },
  {
    questionSetId: "adverse-credit-set",
    questions: [
      {
        questionId: "AdverseCredit",
        question:
          "Have any of the applicants ever held a CCJ, Default, Missed or late payments, IVA or any Adverse UK history?",
        input: {
          type: "selectInput",
          required: true,
          options: [
            {
              text: "No",
              value: 0,
              state: "OK",
              default: true,
            },
            {
              text: "Yes",
              value: 1,
              state: "Error",
              reason: LimitChoiceOfLenders,
            },
            {
              text: "Not Sure",
              value: 2,
              state: "Warning",
              reason: LimitChoiceOfLenders,
            },
          ],
        },
      },
    ],
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
          options: [
            {
              text: "No",
              value: 0,
              state: "OK",
              default: true,
            },
            {
              text: "Yes",
              value: 1,
              state: "OK",
            },
          ],
        },
      },
    ],
  },
  {
    questionSetId: "employment-books-set",
    questions: [
      {
        questionId: "EmploymentBooks",
        question: "Do you have at least 2 years audited accounts?",
        input: {
          type: "selectInput",
          required: true,
          options: [
            {
              text: "Yes",
              value: 1,
              state: "OK",
              default: true,
            },
            {
              text: "No",
              value: 0,
              state: "Warning",
              reason: LimitChoiceOfLenders,
            },
          ],
        },
      },
    ],
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
              text: "Great British Pound (GBP)",
              value: "gbp",
              state: "OK",
            },
            {
              text: "Swiss Franc (CHF)",
              value: "chf",
              state: "OK",
            },
            {
              text: "Emirati Dirham (AED)",
              value: "aed",
              state: "OK",
            },
            {
              text: "Qatari Riyal (QAR)",
              value: "qar",
              state: "OK",
            },
            {
              text: "Euro (EUR)",
              value: "eur",
              state: "OK",
            },
            {
              text: "US Dollar (USD)",
              value: "usd",
              state: "OK",
            },
            {
              text: "Japanese Yen (JPY)",
              value: "jpy",
              state: "OK"
            },
            {
              text: "Other",
              value: "other",
              state: "Warning",
              reason: LimitChoiceOfLenders,
            },
          ],
        },
      },
    ],
  },
  {
    questionSetId: "first-time-buyer-set",
    questions: [
      {
        questionId: "FirstTimeBuyer",
        question:
          "Do any of the applicants currently own another property worldwide?",
        input: {
          type: "selectInput",
          required: true,
          options: [
            {
              text: "Yes",
              value: 1,
              state: "OK",
              reason:
                "Regardless of whether this is your first property in the UK for any of the applicants, you will still be subject to the additional Stamp Duty Land Tax charges. The additional charges will still apply if you are married and purchase as a sole applicant first time buyer within the UK, but your spouse currently owns property worldwide.",
              default: true,
            },
            {
              text: "No",
              value: 0,
              state: "OK",
              reason:
                "If this is a Buy to Let property, you will still be subject to Stamp Duty Land Tax charges.",
            },
          ],
        },
      },
    ],
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
          options: [
            {
              text: "Yes",
              value: 1,
              state: "OK",
              reason:
                "Additional lenders and lower rates can be offered, if the deposit is above 35% of the property value. This can be subject to other criteria being met.",
              default: true,
            },
            {
              text: "No",
              value: 0,
              state: "Warning",
              reason:
                "In the unlikely event that the property value falls beneath the purchase price, additional funds would need to be provided.",
            },
          ],
        },
      },
    ],
  },
  {
    questionSetId: "contact-details-set",
    questions: [
      {
        questionId: "AdvisorName",
        question: "Advisors Name",
        input: {
          type: "textInput",
          required: true,
        },
      },
      {
        questionId: "ContactNumber",
        question: "Contact Number",
        input: {
          type: "textInput",
          required: false,
        },
      },
      {
        questionId: "ClientName",
        question: "Clients Name",
        input: {
          type: "textInput",
          required: true,
        },
      },
      {
        questionId: "PreferredDevelopment",
        question: "Preferred Development",
        input: {
          type: "textInput",
          required: true,
        },
      },
      {
        questionId: "CanWeContact",
        question: "Is it OK to be contacted by a Mortgage Advisor?",
        input: {
          type: "checkboxInput",
          required: true,
        },
      },
    ],
  },
];

export default questions;
