import { group, sleep } from "k6";
import { Counter } from "k6/metrics";
import { geradorPayload } from "../data/dynamic/signUpDatapool.js";
import signUpRequest from "../support/services/requests/signUpRequest.js";

const TestActive = new Counter("test_active");

export function signUp() {
  group("Cadastro de usuário", () => {
    TestActive.add(1);
    const payload = geradorPayload();
    signUpRequest(payload);
    sleep(1);
  });
}
