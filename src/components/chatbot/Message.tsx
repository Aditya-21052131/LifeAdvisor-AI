import React from 'react';
import type { ChatMessage } from '../../types';

interface MessageProps {
  message: ChatMessage;
}

export function Message({ message }: MessageProps) {
  return (
    <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] p-3 rounded-lg ${
          message.sender === 'user'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-800'
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}