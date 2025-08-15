# Smith - AI Voice Assistant Interface

A modern, mobile-friendly web interface for interacting with Smith, your AI voice assistant. Built with React and featuring a sleek dark mode aesthetic inspired by modern messaging apps.

## Features

- 🎤 **Voice Input**: Click-to-talk functionality with real-time speech recognition
- 💬 **Chat Interface**: Clean, messenger-style UI with message bubbles
- 🌙 **Dark Mode**: Beautiful dark aesthetic with neon accents
- 📱 **Mobile Friendly**: Responsive design that works on all devices
- 🔗 **Webhook Integration**: Send transcriptions to your backend service
- 🔊 **Text-to-Speech**: Optional ElevenLabs integration for voice responses
- ✨ **Smooth Animations**: Subtle animations for enhanced user experience

## Technology Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **Voice Recognition**: Web Speech API
- **Text-to-Speech**: ElevenLabs API (optional)

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment Variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your webhook URL and optional ElevenLabs credentials:
   ```env
   REACT_APP_WEBHOOK_URL=https://your-webhook-url.com/api/chat
   REACT_APP_ELEVENLABS_API_KEY=your_api_key_here
   REACT_APP_ELEVENLABS_VOICE_ID=your_voice_id_here
   ```

3. **Start Development Server**
   ```bash
   npm start
   ```

4. **Open in Browser**
   Navigate to `http://localhost:3000`

## Webhook Integration

The app sends POST requests to your webhook with the following format:

```json
{
  "message": "transcribed user speech",
  "userId": "user-timestamp",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

Your webhook should respond with:

```json
{
  "message": "Smith's response text"
}
```

## ElevenLabs Integration

To enable text-to-speech responses:

1. Sign up for an ElevenLabs account
2. Get your API key from the dashboard
3. Choose or create a voice and get the voice ID
4. Add these to your `.env` file

## Browser Compatibility

- **Speech Recognition**: Works in Chrome, Edge, and Safari
- **Audio Recording**: Fallback for browsers without speech recognition
- **Responsive Design**: Optimized for mobile and desktop

## Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  dark: {
    primary: '#0a0a0a',    // Background
    secondary: '#1a1a1a',  // Message bubbles
    tertiary: '#2a2a2a',   // Cards
    // ... more colors
  }
}
```

### Voice Settings
Modify the ElevenLabs settings in `ChatInterface.js`:

```javascript
voice_settings: {
  stability: 0.5,        // Voice stability (0-1)
  similarity_boost: 0.5  // Voice similarity (0-1)
}
```

## Deployment

### Vercel
```bash
npm run build
# Deploy the build folder to Vercel
```

### Netlify
```bash
npm run build
# Deploy the build folder to Netlify
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this project for personal or commercial use.

## Support

If you encounter any issues or have questions:
1. Check the browser console for error messages
2. Ensure microphone permissions are granted
3. Verify webhook URL is accessible
4. Test with different browsers

---

Built with ❤️ for seamless AI voice interactions
