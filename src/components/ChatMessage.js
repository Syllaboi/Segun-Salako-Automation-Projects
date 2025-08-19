import React from 'react';

const ChatMessage = ({ message, isSmith = false, timestamp }) => {
  return (
    <div className={`flex ${isSmith ? 'justify-start' : 'justify-end'} mb-4 animate-slide-up`}>
      <div className={`message-bubble rounded-2xl px-4 py-3 ${
        isSmith 
          ? 'bg-dark-secondary border border-dark-border text-dark-text' 
          : 'bg-blue-neon text-dark-primary'
      }`}>
        {isSmith && (
          <div className="text-xs text-blue-neon font-medium mb-1">Smith</div>
        )}
        <div className="text-sm md:text-base leading-relaxed">
          {message}
        </div>
        {timestamp && (
          <div className={`text-xs mt-2 ${
            isSmith ? 'text-dark-muted' : 'text-dark-primary opacity-70'
          }`}>
            {new Date(timestamp).toLocaleTimeString([], { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;