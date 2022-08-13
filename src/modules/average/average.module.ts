import { Module } from '@nestjs/common';
import { AverageService } from './domain/services/average.service';
import { AverageController } from './infra/controllers/average.controller';

@Module({
  imports: [],
  controllers: [AverageController],
  providers: [AverageService],
})
export class AverageModule {}
