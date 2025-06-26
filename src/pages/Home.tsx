import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import OrderSection from '../components/sections/OrderSection';
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection';
import WhatWeOfferSection from '../components/sections/WhatWeOfferSection';
import WebsiteTypesSection from '../components/sections/WebsiteTypesSection';
import SuccessStoriesPreview from '../components/sections/SuccessStoriesPreview';
import ToolsSection from '../components/sections/ToolsSection';
import ReviewsSection from '../components/sections/ReviewsSection';
import FAQSection from '../components/sections/FAQSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <OrderSection />
      <WhyChooseUsSection />
      <WhatWeOfferSection />
      <WebsiteTypesSection />
      <SuccessStoriesPreview />
      <ToolsSection />
      <ReviewsSection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Home;