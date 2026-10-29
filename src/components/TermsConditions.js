
import React from "react";
import "./TermsConditions.css";

const terms = [
  {
    title: "Booking & Confirmation",
    content:
      "All bookings with Virendra Cabs are subject to vehicle availability and confirmation. Customers must provide accurate details, including pickup location, destination, travel date, pickup time, passenger count, and contact information. A booking is considered confirmed only after receiving confirmation from Virendra Cabs."
  },
  {
    title: "Fare & Payment Policy",
    content:
      "Cab fares depend on the vehicle category, travel distance, trip duration, and selected package. Toll charges, parking fees, state permits, driver allowances, and additional kilometres may be charged separately unless specifically included in the quotation. Customers must pay the agreed fare according to the payment terms communicated during booking."
  },
  {
    title: "Cancellation & Refund Policy",
    content:
      "Cancellation charges may apply depending on the time of cancellation and the terms agreed upon during booking. Any eligible refund will be processed through the agreed payment method. Customers are advised to contact Virendra Cabs as early as possible when cancelling or rescheduling a booking."
  },
  {
    title: "Pickup & Waiting Charges",
    content:
      "Passengers should be available at the confirmed pickup location at the scheduled time. Additional waiting charges may apply beyond the complimentary waiting period, if any, specified at the time of booking. Changes to pickup time or location are subject to availability."
  },
  {
    title: "Vehicle & Driver Allocation",
    content:
      "Virendra Cabs aims to provide well-maintained vehicles and professional drivers. The company reserves the right to allocate an equivalent vehicle when necessary due to operational circumstances, vehicle availability, maintenance, or safety concerns. Customers will be informed about significant changes whenever reasonably possible."
  },
  {
    title: "Passenger Responsibilities",
    content:
      "Passengers must follow traffic safety guidelines, wear seat belts where applicable, maintain vehicle cleanliness, and behave respectfully toward drivers. Smoking, illegal activities, carrying prohibited substances, and damaging vehicle interiors are strictly prohibited. Customers may be responsible for damage caused through misuse or negligence."
  },
  {
    title: "Luggage & Personal Belongings",
    content:
      "Passengers are responsible for their luggage, valuables, and personal belongings. Luggage must remain within the capacity of the booked vehicle and must not obstruct safe travel. Customers should check their belongings before leaving the vehicle."
  },
  {
    title: "Route Changes & Additional Charges",
    content:
      "Additional destinations, route deviations, extra stops, extended travel hours, and kilometres beyond the agreed package may result in extra charges. Customers should discuss any changes with Virendra Cabs before proceeding."
  },
  {
    title: "Outstation Travel Policy",
    content:
      "Outstation trips may be subject to minimum kilometre requirements, driver allowances, night charges, interstate taxes, and permit fees depending on the selected package. These conditions will be communicated during the booking process."
  },
  {
    title: "Delays & Unforeseen Circumstances",
    content:
      "Travel times are estimates and may vary due to traffic congestion, weather conditions, road closures, mechanical problems, government restrictions, or other circumstances beyond reasonable control. Virendra Cabs will make reasonable efforts to assist customers and minimize disruptions."
  },
  {
    title: "Safety & Travel Guidelines",
    content:
      "Passenger safety is a priority. Customers must not request drivers to violate traffic laws, exceed speed limits, overload vehicles, or operate under unsafe conditions. Drivers may refuse unsafe or unlawful requests."
  },
  {
    title: "Complaints & Customer Support",
    content:
      "For booking-related concerns, payment queries, complaints, or service feedback, customers may contact Virendra Cabs using the official contact information provided during booking. The company will make reasonable efforts to review and resolve genuine concerns."
  },
  {
    title: "Changes to Terms & Conditions",
    content:
      "Virendra Cabs may update these Terms & Conditions when required due to operational, legal, or service-related changes. Updated terms will be published on the official website. Existing confirmed bookings remain subject to applicable laws and the terms agreed at the time of booking."
  }
];

export default function TermsConditions() {
  return (
    <div className="vc-terms-page">
      {/* Hero */}
      <section className="vc-hero">
        <div className="vc-hero-inner">
          <span className="vc-eyebrow">
            VIRENDRA CABS / LEGAL INFORMATION
          </span>

          <h1>
            Terms <span>&</span> Conditions
          </h1>

          <p>
            Your journey matters to us. Please review our
            policies to understand our booking process,
            passenger guidelines, and service commitments.
          </p>

          <div className="vc-hero-tags">
            <span>✓ Transparent Policies</span>
            <span>✓ Customer First</span>
            <span>✓ Reliable Travel</span>
          </div>
        </div>

        <div className="vc-hero-decoration" />
      </section>

      {/* Main Content */}
      <main className="vc-main">
        <div className="vc-layout">
          <div className="vc-content">
            <div className="vc-intro">
              <div className="vc-intro-icon">✓</div>

              <div>
                <h2>Welcome to Virendra Cabs</h2>
                <p>
                  These Terms & Conditions describe the
                  guidelines governing cab bookings and
                  transportation services provided by Virendra
                  Cabs. By booking our services, you agree to
                  the applicable terms communicated during
                  booking, subject to applicable laws.
                </p>
              </div>
            </div>

            <div className="vc-section-heading">
              <span className="vc-section-line" />
              <div>
                <span>OUR SERVICE POLICIES</span>
                <h2>General Terms & Conditions</h2>
              </div>
            </div>

            <div className="vc-terms-list">
              {terms.map((term, index) => (
                <article
                  className="vc-term-card"
                  key={term.title}
                  id={`term-${index + 1}`}
                >
                  <div className="vc-term-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="vc-term-body">
                    <h3>{term.title}</h3>
                    <p>{term.content}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="vc-notice">
              <div className="vc-notice-icon">!</div>
              <div>
                <h3>Important Information</h3>
                <p>
                  Specific cancellation charges, waiting
                  periods, refund timelines, and additional
                  travel fees should be confirmed during
                  booking. Nothing in these terms limits
                  customers' rights under applicable law.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="vc-sidebar">
            <div className="vc-sidebar-card">
              <span className="vc-sidebar-label">
                QUICK NAVIGATION
              </span>

              <h3>On This Page</h3>

              <nav aria-label="Terms sections">
                {terms.map((term, index) => (
                  <a
                    href={`#term-${index + 1}`}
                    key={term.title}
                  >
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {term.title}
                  </a>
                ))}
              </nav>
            </div>

            <div className="vc-help-card">
              <div className="vc-help-icon">?</div>
              <h3>Need Assistance?</h3>
              <p>
                Have questions about our booking policies
                or travel services?
              </p>
              <p>
                Please contact our support team through
                our official booking channels.
              </p>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer Banner */}
      <section className="vc-footer-banner">
        <div>
          <h2>Travel With Confidence</h2>
          <p>
            Comfortable journeys. Transparent policies.
            Reliable service.
          </p>
        </div>
        <span>VIRENDRA CABS</span>
      </section>
    </div>
  );
}
