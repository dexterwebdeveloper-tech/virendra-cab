
import React from "react";
import VisionMission from "../pages/VisionMission";

const AboutSection = () => {
  return (
    <>
      <section className="vir-breadcrumb-hero">
        <div className="vir-breadcrumb-container">
          <div className="vir-breadcrumb-content">
            <span className="vir-breadcrumb-label">
              VIRENDRA CABS
            </span>

            <h1>About Us</h1>
          </div>
        </div>

        <div className="vir-breadcrumb-bottom-line" />
      </section>

      <section className="about-area">
        <div className="container">
          <div className="row g-4">

            {/* About content */}
            <div className="col-xl-5 col-lg-6">
              <div className="section-title mx-430 mb-30 w-md-100">

                <span className="highlights fancy-font font-400">
                  About Virendra Cabs
                </span>

                <h4 className="title">
                  Your Trusted Cab Rental & Travel Partner in Pune
                </h4>

                <p className="pera">
                  Welcome to Virendra Cabs, your reliable travel
                  partner for comfortable and convenient cab
                  rental services in Pune. We offer transportation
                  solutions for local sightseeing, airport
                  transfers, outstation journeys, business
                  travel, family vacations, pilgrimages,
                  weddings, and group tours. Our goal is
                  to make every journey comfortable,
                  convenient, and memorable.
                </p>

                <p className="pera">
                  At Virendra Cabs, we provide a wide range
                  of vehicle options, including Swift Dzire,
                  Hyundai Aura, Ertiga, Kia Carens, Innova,
                  Innova Crysta, Tempo Traveller, Force Urbania,
                  and buses for group transportation.
                  Whether you need a cab for a short city
                  trip, a Pune to Mumbai Airport transfer,
                  a corporate pickup and drop service,
                  or an outstation tour, we are committed
                  to delivering dependable transportation
                  with customer-focused service.
                </p>

                {/* Learn More button */}
                <div className="section-button mt-27 d-inline-block">
                  <a
                    href="tel:+919022549022"
                    className="btn-primary-icon-sm radius-20"
                  >
                    <p className="pera mt-0">Book Your Cab</p>
                    <i className="ri-arrow-right-up-line"></i>
                  </a>
                </div>

                {/* Booking information */}
                <div className="about-imp-link mt-40">
                  <div className="icon">
                    <i className="ri-user-line"></i>
                  </div>

                  <div className="content">
                    <p className="pera font-16">
                      <span className="font-700">
                        Virendra Cabs
                      </span>{" "}
                      – Your travel partner for local cab
                      bookings, airport transfers, outstation
                      taxi services, and group transportation
                      in Pune.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* About image and statistics */}
            <div className="col-xl-7 col-lg-6">
              <div className="about-count-section about-count-before-bg">

                {/* Existing image unchanged */}
                <div className="banner">
                  <img
                    src="/images/about-banner-three.png"
                    alt="Virendra Cabs travel and cab rental services in Pune"
                  />
                </div>

                <div className="all-count-list">

                  <div className="details">
                    <h4 className="count">Local</h4>
                    <p className="pera">Pune Cab Services</p>
                  </div>

                  <div className="divider"></div>

                  <div className="details">
                    <h4 className="count">Airport</h4>
                    <p className="pera">Pickup & Drop</p>
                  </div>

                  <div className="divider"></div>

                  <div className="details">
                    <h4 className="count">Outstation</h4>
                    <p className="pera">Cab & Bus Rentals</p>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <VisionMission />
    </>
  );
};

export default AboutSection;
