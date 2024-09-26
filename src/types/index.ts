export type UserAsset = {
    asset: string;
    free: string;
    locked: string;
    freeze: string;
    withdrawing: string;
    ipoable: string;
    btcValuation: string;
}

export type BinanceOrderStruct = {
    symbol: string; 
    quantity: number;
    price: number;
    type: 'LIMIT' | 'MARKET' | 'STOP_LOSS' | 'STOP_LOSS_LIMIT' | 'TAKE_PROFIT' | 'TAKE_PROFIT_LIMIT'; 
    timeInForce: 'GTC' | 'IOC' | 'FOK';
}

// to-do: add the types for returns in endpoints (coins and wallet modules)