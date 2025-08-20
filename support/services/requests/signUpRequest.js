import { environment } from "../../base/environment.js";
import { checkStatusCode } from "../../base/checks.js";
import { restService } from "../baseRest.js";

const service = new restService(environment.BASE_URI_DOCKER);

export default function signUpRequest(payload) {
  const res = service.post("/signup", payload);
  checkStatusCode(res, 201);
  return res;
}
