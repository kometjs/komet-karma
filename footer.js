const issuesListRegexp = /^(#?[1-9]+[0-9]*[\s,]+)*$/;

module.exports = (message = '') => {
  if (message.replace(/^#.*$/gm, '').trim()) {
    return { questions: [], processAnswers: (answers, message) => message };
  }

  return {
    questions: [
      {
        name: 'issues',
        message: 'Close issues:',
        default: '',
        validate: value => (
          issuesListRegexp.test(value) ||
            value.split(/[\s,]+/).map(v => v[0] === '#' ? v.substr(1) : v).map(Number).join(',')
        ),
      },
    ],

    processAnswers({ issues }, message) {
      issues = issues && issues
        .split(/[\s,]+/)
        .map(issue => issue[0] === '#' ? issue : `#${issue}`).join(', ');

      return `
${message.trim()}

# Footer

## Referencing issues
${!issues ? '' : `Closes: ${issues}`}    
    
## Breaking changes
## All breaking changes have to be mentioned with the description of the change, justification and migration notes.
## If you have breaking changes, uncomment next line
# BREAKING CHANGE:

# End Footer
`.trim();
    }
  }
};
