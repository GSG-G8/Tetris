import React, { useState } from 'react';
import './style.css';

// Custom hooks
import usePlayer from '../../hooks/usePlayer';
import useStage from '../../hooks/useStage';

// Components
import Stage from '../Stage';
import Display from '../Display';
import StratButton from '../StartButton';
import { createStage, checkCollision } from '../../utils/createStage';

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage] = useStage(player, resetPlayer);

  const movePlayer = (direction) => {
    if (!checkCollision(player, stage, { x: direction, y: 0 })) {
      updatePlayerPos({ x: direction, y: 0 });
    }
  };

  const startGame = () => {
    setStage(createStage());
    resetPlayer();
    setGameOver(false);
  };

  const drop = () => {
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });console.log('ddd',player.pos)
    } else {
      if (player.pos.y < 1) {
        console.log('Game Over');
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
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
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
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
          <StratButton callback={startGame} />
        </aside>
      </div>
    </div>
  );
};

export default Tetris;
