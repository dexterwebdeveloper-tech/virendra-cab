
import React from "react";
import "./PrivacyPolicy.css";

const privacyPolicies = [
  {
    title: "Introduction",
    content:
      "Welcome to Virendra Cabs. We value your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, and protect information when you visit our website, submit enquiries, or book our cab rental and transportation services."
  },
  {
    title: "Information We Collect",
    content:
      "When you use our services, we may collect personal information such as your name, mobile number, email address, pickup location, drop-off location, travel date, passenger details, and booking preferences. We may also collect transaction information, customer feedback, and technical website usage information when necessary."
  },
  {
    title: "How We Use Your Information",
    content:
      "Virendra Cabs uses customer information to process bookings, confirm reservations, coordinate pickup and drop-off services, provide customer support, communicate travel updates, respond to enquiries, manage payments, improve service quality, and comply with applicable legal obligations."
  },
  {
    title: "Booking & Travel Information",
    content:
      "Travel details such as pickup addresses, destinations, journey dates, passenger counts, and selected vehicle categories are collected to arrange transportation services. Relevant booking information may be shared with assigned drivers or authorized service providers to complete your journey."
  },
  {
    title: "Sharing of Personal Information",
    content:
      "We may share necessary customer information with authorized drivers, transportation partners, payment processors, technology providers, and other service providers involved in fulfilling bookings. Information may also be disclosed when required by applicable law or lawful government requests. We do not sell customer personal information."
  },
  {
    title: "Data Security & Protection",
    content:
      "We take reasonable technical and organizational measures to protect personal information against unauthorized access, misuse, alteration, disclosure, and loss. However, no online system or electronic transmission method can be guaranteed to be completely secure."
  },
  {
    title: "Cookies & Website Tracking",
    content:
      "Our website may use cookies and similar technologies to support website functionality, understand visitor interactions, and improve user experience. Where required by applicable law, we will request consent before using non-essential cookies. Visitors may manage cookies through their browser settings."
  },
  {
    title: "Payment Information",
    content:
      "Payment-related information may be processed to manage cab bookings, invoices, and refunds. Where third-party payment gateways are used, payment information is also subject to their respective privacy and security policies. We recommend using only official payment channels provided by Virendra Cabs."
  },
  {
    title: "Third-Party Websites & Services",
    content:
      "Our website may contain links to third-party websites, mapping services, or payment platforms. These external services operate under their own privacy policies. Virendra Cabs is not responsible for the privacy practices or content of independently operated third-party websites."
  },
  {
    title: "Data Retention",
    content:
      "We retain personal information only for as long as reasonably necessary to provide services, maintain booking records, resolve disputes, meet legitimate business requirements, and comply with applicable legal obligations. Information will be deleted or anonymized when it is no longer required, subject to legal retention requirements."
  },
  {
    title: "Customer Privacy Rights",
    content:
      "Subject to applicable law, customers may request information about their personal data, correction of inaccurate details, withdrawal of consent where applicable, or deletion of eligible personal information. Requests can be submitted through our official customer support channels. Certain information may need to be retained for legal or operational reasons."
  },
  {
    title: "Children's Privacy",
    content:
      "Our booking services are intended to be arranged by adults or legally authorized guardians. We do not knowingly collect children's personal information independently without appropriate authorization. Parents or guardians may contact us if they believe a child's information has been submitted improperly."
  },
  {
    title: "Marketing & Promotional Communication",
    content:
      "Where permitted by applicable law, we may send customers information about travel offers, service updates, or promotional campaigns. Customers can request to stop receiving optional marketing communications through the available opt-out method or by contacting our support team."
  },
  {
    title: "Changes to This Privacy Policy",
    content:
      "Virendra Cabs may update this Privacy Policy to reflect changes in our services, technology, business practices, or legal requirements. Updated information will be published on this page with an appropriate revision date."
  },
  {
    title: "Contact & Privacy Enquiries",
    content:
      "If you have questions about this Privacy Policy, personal information, privacy rights, or data protection practices, please contact Virendra Cabs through the official contact details displayed on our website or provided during booking."
  }
];

export default function PrivacyPolicy() {
  return (
    <div className="vp-page">

      {/* HERO SECTION */}
      <section className="vp-hero">
        <div className="vp-hero-inner">

          <span className="vp-eyebrow">
            VIRENDRA CABS / DATA PROTECTION
          </span>

          <h1>
            Privacy <span>Policy</span>
          </h1>

          <p>
            Your trust is important to us. Learn how
            Virendra Cabs collects, uses, protects,
            and manages your personal information
            while providing reliable cab services.
          </p>

          <div className="vp-hero-tags">
            <span>✓ Privacy Focused</span>
            <span>✓ Secure Information</span>
            <span>✓ Transparent Practices</span>
          </div>

        </div>

        <div className="vp-hero-decoration"></div>
      </section>

      {/* MAIN CONTENT */}
      <main className="vp-main">

        <div className="vp-layout">

          <div className="vp-content">

            {/* INTRO CARD */}
            <div className="vp-intro">

              <div className="vp-intro-icon">
                ✓
              </div>

              <div>
                <h2>Your Privacy Matters</h2>

                <p>
                  At Virendra Cabs, we respect your
                  privacy and aim to handle your
                  personal information responsibly.
                  This policy explains our information
                  practices and your privacy options
                  when using our website and cab
                  booking services.
                </p>
              </div>

            </div>

            {/* SECTION HEADING */}
            <div className="vp-section-heading">

              <span className="vp-section-line"></span>

              <div>
                <span>OUR PRIVACY COMMITMENT</span>

                <h2>
                  Privacy & Data Protection Guidelines
                </h2>
              </div>

            </div>

            {/* PRIVACY CARDS */}
            <div className="vp-policy-list">

              {privacyPolicies.map((policy, index) => (

                <article
                  className="vp-policy-card"
                  key={policy.title}
                  id={`privacy-${index + 1}`}
                >

                  <div className="vp-policy-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="vp-policy-body">

                    <h3>{policy.title}</h3>

                    <p>{policy.content}</p>

                  </div>

                </article>

              ))}

            </div>

            {/* IMPORTANT NOTICE */}
            <div className="vp-notice">

              <div className="vp-notice-icon">
                !
              </div>

              <div>

                <h3>Important Privacy Notice</h3>

                <p>
                  By using our website or cab services,
                  you acknowledge this Privacy Policy.
                  Where consent is required for particular
                  data processing activities, we will
                  request it separately. Your statutory
                  privacy rights remain protected under
                  applicable law.
                </p>

              </div>

            </div>

          </div>

          {/* SIDEBAR */}
          <aside className="vp-sidebar">

            <div className="vp-sidebar-card">

              <span className="vp-sidebar-label">
                PRIVACY POLICY MENU
              </span>

              <h3>On This Page</h3>

              <nav aria-label="Privacy policy sections">

                {privacyPolicies.map((policy, index) => (

                  <a
                    href={`#privacy-${index + 1}`}
                    key={policy.title}
                  >

                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {policy.title}

                  </a>

                ))}

              </nav>

            </div>

            {/* HELP CARD */}
            <div className="vp-help-card">

              <div className="vp-help-icon">
                ?
              </div>

              <h3>Privacy Questions?</h3>

              <p>
                Have questions about how your personal
                information is collected or protected?
              </p>

              <p>
                Contact the Virendra Cabs support team
                through our official communication channels.
              </p>

            </div>

          </aside>

        </div>

      </main>

      {/* FOOTER */}
      <section className="vp-footer-banner">

        <div>
          <h2>Your Trust. Our Responsibility.</h2>

          <p>
            Secure Information • Transparent Practices
            • Reliable Travel
          </p>
        </div>

        <span>VIRENDRA CABS</span>

      </section>

    </div>
  );
}
