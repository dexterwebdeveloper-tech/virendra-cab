import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Cabbookinginpune() {



const cardData = {
    keyword: "Cab Booking in Pune",
    headingDescription: "Virendra Cab makes cab booking in Pune convenient for local travel, airport transfers, outstation journeys, one-way drops, round trips, corporate transportation, family travel, and private car rentals with drivers. Customers can plan immediate or advance bookings by sharing their pickup location, destination, travel date, preferred timing, passenger count, and vehicle requirement. From everyday Pune city rides to outstation destinations such as Mumbai, Shirdi, Nashik, Lonavala, and Mahabaleshwar, Virendra Cab provides practical booking options for individuals, families, professionals, and groups.",
    topPlaces: [
        {
            title: "Pune Airport",
            description: "A convenient location for passengers requiring scheduled airport pickup and drop services, with vehicle options suitable for travellers carrying different amounts of luggage."
        },
        {
            title: "Shivajinagar",
            description: "A central Pune travel point for local cab bookings, railway station transfers, business travel, and onward journeys to other parts of the city."
        },
        {
            title: "Hinjewadi",
            description: "Useful for IT professionals, employees, and residents looking for local cab bookings, airport transfers, and planned outstation transportation."
        },
        {
            title: "Kharadi",
            description: "A practical pickup area for business travellers, office commuters, families, and passengers planning local or intercity cab journeys."
        },
        {
            title: "Hadapsar",
            description: "Cab booking options from Hadapsar are suitable for daily transportation, airport transfers, office travel, family trips, and outstation journeys."
        },
        {
            title: "Kothrud",
            description: "Convenient cab services for residents and visitors requiring city transfers, airport transportation, private cabs, and planned trips outside Pune."
        },
        {
            title: "Mumbai",
            description: "A popular outstation destination for Pune travellers needing one-way or round-trip cab bookings for business, family visits, airport transfers, and personal travel."
        },
        {
            title: "Shirdi",
            description: "Suitable for pilgrims and families booking private cabs from Pune to Shirdi, with vehicle choices based on group size and luggage."
        },
        {
            title: "Nashik",
            description: "A useful outstation destination for business travel, religious visits, family journeys, and sightseeing trips starting from Pune."
        },
        {
            title: "Lonavala",
            description: "A convenient choice for weekend travellers and families booking private cabs from Pune for leisure trips, sightseeing, and short road journeys."
        }
    ],
    services: [
        {
            name: "Cab Booking in Pune",
            description: "Virendra Cab provides convenient cab booking in Pune for local rides, airport transfers, outstation journeys, business travel, family trips, and private transportation. Customers can share their route and travel requirements to arrange a suitable vehicle."
        },
        {
            name: "Online Cab Booking Pune",
            description: "Online cab booking in Pune allows travellers to plan their journey by sharing pickup details, destination, date, time, passenger count, and vehicle preference. This makes advance travel planning more organized and convenient."
        },
        {
            name: "Taxi Booking in Pune",
            description: "Taxi booking in Pune is suitable for everyday city travel, airport transfers, railway station connections, office visits, and intercity journeys. Virendra Cab supports bookings according to the customer's preferred schedule."
        },
        {
            name: "Pune Cab Reservation",
            description: "Pune cab reservation services help customers secure transportation ahead of important journeys, including airport trips, family functions, business meetings, and outstation travel. Vehicle requirements can be discussed during the reservation process."
        },
        {
            name: "Book a Cab in Pune",
            description: "Travellers can book a cab in Pune by providing their pickup point, destination, travel date, preferred time, and passenger requirements. Virendra Cab offers vehicle options for both local and longer-distance journeys."
        },
        {
            name: "Cab Booking Near Me in Pune",
            description: "Customers looking for cab booking near them in Pune can provide their pickup locality and destination to arrange a suitable ride. The service can be used for immediate requirements as well as advance bookings."
        },
        {
            name: "Best Cab Booking Service Pune",
            description: "Travellers comparing cab booking services in Pune can consider Virendra Cab based on vehicle availability, route requirements, travel timing, passenger capacity, and overall convenience. Options are available for local and outstation transportation."
        },
        {
            name: "Affordable Cab Booking Pune",
            description: "Affordable cab booking in Pune is useful for customers looking for practical transportation for local rides, airport transfers, and outstation journeys. Vehicle selection can be matched with the trip size and travel requirements."
        },
        {
            name: "24/7 Cab Booking in Pune",
            description: "Customers with early-morning, late-night, or flexible travel schedules can enquire about 24/7 cab booking in Pune. Booking assistance is suitable for local transportation, airport transfers, and planned outstation trips."
        },
        {
            name: "Local Cab Booking Pune",
            description: "Local cab booking in Pune can be used for shopping, appointments, office travel, railway station transfers, family visits, and everyday point-to-point transportation across the city."
        },
        {
            name: "Outstation Cab Booking Pune",
            description: "Outstation cab booking from Pune is suitable for journeys to Mumbai, Shirdi, Nashik, Lonavala, Mahabaleshwar, Goa, and other destinations. Customers can select one-way or round-trip travel based on their itinerary."
        },
        {
            name: "One-Way Cab Booking Pune",
            description: "One-way cab booking in Pune is a convenient option when passengers need transportation to their destination without scheduling a return journey. Suitable vehicle choices can be arranged according to passenger and luggage requirements."
        },
        {
            name: "Round-Trip Cab Booking Pune",
            description: "Travellers planning to return to Pune after visiting another destination can arrange a round-trip cab according to their travel dates and itinerary. This option works well for sightseeing, family visits, business trips, and pilgrimages."
        },
        {
            name: "Airport Cab Booking Pune",
            description: "Airport cab booking in Pune helps passengers plan pickup and drop services around their flight schedules. Customers can select a vehicle based on passenger numbers, luggage, and preferred pickup location."
        },
        {
            name: "Pune Airport Taxi Reservation",
            description: "Pune Airport taxi reservations can be arranged in advance for early flights, late arrivals, business travel, and family journeys. Virendra Cab helps customers organize suitable airport transportation around their scheduled timing."
        },
        {
            name: "Private Cab Booking Pune",
            description: "Private cab booking in Pune provides a dedicated vehicle for customers who prefer direct transportation without sharing the ride. It is suitable for families, business travellers, couples, and individuals."
        },
        {
            name: "Sedan Cab Booking Pune",
            description: "Sedan cab booking in Pune is a practical choice for individuals and small groups seeking comfortable transportation for local, airport, one-way, and outstation journeys. Vehicle selection can be based on passenger and luggage needs."
        },
        {
            name: "SUV Cab Booking Pune",
            description: "SUV cab booking in Pune is suitable for families and groups requiring additional seating or luggage capacity. Virendra Cab can arrange SUV transportation for local travel, airport transfers, and outstation routes."
        },
        {
            name: "Family Cab Booking Pune",
            description: "Families can arrange private cab bookings in Pune for airport travel, weekend trips, pilgrimages, sightseeing, family functions, and outstation journeys. Vehicle selection can be matched with the number of travellers and luggage."
        },
        {
            name: "Corporate Cab Booking Pune",
            description: "Corporate cab booking in Pune supports employee travel, client transportation, office transfers, business meetings, airport pickups, and scheduled corporate journeys. Businesses can plan vehicle requirements around their work schedules."
        },
        {
            name: "Same-Day Cab Booking Pune",
            description: "Same-day cab booking in Pune is useful for customers who need transportation on short notice for local travel, airport transfers, meetings, family requirements, or urgent intercity journeys, subject to vehicle availability."
        },
        {
            name: "Advance Cab Booking Pune",
            description: "Advance cab booking in Pune helps travellers organize transportation before important trips. It is particularly useful for airport departures, early-morning travel, weddings, corporate meetings, family functions, and planned outstation journeys."
        },
        {
            name: "Pune Cab Booking Contact Number",
            description: "Customers searching for the Pune cab booking contact number can connect with Virendra Cab to discuss their route, travel date, vehicle requirement, passenger count, and booking details before confirming a journey."
        },
        {
            name: "Instant Taxi Booking Pune",
            description: "Instant taxi booking in Pune is useful for travellers who need to arrange transportation quickly. Customers can provide their pickup point, destination, timing, and vehicle preference to check a suitable booking option."
        },
        {
            name: "Online Outstation Taxi Booking Pune",
            description: "Online outstation taxi booking from Pune makes it easier to plan private transportation for intercity journeys. Customers can share their destination, travel date, trip type, and vehicle preference before confirming the booking."
        },
        {
            name: "Pune Car Rental Booking with Driver",
            description: "Pune car rental booking with driver is suitable for customers requiring chauffeur-driven transportation for local work, business meetings, sightseeing, family functions, airport travel, or multi-day outstation itineraries."
        }
    ],
    tableData: [
        ["Cab Booking in Pune"],
        ["Online Cab Booking Pune"],
        ["Taxi Booking in Pune"],
        ["Pune Cab Reservation"],
        ["Book a Cab in Pune"],
        ["Cab Booking Near Me in Pune"],
        ["Best Cab Booking Service Pune"],
        ["Affordable Cab Booking Pune"],
        ["24/7 Cab Booking in Pune"],
        ["Local Cab Booking Pune"],
        ["Outstation Cab Booking Pune"],
        ["One-Way Cab Booking Pune"],
        ["Round-Trip Cab Booking Pune"],
        ["Airport Cab Booking Pune"],
        ["Pune Airport Taxi Reservation"],
        ["Private Cab Booking Pune"],
        ["Sedan Cab Booking Pune"],
        ["SUV Cab Booking Pune"],
        ["Family Cab Booking Pune"],
        ["Corporate Cab Booking Pune"],
        ["Same-Day Cab Booking Pune"],
        ["Advance Cab Booking Pune"],
        ["Pune Cab Booking Contact Number"],
        ["Instant Taxi Booking Pune"],
        ["Online Outstation Taxi Booking Pune"],
        ["Pune Car Rental Booking with Driver"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Simple Booking Process",
            WhyChoosedescription: "Virendra Cab makes the booking process straightforward by allowing customers to share their pickup point, destination, travel date, preferred timing, passenger count, and vehicle requirements before confirming their journey."
        },
        {
            WhyChooseheading: "Local and Pune Outstation Travel",
            WhyChoosedescription: "Customers can arrange transportation for everyday Pune travel as well as outstation journeys to destinations across Maharashtra and nearby regions. One-way and round-trip options provide flexibility for different itineraries."
        },
        {
            WhyChooseheading: "Advance Travel Planning",
            WhyChoosedescription: "Advance cab booking is useful for airport departures, weddings, corporate meetings, family occasions, pilgrimages, and planned holidays. Customers can organize their vehicle requirements before the travel date."
        },
        {
            WhyChooseheading: "Airport Booking Convenience",
            WhyChoosedescription: "Passengers can reserve cabs for Pune Airport pickup and drop services around their flight schedule. Vehicle selection can be adjusted according to the number of travellers and amount of luggage."
        },
        {
            WhyChooseheading: "Private Vehicle Options",
            WhyChoosedescription: "Private cab bookings provide dedicated transportation for individuals, couples, families, and business travellers. Sedan and SUV options can be selected according to passenger capacity and journey requirements."
        },
        {
            WhyChooseheading: "Flexible One-Way and Return Trips",
            WhyChoosedescription: "Travellers can choose a one-way booking when a return vehicle is unnecessary or select a round-trip cab when they plan to return to Pune. This flexibility is useful for both short and extended journeys."
        },
        {
            WhyChooseheading: "Corporate and Family Travel",
            WhyChoosedescription: "Virendra Cab supports different travel purposes, including employee transportation, client pickups, business meetings, family outings, airport transfers, and private tours. Vehicle selection can be planned around the group size."
        },
        {
            WhyChooseheading: "Driver-Assisted Car Rental",
            WhyChoosedescription: "Customers requiring a vehicle with a driver can arrange chauffeur-driven car rental in Pune for local errands, sightseeing, business schedules, family events, and outstation itineraries. The booking can be planned around the required duration and route."
        }
    ]
};

const faqData = [
    {
        question: "How can I make a Cab Booking in Pune with Virendra Cab?",
        answer: "For a Cab Booking in Pune, you can share your pickup location, destination, travel date, preferred departure time, number of passengers, and vehicle preference. These details help Virendra Cab arrange a suitable cab for your planned journey."
    },
    {
        question: "Can I book a cab online for local travel within Pune?",
        answer: "Local cab bookings can be arranged for travel between areas such as Baner, Kothrud, Wakad, Hinjewadi, Kharadi, Hadapsar, Viman Nagar, Aundh, and Pimpri-Chinchwad. The pickup and drop locations can be specified according to your daily travel requirements."
    },
    {
        question: "Is Cab Booking in Pune available for airport transfers?",
        answer: "Airport cab bookings can be made for trips to or from Pune Airport. Providing your flight timing along with the pickup or drop location allows the journey to be planned around your airport schedule."
    },
    {
        question: "Can I book a Pune cab for an outstation journey?",
        answer: "Outstation bookings can be arranged from Pune to destinations such as Mumbai, Nashik, Shirdi, Mahabaleshwar, Lonavala, Goa, Kolhapur, Satara, and other cities. You can discuss one-way or return travel depending on your itinerary."
    },
    {
        question: "Which car should I choose while making a Cab Booking in Pune?",
        answer: "The right vehicle depends on passenger numbers, luggage, route, and trip duration. A sedan can be suitable for smaller groups, while Ertiga, Innova, or Innova Crysta can provide additional seating and luggage space for families and larger groups."
    },
    {
        question: "Can I book a cab in Pune for a one-way trip?",
        answer: "One-way cab bookings are available for travellers who require a direct journey to another city or destination without arranging a return trip. This option can be useful for airport transfers, business travel, relocation, and intercity journeys."
    },
    {
        question: "Can families use Cab Booking in Pune for sightseeing trips?",
        answer: "Families can arrange cabs for Pune sightseeing and nearby destinations according to their preferred schedule. Attractions such as Shaniwar Wada, Aga Khan Palace, Sinhagad Fort, Mulshi, and Lonavala can be included in a planned itinerary."
    },
    {
        question: "Is it possible to book a cab in Pune for corporate transportation?",
        answer: "Corporate cab bookings can be used for office travel, client meetings, employee transportation, conferences, airport transfers, and business trips outside Pune. The schedule can be coordinated around your required pickup and drop timings."
    },
    {
        question: "Can I make an early morning Cab Booking in Pune?",
        answer: "Early morning bookings can be requested for airport departures, railway journeys, business appointments, or other scheduled travel. Reserving ahead and providing the exact pickup time helps in planning the required cab for the journey."
    },
    {
        question: "What information is required for a Cab Booking in Pune?",
        answer: "You should provide the pickup address or area, destination, travel date, preferred departure time, passenger count, luggage details, and vehicle preference. For airport or railway transfers, sharing the flight or train timing can also help with trip planning."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Ritesh Gokhale",
        feedback: "I booked a cab from Pune for an early airport transfer and shared my flight details during the reservation. The process was straightforward, and the sedan was comfortable for my solo trip with luggage.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Kavya Deshpande",
        feedback: "Our group needed a cab from Kothrud for a weekend trip to Mahabaleshwar. The larger vehicle suited our group and bags well, while arranging the pickup in advance made the travel plan easier to manage.",
        rating: 5
    }
];



    const Images = [
        { place: "/images/keyword/1.jpg", text: "Pune to Mumbai Airport Cab", link: "pune-to-mumbai-airport-cab" },
        { place: "/images/keyword/2.jpg", text: "Pune to Outstations Cabs", link: "pune-to-outstations-cabs" },
        { place: "/images/keyword/3.jpg", text: "Pune to Mahabaleshwar Cab", link: "pune-to-mahabaleshwar-cab" },
        { place: "/images/keyword/4.jpg", text: "Pune to Lonavala Cab", link: "pune-to-lonavala-cab" },
        { place: "/images/keyword/5.jpg", text: "Pune to Matheran Cabs", link: "pune-to-matheran-cabs" },
        { place: "/images/keyword/6.jpg", text: "Pune to 5 Jyotirlinga Darshan Cab", link: "pune-to-5-jyotirlinga-darshan-cab" },
        { place: "/images/keyword/7.jpg", text: "Pune to Bhimashankar Cab", link: "pune-to-bhimashankar-cab" },
        { place: "/images/keyword/8.jpg", text: "Pune to Aurangabad Cab Service", link: "pune-to-aurangabad-cab-service" },
        { place: "/images/keyword/9.jpg", text: "Pune to Nashik Cab Service", link: "pune-to-nashik-cab-service" },
        { place: "/images/keyword/10.jpg", text: "Pune to Kolhapur Cab Service", link: "pune-to-kolhapur-cab-service" },
        { place: "/images/keyword/11.jpg", text: "Pune to Alibaug Cab", link: "pune-to-alibaug-cab" },
        { place: "/images/keyword/12.jpg", text: "Pune to Goa Cab Service", link: "pune-to-goa-cab-service" },
        { place: "/images/keyword/13.jpg", text: "Goa to Pune Cabs", link: "goa-to-pune-cabs" },
        { place: "/images/keyword/14.jpg", text: "Innova Crysta Cab in Pune", link: "innova-crysta-cab-in-pune" },
        { place: "/images/keyword/15.jpg", text: "Ertiga On Rent in Pune", link: "ertiga-on-rent-in-pune" },
        { place: "/images/keyword/16.jpg", text: "Pune to Ashtavinayak Cabs", link: "pune-to-ashtavinayak-cabs" },
        { place: "/images/keyword/17.jpg", text: "Pune to Goa Cabs", link: "pune-to-goa-cabs" },
        { place: "/images/keyword/18.jpg", text: "Pune to Jyotirlinga Darshan Package", link: "pune-to-jyotirlinga-darshan-package" },
        { place: "/images/keyword/19.jpg", text: "Pune to Akkalkot Cabs", link: "pune-to-akkalkot-cabs" },
        { place: "/images/keyword/20.jpg", text: "Pune to Pandharpur Cab", link: "pune-to-pandharpur-cab" },
        { place: "/images/keyword/21.jpg", text: "Pune to Grishneshwar Jyotirlinga Cab", link: "pune-to-grishneshwar-jyotirlinga-cab" },
        { place: "/images/keyword/22.jpg", text: "Pune to Mumbai Cabs", link: "pune-to-mumbai-cabs" },
        { place: "/images/keyword/23.jpg", text: "Pune to Alibag Cab", link: "pune-to-alibag-cab" },
        { place: "/images/keyword/24.jpg", text: "Pune to Goa Cab Service", link: "pune-to-goa-cab-service" },
        { place: "/images/keyword/25.jpg", text: "Innova Crysta On Rent in Pune", link: "innova-crysta-on-rent-in-pune" },
    ];











const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Cab Booking in Pune",
  "image": "https://www.virendracabs.com/assets/images/cab-booking-in-pune.webp",
  "description": "Cab Booking in Pune from Virendra Cab provides a convenient way to arrange private transportation for local journeys, airport transfers, railway station trips, one-way travel, round trips and outstation routes. Customers searching for Cab Booking in Pune, Online Cab Booking Pune, Taxi Booking in Pune or Pune Cab Reservation can share their pickup point, destination, travel date and preferred vehicle category to plan their journey. Book a Cab in Pune for residential pickups, office travel, hotel transfers, shopping trips, appointments, business meetings and other city transportation requirements. Customers looking for Cab Booking Near Me in Pune can enquire about available vehicles for their location and required travel time. Best Cab Booking Service Pune options can include Sedan, Ertiga, SUV, Innova and Innova Crysta vehicles depending on passenger capacity, luggage and comfort requirements. Affordable Cab Booking Pune is suitable for individuals, families, corporate travellers and groups who want private transportation with a vehicle selected according to their needs. 24/7 Cab Booking in Pune can be planned for different travel schedules, including early-morning airport departures, late-night arrivals and other time-sensitive journeys, subject to vehicle availability. Local Cab Booking Pune is useful for city travel, railway station transfers, shopping, meetings and everyday transportation, while Outstation Cab Booking Pune supports intercity journeys to destinations such as Mumbai, Lonavala, Mahabaleshwar, Shirdi, Nashik, Goa and other locations. One-Way Cab Booking Pune is suitable when passengers require a direct drop without reserving the vehicle for the return journey. Round-Trip Cab Booking Pune can be arranged when travellers need the same vehicle for their return trip after completing their visit. Airport Cab Booking Pune and Pune Airport Taxi Reservation services can be used for pickups and drops to Pune Airport, while longer airport transfers such as Pune to Mumbai Airport can also be arranged according to the travel plan. Private Cab Booking provides direct transportation without the need to share the vehicle with unrelated passengers. Corporate customers can arrange cabs for business meetings, office visits and intercity travel, while families can select spacious vehicles for sightseeing, functions, pilgrimages and longer journeys. Advance cab reservation allows passengers to coordinate pickup details and vehicle preferences before the journey. The final fare may vary according to vehicle type, pickup and destination, travel date, distance, trip category and applicable toll or parking charges, so customers should confirm the current quotation before booking. Virendra Cab provides flexible booking options for customers looking for reliable local, airport, one-way, round-trip and outstation Cab Booking in Pune.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.virendracabs.com/cab-booking-in-pune"
  }
};






    return (
        <div>

<Helmet>
  <title>
    Cab Booking in Pune | Online Cab Booking Pune | +91 9022549022
  </title>

  <meta
    name="description"
    content="Book a cab in Pune for local, airport, one-way, round-trip and outstation travel. Use online cab booking or contact Virendra Cab for private taxi reservations."
  />

  <meta
    name="keywords"
    content="Cab booking in Pune, Online cab booking Pune, Taxi booking in Pune, Pune cab reservation, Book a cab in Pune, Cab booking near me in Pune, Best cab booking service Pune, Affordable cab booking Pune, 24/7 cab booking in Pune, Local cab booking Pune, Outstation cab booking Pune, One-way cab booking Pune, Round-trip cab booking Pune, Airport cab booking Pune, Pune airport taxi reservation, Private cab booking Pune, Pune cab booking online, Pune taxi booking online, Online taxi booking Pune, Pune taxi reservation, Pune taxi cab booking, Pune cab reservation online, Cab booking near me Pune, Taxi booking near me Pune, Cab service booking Pune, Taxi service booking Pune, Best cab booking Pune, Affordable taxi booking Pune, Reliable cab booking Pune, Local taxi booking Pune, Local cab reservation Pune, Outstation taxi booking Pune, Outstation cab reservation Pune, Pune outstation cab booking, Pune outstation taxi booking, One way taxi booking Pune, One way cab reservation Pune, Round trip taxi booking Pune, Round trip cab reservation Pune, Pune airport cab booking, Pune airport taxi booking, Pune Airport cab reservation, Pune Airport taxi reservation, Pune airport transfer booking, Pune railway station cab booking, Pune railway station taxi booking, Private taxi booking Pune, Private car booking Pune, Pune private cab reservation, Pune corporate cab booking, Pune business taxi booking Pune, Pune family cab booking, Pune sightseeing cab booking, Pune Sedan cab booking, Pune Ertiga cab booking, Pune SUV cab booking, Pune Innova cab booking, Pune Innova Crysta cab booking, Cheap cab booking Pune, Budget cab booking Pune, Affordable taxi booking Pune, 24 hour cab booking Pune, 24 hour taxi booking Pune, Pune cab booking service, Pune taxi booking service, Pune to Mumbai cab booking, Pune to Mumbai taxi booking, Pune to Shirdi cab booking, Pune to Mahabaleshwar cab booking, Pune to Lonavala cab booking, Pune to Goa cab booking, Pune to Nashik cab booking"
  />

  <script type="application/ld+json">
    {JSON.stringify(productSchema)}
  </script>
</Helmet>

            <section className="vir-breadcrumb-hero">
                <div className="vir-breadcrumb-container">
                    <div className="vir-breadcrumb-content">
                        {/* <span className="vir-breadcrumb-label">
        VIRENDRA CABS
      </span> */}

                        <h1>{cardData.keyword}</h1>
                    </div>
                </div>

                <div className="vir-breadcrumb-bottom-line" />
            </section>

















            <section>
                <div className="container-fluid p-0" >
                    <div className="row container-fluid px-md-2">
                        <div className="col-12 col-md-7 bg-foootr">
                            <img src='/images/keyword/126.jpg' alt='img' className='img-fluid' />
                            <h3 className="py-1"
                                style={{
                                    color: '#183765', // Red color for the title 
                                    textShadow: '5px 5px 10px rgba(255, 255, 255, 0.7)', // Light shadow effect
                                    fontWeight: 'bold'
                                }}


                            >Virendra Cabs: {cardData.keyword} </h3><p className='fw-bold '>{cardData.headingDescription}</p>

                            <div className="topPlaces">

                                <p className="sectionLead">Top Places to visit from {cardData.keyword} </p>
                                {cardData.topPlaces.map((place, index) => (
                                    <article key={index} className="placeCard borderr" tabIndex="0">
                                        <span className="placeBadge">{String(index + 1).padStart(2, "0")}</span>

                                        <div className="placeBody">
                                            <h4 className="placeTitle">{place.title}</h4>
                                            <p className="placeDesc">{place.description}</p>

                                        </div>

                                        <span className="placeArrow" aria-hidden>›</span>
                                    </article>
                                ))}
                            </div>





                            <div className="services-section">
                                {cardData.services.map((service, index) => (
                                    <div className="service-card" key={index}>
                                        <div className="service-content">
                                            <h4>{service.name}</h4>
                                            <span className="line"></span>
                                            <p>{service.description}</p>
                                        </div>

                                        <div className="service-icon">
                                            <i className="fas fa-arrow-right"></i>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="keyword-grid">
                                {cardData.tableData.flat().map((keyword, index) => (
                                    <div key={index} className="keyword-item">
                                        <span className="keyword-bullet">-</span>
                                        {keyword}
                                    </div>
                                ))}
                            </div>



                            <div id="why-choose-section" className="why-choose-section">

                                <h2 className="section-title text-dark">
                                    Why Choose <span>Virendra Cabs</span>
                                </h2>

                                <div className="bento-grid">
                                    {cardData.whychoose.map((item, index) => (
                                        <div className="bento-card" key={index}>

                                            <div className="bento-number">
                                                {String(index + 1).padStart(2, "0")}
                                            </div>

                                            <h4>{item.WhyChooseheading}</h4>

                                            <p>{item.WhyChoosedescription}</p>

                                        </div>
                                    ))}
                                </div>

                            </div>



                            <div className="row twm-faq-section-1 m-b30">
                                <div className="col-md-12 wow fadeInDown" data-wow-delay="0.2">
                                    <div className="twm-faq-info-wrap">

                                        <div className="section-head left">
                                            <h2 className="twm-large-title site-text-dark">
                                                FAQs {cardData.keyword} For <span>Virendra Cabs</span>
                                            </h2>
                                        </div>

                                        <div className="twm-faq-info">
                                            <div className="accordion twm-acdn" id="sf-faq-accordion">
                                                <FaqSection
                                                    title=""
                                                    subtitle=""
                                                    items={faqData}
                                                />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <TestimonialSectionKeyword
                                testimonials={testimonials}
                            />


                            <ContactShowcase keyword={cardData.keyword} />
                        </div>

                        <div className='col-12 col-md-4' >
                            <div className="routeList">
                                {Images.map((e, i) => {
                                    const isExternal = typeof e.link === "string" && /^https?:\/\//i.test(e.link);
                                    const href = isExternal ? e.link : `/${String(e.link || "").replace(/^\/+/, "")}`;

                                    return (
                                        <a
                                            key={e.link || i}
                                            href={href}
                                            className="routeItem"
                                            aria-label={e.text}
                                            {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                        >
                                            <div className="routeThumb">
                                                <img src={e.place} alt="" loading="lazy" />
                                            </div>

                                            <div className="routeMeta">
                                                <h6 className="routeTitle">{e.text}</h6>
                                                <span className="routeUnderline" />
                                            </div>

                                            <span className="routeArrow" aria-hidden>›</span>
                                        </a>
                                    );
                                })}
                            </div>




                            <div>
                                <FleetHighway />
                            </div>
                            <div className="pc-contact">
                                <h4 className="pc-title">Contact Information</h4>

                                <div className="pc-grid">
                                    {/* Phones */}
                                    <section className="pc-tile">
                                        <header className="pc-tile-head">
                                            <i className="fas fa-phone-alt"></i>
                                            <span>Phone Numbers</span>
                                        </header>

                                        <div className="pc-list">
                                            <a href="tel:+919022549022" className="pc-call">+91 9022549022 </a>
                                        </div>


                                        <div className="pc-cta">
                                            <a
                                                href="https://wa.me/919022549022
"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="pc-whats"
                                            >
                                                <i className="bi bi-whatsapp"></i> WhatsApp
                                            </a>
                                            <a href="tel:+919022549022" className="pc-primary">
                                                Call Now
                                            </a>
                                        </div>
                                    </section>

                                    {/* Email */}
                                    <section className="pc-tile">
                                        <header className="pc-tile-head">
                                            <i className="fa-solid fa-envelope"></i>
                                            <span>Email</span>
                                        </header>

                                        <a href="mailto:booking@virendracabs.com" className="pc-email">
                                            booking@virendracabs.com
                                        </a>
                                    </section>

                                    {/* Address */}
                                    <section className="pc-tile">
                                        <header className="pc-tile-head">
                                            <i className="fa-solid fa-location-dot"></i>
                                            <span>Address</span>
                                        </header>

                                        <address className="pc-address">
                                            <strong>Virendra Cabs</strong><br />

                                            Office No.5, 3rd Floor Kahitij Apartment, Kaspate Wasti, Wakad Pune, Maharashtra- 411057




                                        </address>
                                    </section>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default Cabbookinginpune ;