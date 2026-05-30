#!/bin/bash
# Script to serve the built production preview site
if [ ! -d "dist" ]; then
  echo "Build directory 'dist' not found. Running build..."
  npm run build
fi

echo "Serving Zeus Preview at http://localhost:5000"
npx serve -s dist -l 5000
