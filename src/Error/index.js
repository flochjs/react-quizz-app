import React from 'react';

import ReloadPageButton from '../ReloadPageButton';

import classes from './style.module.css';

const Error = ({ error }) => (
  <div className={classes.root}>
    <p>{error}</p>
    <ReloadPageButton>Try again</ReloadPageButton>
  </div>
);

export default Error;
