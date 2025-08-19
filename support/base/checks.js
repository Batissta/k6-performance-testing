import { check } from "k6";

export const checkStatusCode = (response, expectedStatus = 200) => {
  check(response, {
    "Status check": (r) => r.status === expectedStatus,
  });
};
