import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone, Mail, Clock } from 'lucide-react';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = "+919059568329"; 
  const email = "weblokiq@gmail.com";

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in getting a website for my business. Can you help me?");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const handleEmailClick = () => {
    window.open(`mailto:${email}?subject=Website Inquiry&body=Hi! I'm interested in getting a website for my business.`, '_blank');
  };

  const handleCallClick = () => {
    window.open(`tel:${whatsappNumber}`, '_blank');
  };

  return (
    <>
      {/* Main WhatsApp Button */}
      <motion.div
        className="fixed bottom-4 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors duration-200 relative"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="whatsapp"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
        </motion.button>
      </motion.div>

      {/* Contact Options Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 z-40 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 w-80 max-w-[calc(100vw-3rem)]"
          >
            {/* Header */}
            <div className="mb-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                Get in Touch with WebLokiq
              </h3>
            </div>

            {/* Contact Options */}
            <div className="space-y-3">
              {/* WhatsApp */}
              <motion.button
                onClick={handleWhatsAppClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center p-3 bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 rounded-lg transition-colors duration-200 group"
              >
                <div className="bg-green-500 p-2 rounded-full mr-3">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-medium text-gray-900 dark:text-white">WhatsApp Chat</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Quick response guaranteed</div>
                </div>
              </motion.button>

              {/* Phone Call */}
              <motion.button
                onClick={handleCallClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center p-3 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-colors duration-200 group"
              >
                <div className="bg-blue-500 p-2 rounded-full mr-3">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-medium text-gray-900 dark:text-white">Call Us</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{whatsappNumber}</div>
                </div>
              </motion.button>

              {/* Email */}
              <motion.button
                onClick={handleEmailClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center p-3 bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 rounded-lg transition-colors duration-200 group"
              >
                <div className="bg-purple-500 p-2 rounded-full mr-3">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-medium text-gray-900 dark:text-white">Email Us</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{email}</div>
                </div>
              </motion.button>
            </div>

            {/* Business Hours 
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <Clock className="w-4 h-4 mr-2" />
                <span>Available 24/7 for urgent queries</span>
              </div>
            </div>

             Services 
            <div className="mt-3">
              <div className="text-xs text-gray-500 dark:text-gray-500">
                ✓ Website Development ✓ E-commerce ✓ Mobile Apps ✓ SEO Services
              </div>
            </div>
            */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppButton;