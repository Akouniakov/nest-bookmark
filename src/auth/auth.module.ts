import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
    // HTTP Request
    controllers: [AuthController],
    // Business logic
    providers: [AuthService]
})
export class AuthModule {}