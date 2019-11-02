FROM node:12.13.0

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install --ignore-optional

COPY . .

CMD ["yarn", "start"]
