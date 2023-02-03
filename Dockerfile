FROM alpine:3.16


RUN mkdir -p /app
WORKDIR /app

COPY package*.json /app

RUN apk add npm
RUN npm install

COPY ./src /app
COPY ./public /app
COPY ./styles /app
COPY ./lib /app
COPY ./next.config.js /app
COPY ./docker-entrypoint.sh /app

EXPOSE 3000

RUN chmod +x ./docker-entrypoint.sh

ENTRYPOINT ["./docker-entrypoint.sh"]
