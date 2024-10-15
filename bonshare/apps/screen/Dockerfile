# Use an official Node.js base image
FROM node:20.11.1

# Set environment variables for Expo
ENV EXPO_DEVTOOLS_LISTEN_PORT 19002
ENV EXPO_DEVTOOLS_PORT 19001
ENV PATH /usr/local/bin:$PATH

# Install necessary packages
RUN apt-get update && apt-get install -y \
    git \
    python3 \
    build-essential

# Install Expo CLI globally
RUN npm install -g expo-cli

# Set the working directory to the app's folder
WORKDIR /app

# Copy package.json and yarn.lock to install dependencies
COPY package.json package-lock.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose ports used by Expo
EXPOSE 19000 19001 19002

# Start Expo
CMD ["expo", "start", "--tunnel"]



