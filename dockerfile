# Use official Node.js LTS image
FROM node:18-alpine

# Set working directory
WORKDIR /app

COPY package*.json ./


RUN npm install


COPY . .

RUN npm run build

# Expose port (Next.js default)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
