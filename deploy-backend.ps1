Write-Host "==================================================" -ForegroundColor Cyan
Write-Host "ENTERPRISE VISITOR INTELLIGENCE BACKEND DEPLOYMENT" -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan

Write-Host "Step 1: Installing Wrangler CLI..."
npm install -g wrangler

Write-Host "`nStep 2: Authenticating with Cloudflare..."
Write-Host "A browser window will open. Please log in to your Cloudflare account." -ForegroundColor Yellow
npx wrangler login

Write-Host "`nStep 3: Creating D1 SQL Database..."
$dbOutput = npx wrangler d1 create visitor-db | Out-String
Write-Host $dbOutput

Write-Host "`nIMPORTANT ACTION REQUIRED:" -ForegroundColor Red
Write-Host "Look at the output above. Copy the 'database_id' and paste it into backend/wrangler.toml under [[d1_databases]]." -ForegroundColor Yellow
Write-Host "Press Enter when you have updated wrangler.toml..." -ForegroundColor Cyan
Read-Host

Write-Host "`nStep 4: Applying SQL Schema..."
npx wrangler d1 execute visitor-db --local --file=./backend/schema.sql
npx wrangler d1 execute visitor-db --remote --file=./backend/schema.sql

Write-Host "`nStep 5: Deploying Enterprise Serverless Worker..."
cd backend
npx wrangler deploy

Write-Host "`n==================================================" -ForegroundColor Green
Write-Host "DEPLOYMENT COMPLETE!" -ForegroundColor Green
Write-Host "Copy the deployed worker URL and update 'BACKEND_URL' in src/analytics.ts!" -ForegroundColor Yellow
Write-Host "Then run './build.ps1' to compile the frontend." -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Green
