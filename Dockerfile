FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --silent

COPY . .

RUN CI=false npm run build

EXPOSE 3000

CMD ["npm", "start"]
