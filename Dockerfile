FROM node:18-alpine
WORKDIR /app
COPY package.json yarn.lock* ./
RUN yarn install
COPY . .
RUN yarn build
CMD [ "next", "dev" ]

