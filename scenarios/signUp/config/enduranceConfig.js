export default {
  scenarios: {
    signup_endurance: {
      executor: "ramping-vus",
      startVUs: 0,
      stages: [
        { duration: "1m", target: 100 }, // Ramp Up
        { duration: "3m", target: 100 }, // Steady State
        { duration: "15s", target: 0 }, // Ramp Down
      ],
      tags: {
        testId: "SignUp Endurance Test",
        testType: "Endurance",
      },
    },
  },
  thresholds: {
    http_req_duration: ["p(95)<2000"],
    http_req_failed: ["rate<0.01"],
  },
};
