import { Injectable, NotFoundException } from "@nestjs/common";
import { PhoneEntity } from "./phone.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { PhoneUpdate } from "./dto/updatePhone.dto";
import { CreatePhone } from "./dto/create-phone.dto";
import { ChangeStatePhone } from "./dto/change-state-phone.dto";

@Injectable()
export class PhonesService{
    constructor(
        @InjectRepository(PhoneEntity)
        private phonesRepository: Repository<PhoneEntity>,
    ){}

    async find(){
        const phones = await this.phonesRepository.find();
        return phones;
    }

    async findOne(id: number){
        const Phone = await this.phonesRepository.findOne({where:{id: id}});

        if(!Phone){
            throw new NotFoundException({
                message:'Telefono no encontrado',
                error: 'No encontrado',
            });
        }


        return Phone;
    }

    async create(payload: CreatePhone){
        const newPhone: PhoneEntity = this.phonesRepository.create();
        newPhone.color = payload.color;
        newPhone.brand = payload.brand;
        newPhone.price = payload.price;
        newPhone.processor = payload.processor;
        newPhone.memory = payload.memory;

        return await this.phonesRepository.save(newPhone);
        
    }

    async update(id: number, payload: PhoneUpdate){
        const Phone: PhoneEntity = await this.findOne(id);

        if(!Phone){
            throw new NotFoundException({
                message:'Telefono no encontrado',
                error: 'No encontrado',
            });
        }

        Phone.color = payload.color;
        Phone.brand = payload.brand;
        Phone.price = payload.price;
        Phone.processor = payload.processor;
        Phone.memory = payload.memory;

        return await this.phonesRepository.update(id, Phone);
        
    }

    async changeState(id:number, payload:ChangeStatePhone){
        const Phone:PhoneEntity = await this.findOne(id);

        if(!Phone){
            throw new NotFoundException({
                message:'Telefono no encontrado',
                error: 'No encontrado',
            });
        }
    
        const updatephone:PhoneEntity = { ...Phone, ...payload};
        
        return await this.phonesRepository.update(id, updatephone);
    }

    async delete(id: number){
        const Phone: PhoneEntity = await this.findOne(id);

        if(!Phone){
            throw new NotFoundException({
                message:'Telefono no encontrado',
                error: 'No encontrado',
            });
        }

        return await this.phonesRepository.delete(id,);
        
    }

}


