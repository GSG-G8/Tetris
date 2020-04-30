import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const Cell = ({ type }) => <div className="cell" />;

Cell.propTypes = {
  type: PropTypes.isRequired,
};

export default Cell;
