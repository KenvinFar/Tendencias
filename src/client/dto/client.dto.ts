import { IsAlpha, IsAlphanumeric, IsCreditCard, IsEmail, IsNotEmpty, IsPhoneNumber, Length, MinLength} from "class-validator"


export class ClientDto{

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

    @IsPhoneNumber('EC')
    @Length(13,13)
    CellPhone: string

}