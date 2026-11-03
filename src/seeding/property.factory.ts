import { setSeederFactory } from "typeorm-extension";
import { Property } from "../enities/property.entity.js";
import { faker } from "@faker-js/faker/locale/zu_ZA";


export const PropertyFactory = setSeederFactory(Property , (faker) =>{
    const property = new Property();
    property.name = faker.location.street();
    property.description = faker.lorem.sentence();
    property.price = faker.number.int({min : 100000 , max : 1000000});
     
    return property;
})