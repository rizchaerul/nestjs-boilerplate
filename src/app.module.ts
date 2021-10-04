import { MikroOrmModule } from "@mikro-orm/nestjs";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthController } from "./controllers/AuthController";
import { CatsController } from "./controllers/CatsController";
import { JwtAuthService } from "./services/auth/JwtAuthService";
import { LocalAuthService } from "./services/auth/LocalAuthService";
import { ParseStringPipe } from "./services/pipes/ParseStringPipe";

@Module({
    imports: [
        // To read .env file.
        ConfigModule.forRoot(),

        // https://mikro-orm.io/docs/usage-with-nestjs
        MikroOrmModule.forRoot({
            type: "postgresql",

            entities: [
                process.env["ENTITY_PATH"] ? process.env["ENTITY_PATH"] : "./dist/entities"
            ],
            entitiesTs: [
                "./entities"
            ],

            baseDir: process.cwd(),

            host: process.env["DB_HOST"],
            port: parseInt(process.env["DB_PORT"] ?? "5432"),
            user: process.env["DB_USER"],
            password: process.env["DB_PASSWORD"],
            dbName: process.env["DB_NAME"],

            driverOptions: {
                connection: {
                    // https://stackoverflow.com/questions/61097695/self-signed-certificate-error-during-query-the-heroku-hosted-postgres-database
                    ssl: { rejectUnauthorized: false }
                }
            }
        }),

        PassportModule,

        JwtModule.register({
            secret: process.env["JWT_SECRET"],
            signOptions: { expiresIn: "20s" }
        })
    ],
    controllers: [
        AppController,
        AuthController,
        CatsController
    ],
    providers: [
        AppService,
        ParseStringPipe,
        LocalAuthService,
        JwtAuthService
    ]
})
export class AppModule { }
