#!/bin/bash

# Smith AI Voice Interface Launcher
# For Mac and Linux systems

echo "🤖 Smith AI Voice Interface"
echo "=========================================="
echo ""
echo "Starting server..."
echo ""

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Try different Python commands
if command_exists python3; then
    echo "✅ Using python3..."
    python3 start-smith.py
elif command_exists python; then
    # Check if it's Python 3
    if python -c 'import sys; exit(0 if sys.version_info >= (3,0) else 1)' 2>/dev/null; then
        echo "✅ Using python..."
        python start-smith.py
    else
        echo "❌ Error: Python 3 is required, but found Python 2"
        echo "Please install Python 3 or use 'python3' command"
        exit 1
    fi
else
    echo "❌ Error: Python not found!"
    echo ""
    echo "Please install Python 3:"
    echo "  • Mac: brew install python3  (or download from python.org)"
    echo "  • Ubuntu/Debian: sudo apt install python3"
    echo "  • CentOS/RHEL: sudo yum install python3"
    echo ""
    exit 1
fi

echo ""
echo "👋 Smith AI server stopped. Goodbye!"