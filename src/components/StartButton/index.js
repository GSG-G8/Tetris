import React from 'react';
import PropTypes from 'prop-types';

const StartButton = ({ callback }) => <div>Start Game</div>;

StartButton.propTypes = {
  callback: PropTypes.isRequired,
};

export default StartButton;
