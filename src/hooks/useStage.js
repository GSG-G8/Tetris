import { useState } from 'react';
import { createStage } from '../utils/createStage';

const useStage = () => {
  const [stage, setStage] = useState(createStage());

  return [stage, setStage];
};

export default useStage;
