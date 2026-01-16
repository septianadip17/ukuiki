#!/bin/bash
source /home/ukuikic1/nodevenv/ukuiki/20/bin/activate

# 1. Stop PM2 (The heavy process)
# We add "|| true" so the script doesn't stop if PM2 is already dead
npx pm2 delete ukuiki 2>/dev/null || true

# 2. Clean the Storefront (public_html)
# Warning: This deletes the old version of the site to make room for the new one
rm -rf /home/ukuikic1/public_html/*

echo "✅ PM2 stopped and public_html cleaned."