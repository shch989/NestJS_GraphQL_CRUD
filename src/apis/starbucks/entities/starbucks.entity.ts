import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Starbucks {
    @Field(() => String)
    id: string

    @Field(() => String)
    name: string

    @Field(() => Int)
    price: number

    @Field(() => Float)
    kcal: number

    @Field(() => Float)
    fat: number

    @Field(() => Float)
    protein: number

    @Field(() => Float)
    sodium: number

    @Field(() => Float)
    sugars: number

    @Field(() => Float)
    caffeine: number
}