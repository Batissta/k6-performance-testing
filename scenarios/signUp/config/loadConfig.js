export default {
  scenarios: {
    signup_load: {
      executor: "ramping-vus",
      startVUs: 0,
      stages: [
        { duration: "15s", target: 30 },
        { duration: "30s", target: 30 },
        { duration: "15s", target: 0 },
      ],
      tags: {
        testId: "SignUp Load Test",
        testType: "Load",
      },
    },
  },
  thresholds: signUpThresholdsOperational,
};
