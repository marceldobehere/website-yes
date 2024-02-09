FROM node:21-bullseye


WORKDIR /srv
COPY . .
RUN npm install
WORKDIR /srv
ENTRYPOINT [ "bash", "entry.sh" ]