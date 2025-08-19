// thresholds
const signUpThresholdsOperational = {
  http_req_duration: ["p(95)<2000"],
  http_req_failed: ["rate<0.01"],
};

const signUpThresholdsOnLoad = {
  http_req_duration: ["p(90)<2000"],
  http_req_failed: ["rate<0.015"],
};
