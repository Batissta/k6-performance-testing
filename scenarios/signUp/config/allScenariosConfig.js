import enduranceConfig from "./enduranceConfig.js";
import loadConfig from "./loadConfig.js";
import stressConfig from "./stressConfig.js";

export default {
  scenarios: {
    signUpLoad: {
      ...loadConfig.scenarios.signup_load,
      exec: "signUpLoad",
    },
    signUpEndurance: {
      ...enduranceConfig.scenarios.signup_endurance,
      exec: "signUpEndurance",
    },
    signUpStress: {
      ...stressConfig.scenarios.signup_stress,
      exec: "signUpStress",
      startTime: "3m15s",
    },
  },
  thresholds: {
    http_req_duration: ["p(95)<2000"],
    http_req_failed: ["rate<0.01"],
  },
};
