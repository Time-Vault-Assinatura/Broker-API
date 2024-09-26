import { Module } from '@nestjs/common';
import { CoinsController } from './coins.controller';
import { CoinsAbstractService } from './coins.abstract.service';
import { BinanceCoinsService } from './binance-coins.service';

@Module({
  controllers: [CoinsController],
  providers: [
    {
      provide: CoinsAbstractService,
      useClass: BinanceCoinsService,
    },
  ],
})
export class CoinsModule {}
