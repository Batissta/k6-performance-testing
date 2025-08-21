import { group, sleep } from "k6";
import getUsersRequest from "../support/services/requests/getUsersRequest.js";

export function getUsers() {
  group("Buscando os usuários", () => {
    getUsersRequest();
    sleep(1);
  });
}
