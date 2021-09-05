FROM node:alpine
WORKDIR /mern-stack/client
COPY ./client/package*.json ./
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "start"]