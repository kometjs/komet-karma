const { strictEqual } = require('assert');
const handle = require('../first-line');

suite('first line', () => {
  test('new feature', () => {
    const res = handle('');
    strictEqual(res.questions.length, 3, 'has 3 questions');

    const { firstLine, anythingElse } = res.processAnswers(
      { type: 'feat', subject: 'new feature' },
      ''
    );

    strictEqual(firstLine, 'feat: new feature');
    strictEqual(anythingElse, '');
  });

  test('new feature with scope', () => {
    const res = handle('');
    strictEqual(res.questions.length, 3, 'has 3 questions');

    const { firstLine, anythingElse } = res.processAnswers(
      { type: 'feat', scope: 'somescope', subject: 'new feature' },
      ''
    );

    strictEqual(firstLine, 'feat(somescope): new feature');
    strictEqual(anythingElse, '');
  });
});
