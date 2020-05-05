import { useState, useEffect } from 'react';
import { createStage } from '../utils/createStage';

const useStage = (player, resetPLayer) => {
  const [stage, setStage] = useState(createStage());

  useEffect(() => {
    const updateStage = (prevStage) => {
      // Clear the stage from previous render.
      const newStage = prevStage.map((row) =>
        row.map((oneCell) => (oneCell[1] === 'clear' ? [0, 'clear'] : oneCell))
      );

      // Draw the new stage(tetromino)
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? 'merged' : 'clear'}`,
            ];
          }
        });
      });

      // check if we collided
      if (player.collided) {
        resetPLayer();
      }

      return newStage;
    };
    setStage((prev) => updateStage(prev));
  }, [player, resetPLayer]);

  return [stage, setStage];
};

export default useStage;
