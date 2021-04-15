import { LEVELS } from "utils/constants";
import { ILevelConfig } from "typings/types";

const complexitySelector = (grade: number | string): ILevelConfig => {
  if (grade <= 4) {
    return LEVELS[+grade + 1];
  } else {
    return LEVELS[0];
  }
};

export default complexitySelector;
