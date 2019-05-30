# build stage
FROM node:10-alpine as build-stage

WORKDIR /app

COPY package*.json ./

COPY . /app

# RUN npm install --only=prod
RUN npm install


RUN npm run build

# production stage
FROM nginx:1.13.12-alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 8081

RUN chmod g+rwx /var/cache/nginx /var/run /var/log/nginx
RUN chgrp -R root /var/cache/nginx

RUN addgroup nginx root

USER nginx

CMD ["nginx", "-g", "daemon off;"]
