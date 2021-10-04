import { MikroORM } from "@mikro-orm/core";
import { config } from "dotenv";

config();

const postgresqlOptions = {
    discovery: {
        warnWhenNoEntities: false
    },

    driverOptions: {
        connection: {
            // For heroku db.
            // Reference: https://stackoverflow.com/questions/61097695/self-signed-certificate-error-during-query-the-heroku-hosted-postgres-database
            ssl: { rejectUnauthorized: false }
        }
    },

    host: process.env["DB_HOST"],
    port: process.env["DB_PORT"],
    user: process.env["DB_USER"],
    password: process.env["DB_PASSWORD"],
    type: "postgresql",
    dbName: process.env["DB_NAME"]
};

(async (): Promise<void> => {
    const orm = await MikroORM.init(postgresqlOptions as any);
    const generator = orm.getEntityGenerator();

    const dump = await generator.generate({
        save: true,
        baseDir: process.cwd() + "/entities"
    });

    console.log(dump);
    await orm.close(true);
})();
