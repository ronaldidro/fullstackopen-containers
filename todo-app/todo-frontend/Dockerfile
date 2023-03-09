FROM node:16 AS test-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN CI=true npm test

# The first FROM is now a stage called build-stage
FROM test-stage AS build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci

ENV REACT_APP_BACKEND_URL="http://localhost:3001"

RUN npm run build

CMD npm start

# This is a new stage, everything before this is gone, except the files we want to COPY
# FROM nginx:1.20-alpine

# COPY the directory build from build-stage to /usr/share/nginx/html
# The target location here was found from the docker hub page
# COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html