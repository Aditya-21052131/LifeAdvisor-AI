import React from 'react';
import { Send } from 'lucide-react';

interface MessageInputProps {
  input: string;
  setInput: (value: string) => void;
  handleSend: () => void;
}

export function MessageInput({ input, setInput, handleSend }: MessageInputProps) {
  return (
    <div className="p-4 border-t">
      <div className="flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type your message..."
          className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}