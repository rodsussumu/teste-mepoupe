import { Module } from '@nestjs/common';
import { AverageService } from './domain/services/average.service';
import { AverageController } from './infra/controllers/average.controllers';

@Module({
  imports: [],
  controllers: [AverageController],
  providers: [AverageService],
})
export class AverageModule {}
