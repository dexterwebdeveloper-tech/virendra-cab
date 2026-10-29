import React from 'react';
import Carousel from './Carousel';
import SpecialOffers from '../pages/SpecialOffers';
import Abouthome from '../pages/About';
import Destination from '../pages/Destination';
import PopularPackages from '../pages/PopularPackages';
import Testimonial from '../pages/Testimonial';
import NewsSection from '../pages/NewsSection';
import PlatformSection from '../pages/PlatformSection';
import Blog from '../pages/Blog';
import VideoSlider from './VideoSlider';



const HeroSection = () => {
  
  return (

    <div className="th-hero-wrapper hero-1" id="hero">
              {/* <Carousel/> */}
              <VideoSlider/>
              <SpecialOffers/>
              <Abouthome/>
              <Destination/>
              <PopularPackages/>
              <Testimonial/>
              {/* <NewsSection/> */}
              <Blog/>
              <PlatformSection/>
    </div>
  );
};

export default HeroSection;
