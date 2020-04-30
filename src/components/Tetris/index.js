import React, { useState } from 'react';
import './style.css';

// Custom hooks
import usePlayer from '../../hooks/usePlayer';
import useStage from '../../hooks/useStage';

// Components
import Stage from '../Stage';
import Display from '../Display';
import StratButton from '../StartButton';

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player] = usePlayer();
  const [stage, setStage] = useStage(player);

  console.log('re-render');
  return (
    <div className="tetris">
      <Stage stage={stage} />
      <aside className="side">
        {gameOver ? (
          <Display gameOver={gameOver} text="Game Over" />
        ) : (
          <div className="side-show">
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
        )}
        <StratButton />
      </aside>
    </div>
  );
};

export default Tetris;
