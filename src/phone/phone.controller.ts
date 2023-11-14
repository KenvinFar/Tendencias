import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { PhoneDto } from "./dto/phone.dto";
import { PhoneUpdate } from "./dto/updatePhone.dto";
import { ChangeStatePhone } from "./dto/change-state-phone.dto";
import { PhonesService } from "./phone.service";

@ApiTags('Phone')
@Controller('phone')
export class PhoneController {

    constructor(private readonly phonesService: PhonesService) {
    }

    @ApiOperation({summary:'Find Phone'})// describe los metodos 
    @Get()
    async find(@Query() query: any) {
        const response = await this.phonesService.find();
        return response;
    }

    @ApiOperation({summary:'Find One Phone'})// describe los metodos 
    @Get(':id')
    async findOne(@Param('id') id: number) {
        const response = await this.phonesService.findOne(id);
        return response;
        
    }

    @ApiOperation({summary: 'Create Phone'})
    @Post()
    async create(@Body() payload: PhoneDto){
        const response = await this.phonesService.create(payload);
        return response;
    }

    @ApiOperation({summary:'Update Phone'})
    @Put(':id')
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() payload: PhoneUpdate){
        const response = await this.phonesService.update(id, payload);
        return response;
    }
    
    
    @ApiOperation({summary:'Udpdate Phone'})
    @Patch(':id')
    async chageState(
        @Param('id', ParseIntPipe) id: number,
        @Body() payload: ChangeStatePhone){
        const response = await this.phonesService.changeState(id,payload);
        return response;
    }

    @ApiOperation({summary:'Delete Phone'})
    @Delete(':id')
    delete(@Param('id') id:number){}

}