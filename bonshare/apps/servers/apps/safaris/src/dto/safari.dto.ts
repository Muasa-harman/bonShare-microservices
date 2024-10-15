import {InputType,Field} from "@nestjs/graphql";
import {IsEmail,IsNotEmpty,IsString,MinLength} from 'class-validator'

@InputType()
export class CreateSafariDto{
    @Field()
    @IsNotEmpty({message: 'Name is required. '})
    @IsString({message: 'Name need to be a string.'})
    driver: string;

    @Field()
    @IsNotEmpty({message: 'Date is required. '})
    @IsString({message: 'Date need to be a string.'})
    date: string;

    @Field()
    @IsNotEmpty({message: 'Email is required.'})
    @IsEmail({}, {message: 'Email is invalid.'})
    email: string;

    @Field()
    @IsNotEmpty({message: 'Phone number is required.'})
    phone_number: number

    @Field()
    @IsNotEmpty({message: 'Address is required'})
    departure: string

    @Field()
    @IsNotEmpty({message: 'Address is required'})
    arrival: string

    @Field()
    @IsNotEmpty({message: 'Price is required'})
    price: number

    @Field()
    @IsNotEmpty({message: 'Capacity is required'})
    capacity: number

    @Field()
    @IsNotEmpty({message: 'Capacity is required'})
    images:[] 

    @Field()
    @IsNotEmpty({message: 'Plate number is required'})
    car: string
}

@InputType()
export class ActivationDto{
    @Field()
    @IsNotEmpty({message: 'Activation Token is required.'})
    activationToken: string

    @Field()
    @IsNotEmpty({message: 'Activation Code is required.'})
    activationCode: string;
}