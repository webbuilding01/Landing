import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, X, Minimize2 } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const AIChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm WebLokiq's AI assistant. I can help you with information about our website services, pricing, and more. How can I assist you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');

  const predefinedResponses: { [key: string]: string } = {
    'pricing': "Our website packages start from just ₹399! Here's our pricing:\n\n• Static Websites: ₹499 - ₹4,999\n• Dynamic Websites: ₹5,000 - ₹12,999\n• E-commerce Sites: ₹18,000 - ₹25,000\n• CMS Websites: ₹8,000 - ₹20,000\n\nAll packages include 1-year free hosting and 6 months maintenance!",
    'services': "We offer comprehensive website solutions:\n\n• Custom Website Development\n• E-commerce Platforms\n• Mobile-Responsive Design\n• SEO Optimization\n• Content Management Systems\n• Website Maintenance\n• Digital Marketing\n\nWe specialize in serving schools, cafés, photo studios, travel agencies, and all small businesses across India!",
    'delivery': "Our delivery timeline is super fast:\n\n• Static Websites: 2-5 days\n• Dynamic Websites: 7-12 days\n• E-commerce Sites: 15-21 days\n• CMS Websites: 8-12 days\n\nWe provide regular updates throughout the development process!",
    'contact': "You can reach us through:\n\n📱 WhatsApp: +91 9059568329\n📧 Email: weblokiq@gmail.com\n🕒 Available: 24/7 for urgent queries\n\nClick the WhatsApp button to chat with our team directly!",
    'support': "We provide excellent support:\n\n• 6 months FREE maintenance\n• 24/7 technical support\n• Regular security updates\n• Content updates included\n• Training for website management\n\nAfter free period: Maintenance from ₹500/month",
    'default': "I'd be happy to help! I can provide information about:\n\n• Pricing and packages\n• Services we offer\n• Delivery timelines\n• Contact information\n• Support and maintenance\n\nJust ask me about any of these topics, or type 'contact' to get in touch with our team!"
  };

  const getResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('price') || message.includes('cost') || message.includes('pricing')) {
      return predefinedResponses.pricing;
    } else if (message.includes('service') || message.includes('what do you do') || message.includes('offer')) {
      return predefinedResponses.services;
    } else if (message.includes('delivery') || message.includes('time') || message.includes('fast') || message.includes('how long')) {
      return predefinedResponses.delivery;
    } else if (message.includes('contact') || message.includes('phone') || message.includes('email') || message.includes('reach')) {
      return predefinedResponses.contact;
    } else if (message.includes('support') || message.includes('maintenance') || message.includes('help')) {
      return predefinedResponses.support;
    } else if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Welcome to WebLokiq! 👋 We build beautiful, affordable websites for businesses across India. How can I help you today?";
    } else {
      return predefinedResponses.default;
    }
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getResponse(inputText),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* AI Chat Button */}
      <motion.div
        className="fixed bottom-6 left-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2.5, type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white p-2 rounded-full shadow-lg transition-all duration-200 relative"
        >
          <Bot className="w-8 h-8" />
          
          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-purple-500 animate-ping opacity-20"></div>
          
          {/* Notification dot */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
        </motion.button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`fixed bottom-20  left-6 z-40 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-80 max-w-[calc(100vw-3rem)]  ${
              isMinimized ? 'h-14' : 'h-82'
            } transition-all duration-300`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-full mr-3">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">WebLokiq AI</h3>
                  <p className="text-xs text-green-500">Online</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  <Minimize2 className="w-4 h-4 text-gray-500" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-1 p-4 h-48 overflow-y-auto space-y-3">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg text-sm ${
                          message.isBot
                            ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                            : 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                        }`}
                      >
                        <div className="whitespace-pre-line">{message.text}</div>
                        <div className={`text-xs mt-1 ${
                          message.isBot ? 'text-gray-500' : 'text-purple-100'
                        }`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Input */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask about our services..."
                      className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white text-sm"
                    />
                    <motion.button
                      onClick={handleSendMessage}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white p-2 rounded-lg transition-all duration-200"
                    >
                      <Send className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatBot;