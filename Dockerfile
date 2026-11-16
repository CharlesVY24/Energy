FROM oven/bun:1 AS build
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile || bun install
COPY . .
# Static files must be in public/ BEFORE the build: the Node server only serves
# files it saw at build time, so anything copied into .output afterwards is a 404.
RUN mkdir -p public/assets \
 && find src/assets -maxdepth 1 -type f ! -name '*.asset.json' -exec cp {} public/assets/ \;
ENV NITRO_PRESET=node-server
ENV VITE_SELF_HOSTED_ASSETS=true
RUN bun run build

FROM node:22-alpine
WORKDIR /app
COPY --from=build /app/.output ./.output
ENV NODE_ENV=production HOST=0.0.0.0 PORT=3000
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
