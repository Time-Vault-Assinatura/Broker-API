import { Injectable } from "@nestjs/common";
import { WalletAbstractService } from "./wallet.abstract.service";
import { BinanceAPI } from "src/api/binance";
import { UserAsset } from "src/types";

@Injectable()
export class BinanceWalletService implements WalletAbstractService {

    private binanceApiKey: string;
    private binanceApiSecret: string;
    private binanceApi: BinanceAPI;

    constructor() {
        this.binanceApiKey = process.env.BINANCE_API_KEY;
        this.binanceApiSecret = process.env.BINANCE_API_SECRET;
        this.binanceApi = new BinanceAPI(this.binanceApiKey, this.binanceApiSecret);
    }

    
    public async getCoinsInWallet(): Promise<UserAsset[]> {
        try {
          const assets = await this.binanceApi.getUserAssets();
          return assets;
        } catch (error) {
          console.error('Erro ao buscar os ativos da carteira Binance:', error);
          throw error;
        }
      }
    

      // To-do: check if this function is needed
    public async getWalletBalance(): Promise<number> {
        return 1000;
    }
}
