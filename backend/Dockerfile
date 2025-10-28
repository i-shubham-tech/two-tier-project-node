#importing base image
FROM node:20-alpine as builder

#creating work directory
WORKDIR /app

#copying dependency from source to destination

COPY  package.json ./

#installing all dependency

RUN npm install

FROM node:20-slim

COPY --from=builder /app/node_modules /app/node_modules

COPY src /app/src

ENV PORT=3000

EXPOSE 3000

# command to run during container start

CMD ["npm", "run","dev"]









