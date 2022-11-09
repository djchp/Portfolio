FROM node:alpine as development

WORKDIR /app

COPY package.json /app/package.json

COPY package-lock.json /app/package-lock.json

RUN npm i

COPY . /app

EXPOSE 3000

CMD [ "npm", "run", "start" ]