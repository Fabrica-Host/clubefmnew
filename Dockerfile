FROM node:24-alpine
WORKDIR /app
COPY --chown=node:node . .
ARG SITE_ORIGIN=https://www.clubefmlondrina.com.br
RUN SITE_ORIGIN=$SITE_ORIGIN npm run build
ENV NODE_ENV=production HOST=0.0.0.0 PORT=3000
USER node
EXPOSE 3000
CMD ["node", "server.mjs"]
