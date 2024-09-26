import { Controller, Post, Body } from "@nestjs/common";
import { CoinsAbstractService } from "./coins.abstract.service";
import { BinanceOrderStruct } from "src/types";

@Controller('coins')
export class CoinsController {
    constructor(private readonly coinsService: CoinsAbstractService) {}

    @Post('/buy')
    public async createBuyOrder(@Body() order: BinanceOrderStruct) {
        return this.coinsService.createBuyOrder(order);
    }

    @Post('/sell')
    public async createSellOrder(@Body() order: BinanceOrderStruct) {
        return this.coinsService.createSellOrder(order);
    }
}
