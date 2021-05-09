# Stage 1
FROM node:12.19.0-alpine as node
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install -g @angular/cli
COPY . .
RUN npm run build --prod

# Stage 2

EXPOSE 4200
CMD ng serve --prod --host 0.0.0.0  
