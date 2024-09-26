import { Controller, Get } from "@nestjs/common";
import { WalletAbstractService } from "./wallet.abstract.service";

@Controller('wallet')
export class WalletController {
    
    constructor(private readonly walletService: WalletAbstractService) {}

    @Get("/coins")
    public async getCoinsInWallet() {
        return this.walletService.getCoinsInWallet();
    }

    @Get("/balance")
    public async getWalletBalance() {
        return this.walletService.getWalletBalance();
    }
}
