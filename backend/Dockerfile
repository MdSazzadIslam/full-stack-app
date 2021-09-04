FROM node:lts-buster
WORKDIR /full-stack-app/server
COPY ./server/package*.json ./
RUN npm install
COPY ./.env ../.env
CMD ["npm", "run", "start"]