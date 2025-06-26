import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Nunsavath Nithin",
      business: "Data Analytics",
      businessType: "Portfolio",
      rating: 5,
      review: "WebLokiq did an amazing job building my portfolio website. As a student in Data Analytics, I needed a clean and professional site to showcase my projects and resume. The design is sleek, mobile-friendly, and really highlights my work. I've already received positive feedback from peers and recruiters!",
      avatar: "https://noonsavath-nithin.web.app/assets/Nithin_Portfolio_pic-Dw8nE6rU.jpg"
    },

    {
      id: 2,
      name: "Ganesh",
      business: "Ganesh Edits",
      businessType: "Video Editing Services",
      rating: 5,
      review: "WebLokiq brought my vision to life with a stunning website for my video editing services. The layout is sleek, fast, and showcases my work beautifully. Clients can now view my portfolio and contact me easily. It’s boosted my visibility and helped attract more professional projects!",
      avatar: "https://lokeshnath-kodavandla.github.io/Gani/images/IMG-20241231-WA0181.jpg"
    },

    {
      id: 3,
      name: "Shiva",
      business: "Friends Studios",
      businessType: "Photography Studio",
      rating: 5,
      review: "The portfolio website they created for my photography studio is absolutely stunning. Client inquiries have doubled, and the booking system makes everything so much easier to manage.Photography Services Made easy with this application.",
      avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
    // {
    //   id: 4,
    //   name: "Vikram Singh",
    //   business: "Wanderlust Travels",
    //   businessType: "Travel Agency",
    //   rating: 5,
    //   review: "Professional service at an incredibly affordable price. Our travel packages are now beautifully displayed online, and we've expanded our customer base across 5 states. Highly recommended!",
    //   avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150"
    // },
    // {
    //   id: 5,
    //   name: "Meera Joshi",
    //   business: "Fresh Mart Grocery",
    //   businessType: "Local Business",
    //   rating: 5,
    //   review: "During the pandemic, WebLokiq's e-commerce solution saved our business. Online orders increased by 200%, and customers love the easy ordering process. Best investment we made!",
    //   avatar: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150"
    // },
    // {
    //   id: 6,
    //   name: "Arjun Gupta",
    //   business: "TechSupersolution Solutions",
    //   businessType: "Startup",
    //   rating: 5,
    //   review: "As a startup, budget was our main concern. WebLokiq delivered a professional website that helped us secure 3 major clients. The quality is exceptional for the price point.",
    //   avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150"
    // }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business owners across India 
            say about their experience with WebLokiq.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-primary-100 dark:text-primary-900/30">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(review.rating)}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed italic">
                "{review.review}"
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {review.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {review.business}
                  </p>
                  <p className="text-xs text-primary-600 dark:text-primary-400">
                    {review.businessType}
                  </p>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary-500/20 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-primary-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-primary-100">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-primary-100">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">150%</div>
              <div className="text-primary-100">Avg. Growth</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Let us help you create your own success story with a professional website 
            that grows your business and engages your customers.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-all duration-200"
          >
            Get Your Website Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;