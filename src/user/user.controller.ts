import { Controller, Get } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags('User')
@Controller( 'users')
export class UserController{

   @ApiOperation({description:'Descripcion de usuarios', summary:'datos del usario'})

 @Get('hello-world')
 helloWorld(){
    return 'Hello World';
 }
}