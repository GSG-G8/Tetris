import { useState } from 'react';

import { randomTetromino } from '../utils/tetrominos';

const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: randomTetromino().shape,
    collided: false,
  });
  return player;
};

export default usePlayer;
