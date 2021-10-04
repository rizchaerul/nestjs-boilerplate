import { EntityManager } from "@mikro-orm/core";
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { BasicStrategy as Strategy } from "passport-http";

@Injectable()
export class BasicAuthService extends PassportStrategy(Strategy) {
    constructor(private readonly db: EntityManager) {
        super();
    }

    public validate(username: string, password: string) {
        // TODO: Implement username & password validation.

        return true;
    }
}
