FROM node:16.19.1

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 4200

ENTRYPOINT [ "npm", "start" ]