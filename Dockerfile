FROM node:22-alpine

# Install pnpm globally
RUN npm install -g pnpm

WORKDIR /app

# Copy dependency files
COPY package.json pnpm-lock.yaml ./

# Allow dependency install scripts (required for Next.js sharp)
RUN pnpm config set ignore-scripts false

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build Next.js app
RUN pnpm run build

# Start application
CMD ["pnpm", "start"]