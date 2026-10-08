@echo off
setlocal EnableExtensions
chcp 65001 >nul 2>nul

rem ============================================================
rem  Iya Sade Oke Ogun Heritage - Quick Start
rem  Double-click this file to start the Vite development server
rem  and open the website in your default browser.
rem ============================================================

rem --- Always run from the folder where this .bat file lives ---
cd /d "%~dp0"

if not exist "%~dp0package.json" (
  echo [ERROR] package.json not found.
  echo Keep this start.bat file inside the project root folder and try again.
  pause
  exit /b 1
)

rem --- Check that npm (Node.js) is installed ---
where npm >nul 2>nul
if errorlevel 1 (
  echo [ERROR] npm was not found on this computer.
  echo Install Node.js first from https://nodejs.org then double-click start.bat again.
  pause
  exit /b 1
)

rem --- First run only: install dependencies ---
if not exist "node_modules" (
  echo [INFO] node_modules not found - installing dependencies. This runs only once...
  call npm install --no-fund --no-audit
  if errorlevel 1 (
    echo [ERROR] npm install failed. Check your internet connection and try again.
    pause
    exit /b 1
  )
  echo.
)

rem --- The project's Vite dev server runs on port 5173 (see vite.config.js) ---
set "SITE_URL=http://localhost:5173/"

echo [INFO] The site will open automatically in your browser in 5 seconds...
echo        If it is not ready yet, just refresh the page.
start "" powershell -NoProfile -WindowStyle Hidden -Command "Start-Sleep -Seconds 5; Start-Process '%SITE_URL%'"

echo.
echo ============================================================
echo   Starting the development server (npm run dev / Vite)
echo   Website URL : %SITE_URL%
echo   Stop server : press Ctrl+C in this window
echo ============================================================
echo.

call npm run dev

echo.
echo [INFO] Development server has stopped. Press any key to close this window.
pause
exit /b 0
