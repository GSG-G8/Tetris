import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const StartButton = ({ callback }) => (
  <button className="start-button" type="button" onClick={callback}>
    Start Game
  </button>
);

StartButton.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default StartButton;
