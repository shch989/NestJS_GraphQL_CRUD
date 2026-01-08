import { Field, Float, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CreateStarbucksInput {
    @Field(() => String)
    name: String

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