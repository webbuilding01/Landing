import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Why should we choose WebLokiq over other web development companies?",
      answer: "WebLokiq specializes in affordable, high-quality websites for small and medium businesses in India. We understand local market needs, offer transparent pricing starting from ₹399, provide 24/7 support, and deliver projects within 2-5 days. Our focus on Indian businesses means we create solutions that actually work for your target audience and budget."
    },
    {
      question: "How fast can you deliver our website?",
      answer: "Delivery time depends on the complexity of your project: Static websites (2-5 days), Dynamic websites (7-12 days), E-commerce websites (15-21 days), and CMS-based websites (8-12 days). We provide regular updates throughout the development process and ensure quality delivery within the promised timeline."
    },
    {
      question: "What is the average cost of a website from WebLokiq?",
      answer: "Our pricing is transparent and affordable: Static websites start from ₹399, Dynamic websites from ₹5,000, E-commerce websites from ₹15,000, and CMS-based websites from ₹5,000. All packages include 1-year free hosting, SSL certificate, mobile responsiveness, and 6 months of free maintenance."
    },
    {
      question: "Do you offer website maintenance and support after launch?",
      answer: "Yes! Every website comes with 6 months of free maintenance and support. This includes security updates, bug fixes, content updates, and technical support. After the free period, we offer affordable maintenance packages starting from ₹500/month to keep your website running smoothly."
    },
    {
      question: "Can you help with SEO and digital marketing for our website?",
      answer: "Absolutely! All our websites are built with SEO best practices including fast loading speeds, mobile optimization, clean code, and proper meta tags. We also offer additional SEO services, Google Ads management, and social media marketing to help grow your online presence and attract more customers."
    },
    {
      question: "What if we need changes or updates to our website later?",
      answer: "We provide unlimited revisions during the development phase. After launch, minor changes are included in your 6-month free maintenance. For major changes or new features, we offer competitive rates and can easily update your website as your business grows and evolves."
    },
    {
      question: "Do you work with businesses outside of India?",
      answer: "While we specialize in serving Indian businesses and understand the local market well, we do work with international clients. However, our expertise and pricing are optimized for the Indian market, small businesses, and local requirements."
    },
    {
      question: "What makes your websites mobile-friendly and fast?",
      answer: "We use modern technologies like React, optimized images, clean code, and responsive design principles. All websites are tested on multiple devices and browsers. We also optimize for Core Web Vitals, compress images, and use fast hosting to ensure your website loads quickly on all devices."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Get answers to common questions about our services, pricing, and process. 
            Can't find what you're looking for? Contact us directly!
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <Minus className="w-6 h-6 text-primary-600" />
                  ) : (
                    <Plus className="w-6 h-6 text-primary-600" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-6">
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-2xl p-8 md:p-12 border border-primary-100 dark:border-primary-800"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            We're here to help! Get in touch with our team for personalized answers 
            and a free consultation about your website project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition-all duration-200"
            >
              Contact Us
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Schedule a Call
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;