
import React, { useState } from "react";
import "./OurFleets.css";

const fleets = [
  {
    id: 1,
    name: "Swift Dzire",
    category: "Sedan",
    seats: "4 Passengers",
    image: "/images/fleet/Swift-Dzire.jpg",
    features: ["AC", "Comfortable Seating", "Luggage Space"],
    description: "Perfect for airport transfers, city travel and outstation trips.",
  },
  {
    id: 2,
    name: "Maruti Ertiga",
    category: "SUV / MUV",
    seats: "6 Passengers",
    image: "/images/fleet/Maruti-Ertiga.jpg",
    features: ["AC", "Family Friendly", "Spacious Interior"],
    description: "A comfortable and practical choice for family journeys.",
  },
  {
    id: 3,
    name: "Hyundai Aura",
    category: "Sedan",
    seats: "4 Passengers",
    image: "/images/fleet/Aura-Hyundai.jpg",
    features: ["AC", "Smooth Ride", "Comfort Seating"],
    description: "Ideal for local trips, business travel and airport pickups.",
  },
  {
    id: 4,
    name: "Maruti Suzuki Ciaz",
    category: "Premium Sedan",
    seats: "4 Passengers",
    image: "/images/fleet/Maruti-Suzuki-Ciaz.jpg",
    features: ["AC", "Premium Comfort", "Spacious Cabin"],
    description: "Enjoy comfortable executive and long-distance journeys.",
  },
  {
    id: 5,
    name: "Toyota Rumion",
    category: "MUV",
    seats: "6 Passengers",
    image: "/images/fleet/Toyota-Rumion.jpg",
    features: ["AC", "Family Travel", "Comfort Interior"],
    description: "A spacious option for family outings and outstation tours.",
  },
  {
    id: 6,
    name: "Kia Carens",
    category: "Premium MUV",
    seats: "6 Passengers",
    image: "/images/fleet/Kia-Carens.jpg",
    features: ["AC", "Premium Cabin", "Group Comfort"],
    description: "A stylish vehicle for family holidays and corporate trips.",
  },
  {
    id: 7,
    name: "Innova Cab",
    category: "Premium SUV",
    seats: "6–7 Passengers",
    image: "/images/fleet/Innova-Cab.jpg",
    features: ["AC", "Spacious Seating", "Outstation Travel"],
    description: "A reliable choice for comfortable long-distance journeys.",
  },
  {
    id: 8,
    name: "Innova Crysta",
    category: "Luxury SUV",
    seats: "6–7 Passengers",
    image: "/images/fleet/Innova-Crysta.jpg",
    features: ["AC", "Luxury Comfort", "Premium Interior"],
    description: "Premium travel for business trips and family vacations.",
  },
  {
    id: 9,
    name: "Tempo Traveller",
    category: "Group Traveller",
    seats: "Various Capacities",
    image: "/images/fleet/Tempo-Traveller.jpg",
    features: ["AC Options", "Group Travel", "Luggage Space"],
    description: "Ideal for group tours, pilgrimages, picnics and events.",
  },
  {
    id: 10,
    name: "Urbania Bus",
    category: "Luxury Traveller",
    seats: "Various Capacities",
    image: "/images/fleet/Urbania-Bus.jpg",
    features: ["Premium Seating", "Group Tours", "AC Options"],
    description: "Premium group transportation for tours and corporate travel.",
  },
  {
    id: 11,
    name: "Mini Bus",
    category: "Bus Rental",
    seats: "Various Capacities",
    image: "/images/fleet/Mini-Bus.jpg",
    features: ["Group Seating", "Tour Friendly", "Luggage Space"],
    description: "Convenient transportation for large families and group trips.",
  },
  {
  id: 12,
  name: "Luxury Bus",
  category: "Luxury Bus Rental",
  seats: "Various Capacities",
  image: "/images/fleet/luxury-bus.jpeg",
  features: ["AC", "Luxury Seating", "Luggage Space"],
  description: "Enjoy premium group travel with spacious seating, modern amenities, and comfortable journeys for tours, corporate trips, and special events.",
},
];

const filters = ["All Vehicles", "Sedan", "SUV / MUV", "Traveller / Bus"];

const getFilterGroup = (category) => {
  if (category.includes("Sedan")) return "Sedan";
  if (["SUV / MUV", "MUV", "Premium MUV", "Premium SUV", "Luxury SUV"].includes(category))
    return "SUV / MUV";
  return "Traveller / Bus";
};

export default function OurFleets() {
  const [activeFilter, setActiveFilter] = useState("All Vehicles");

  const filteredFleets = fleets.filter(
    (vehicle) =>
      activeFilter === "All Vehicles" ||
      getFilterGroup(vehicle.category) === activeFilter
  );

  const handleEnquiry = (vehicle) => {
    const message = `Hello Virendra Cabs, I would like to enquire about ${vehicle.name} rental. Please share availability and booking details.`;

    window.open(
      `https://wa.me/?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
<>

       <section className="vir-breadcrumb-hero">
  <div className="vir-breadcrumb-container">
    <div className="vir-breadcrumb-content">
      <span className="vir-breadcrumb-label">
        VIRENDRA CABS
      </span>

      <h1>Our Fleets</h1>
    </div>
  </div>

  <div className="vir-breadcrumb-bottom-line" />
</section>

    <section className="vf-section" id="our-fleets">
    
{/* Vehicle Grid */}
<div className="row g-4">
  {filteredFleets.map((vehicle, index) => (
    <div className="col-12 col-md-4" key={vehicle.id}>
      <article className="vf-card h-100">

        <div className="vf-image-wrap">
          <span className="vf-category">
            {vehicle.category}
          </span>

          <img
            src={vehicle.image}
            alt={`${vehicle.name} on rent in Pune`}
            loading="lazy"
          />

          <span className="vf-vehicle-count">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="vf-card-content">
          <div className="vf-title-row">
            <h3>{vehicle.name}</h3>
          </div>

          <div className="vf-seats">
            <span className="vf-dot"></span>
            {vehicle.seats}
          </div>

          <p className="vf-description">
            {vehicle.description}
          </p>

          <div className="vf-features">
            {vehicle.features.map((feature) => (
              <span key={feature}>
                <span className="vf-check">✓</span>
                {feature}
              </span>
            ))}
          </div>

          <button
            type="button"
            className="vf-enquire-btn"
            onClick={() => handleEnquiry(vehicle)}
          >
            Enquire Now
            <span>↗</span>
          </button>
        </div>

      </article>
    </div>
  ))}
</div>

    </section>

</>
  );
}
