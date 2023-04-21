FROM node:16-buster-slim

WORKDIR /app

COPY package.json pnpm-lock.yaml .env ./

RUN npm i -g pnpm@7.17.0

RUN pnpm i

EXPOSE 3000

CMD [ "pnpm", "dev" ]
