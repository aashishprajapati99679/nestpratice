// import { runSeeders, type SeederOptions } from "typeorm-extension";
// import { DataSource, type DataSourceOptions } from "typeorm/browser/data-source/index.js";
// import { pgConfig } from "../config/dbConfig.js";
// import { PropertyFactory } from "./property.factory.js";
// import { PropertyFeatureFactory } from "./propertyFeature.factory.js";
// import { UserFactory } from "./user.factory.js";
// import { MainSeeder } from "./main.seeder.js";


// const optionsed : DataSourceOptions & SeederOptions = {
//     ...pgConfig,
//     factories : [PropertyFactory , PropertyFeatureFactory , UserFactory],
//     seeds : [MainSeeder],
// };

// const datasource = new DataSource( optionsed );
// datasource.initialize().then( async () => {
//     await datasource.synchronize(true);
//     await runSeeders(datasource);
//     process.exit();
// })



import "dotenv/config";

import { DataSource, type DataSourceOptions } from "typeorm";
import { runSeeders, type SeederOptions } from "typeorm-extension";

import { pgConfig } from "../config/dbConfig.js";
import { PropertyFactory } from "./property.factory.js";
import { PropertyFeatureFactory } from "./propertyFeature.factory.js";
import { UserFactory } from "./user.factory.js";
import { MainSeeder } from "./main.seeder.js";

const options: DataSourceOptions & SeederOptions = {
    ...pgConfig,
    factories: [
        PropertyFactory,
        PropertyFeatureFactory,
        UserFactory
    ],
    seeds: [MainSeeder],
};

const datasource = new DataSource(options);

async function seed() {
    try {
        await datasource.initialize();

        console.log("Database connected!");

        // Reset existing database tables
        await datasource.dropDatabase();

        // Recreate database tables
        await datasource.synchronize();

        console.log("Database synchronized!");

        // Run seeders
        await runSeeders(datasource);

        console.log("Seeding completed successfully!");

    } catch (error) {
        console.error("Seeding failed:", error);
    } finally {
        if (datasource.isInitialized) {
            await datasource.destroy();
        }
    }
}

seed();
