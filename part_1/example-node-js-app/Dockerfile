FROM node:latest
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY server.js server.js

EXPOSE 8080
CMD [ "node", "server.js" ]