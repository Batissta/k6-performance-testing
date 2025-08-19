// Carga comum: 80.000
// Carga pico: 100.000

// Perfil operacional <= 80.000
// Perfil de carga >= 80.000

// SLA's -> signup
export const signUpThresholdsOperational = {
  http_req_duration: ["p(95)<2000"],
  http_req_failed: ["rate<0.01"],
};

export const signUpThresholdsOnLoad = {
  http_req_duration: ["p(90)<2000"],
  http_req_failed: ["rate<0.015"],
};

// SLA's -> login
export const loginThresholdsOperational = {
  http_req_duration: ["p(95)<2000"],
  http_req_failed: ["rate<0.01"],
};

export const loginThresholdsOnLoad = {
  http_req_duration: ["p(90)<2000"],
  http_req_failed: ["rate<0.015"],
};
