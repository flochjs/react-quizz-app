/* eslint-disable camelcase */

const BASE_URL = 'https://quizapi.io/api/v1/questions';
const API_KEY = 'i0AJK1pkvpVFRAmkdFhpOKY4M9knJbKInKELE5jG';
const CATEGORY = 'Linux';
const QUESTION_NB = 10;

const makeAnswers = (answers = {}) =>
  Object.keys(answers).reduce(
    (acc, answer) =>
      answers[answer] !== null ? [...acc, answers[answer]] : acc,
    [],
  );
const makeCorrectAnswers = (answers = {}) =>
  Object.keys(answers).reduce(
    (acc, answer, i) => (answers[answer] === 'true' ? [...acc, i] : acc),
    [],
  );

const makeQuestions = (questions) =>
  questions.reduce(
    (acc, { multiple_correct_answers, question, answers, correct_answers }) => {
      const isMultiple = multiple_correct_answers === 'true';

      return [
        ...acc,
        {
          isMultiple,
          ask: isMultiple
            ? `${question} (multiple answers possible)`
            : question,
          answers: makeAnswers(answers),
          correctAnswers: makeCorrectAnswers(correct_answers),
        },
      ];
    },
    [],
  );

export const getQuestions = () =>
  fetch(
    `${BASE_URL}?apiKey=${API_KEY}&category=${CATEGORY}&limit=${QUESTION_NB}`,
  )
    .then((response) => response.json())
    .then(makeQuestions);
