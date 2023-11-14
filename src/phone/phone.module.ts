import { Module } from "@nestjs/common";
import { PhoneController } from "./phone.controller";
import { PhonesService } from "./phone.service";
import { PhoneEntity } from "./phone.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([PhoneEntity])],
    controllers: [PhoneController],
    providers:[PhonesService]
})
export class PhoneModule {
}


