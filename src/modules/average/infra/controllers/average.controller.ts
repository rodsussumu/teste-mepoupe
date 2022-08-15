import { Body, Controller, Logger, Post } from '@nestjs/common';
import { AverageNumberDto } from '../dto/average-number.dto';
import { AverageService } from '../../domain/services/average.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('average')
export class AverageController {
  private logger = new Logger('AverageController');
  constructor(private readonly averageService: AverageService) {}

  @Post()
  @ApiOperation({ summary: 'Média entre dois numeros' })
  @ApiResponse({ status: 201, description: 'Média feita com sucesso' })
  @ApiResponse({ status: 400, description: 'Parâmetros inválidos' })
  async post(@Body() averageNumberDto: AverageNumberDto) {
    this.logger.log(
      `Calculo da média entre ${averageNumberDto.firstNumber} e ${averageNumberDto.secondNumber}`,
    );
    return await this.averageService.getAverage(averageNumberDto);
  }
}
