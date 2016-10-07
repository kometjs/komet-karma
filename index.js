const firstLine = require('./first-line');
const body = require('./body');
const footer = require('./footer');

module.exports = (message = '') => {
  const _firstLine = firstLine(message);
  const _body = body(message);
  const _footer = footer(message);

  return {
    questions: _firstLine.questions.concat(_body.questions, _footer.questions),
    processAnswers(answers, message) {
      const { firstLine, anythingElse } = _firstLine.processAnswers(answers, message);
      message = firstLine;
      message = _body.processAnswers(answers, message);
      message = _footer.processAnswers(answers, message);
      return message + (anythingElse ? `\n${anythingElse}` : '');
    },
  };
};
