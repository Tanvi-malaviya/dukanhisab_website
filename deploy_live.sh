#!/bin/bash
set -e

# ==============================================================================
# Automated Production Deployment Script for DukanHisab Website (Next.js)
# ==============================================================================

# Colors for terminal output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

APP_NAME="dukanhisab-website"
BRANCH="main"

echo -e "${CYAN}====================================================${NC}"
echo -e "${CYAN}🚀 Starting Live Deployment for ${APP_NAME}${NC}"
echo -e "${CYAN}====================================================${NC}"

# Navigate to the project root directory
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_DIR"
echo -e "${GREEN}✓ Working directory:${NC} $PROJECT_DIR"

# Load NVM & Node environment (if available on server)
export NVM_DIR="$HOME/.nvm"
if [ -s "$NVM_DIR/nvm.sh" ]; then
    # shellcheck source=/dev/null
    . "$NVM_DIR/nvm.sh"
fi

# Ensure Node & NPM are accessible
if ! command -v node >/dev/null 2>&1; then
    echo -e "${RED}❌ Error: Node.js is not found in PATH. Please verify your Node installation.${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Node version:${NC} $(node -v)"
echo -e "${GREEN}✓ NPM version:${NC}  $(npm -v)"

# Step 1: Pull latest code from GitHub
echo -e "\n${YELLOW}[1/4] Pulling latest code from origin/${BRANCH}...${NC}"
git fetch origin "$BRANCH"
git reset --hard "origin/$BRANCH"

COMMIT_HASH=$(git log -1 --format="%h - %s (%an, %cr)")
echo -e "${GREEN}✓ Deployed commit:${NC} $COMMIT_HASH"

# Step 2: Install / Update Dependencies
echo -e "\n${YELLOW}[2/4] Installing project dependencies...${NC}"

if [ -f "package-lock.json" ]; then
    npm ci --include=dev --no-audit || npm install --include=dev --no-audit
else
    npm install --include=dev --no-audit
fi

# Step 3: Build Next.js Application
echo -e "\n${YELLOW}[3/4] Building Next.js production bundle...${NC}"
rm -rf .next
npm run build

# Step 4: Reload or Start PM2 Process (Zero Downtime)
echo -e "\n${YELLOW}[4/4] Managing PM2 process (${APP_NAME})...${NC}"

if command -v pm2 >/dev/null 2>&1; then
    if pm2 describe "$APP_NAME" >/dev/null 2>&1; then
        echo -e "${CYAN}→ Reloading existing PM2 process with zero downtime...${NC}"
        pm2 reload "$APP_NAME" --update-env
    else
        echo -e "${CYAN}→ Process not running. Starting new PM2 instance...${NC}"
        pm2 start npm --name "$APP_NAME" -- start
    fi
    pm2 save
    echo -e "${GREEN}✓ PM2 process updated & saved successfully!${NC}"
else
    echo -e "${YELLOW}⚠️ PM2 not found globally. Attempting npx pm2...${NC}"
    if npx pm2 describe "$APP_NAME" >/dev/null 2>&1; then
        npx pm2 reload "$APP_NAME" --update-env
    else
        npx pm2 start npm --name "$APP_NAME" -- start
    fi
fi

echo -e "\n${GREEN}====================================================${NC}"
echo -e "${GREEN}🎉 Deployment Successfully Completed!${NC}"
echo -e "${GREEN}🕒 Finished at: $(date '+%Y-%m-%d %H:%M:%S')${NC}"
echo -e "${GREEN}====================================================${NC}"
