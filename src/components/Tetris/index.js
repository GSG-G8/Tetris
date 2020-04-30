import React from 'react';
import './style.css';
import Stage from '../Stage';
import Display from '../Display';
import StratButton from '../StartButton';

const Tetris = () => {
  return (
    <div className="tetris">
      <Stage />
      <aside className="side">
        <div className="side-show">
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Level" />
        </div>
        <StratButton />
      </aside>
    </div>
  );
};

export default Tetris;
