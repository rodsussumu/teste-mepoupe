import { Module } from '@nestjs/common';
import { AverageModule } from './modules/average/average.module';

@Module({
  imports: [AverageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
