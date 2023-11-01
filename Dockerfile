# Stage 1: Build the application
FROM node:18-slim AS builder

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . /app

RUN npm run build

# Remove development dependencies
RUN npm prune --production

# Stage 2: Run the application
FROM node:18-slim

WORKDIR /app

# Copy necessary files from builder stage
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

EXPOSE 3000

CMD ["npm", "start"]
