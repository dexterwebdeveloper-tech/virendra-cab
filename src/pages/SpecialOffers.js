
import React from "react";

const SpecialOffers = () => {
  return (
    <section className="special-area top-padding position-relative">
      <div className="container">

        {/* Section Heading */}
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-7">
            <div className="section-title mx-430 mx-auto text-center">

              <span className="highlights">
                Explore Our Cab Services
              </span>

              <h4 className="title">
                Comfortable & Reliable Cab Services
                with Virendra Cabs
              </h4>

            </div>
          </div>
        </div>

        <div className="row g-4">

          {/* First Banner - Airport Cab Service */}
         <div className="col-lg-6 col-md-6">
  <a
    href="/pune-airport-cab-service"
    className="offer-banner imgEffect4 wow fadeInLeft"
    data-wow-delay="0s"
  >
    <img
      src="/images/offer-1.png"
      alt="Virendra Cabs Pune Airport Taxi Service"
    />

    <div className="offer-content">
      <p className="highlights-text">
        Convenient Airport Transfers
      </p>

      <h4 className="title">
        Pune Airport Cab Service
      </h4>

      <p className="pera">
        Reliable airport pickup and drop services
        for comfortable and hassle-free travel in Pune.
      </p>

      <div className="location">
        <i className="ri-map-pin-line"></i>

        <p className="name">
          Pune Airport Pickup & Drop
        </p>
      </div>

      <div className="btn-secondary-sm radius-30">
        Book Your Cab
      </div>
    </div>
  </a>
</div>

          {/* Second Banner - Outstation Cab Service */}
          <div className="col-lg-6 col-md-6">
            <a
              href="/pune-to-lonavala-cab"
              className="offer-banner imgEffect4 wow fadeInRight"
              data-wow-delay="0s"
            >
              <img
                src="/images/offer-2.png"
                alt="Virendra Cabs Outstation Taxi Service from Pune"
              />

              <div className="offer-content-two">

                <h4 className="title">
                  Outstation Cab Service
                </h4>

                <p className="pera">
                  Enjoy comfortable journeys for
                  family vacations, sightseeing,
                  weekend trips, and outstation travel
                  with <span className="highlights-text">
                    Virendra Cabs
                  </span>.
                </p>

                <div className="location">
                  <i className="ri-map-pin-line"></i>

                  <p className="name">
                    Pune to Lonavala & Beyond
                  </p>
                </div>

                <div className="btn-secondary-sm radius-30">
                  Explore Cab Services
                </div>

              </div>
            </a>
          </div>

        </div>
      </div>

      {/* Background Shape - Unchanged */}
      <div className="shape-bg">
        <img
          src="/images/icon/bg-shape.png"
          alt=""
          aria-hidden="true"
        />
      </div>

    </section>
  );
};

export default SpecialOffers;
