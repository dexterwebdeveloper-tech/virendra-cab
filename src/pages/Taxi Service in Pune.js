import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Taxiserviceinpune() {



const cardData = {
    keyword: "Taxi Service in Pune",
    headingDescription: "Taxi Service in Pune provides convenient transportation for local city travel, airport transfers, business appointments, family journeys, and outstation trips. Virendra Cab offers private taxi solutions with sedan and SUV options for passengers who need comfortable point-to-point transportation across Pune and beyond. Whether the requirement is a short local ride, an airport pickup, a one-way intercity drop, or a round-trip journey, travellers can arrange a suitable cab according to their schedule, passenger count, luggage, and destination. Pune taxi services commonly include local, airport, one-way, round-trip, and outstation travel options. [TejasFleets Car Rental](https://www.tejasfleets.com/?utm_source=chatgpt.com)",
    topPlaces: [
        {
            title: "Pune Airport",
            description: "Pune Airport is an important pickup and drop destination for passengers travelling for business, holidays, family visits, and domestic flights."
        },
        {
            title: "Hinjewadi",
            description: "Taxi service to Hinjewadi is useful for IT professionals, corporate visitors, office commuters, and travellers staying around the major technology parks."
        },
        {
            title: "Koregaon Park",
            description: "Travellers can arrange a private taxi to Koregaon Park for hotels, restaurants, business meetings, residential visits, and city activities."
        },
        {
            title: "Kharadi",
            description: "Kharadi is a major business and residential area where convenient cab transportation can support office travel, airport transfers, and everyday journeys."
        },
        {
            title: "Hadapsar",
            description: "A private taxi makes travel to Hadapsar convenient for business appointments, residential destinations, shopping areas, and connections toward other parts of Pune."
        },
        {
            title: "Baner",
            description: "Baner can be reached comfortably by cab for corporate meetings, hotel stays, restaurants, residential travel, and daily transportation requirements."
        },
        {
            title: "Kothrud",
            description: "Taxi service in Kothrud provides convenient connectivity for residents, students, families, and professionals travelling within Pune or toward outstation destinations."
        },
        {
            title: "Shivajinagar",
            description: "Shivajinagar is a useful city travel destination for railway connections, offices, educational institutions, shopping, and onward transportation."
        },
        {
            title: "Pimpri Chinchwad",
            description: "Passengers travelling toward Pimpri Chinchwad can use private cab service for residential, industrial, corporate, airport, and intercity transportation."
        },
        {
            title: "Viman Nagar",
            description: "Viman Nagar offers convenient access to Pune Airport, hotels, commercial areas, and residential destinations through planned local taxi transportation."
        }
    ],
    services: [
        {
            name: "Taxi Service In Pune",
            description: "Virendra Cab provides taxi service across Pune for local transportation, airport travel, business appointments, family journeys, and other point-to-point requirements."
        },
        {
            name: "Taxi Service In Pune City",
            description: "Pune city taxi service is suitable for daily travel, shopping, meetings, hotel transfers, railway station connections, and convenient movement between different neighbourhoods."
        },
        {
            name: "Best Taxi Service In Pune",
            description: "Travellers comparing taxi providers can consider Virendra Cab for private transportation, multiple vehicle options, convenient booking assistance, and local as well as outstation travel."
        },
        {
            name: "Affordable Taxi Service In Pune",
            description: "Passengers looking for economical transportation can choose a suitable vehicle category according to their passenger count, luggage requirements, journey type, and travel budget."
        },
        {
            name: "Reliable Taxi Service In Pune",
            description: "A reliable taxi service helps passengers coordinate convenient pickups, planned destinations, suitable vehicles, and comfortable travel for local and intercity journeys."
        },
        {
            name: "Taxi Booking In Pune",
            description: "Taxi booking in Pune can be arranged by sharing the pickup point, destination, travel date, preferred timing, passenger count, and vehicle requirements."
        },
        {
            name: "Online Taxi Booking Pune",
            description: "Online taxi booking provides a convenient way to submit travel details and request a suitable cab for local, airport, or outstation transportation from Pune."
        },
        {
            name: "Taxi Near Me In Pune",
            description: "Passengers searching for a taxi near their Pune location can arrange a suitable pickup according to their current area, destination, travel timing, and vehicle preference."
        },
        {
            name: "Cab Service In Pune",
            description: "Virendra Cab offers private cab transportation for city rides, airport transfers, business travel, family requirements, and outstation journeys from Pune."
        },
        {
            name: "Pune Cab Booking Service",
            description: "Pune cab booking service allows travellers to organize transportation in advance with a vehicle selected according to their route, passenger group, luggage, and schedule."
        },
        {
            name: "24/7 Taxi Service In Pune",
            description: "Round-the-clock taxi support is useful for early airport departures, late-night arrivals, emergency travel, and other journeys that fall outside conventional daytime hours."
        },
        {
            name: "Local Taxi Service Pune",
            description: "Local taxi service is suitable for point-to-point travel within Pune, including shopping trips, office visits, appointments, railway transfers, and family errands."
        },
        {
            name: "Outstation Taxi Service Pune",
            description: "Outstation taxi service from Pune provides private transportation for travellers heading toward cities, pilgrimage destinations, hill stations, and other locations outside the city."
        },
        {
            name: "One-Way Taxi From Pune",
            description: "One-way taxi service is convenient for passengers travelling from Pune to another city who do not require the same vehicle for their return journey."
        },
        {
            name: "Round-Trip Taxi From Pune",
            description: "Round-trip taxi service is useful for travellers planning an onward and return journey, with the cab arrangement coordinated around their overall travel schedule."
        },
        {
            name: "Airport Taxi Service Pune",
            description: "Airport taxi service provides direct transportation to or from Pune Airport, helping passengers coordinate their cab around scheduled flight timings and luggage requirements."
        },
        {
            name: "Pune Airport Pickup Taxi",
            description: "Pune Airport pickup taxi service helps arriving passengers travel conveniently from the airport to their home, hotel, office, or onward destination."
        },
        {
            name: "Pune Airport Drop Taxi",
            description: "Airport drop taxi service provides direct transportation from a preferred Pune pickup location to the airport, making early or scheduled flight travel easier to organize."
        },
        {
            name: "AC Taxi Service In Pune",
            description: "AC taxi service provides a more comfortable travel environment for passengers travelling across Pune, particularly during longer city journeys and outstation trips."
        },
        {
            name: "Private Taxi Service Pune",
            description: "A private taxi gives passengers an exclusive vehicle for their journey, providing greater privacy and flexibility compared with shared transportation."
        },
        {
            name: "Sedan Taxi Service Pune",
            description: "Sedan taxi service is a practical choice for couples, small families, and business travellers seeking comfortable seating and suitable luggage capacity."
        },
        {
            name: "SUV Taxi Service Pune",
            description: "SUV taxi service offers additional passenger and luggage space, making it suitable for families and groups travelling within Pune or on longer outstation routes."
        },
        {
            name: "Corporate Taxi Service Pune",
            description: "Corporate taxi service supports business travellers and companies requiring planned transportation for office visits, meetings, airport transfers, and intercity assignments."
        },
        {
            name: "Family Taxi Service Pune",
            description: "Family taxi service provides a convenient private travel option for parents, children, and groups who require comfortable seating, luggage space, and direct transportation."
        },
        {
            name: "Taxi Service In Pune With Driver",
            description: "Taxi service with a professional driver allows passengers to travel without managing the vehicle themselves, making local rides, airport transfers, and outstation journeys more convenient."
        },
        {
            name: "Pune Taxi Contact Number",
            description: "Passengers can use the taxi contact support to enquire about vehicle availability, booking requirements, airport transfers, outstation routes, and other travel-related details."
        }
    ],
    tableData: [
        ["Taxi Service In Pune"],
        ["Taxi Service In Pune City"],
        ["Best Taxi Service In Pune"],
        ["Affordable Taxi Service In Pune"],
        ["Reliable Taxi Service In Pune"],
        ["Taxi Booking In Pune"],
        ["Online Taxi Booking Pune"],
        ["Taxi Near Me In Pune"],
        ["Cab Service In Pune"],
        ["Pune Cab Booking Service"],
        ["24/7 Taxi Service In Pune"],
        ["Local Taxi Service Pune"],
        ["Outstation Taxi Service Pune"],
        ["One-Way Taxi From Pune"],
        ["Round-Trip Taxi From Pune"],
        ["Airport Taxi Service Pune"],
        ["Pune Airport Pickup Taxi"],
        ["Pune Airport Drop Taxi"],
        ["AC Taxi Service In Pune"],
        ["Private Taxi Service Pune"],
        ["Sedan Taxi Service Pune"],
        ["SUV Taxi Service Pune"],
        ["Corporate Taxi Service Pune"],
        ["Family Taxi Service Pune"],
        ["Taxi Service In Pune With Driver"],
        ["Pune Taxi Contact Number"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Citywide Taxi Convenience",
            WhyChoosedescription: "Virendra Cab provides convenient transportation for passengers travelling across Pune, whether the requirement involves a short city ride, business appointment, family visit, or planned transfer."
        },
        {
            WhyChooseheading: "Local And Outstation Options",
            WhyChoosedescription: "Passengers can choose between local Pune transportation and outstation taxi arrangements depending on whether their destination is within the city or outside Pune."
        },
        {
            WhyChooseheading: "Airport Travel Support",
            WhyChoosedescription: "Dedicated airport pickup and drop options make it easier for passengers to coordinate transportation around flight schedules, luggage, and preferred pickup locations."
        },
        {
            WhyChooseheading: "Flexible One-Way Travel",
            WhyChoosedescription: "One-way taxi service is useful when travellers need a direct drop to another city without requiring the same cab for their return journey."
        },
        {
            WhyChooseheading: "Comfortable Vehicle Choices",
            WhyChoosedescription: "Sedan and SUV options provide flexibility for different passenger groups, luggage requirements, comfort preferences, and types of local or outstation travel."
        },
        {
            WhyChooseheading: "Private Transportation",
            WhyChoosedescription: "A private taxi provides an exclusive vehicle for the booked passengers, allowing them to travel directly between their chosen pickup and destination points."
        },
        {
            WhyChooseheading: "Business And Family Travel",
            WhyChoosedescription: "Corporate professionals, families, couples, and individual travellers can select suitable cab arrangements based on their specific travel schedule and transportation needs."
        },
        {
            WhyChooseheading: "Convenient Booking Assistance",
            WhyChoosedescription: "Passengers can share their pickup point, destination, date, timing, and vehicle preference in advance to make the taxi booking process simpler and more organized."
        }
    ]
};


const faqData = [
    {
        question: "What can I use a Taxi Service in Pune for?",
        answer: "A Taxi Service in Pune can be booked for daily city travel, airport transfers, railway station pickups, outstation journeys, family trips, corporate transportation, local sightseeing, and one-way travel. Your booking can be arranged according to the destination, passenger count, and preferred travel time."
    },
    {
        question: "Can I book a taxi for travel within different areas of Pune?",
        answer: "Yes, taxi bookings can be planned between different parts of Pune, including Kothrud, Baner, Wakad, Hinjewadi, Kharadi, Hadapsar, Viman Nagar, Aundh, Pimpri-Chinchwad, and other surrounding areas based on your pickup and drop requirements."
    },
    {
        question: "Does the Taxi Service in Pune provide airport transfers?",
        answer: "Airport transportation can be arranged for passengers travelling to or from Pune Airport. Sharing your flight schedule and pickup location helps in coordinating the journey around your departure or arrival time."
    },
    {
        question: "Can I hire a taxi from Pune for outstation travel?",
        answer: "Outstation taxi bookings are suitable for routes from Pune to destinations such as Mumbai, Nashik, Shirdi, Lonavala, Mahabaleshwar, Goa, Kolhapur, Satara, Aurangabad, and other cities. One-way and return journey requirements can both be discussed."
    },
    {
        question: "Which vehicles can I choose for a Taxi Service in Pune?",
        answer: "Vehicle selection generally depends on the number of passengers, luggage, route, and type of trip. Sedan cars can work well for smaller groups, while Ertiga, Innova, and Innova Crysta can be considered for families or groups requiring more space."
    },
    {
        question: "Is a Taxi Service in Pune suitable for family sightseeing?",
        answer: "Families can use the service for planned Pune sightseeing or nearby day trips. Destinations such as Shaniwar Wada, Aga Khan Palace, Sinhagad Fort, Mulshi, and Lonavala can be included according to the preferred itinerary and available travel time."
    },
    {
        question: "Can I book a one-way taxi from Pune to another city?",
        answer: "One-way taxi arrangements can be made when you need transportation from Pune to a destination without requiring the same vehicle for a return journey. The pickup point, destination, date, and departure time should be shared while booking."
    },
    {
        question: "Is the Taxi Service in Pune useful for business travel?",
        answer: "Business travellers can arrange taxis for office visits, client meetings, airport transfers, corporate events, and intercity business journeys. The trip can be scheduled around your professional commitments and preferred pickup locations."
    },
    {
        question: "Can I book a taxi for early morning or late-night travel in Pune?",
        answer: "Travel at early or late hours can be requested depending on the route and vehicle availability. Providing the travel details in advance is helpful when your journey involves an early flight, late arrival, or time-sensitive appointment."
    },
    {
        question: "How do I book a Taxi Service in Pune with Virendra Cab?",
        answer: "To arrange a taxi, provide your pickup location, destination, travel date, preferred departure time, number of passengers, luggage details, and vehicle preference. These details help Virendra Cab understand your requirements and plan a suitable vehicle for the journey."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Atharva Kulkarni",
        feedback: "My Pune taxi booking was for a combination of local office travel and an airport drop. The booking communication was clear, and the vehicle matched the requirements I had shared for the trip.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Mrunal Pawar",
        feedback: "For our family outing from Pune to Mulshi, arranging a cab made the day much more convenient. There was enough space for our bags, and we could follow our planned sightseeing schedule comfortably.",
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
  "name": "Taxi Service in Pune",
  "image": "https://www.virendracabs.com/assets/images/taxi-service-in-pune.webp",
  "description": "Taxi Service in Pune from Virendra Cab is designed for local city travel, airport transfers, business transportation, railway station pickups, one-way journeys, round trips and outstation travel. Customers searching for Taxi Service in Pune, Taxi Service in Pune City, Best Taxi Service in Pune or Affordable Taxi Service in Pune can choose a suitable cab according to their destination, passenger count, luggage and travel requirements. Taxi Booking in Pune can be arranged for homes, offices, hotels, commercial areas, residential locations and other convenient pickup points across the city. Online Taxi Booking Pune services make it easier to plan local and intercity journeys in advance by sharing the pickup location, destination, travel date and preferred vehicle category. Customers looking for Taxi Near Me in Pune can enquire about cab availability for their required location and travel schedule. Virendra Cab also provides Cab Service in Pune for passengers who prefer private transportation rather than shared travel. Local Taxi Service Pune can be used for daily commuting, shopping, meetings, appointments, railway station transfers, hotel travel and city transportation. The service also supports Outstation Taxi Service Pune for passengers travelling to Mumbai, Shirdi, Mahabaleshwar, Lonavala, Nashik, Goa and other intercity destinations. One-Way Taxi from Pune is suitable for travellers who need a direct drop without booking a return journey, while round-trip options can be arranged for customers who require transportation back to Pune. Vehicle choices such as Sedan, Ertiga, SUV, Innova and Innova Crysta can be considered according to group size, luggage and comfort preferences. Airport taxi services can also be arranged for Pune Airport transfers and longer airport journeys such as Pune to Mumbai Airport. Corporate travellers can use private taxis for office meetings, employee transportation and business visits, while families can select spacious vehicles for sightseeing, functions, pilgrimages and outstation trips. Customers searching for a reliable taxi service can discuss pickup timing, destination, vehicle availability and current fare before confirming their booking. The final fare may vary according to vehicle type, trip distance, travel date, pickup and drop location, trip category and applicable toll, parking or other route-related charges. Virendra Cab provides flexible local, airport, one-way and outstation transportation for passengers looking for a dependable Taxi Service in Pune.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.virendracabs.com/taxi-service-in-pune"
  }
};





    return (
        <div>

<Helmet>
  <title>
    Taxi Service in Pune | Best Taxi Service in Pune | +91 9022549022
  </title>

  <meta
    name="description"
    content="Book Taxi Service in Pune for local, airport, one-way, round-trip and outstation travel. Choose a suitable cab and contact Virendra Cab for booking and fare details."
  />

  <meta
    name="keywords"
    content="Taxi service in Pune, Taxi service in Pune city, Best taxi service in Pune, Affordable taxi service in Pune, Reliable taxi service in Pune, Taxi booking in Pune, Online taxi booking Pune, Taxi near me in Pune, Cab service in Pune, Pune cab booking service, 24/7 taxi service in Pune, Local taxi service Pune, Outstation taxi service Pune, One-way taxi from Pune, Taxi service Pune, Taxi cab service Pune, Pune taxi service, Pune taxi booking, Pune taxi booking online, Pune cab service, Pune cab booking, Best cab service in Pune, Affordable cab service in Pune, Reliable cab service Pune, Taxi near me Pune, Cab near me Pune, Online cab booking Pune, Online taxi booking in Pune, Local cab service Pune, Local taxi Pune, Pune local taxi booking, Pune airport taxi service, Pune airport cab service, Pune airport taxi booking, Pune airport cab booking, Pune railway station taxi, Pune railway station cab, Pune railway station cab booking, Pune outstation cab service, Pune outstation taxi booking, Outstation cab from Pune, Outstation taxi from Pune, One way cab Pune, One way taxi Pune, One way taxi service Pune, One way cab service Pune, Round trip taxi Pune, Round trip cab Pune, Round trip taxi service Pune, Pune private taxi, Pune private cab, Pune car rental with driver, Pune taxi for local travel, Pune taxi for outstation travel, Pune intercity taxi, Pune intercity cab, Pune corporate taxi service, Pune business cab service, Pune family taxi service, Pune sightseeing taxi, Pune full day cab, Pune airport transfer cab, Pune airport transfer taxi, Pune to Mumbai taxi, Pune to Mumbai cab, Pune to Shirdi taxi, Pune to Shirdi cab, Pune to Mahabaleshwar taxi, Pune to Mahabaleshwar cab, Pune to Lonavala taxi, Pune to Lonavala cab, Pune to Nashik taxi, Pune to Nashik cab, Pune to Goa taxi, Pune to Goa cab, Sedan taxi Pune, Ertiga taxi Pune, SUV taxi Pune, Innova taxi Pune, Innova Crysta taxi Pune, Affordable taxi Pune, Cheapest taxi Pune, Best cab booking Pune, Reliable taxi booking Pune"
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
                            <img src='/images/keyword/123.jpg' alt='img' className='img-fluid' />
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

export default Taxiserviceinpune ;