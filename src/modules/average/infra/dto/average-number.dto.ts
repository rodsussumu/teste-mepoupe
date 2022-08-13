import { IsNumber, IsNotEmpty } from 'class-validator';

export class AverageNumberDto {
  @IsNotEmpty()
  @IsNumber()
  firstNumber: number;

  @IsNotEmpty()
  @IsNumber()
  secondNumber: number;
}
