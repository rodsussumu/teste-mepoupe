import { Body, Controller, Logger, Post } from '@nestjs/common';
import { AverageNumberDto } from '../dto/average-number.dto';
import { AverageService } from '../../domain/services/average.service';

@Controller('average')
export class AverageController {
  private logger = new Logger('AverageController');
  constructor(private readonly averageService: AverageService) {}

  @Post()
  async post(@Body() averageNumberDto: AverageNumberDto) {
    this.logger.log(
      `Calculo da média entre ${averageNumberDto.firstNumber} e ${averageNumberDto.secondNumber}`,
    );
    return await this.averageService.getAverage(averageNumberDto);
  }
}
