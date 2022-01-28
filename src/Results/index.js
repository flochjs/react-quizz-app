import React from 'react';

import ReloadPageButton from '../ReloadPageButton';

import classes from './style.module.css';

const Results = ({ score, quizzSize }) => (
  <div className={classes.root}>
    <p>
      You answered correctly at {score}/{quizzSize} questions.
    </p>
    <ReloadPageButton>Try another test</ReloadPageButton>
  </div>
);

export default Results;
