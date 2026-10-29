
import React, { useState } from "react";
import "./Career.css";

const WHATSAPP_NUMBER = "919022549022";

const initialFormData = {
  fullname: "",
  phone: "",
  email: "",
  position: "",
  experience: "",
  location: "",
  license: "",
  message: "",
};

const openings = [
  {
    icon: "fas fa-car",
    title: "Professional Drivers",
    position: "Driver",
    text: "Interested in driving sedans, SUVs, Innova Crysta, Tempo Traveller, Urbania or Mini Bus vehicles? Share your driving experience with us.",
    className: "vc-career-blue",
  },
  {
    icon: "fas fa-route",
    title: "Operations Staff",
    position: "Operations Staff",
    text: "Help coordinate cab bookings, driver assignments, vehicle schedules, airport transfers and outstation travel operations.",
    className: "vc-career-orange",
  },
  {
    icon: "fas fa-headset",
    title: "Customer Support",
    position: "Customer Support",
    text: "Assist customers with cab enquiries, travel quotations, reservations, pickup details and booking coordination.",
    className: "vc-career-sky",
  },
  {
    icon: "fas fa-handshake",
    title: "Fleet Partners",
    position: "Fleet Partner",
    text: "Vehicle owners and transport operators can enquire about potential fleet partnerships and business associations.",
    className: "vc-career-navy",
  },
  {
    icon: "fas fa-laptop",
    title: "Digital & Marketing",
    position: "Digital Associate",
    text: "Explore potential opportunities in digital marketing, online booking support, website management and customer engagement.",
    className: "vc-career-peach",
  },
];

const positions = [
  "Driver",
  "Operations Staff",
  "Customer Support",
  "Fleet Partner",
  "Digital Associate",
  "Other Opportunity",
];

const experienceOptions = [
  "Fresher",
  "Less than 1 Year",
  "1-2 Years",
  "3-5 Years",
  "5-10 Years",
  "10+ Years",
];

const licenseOptions = [
  "Valid LMV Driving Licence",
  "Commercial Driving Licence",
  "Heavy Vehicle Licence",
  "No Driving Licence",
  "Not Applicable",
];

const Career = () => {
  const [formData, setFormData] = useState({
    ...initialFormData,
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrorMessage("");
  };

  const handleApply = (position) => {
    setFormData((prev) => ({
      ...prev,
      position,
    }));

    document
      .getElementById("career-application")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phone = formData.phone.replace(/\D/g, "");

    if (!/^[6-9]\d{9}$/.test(phone)) {
      setErrorMessage(
        "Please enter a valid 10-digit Indian mobile number."
      );
      return;
    }

    if (
      formData.position === "Driver" &&
      !formData.license
    ) {
      setErrorMessage(
        "Please select your driving licence status."
      );
      return;
    }

    setErrorMessage("");

    const whatsappMessage = [
      "🚘 *NEW CAREER APPLICATION*",
      "*VIRENDRA CABS*",
      "",
      "👤 *CANDIDATE DETAILS*",
      `Full Name: ${formData.fullname.trim()}`,
      `Mobile Number: +91 ${phone}`,
      `Email: ${formData.email.trim() || "Not Provided"}`,
      `Current Location: ${formData.location.trim()}`,
      "",
      "💼 *JOB APPLICATION*",
      `Applying For: ${formData.position}`,
      `Experience: ${formData.experience}`,
      `Driving Licence: ${formData.license || "Not Applicable"}`,
      "",
      "📝 *ABOUT CANDIDATE*",
      formData.message.trim() || "No additional information",
      "",
      "I am interested in career opportunities with Virendra Cabs.",
      "Please review my details and let me know about suitable opportunities.",
      "",
      "Thank you!",
    ].join("\n");

    const whatsappURL =
      `https://wa.me/${WHATSAPP_NUMBER}?text=` +
      encodeURIComponent(whatsappMessage);

    window.location.href = whatsappURL;
  };

  return (
    <main className="vc-career-page">

      {/* HERO SECTION */}


      
    <section className="vir-breadcrumb-hero">
  <div className="vir-breadcrumb-container">
    <div className="vir-breadcrumb-content">
      <span className="vir-breadcrumb-label">
        VIRENDRA CABS
      </span>

      <h1>CAREERS AT VIRENDRA CABS</h1>
    </div>
  </div>

  <div className="vir-breadcrumb-bottom-line" />
</section>



      {/* OPENINGS SECTION */}
      <section
        className="vc-career-openings"
        id="career-openings"
      >
        <div className="container">
          <div className="vc-career-section-heading">
            <span className="vc-career-small-heading">
              BUILD YOUR FUTURE WITH US
            </span>

            <h2>
              Explore Career <span>Opportunities</span>
            </h2>

            <p>
              Interested in working with Virendra Cabs?
              Explore our career categories and submit
              your profile for consideration.
            </p>
          </div>

          <div className="row g-4">
            {openings.map((job, index) => (
              <div
                className="col-12 col-md-4"
                key={job.title}
              >
                <article
                  className={`vc-career-job-card ${job.className}`}
                >
                  <span className="vc-career-job-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="vc-career-job-icon">
                    <i className={job.icon}></i>
                  </div>

                  <span className="vc-career-job-status">
                    CAREER ENQUIRIES
                  </span>

                  <h3>{job.title}</h3>
                  <p>{job.text}</p>

                  <button
                    type="button"
                    onClick={() => handleApply(job.position)}
                    className="vc-career-job-link"
                  >
                    Apply Now
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </article>
              </div>
            ))}
          </div>

          <p className="vc-career-openings-note">
            These are general career and partnership
            enquiry categories. Current vacancies and
            recruitment decisions are subject to confirmation.
          </p>
        </div>
      </section>

      {/* APPLICATION SECTION */}
      <section
        className="vc-career-application-section"
        id="career-application"
      >
        <div className="container">
          <div className="row g-0 vc-career-application-wrapper">

            {/* LEFT PANEL */}
            <div className="col-12 col-lg-5">
              <div className="vc-career-application-info">
                <span className="vc-career-apply-label">
                  WORK WITH VIRENDRA CABS
                </span>

                <h2>
                  Your Next Journey
                  <span> Starts Here.</span>
                </h2>

                <p>
                  Whether you're an experienced driver,
                  operations professional, customer
                  service executive or fleet partner,
                  we welcome your enquiry.
                </p>

                <div className="vc-career-feature-list">

                  <div className="vc-career-feature">
                    <div className="vc-career-feature-icon">
                      <i className="fas fa-users"></i>
                    </div>
                    <div>
                      <h4>Team Opportunities</h4>
                      <p>
                        Enquire about roles supporting
                        cab bookings and travel operations.
                      </p>
                    </div>
                  </div>

                  <div className="vc-career-feature">
                    <div className="vc-career-feature-icon">
                      <i className="fas fa-car-side"></i>
                    </div>
                    <div>
                      <h4>Multiple Vehicle Categories</h4>
                      <p>
                        Sedan, SUV, Innova Crysta,
                        Tempo Traveller, Urbania and
                        Mini Bus transportation.
                      </p>
                    </div>
                  </div>

                  <div className="vc-career-feature">
                    <div className="vc-career-feature-icon">
                      <i className="fas fa-handshake"></i>
                    </div>
                    <div>
                      <h4>Partnership Enquiries</h4>
                      <p>
                        Vehicle owners and transport
                        partners can share their details.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="vc-career-direct-contact">
                  <div className="vc-career-contact-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>

                  <div>
                    <span>CONTACT VIRENDRA CABS</span>
                    <a href="tel:+919022549022">
                      +91 90225 49022
                    </a>
                  </div>
                </div>

                <div className="vc-career-office">
                  <i className="fas fa-map-marker-alt"></i>
                  <p>
                    Office No. 5, 3rd Floor,
                    Kahitij Apartment, Kaspate Wasti,
                    Wakad, Pune, Maharashtra - 411057.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="col-12 col-lg-7">
              <div className="vc-career-form-area">
                <div className="vc-career-form-heading">
                  <span>CAREER APPLICATION FORM</span>
                  <h3>Apply With Virendra Cabs</h3>
                  <p>
                    Complete the form and send your
                    application details directly through
                    WhatsApp.
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">

                    {/* FULL NAME */}
                    <div className="col-12 col-md-6">
                      <div className="vc-career-input-group">
                        <label htmlFor="vc-fullname">
                          Full Name *
                        </label>

                        <div className="vc-career-input-wrap">
                          <i className="fas fa-user"></i>
                          <input
                            id="vc-fullname"
                            type="text"
                            name="fullname"
                            placeholder="Enter your full name"
                            value={formData.fullname}
                            onChange={handleChange}
                            autoComplete="name"
                            maxLength={100}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* PHONE */}
                    <div className="col-12 col-md-6">
                      <div className="vc-career-input-group">
                        <label htmlFor="vc-phone">
                          Mobile Number *
                        </label>

                        <div className="vc-career-input-wrap">
                          <i className="fas fa-phone-alt"></i>
                          <input
                            id="vc-phone"
                            type="tel"
                            name="phone"
                            placeholder="10-digit mobile number"
                            value={formData.phone}
                            onChange={handleChange}
                            inputMode="numeric"
                            pattern="[6-9][0-9]{9}"
                            maxLength={10}
                            autoComplete="tel-national"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* EMAIL */}
                    <div className="col-12 col-md-6">
                      <div className="vc-career-input-group">
                        <label htmlFor="vc-email">
                          Email Address
                        </label>

                        <div className="vc-career-input-wrap">
                          <i className="fas fa-envelope"></i>
                          <input
                            id="vc-email"
                            type="email"
                            name="email"
                            placeholder="Enter email address"
                            value={formData.email}
                            onChange={handleChange}
                            autoComplete="email"
                          />
                        </div>
                      </div>
                    </div>

                    {/* POSITION */}
                    <div className="col-12 col-md-6">
                      <div className="vc-career-input-group">
                        <label htmlFor="vc-position">
                          Applying For *
                        </label>

                        <div className="vc-career-input-wrap">
                          <i className="fas fa-briefcase"></i>
                          <select
                            id="vc-position"
                            name="position"
                            value={formData.position}
                            onChange={handleChange}
                            required
                          >
                            <option value="">
                              Select Position
                            </option>
                            {positions.map((position) => (
                              <option
                                key={position}
                                value={position}
                              >
                                {position}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* EXPERIENCE */}
                    <div className="col-12 col-md-6">
                      <div className="vc-career-input-group">
                        <label htmlFor="vc-experience">
                          Experience *
                        </label>

                        <div className="vc-career-input-wrap">
                          <i className="fas fa-clock"></i>
                          <select
                            id="vc-experience"
                            name="experience"
                            value={formData.experience}
                            onChange={handleChange}
                            required
                          >
                            <option value="">
                              Select Experience
                            </option>
                            {experienceOptions.map((item) => (
                              <option key={item} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* LOCATION */}
                    <div className="col-12 col-md-6">
                      <div className="vc-career-input-group">
                        <label htmlFor="vc-location">
                          Current Location *
                        </label>

                        <div className="vc-career-input-wrap">
                          <i className="fas fa-map-marker-alt"></i>
                          <input
                            id="vc-location"
                            type="text"
                            name="location"
                            placeholder="e.g. Wakad, Pune"
                            value={formData.location}
                            onChange={handleChange}
                            maxLength={150}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* DRIVING LICENCE */}
                    <div className="col-12">
                      <div className="vc-career-input-group">
                        <label htmlFor="vc-license">
                          Driving Licence
                          {formData.position === "Driver"
                            ? " *"
                            : " (If Applicable)"}
                        </label>

                        <div className="vc-career-input-wrap">
                          <i className="fas fa-id-card"></i>
                          <select
                            id="vc-license"
                            name="license"
                            value={formData.license}
                            onChange={handleChange}
                            required={formData.position === "Driver"}
                          >
                            <option value="">
                              Select Driving Licence Status
                            </option>
                            {licenseOptions.map((item) => (
                              <option key={item} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* MESSAGE */}
                    <div className="col-12">
                      <div className="vc-career-input-group">
                        <label htmlFor="vc-message">
                          Tell Us About Yourself
                        </label>

                        <div className="vc-career-input-wrap vc-career-textarea">
                          <i className="fas fa-comment-dots"></i>
                          <textarea
                            id="vc-message"
                            name="message"
                            rows="5"
                            placeholder="Describe your skills, previous experience, vehicle driving experience or partnership enquiry..."
                            value={formData.message}
                            onChange={handleChange}
                            maxLength={2000}
                          />
                        </div>
                      </div>
                    </div>

                    {/* ERROR */}
                    {errorMessage && (
                      <div className="col-12">
                        <div
                          className="alert alert-danger"
                          role="alert"
                        >
                          {errorMessage}
                        </div>
                      </div>
                    )}

                    {/* SUBMIT */}
                    <div className="col-12">
                      <button
                        type="submit"
                        className="vc-career-submit-btn"
                      >
                        <span>
                          Send Application on WhatsApp
                        </span>

                        <span className="vc-career-submit-icon">
                          <i className="fab fa-whatsapp"></i>
                        </span>
                      </button>

                      <p className="vc-career-form-note">
                        <i className="fas fa-info-circle"></i>
                        Your application details will open
                        in WhatsApp. Please review and press
                        Send to deliver your application
                        to Virendra Cabs.
                      </p>
                    </div>

                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Career;
