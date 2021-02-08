
import { getSquardeNumbers, getOddNumbers, sum } from './calculator';

it('should get squared numbers', () => {
   const result = getSquardeNumbers([1, 2, 3, 4]);
   expect(result).toEqual([1, 4, 9, 16]);
})

it('should get odd numbers', () => {
   const result = getOddNumbers([1, 2, 3, 4, 5]);
   expect(result).toEqual([1, 3, 5]);
})

it('should get summ', () => {
   const result = sum(2, 2);
   expect(result).toEqual(4);
})