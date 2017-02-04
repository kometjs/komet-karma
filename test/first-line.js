const strictEqual = require('assert').strictEqual;
const handle = require('../lib/first-line');

suite('first line', () => {
  test('new feature', () => {
    const res = handle('');
    strictEqual(res.questions.length, 3, 'has 3 questions');

    const resMessage = res.processAnswers(
      { type: 'feat', subject: 'new feature' },
      ''
    );

    strictEqual(resMessage.startMessage, '');
    strictEqual(resMessage.firstLine, 'feat: new feature');
    strictEqual(resMessage.endMessage, '');
  });

  test('new feature with scope', () => {
    const res = handle('');
    strictEqual(res.questions.length, 3, 'has 3 questions');

    const resMessage = res.processAnswers(
      { type: 'feat', scope: 'somescope', subject: 'new feature' },
      ''
    );

    strictEqual(resMessage.startMessage, '');
    strictEqual(resMessage.firstLine, 'feat(somescope): new feature');
    strictEqual(resMessage.endMessage, '');
  });
});
