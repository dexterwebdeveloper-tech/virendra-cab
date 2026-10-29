
import React from "react";

const Destination = () => {
  const destinations = [
    {
      country: "India",
      location: "Mahabaleshwar",
      image: "/images/destinationn/destination-1.jpg",
      size: "col-xl-7 col-lg-7 col-md-7",
    },
    {
      country: "India",
      location: "Mumbai",
      image: "/images/destinationn/destination-2.jpg",
      size: "col-xl-5 col-lg-5 col-md-5",
    },
    {
      country: "India",
      location: "Mumbai Airport",
      image: "/images/destinationn/destination-3.jpg",
      size: "col-lg-4 col-md-6 col-sm-6",
    },
    {
      country: "India",
      location: "Goa",
      image: "/images/destinationn/destination-4.jpg",
      size: "col-lg-4 col-md-6 col-sm-6",
    },
    {
      country: "India",
      location: "Lonavala",
      image: "/images/destinationn/destination-5.jpg",
      size: "col-lg-4 col-md-6 col-sm-6",
    },
  ];

  const renderDestination = (destination) => (
    <a
      href=""
      className="destination-banner"
      key={destination.country}
    >
      <img
        src={destination.image}
        alt={`${destination.location}, ${destination.country}`}
      />

      <div className="destination-content">
        <div className="ratting-badge">
          <i className="ri-star-s-fill"></i>
          <span>4.5</span>
        </div>

        <div className="destination-info">
          <div className="destination-name">
            {/* <p className="pera">{destination.country}</p> */}

            <div className="location">
              <i className="ri-map-pin-line"></i>
              <p className="name">{destination.location}</p>
            </div>
          </div>

          <div className="button-section">
            <div className="arrow-btn">
              <i className="ri-arrow-right-line"></i>
            </div>
          </div>
        </div>
      </div>
    </a>
  );

  return (
    <section className="destination-area destination-bg-before">
      <div className="container">
        {/* Section Heading */}
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-7">
            <div className="section-title text-center mx-430 mx-auto position-relative">
              <span className="highlights">Destination List</span>

              <h4 className="title">
  Explore Beautiful Destinations with Virendra Cabs
              </h4>
            </div>
          </div>
        </div>

        {/* First Two Destinations */}
        <div className="row g-4">
          {destinations.slice(0, 2).map((destination) => (
            <div className={destination.size} key={destination.country}>
              {renderDestination(destination)}
            </div>
          ))}

          {/* Destination Gallery */}
          <div className="destination-gallery">
            <div className="row g-4">
              {destinations.slice(2).map((destination) => (
                <div
                  className={destination.size}
                  key={destination.country}
                >
                  {renderDestination(destination)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Shape */}
      <div className="shape">
        <img
          src="/images/icon/shape.png"
          alt=""
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default Destination;
