module.exports = (message = '') => {
  if (message.replace(/^#.*$/gm, '').trim()) {
    return { questions: [], processAnswers: (answers, message) => message };
  }

  return {
    questions: [],

    processAnswers(answers, message) {
      return `
${message.trim()}

# Body
## uses the imperative, present tense: “change” not “changed” nor “changes”
## includes motivation for the change and contrasts with previous behavior


# End body
`.trim();
    }
  }
}
