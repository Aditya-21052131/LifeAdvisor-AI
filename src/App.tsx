import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Dashboard } from './components/Dashboard';
import { Chatbot } from './components/Chatbot';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <main className="max-w-7xl mx-auto">
        <Dashboard />
        <Chatbot />
      </main>
    </div>
  );
}

export default App;