
import React from "react";
import "./ContactInfo.css";

const ContactInfo = () => {
  const phone = "+919022549022";
  const email = "booking@virendracabs.com";

  const address =
    "Virendra Cabs, Office No. 5, 3rd Floor, " +
    "Kahitij Apartment, Kaspate Wasti, " +
    "Wakad, Pune, Maharashtra 411057";

  const mapQuery = encodeURIComponent(address);

  const mapEmbedUrl =
    `https://www.google.com/maps?q=${mapQuery}&output=embed`;

  const directionsUrl =
    `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  return (
<>


<section className="vir-breadcrumb-hero">
  <div className="vir-breadcrumb-container">
    <div className="vir-breadcrumb-content">
      <span className="vir-breadcrumb-label">
        VIRENDRA CABS
      </span>

      <h1>Contact Us</h1>
    </div>
  </div>

  <div className="vir-breadcrumb-bottom-line" />
</section>

    <section className="vcontact-section" id="contact">
      <div className="container">

        {/* Section Heading */}
        <div className="vcontact-heading">
          <span className="vcontact-subtitle">
            GET IN TOUCH WITH US
          </span>

          <h2>
            Contact <span>Virendra Cabs</span>
          </h2>

          <p>
            Have questions about cab bookings, airport
            transfers, outstation trips, or group travel?
            Get in touch with Virendra Cabs for booking
            assistance and travel enquiries.
          </p>
        </div>

        {/* Three Contact Cards */}
        <div className="row g-4">

          {/* Phone */}
          <div className="col-12 col-md-4">
            <div className="vcontact-card vcontact-blue">
              <div className="vcontact-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  width="28"
                  height="28"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.09 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72c.12.96.35 1.91.69 2.81a2 2 0 0 1-.45 2.11L9.09 10.91a16 16 0 0 0 4 4l1.27-1.23a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.69A2 2 0 0 1 22 16.92Z"/>
                </svg>
              </div>

              <span className="vcontact-card-label">
                PHONE SUPPORT
              </span>

              <h3>Call Us Anytime</h3>

              <p>
                Connect with our booking team for
                cab availability and enquiries.
              </p>

              <a
                className="vcontact-detail"
                href={`tel:${phone}`}
              >
                +91 90225 49022
              </a>

              <a
                href={`tel:${phone}`}
                className="vcontact-action"
              >
                Call Now <span>↗</span>
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="col-12 col-md-4">
            <div className="vcontact-card vcontact-orange">
              <div className="vcontact-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  width="28"
                  height="28"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-10 6L2 7"/>
                </svg>
              </div>

              <span className="vcontact-card-label">
                EMAIL SUPPORT
              </span>

              <h3>Send Us an Email</h3>

              <p>
                Email us for booking requests,
                travel quotations and support.
              </p>

              <a
                className="vcontact-detail"
                href={`mailto:${email}`}
              >
                {email}
              </a>

              <a
                href={`mailto:${email}`}
                className="vcontact-action"
              >
                Send Email <span>↗</span>
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="col-12 col-md-4">
            <div className="vcontact-card vcontact-blue">
              <div className="vcontact-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  width="28"
                  height="28"
                >
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>

              <span className="vcontact-card-label">
                OFFICE LOCATION
              </span>

              <h3>Visit Our Office</h3>

              <p className="vcontact-address">
                <strong>VIRENDRA CABS</strong>
                <span>Office No. 5, 3rd Floor,</span>
                <span>Kahitij Apartment, Kaspate Wasti,</span>
                <span>Wakad, Pune, Maharashtra - 411057</span>
              </p>

              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="vcontact-action"
              >
                Get Directions <span>↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="vcontact-map-section">

          <div className="vcontact-map-heading">
            <div>
              <span>FIND OUR LOCATION</span>
              <h3>Locate Us on Google Maps</h3>
              <p>
                Visit our office in Kaspate Wasti,
                Wakad, Pune, Maharashtra.
              </p>
            </div>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="vcontact-map-btn"
            >
              Open Google Maps ↗
            </a>
          </div>

          <div className="vcontact-map-frame">
            <iframe
              title="Virendra Cabs Office Location"
              src={mapEmbedUrl}
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="vcontact-map-footer">
            <span>📍 Kaspate Wasti, Wakad, Pune - 411057</span>
            <span>VIRENDRA CABS</span>
          </div>
        </div>

      </div>
    </section>
</>
  );
};

export default ContactInfo;
