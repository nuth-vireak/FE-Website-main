FROM node:14-alpine as developmet
WORKDIR /app
COPY . .
RUN npm install

FROM node:14-alpine as production
WORKDIR /app
COPY . .
RUN npm install
RUN npm install -g serve
RUN npm run build
