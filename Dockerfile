FROM node:alpine
WORKDIR /app

RUN yarn global add http-server
COPY package.json package.json

RUN yarn

COPY . .


RUN yarn build
ENV HOST 0.0.0.0
ENV PORT 8080
EXPOSE 8080
CMD ["http-server", "build"]