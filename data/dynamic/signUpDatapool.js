import faker from "k6/x/faker";

export function geradorPayload() {
  return {
    email:
      faker.person.firstName() + faker.person.lastName() + faker.person.email(),
    password: faker.person.firstName(),
  };
}
