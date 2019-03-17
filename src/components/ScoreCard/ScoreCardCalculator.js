import questions from "../../questions";

function getAnswers(answers, state) {
  const result = Object.keys(answers).map(answer => {
    const questionSet = questions
      .map(q => {
        return q.questions.filter(question => {
          if (question.questionId == answer) {
            return question;
          }
        });
      })
      .reduce((acc, curr) => acc.concat(curr), [])[0];

    const answeredQuestions = questionSet.input.options.map(opt => {
      if (opt.value == answers[answer] && opt.state == state) {
        return {
          id: answer,
          question: questionSet.question,
          answer: opt.text,
          reason: opt.reason
        };
      }
    });

    const filtered = answeredQuestions.filter(aq => {
      return aq !== undefined;
    });

    return filtered[0];
  });

  for (let key in result) {
    if (result[key] === undefined) {
      delete result[key];
    }
  }

  const myResult = [];

  Object.keys(result).map(r => {
    console.log(result[r]);
    myResult.push(result[r]);
  });

  console.log(myResult);

  return myResult;
}

export { getAnswers };
