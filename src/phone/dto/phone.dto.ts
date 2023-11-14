import { IsAlpha, IsAlphanumeric, IsEmpty, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from "class-validator"

export class PhoneDto{

    @IsString()
    @IsAlpha()
    @IsOptional()
    color: string

    @IsString()
    brand: string

    @IsNumber()
    @Min(80)
    price: number

    @IsString()
    @IsNotEmpty()
    processor: string

    @IsAlphanumeric()
    @IsNotEmpty()
    memory: string
}