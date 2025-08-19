#!/usr/bin/env python3
"""
Smith AI Voice Interface - Portable Server
==========================================

This script starts a local web server to run the Smith AI Voice Interface.
Works on any computer with Python 3 installed.

Usage:
    python start-smith.py

Then open your browser to: http://localhost:8080
"""

import http.server
import socketserver
import webbrowser
import os
import sys
from pathlib import Path

# Configuration
PORT = 8080
HOST = 'localhost'

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """Custom handler to serve the React app properly"""
    
    def end_headers(self):
        # Add CORS headers for local development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()
    
    def do_GET(self):
        # Serve index.html for all routes (SPA routing)
        if self.path != '/' and not '.' in self.path:
            self.path = '/index.html'
        return super().do_GET()

def main():
    """Start the Smith AI Voice Interface server"""
    
    # Change to the directory containing this script
    script_dir = Path(__file__).parent
    os.chdir(script_dir)
    
    # Check if we have the required files
    if not Path('index.html').exists():
        print("❌ Error: index.html not found!")
        print("Please make sure you're running this script from the Smith AI folder.")
        sys.exit(1)
    
    # Start the server
    try:
        with socketserver.TCPServer((HOST, PORT), CustomHTTPRequestHandler) as httpd:
            url = f"http://{HOST}:{PORT}"
            
            print("🤖 Smith AI Voice Interface")
            print("=" * 50)
            print(f"✅ Server starting on: {url}")
            print(f"📁 Serving files from: {script_dir}")
            print("\n🌐 Open your browser and go to:")
            print(f"   {url}")
            print("\n🎤 Features available:")
            print("   • Voice recognition (click microphone)")
            print("   • Real-time chat interface")
            print("   • Dark mode design")
            print("   • Mobile-friendly")
            print("\n⚙️  Configuration:")
            print("   • Edit config.js to change webhook URL")
            print("   • Add ElevenLabs credentials for voice responses")
            print("\n🛑 Press Ctrl+C to stop the server")
            print("=" * 50)
            
            # Try to open browser automatically
            try:
                webbrowser.open(url)
                print(f"🚀 Opening {url} in your default browser...")
            except:
                print(f"💡 Manually open your browser to: {url}")
            
            # Start serving
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\n\n👋 Smith AI server stopped. Goodbye!")
    except OSError as e:
        if "Address already in use" in str(e):
            print(f"❌ Error: Port {PORT} is already in use!")
            print(f"💡 Try closing other applications or use a different port.")
        else:
            print(f"❌ Error starting server: {e}")
        sys.exit(1)
    except Exception as e:
        print(f"❌ Unexpected error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()