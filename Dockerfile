FROM node:24-slim

WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./

RUN npm ci --omit=dev && npm cache clean --force \
    && rm -rf /usr/local/lib/node_modules/npm \
              /usr/local/lib/node_modules/corepack \
              /usr/local/bin/npm /usr/local/bin/npx \
              /usr/local/bin/corepack \
              /opt/yarn-v* /usr/local/bin/yarn /usr/local/bin/yarnpkg

COPY --chown=node:node index.js ./

USER node

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s \
  CMD node -e "require('http').get('http://localhost:3000/api/health',r=>process.exit(r.statusCode===200?0:1)).on('error',()=>process.exit(1))"

CMD ["node", "index.js"]