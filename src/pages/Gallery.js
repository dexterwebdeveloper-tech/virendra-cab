
import React, { useEffect, useState } from "react";
import "./Gallery.css";

const galleryImages = [
  {
  id: 1,
  image: "/images/gallery/1.jpeg",
},
{
  id: 2,
  image: "/images/gallery/2.jpeg",
},
{
  id: 3,
  image: "/images/gallery/3.jpeg",
},
{
  id: 13,
  image: "/images/gallery/13.jpeg",
},
{
  id: 14,
  image: "/images/gallery/14.jpeg",
},
{
  id: 15,
  image: "/images/gallery/15.jpeg",
},
{
  id: 4,
  image: "/images/gallery/4.jpeg",
},
{
  id: 5,
  image: "/images/gallery/5.jpeg",
},
{
  id: 6,
  image: "/images/gallery/6.jpeg",
},
{
  id: 7,
  image: "/images/gallery/7.jpeg",
},
{
  id: 8,
  image: "/images/gallery/8.jpeg",
},
{
  id: 9,
  image: "/images/gallery/9.jpeg",
},
{
  id: 10,
  image: "/images/gallery/10.jpeg",
},
{
  id: 11,
  image: "/images/gallery/11.jpeg",
},
{
  id: 12,
  image: "/images/gallery/12.jpeg",
},

{
    id: 1,
    image: "/images/fleet/Swift-Dzire.jpg",
    title: "Swift Dzire Cab",
    category: "Sedan Cars",
    description: "Comfortable sedan cab for city and outstation journeys.",
  },
  {
    id: 2,
    image: "/images/fleet/Maruti-Ertiga.jpg",
    title: "Maruti Ertiga",
    category: "SUV & MUV",
    description: "Spacious family vehicle for comfortable travel.",
  },
  {
    id: 3,
    image: "/images/fleet/Aura-Hyundai.jpg",
    title: "Hyundai Aura",
    category: "Sedan Cars",
    description: "Comfortable sedan for airport transfers and city trips.",
  },
  {
    id: 4,
    image: "/images/fleet/Maruti-Suzuki-Ciaz.jpg",
    title: "Maruti Suzuki Ciaz",
    category: "Sedan Cars",
    description: "Premium sedan for business and outstation travel.",
  },
  {
    id: 5,
    image: "/images/fleet/Toyota-Rumion.jpg",
    title: "Toyota Rumion",
    category: "SUV & MUV",
    description: "Spacious vehicle for family trips and holidays.",
  },
  {
    id: 6,
    image: "/images/fleet/Kia-Carens.jpg",
    title: "Kia Carens",
    category: "SUV & MUV",
    description: "Premium family car with a comfortable cabin.",
  },
  {
    id: 7,
    image: "/images/fleet/Innova-Cab.jpg",
    title: "Toyota Innova",
    category: "SUV & MUV",
    description: "Comfortable SUV for long-distance travel.",
  },
  {
    id: 8,
    image: "/images/fleet/Innova-Crysta.jpg",
    title: "Toyota Innova Crysta",
    category: "SUV & MUV",
    description: "Premium SUV for family and corporate travel.",
  },
  {
    id: 9,
    image: "/images/fleet/Tempo-Traveller.jpg",
    title: "Tempo Traveller",
    category: "Traveller & Bus",
    description: "Group transportation for tours and events.",
  },
  {
    id: 10,
    image: "/images/fleet/Urbania-Bus.jpg",
    title: "Force Urbania",
    category: "Traveller & Bus",
    description: "Premium group travel with spacious seating.",
  },
  {
    id: 11,
    image: "/images/fleet/Mini-Bus.jpg",
    title: "Mini Bus",
    category: "Traveller & Bus",
    description: "Group travel for weddings, picnics and tours.",
  },
  {
  id: 12,
  image: "/images/fleet/luxury-bus.jpeg",
  title: "Luxury Bus",
  category: "Traveller & Bus",
  description: "Luxury group travel with premium seating, modern amenities and exceptional comfort.",
},
];

// const categories = [
//   "All Photos",
//   "Sedan Cars",
//   "SUV & MUV",
//   "Traveller & Bus",
// ];

export default function Gallery() {
  const [activeCategory, setActiveCategory] =
    useState("All Photos");

  const [selectedIndex, setSelectedIndex] =
    useState(null);

  const [touchStart, setTouchStart] = useState(null);

  const filteredImages =
    activeCategory === "All Photos"
      ? galleryImages
      : galleryImages.filter(
          (item) => item.category === activeCategory
        );

  const isOpen = selectedIndex !== null;

  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev === null
        ? null
        : (prev + 1) % filteredImages.length
    );
  };

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + filteredImages.length) %
          filteredImages.length
    );
  };

  // Keyboard navigation and body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        prevImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [isOpen, filteredImages.length]);

  const handleTouchStart = (event) => {
    setTouchStart(event.touches[0].clientX);
  };

  const handleTouchEnd = (event) => {
    if (touchStart === null) return;

    const touchEnd = event.changedTouches[0].clientX;
    const difference = touchStart - touchEnd;

    if (Math.abs(difference) > 50) {
      if (difference > 0) {
        nextImage();
      } else {
        prevImage();
      }
    }

    setTouchStart(null);
  };

  const activeImage =
    selectedIndex !== null
      ? filteredImages[selectedIndex]
      : null;

  return (
    <>

<section className="vir-breadcrumb-hero">
  <div className="vir-breadcrumb-container">
    <div className="vir-breadcrumb-content">
      <span className="vir-breadcrumb-label">
        VIRENDRA CABS
      </span>

      <h1>Gallery</h1>
    </div>
  </div>

  <div className="vir-breadcrumb-bottom-line" />
</section>


      <section className="vg-gallery-section" id="gallery">
        <div className="container">

          {/* HEADING */}
          <div className="vg-gallery-heading">
            <span className="vg-gallery-label">
              VIRENDRA CABS PHOTO GALLERY
            </span>

            <h2>
              Explore Our <span>Gallery</span>
            </h2>

            <p>
              Take a closer look at our vehicle collection,
              including comfortable sedans, family SUVs,
              premium Innova Crysta, Tempo Travellers,
              Force Urbania and Mini Buses.
            </p>
          </div>

          {/* FILTER BUTTONS */}
          {/* <div className="vg-gallery-filters">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                className={`vg-gallery-filter ${
                  activeCategory === category
                    ? "active"
                    : ""
                }`}
                onClick={() => {
                  setActiveCategory(category);
                  setSelectedIndex(null);
                }}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div> */}

          {/* GALLERY GRID */}
          <div className="row g-4">
            {filteredImages.map((item, index) => (
              <div
                className="col-12 col-md-4"
                key={item.id}
              >
                <button
                  type="button"
                  className="vg-gallery-card"
                  onClick={() => openLightbox(index)}
                  aria-label={`View ${item.title} image`}
                >
                  <div className="vg-gallery-image">
                    <img
                      src={item.image}
                      alt={`${item.title} - Virendra Cabs Pune`}
                      loading="lazy"
                    />

                    <span className="vg-gallery-category">
                      {item.category}
                    </span>

                    <div className="vg-gallery-hover">
                      <span className="vg-gallery-zoom">
                        <i className="fas fa-expand-alt"></i>
                      </span>

                      <span>Click to View</span>
                    </div>
                  </div>

                  <div className="vg-gallery-card-footer">
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.category}</p>
                    </div>

                    <span className="vg-gallery-card-arrow">
                      <i className="fas fa-arrow-up"></i>
                    </span>
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* BOTTOM TEXT */}
          <div className="vg-gallery-bottom">
            <span>
              <i className="fas fa-camera"></i>
              {filteredImages.length} Photos
            </span>

            <p>
              Click any image to view it in full-screen
              gallery mode.
            </p>
          </div>

        </div>
      </section>

      {/* FULL SCREEN LIGHTBOX */}
      {isOpen && activeImage && (
        <div
          className="vg-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Vehicle image gallery"
          onClick={closeLightbox}
        >
          {/* TOP BAR */}
          <div
            className="vg-lightbox-top"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="vg-lightbox-brand">
              <span>VIRENDRA CABS</span>
              <small>PHOTO GALLERY</small>
            </div>

            <div className="vg-lightbox-actions">
              <span className="vg-lightbox-counter">
                {selectedIndex + 1} / {filteredImages.length}
              </span>

              <button
                type="button"
                className="vg-lightbox-close"
                onClick={closeLightbox}
                aria-label="Close gallery"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>

          {/* MAIN IMAGE SLIDER */}
          <div
            className="vg-lightbox-main"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <button
              type="button"
              className="vg-lightbox-nav vg-lightbox-prev"
              onClick={prevImage}
              aria-label="Previous image"
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            <div
              className="vg-lightbox-image-box"
              key={activeImage.id}
            >
              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="vg-lightbox-image"
              />
            </div>

            <button
              type="button"
              className="vg-lightbox-nav vg-lightbox-next"
              onClick={nextImage}
              aria-label="Next image"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          {/* IMAGE CAPTION */}
          <div
            className="vg-lightbox-caption"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>{activeImage.title}</h3>
            <p>{activeImage.description}</p>
          </div>

          {/* THUMBNAIL SLIDER */}
          <div
            className="vg-lightbox-thumbnails"
            onClick={(e) => e.stopPropagation()}
          >
            {filteredImages.map((item, index) => (
              <button
                type="button"
                key={item.id}
                className={`vg-lightbox-thumb ${
                  selectedIndex === index
                    ? "active"
                    : ""
                }`}
                onClick={() => setSelectedIndex(index)}
                aria-label={`View ${item.title}`}
                aria-pressed={selectedIndex === index}
              >
                <img
                  src={item.image}
                  alt={item.title}
                />
              </button>
            ))}
          </div>

        </div>
      )}
    </>
  );
}
