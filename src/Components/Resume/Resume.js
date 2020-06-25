import React from 'react';
import ResumeStylesheet from './ResumeStylesheet';

const Resume = () => {
  const classes = ResumeStylesheet();
  return (
    <h1 className={classes.headerStyles}>Resume</h1>
  );
};

export default Resume;