FROM node:12-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install

USER node

EXPOSE 3001

CMD ["node", "index.js"]

