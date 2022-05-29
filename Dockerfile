FROM node:14-buster AS builder

WORKDIR /usr/src/app
COPY ./src ./src
COPY package*.json ./
COPY ./tsconfig.json ./

RUN npm ci && \
    npm run build && \
    npm prune production

FROM node:14-buster
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package.json ./

CMD ["npm", "run", "start"]