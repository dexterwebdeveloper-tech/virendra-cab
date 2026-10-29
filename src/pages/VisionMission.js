
import React from "react";
import "./VisionMission.css";

const VisionMission = () => {
  return (
    <section className="vm-section" id="vision-mission">
      <div className="container">
        <div className="vm-heading">
          <span className="vm-label">
            ABOUT VIRENDRA CABS
          </span>

          <h2>
            Our <span>Vision & Mission</span>
          </h2>

          <p>
            Driven by trust, committed to comfort, and
            dedicated to making every journey memorable.
          </p>
        </div>

        <div className="vm-grid">
          {/* VISION */}
          <article className="vm-card vm-vision">
            <div className="vm-card-top">
              <div className="vm-icon">
                <i className="fas fa-eye"></i>
              </div>
              <span className="vm-card-label">
                OUR VISION
              </span>
            </div>

            <h3>Connecting People, Creating Journeys</h3>

            <p>
              Our vision is to become a trusted and preferred
              cab and travel service provider in Pune and
              beyond by delivering comfortable, reliable,
              and accessible transportation solutions.
            </p>

            <p>
              We aim to make every journey convenient and
              enjoyable through customer-focused services,
              modern travel solutions, and a commitment
              to continuous improvement.
            </p>

            <div className="vm-card-footer">
              <i className="fas fa-check-circle"></i>
              <span>Comfort • Trust • Reliability</span>
            </div>
          </article>

          {/* MISSION */}
          <article className="vm-card vm-mission">
            <div className="vm-card-top">
              <div className="vm-icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <span className="vm-card-label">
                OUR MISSION
              </span>
            </div>

            <h3>Making Every Mile Better</h3>

            <p>
              Our mission is to provide dependable,
              comfortable, and convenient cab rental
              services for local travel, airport transfers,
              outstation journeys, corporate transportation,
              and group tours.
            </p>

            <p>
              We strive to deliver a positive travel
              experience through suitable vehicle options,
              professional service, transparent communication,
              and a customer-first approach.
            </p>

            <div className="vm-card-footer">
              <i className="fas fa-check-circle"></i>
              <span>Service • Quality • Satisfaction</span>
            </div>
          </article>
        </div>

        {/* BOTTOM COMMITMENT */}
        <div className="vm-commitment">
          <div className="vm-commitment-icon">
            <i className="fas fa-car-side"></i>
          </div>

          <div className="vm-commitment-content">
            <h4>Our Commitment to Every Journey</h4>
            <p>
              From short city rides to long-distance
              adventures, Virendra Cabs is dedicated to
              providing a comfortable, convenient, and
              dependable travel experience.
            </p>
          </div>

          <a
            href="tel:+919022549022"
            className="vm-commitment-btn"
          >
            Book Your Ride
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
