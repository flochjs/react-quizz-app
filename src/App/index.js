import React, { useState, useEffect } from 'react';

import Error from '../Error';
import Loader from '../Loader';
import Quizz from '../Quizz';

import { getQuestions } from '../api';

const App = () => {
  const [questions, setQuestions] = useState();
  const [failedToFetchQuestions, setFailedToFetchQuestions] = useState(false);

  useEffect(() => {
    getQuestions()
      .then(setQuestions)
      .catch(({ message }) => setFailedToFetchQuestions(message));
  }, []);

  if (failedToFetchQuestions) return <Error error={failedToFetchQuestions} />;

  if (!questions) return <Loader />;

  return <Quizz questions={questions} />;
};

export default App;
