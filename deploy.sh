#!/bin/bash
source /home/ukuikic1/nodevenv/ukuiki/20/bin/activate
cd /home/ukuikic1/ukuiki

# 1. Get latest code
git fetch 
git reset --hard origin/main 

# 2. Install & Build
npm install 
npm run build 

# 3. The New Deployment Method (Static Copy)
# Instead of "pm2 start", we just copy the files!
echo "🚀 Copying build files to public_html..."
cp -r dist/* /home/ukuikic1/public_html/

echo "🎉 Deployment Success! Website is live."