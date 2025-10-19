# Use Node.js base image
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire backend folder
COPY backend ./backend

# Change working directory to backend
WORKDIR /app/backend

# Expose backend port
EXPOSE 5000

# Start the backend server
CMD ["node", "server.js"]
