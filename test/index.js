const { strictEqual } = require('assert');
const handle = require('../');

suite('test all', () => {
   test('when the message is correct, returns it', () => {
     const res = handle('feat: new feature');
     strictEqual(res.questions.length, 0, 'has no questions');
     strictEqual(res.processAnswers({}, ''), 'feat: new feature', 'returns the same message');
   });
});
