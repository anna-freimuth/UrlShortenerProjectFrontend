#
# Build stage
#
FROM node:14.17 AS build
RUN mkdir -p /app/url-shortener
COPY   package.json /app
WORKDIR /app/url-shortener
RUN npm install
COPY . /app/url-shortener
RUN npm run build

#
# Package stage
#
FROM nginx:1.17.1-alpine
COPY --from=build  /app/url-shortener /usr/share/nginx/html
