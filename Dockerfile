# Use an official Node.js runtime as the base image
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose a port (e.g., 3000) that the application will listen on
EXPOSE 3000

# Define the command to start your Node.js application
CMD ["npm", "start"]
