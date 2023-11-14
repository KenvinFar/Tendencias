import { IsAlpha, IsAlphanumeric, IsCreditCard, IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, Length, MinLength} from "class-validator"


export class ClientUpdateDto{

    @IsOptional()
    @IsNotEmpty()
    @IsAlpha()
    user: string

    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsNotEmpty()
    @IsAlphanumeric()
    password: string

    @MinLength(14)
    @IsCreditCard()
    CreditCard: string

    @IsOptional()
    @IsPhoneNumber('EC')
    @Length(13,13)
    CellPhone: string

}