FROM node:latest
WORKDIR /usr/src/web
COPY ./package.json .
COPY ./package-lock.json .
RUN npm install --force --legacy-peer-deps --unsafe-perms || true
COPY . .
EXPOSE 3000
CMD [ "npm", "run", "start" ]