# Step 1: Use an official Node.js runtime as a parent image
FROM node:20.11.1

# Step 2: Set the working directory in the container
WORKDIR /bonshare/servers

# Step 3: Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Step 4: Install Node.js dependencies
RUN npm install

# Step 5: Copy the rest of the application source code to the container
COPY . .

# Step 6: Build the application (if needed, e.g., for TypeScript projects)
RUN npm run build

# Step 7: Expose the application's port (if your app runs on port 3000, for example)
EXPOSE 3000

# Step 8: Command to run the application
CMD ["npm", "run", "start:prod"]




