import { Field,ObjectType } from "@nestjs/graphql";
import { Safari } from "../entities/safari.entity";

@ObjectType()
export class ErrorType{
    @Field()
    message: string

    @Field()
    code?: string;
}

@ObjectType()
export class CreateSafariResponse{
    @Field()
    activation_token: string;

    @Field(()=>ErrorType, {nullable: true})
    error?: ErrorType;
    
}

@ObjectType()
export class ActivationResponse{
    @Field(()=>Safari)
    user:Safari | any;
}

