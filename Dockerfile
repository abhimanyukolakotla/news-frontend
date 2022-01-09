FROM node:alpine
WORKDIR /app

COPY package.json package.json

RUN yarn

COPY . .

RUN yarn global add http-server
EXPOSE 8080
CMD ["http-server", "build"]