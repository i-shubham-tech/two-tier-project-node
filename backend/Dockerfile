#importing base image
FROM node:20-alpine

#creating work directory
WORKDIR /app

#copying dependency from source to destination

COPY  package.json /app/package.json

#installing all dependency

RUN npm install

ENV PORT=3000

#copying source code 
COPY src /app/src

EXPOSE 3000

# command to run during container start

CMD ["npm", "run","dev"]









