import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Calendar, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const SuccessStoriesPreview = () => {
  const featuredStories = [
    {
      id: 1,
      title: "Portfolio",
      category: "Portfolio Websites",
      image: "https://cdn.prod.website-files.com/62c5836076839ad95e36215d/643d1438c834b304d22f8362_FpVTXQKczzRqUMB-b4lIo2SnU9wLVfVcWBhlnGQAgIJtnwN06lwa0C_6jZXZJvsicOX7v9nLEpFdVx-jhaltndCyVJg3bPorEmz1LpbAVD2Cpd7V8jgLkFiG5wduNotCJNWVYV45tNNj7GQTsFIOyUs.png",
      description: "Built a professional portfolio website to showcase academic projects and resume, helping the student stand out to recruiters and build a strong online presence.",
      metrics: {
        improvement: "+60%",
        metric: "Growth Engagement"
      },
      timeline: "3 days"
    },
    {
      id: 2,
      title: "Photo studio",
      category: "Studios and Shops",
      image: "https://colorlib.com/wp/wp-content/uploads/sites/2/creatink-photo-website-template.jpg",
      description: "Boosted online orders by 150% with modern website and delivery integration.",
      metrics: {
        improvement: "+150%",
        metric: "Online Orders"
      },
      timeline: "8 days"
    },
    {
      id: 3,
      title: "Local Static Websites",
      category: "Local Shops and Restaurants",
      image: "https://exchange4media.gumlet.io/news-photo/104876-ShopmaticKiranaWebStores.jpg",
      description: "Expanded customer base across town with local static website.",
      metrics: {
        improvement: "+120%",
        metric: "Customer Reach"
      },
      timeline: "6 days"
    }
  ];

  return (
    <section id='success-stories' className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            See how we've helped businesses across India grow their online presence 
            and achieve remarkable results with our website solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {story.category}
                  </span>
                </div>

                {/* Metrics */}
                <div className="absolute bottom-4 right-4 text-white text-right">
                  <div className="text-2xl font-bold text-green-400">{story.metrics.improvement}</div>
                  <div className="text-xs opacity-90">{story.metrics.metric}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {story.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {story.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-1" />
                    {story.timeline}
                  </div>
                  
                  <button className="flex items-center text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors duration-200">
                    View Details
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Stories CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/"
            className="inline-flex items-center bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 group"
          >
            View All Success Stories
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-green-500 mr-2" />
                <span className="text-3xl font-bold text-gray-900 dark:text-white">500+</span>
              </div>
              <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-blue-500 mr-2" />
                <span className="text-3xl font-bold text-gray-900 dark:text-white">98%</span>
              </div>
              <div className="text-gray-600 dark:text-gray-400">Client Satisfaction</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-purple-500 mr-2" />
                <span className="text-3xl font-bold text-gray-900 dark:text-white">150%</span>
              </div>
              <div className="text-gray-600 dark:text-gray-400">Average Growth</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-orange-500 mr-2" />
                <span className="text-3xl font-bold text-gray-900 dark:text-white">24/7</span>
              </div>
              <div className="text-gray-600 dark:text-gray-400">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStoriesPreview;