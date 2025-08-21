import config from "../config/getUsers/getUsers.js";
import { getUsers } from "../simulation/getUsers.js";

export { getUsers };

export const options = {
  scenarios: {
    signUpSmoke: {
      ...config.scenarios.getUsersSmoke,
    },
  },
  thresholds: {
    ...config.thresholds,
  },
};
