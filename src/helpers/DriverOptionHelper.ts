export class DriverOptionHelper {
    public static getDriverOptions(env: string | undefined) {
        const useHeroku = env === "true" ? true : false;
        let driverOptions = undefined;

        if (useHeroku) {
            driverOptions = {
                connection: {
                    // For heroku db.
                    // Reference: https://stackoverflow.com/questions/61097695/self-signed-certificate-error-during-query-the-heroku-hosted-postgres-database
                    ssl: { rejectUnauthorized: false }
                }
            };

            return driverOptions;
        }

        return driverOptions;
    }
}
