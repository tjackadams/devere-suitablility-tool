import React from "react";

import {
  AdditionalFundsMapper,
  AdverseCreditMapper,
  BuyToLetResidentialMapper,
  BuyToLetAgeMapper,
  EmploymentBooksMapper,
  EUPassportMapper,
  FirstTimeBuyerMapper,
  LimitedCompanyMapper,
  ResidentialAgeMapper,
  UKBankAccountMapper,
  UKCreditMapper,
  UKPassportMapper,
  SelfEmployedMapper
} from "./SummaryMapper";

const Summary = props => {
  console.log(props);
  const { isComplete, ...rest } = props;
  return (
    <div
      className="container"
      style={{
        paddingTop: "1rem",
        paddingBottom: "1rem"
      }}
    >
      {Object.keys(rest).map(item => {
        if (item === "BuyToLetResidential") {
          return <BuyToLetResidentialMapper key={item} answer={rest[item]} />;
        }
        if (item === "BuyToLetAge") {
          return <BuyToLetAgeMapper key={item} answer={rest[item]} />;
        }
        if (item === "ResidentialAge") {
          return <ResidentialAgeMapper key={item} answer={rest[item]} />;
        }
        if (item === "LimitedCompany") {
          return <LimitedCompanyMapper key={item} answer={rest[item]} />;
        }
        if (item === "UKBankAccount") {
          return <UKBankAccountMapper key={item} answer={rest[item]} />;
        }
        if (item === "UKPassport") {
          return <UKPassportMapper key={item} answer={rest[item]} />;
        }
        if (item === "EUPassport") {
          return <EUPassportMapper key={item} answer={rest[item]} />;
        }
        if (item === "UKCredit") {
          return <UKCreditMapper key={item} answer={rest[item]} />;
        }
        if (item === "AdverseCredit") {
          return <AdverseCreditMapper key={item} answer={rest[item]} />;
        }
        if (item === "SelfEmployed") {
          return <SelfEmployedMapper key={item} answer={rest[item]} />;
        }
        if (item === "EmploymentBooks") {
          return <EmploymentBooksMapper key={item} answer={rest[item]} />;
        }
        if (item === "FirstTimeBuyer") {
          return <FirstTimeBuyerMapper key={item} answer={rest[item]} />;
        }
        if (item === "AdditionalFunds") {
          return <AdditionalFundsMapper key={item} answer={rest[item]} />;
        }
        return null;
      })}
      <div className="row" style={{ marginTop: "2rem" }}>
        <div className="col-12" style={{ display: "inline-flex" }}>
          <h6 className="text-center">
            <strong>
              If you require any further information or would like to discuss
              your mortgage options, please contact the deVere Mortgage Team on
              +44 3333449510, or alternatively email us at
              <a href="mailto:mortgages@devere-mortgages.co.uk">
                mortgages@devere-mortgages.co.uk
              </a>
            </strong>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Summary;
