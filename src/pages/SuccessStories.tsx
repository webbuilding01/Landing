import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Calendar, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      title: "Sunshine Public School",
      category: "Educational Institution",
      image: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "A comprehensive school website featuring online admissions, faculty profiles, academic calendar, and student portal. Increased parent engagement by 60% and streamlined admissions process.",
      features: ["Online Admission System", "Student Portal", "Faculty Directory", "Event Calendar", "Mobile Responsive"],
      timeline: "Completed in 15 days",
      clientCount: "500+ Students",
      url: "#"
    },
    {
      id: 2,
      title: "Café Aroma",
      category: "Restaurant & Café",
      image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Modern café website with online menu, table booking system, and food delivery integration. Boosted online orders by 150% within the first month of launch.",
      features: ["Online Menu", "Table Booking", "Delivery Integration", "Customer Reviews", "Social Media Feed"],
      timeline: "Completed in 12 days",
      clientCount: "200+ Daily Visitors",
      url: "#"
    },
    {
      id: 3,
      title: "ShutterCraft Studios",
      category: "Photography Studio",
      image: "https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Elegant portfolio website showcasing wedding, portrait, and event photography. Enhanced client bookings by 80% with integrated booking system and gallery showcase.",
      features: ["Photo Gallery", "Booking System", "Client Portal", "Package Display", "Social Proof"],
      timeline: "Completed in 10 days",
      clientCount: "50+ Bookings/Month",
      url: "#"
    },
    {
      id: 4,
      title: "Wanderlust Travels",
      category: "Travel Agency",
      image: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Dynamic travel website with tour packages, booking system, and customer testimonials. Increased package bookings by 120% and expanded customer base across 5 states.",
      features: ["Tour Packages", "Online Booking", "Payment Gateway", "Customer Reviews", "Travel Blog"],
      timeline: "Completed in 18 days",
      clientCount: "300+ Happy Travelers",
      url: "#"
    },
    {
      id: 5,
      title: "TechStart Solutions",
      category: "Startup",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Professional startup website highlighting services, team, and client work. Helped secure 3 major clients and improved brand credibility significantly.",
      features: ["Service Portfolio", "Team Profiles", "Client Testimonials", "Contact Forms", "Blog Section"],
      timeline: "Completed in 14 days",
      clientCount: "10+ Enterprise Clients",
      url: "#"
    },
    {
      id: 6,
      title: "Fresh Mart Grocery",
      category: "Local Business",
      image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "E-commerce website for local grocery store with online ordering, delivery tracking, and inventory management. Increased sales by 200% during pandemic.",
      features: ["Product Catalog", "Online Ordering", "Delivery Tracking", "Customer Accounts", "Inventory System"],
      timeline: "Completed in 20 days",
      clientCount: "500+ Regular Customers",
      url: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link
            to="/"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Success Stories
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
            Discover how we've helped businesses across India establish their online presence 
            and achieve remarkable growth with our affordable website solutions.
          </p>
        </motion.div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {story.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {story.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {story.description}
                </p>

                {/* Stats */}
                <div className="flex items-center space-x-6 mb-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {story.timeline}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {story.clientCount}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {story.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200">
                  View Live Site
                  <ExternalLink className="w-4 h-4 ml-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their business with our 
            affordable website solutions. Let's create your success story together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contact"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
            >
              Order Now
            </Link>
            <Link
              to="/#contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              Book a Meeting
            </Link>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SuccessStories;