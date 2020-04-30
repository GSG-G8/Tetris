import { useState } from 'react';

import { TETROMINOUS, randomTetromino } from '../utils/tetrominos';

const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOUS[0].shape,
    collided: false,
  });
  return [player];
};

export default usePlayer;
