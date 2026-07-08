FROM node:22-alpine

# Install pnpm globally
RUN npm install -g pnpm

WORKDIR /app

# Copy only the files needed for dependency installation
COPY package.json pnpm-lock.yaml ./

# Install dependencies with frozen lockfile (like npm ci)
RUN pnpm install --frozen-lockfile

# Copy the rest of the source
COPY . .

# Build the project
RUN pnpm run build

# Use pnpm to start (or directly run node if you prefer)
CMD ["pnpm", "start"]