import React from 'react';

const TypingIndicator = () => {
  return (
    <div className="flex justify-start mb-4">
      <div className="message-bubble rounded-2xl px-4 py-3 bg-dark-secondary border border-dark-border">
        <div className="text-xs text-blue-neon font-medium mb-1">Smith</div>
        <div className="flex items-center space-x-1">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-dark-muted rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-dark-muted rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-dark-muted rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <span className="text-sm text-dark-muted ml-2">thinking...</span>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;