import { Connection, IDatabaseDriver, MikroORM, Options } from "@mikro-orm/core";
import { config } from "dotenv";
import { DriverOptionHelper } from "../src/helpers/DriverOptionHelper";

config();

const postgresqlOptions: Options<IDatabaseDriver<Connection>> = {
    discovery: {
        warnWhenNoEntities: false
    },

    driverOptions: DriverOptionHelper.getDriverOptions(process.env["OPTIONAL_USE_HEROKU"]),

    type: "postgresql",
    host: process.env["DB_HOST"],
    port: parseInt(process.env["DB_PORT"] ?? "5432"),
    user: process.env["DB_USER"],
    password: process.env["DB_PASSWORD"],
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
