// Smith AI Voice Interface Configuration
// ====================================
// 
// Edit this file to customize your Smith AI settings.
// After making changes, refresh your browser to apply them.

window.SmithConfig = {
    // Webhook Configuration
    // Replace with your actual webhook URL
    webhookUrl: 'https://httpbin.org/post',
    
    // ElevenLabs Text-to-Speech Configuration (optional)
    // Uncomment and add your credentials to enable voice responses
    elevenLabs: {
        // apiKey: 'your_elevenlabs_api_key_here',
        // voiceId: 'your_voice_id_here',
        
        // Voice settings (adjust as needed)
        voiceSettings: {
            stability: 0.5,        // 0.0 - 1.0
            similarityBoost: 0.5   // 0.0 - 1.0
        }
    },
    
    // UI Customization
    ui: {
        // Smith's name (displayed in chat)
        assistantName: 'Smith',
        
        // Welcome message
        welcomeMessage: "Hello! I'm Smith, your AI assistant. Feel free to speak to me using the microphone button below.",
        
        // Server timeout (milliseconds)
        requestTimeout: 30000,
        
        // Enable auto-scroll to latest message
        autoScroll: true
    },
    
    // Voice Recognition Settings
    voice: {
        // Language for speech recognition
        language: 'en-US',
        
        // Enable continuous listening (experimental)
        continuous: true,
        
        // Show interim results while speaking
        interimResults: true
    }
};

// Advanced: Custom webhook request format
// Modify this function to change how messages are sent to your webhook
window.SmithConfig.formatWebhookRequest = function(message) {
    return {
        message: message,
        userId: 'user-' + Date.now(),
        timestamp: new Date().toISOString(),
        // Add custom fields here
        // sessionId: 'session-123',
        // context: 'voice-interface'
    };
};

// Advanced: Custom response processing
// Modify this function to handle different webhook response formats
window.SmithConfig.processWebhookResponse = function(response) {
    // Default: look for 'message' or 'response' field
    return response.message || response.response || "I received your message, but I'm having trouble responding right now.";
};