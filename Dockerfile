FROM node:latest
WORKDIR /usr/src/web
COPY ./package.json .
RUN npm install --legacy-peer-deps --unsafe-perms
COPY . .
EXPOSE 3000
CMD [ "npm", "run", "start" ]