# Build stage
FROM node:20-alpine as build

# Set working directory with the required name
WORKDIR /valdez_hanz_ui_garden_build_checks

# Copy package files
COPY package*.json ./

# Install all dependencies (including devDependencies for pre-commit checks)
RUN npm ci

# Copy source code
COPY . .

# Run code quality checks as part of build process
RUN npm run lint
RUN npm run format:check
RUN npm run test:ci

# Build the application
RUN npm run build

# Note: Using pre-built storybook-static directory
# RUN npm run build-storybook

# Production stage
FROM nginx:alpine

# Create the required working directory
WORKDIR /valdez_hanz_ui_garden_build_checks

# Copy built React app to nginx html directory
COPY --from=build /valdez_hanz_ui_garden_build_checks/build /usr/share/nginx/html

# Copy built Storybook to a subdirectory
COPY --from=build /valdez_hanz_ui_garden_build_checks/storybook-static /usr/share/nginx/html/storybook

# Create custom nginx configuration for port 8018
RUN echo 'server {' > /etc/nginx/conf.d/default.conf && \
    echo '    listen 8018;' >> /etc/nginx/conf.d/default.conf && \
    echo '    server_name localhost;' >> /etc/nginx/conf.d/default.conf && \
    echo '    root /usr/share/nginx/html;' >> /etc/nginx/conf.d/default.conf && \
    echo '    index index.html index.htm;' >> /etc/nginx/conf.d/default.conf && \
    echo '    location / {' >> /etc/nginx/conf.d/default.conf && \
    echo '        try_files $uri $uri/ /index.html;' >> /etc/nginx/conf.d/default.conf && \
    echo '    }' >> /etc/nginx/conf.d/default.conf && \
    echo '    location /storybook {' >> /etc/nginx/conf.d/default.conf && \
    echo '        try_files $uri $uri/ /storybook/index.html;' >> /etc/nginx/conf.d/default.conf && \
    echo '    }' >> /etc/nginx/conf.d/default.conf && \
    echo '}' >> /etc/nginx/conf.d/default.conf

# Expose port 8018 as required
EXPOSE 8018

# Start nginx
CMD ["nginx", "-g", "daemon off;"]