FROM node:15

WORKDIR /app

COPY package*.json ./

COPY *.tar /app/

ENV ENV production

ENV PORT 3000

ENV MERCHANT_ID ="ee4dacd6-c4f1-47d6-ae88-82b90fb096d3"

ENV SECRET_KEY = "WVBfRUFBRjJENUQtNEM1OS0zMzM0LTk2NDAtOEY2QUUwMjZFMkRFLmVlNGRhY2Q2LWM0ZjEtNDdkNi1hZTg4LTgyYjkwZmIwOTZkMw=="

RUN npm install --only=production

COPY . .

RUN npm run build

CMD ["npm", "start"]
