import config from "../config/signUp/signUp.js";
import { signUp } from "../simulation/signUp.js";

export { signUp };

export const options = {
  scenarios: {
    signUpLoad: {
      ...config.scenarios.signUpLoad,
    },
  },
  thresholds: {
    ...config.thresholds.loadThresholds,
  },
};
