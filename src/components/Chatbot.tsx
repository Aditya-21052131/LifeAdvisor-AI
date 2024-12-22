import React, { useState } from 'react';
import { Bot, Minimize2, Maximize2, X } from 'lucide-react';
import { Message } from './chatbot/Message';
import { MessageInput } from './chatbot/MessageInput';
import { QuickActions } from './chatbot/QuickActions';
import { useChat } from '../hooks/useChat';

export function Chatbot() {
  const { messages, input, setInput, handleSend, handleQuickAction } = useChat();
  const [isMinimized, setIsMinimized] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all"
      >
        <Bot className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className={`
      fixed bottom-4 right-4 bg-white rounded-lg shadow-lg flex flex-col
      transition-all duration-300 ease-in-out
      ${isMinimized ? 'h-[60px]' : 'h-[500px]'}
      w-full max-w-[360px] sm:max-w-[400px]
    `}>
      <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center">
          <Bot className="h-6 w-6 mr-2" />
          <h2 className="font-semibold">Insurance Advisor</h2>
        </div>
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 hover:bg-blue-700 rounded"
          >
            {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
          </button>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-blue-700 rounded"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      {!isMinimized && (
        <>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <Message key={message.id} message={message} />
            ))}
          </div>
          
          <QuickActions onSelect={handleQuickAction} />
          
          <MessageInput 
            input={input}
            setInput={setInput}
            handleSend={handleSend}
          />
        </>
      )}
    </div>
  );
}