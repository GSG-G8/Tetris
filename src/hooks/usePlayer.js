import { useState, useCallback } from 'react';

import { randomTetromino } from '../utils/tetrominos';
import { STAGE_WIDTH } from '../utils/createStage';

const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: randomTetromino().shape,
    collided: false,
  });

  // rotate
  const rotate = (matrix, dir) => {
    // make a row to become a columns
    const rotatedTetro = matrix.map((_, index) =>
      matrix.map((col) => col[index])
    );

    // rotate each row to get a rotated tetro
    if (dir > 0) return rotatedTetro.map((row) => row.reverse()); // clockwise
    return rotatedTetro.reverse();
  };

  // check the collision when we rotate the tetro
  const playerRotate = (stage, dir) => {
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);
    setPlayer(clonedPlayer);
  };

  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer((previous) => ({
      ...previous,
      pos: { x: (previous.pos.x += x), y: (previous.pos.y += y) },
      collided,
    }));
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 + 1, y: 0 },
      tetromino: randomTetromino().shape,
      collided: false,
    });
  }, []);

  return [player, updatePlayerPos, resetPlayer, playerRotate];
};

export default usePlayer;
