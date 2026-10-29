import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Punerailwaystationcab() {



const cardData = {
    keyword: "Pune Railway Station Cab Service",
    headingDescription: "Pune Railway Station Cab Service provides convenient transportation for passengers arriving at or departing from Pune Railway Station, with flexible options for local transfers, hotel drops, airport travel and outstation journeys. Virendra Cab offers sedan and SUV options for individuals, families, business travellers and groups who need a reliable pickup or drop from Pune Junction. Whether you require an immediate station transfer, a pre-booked taxi, an affordable local cab or an outstation vehicle for a longer journey, the service can be arranged according to your travel schedule and destination. Advance booking and multiple vehicle choices make railway station travel easier to organize.",
    topPlaces: [
        {
            title: "Pune Airport",
            description: "Pune Airport is a convenient transfer destination for railway passengers who need a direct cab connection between Pune Railway Station and their scheduled flight."
        },
        {
            title: "Shivajinagar",
            description: "Shivajinagar is close to Pune Railway Station and is a practical destination for passengers travelling to offices, hotels, residential areas and local transport connections."
        },
        {
            title: "Hinjewadi",
            description: "Passengers arriving by train can arrange a direct cab from Pune Railway Station to Hinjewadi for business visits, office travel and technology park appointments."
        },
        {
            title: "Lonavala",
            description: "Lonavala is a popular outstation destination where passengers can continue their journey from Pune Railway Station using a pre-booked private cab."
        },
        {
            title: "Mahabaleshwar",
            description: "Travellers arriving at Pune Junction can choose a private outstation cab for a comfortable onward journey toward Mahabaleshwar."
        },
        {
            title: "Mumbai",
            description: "A station-based outstation cab can provide direct transportation from Pune Railway Station toward Mumbai for business, family and personal travel."
        },
        {
            title: "Shirdi",
            description: "Passengers planning a pilgrimage to Shirdi can arrange an outstation cab from Pune Railway Station for convenient onward road travel."
        },
        {
            title: "Nashik",
            description: "Nashik can be reached by a pre-booked outstation cab from Pune Railway Station, making it suitable for business, family and pilgrimage journeys."
        }
    ],
    services: [
        {
            name: "Pune Railway Station Cab",
            description: "Virendra Cab provides convenient cab service from Pune Railway Station for passengers requiring pickup, drop-off, hotel transfers, airport connections or onward travel to another destination."
        },
        {
            name: "Cab Near Pune Railway Station",
            description: "Cab service near Pune Railway Station helps arriving passengers arrange convenient local transportation without needing to search for a vehicle after reaching the station."
        },
        {
            name: "Taxi At Pune Station",
            description: "Taxi service at Pune Station provides private transportation for passengers travelling to nearby localities, hotels, offices, residential areas and other destinations."
        },
        {
            name: "Railway Pickup Drop Pune",
            description: "Railway pickup and drop service in Pune allows passengers to arrange transportation to or from Pune Railway Station according to their train arrival and departure schedules."
        },
        {
            name: "Cab From Pune Railway Station",
            description: "A cab from Pune Railway Station provides direct point-to-point transportation for passengers heading toward hotels, offices, homes, airports or outstation destinations."
        },
        {
            name: "Pune Station Taxi Service",
            description: "Pune Station Taxi Service offers convenient private travel for railway passengers who need local transfers, business transportation, airport connectivity or longer journeys."
        },
        {
            name: "Affordable Station Cab Pune",
            description: "Passengers looking for an affordable station cab in Pune can compare suitable vehicle categories according to their destination, passenger count and luggage requirements."
        },
        {
            name: "24 Hour Station Cab Pune",
            description: "24-hour station cab service in Pune supports passengers arriving or departing at different times, including early morning, late-night and other train schedules."
        },
        {
            name: "Local Cab Near Station Pune",
            description: "Local cab service near Pune Railway Station provides convenient transportation for short-distance journeys to nearby hotels, offices, residential areas and city destinations."
        },
        {
            name: "Station Transfer Taxi Pune",
            description: "Station transfer taxi service in Pune helps passengers travel directly between Pune Railway Station and their desired local destination with convenient pickup arrangements."
        },
        {
            name: "Best Cab Pune Railway Station",
            description: "Passengers comparing the best cab options at Pune Railway Station can consider vehicle comfort, availability, destination requirements and booking convenience when selecting a service."
        },
        {
            name: "Budget Station Taxi Pune",
            description: "Budget station taxi service in Pune provides practical transportation for passengers seeking a suitable vehicle for local transfers while keeping their travel requirements in consideration."
        },
        {
            name: "Instant Cab Railway Station Pune",
            description: "Instant cab service at Pune Railway Station is useful for passengers who need quick transportation after arriving by train or require a timely ride to the station."
        },
        {
            name: "Sedan Cab Station Pune",
            description: "A sedan cab from Pune Railway Station is a practical choice for individuals and smaller families looking for comfortable seating and suitable luggage space."
        },
        {
            name: "SUV Cab Pune Station",
            description: "SUV cab service from Pune Station provides additional seating and luggage capacity, making it suitable for families and groups travelling with more belongings."
        },
        {
            name: "Pune Railway Station Cab For Outstation",
            description: "Pune Railway Station Cab for Outstation provides direct transportation for passengers who arrive by train and want to continue their journey toward another city or tourist destination."
        },
        {
            name: "Outstation Cab From Pune Railway Station",
            description: "Outstation cab from Pune Railway Station allows railway passengers to continue directly toward destinations such as Mumbai, Lonavala, Mahabaleshwar, Shirdi or Nashik."
        },
        {
            name: "Pune Station Taxi Service For Outstation",
            description: "Pune Station Taxi Service for Outstation is designed for passengers who need private road transportation after arriving at Pune Junction and want to travel onward to another city."
        },
        {
            name: "Railway Station Outstation Cab Pune",
            description: "Railway Station Outstation Cab Pune provides convenient onward travel for passengers who prefer a dedicated vehicle after completing their train journey."
        },
        {
            name: "Pune Junction Outstation Cab Booking",
            description: "Pune Junction Outstation Cab Booking allows travellers to arrange their onward vehicle in advance, making it easier to coordinate pickup around the scheduled train arrival."
        },
        {
            name: "Pune Railway Station Taxi Booking",
            description: "Pune Railway Station Taxi Booking helps passengers reserve a vehicle for station pickup, station drop, local transfers or planned outstation travel according to their itinerary."
        }
    ],
    tableData: [
        ["Pune Railway Station Cab"],
        ["Cab Near Pune Railway Station"],
        ["Taxi At Pune Station"],
        ["Railway Pickup Drop Pune"],
        ["Cab From Pune Railway Station"],
        ["Pune Station Taxi Service"],
        ["Affordable Station Cab Pune"],
        ["24 Hour Station Cab Pune"],
        ["Local Cab Near Station Pune"],
        ["Station Transfer Taxi Pune"],
        ["Best Cab Pune Railway Station"],
        ["Budget Station Taxi Pune"],
        ["Instant Cab Railway Station Pune"],
        ["Sedan Cab Station Pune"],
        ["SUV Cab Pune Station"],
        ["Pune Railway Station Cab For Outstation"],
        ["Outstation Cab From Pune Railway Station"],
        ["Pune Station Taxi Service For Outstation"],
        ["Railway Station Outstation Cab Pune"],
        ["Pune Junction Outstation Cab Booking"],
        ["Pune Railway Station Taxi Booking"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Convenient Railway Pickup",
            WhyChoosedescription: "Virendra Cab helps passengers arrange private pickup from Pune Railway Station according to their train arrival, making the transition from rail travel to road transportation more convenient."
        },
        {
            WhyChooseheading: "Local And Outstation Travel",
            WhyChoosedescription: "Passengers can choose cab services for nearby city destinations as well as longer journeys to tourist, business and pilgrimage locations outside Pune."
        },
        {
            WhyChooseheading: "Flexible Vehicle Choices",
            WhyChoosedescription: "Sedan and SUV options provide practical choices for individuals, couples, families and groups depending on passenger count, luggage requirements and desired travel comfort."
        },
        {
            WhyChooseheading: "Advance Booking Support",
            WhyChoosedescription: "Pre-booking allows passengers to share their train timing, pickup requirements, destination and preferred vehicle category so the journey can be planned more efficiently."
        },
        {
            WhyChooseheading: "Airport Connectivity",
            WhyChoosedescription: "Passengers travelling onward to Pune Airport can arrange a direct station-to-airport cab, helping them coordinate road transportation with their flight schedule."
        },
        {
            WhyChooseheading: "24-Hour Travel Convenience",
            WhyChoosedescription: "Station cab requirements can arise at different hours, so flexible service options are useful for passengers arriving early in the morning, late at night or during other train schedules."
        },
        {
            WhyChooseheading: "Family And Group Friendly",
            WhyChoosedescription: "Spacious vehicle options make railway station transfers more practical for families and groups carrying luggage after a train journey or preparing for an outstation trip."
        },
        {
            WhyChooseheading: "Direct Destination Transfers",
            WhyChoosedescription: "Private station cabs provide point-to-point transportation, allowing passengers to travel directly from Pune Junction to their home, hotel, office, airport or outstation destination."
        }
    ]
};

const faqData = [
    {
        question: "Can I book a Corporate Cab Service in Pune with Virendra Cab?",
        answer: "Virendra Cab can arrange corporate cab transportation in Pune according to office requirements, employee travel schedules, pickup locations, passenger count, and preferred vehicle categories. The service can be planned for meetings, office visits, client appointments, and regular business travel."
    },
    {
        question: "What types of corporate travel can be handled in Pune?",
        answer: "Corporate cab requirements can include employee transportation, business meetings, client visits, airport transfers, office-to-office travel, conferences, site visits, and other professional journeys within Pune or to nearby destinations."
    },
    {
        question: "Can companies arrange airport transfers through a corporate cab service?",
        answer: "Businesses can enquire about cab arrangements for employee and client airport transfers in Pune. Pickup or drop locations, flight schedules, passenger details, luggage requirements, and preferred vehicle categories can be shared while planning the journey."
    },
    {
        question: "Is corporate cab service available for regular employee transportation?",
        answer: "Companies requiring recurring employee transportation can discuss their regular routes, working hours, pickup points, drop locations, and passenger requirements. The travel plan can be structured according to the organization's transportation needs."
    },
    {
        question: "Can I book corporate cabs for client meetings in Pune?",
        answer: "Private cab arrangements can be considered for clients, business partners, and visiting professionals attending meetings in Pune. The pickup location, meeting venue, timing, passenger count, and vehicle preference can be discussed before the journey."
    },
    {
        question: "Which Pune areas can be covered for corporate cab bookings?",
        answer: "Corporate cab requirements can be discussed for areas such as Hinjewadi, Kharadi, Viman Nagar, Baner, Wakad, Kothrud, Hadapsar, Magarpatta, Pimpri-Chinchwad, and other suitable business or residential locations across Pune."
    },
    {
        question: "Can a corporate cab be booked for outstation business travel from Pune?",
        answer: "Businesses can enquire about private cab transportation from Pune to nearby and long-distance business destinations such as Mumbai, Nashik, Aurangabad, Kolhapur, Ahmedabad, Surat, or other locations according to their travel requirements."
    },
    {
        question: "What vehicle options are suitable for corporate travel?",
        answer: "Vehicle selection can depend on the number of executives travelling, luggage requirements, journey duration, and the level of comfort preferred for the trip. Virendra Cab can discuss suitable vehicle categories based on the company's specific requirement."
    },
    {
        question: "Can companies arrange cabs for corporate events and conferences?",
        answer: "Cab arrangements can be planned for conferences, exhibitions, seminars, corporate events, training programs, and business gatherings. Multiple pickup points, event schedules, passenger numbers, and destination details can be discussed while organizing the transportation."
    },
    {
        question: "What details are required to book a Corporate Cab Service Pune?",
        answer: "Companies can provide the pickup and drop locations, travel date, reporting time, number of passengers, employee or client travel details, luggage requirements, vehicle preference, and whether the requirement is one-time or recurring when making a booking enquiry."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Sagar Kulkarni",
        feedback: "Our company needed transportation for employees travelling between different Pune office locations and client meetings. Virendra Cab discussed the routes, timings, passenger requirements, and vehicle preferences before arranging the corporate travel.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Priyanka Bendre",
        feedback: "A visiting client needed airport pickup followed by business meetings in Pune. The cab arrangement was coordinated around the travel schedule and meeting locations, giving us a convenient option for managing the day's corporate transportation.",
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
  "name": "Pune Railway Station Cab Service",
  "image": "https://www.virendracabs.com/assets/images/pune-railway-station-cab-service.webp",
  "description": "Pune Railway Station Cab Service provides convenient private transportation for passengers arriving at or departing from Pune Railway Station. Virendra Cab offers pickup and drop support for travelers searching for Pune Railway Station Cab, Cab Near Pune Railway Station and Taxi at Pune Station. Railway Pickup Drop Pune service can be arranged for passengers who need a comfortable vehicle between the railway station and their home, hotel, office, airport or another destination in Pune. Cab from Pune Railway Station is suitable for individuals, families, business travelers and visitors carrying luggage after a train journey. Pune Station Taxi Service can be booked in advance according to the train arrival or departure schedule, helping passengers coordinate their pickup or drop timing. Travelers looking for an Affordable Station Cab Pune can enquire about suitable vehicle options based on their route and travel requirements. 24 Hour Station Cab Pune can be useful for early-morning arrivals, late-night departures and train journeys scheduled outside regular travel hours. Local Cab Near Pune Railway Station can also be arranged for short-distance city travel, hotel transfers, office visits, shopping and other local destinations. Customers can request sedan or other suitable cab options depending on passenger count and luggage requirements. The service can also be used for Pune Railway Station to Pune Airport transfers, hotel pickups, corporate travel and outstation journeys beginning from the railway station. Current cab charges depend on vehicle type, route, distance, timing and travel requirements, so passengers can contact Virendra Cab for the latest fare details and availability. Advance booking helps coordinate the train schedule, pickup point, destination and preferred vehicle for a smoother railway station transfer.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.virendracabs.com/pune-railway-station-cab-service"
  }
};









    return (
        <div>

<Helmet>
  <title>
    Pune Railway Station Cab Service | Cab Near Pune Railway Station | +91 9022549022
  </title>

  <meta
    name="description"
    content="Book Pune Railway Station Cab Service for railway pickup, drop, local transfers and late-night or early-morning travel. Get reliable station taxi service with Virendra Cab."
  />

  <meta
    name="keywords"
    content="Pune Railway Station Cab Service, Pune Railway Station Cab, Cab Near Pune Railway Station, Taxi at Pune Station, Railway Pickup Drop Pune, Cab from Pune Railway Station, Pune Station Taxi Service, Affordable Station Cab Pune, 24 Hour Station Cab Pune, Local Cab Near Pune Railway Station, Pune Railway Station Taxi, Pune Railway Station Taxi Service, Pune Station Cab Booking, Pune Railway Station Cab Booking, Pune Station Pickup Cab, Pune Station Drop Cab, Pune Railway Station Pickup Taxi, Pune Railway Station Drop Taxi, Pune Railway Station Transfer Cab, Pune Railway Station to Airport Cab, Pune Airport to Railway Station Cab, Pune Railway Station to Hotel Cab, Pune Station Hotel Transfer Taxi, Pune Railway Station Local Cab, Pune Railway Station Outstation Cab, Pune Railway Station Car Rental, Pune Station Private Cab, Pune Station Night Cab, Pune Station Early Morning Cab, Pune Railway Station Cab Hire, Pune Station Taxi Booking"
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
                            <img src='/images/keyword/50.jpg' alt='img' className='img-fluid' />
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

export default Punerailwaystationcab ;