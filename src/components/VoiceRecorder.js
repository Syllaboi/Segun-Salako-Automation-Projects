import React, { useState, useRef, useEffect } from 'react';
import { Mic, MicOff, Send } from 'lucide-react';

const VoiceRecorder = ({ onTranscription, isProcessing }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    // Initialize Speech Recognition if available
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('');

        if (event.results[event.results.length - 1].isFinal) {
          onTranscription(transcript);
          setIsListening(false);
        }
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [onTranscription]);

  const startRecording = async () => {
    try {
      // Start speech recognition if available
      if (recognitionRef.current && !isListening) {
        recognitionRef.current.start();
        setIsListening(true);
        return;
      }

      // Fallback to media recorder for audio recording
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      
      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setAudioChunks(prev => [...prev, event.data]);
        }
      };

      recorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        // Here you would typically send the audio to a transcription service
        // For now, we'll just show a placeholder message
        onTranscription("Audio recorded - transcription would happen here");
        setAudioChunks([]);
      };

      recorder.start();
      setMediaRecorder(recorder);
      setIsRecording(true);
    } catch (error) {
      console.error('Error starting recording:', error);
    }
  };

  const stopRecording = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
      return;
    }

    if (mediaRecorder && isRecording) {
      mediaRecorder.stop();
      mediaRecorder.stream.getTracks().forEach(track => track.stop());
      setIsRecording(false);
      setMediaRecorder(null);
    }
  };

  const toggleRecording = () => {
    if (isRecording || isListening) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const isActive = isRecording || isListening;

  return (
    <div className="flex items-center justify-center p-4">
      <button
        onClick={toggleRecording}
        disabled={isProcessing}
        className={`
          mic-button w-16 h-16 rounded-full flex items-center justify-center
          transition-all duration-300 ease-out
          ${isActive 
            ? 'bg-red-500 animate-recording neon-glow' 
            : 'bg-blue-neon hover:bg-blue-dark neon-glow'
          }
          ${isProcessing ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'}
          focus:outline-none focus:ring-4 focus:ring-blue-neon focus:ring-opacity-30
        `}
      >
        {isActive ? (
          <MicOff className="w-6 h-6 text-white" />
        ) : (
          <Mic className="w-6 h-6 text-dark-primary" />
        )}
      </button>
      
      {isActive && (
        <div className="ml-4 text-sm text-dark-muted animate-pulse">
          {isListening ? 'Listening...' : 'Recording...'}
        </div>
      )}
    </div>
  );
};

export default VoiceRecorder;