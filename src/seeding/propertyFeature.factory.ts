import { setSeederFactory } from "typeorm-extension";
import { PropertyFeature } from "../enities/propertyFeature.entity.js";
import { faker } from "@faker-js/faker/locale/zu_ZA";


export const PropertyFeatureFactory = setSeederFactory(PropertyFeature , (faker) =>{
    const feature = new PropertyFeature();
    feature.area = faker.number.int({ min: 25, max: 2500 });
    feature.bedrooms = faker.number.int({ min: 1, max: 3 });
    feature.bathrooms = faker.number.int({ min: 1, max: 3 });
    feature.parkingSpots = faker.number.int({ min: 1, max: 3 });

    feature.hasSwimmingPool = faker.datatype.boolean();
    feature.hasGarden = faker.datatype.boolean();
    feature.hasBalcony = faker.datatype.boolean();


    return feature;
})