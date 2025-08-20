import { group, sleep } from "k6";
import { geradorPayload } from "../data/dynamic/signUpDatapool.js";
import signUpRequest from "../support/services/requests/signUpRequest.js";

export function signUp() {
  group("Cadastro de usuário", () => {
    const payload = geradorPayload();
    signUpRequest(payload);
    sleep(1);
  });
}
