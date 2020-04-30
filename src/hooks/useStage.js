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
    };
    setStage((prev) => updateStage(prev));
  }, []);

  return [stage, setStage];
};

export default useStage;
