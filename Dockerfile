FROM node:lts-alpine

LABEL maintainer="tanno.dev <fernando@tanno.dev>"

WORKDIR /app

COPY package*.json ./

RUN npm i -g @adonisjs/cli  && \    
    npm i mysql && \
    npm i nodemon && \
    npm update

COPY . .

EXPOSE 3333

CMD ["adonis","serve","--dev"]

