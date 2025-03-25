# Stage 1: Build the Next.js application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./
#COPY prisma ./prisma

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production image
FROM node:20-alpine

WORKDIR /app

# Copy from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
#COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/next.config.js ./

# Generate Prisma client
#RUN npx prisma generate

EXPOSE 3000
CMD ["npm", "start"]