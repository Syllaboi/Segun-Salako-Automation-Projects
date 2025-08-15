# 🤖 Smith AI Voice Interface - Portable Version

A standalone, portable web interface for interacting with Smith, your AI voice assistant. This version runs entirely from a folder on your computer - no installation required!

## 🚀 Quick Start

### Windows Users
1. **Double-click** `start-smith.bat`
2. **Wait** for the server to start (a browser window will open automatically)
3. **Allow microphone access** when prompted
4. **Click the blue microphone button** and start talking!

### Mac/Linux Users
1. **Double-click** `start-smith.sh` (or run `./start-smith.sh` in terminal)
2. **Wait** for the server to start (a browser window will open automatically)
3. **Allow microphone access** when prompted
4. **Click the blue microphone button** and start talking!

### Manual Start (Any System)
```bash
python3 start-smith.py
```

## 📋 Requirements

- **Python 3.6+** (usually pre-installed on Mac/Linux)
- **Modern web browser** (Chrome, Firefox, Safari, Edge)
- **Microphone access** for voice input

### Installing Python (if needed)
- **Windows**: Download from [python.org](https://python.org) (check "Add to PATH")
- **Mac**: `brew install python3` or download from python.org
- **Linux**: `sudo apt install python3` (Ubuntu/Debian) or `sudo yum install python3` (CentOS)

## 🎯 Features

✅ **Voice Recognition** - Real-time speech-to-text  
✅ **Chat Interface** - Beautiful dark mode design  
✅ **Mobile Friendly** - Works on phones and tablets  
✅ **Webhook Integration** - Connect to your AI backend  
✅ **Text-to-Speech** - Optional ElevenLabs support  
✅ **Portable** - Run from any folder, no installation  

## ⚙️ Configuration

### Basic Setup
Edit `config.js` to customize your Smith AI experience:

```javascript
window.SmithConfig = {
    // Your webhook URL (replace this!)
    webhookUrl: 'https://your-api-endpoint.com/chat',
    
    // ElevenLabs for voice responses (optional)
    elevenLabs: {
        apiKey: 'your_api_key_here',
        voiceId: 'your_voice_id_here'
    }
};
```

### Webhook Integration
Your webhook should:
- **Accept POST requests** with JSON body:
  ```json
  {
    "message": "user's transcribed speech",
    "userId": "user-1234567890",
    "timestamp": "2024-01-01T12:00:00.000Z"
  }
  ```
- **Return JSON response**:
  ```json
  {
    "message": "Smith's response text"
  }
  ```

### ElevenLabs Setup (Optional)
1. Sign up at [elevenlabs.io](https://elevenlabs.io)
2. Get your API key from the dashboard
3. Choose a voice and copy the voice ID
4. Add credentials to `config.js`

## 🌐 Browser Compatibility

| Browser | Voice Recognition | Audio Recording | UI |
|---------|-------------------|-----------------|-----|
| Chrome | ✅ Full Support | ✅ | ✅ |
| Firefox | ⚠️ Limited | ✅ | ✅ |
| Safari | ✅ Full Support | ✅ | ✅ |
| Edge | ✅ Full Support | ✅ | ✅ |

## 🛠️ Troubleshooting

### Server Won't Start
- **Check Python**: Run `python3 --version` in terminal
- **Port in use**: Close other applications using port 8080
- **Permissions**: Make sure script files aren't blocked

### Voice Not Working
- **Microphone permission**: Check browser settings
- **HTTPS required**: Some browsers need HTTPS for microphone access
- **Try different browser**: Chrome has best voice support

### Webhook Errors
- **Check URL**: Verify webhook URL in `config.js`
- **CORS issues**: Your webhook needs CORS headers for browser access
- **Network**: Ensure internet connection is working

## 📁 File Structure

```
smith-ai-portable/
├── start-smith.py          # Python server script
├── start-smith.bat         # Windows launcher
├── start-smith.sh          # Mac/Linux launcher
├── config.js               # Configuration file
├── index.html              # Main HTML file
├── manifest.json           # PWA manifest
├── static/                 # CSS and JavaScript files
│   ├── css/
│   └── js/
└── README.md               # This file
```

## 🔧 Advanced Configuration

### Custom Request Format
Modify `config.js` to change how messages are sent:

```javascript
window.SmithConfig.formatWebhookRequest = function(message) {
    return {
        text: message,
        user_id: 'custom-user-id',
        metadata: { source: 'voice-interface' }
    };
};
```

### Custom Response Processing
Handle different webhook response formats:

```javascript
window.SmithConfig.processWebhookResponse = function(response) {
    return response.reply || response.text || response.message;
};
```

### UI Customization
Change Smith's name, welcome message, and more in `config.js`:

```javascript
window.SmithConfig.ui = {
    assistantName: 'Your AI Name',
    welcomeMessage: 'Custom welcome message here',
    requestTimeout: 60000  // 60 seconds
};
```

## 🚀 Deployment Options

### Local Network Access
To access from other devices on your network:
1. Edit `start-smith.py`
2. Change `HOST = 'localhost'` to `HOST = '0.0.0.0'`
3. Access via `http://YOUR_IP:8080`

### Cloud Hosting
Upload the folder contents to any static hosting service:
- **Netlify**: Drag and drop the folder
- **Vercel**: Deploy via GitHub
- **GitHub Pages**: Push to repository
- **Firebase Hosting**: Use Firebase CLI

## 📱 Mobile Usage

The interface is fully mobile-optimized:
- **Touch-friendly** microphone button
- **Responsive design** adapts to screen size
- **Swipe gestures** for message history
- **PWA ready** - add to home screen

## 🔒 Privacy & Security

- **Local first**: Runs entirely on your computer
- **No data collection**: No analytics or tracking
- **Secure by default**: All communication via HTTPS when possible
- **Open source**: Full code transparency

## 🆘 Support

### Common Issues
1. **"Python not found"**: Install Python 3 and restart
2. **"Port already in use"**: Change port in `start-smith.py`
3. **"Microphone blocked"**: Check browser permissions
4. **"Webhook timeout"**: Increase timeout in `config.js`

### Getting Help
- Check browser console for error messages
- Verify webhook URL is accessible
- Test with different browsers
- Ensure microphone is working in other apps

## 📄 License

MIT License - Feel free to use, modify, and distribute.

---

**Built with ❤️ for seamless AI voice interactions**

*Last updated: 2024*