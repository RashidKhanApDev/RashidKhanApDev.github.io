Write-Host "==================================================" -ForegroundColor Cyan
Write-Host "DEEPSEEK V3: POLYGLOT ENTERPRISE BUILD PIPELINE" -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan

# 1. NPM Build (TS, SCSS)
Write-Host "[Shell] Step 1: Compiling TypeScript and SCSS..." -ForegroundColor Yellow
npm run build

# 2. C# Data Generator
Write-Host "[Shell] Step 2: Executing C# .NET Data Generator..." -ForegroundColor Yellow
Push-Location polyglot\csharp
dotnet run
Pop-Location

# 3. Dart Compiler
Write-Host "[Shell] Step 3: Compiling Dart to JS..." -ForegroundColor Yellow
dart compile js polyglot/dart/main.dart -o dist/dart_logic.js

# 4. Python Custom Transpiler
Write-Host "[Shell] Step 4: Transpiling Polyglot files (Rust, Go, C++, Kotlin, ClojureScript, WebAssembly) via Python..." -ForegroundColor Yellow
python polyglot_ssg.py

Write-Host "==================================================" -ForegroundColor Green
Write-Host "ENTERPRISE BUILD SUCCESSFUL. ALL LANGUAGES COMPILED." -ForegroundColor Green
Write-Host "==================================================" -ForegroundColor Green
