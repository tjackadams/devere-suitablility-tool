import React from "react";

import SummaryItem from "./SummaryItem";

const LimitChoiceOfLenders =
  "This can limit your choice of lenders depending upon circumstances. We would advise you contact us for a full consultation.";

const OkToProceed = "Ok to proceed.";

const BuyToLetResidentialMapper = ({ answer }) => {
  const question = "Is the purchase for Buy to Let or Residential purposes?";
  if (answer === 0) {
    return (
      <SummaryItem
        status="Ok"
        question={question}
        answer="Buy to Let"
        message={OkToProceed}
      />
    );
  } else {
    return (
      <SummaryItem
        status="Ok"
        question={question}
        answer="Residential"
        message={OkToProceed}
      />
    );
  }
};

const BuyToLetAgeMapper = ({ answer }) => {
  const question = "Are any of the applicants over the age of 65?";
  if (answer === 0) {
    return (
      <SummaryItem
        status="Ok"
        question={question}
        answer="No"
        message={OkToProceed}
      />
    );
  } else {
    return (
      <SummaryItem
        status="Warning"
        question={question}
        answer="Yes"
        message={LimitChoiceOfLenders}
      />
    );
  }
};

const ResidentialAgeMapper = ({ answer }) => {
  const question = "Are any of the applicants over the age of 55?";
  if (answer === 0) {
    return (
      <SummaryItem
        status="Ok"
        question={question}
        answer="No"
        message={OkToProceed}
      />
    );
  } else {
    return (
      <SummaryItem
        status="Warning"
        question={question}
        answer="If the mortgage term extends into retirement, then retirement income would need to be provided to ensure monthly repayments can be met. We would advise you contact us for a full consultation."
      />
    );
  }
};

const LimitedCompanyMapper = ({ answer }) => {
  const question = "Are you purchasing within a Limited Company?";
  if (answer === 0) {
    return (
      <SummaryItem
        status="Ok"
        question={question}
        answer="No"
        message={OkToProceed}
      />
    );
  } else {
    return (
      <SummaryItem
        status="Warning"
        question={question}
        answer="Yes"
        message={LimitChoiceOfLenders}
      />
    );
  }
};

const UKBankAccountMapper = ({ answer }) => {
  const question = "Do any of the appliants hold a UK bank account?";
  if (answer === 0) {
    return (
      <SummaryItem
        status="Error"
        question={question}
        answer="No"
        message="Most lenders require monthly payments to come from  UK mainland bank account. There are lenders that will accept offshore UK bank accounts, but this could have an adverse affect on the offered interest rate. We would advise you contact us for a full consultation."
      />
    );
  } else {
    return (
      <SummaryItem
        status="Ok"
        question={question}
        answer="Yes"
        message={OkToProceed}
      />
    );
  }
};

const UKPassportMapper = ({ answer }) => {
  const question = "Do any of the appliants hold a UK British Passport?";
  if (answer === 0) {
    return (
      <SummaryItem
        status="Ok"
        question={question}
        answer="No"
        message={OkToProceed}
      />
    );
  } else {
    return (
      <SummaryItem
        status="Ok"
        question={question}
        answer="Yes"
        message={OkToProceed}
      />
    );
  }
};

const EUPassportMapper = ({ answer }) => {
  const question = "Do any of the appliants hold a passport within the EU?";
  if (answer === 0) {
    return (
      <SummaryItem
        status="Warning"
        question={question}
        answer="No"
        message={LimitChoiceOfLenders}
      />
    );
  } else {
    return (
      <SummaryItem
        status="Warning"
        question={question}
        answer="Yes"
        message={LimitChoiceOfLenders}
      />
    );
  }
};

const UKCreditMapper = ({ answer }) => {
  const question = "Do any of the appliants hold a UK credit file?";
  if (answer === 0) {
    return (
      <SummaryItem
        status="Warning"
        question={question}
        answer="No"
        message={LimitChoiceOfLenders}
      />
    );
  } else {
    return (
      <SummaryItem
        status="Ok"
        question={question}
        answer="Yes"
        message={OkToProceed}
      />
    );
  }
};

const AdverseCreditMapper = ({ answer }) => {
  const question =
    "Have any of the appliants ever held a CCJ, Default, Missed or late payments, IVA or any Adverse UK history?";
  if (answer === 0) {
    return (
      <SummaryItem
        status="Ok"
        question={question}
        answer="No"
        message={OkToProceed}
      />
    );
  } else {
    return (
      <SummaryItem
        status="Error"
        question={question}
        answer="Yes"
        message={LimitChoiceOfLenders}
      />
    );
  }
};

const SelfEmployedMapper = ({ answer }) => {
  const question = "Are you self-employed?";
  if (answer === 0) {
    return (
      <SummaryItem
        status="Ok"
        question={question}
        answer="No"
        message={OkToProceed}
      />
    );
  } else {
    return (
      <SummaryItem
        status="Ok"
        question={question}
        answer="Yes"
        message={OkToProceed}
      />
    );
  }
};

const EmploymentBooksMapper = ({ answer }) => {
  const question = "Do you have 2 years books?";
  if (answer === 0) {
    return (
      <SummaryItem
        status="Warning"
        question={question}
        answer="No"
        message={OkToProceed}
      />
    );
  } else {
    return (
      <SummaryItem
        status="Ok"
        question={question}
        answer="Yes"
        message={OkToProceed}
      />
    );
  }
};

const CurrencyMapper = ({ answer }) => {
  const question = "What currency are you paid in?";
  const getFriendlyName = ({ answer }) => {
    switch (answer) {
      case "gbp":
        return "GBP;";
      case "swf":
        return "SWF";
      case "aed":
        return "AED";
      case "qr":
        return "QR";
      case "eur":
        return "EUR";
      case "usd":
        return "USD";
      default:
        return "GBP";
    }
  };
  if (answer === "other") {
    return (
      <SummaryItem
        status="Warning"
        question={question}
        answer="Other"
        message={LimitChoiceOfLenders}
      />
    );
  } else {
    return (
      <SummaryItem
        status="Ok"
        question={question}
        answer={getFriendlyName(answer)}
        message={OkToProceed}
      />
    );
  }
};

const FirstTimeBuyerMapper = ({ answer }) => {
  const question =
    "Does any of the applicants currently own another property worldwide?";
  if (answer === 0) {
    return (
      <SummaryItem
        status="Ok"
        question={question}
        answer="No"
        message="If this is a Buy to Let property, you will still be subject to Stamp Duty Land Tax charges."
      />
    );
  } else {
    return (
      <SummaryItem
        status="Ok"
        question={question}
        answer="Yes"
        message="Regardless of whether this is your first property in the UK, you will still be subject to the additional Stamp Duty Land Tax charges."
      />
    );
  }
};

const AdditionalFundsMapper = ({ answer }) => {
  const question =
    "Would you be able to provide a 35% deposit instead of the minimum 25% deposit required?";
  if (answer === 0) {
    return (
      <SummaryItem
        status="Warning"
        question={question}
        answer="No"
        message="In the unlikely event that the property value falls beneath the purchase price, additional funds would need to be provided."
      />
    );
  } else {
    return (
      <SummaryItem
        status="Ok"
        question={question}
        answer="Yes"
        message="Additional lenders and lower rates can be offered, if the deposit is above 35% of the property value. This can be subject to other criteria being met."
      />
    );
  }
};

export {
  AdditionalFundsMapper,
  AdverseCreditMapper,
  BuyToLetResidentialMapper,
  BuyToLetAgeMapper,
  CurrencyMapper,
  EmploymentBooksMapper,
  EUPassportMapper,
  FirstTimeBuyerMapper,
  LimitedCompanyMapper,
  ResidentialAgeMapper,
  SelfEmployedMapper,
  UKBankAccountMapper,
  UKCreditMapper,
  UKPassportMapper
};
