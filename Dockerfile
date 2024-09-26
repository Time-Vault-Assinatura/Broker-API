FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

RUN npm run build

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "run", "start:prod"]
