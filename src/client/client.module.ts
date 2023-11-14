import { Module } from "@nestjs/common";
import { ClientContoller } from "./client.controller";

@Module({
    controllers: [ClientContoller],
})
export class ClientModule {}