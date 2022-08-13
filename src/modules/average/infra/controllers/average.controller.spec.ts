import { Logger } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AverageService } from '../../domain/services/average.service';
import { AverageController } from './average.controller';

const resolvedValue = { average: 24 };

describe('AverageController', () => {
  let controller: AverageController;
  let service: AverageService;

  beforeEach(async () => {
    Logger.prototype.log = jest.fn();

    const module: TestingModule = await Test.createTestingModule({
      controllers: [AverageController],
      providers: [
        {
          provide: AverageService,
          useValue: {
            getAverage: jest.fn().mockResolvedValue(resolvedValue),
          },
        },
      ],
    }).compile();

    controller = module.get<AverageController>(AverageController);
    service = module.get<AverageService>(AverageService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  it('should be return correct average when parameters are positive', async () => {
    const body = {
      firstNumber: 30,
      secondNumber: 17,
    };

    const expectedAverage = 24;
    const result = await controller.post(body);
    expect(Logger.prototype.log).toHaveBeenCalled();
    expect(result.average).toBe(expectedAverage);
  });
});
