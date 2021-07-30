FROM node:14-alpine3.14

COPY . .

RUN npm install

ENTRYPOINT [ "npm", "run", "dev" ]