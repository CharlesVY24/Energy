FROM oven/bun:1 AS build
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile || bun install
COPY . .
ENV NITRO_PRESET=node-server
RUN bun run build

FROM node:22-alpine
WORKDIR /app
COPY --from=build /app/.output ./.output
ENV NODE_ENV=production HOST=0.0.0.0 PORT=80
EXPOSE 80
CMD ["node", ".output/server/index.mjs"]
