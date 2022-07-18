FROM node:14.15-alpine as builder

# Create app direcotry
WORKDIR /src/app

# Install app dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy in the source code
COPY . .

RUN npm run build

# Create nginx image
FROM nginx:alpine

# Remove default nginx web root contents
# -e makes the shell exit immediately 
# whenever something returns an error (this is often used in shell scripts as a failsafe mechanism),
# and -x enables verbose execution of scripts so that you can see what's happening.
RUN set  -xe; \
    rm -rf /usr/share/nginx/html

# Copy built assets from previous stage
COPY --from=builder /src/app/build /usr/share/nginx/html

# nginx config file

# remove default nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf
# replace with custom one
COPY nginx/nginx.conf /etc/nginx/conf.d

# expose port 80 to the outer world
EXPOSE 80
# start nginx 
CMD ["nginx", "-g", "daemon off;"]
