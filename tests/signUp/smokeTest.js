import { sleep } from "k6";
import { geradorPayload } from "../../scenarios/signup/data/signUpDataFactory.js";
import { environment } from "../../support/base/environment.js";
import { restService } from "../../support/services/restService.js";
import { checkStatusCode } from "../../support/base/checks.js";
import smokeConfig from "../../scenarios/signup/config/smokeConfig.js";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
  return {
    "./repports/signup.html": htmlReport(data),
  };
}
// export const options = smokeConfig;

const service = new restService(environment.BASE_URI);

export default function () {
  const payload = geradorPayload();
  const res = service.post("/signup", payload);
  checkStatusCode(res, 201);
  sleep(1);
}
