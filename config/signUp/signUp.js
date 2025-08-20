export default {
  scenarios: {
    signUpLoad: {
      executor: "ramping-vus",
      startVUs: 0,
      stages: [
        { duration: "15s", target: 30 },
        { duration: "3s", target: 100 },
        { duration: "15s", target: 0 },
      ],
      tags: {
        testId: "signUp_load",
        testType: "Load",
      },
      exec: "signUp",
    },

    signUpEndurance: {
      executor: "ramping-vus",
      startVUs: 0,
      stages: [
        { duration: "1m", target: 80 },
        { duration: "3m", target: 80 },
        { duration: "15s", target: 0 },
      ],
      tags: {
        testId: "signUp_endurance",
        testType: "endurance",
      },
      exec: "signUp",
    },

    signUpStress: {
      executor: "ramping-vus",
      startVUs: 0,
      stages: [
        { duration: "30s", target: 100 },
        { duration: "1m", target: 100 },
        { duration: "30s", target: 200 },
        { duration: "1m", target: 200 },
        { duration: "30s", target: 0 },
      ],

      tags: {
        testId: "signUp_stress",
        testType: "stress",
      },
      exec: "signUp",
      startTime: "3m15s",
    },

    signUpSmoke: {
      executor: "constant-vus",
      vus: 2,
      duration: "15s",
      tags: {
        testId: "signUp_smoke",
        testType: "smoke",
      },
      exec: "signUp",
      startTime: "3m15s",
    },
  },
  thresholds: {
    "http_req_failed{testId:signUp_load}": ["rate<0.01"],
    "http_req_duration{testId:signUp_load}": ["p(95)<200"],
    "http_req_duration{testId:signUp_load}": ["avg<200"],

    "http_req_failed{testId:signUp_stress}": ["rate<0.02"],
    "http_req_duration{testId:signUp_stress}": ["p(90)<50"],

    "http_req_failed{testId:signUp_endurance}": ["rate<0.01"],
    "http_req_duration{testId:signUp_endurance}": ["p(95)<400"],

    "http_req_failed{testId:signUp_smoke}": ["rate<0.01"],
    "http_req_duration{testId:signUp_smoke}": ["p(99)<200"],
  },
};
