import { Controller, Post, UseGuards } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AuthGuard } from "@nestjs/passport";

@Controller("api/auth")
export class AuthController {
    constructor(private readonly jwtService: JwtService) { }

    @Post("/login")
    @UseGuards(AuthGuard("local"))
    public login() {
        // TODO: Implement login.

        return true;
    }
}
