FROM node:14-alpine3.14

WORKDIR /app

COPY . .

RUN npm install

ENTRYPOINT [ "npm", "run", "dev" ]