
import React from "react";

const PlatformSection = () => {
  return (
    <section className="platform-area platform-area-bg">
      <div className="container">
        <div className="row align-items-end">
          {/* Cab Service Content */}
          <div className="col-lg-8">
            <div className="app-section-padding">
              <div className="hero-caption-one position-relative">
                <span className="highlight">
                  Travel With Virendra Cabs
                </span>

                <h4 className="title">
                  Book Comfortable & Reliable Cab Services in Pune
                </h4>

                <p className="pera">
                  Enjoy convenient cab booking with Virendra Cabs.
                  Explore local rides, airport transfers, and outstation
                  journeys with comfortable vehicles and reliable service.
                </p>
              </div>

              <div className="hero-footer position-relative">
                {/* Call Booking */}
                <a
                  href="tel:+919022549022"
                  className="platform-video-link"
                  aria-label="Call Virendra Cabs for booking"
                >
                  <div className="video-player">
                    <i className="ri-phone-fill"></i>
                  </div>
                </a>

                {/* Booking Link */}
                <a
                  href="https://wa.me/919022549022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pera position-relative"
                >
                  Book Your Cab Now
                </a>
              </div>
            </div>
          </div>

          {/* Existing Image Unchanged */}
          <div className="col-lg-4">
            <div className="hero-banner d-none d-lg-block">
              <img
                src="/images/promotion.png"
                alt="Virendra Cabs rental and travel services in Pune"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
