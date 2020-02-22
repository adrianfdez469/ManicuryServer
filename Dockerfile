FROM node:12.9.1

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
RUN npm ci --only=production    

# Bundle app source
COPY . .
EXPOSE 8080
CMD [ "node", "src/index.js" ]