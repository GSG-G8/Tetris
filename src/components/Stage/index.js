import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import Cell from '../Cell';

const Stage = ({ stage }) => {
  return (
    <div className="stage">
      {stage.map((row) =>
        row.map((oneCell, i) => <Cell key={i} type={oneCell[0]} />)
      )}
    </div>
  );
};

Stage.propTypes = {
  stage: PropTypes.isRequired,
};

export default Stage;
