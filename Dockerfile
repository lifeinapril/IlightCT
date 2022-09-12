FROM node:latest
WORKDIR /usr/src/web
COPY ./package.json .
RUN npm install --force
COPY . .
EXPOSE 3000
CMD [ "npm", "run", "start" ]