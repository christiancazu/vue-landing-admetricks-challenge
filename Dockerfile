FROM node:latest as build-stage

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn

COPY ./ .
COPY ./src/modules/chart/components/Chart.vue ./src/Chart.ce.vue

RUN yarn build-wc
RUN yarn build

FROM node:alpine as production-stage

WORKDIR /app

COPY --from=build-stage /app/dist .
COPY --from=build-stage /app/chart-component.js ./chart-component.js
COPY --from=build-stage /app/server.js ./server.js
COPY --from=build-stage /app/node_modules ./node_modules

EXPOSE 3000

CMD [ "node", "server.js"]
