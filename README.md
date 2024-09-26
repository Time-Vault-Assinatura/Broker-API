# Crypto Asset Platform Integration API (Vault Research)

This API is responsible for connecting with the main cryptocurrency platforms worldwide, such as Binance, Enor, Coinbase, and others in the future. It provides functionalities for buying and selling assets and checking wallet balances.

## Supported Activities

Currently, the API is designed to perform the following actions:

- **Buying and selling assets**: Available through the **"coins" module**.
- **Checking asset balances**: Accessible via the **"wallet" module**.

Future updates will include support for more exchanges beyond Binance, such as Enor and Coinbase.

## How to Obtain API Keys for Binance

To connect with the Binance platform using this API, follow these steps:

1. Log in to your Binance account.
2. Go to **Account Settings**.
3. Navigate to **API Management** and create your API keys.
4. Make sure to complete the KYC (Know Your Customer) verification process to enable API key creation.

*Note*: As new exchanges are integrated, similar steps will be provided for obtaining API keys from platforms like Enor and Coinbase.

## Technology Stack

This application is built using **NestJS** as its primary framework, offering a structured and scalable approach to developing APIs.

## Running the Application

### Running the Application in a Docker Container

To run the API using Docker, follow these instructions:

1. **Build the Docker image**:
   ```bash
   docker build -t broker-api-vault .
   ```
  
2. **Run the container**: 
  ```bash
docker run -p 3000:3000 broker-api-vault
   ```

3. **After running the container, the API will be available at:**
  ```bash
http://localhost:3000
   ```

* Make sure to replace localhost with the actual server IP or domain if deploying in a production environment.

