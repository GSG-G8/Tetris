import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const Display = ({ text }) => <div className="display">{text}</div>;

Display.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Display;
