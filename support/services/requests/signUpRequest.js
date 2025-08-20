import { environment } from "../../base/environment.js";
import { checkStatusCode } from "../../base/checks.js";
import { restService } from "../baseRest.js";

const BASE_URI = __ENV.BASE_URI || environment.BASE_URI_LOCAL;

const service = new restService(BASE_URI);

export default function signUpRequest(payload) {
  const res = service.post("/signup", payload);
  checkStatusCode(res, 201);
  return res;
}
