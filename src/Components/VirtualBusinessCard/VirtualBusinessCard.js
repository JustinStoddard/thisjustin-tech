import React from 'react';
import VirtualBusinessCardStylesheet from './VirtulaBusinessCardStylesheet';

const VirtualBusinessCard = () => {
  const classes = VirtualBusinessCardStylesheet();
  return (
    <h1 className={classes.headerStyles}>Virtual Business Card</h1>
  );
};

export default VirtualBusinessCard;