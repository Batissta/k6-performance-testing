import { environment } from "../../support/base/environment.js";
import { restService } from "../../support/services/restService.js";

const service = new restService(environment.BASE_URI);

export default function signUpRequest(payload) {
  const res = service.post("/signup", payload);
  checkStatusCode(res, 201);
}
