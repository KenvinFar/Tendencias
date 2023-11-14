import { PickType } from "@nestjs/swagger";
import { ClientDto } from "./client.dto";
import { IsNumber, Min,  } from "class-validator";

export class ChangeStateClient extends PickType(ClientDto, ['email']){
    
    @IsNumber()
    @Min(0)
    age: number;
}