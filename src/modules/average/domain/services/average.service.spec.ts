import { Logger } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AverageService } from '../../domain/services/average.service';

describe('AverageService', () => {
  let service: AverageService;

  beforeEach(async () => {
    Logger.prototype.log = jest.fn();

    const module: TestingModule = await Test.createTestingModule({
      providers: [AverageService],
    }).compile();

    service = module.get<AverageService>(AverageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be return correct average when parameters are positive', async () => {
    const body = {
      firstNumber: 30,
      secondNumber: 17,
    };

    const expectedAverage = { average: 24 };

    const result = await service.getAverage(body);

    expect(Logger.prototype.log).toHaveBeenCalled();
    expect(result).toEqual(expectedAverage);
  });

  it('should be return correct average when parameters are negative', async () => {
    const body = {
      firstNumber: -30,
      secondNumber: -17,
    };

    const expectedAverage = { average: -23 };
    const result = await service.getAverage(body);

    expect(Logger.prototype.log).toHaveBeenCalled();
    expect(result).toEqual(expectedAverage);
  });
});
