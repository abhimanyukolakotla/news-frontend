FROM node:alpine
WORKDIR /app

RUN yarn global add http-server
COPY package.json package.json

RUN yarn

COPY . .


RUN yarn build
EXPOSE 8080
CMD ["http-server", "build"]