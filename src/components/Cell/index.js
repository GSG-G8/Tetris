import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import { TETROMINOUS } from '../../utils/tetrominos';

const Cell = ({ type }) => {
  if (type) {
    const { color: backgroundColor } = TETROMINOUS[type];
    return (
      <div
        style={{
          width: '25px',
          height: '25px',
          backgroundColor,
        }}
      />
    );
  }
  return (
    <div
      style={{
        width: '25px',
        height: '25px',
        backgroundColor: '#000000',
      }}
    />
  );
};

Cell.propTypes = {
  type: PropTypes.isRequired,
};

export default Cell;
