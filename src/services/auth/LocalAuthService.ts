import { EntityManager } from "@mikro-orm/core";
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";

@Injectable()
export class LocalAuthService extends PassportStrategy(Strategy) {
    constructor(private readonly db: EntityManager) {
        super();
    }

    public validate(username: string, password: string) {
        // TODO: Implement username & password validation.

        return true;
    }
}
