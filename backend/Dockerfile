FROM node:18

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose backend port
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]
