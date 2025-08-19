export default {
  scenarios: {
    smokeTest: {
      executor: "constant-vus",
      vus: 2,
      duration: "15s",
      tags: {
        testId: "SignUp Smoke Test",
        testType: "Smoke",
      },
    },
  },
  thresholds: {
    http_req_duration: ["p(95)<2000"],
    http_req_failed: ["rate<0.01"],
  },
};
