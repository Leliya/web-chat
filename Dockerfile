FROM node:16
WORKDIR /messenger
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD npm run start
