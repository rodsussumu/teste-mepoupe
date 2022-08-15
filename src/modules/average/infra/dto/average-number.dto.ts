import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNotEmpty } from 'class-validator';

export class AverageNumberDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  firstNumber: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  secondNumber: number;
}
