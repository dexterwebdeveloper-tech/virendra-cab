
import React, { useState } from "react";
import "./Enquiry.css";

const WHATSAPP_NUMBER = "919022549022";

const initialFormData = {
  fullname: "",
  email: "",
  phone: "",
  vehicle: "",
  pickup: "",
  drop: "",
  triptype: "Outstation Trip",
  date: "",
  time: "",
  passengers: "1-4",
  message: "",
};

const vehicleGroups = [
  {
    label: "Sedan Cars",
    vehicles: [
      "Swift Dzire",
      "Hyundai Aura",
      "Maruti Suzuki Ciaz",
    ],
  },
  {
    label: "SUV / MUV Cars",
    vehicles: [
      "Maruti Ertiga",
      "Toyota Rumion",
      "Kia Carens",
      "Toyota Innova",
      "Toyota Innova Crysta",
    ],
  },
  {
    label: "Tempo Traveller",
    vehicles: [
      "9 Seater Tempo Traveller",
      "10 Seater Tempo Traveller",
      "12 Seater Tempo Traveller",
      "13 Seater Tempo Traveller",
      "14 Seater Tempo Traveller",
      "17 Seater Tempo Traveller",
      "20 Seater Tempo Traveller",
      "26 Seater Tempo Traveller",
    ],
  },
  {
    label: "Force Urbania",
    vehicles: [
      "9 Seater Force Urbania",
      "10 Seater Force Urbania",
      "13 Seater Force Urbania",
      "15 Seater Force Urbania",
      "17 Seater Force Urbania",
    ],
  },
  {
    label: "Mini Bus",
    vehicles: [
      "17 Seater Mini Bus",
      "20 Seater Mini Bus",
      "25 Seater Mini Bus",
      "30 Seater Mini Bus",
      "32 Seater Mini Bus",
      "35 Seater Mini Bus",
      "40 Seater Mini Bus",
      "45 Seater Mini Bus",
      "50 Seater Mini Bus",
    ],
  },
];

const tripTypes = [
  "Outstation Trip",
  "One Way Trip",
  "Round Trip",
  "Pune Local",
  "Pune Airport Transfer",
  "Mumbai Airport Transfer",
  "Corporate Travel",
  "Family Tour",
  "Group Tour",
  "Wedding Travel",
  "School / College Trip",
  "Picnic",
  "Pilgrimage / Darshan",
];

const passengerOptions = [
  "1-4",
  "5-6",
  "7-9",
  "10-13",
  "14-17",
  "18-20",
  "21-25",
  "26-30",
  "31-35",
  "36-40",
  "41-50",
  "50+",
];

const getTodayLocal = () => {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const Enquiry = () => {
  const [formData, setFormData] = useState({
    ...initialFormData,
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status) setStatus("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phone = formData.phone.replace(/\D/g, "");

    if (!/^[6-9]\d{9}$/.test(phone)) {
      setStatus(
        "Please enter a valid 10-digit Indian mobile number."
      );
      return;
    }

    if (!formData.date || formData.date < getTodayLocal()) {
      setStatus(
        "Please select today or a future travel date."
      );
      return;
    }

    const selectedDate = new Date(
      `${formData.date}T00:00:00`
    );

    const formattedDate = selectedDate.toLocaleDateString(
      "en-IN",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    );

    const whatsappMessage = [
      "🚖 *NEW CAB BOOKING ENQUIRY*",
      "*VIRENDRA CABS*",
      "",
      "👤 *CUSTOMER DETAILS*",
      `Name: ${formData.fullname.trim()}`,
      `Mobile: +91 ${phone}`,
      `Email: ${formData.email.trim()}`,
      "",
      "🚘 *VEHICLE DETAILS*",
      `Vehicle: ${formData.vehicle}`,
      `Passengers: ${formData.passengers}`,
      "",
      "📍 *TRAVEL DETAILS*",
      `Pickup: ${formData.pickup.trim()}`,
      `Drop: ${formData.drop.trim()}`,
      `Trip Type: ${formData.triptype}`,
      `Travel Date: ${formattedDate}`,
      `Travel Time: ${formData.time || "Not specified"}`,
      "",
      "📝 *ADDITIONAL REQUIREMENTS*",
      formData.message.trim() || "No additional requirements",
      "",
      "Please share vehicle availability and the best travel quotation.",
      "",
      "Thank you!",
    ].join("\n");

    const whatsappURL =
      `https://wa.me/${WHATSAPP_NUMBER}?text=` +
      encodeURIComponent(whatsappMessage);

    // Open WhatsApp with prefilled booking details.
    // The customer must press Send in WhatsApp.
    window.location.href = whatsappURL;
  };

  return (
    <>

    <section className="vir-breadcrumb-hero">
  <div className="vir-breadcrumb-container">
    <div className="vir-breadcrumb-content">
      <span className="vir-breadcrumb-label">
        VIRENDRA CABS
      </span>

      <h1>Enquiry</h1>
    </div>
  </div>

  <div className="vir-breadcrumb-bottom-line" />
</section>
      {/* PAGE BANNER */}
      
      {/* ENQUIRY SECTION */}
      <section className="ve-section">
        <div className="container">

          <div className="ve-form-wrapper">

            {/* HEADER */}
            <div className="ve-form-header">
              <span className="ve-small-title">
                ONLINE CAB BOOKING
              </span>

              <h2>
                Get Your <span>Best Cab Quote</span>
              </h2>

              <p>
                Planning an airport transfer, family tour,
                corporate trip, pilgrimage or outstation
                journey from Pune? Fill in your travel
                details and send your enquiry directly
                to Virendra Cabs on WhatsApp.
              </p>

              <div className="ve-header-tags">
                <span>✓ Sedan & SUV</span>
                <span>✓ Tempo Traveller</span>
                <span>✓ Urbania</span>
                <span>✓ Mini Bus</span>
              </div>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit}>
              <div className="row g-4">

                <div className="col-12">
                  <div className="ve-form-section-title">
                    <span>01</span>
                    Personal Information
                  </div>
                </div>

                {/* FULL NAME */}
                <div className="col-12 col-md-6">
                  <label className="ve-label">
                    Full Name <span>*</span>
                  </label>

                  <input
                    type="text"
                    className="form-control ve-input"
                    placeholder="Enter your full name"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    autoComplete="name"
                    maxLength={100}
                    required
                  />
                </div>

                {/* EMAIL */}
                <div className="col-12 col-md-6">
                  <label className="ve-label">
                    Email Address <span>*</span>
                  </label>

                  <input
                    type="email"
                    className="form-control ve-input"
                    placeholder="Enter your email address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />
                </div>

                {/* PHONE */}
                <div className="col-12 col-md-6">
                  <label className="ve-label">
                    Mobile Number <span>*</span>
                  </label>

                  <input
                    type="tel"
                    className="form-control ve-input"
                    placeholder="Enter 10-digit mobile number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    inputMode="numeric"
                    pattern="[6-9][0-9]{9}"
                    maxLength={10}
                    title="Enter a valid 10-digit Indian mobile number"
                    required
                  />
                </div>

                {/* VEHICLE */}
                <div className="col-12 col-md-6">
                  <label className="ve-label">
                    Select Vehicle <span>*</span>
                  </label>

                  <select
                    className="form-select ve-input"
                    name="vehicle"
                    value={formData.vehicle}
                    onChange={handleChange}
                    required
                  >
                    <option value="">
                      Choose Vehicle / Seating Capacity
                    </option>

                    {vehicleGroups.map((group) => (
                      <optgroup
                        key={group.label}
                        label={group.label}
                      >
                        {group.vehicles.map((vehicle) => (
                          <option
                            key={vehicle}
                            value={vehicle}
                          >
                            {vehicle}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>

                <div className="col-12">
                  <div className="ve-form-section-title">
                    <span>02</span>
                    Journey Information
                  </div>
                </div>

                {/* PICKUP */}
                <div className="col-12 col-md-6">
                  <label className="ve-label">
                    Pickup Location <span>*</span>
                  </label>

                  <input
                    type="text"
                    className="form-control ve-input"
                    placeholder="Enter pickup location"
                    name="pickup"
                    value={formData.pickup}
                    onChange={handleChange}
                    maxLength={200}
                    required
                  />
                </div>

                {/* DROP */}
                <div className="col-12 col-md-6">
                  <label className="ve-label">
                    Drop Location <span>*</span>
                  </label>

                  <input
                    type="text"
                    className="form-control ve-input"
                    placeholder="Enter destination"
                    name="drop"
                    value={formData.drop}
                    onChange={handleChange}
                    maxLength={200}
                    required
                  />
                </div>

                {/* TRIP TYPE */}
                <div className="col-12 col-md-6">
                  <label className="ve-label">
                    Trip Type
                  </label>

                  <select
                    className="form-select ve-input"
                    name="triptype"
                    value={formData.triptype}
                    onChange={handleChange}
                  >
                    {tripTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* PASSENGERS */}
                <div className="col-12 col-md-6">
                  <label className="ve-label">
                    Number of Passengers
                  </label>

                  <select
                    className="form-select ve-input"
                    name="passengers"
                    value={formData.passengers}
                    onChange={handleChange}
                  >
                    {passengerOptions.map((option) => (
                      <option key={option} value={option}>
                        {option === "50+"
                          ? "50+ Passengers"
                          : `${option.replace("-", " - ")} Passengers`}
                      </option>
                    ))}
                  </select>
                </div>

                {/* DATE */}
                <div className="col-12 col-md-6">
                  <label className="ve-label">
                    Travel Date <span>*</span>
                  </label>

                  <input
                    type="date"
                    className="form-control ve-input"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={getTodayLocal()}
                    required
                  />
                </div>

                {/* TIME */}
                <div className="col-12 col-md-6">
                  <label className="ve-label">
                    Pickup Time
                  </label>

                  <input
                    type="time"
                    className="form-control ve-input"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                  />
                </div>

                {/* MESSAGE */}
                <div className="col-12">
                  <div className="ve-form-section-title">
                    <span>03</span>
                    Additional Requirements
                  </div>
                </div>

                <div className="col-12">
                  <label className="ve-label">
                    Message / Special Requirements
                  </label>

                  <textarea
                    rows="5"
                    className="form-control ve-input ve-textarea"
                    placeholder="Tell us about your trip, number of days, sightseeing plans, luggage, or special requirements..."
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    maxLength={2000}
                  />
                </div>

                {/* VALIDATION MESSAGE */}
                {status && (
                  <div className="col-12">
                    <div
                      className="alert alert-danger"
                      role="alert"
                    >
                      {status}
                    </div>
                  </div>
                )}

                {/* SUBMIT */}
                <div className="col-12">
                  <div className="ve-submit-area">
                    <p>
                      Your booking details will open in
                      WhatsApp. Review the message and
                      press Send to submit your enquiry.
                    </p>

                    <button
                      type="submit"
                      className="ve-submit-btn"
                    >
                      Send Enquiry on WhatsApp
                      <span aria-hidden="true">↗</span>
                    </button>

                    <a
                      href="tel:+919022549022"
                      className="ve-call-link"
                    >
                      Or Call: +91 90225 49022
                    </a>
                  </div>
                </div>

              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Enquiry;
