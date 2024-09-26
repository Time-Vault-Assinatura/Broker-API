import { Injectable } from "@nestjs/common";
import { CoinsAbstractService } from "./coins.abstract.service";
import { BinanceOrderStruct } from "src/types";
import { BinanceAPI } from "src/api/binance";

@Injectable()
export class BinanceCoinsService implements CoinsAbstractService {
    private binanceApiKey: string;
    private binanceApiSecret: string;
    private binanceApi: BinanceAPI;

    constructor() {
        this.binanceApiKey = process.env.BINANCE_API_KEY;
        this.binanceApiSecret = process.env.BINANCE_API_SECRET;
        this.binanceApi = new BinanceAPI(this.binanceApiKey, this.binanceApiSecret);
    }


    public async createBuyOrder(order: BinanceOrderStruct): Promise<any> {
        return this.binanceApi.createBuyOrder(order);
    }

    public async createSellOrder(order: BinanceOrderStruct): Promise<any> {
        return this.binanceApi.createSellOrder(order);
    }
}
