import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ChatMessage from './ChatMessage';
import TypingIndicator from './TypingIndicator';
import VoiceRecorder from './VoiceRecorder';
import { Bot, Zap } from 'lucide-react';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isProcessing]);

  useEffect(() => {
    // Add welcome message from Smith
    setMessages([{
      id: 1,
      text: "Hello! I'm Smith, your AI assistant. Feel free to speak to me using the microphone button below.",
      isSmith: true,
      timestamp: new Date().toISOString()
    }]);
  }, []);

  const handleTranscription = async (transcription) => {
    if (!transcription.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: transcription,
      isSmith: false,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsProcessing(true);

    try {
      // Send to webhook - replace with your actual webhook URL
      const webhookUrl = process.env.REACT_APP_WEBHOOK_URL || 'https://your-webhook-url.com/api/chat';
      
      const response = await axios.post(webhookUrl, {
        message: transcription,
        userId: 'user-' + Date.now(),
        timestamp: new Date().toISOString()
      }, {
        headers: {
          'Content-Type': 'application/json'
        },
        timeout: 30000 // 30 second timeout
      });

      // Add Smith's response
      const smithMessage = {
        id: Date.now() + 1,
        text: response.data.message || response.data.response || "I received your message, but I'm having trouble responding right now.",
        isSmith: true,
        timestamp: new Date().toISOString()
      };

      setMessages(prev => [...prev, smithMessage]);

      // Optional: Use ElevenLabs to speak the response
      if (response.data.message || response.data.response) {
        await speakText(smithMessage.text);
      }

    } catch (error) {
      console.error('Error sending message to webhook:', error);
      
      // Add error message from Smith
      const errorMessage = {
        id: Date.now() + 1,
        text: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment.",
        isSmith: true,
        timestamp: new Date().toISOString()
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsProcessing(false);
    }
  };

  const speakText = async (text) => {
    try {
      // Replace with your ElevenLabs API key and voice ID
      const elevenLabsApiKey = process.env.REACT_APP_ELEVENLABS_API_KEY;
      const voiceId = process.env.REACT_APP_ELEVENLABS_VOICE_ID || 'default-voice-id';

      if (!elevenLabsApiKey) {
        console.log('ElevenLabs API key not configured');
        return;
      }

      const response = await axios.post(
        `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
        {
          text: text,
          model_id: "eleven_monolingual_v1",
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.5
          }
        },
        {
          headers: {
            'Accept': 'audio/mpeg',
            'Content-Type': 'application/json',
            'xi-api-key': elevenLabsApiKey
          },
          responseType: 'blob'
        }
      );

      // Play the audio
      const audioUrl = URL.createObjectURL(response.data);
      const audio = new Audio(audioUrl);
      await audio.play();
      
      // Clean up
      audio.onended = () => URL.revokeObjectURL(audioUrl);
    } catch (error) {
      console.error('Error with text-to-speech:', error);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-dark-primary">
      {/* Header */}
      <div className="glass-effect p-4 border-b border-dark-border">
        <div className="flex items-center justify-center space-x-3">
          <div className="relative">
            <Bot className="w-8 h-8 text-blue-neon" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-neon rounded-full animate-pulse"></div>
          </div>
          <div>
            <h1 className="text-xl font-bold text-dark-text">Smith</h1>
            <p className="text-sm text-dark-muted">AI Assistant</p>
          </div>
          <Zap className="w-6 h-6 text-blue-neon animate-pulse" />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="max-w-4xl mx-auto">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message.text}
              isSmith={message.isSmith}
              timestamp={message.timestamp}
            />
          ))}
          
          {isProcessing && <TypingIndicator />}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Voice Input */}
      <div className="glass-effect border-t border-dark-border">
        <VoiceRecorder 
          onTranscription={handleTranscription}
          isProcessing={isProcessing}
        />
        
        <div className="text-center pb-4">
          <p className="text-xs text-dark-muted">
            Tap the microphone to speak with Smith
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;