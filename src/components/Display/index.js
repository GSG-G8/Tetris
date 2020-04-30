import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const Display = ({ gameOver, text }) => <div className="display">{text}</div>;

Display.defaultProps = {
  gameOver: false,
};

Display.propTypes = {
  text: PropTypes.string.isRequired,
  gameOver: PropTypes.bool,
};

export default Display;
