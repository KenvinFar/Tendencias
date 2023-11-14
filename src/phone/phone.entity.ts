import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity( {name: 'phones'})
export class PhoneEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column({name:'color', type:'varchar', length: '30', nullable: true, comment:'Color del telefono'})
    color: string

    @Column({name:'brand', type:'varchar',length:'30', comment:'Marca del telefono'})
    brand: string

    @Column({name:'price', type:'float', comment:'Precio del telefono'})
    price: number

    @Column({name:'processor', type:'varchar', length:'50', comment:'Procesador del telefono'})
    processor: string

    @Column({name:'memory', type:'varchar', length:'25', comment:'Memoria del telefono'})
    memory: string

}