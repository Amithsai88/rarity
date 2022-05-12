FROM node:16.14.2
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run
EXPOSE 3000
CMD ["npm", "start"]