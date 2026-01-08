import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class StarbucksService {
    private readonly starbucks = [
        {
            id: '1',
            name: '아메리카노',
            price: 3000,
            kcal: 12.6,
            fat: 3.6,
            protein: 2.4,
            sodium: 0,
            sugars: 0,
            caffeine: 20.4,
        }
    ]
    findAll() {
        return this.starbucks
    }

    create({createStarbucksInput}) {
        const id = uuidv4();

        const newStarbucks = {
            id,
            ...createStarbucksInput
        }

        this.starbucks.push(newStarbucks)
        
        console.log(newStarbucks)
        return '등록에 성공하였습니다.'
    }

    update({id, updateStarbucksInput}) {
        const index = this.starbucks.findIndex(
            (el) => el.id === id,
        )

        if (index === -1) {
            throw new Error('존재하지 않는 상품입니다')
        }

        this.starbucks[index] = {
            ...this.starbucks[index],
            ...updateStarbucksInput
        }

        return this.starbucks[index]
    }

    delete({id}) {
        const index = this.starbucks.findIndex(
            (el) => el.id === id,
        )

        if (index === -1) {
            throw new Error('존재하지 않는 상품입니다')
        }
        
        this.starbucks.splice(index, 1)
        return true;
    }
}
