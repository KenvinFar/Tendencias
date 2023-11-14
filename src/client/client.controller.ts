import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { ClientDto } from "./dto/client.dto";
import { ClientUpdateDto } from "./dto/updateClient.dto";
import { ChangeStateClient } from "./dto/change-state-client.dto";

@ApiTags('Client')// nombre del controlador
@Controller('clients')
export class ClientContoller{
    @ApiOperation({summary:'Find Client'})// describe los metodos 
    @Get()
    find(@Query() query: any) {}

    @ApiOperation({summary:'Find One Client'})// describe los metodos 
    @Get(':id')
    findOne(@Param('id') id: number) {}

    @ApiOperation({summary: 'Create Client'})
    @Post()
    create(@Body() body: ClientDto){
        return body;
    }

    @ApiOperation({summary:'Update client'})
    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number
    , @Body() body: ClientUpdateDto){
        return body;
    }
    
    @ApiOperation({summary:'Delete client'})
    
    @ApiOperation({summary:'Udpdate client'})
    @Patch(':id')
    patch(@Param('id', ParseIntPipe) id: number
    , @Body() payload: ChangeStateClient){
        return payload;
    }

    @ApiOperation({summary:'Delete client'})
    @Delete(':id')
    delete(@Param('id') id:number){}

}