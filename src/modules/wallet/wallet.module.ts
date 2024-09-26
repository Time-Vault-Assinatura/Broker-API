import { Module } from '@nestjs/common';
import { WalletController } from './wallet.controller';
import { WalletAbstractService } from './wallet.abstract.service';
import { BinanceWalletService } from './binance-wallet.service';

@Module({
  controllers: [WalletController],
  providers: [
    {
      provide: WalletAbstractService,
      useClass: BinanceWalletService,
    },
  ],
})
export class WalletModule {}
