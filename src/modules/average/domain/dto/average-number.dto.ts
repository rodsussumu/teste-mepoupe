import { IsNumber } from 'class-validator';

export class AverageNumberDto {
  @IsNumber()
  firstNumber: number;

  @IsNumber()
  secondNumber: number;
}
