import React, { useState } from 'react';
import './style.css';

// Custom hooks
import usePlayer from '../../hooks/usePlayer';
import useStage from '../../hooks/useStage';

// Components
import Stage from '../Stage';
import Display from '../Display';
import StratButton from '../StartButton';
import { createStage } from '../../utils/createStage';

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, resetPlayer, updatePlayerPos] = usePlayer();
  const [stage, setStage] = useStage(player, resetPlayer);

  const startGame = () => {
    console.log('startGame');
    setStage(createStage());
    resetPlayer();
  };

  const movePlayer = (direction) => {
    updatePlayerPos({ x: direction, y: 0 });
  };

  const drop = () => {
    updatePlayerPos({ x: 0, y: 1, collided: false });
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

  console.log('re-render');

  return (
    <div
      className="tetris-wrapper"
      role="button"
      tabIndex="0"
      onKeyDown={(e) => move(e)}
    >
      <div className="tetris">
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
          <button className="start-button" type="button" onClick={startGame}>
            Start Game
          </button>
          {/* <StratButton onClick={startGame} /> */}
        </aside>
      </div>
    </div>
  );
};

export default Tetris;
