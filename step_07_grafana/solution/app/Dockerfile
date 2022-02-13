FROM node:latest

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY app.js app.js

EXPOSE 3000
CMD [ "node", "app.js" ]