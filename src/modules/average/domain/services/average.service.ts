import { Injectable, Logger } from '@nestjs/common';
import { AverageNumberDto } from '../dto/average-number.dto';

export interface AverageResult {
  average: number;
}

@Injectable()
export class AverageService {
  private logger = new Logger('AverageService');

  getAverage(averageNumberDto: AverageNumberDto): AverageResult {
    const sum = averageNumberDto.firstNumber + averageNumberDto.secondNumber;
    this.logger.verbose(`Somando os números, resultado ${sum}`);
    const average = Math.round(sum / 2);
    this.logger.verbose(`Realizando média, retornando resultado ${average}`);
    return { average: average };
  }
}
