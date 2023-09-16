FROM oven/bun AS deps
WORKDIR /app
COPY . .
RUN bun install

FROM deps as prod
COPY --from=deps /app/node_modules ./node_modules
CMD ["bun", "run", "index.ts"]