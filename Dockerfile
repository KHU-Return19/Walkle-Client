# Use an official Node.js runtime as a parent image
FROM node:12.22.12-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies in the container
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the application for production
RUN npm run build

# Expose port 3000 for the application
EXPOSE 3000

# Start the application
CMD ["npm", "start"]