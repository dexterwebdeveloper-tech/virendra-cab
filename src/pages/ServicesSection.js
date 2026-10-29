
import React from "react";
import "./ServicesSection.css";

const services = [
  {
    id: 1,
    title: "Pune to Mumbai Airport Cab",
    image: "/images/keyword/1.jpg",
    description:
      "Book a comfortable Pune to Mumbai Airport Cab with Virendra Cabs for convenient airport transfers. Enjoy reliable pickup and drop services, professional drivers, spacious vehicles, and smooth travel to Chhatrapati Shivaji Maharaj International Airport.",
    tag: "Airport Transfer",
    link: "/pune-to-mumbai-airport-cab",
  },
  {
    id: 2,
    title: "Pune to Outstations Cabs",
    image: "/images/keyword/2.jpg",
    description:
      "Explore your favorite destinations with Pune to Outstations Cabs from Virendra Cabs. Book comfortable sedan, SUV, and family-friendly cab options for business trips, weekend getaways, family vacations, pilgrimages, and long-distance journeys.",
    tag: "Outstation Travel",
    link: "/pune-to-outstation-cabs",
  },
  {
    id: 3,
    title: "Pune to Mahabaleshwar Cab",
    image: "/images/keyword/3.jpg",
    description:
      "Plan a refreshing hill station getaway with our Pune to Mahabaleshwar Cab service. Travel comfortably with experienced drivers and explore scenic viewpoints, lush valleys, strawberry farms, and popular tourist attractions with family and friends.",
    tag: "Hill Station Tour",
    link: "/pune-to-mahabaleshwar-cab",
  },
  {
    id: 4,
    title: "Pune to Lonavala Cab",
    image: "/images/keyword/4.jpg",
    description:
      "Enjoy a relaxing journey with Virendra Cabs' Pune to Lonavala Cab service. Ideal for one-day picnics, weekend trips, family outings, and sightseeing tours to Lonavala and Khandala, with comfortable cars and convenient pickup options.",
    tag: "Weekend Getaway",
    link: "/pune-to-lonavala-cab",
  },
  {
    id: 5,
    title: "Pune to Matheran Cabs",
    image: "/images/keyword/5.jpg",
    description:
      "Discover the natural beauty of Matheran with Pune to Matheran Cabs from Virendra Cabs. Enjoy a convenient road journey to the permitted vehicle access point near this peaceful hill station, known for its beautiful viewpoints and greenery.",
    tag: "Nature Escape",
    link: "/pune-to-matheran-cabs",
  },
  {
    id: 6,
    title: "Pune to Bhimashankar Cab",
    image: "/images/keyword/7.jpg",
    description:
      "Book a Pune to Bhimashankar Cab for a comfortable pilgrimage to the sacred Bhimashankar Jyotirlinga Temple. Virendra Cabs provides convenient travel options for families, devotees, and groups planning temple visits and religious journeys.",
    tag: "Pilgrimage Tour",
    link: "/pune-to-bhimashankar-cab",
  },
];

export default function ServicesSection() {
  return (
<>


<section className="vir-breadcrumb-hero">
  <div className="vir-breadcrumb-container">
    <div className="vir-breadcrumb-content">
      <span className="vir-breadcrumb-label">
        VIRENDRA CABS
      </span>

      <h1>Services</h1>
    </div>
  </div>

  <div className="vir-breadcrumb-bottom-line" />
</section>
    
    <section className="vir-services" id="services">
      <div className="vir-services-container">

        {/* Section Heading */}
        <div className="vir-services-heading">
          <span className="vir-services-eyebrow">
            EXPLORE OUR CAB SERVICES
          </span>

          <h2>
            Our Premium <span>Cab Services</span>
          </h2>

          <p>
            Discover comfortable and convenient travel
            solutions with Virendra Cabs. From airport
            transfers to scenic hill stations and spiritual
            destinations, explore our popular routes
            from Pune.
          </p>
        </div>

        {/* Service Cards */}
        <div className="vir-services-grid">
          {services.map((service, index) => (
            <article
              className="vir-service-card"
              key={service.id}
            >
              <div className="vir-service-image">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                />

                <span className="vir-service-tag">
                  {service.tag}
                </span>

                <div className="vir-service-image-number">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              <div className="vir-service-content">
                <div className="vir-service-accent"></div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <a
                  href={service.link}
                  className="vir-service-button"
                  aria-label={`Explore ${service.title}`}
                >
                  Explore Service
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="vir-services-bottom">
          <div>
            <span className="vir-bottom-label">
              VIRENDRA CABS
            </span>

            <h3>Make Every Journey Comfortable</h3>

            <p>
              Airport transfers, outstation journeys,
              sightseeing tours, and family trips —
              discover convenient cab booking options
              for your next journey.
            </p>
          </div>

          <a href="/contact-us" className="vir-bottom-btn">
            Enquire Now <span>↗</span>
          </a>
        </div>

      </div>
    </section>
</>
  );
}
