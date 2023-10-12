FROM node:19-alpine3.16 as build_stage
WORKDIR /app/mitit-front
COPY . .
RUN npm i && npm run build

FROM nginx:1.23.3
COPY --from=build_stage /app/mitit-front/build /usr/share/nginx/html
COPY default_nginx.conf /etc/nginx/conf.d/default.conf
