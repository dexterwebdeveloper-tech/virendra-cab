
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "./Testimonial.css";

const testimonials = [
  {
    name: "Mr. Rahul Patil",
    designation: "Outstation Cab Traveler",
    image: "/images/testimonial/testimonial-1.jpeg",
    message:
      "I booked Virendra Cabs for a Pune to Mumbai Airport transfer. The cab was comfortable, the pickup was well coordinated, and the overall journey was convenient. A great option for airport cab services in Pune.",
    date: "Jan 20, 2025",
  },
  {
    name: "Miss. Priya Sharma",
    designation: "Family Tour Traveler",
    image: "/images/testimonial/testimonial-1.jpeg",
    message:
      "Our family planned a Pune to Mahabaleshwar trip with Virendra Cabs. The vehicle was spacious and comfortable, and the travel arrangements were convenient. We enjoyed our sightseeing journey and family vacation.",
    date: "Feb 12, 2025",
  },
  {
    name: "Mr. Amit Deshmukh",
    designation: "Corporate Traveler",
    image: "/images/testimonial/testimonial-1.jpeg",
    message:
      "Virendra Cabs provided a convenient cab service for our corporate travel requirements in Pune. The booking process was simple, communication was clear, and the transportation arrangements were professionally managed.",
    date: "Mar 05, 2025",
  },
  {
    name: "Miss. Sneha Kulkarni",
    designation: "Airport Transfer Traveler",
    image: "/images/testimonial/testimonial-1.jpeg",
    message:
      "I chose Virendra Cabs for my Pune Airport pickup and drop requirements. The travel experience was comfortable, and the cab booking process was easy. I would consider their services again for local and airport travel.",
    date: "Apr 18, 2025",
  },
  {
    name: "Mr. Sagar Jadhav",
    designation: "Pilgrimage Tour Traveler",
    image: "/images/testimonial/testimonial-1.jpeg",
    message:
      "We arranged a Pune to Shirdi Darshan cab through Virendra Cabs. The vehicle was suitable for our family, and the journey was comfortable. It was a convenient transportation option for our religious trip.",
    date: "May 10, 2025",
  },
  {
    name: "Miss. Neha Joshi",
    designation: "Group Tour Traveler",
    image: "/images/testimonial/testimonial-1.jpeg",
    message:
      "Our group selected Virendra Cabs for a sightseeing trip from Pune. The transportation arrangements made it easier for everyone to travel together. The vehicle was comfortable, and we had an enjoyable group journey.",
    date: "Jun 22, 2025",
  },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        {/* <div className="user-img">
          <img
            src={testimonial.image}
            alt={testimonial.name}
          />
        </div> */}

        <div className="user-info">
          <p className="name">{testimonial.name}</p>
          {/* <p className="designation">
            {testimonial.designation}
          </p> */}
        </div>
      </div>

      <div className="testimonial-body">
        <p className="pera">{testimonial.message}</p>
      </div>

      {/* <div className="testimonial-footer">
        <div className="logo">
          <img
            src="/images/logo/logo.png"
            alt="Virendra Cabs Logo"
            className="changeLogo"
          />
        </div>

        <p className="date">{testimonial.date}</p>
      </div> */}
    </div>
  );
};

const Testimonial = () => {
  const swiperSettings = {
    modules: [Autoplay],
    slidesPerView: 3,
    spaceBetween: 24,
    loop: true,
    speed: 5000,
    allowTouchMove: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  };

  return (
    <section
      className="testimonial-area bottom-padding"
      id="testimonials"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-7">
            <div className="section-title mx-430 mx-auto text-center">
              <span className="highlights">
                Virendra Cabs Testimonials
              </span>

              <h4 className="title">
                What Our Customers Say About
                Virendra Cabs
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial-sliders">
        {/* First row */}
        <div className="testimonial-swiper-row">
          <Swiper {...swiperSettings} dir="rtl">
            {[...testimonials, ...testimonials].map(
              (testimonial, index) => (
                <SwiperSlide key={`left-${index}`}>
                  <TestimonialCard
                    testimonial={testimonial}
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>

        {/* Second row */}
        <div className="testimonial-swiper-row">
          <Swiper
            {...swiperSettings}
            autoplay={{
              ...swiperSettings.autoplay,
              reverseDirection: true,
            }}
          >
            {[...testimonials, ...testimonials].map(
              (testimonial, index) => (
                <SwiperSlide key={`right-${index}`}>
                  <TestimonialCard
                    testimonial={testimonial}
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </div>

      
    </section>
  );
};

export default Testimonial;
