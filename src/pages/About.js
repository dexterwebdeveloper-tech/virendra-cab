
import React, { useState } from "react";

const Abouthome = () => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      title: "Affordable Cab Services",
      description:
        "Enjoy affordable cab rental services in Pune with transparent pricing and comfortable travel options.",
      image: "/images/about.png",
      icon: "₹",
    },
    {
      title: "Easy & Quick Booking",
      description:
        "Book your cab easily with Virendra Cabs for local rides, airport transfers, and outstation trips.",
      image: "/images/about.png",
      icon: "✓",
    },
    {
      title: "Professional Drivers",
      description:
        "Enjoy comfortable journeys with professional drivers and dependable transportation services.",
      image: "/images/about.png",
      icon: "✈",
    },
    // {
    //   title: "Comfortable Cab Travel",
    //   description:
    //     "Experience smooth journeys with comfortable vehicles and convenient travel arrangements.",
    //   image: "/images/gallery/about-banner-4.png",
    //   icon: "★",
    // },
  ];

  return (
    <section className="about-area bottom-padding1 position-relative">
      <div className="container">
        {/* Section Heading */}
        <div className="row">
          <div className="col-xl-8">
            <div className="section-title mx-605 mb-30">
              <span className="highlights">
                About Virendra Cabs
              </span>

              <h4 className="title">
                Experience Comfortable Journeys With Virendra Cabs
              </h4>

              <p className="pera">
                Explore your favorite destinations with Virendra Cabs.
                We provide reliable cab services in Pune for local
                travel, airport transfers, and outstation trips.
                Enjoy comfortable vehicles, convenient bookings,
                and dependable transportation for every journey.
              </p>
            </div>
          </div>
        </div>

        {/* About Content */}
        <div className="row g-4">
          {/* Images */}
          <div className="col-xl-8 col-lg-7">
            <div className="about-banner imgEffect4">
              <img
                src={features[activeTab].image}
                alt={features[activeTab].title}
                className="img-fluid"
              />
            </div>
          </div>

          {/* Features */}
          <div className="col-xl-4 col-lg-5">
            <div
              className="key-points position-relative z-12"
              role="tablist"
              aria-orientation="vertical"
            >
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`key-point ${
                    activeTab === index ? "active" : ""
                  }`}
                  id={`about-tab-${index}`}
                  role="tab"
                  aria-selected={activeTab === index}
                  aria-controls="about-tab-panel"
                  tabIndex={0}
                  onClick={() => setActiveTab(index)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setActiveTab(index);
                    }
                  }}
                >
                  <div className="key-icon">
                    <span>{feature.icon}</span>
                  </div>

                  <div className="key-content">
                    <h4 className="title">{feature.title}</h4>
                    <p className="pera">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Shape */}
      <div className="shape-bg-about">
        <img
          src="/images/icon/bg-shape-2.png"
          alt=""
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default Abouthome;
