
// import React, { useState } from "react";

// const vehicles = [
//   {
//     id: 1,
//     name: "Swift Dzire",
//     category: "Sedan",
//     seats: "4 Passengers",
//     image: "Swift-Dzire.jpg",
//     features: ["AC", "Luggage Space", "Outstation"],
//     description: "Comfortable sedan for airport transfers, local and outstation travel.",
//   },
//   // {
//   //   id: 2,
//   //   name: "Hyundai Aura",
//   //   category: "Sedan",
//   //   seats: "4 Passengers",
//   //   image: "Aura-Hyundai.jpg",
//   //   features: ["AC", "Comfortable Seats", "City Travel"],
//   //   description: "Ideal for city rides, business journeys and airport transfers.",
//   // },
//   // {
//   //   id: 3,
//   //   name: "Maruti Suzuki Ciaz",
//   //   category: "Sedan",
//   //   seats: "4 Passengers",
//   //   image: "Maruti-Suzuki-Ciaz.jpg",
//   //   features: ["AC", "Premium Sedan", "Luggage Space"],
//   //   description: "Spacious sedan for executive trips and long-distance travel.",
//   // },
//   {
//     id: 4,
//     name: "Maruti Ertiga",
//     category: "SUV & MUV",
//     seats: "6 Passengers",
//     image: "Maruti-Ertiga.jpg",
//     features: ["AC", "Family Friendly", "Outstation"],
//     description: "Spacious family vehicle for holidays, tours and airport pickups.",
//   },
//   {
//     id: 5,
//     name: "Toyota Rumion",
//     category: "SUV & MUV",
//     seats: "6 Passengers",
//     image: "Toyota-Rumion.jpg",
//     features: ["AC", "Family Travel", "Comfort"],
//     description: "Practical and comfortable MUV for family trips and sightseeing.",
//   },
//   {
//     id: 6,
//     name: "Kia Carens",
//     category: "SUV & MUV",
//     seats: "6 Passengers",
//     image: "Kia-Carens.jpg",
//     features: ["AC", "Premium Cabin", "Group Travel"],
//     description: "Premium family vehicle for corporate journeys and vacations.",
//   },
//   // {
//   //   id: 7,
//   //   name: "Toyota Innova",
//   //   category: "SUV & MUV",
//   //   seats: "6–7 Passengers",
//   //   image: "Innova-Cab.jpg",
//   //   features: ["AC", "Spacious Cabin", "Outstation"],
//   //   description: "Reliable and spacious vehicle for comfortable long-distance tours.",
//   // },
//   {
//     id: 8,
//     name: "Toyota Innova Crysta",
//     category: "Luxury SUV",
//     seats: "6–7 Passengers",
//     image: "Innova-Crysta.jpg",
//     features: ["AC", "Luxury Comfort", "Premium Seats"],
//     description: "Premium SUV for executive transportation and family holidays.",
//   },
//   {
//     id: 9,
//     name: "Tempo Traveller",
//     category: "Traveller & Bus",
//     seats: "Multiple Capacities",
//     image: "Tempo-Traveller.jpg",
//     features: ["Group Tours", "AC Options", "Luggage"],
//     description: "Perfect for group tours, pilgrimage trips, picnics and events.",
//   },
//   // {
//   //   id: 10,
//   //   name: "Force Urbania",
//   //   category: "Traveller & Bus",
//   //   seats: "Multiple Capacities",
//   //   image: "Urbania-Bus.jpg",
//   //   features: ["Premium Seats", "AC Options", "Luxury Travel"],
//   //   description: "Premium group travel vehicle for corporate and family journeys.",
//   // },
//   // {
//   //   id: 11,
//   //   name: "Mini Bus",
//   //   category: "Traveller & Bus",
//   //   seats: "Multiple Capacities",
//   //   image: "Mini-Bus.jpg",
//   //   features: ["Group Seating", "Tours", "Luggage"],
//   //   description: "Convenient group transportation for weddings, picnics and tours.",
//   // },
// ];

// // const categories = [
// //   "All Vehicles",
// //   "Sedan",
// //   "SUV & MUV",
// //   "Luxury SUV",
// //   "Traveller & Bus",
// // ];

// const PopularPackages = () => {
//   const [activeTab, setActiveTab] = useState("All Vehicles");

//   const filteredVehicles =
//     activeTab === "All Vehicles"
//       ? vehicles
//       : vehicles.filter((v) => v.category === activeTab);

//   return (
//     <section className="virendra-fleet">
//       <div className="container">

//         <div className="fleet-heading">
//           <span className="fleet-subtitle">
//             VIRENDRA CABS - OUR FLEET
//           </span>
//           <h2>Choose Your Perfect Ride</h2>
//           <p>
//             Explore our wide range of comfortable sedan cars,
//             SUVs, luxury vehicles, tempo travellers and minibuses.
//             Find the right vehicle for your journey.
//           </p>
//         </div>

//         {/* <div className="fleet-tabs">
//           {categories.map((category) => (
//             <button
//               key={category}
//               type="button"
//               className={`fleet-tab ${
//                 activeTab === category ? "active" : ""
//               }`}
//               onClick={() => setActiveTab(category)}
//             >
//               {category}
//             </button>
//           ))}
//         </div> */}

//    <div className="row g-4">
//   {filteredVehicles.map((vehicle) => (
//     <div
//       className="col-12 col-md-4"
//       key={vehicle.id}
//     >
//       <div className="fleet-card h-100">
//         <div className="fleet-image">
//           <img
//             src={`/images/fleet/${vehicle.image}`}
//             alt={`${vehicle.name} on Rent in Pune`}
//             loading="lazy"
//           />
//           <span className="fleet-badge">
//             {vehicle.category}
//           </span>
//         </div>

//         <div className="fleet-content">
//           <h3>{vehicle.name}</h3>

//           <div className="fleet-capacity">
//             <i className="ri-user-line"></i>
//             <span>{vehicle.seats}</span>
//           </div>

//           <p className="fleet-description">
//             {vehicle.description}
//           </p>

//           <div className="fleet-features">
//             {vehicle.features.map((feature) => (
//               <span key={feature}>
//                 <i className="ri-check-line"></i>
//                 {feature}
//               </span>
//             ))}
//           </div>

//           <div className="fleet-footer">
//             <div className="fleet-fare">
//               <small>Rental Price</small>
//               <strong>On Request</strong>
//             </div>

//             <a
//               href={`/contact-us`}
//               className="fleet-book-btn"
//             >
//               Enquire Now
//               <i className="ri-arrow-right-line"></i>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   ))}
// </div>
//         <div className="fleet-bottom">
//           <a href="/our-fleet" className="fleet-view-all">
//             View All Vehicles
//             <i className="ri-arrow-right-up-line"></i>
//           </a>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default PopularPackages;
















import React from "react";
import "./PopularPackages.css";

const vehicles = [
  {
    id: 1,
    name: "Swift Dzire",
    category: "Sedan",
    seats: "4 Passengers",
    image: "Swift-Dzire.jpg",
    features: ["AC", "Luggage Space", "Outstation"],
    description:
      "Comfortable sedan for airport transfers, local sightseeing and outstation journeys.",
  },
  // {
  //   id: 2,
  //   name: "Hyundai Aura",
  //   category: "Sedan",
  //   seats: "4 Passengers",
  //   image: "Aura-Hyundai.jpg",
  //   features: ["AC", "Comfortable Seats", "City Travel"],
  //   description:
  //     "Ideal for business trips, airport pickups and comfortable city transportation.",
  // },
  // {
  //   id: 3,
  //   name: "Maruti Suzuki Ciaz",
  //   category: "Premium Sedan",
  //   seats: "4 Passengers",
  //   image: "Maruti-Suzuki-Ciaz.jpg",
  //   features: ["AC", "Premium Comfort", "Outstation"],
  //   description:
  //     "Premium sedan with spacious seating for executive and long-distance travel.",
  // },
  {
    id: 4,
    name: "Maruti Ertiga",
    category: "SUV & MUV",
    seats: "6 Passengers",
    image: "Maruti-Ertiga.jpg",
    features: ["AC", "Family Friendly", "Outstation"],
    description:
      "Spacious family vehicle for holidays, tours, sightseeing and airport pickups.",
  },
  {
    id: 5,
    name: "Toyota Rumion",
    category: "SUV & MUV",
    seats: "6 Passengers",
    image: "Toyota-Rumion.jpg",
    features: ["AC", "Family Travel", "Comfort"],
    description:
      "Practical and comfortable MUV for family trips, vacations and sightseeing.",
  },
  {
    id: 6,
    name: "Kia Carens",
    category: "Premium MUV",
    seats: "6 Passengers",
    image: "Kia-Carens.jpg",
    features: ["AC", "Premium Cabin", "Group Travel"],
    description:
      "Stylish premium vehicle for family holidays, corporate journeys and tours.",
  },
  // {
  //   id: 7,
  //   name: "Toyota Innova",
  //   category: "SUV & MUV",
  //   seats: "6–7 Passengers",
  //   image: "Innova-Cab.jpg",
  //   features: ["AC", "Spacious Cabin", "Outstation"],
  //   description:
  //     "Reliable and spacious vehicle for comfortable long-distance journeys.",
  // },
  {
    id: 8,
    name: "Toyota Innova Crysta",
    category: "Luxury SUV",
    seats: "6–7 Passengers",
    image: "Innova-Crysta.jpg",
    features: ["AC", " Comfort", "Premium Seats"],
    description:
      "Premium SUV for business transportation, family vacations and luxury travel.",
  },
  {
    id: 9,
    name: "Tempo Traveller",
    category: "Group Traveller",
    seats: "Multiple Capacities",
    image: "Tempo-Traveller.jpg",
    features: ["Group Tours", "AC Options", "Luggage"],
    description:
      "Perfect for group tours, pilgrimage trips, picnics, weddings and events.",
  },
  // {
  //   id: 10,
  //   name: "Force Urbania",
  //   category: "Luxury Traveller",
  //   seats: "Multiple Capacities",
  //   image: "Urbania-Bus.jpg",
  //   features: ["Premium Seats", "AC Options", "Luxury Travel"],
  //   description:
  //     "Premium group transportation for corporate outings and family journeys.",
  // },
  // {
  //   id: 11,
  //   name: "Mini Bus",
  //   category: "Bus Rental",
  //   seats: "Multiple Capacities",
  //   image: "Mini-Bus.jpg",
  //   features: ["Group Seating", "Tours", "Luggage"],
  //   description:
  //     "Convenient group transportation for weddings, picnics, tours and events.",
  // },
];

const PopularPackages = () => {
  return (
    <section className="virendra-fleet">
      <div className="container">

        <div className="fleet-heading">
          <span className="fleet-subtitle">
            OUR PREMIUM FLEET
          </span>

          <h2>
            Choose Your <span>Perfect Ride</span>
          </h2>

          <p>
            Explore our comfortable and reliable vehicles
            for local travel, airport transfers, family
            trips, corporate journeys and outstation tours.
          </p>
        </div>

        <div className="row g-4">
          {vehicles.map((vehicle) => (
            <div
              className="col-12 col-md-4"
              key={vehicle.id}
            >
              <article className="fleet-card h-100">

                <div className="fleet-image">
                  <span className="fleet-badge">
                    {vehicle.category}
                  </span>

                  <img
                    src={`/images/fleet/${vehicle.image}`}
                    alt={`${vehicle.name} on Rent in Pune`}
                    loading="lazy"
                  />
                </div>

                <div className="fleet-content">
                  <div className="fleet-title-row">
                    <h3>{vehicle.name}</h3>

                    <div className="fleet-capacity">
                      <i className="ri-group-line"></i>
                      <span>{vehicle.seats}</span>
                    </div>
                  </div>

                  <p className="fleet-description">
                    {vehicle.description}
                  </p>

                  <div className="fleet-features">
                    {vehicle.features.map((feature) => (
                      <span key={feature}>
                        <i className="ri-check-line"></i>
                        {feature}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`/contact-us?vehicle=${encodeURIComponent(
                      vehicle.name
                    )}`}
                    className="fleet-book-btn"
                  >
                    <span>Book This Vehicle</span>
                    <i className="ri-arrow-right-line"></i>
                  </a>
                </div>

              </article>
            </div>
          ))}
        </div>

        <div className="fleet-bottom">
          <a href="/our-fleet" className="fleet-view-all">
            Explore All Vehicles
            <i className="ri-arrow-right-up-line"></i>
          </a>
        </div>

      </div>
    </section>
  );
};

export default PopularPackages;
