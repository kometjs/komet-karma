const { strictEqual } = require('assert');
const handle = require('../');

suite('test all', () => {
   test('when the message is correct, returns it', () => {
     const res = handle('feat: new feature');
     strictEqual(res.questions.length, 0, 'has no questions');
     strictEqual(res.processAnswers({}, ''), 'feat: new feature');
   });

  test('when the message is correct with scope, returns it', () => {
    const res = handle('chore(package): komet-karma@^0.2.2');
    strictEqual(res.questions.length, 0, 'has no questions');
    strictEqual(res.processAnswers({}, ''), 'chore(package): komet-karma@^0.2.2');
  });

  test('when this is a rebase (and the first message is correct), returns it', () => {
    const message = `
# This is a combination of 2 commits.
# This is the 1st commit message:

feat: some feature

# This is the commit message #2:

feat: some other feature

`;
    const res = handle(message);
    strictEqual(res.questions.length, 0, 'has no questions');
    strictEqual(res.processAnswers({}, ''), message);
  })
});
