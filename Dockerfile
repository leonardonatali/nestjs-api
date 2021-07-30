FROM node:14-alpine3.14

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 80

ENTRYPOINT [ "npm", "run", "dev" ]