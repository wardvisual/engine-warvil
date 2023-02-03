FROM alpine:3.16


RUN mkdir -p /app
WORKDIR /app

COPY package*.json /app

RUN apk add npm
RUN npm install

EXPOSE 3000

ENTRYPOINT ["./docker-entrypoint.sh"]

CMD [ "npm", "run", "dev" ]
