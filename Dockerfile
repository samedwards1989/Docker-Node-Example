# Use the node:alpine image as a template
FROM node:8.9-alpine

# Navigate to /usr/src/app in the container to store files
WORKDIR /usr/src/app

# Copy package.json files
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

# Run npm install
RUN npm install --production --silent && mv node_modules ../

# Copy all other files
COPY . .

# Expose which port to expose on the container
EXPOSE 3000

# Run application
CMD node index.js
