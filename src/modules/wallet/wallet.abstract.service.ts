import { Injectable } from "@nestjs/common";

@Injectable()
export abstract class WalletAbstractService {
    
    abstract getCoinsInWallet(): Promise<any>;
    abstract getWalletBalance(): Promise<number>;
}
