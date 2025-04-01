#!/bin/bash

echo "Starting deployment process..."

# 1. Build the application
echo "Building application..."
npm run build

# 2. Check if build was successful
if [ ! -d "dist" ]; then
  echo "Build failed! dist directory not found."
  exit 1
fi

echo "Build successful!"

# 3. Start the application in production mode
echo "Starting server in production mode..."
cross-env NODE_ENV=production node dist/index.js

echo "Deployment complete!"