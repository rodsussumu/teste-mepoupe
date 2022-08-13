import { Module } from '@nestjs/common';
import { AverageModule } from './modules/average/average.module';
import { CepModule } from './modules/cep/cep.module';

@Module({
  imports: [AverageModule, CepModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
