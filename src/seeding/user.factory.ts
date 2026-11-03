import { setSeederFactory } from "typeorm-extension";
import { User } from "../enities/user.entity.js";
import { faker } from "@faker-js/faker/locale/zu_ZA";


export const UserFactory = setSeederFactory(User , (faker) =>{
    const user = new User();
    user.firstName = faker.person.firstName();
    user.lastName = faker.person.lastName();
    user.avatarUrl = faker.image.avatar();
    user.createdAt = faker.date.past();

    return user;
})