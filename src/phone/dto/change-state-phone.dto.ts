import { PickType } from "@nestjs/swagger";
import { PhoneDto } from "./phone.dto";



export class ChangeStatePhone extends PickType(PhoneDto, ['color']){
    

}