FROM node:18

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy all backend files
COPY . .

# Start server from inside app folder
CMD ["node", "app/server.js"]

EXPOSE 3000
