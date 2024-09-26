import { Injectable } from "@nestjs/common";
import { BinanceOrderStruct } from "src/types";

@Injectable()
export abstract class CoinsAbstractService {
    abstract createBuyOrder(order: BinanceOrderStruct): Promise<any>;
    abstract createSellOrder(order: BinanceOrderStruct): Promise<any>;
}
