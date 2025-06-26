import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Zap, Target, Award, Clock, Shield } from 'lucide-react';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Lowest Prices in India",
      description: "Premium websites starting from just ₹499. No hidden costs, transparent pricing for every budget."
    },
    {
      icon: Target,
      title: "Custom Designs for Each Business",
      description: "Tailored solutions that reflect your brand identity and business goals, not cookie-cutter templates."
    },
    {
      icon: Zap,
      title: "Fast Delivery & SEO-Ready Sites",
      description: "Get your website live in 2-7 days with built-in SEO optimization to rank higher on Google."
    },
    {
      icon: Award,
      title: "We Build for Small-Scale Businesses",
      description: "Specialized in understanding the unique needs of local Indian businesses and startups."
    },
    {
      icon: Clock,
      title: "24/7 Support & Maintenance",
      description: "Round-the-clock support to ensure your website runs smoothly without any interruptions."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "SSL certificates, regular backups, and security updates to keep your website safe and protected."
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose WebLokiq?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We understand the challenges of small businesses in India and provide affordable, 
            high-quality web solutions tailored to your specific needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-primary-500 to-primary-600 p-3 rounded-full w-fit">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-primary-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">₹499</div>
              <div className="text-primary-100">Starting Price</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">2-21</div>
              <div className="text-primary-100">Days Delivery</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-primary-100">Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;