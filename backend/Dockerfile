FROM node:18

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy entire backend folder (including app/)
COPY . .

# server.js is inside /app/app/server.js
CMD ["node", "app/server.js"]

EXPOSE 3000
