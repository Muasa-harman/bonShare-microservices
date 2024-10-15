import {ObjectType,Field,Directive} from "@nestjs/graphql";

@ObjectType()
@Directive('@key(fields: "id")')

export class Avatar{
    @Field()
    id:string
    @Field()
    public_id: string;

    @Field()
    url: string;

    @Field()
    userId:string;
}

@ObjectType()
export class Safari{
    @Field()
    id:string

    @Field()
    driver: string

    @Field()
    email:string

    @Field()
    phone_number: number

    @Field({nullable: true})
    departure?: string;

    @Field({nullable: true})
    arrival?:string

    @Field()
    capacity: number;

    @Field(()=> Avatar,{nullable: true})
    avatar?: Avatar | null;

    @Field()
    role: string;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt:Date;
}

