import axios, { AxiosInstance } from 'axios';
import * as crypto from 'crypto'; 
import { BinanceOrderStruct, UserAsset } from 'src/types'; 

export class BinanceAPI {
  private axiosInstance: AxiosInstance;
  private apiKey: string;
  private apiSecret: string;
  private baseURL: string = 'https://api.binance.com';

  constructor(apiKey: string, apiSecret: string) {
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;

    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
      headers: {
        'X-MBX-APIKEY': this.apiKey,
      },
    });
  }

  public async getUserAssets(): Promise<UserAsset[]> {
    try {
      const timestamp = Date.now();
      const queryString = `timestamp=${timestamp}`;
      const signature = this.generateSignature(queryString); 
      const response = await this.axiosInstance.get('/sapi/v3/asset/getUserAssets', {
        params: {
          timestamp,
          signature,
        },
      });

      return response.data as UserAsset[]; 
    } catch (error) {
      console.error('Erro ao buscar os ativos do usuário:', error);
      throw error;
    }
  }

  private generateSignature(queryString: string): string {
    return crypto.createHmac('sha256', this.apiSecret)
                 .update(queryString)
                 .digest('hex');
  }

  private async createOrder(order: BinanceOrderStruct, side: 'BUY' | 'SELL'): Promise<any> {
    const { symbol, quantity, price, type, timeInForce } = order;

    try {
      const timestamp = Date.now();
      const queryString = `symbol=${symbol}&side=${side}&type=${type}&timeInForce=${timeInForce}&quantity=${quantity}&price=${price}&timestamp=${timestamp}`;
      const signature = this.generateSignature(queryString);

      const response = await this.axiosInstance.post('/api/v3/order', null, {
        params: {
          symbol,
          side,
          type,
          timeInForce,
          quantity,
          price,
          timestamp,
          signature,
        },
      });

      return response.data;
    } catch (error) {
      console.error(`Erro ao criar ordem de ${side.toLowerCase()}:`, error);
      throw error;
    }
  }

  public async createBuyOrder(order: BinanceOrderStruct): Promise<any> {
    return this.createOrder(order, 'BUY');
  }

  public async createSellOrder(order: BinanceOrderStruct): Promise<any> {
    return this.createOrder(order, 'SELL');
  }
}
