FROM node:20-alpine

WORKDIR /code

COPY package*.json ./

RUN npm install && npm install -g serve

COPY . .


EXPOSE 6656

CMD ["npm", "run", "dev"]
