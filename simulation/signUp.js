import { group, sleep } from "k6";
import { geradorPayload } from "../data/dynamic/signUpDataFactory";
import { signUpRequest } from "../support/services/requests/signUpRequest";

export function criarUsuario() {
  group("Cadastro de usuário", () => {
    const payload = geradorPayload();
    signUpRequest(payload);
    sleep(1);
  });
}
