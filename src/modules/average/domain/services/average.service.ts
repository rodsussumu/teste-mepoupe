import { Injectable, Logger } from '@nestjs/common';
import { AverageNumber } from '../interfaces/average-number.interface';
import { AverageResult } from '../interfaces/average-result.interface';

@Injectable()
export class AverageService {
  private logger = new Logger('AverageService');

  async getAverage(averageNumber: AverageNumber): Promise<AverageResult> {
    const sum = averageNumber.firstNumber + averageNumber.secondNumber;
    const average = Math.round(sum / 2);
    this.logger.log(`Realizando média, retornando resultado ${average}`);
    return { average: average };
  }
}
