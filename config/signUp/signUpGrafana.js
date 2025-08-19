import enduranceConfig from "./endurance.js";
import loadConfig from "./load.js";
import stressConfig from "./config/stressConfig.js";

export default {
  scenarios: {
    signUpLoad: {
      ...loadConfig.scenarios.signup_load,
      exec: "signUpLoad",
    },
    signUpEndurance: {
      ...enduranceConfig.scenarios.signup_endurance,
      stages: [
        { duration: "1m", target: 30 },
        { duration: "3m", target: 30 },
        { duration: "15s", target: 0 },
      ],
      exec: "signUpEndurance",
    },
    signUpStress: {
      ...stressConfig.scenarios.signup_stress,
      stages: [
        { duration: "30s", target: 40 },
        { duration: "1m", target: 40 },
        { duration: "30s", target: 40 },
        { duration: "1m", target: 40 },
        { duration: "30s", target: 0 },
      ],
      exec: "signUpStress",
      startTime: "3m15s",
    },
  },
  thresholds: {
    http_req_duration: ["p(95)<2000"],
    http_req_failed: ["rate<0.01"],
  },
};
