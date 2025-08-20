import config from "../config/signUp/signUp.js";
import { signUp } from "../simulation/signUp.js";

export { signUp };

export const options = {
  scenarios: {
    signUpStress: {
      ...config.scenarios.signUpStress,
    },
  },
  thresholds: {
    ...config.thresholds.stressThresholds,
  },
};
