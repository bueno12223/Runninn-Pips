FROM node:15

WORKDIR /app

COPY package*.json ./

ENV ENV production

ENV PORT 3000

RUN npm install --only=production

COPY . .

RUN npm run build

CMD ["npm", "start"]
