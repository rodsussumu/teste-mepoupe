import { AverageNumberDto } from './average-number.dto';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

describe('AverageNumberDto', () => {
  it('should create correctly dto', () => {
    const expectedDto = { firstNumber: 30, secondNumber: 17 };
    const averageNumberDto = new AverageNumberDto();
    averageNumberDto.firstNumber = 30;
    averageNumberDto.secondNumber = 17;
    expect(averageNumberDto).toEqual(expectedDto);
  });

  it('should throw when parameter is empty/not number', async () => {
    const dtoToCreate = { firstNumber: 30, secondNumber: '' };
    const averageDto = plainToInstance(AverageNumberDto, dtoToCreate);
    const errors = await validate(averageDto);
    expect(errors.length).not.toBe(0);
    expect(errors[0].constraints.isNumber).toEqual(
      'secondNumber must be a number conforming to the specified constraints',
    );
    expect(errors[0].constraints.isNotEmpty).toEqual(
      'secondNumber should not be empty',
    );
  });
});
