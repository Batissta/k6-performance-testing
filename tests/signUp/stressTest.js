import { sleep } from "k6";
import { geradorPayload } from "../../scenarios/signup/data/signUpDataFactory.js";
import { environment } from "../../support/base/environment.js";
import { restService } from "../../support/services/restService.js";
import stressConfig from "../../scenarios/signup/config/stressConfig.js";
import { checkStatusCode } from "../../support/base/checks.js";

export const options = stressConfig;

const service = new restService(environment.BASE_URI);

export default function () {
  const payload = geradorPayload();
  const res = service.post("/signup", payload);
  checkStatusCode(res, 201);
  sleep(1);
}
