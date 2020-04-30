import { useState, useCallback } from 'react';

import { randomTetromino } from '../utils/tetrominos';
import { STAGE_WIDTH } from '../utils/createStage';

const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: randomTetromino().shape,
    collided: false,
  });

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

  return [player, setPlayer, updatePlayerPos, resetPlayer];
};

export default usePlayer;
