import React, { useState } from 'react';
import './style.css';

// Custom hooks
import usePlayer from '../../hooks/usePlayer';
import useStage from '../../hooks/useStage';
import useInterval from '../../hooks/useInterval';

// Components
import Stage from '../Stage';
import Display from '../Display';
import StratButton from '../StartButton';
import { createStage } from '../../utils/createStage';

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, resetPlayer, updatePlayerPos] = usePlayer();
  const [stage, setStage] = useStage(player);

  const startGame = () => {
    setStage(createStage());
    resetPlayer();
  };

  const movePlayer = (direction) => {
    updatePlayerPos({ x: direction, y: 0 });
  };

  const drop = () => {
    updatePlayerPos({ x: 0, y: 0, collided: false });
  };

  const dropPlayer = () => {
    drop();
  };

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      }
    }
  };

  useInterval(() => {
    drop();
  }, dropTime);

  return (
    <div className="tetris" onKeyDown={(e) => move(e)}>
      <Stage stage={stage} />
      <aside className="side">
        <div className="side-show">
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <>
              <Display text="Score" />
              <Display text="Rows" />
              <Display text="Level" />
            </>
          )}
        </div>
        <StratButton callback={startGame} />
      </aside>
    </div>
  );
};

export default Tetris;
