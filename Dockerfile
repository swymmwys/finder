###############################################################################

FROM node:10-alpine AS builder

WORKDIR /home/node/app
COPY . .
RUN npm install && npm run build

###############################################################################

FROM node:10-alpine
ENV NODE_ENV=production
WORKDIR /home/node/app

# RUN npm install && \
    # npm cache clean --force

EXPOSE 3000

# Start the app
CMD npm run start-server