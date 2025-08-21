import { environment } from "../../base/environment.js";
import { checkStatusCode } from "../../base/checks.js";
import { restService } from "../baseRest.js";

const BASE_URI = __ENV.BASE_URI || environment.BASE_URI_LOCAL;

const service = new restService(BASE_URI);

export default function getUsersRequest() {
  const res = service.get("/usuarios");
  checkStatusCode(res, 200);
  return res;
}
