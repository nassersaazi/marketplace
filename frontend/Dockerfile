
FROM node:16

WORKDIR /usr/src/app/my-app

COPY package*.json ./

RUN npm install --unsafe-perm=true --allow-root

COPY . .

RUN chmod 777 node_modules

EXPOSE 3000/tcp

CMD ["npm","run", "start"]