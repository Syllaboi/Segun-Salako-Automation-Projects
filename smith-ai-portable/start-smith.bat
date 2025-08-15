@echo off
title Smith AI Voice Interface
color 0A

echo.
echo   ========================================
echo   🤖 Smith AI Voice Interface
echo   ========================================
echo.
echo   Starting server...
echo.

REM Try Python 3 first
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo   Using Python 3...
    python start-smith.py
    goto :end
)

REM Try py command (Windows Python Launcher)
py --version >nul 2>&1
if %errorlevel% == 0 (
    echo   Using Python Launcher...
    py start-smith.py
    goto :end
)

REM Try python3 command
python3 --version >nul 2>&1
if %errorlevel% == 0 (
    echo   Using python3...
    python3 start-smith.py
    goto :end
)

REM If no Python found
echo   ❌ Error: Python not found!
echo.
echo   Please install Python 3 from: https://python.org
echo   Make sure to check "Add Python to PATH" during installation.
echo.
pause
goto :end

:end
echo.
echo   Press any key to exit...
pause >nul