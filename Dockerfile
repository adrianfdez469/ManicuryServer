FROM node:12.16.1

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
# RUN npm ci --only=production    

# Bundle app source
COPY . .
CMD [ "node", "src/App.js" ]
EXPOSE 9000
