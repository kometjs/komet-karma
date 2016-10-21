const { strictEqual } = require('assert');
const handle = require('../first-line');

suite('first line', () => {
  test('new feature', () => {
    const res = handle('');
    strictEqual(res.questions.length, 3, 'has 3 questions');

    const { startMessage, firstLine, endMessage } = res.processAnswers(
      { type: 'feat', subject: 'new feature' },
      ''
    );

    strictEqual(startMessage, '');
    strictEqual(firstLine, 'feat: new feature');
    strictEqual(endMessage, '');
  });

  test('new feature with scope', () => {
    const res = handle('');
    strictEqual(res.questions.length, 3, 'has 3 questions');

    const { startMessage, firstLine, endMessage } = res.processAnswers(
      { type: 'feat', scope: 'somescope', subject: 'new feature' },
      ''
    );

    strictEqual(startMessage, '');
    strictEqual(firstLine, 'feat(somescope): new feature');
    strictEqual(endMessage, '');
  });
});
