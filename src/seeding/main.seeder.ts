import { PropertyType } from '../enities/propertyType.entity.js';
import { Property } from '../enities/property.entity.js';
import { User } from '../enities/user.entity.js';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { faker } from '@faker-js/faker/locale/zh_TW';
import { PropertyFeatureFactory } from './propertyFeature.factory.js';

export class MainSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager,
    ): Promise<any> {

        // Seed Property Types
        const typeRepo = dataSource.getRepository(PropertyType);

        const propertyTypes = await typeRepo.save([
            { value: 'Condo' },
            { value: 'Apartment' },
        ]);

        // Seed Users
        console.log('seeding users...');

        const userFactory = factoryManager.get(User);
        const users = await userFactory.saveMany(10);

        // Seed Properties
        const propertyFactory = factoryManager.get(Property);

        const properties = await Promise.all(
            Array(50).fill('').map(async () => {
                const property = await propertyFactory.make({
                    user: faker.helpers.arrayElement(users),
                    type : faker.helpers.arrayElement(propertyTypes),
                    propertyFeature: await PropertyFeatureFactory.save(),
                });

                return property;
            })
        );

        // Save Properties
        const propertyRepo = dataSource.getRepository(Property);

        await propertyRepo.save(properties);
    }
}