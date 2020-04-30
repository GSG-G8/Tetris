import React from 'react';
import './style.css';
import Cell from '../Cell';
import { createStage } from '../../utils/createStage';

const Stage = () => {
  const divs = createStage(); // temporary
  return (
    <div className="stage">
      {divs.map((row) =>
        row.map((oneCell, i) => <Cell key={i} type={oneCell[0]} />)
      )}
    </div>
  );
};

export default Stage;
