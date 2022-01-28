import React, { useState } from 'react';

import classes from './style.module.css';

const containSameAnswers = (selectedAnswers, correctAnswers) =>
  selectedAnswers.every((key) => correctAnswers.includes(parseInt(key, 10)));

const areSelectedAnswersCorrect = (selectedAnswers, correctAnswers) =>
  selectedAnswers.length !== correctAnswers.length
    ? false
    : containSameAnswers(selectedAnswers, correctAnswers);

const Question = ({
  ask,
  isMultiple,
  answers,
  correctAnswers,
  goToNextQuestion,
  incrementScore,
}) => {
  const [userAnswers, setUserAnswers] = useState({});

  const handleChange = ({ target: { checked, value } }) => {
    const previousState = isMultiple ? userAnswers : {};
    setUserAnswers({ ...previousState, [value]: checked });
  };

  const handleSubmit = () => {
    const selectedAnswers = Object.keys(userAnswers).filter(
      (answer) => userAnswers[answer],
    );

    if (!selectedAnswers.length) {
      alert('Select an answer before submitting'); // eslint-disable-line no-alert
      return;
    }

    if (areSelectedAnswersCorrect(selectedAnswers, correctAnswers))
      incrementScore();

    setUserAnswers({});
    goToNextQuestion();
  };

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <h2 className={classes.ask}>{ask}</h2>
        <ul className={classes.answers}>
          {answers.map((answer, i) => {
            const id = `answer-${i}`;

            return (
              <li className={classes.answer} key={i}>
                <input
                  className={classes.input}
                  id={id}
                  value={i}
                  checked={!!userAnswers[i]}
                  type={isMultiple ? 'checkbox' : 'radio'}
                  name="answer"
                  onChange={handleChange}
                />
                <label className={classes.label} htmlFor={id}>
                  {answer}
                </label>
              </li>
            );
          })}
        </ul>
      </div>
      <button className={classes.submit} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Question;
