#!/bin/bash

echo "🚀 Auto-deploy watcher started!"
echo "📁 Watching for changes in your portfolio..."
echo "   Press Ctrl+C to stop."
echo ""

while true; do
  # Check if there are any uncommitted changes
  if ! git diff --quiet || ! git diff --staged --quiet || [ -n "$(git ls-files --others --exclude-standard)" ]; then
    echo "✅ Changes detected! Committing and pushing..."
    git add .
    git commit -m "Auto-deploy: $(date '+%Y-%m-%d %H:%M:%S')"
    git push origin main
    echo "🌍 Pushed! Vercel is now deploying your changes..."
    echo ""
  fi
  # Check every 10 seconds
  sleep 10
done
