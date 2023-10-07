const defaultList = [
  {
    id: crypto.randomUUID(),
    word: "juxtapose",
    definition: "To place side by side, especially for contrast or comparison.",
    example: null,
  },
  {
    id: crypto.randomUUID(),
    word: "defenestrate",
    definition:
      "To eject or throw (someone or something) from a window.",
    example: null,
  },
  {
    id: crypto.randomUUID(),
    word: "histrionics",
    definition:
      "Exaggerated, overemotional behaviour, especially when calculated to elicit a response; melodramatics.",
    example: "I'm tired of Mary's histrionics.",
  },
  {
    id: crypto.randomUUID(),
    word: "swarthy",
    definition: "Of a dark color, complexion, or cast.",
    example: "a dark-eyed, swarthy young man with killer looks",
  },
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function generateQuestion(words) {
  let wordsCopy = [...words];
  const question = {
    type: null,
    correctAnswer: null,
    wrongAnswers: [],
    allAnswers: [],
    done: false,
  };

  question.type = getRandomInt(2) > 0 ? "word" : "definition";
  question.correctAnswer = wordsCopy.splice(getRandomInt(wordsCopy.length), 1)[0];
  for (let i = 0; i < 3; i++) {
    question.wrongAnswers.push(
      wordsCopy.splice(getRandomInt(wordsCopy.length), 1)[0]
    );
  }
  question.allAnswers.push(question.correctAnswer)
  question.wrongAnswers.forEach(answer => {
    question.allAnswers.push(answer)
  })
  shuffle(question.allAnswers)

  return question;
}

export { defaultList, generateQuestion };
