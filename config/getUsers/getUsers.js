export default {
  scenarios: {
    getUsersSmoke: {
      executor: "constant-vus",
      vus: 2,
      duration: "15s",
      tags: {
        testId: "getUsers_smoke",
        testType: "smoke",
      },
      exec: "getUsers",
    },
  },
  thresholds: {
    "http_req_failed{testId:getUsers_smoke}": ["rate<0.01"],
    "http_req_duration{testId:getUsers_smoke}": ["p(99)<200"],
  },
};
