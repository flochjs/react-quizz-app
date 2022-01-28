import React, { useState } from 'react';

import Results from '../Results';
import Question from '../Question';

const Quizz = ({ questions }) => {
  const [currentQuestionIdx, setQuestionIdx] = useState(0);
  const [currentScore, setScore] = useState(0);

  const incrementQuestionIdx = () => setQuestionIdx(currentQuestionIdx + 1);
  const incrementScore = () => setScore(currentScore + 1);
  const noMoreQuestion = currentQuestionIdx === questions.length;

  return noMoreQuestion ? (
    <Results score={currentScore} quizzSize={questions.length} />
  ) : (
    <Question
      {...questions[currentQuestionIdx]}
      goToNextQuestion={incrementQuestionIdx}
      incrementScore={incrementScore}
    />
  );
};

export default Quizz;
