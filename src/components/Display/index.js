import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const Display = ({ gameOver, text }) => <div className="display">{text}</div>;

Display.propTypes = {
  text: PropTypes.string.isRequired,
  gameOver: PropTypes.bool.isRequired,
};

export default Display;
