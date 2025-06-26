import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Coffee, Camera, Plane, ShoppingBag, Rocket, Users, Building } from 'lucide-react';

const WhatWeOfferSection = () => {
  const businessCategories = [
    {
      icon: GraduationCap,
      title: "Schools & Colleges",
      description: "Educational websites with student portals, online admissions, faculty profiles, and academic calendars.",
      features: ["Online Admissions", "Student Portal", "Faculty Directory", "Academic Calendar"]
    },
    {
      icon: Coffee,
      title: "Cafes & Restaurants",
      description: "Food business websites with online menus, table booking, delivery integration, and customer reviews.",
      features: ["Digital Menu", "Table Booking", "Delivery Integration", "Customer Reviews"]
    },
    {
      icon: Camera,
      title: "Photo Studios",
      description: "Portfolio websites showcasing your work with gallery management, client booking, and package displays.",
      features: ["Photo Gallery", "Client Booking", "Package Display", "Portfolio Showcase"]
    },
    {
      icon: Plane,
      title: "Travel Agencies",
      description: "Travel websites with tour packages, booking systems, itinerary management, and customer testimonials.",
      features: ["Tour Packages", "Booking System", "Itinerary Plans", "Travel Blog"]
    },
    {
      icon: ShoppingBag,
      title: "Local Shops & Stores",
      description: "E-commerce websites for local businesses with product catalogs, inventory management, and online payments.",
      features: ["Product Catalog", "Inventory System", "Online Payments", "Order Tracking"]
    },
    {
      icon: Rocket,
      title: "Startups & Tech Companies",
      description: "Professional corporate websites with service portfolios, team profiles, and client testimonials.",
      features: ["Service Portfolio", "Team Profiles", "Client Work", "Contact Forms"]
    },
    {
      icon: Users,
      title: "Personal Portfolios",
      description: "Individual portfolio websites for professionals, artists, and freelancers to showcase their work in low cost with 499.",
      features: ["Work Portfolio", "About Section", "Contact Info", "Social Links"]
    },
    {
      icon: Building,
      title: "Professional Services",
      description: "Service-based business websites for consultants, doctors, lawyers, and other professionals.",
      features: ["Service Details", "Appointment Booking", "Client Testimonials", "Contact Forms"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What We Offer
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Specialized website solutions for every type of business. We understand your industry 
            and create websites that drive results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {businessCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-600"
            >
              {/* Icon */}
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-primary-500 to-accent-500 p-3 rounded-full w-fit">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                {category.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-4 leading-relaxed">
                {category.description}
              </p>

              {/* Features */}
              <div className="space-y-1">
                {category.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary-500/20 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-accent-50 to-primary-50 dark:from-accent-900/20 dark:to-primary-900/20 rounded-2xl p-8 md:p-12 border border-accent-100 dark:border-accent-800">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Don't See Your Business Type?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              We work with all types of businesses! Contact us to discuss your specific requirements 
              and we'll create a custom solution just for you.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition-all duration-200"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;