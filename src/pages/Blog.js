
import React from "react";
import "./Blog.css";

const blogData = [
  // {
  //   id: 1,
  //   title: "Pune to Mumbai Airport Cab",
  //   category: "Airport Transfer",
  //   image: "/images/blog/pune-to-mumbai-airport-cab.jpg",
  //   link: "/pune-to-mumbai-airport-cab",
  //   description:
  //     "Book a Pune to Mumbai Airport Cab with Virendra Cabs for comfortable and convenient airport transportation. Explore one-way and round-trip cab options, flexible pickup locations, and reliable travel arrangements for your airport journey.",
  //   tag: "Airport Cab Service",
  //   icon: "fas fa-plane-departure",
  // },
  {
  id: 4,
  title: "Pune to Outstations Cabs",
  category: "Outstation Travel",
  image: "/images/keyword/2.jpg",
  link: "/pune-to-outstations-cabs",
  description:
    "Travel comfortably with Pune to Outstations Cabs from Virendra Cabs. Book reliable one-way and round-trip cab services from Pune to various destinations. Enjoy flexible pickup locations, convenient travel arrangements, and comfortable journeys for family trips, business travel, and weekend getaways.",
  tag: "Outstation Cab Service",
  icon: "fas fa-route",
},
  {
    id: 2,
    title: "Pune to Lonavala Cab",
    category: "Hill Station Tour",
    image: "/images/keyword/4.jpg",
    link: "/pune-to-lonavala-cab",
    description:
      "Plan a refreshing Pune to Lonavala Cab journey with Virendra Cabs. Enjoy beautiful mountain views, scenic sightseeing locations, and comfortable travel for family vacations, weekend getaways, and group trips.",
    tag: "Weekend Getaway",
    icon: "fas fa-mountain",
  },
  {
    id: 3,
    title: "Pune to Matheran Cabs",
    category: "Outstation Travel",
    image: "/images/keyword/5.jpg",
    link: "/pune-to-matheran-cabs",
    description:
      "Explore the scenic beauty of Matheran with Pune to Matheran Cabs from Virendra Cabs. Arrange comfortable transportation for a family holiday, couples getaway, or weekend trip to this peaceful hill station.",
    tag: "Outstation Cab",
    icon: "fas fa-route",
  },
];

const Blog = () => {
  return (
    <section className="vir-blog-section" id="vir-blog">
      <div className="container">

        {/* SECTION HEADING */}
        <div className="vir-blog-heading">
          <span className="vir-blog-subtitle">
            <i className="fas fa-map-marked-alt"></i>
            EXPLORE WITH VIRENDRA CABS
          </span>

          <h2>
            Our Latest <span>Travel Blogs</span>
          </h2>

          <p>
            Discover popular destinations, helpful travel
            information, and comfortable cab services
            from Pune with Virendra Cabs.
          </p>
        </div>

        {/* BLOG CARDS */}
        <div className="vir-blog-grid">
          {blogData.map((blog) => (
            <article className="vir-blog-card" key={blog.id}>

              {/* IMAGE */}
              <a
                href={blog.link}
                className="vir-blog-image"
                aria-label={`Read about ${blog.title}`}
              >
                <img
                  src={blog.image}
                  alt={`${blog.title} - Virendra Cabs`}
                  loading="lazy"
                />

                <span className="vir-blog-category">
                  <i className={blog.icon}></i>
                  {blog.category}
                </span>
              </a>

              {/* CONTENT */}
              <div className="vir-blog-content">

                <div className="vir-blog-meta">
                  <span>
                    <i className="fas fa-car-side"></i>
                    Virendra Cabs
                  </span>

                  <span className="vir-blog-dot"></span>

                  <span>{blog.tag}</span>
                </div>

                <h3 className="vir-blog-title">
                  <a href={blog.link}>
                    {blog.title}
                  </a>
                </h3>

                <div className="vir-blog-line"></div>

                <p className="vir-blog-description">
                  {blog.description}
                </p>

                <div className="vir-blog-footer">
                  <a
                    href={blog.link}
                    className="vir-blog-readmore"
                  >
                    Read More
                    <i className="fas fa-arrow-right"></i>
                  </a>

                  <span className="vir-blog-footer-icon">
                    <i className="fas fa-location-arrow"></i>
                  </span>
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="vir-blog-cta">
          <div className="vir-blog-cta-icon">
            <i className="fas fa-car-side"></i>
          </div>

          <div className="vir-blog-cta-text">
            <h3>Planning Your Next Trip from Pune?</h3>
            <p>
              Explore comfortable cab rental options
              for airport transfers, sightseeing,
              and outstation travel with Virendra Cabs.
            </p>
          </div>

          <a
            href="tel:+919022549022"
            className="vir-blog-cta-btn"
          >
            Book Your Cab
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Blog;
