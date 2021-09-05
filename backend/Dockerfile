FROM node:alpine
WORKDIR /full-stack-app/server
COPY ./server/package*.json ./
RUN npm install
COPY ./.env ../.env
EXPOSE 5000
CMD ["npm", "run", "start"]