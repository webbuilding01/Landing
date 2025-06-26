import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Zap, ShoppingCart, Settings } from 'lucide-react';

const WebsiteTypesSection = () => {
  const websiteTypes = [
    {
      icon: Globe,
      title: "Static Websites",
      price: "₹499 - ₹4,999",
      description: "Perfect for portfolios, small businesses, and informational websites. Fast loading, SEO-friendly, and easy to maintain.",
      features: [
        "5-10 pages",
        "Mobile responsive",
        "Contact forms",
        "SEO optimized",
        "Social media integration",
        "1-year free hosting"
      ],
      bestFor: "Portfolios, Consultants, Small Businesses",
      deliveryTime: "2-5 days"
    },
    {
      icon: Zap,
      title: "Dynamic Websites",
      price: "₹5000 - ₹12,999",
      description: "Interactive websites with admin panels, user accounts, and dynamic content management. Perfect for growing businesses.",
      features: [
        "Admin panel",
        "User accounts",
        "Content management",
        "Database integration",
        "Newsletter system",
        "Analytics dashboard"
      ],
      bestFor: "Schools, Agencies, Growing Businesses",
      deliveryTime: "7-14 days"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Websites",
      price: "₹18,000 - ₹25,000",
      description: "Full-featured online stores with payment gateways, inventory management, and order tracking systems.",
      features: [
        "Product catalog",
        "Shopping cart",
        "Payment gateway",
        "Order management",
        "Inventory tracking",
        "Customer accounts"
      ],
      bestFor: "Retail Stores, Online Businesses",
      deliveryTime: "15-21 days"
    },
    {
      icon: Settings,
      title: "CMS-based Websites",
      price: "₹5,000 - ₹20,000",
      description: "WordPress or Shopify websites with custom themes and plugins. Easy to update and manage content yourself.",
      features: [
        "Custom themes",
        "Plugin integration",
        "Easy content updates",
        "SEO optimization",
        "Backup systems",
        "Training provided"
      ],
      bestFor: "Blogs, News Sites, Online Stores",
      deliveryTime: "8-12 days"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Website Types We Build
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Choose the perfect solution for your business needs. All websites include 
            mobile responsiveness, SEO optimization, and free maintenance for 6 months.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {websiteTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-600"
            >
              {/* Header */}
              <div className="p-8 pb-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <div className="relative bg-gradient-to-r from-primary-500 to-accent-500 p-3 rounded-full">
                      <type.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                      {type.price}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {type.deliveryTime}
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {type.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {type.description}
                </p>

                <div className="mb-4">
                  <div className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Best for: {type.bestFor}
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="px-8 pb-8">
                <div className="bg-gray-50 dark:bg-gray-600 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                    What's Included:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {type.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="px-8 pb-8">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 shadow-lg"
                >
                  Get Started with {type.title}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              All Packages Include
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-900 dark:text-white">Free Hosting</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">1 Year Included</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-900 dark:text-white">SSL Certificate</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Security Included</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-900 dark:text-white">Mobile Responsive</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">All Devices</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-900 dark:text-white">6 Months Support</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Free Maintenance</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WebsiteTypesSection;