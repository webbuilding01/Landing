import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SuccessStories from './pages/SuccessStories';
import WhatsAppButton from './components/WhatsAppButton';
import AIChatBot from './components/AIChatBot';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/success-stories" element={<SuccessStories />} />
          </Routes>
          <WhatsAppButton />
          <AIChatBot />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;