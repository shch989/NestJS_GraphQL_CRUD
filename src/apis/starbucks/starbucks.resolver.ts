import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StarbucksService } from './starbucks.service';
import { Starbucks } from './entities/starbucks.entity';
import { CreateStarbucksInput } from './dto/createStarbucks.input';
import { UpdateStarbucksInput } from './dto/updateStarbucks.input';

@Resolver()
export class StarbucksResolver {
    constructor(private readonly starbucksService: StarbucksService) { }

    @Query(() => [Starbucks])
    fetchStarbucks() {
        return this.starbucksService.findAll()
    }

    @Mutation(() => String)
    createStarbucks(
        @Args('createStarbucksInput') createStarbucksInput: CreateStarbucksInput,
    ) {
        return this.starbucksService.create({ createStarbucksInput })
    }

    @Mutation(() => Starbucks)
    updateStarbucks(@Args('id') id: string, @Args('updateStarbucksInput') updateStarbucksInput: UpdateStarbucksInput) {
        return this.starbucksService.update({
            id,
            updateStarbucksInput,
        })
    }

    @Mutation(() => Boolean)
    deleteStarbucks(@Args('id') id: string) {
        return this.starbucksService.delete({ id })
    }
}
