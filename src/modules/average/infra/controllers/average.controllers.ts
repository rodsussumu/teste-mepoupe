import { Body, Controller, Logger, Post } from '@nestjs/common';
import { AverageNumberDto } from '../../domain/dto/average-number.dto';
import {
  AverageService,
  AverageResult,
} from '../../domain/services/average.service';

@Controller('average')
export class AverageController {
  private logger = new Logger('AverageController');
  constructor(private readonly averageService: AverageService) {}

  @Post()
  async postNumbersAverage(
    @Body() averageNumberDto: AverageNumberDto,
  ): Promise<AverageResult> {
    this.logger.verbose(
      `Calculo da média entre ${averageNumberDto.firstNumber} e ${averageNumberDto.secondNumber}`,
    );
    return this.averageService.getAverage(averageNumberDto);
  }
}
