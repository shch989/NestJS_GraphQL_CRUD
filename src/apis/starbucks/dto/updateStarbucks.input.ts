import { InputType, PartialType } from "@nestjs/graphql";
import { CreateStarbucksInput } from "./createStarbucks.input";

@InputType()
export class UpdateStarbucksInput extends PartialType(CreateStarbucksInput) { }