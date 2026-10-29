import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Hinnjewadicabservice() {



const cardData = {
    keyword: "Hinjewadi Cab Service",
    headingDescription: "Virendra Cab provides convenient cab and taxi services in Hinjewadi for daily office travel, airport transfers, local transportation, outstation journeys, and corporate requirements. Customers can choose from sedan, SUV, Ertiga, and Innova Crysta options according to passenger capacity, luggage, and travel needs. With services covering Hinjewadi Phase 1, Phase 2, Phase 3, IT Park areas, Pune Airport, Mumbai, and other outstation destinations, Virendra Cab makes business and personal travel easier to arrange.",
    topPlaces: [
        {
            title: "Hinjewadi Phase 1",
            description: "Hinjewadi Phase 1 is a major technology and business zone with regular commuting requirements. Cab services provide convenient transportation for employees, visitors, meetings, airport transfers, and daily office travel."
        },
        {
            title: "Hinjewadi Phase 2",
            description: "Hinjewadi Phase 2 hosts numerous offices and commercial establishments, creating frequent demand for reliable transportation. Private cabs can be arranged for employees, corporate guests, and personal travel."
        },
        {
            title: "Hinjewadi Phase 3",
            description: "Hinjewadi Phase 3 is an expanding business and technology area where convenient transportation is useful for professionals and visitors. Cab services support office travel, local transfers, and outstation requirements."
        },
        {
            title: "Rajiv Gandhi Infotech Park",
            description: "Rajiv Gandhi Infotech Park attracts employees, corporate visitors, and business travellers throughout the week. A private cab offers direct transportation for office meetings, airport connections, and scheduled corporate travel."
        },
        {
            title: "Wakad",
            description: "Wakad is closely connected with Hinjewadi and is frequently used as a residential and commercial base by professionals. Cab services can support daily commuting, airport transfers, and journeys to destinations outside Pune."
        },
        {
            title: "Pune Airport",
            description: "Pune Airport is an important travel point for Hinjewadi residents, employees, and business visitors. Airport cab services provide direct pickup and drop arrangements according to flight schedules."
        },
        {
            title: "Baner",
            description: "Baner is a prominent residential and business locality with strong connectivity towards Hinjewadi. Cab travel is useful for office commuting, meetings, airport transfers, and planned intercity journeys."
        },
        {
            title: "Balewadi",
            description: "Balewadi is located near the Hinjewadi business corridor and serves residential, commercial, and event-related travel needs. Private cabs offer convenient transportation for local and outstation trips."
        },
        {
            title: "Mumbai",
            description: "Mumbai is a frequent outstation destination from Hinjewadi for corporate meetings, business travel, family visits, and personal work. A private cab allows passengers to travel directly between Hinjewadi and Mumbai."
        },
        {
            title: "Lonavala",
            description: "Lonavala is a popular leisure destination for professionals, families, and groups travelling from the Hinjewadi area. A private cab provides a comfortable option for weekend trips and planned sightseeing."
        }
    ],
    services: [
        {
            name: "Hinjewadi Cab Service",
            description: "Virendra Cab provides Hinjewadi cab service for local travel, office commuting, airport transfers, family requirements, and outstation journeys. Customers can choose a suitable vehicle based on their passenger count and travel plans."
        },
        {
            name: "Taxi Service in Hinjewadi",
            description: "Taxi service in Hinjewadi offers convenient private transportation for professionals, residents, visitors, and corporate travellers. Cabs can be arranged for local destinations as well as longer intercity routes."
        },
        {
            name: "Hinjewadi Cab Booking",
            description: "Hinjewadi cab booking allows customers to arrange a vehicle in advance for office travel, airport pickups, business meetings, family functions, and outstation trips. Advance planning helps coordinate the pickup according to the required schedule."
        },
        {
            name: "Cab Service Near Me Hinjewadi",
            description: "Customers looking for a cab service near them in Hinjewadi can arrange private transportation for local and outstation travel. Virendra Cab supports convenient pickup arrangements across the major Hinjewadi phases and nearby areas."
        },
        {
            name: "Outstation Cab Service in Hinjewadi",
            description: "Outstation cab service in Hinjewadi is suitable for travellers heading to Mumbai, Lonavala, Mahabaleshwar, Nashik, and other destinations. Customers can select one-way or round-trip travel according to their itinerary."
        },
        {
            name: "Hinjewadi to Pune Airport Cab",
            description: "Hinjewadi to Pune Airport cab service provides direct airport transportation for employees, residents, and business visitors. Pickup timing can be coordinated around flight schedules to make airport travel more convenient."
        },
        {
            name: "Affordable Cab Service in Hinjewadi",
            description: "An affordable cab service in Hinjewadi helps travellers select a suitable vehicle while considering their travel requirements and budget. Options are available for everyday commuting, airport transfers, and planned outstation journeys."
        },
        {
            name: "Hinjewadi Taxi Service 24/7",
            description: "Hinjewadi taxi service 24/7 supports passengers who require transportation during early mornings, late nights, shift hours, airport schedules, and urgent travel situations. The service is useful for professionals working across different shifts."
        },
        {
            name: "Corporate Cab Service in Hinjewadi",
            description: "Corporate cab service in Hinjewadi supports employee travel, client pickups, business meetings, office transfers, and scheduled corporate transportation. Companies can arrange suitable vehicles according to passenger requirements and travel schedules."
        },
        {
            name: "Innova Crysta Cab in Hinjewadi",
            description: "An Innova Crysta cab in Hinjewadi is a practical option for families, corporate groups, and travellers seeking spacious seating and luggage capacity. It is suitable for airport transfers, business travel, and longer outstation journeys."
        },
        {
            name: "Sedan Cab in Hinjewadi",
            description: "Sedan cabs in Hinjewadi are suitable for individuals, couples, small families, and business travellers who prefer a comfortable private vehicle. The category works well for local travel, airport transfers, and intercity journeys."
        },
        {
            name: "SUV Cab Service Hinjewadi",
            description: "SUV cab service in Hinjewadi provides a spacious travel option for families and groups carrying additional luggage. SUVs can be arranged for airport trips, corporate travel, sightseeing, and longer outstation routes."
        },
        {
            name: "Ertiga Cab Service Hinjewadi",
            description: "Ertiga cab service in Hinjewadi is suitable for families and medium-sized groups requiring additional seating and luggage space. The vehicle can be used for local transfers, airport travel, and outstation trips."
        },
        {
            name: "Hinjewadi to Mumbai Cab",
            description: "Hinjewadi to Mumbai cab service provides direct transportation for corporate meetings, business visits, family travel, and personal work. Travellers can choose a suitable vehicle based on group size and luggage requirements."
        },
        {
            name: "Hinjewadi Phase 1 Cab Service",
            description: "Hinjewadi Phase 1 cab service supports employees, residents, business visitors, and corporate travellers with convenient local and outstation transportation. Pickup arrangements can be planned according to office and personal schedules."
        },
        {
            name: "Hinjewadi Phase 2 Cab Service",
            description: "Hinjewadi Phase 2 cab service provides private transportation for office commuters, visitors, families, and corporate requirements. Customers can arrange cabs for local destinations, airport transfers, and outstation journeys."
        },
        {
            name: "Hinjewadi Phase 3 Cab Service",
            description: "Hinjewadi Phase 3 cab service is useful for employees and visitors travelling to and from the expanding technology and business zone. Private cabs can be scheduled for office travel, airport transfers, and intercity requirements."
        },
        {
            name: "Office Cab Service in Hinjewadi",
            description: "Office cab service in Hinjewadi helps employees and businesses manage regular transportation between residences, workplaces, hotels, and meeting locations. Suitable vehicle options can be selected according to individual or group requirements."
        },
        {
            name: "IT Park Cab Service Hinjewadi",
            description: "IT Park cab service in Hinjewadi supports transportation for employees, clients, corporate guests, and business visitors travelling to the technology corridor. Cabs can be arranged for office commuting, meetings, airport transfers, and outstation travel."
        }
    ],
    tableData: [
        ["Hinjewadi Cab Service"],
        ["Taxi Service in Hinjewadi"],
        ["Hinjewadi Cab Booking"],
        ["Cab Service Near Me Hinjewadi"],
        ["Outstation Cab Service in Hinjewadi"],
        ["Hinjewadi to Pune Airport Cab"],
        ["Affordable Cab Service in Hinjewadi"],
        ["Hinjewadi Taxi Service 24/7"],
        ["Corporate Cab Service in Hinjewadi"],
        ["Innova Crysta Cab in Hinjewadi"],
        ["Sedan Cab in Hinjewadi"],
        ["SUV Cab Service Hinjewadi"],
        ["Ertiga Cab Service Hinjewadi"],
        ["Hinjewadi to Mumbai Cab"],
        ["Hinjewadi Phase 1 Cab Service"],
        ["Hinjewadi Phase 2 Cab Service"],
        ["Hinjewadi Phase 3 Cab Service"],
        ["Office Cab Service in Hinjewadi"],
        ["IT Park Cab Service Hinjewadi"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Convenient Hinjewadi Pickup",
            WhyChoosedescription: "Virendra Cab supports pickup arrangements across Hinjewadi Phase 1, Phase 2, Phase 3, and nearby business areas. This makes it easier for employees, residents, and visitors to arrange transportation from a convenient location."
        },
        {
            WhyChooseheading: "24/7 Travel Support",
            WhyChoosedescription: "Travel requirements do not always follow regular office hours, especially in a major IT hub. Cab services can support early morning airport transfers, late-night shifts, business travel, and other journeys requiring flexible timings."
        },
        {
            WhyChooseheading: "Corporate Travel Solutions",
            WhyChoosedescription: "Businesses can use Virendra Cab for employee transportation, client pickups, office meetings, hotel transfers, and other professional travel needs. Vehicle options can be matched with the size and nature of each requirement."
        },
        {
            WhyChooseheading: "Multiple Car Categories",
            WhyChoosedescription: "Different passengers have different transportation needs, so Virendra Cab offers sedan, Ertiga, SUV, and Innova Crysta options. Customers can select a vehicle based on group size, luggage, comfort, and trip duration."
        },
        {
            WhyChooseheading: "Airport Transfer Convenience",
            WhyChoosedescription: "Hinjewadi to Pune Airport transfers can be arranged around the passenger's flight schedule. Direct cab travel helps reduce the inconvenience of changing vehicles while carrying luggage for business or personal journeys."
        },
        {
            WhyChooseheading: "Outstation Route Availability",
            WhyChoosedescription: "Travellers from Hinjewadi can arrange cabs for destinations such as Mumbai, Lonavala, Mahabaleshwar, Nashik, and other intercity locations. One-way and return travel requirements can be planned according to the itinerary."
        },
        {
            WhyChooseheading: "Comfortable Office Commutes",
            WhyChoosedescription: "Professionals working in Hinjewadi's technology corridor can use private cab services for daily office travel and scheduled transportation. Dedicated vehicles provide a practical option for employees who value direct and comfortable commuting."
        },
        {
            WhyChooseheading: "Flexible Booking Options",
            WhyChoosedescription: "Virendra Cab accommodates different travel purposes, from local transfers and airport rides to corporate journeys and weekend trips. Customers can organize their cab according to the destination, vehicle category, passenger count, and preferred timing."
        }
    ]
};



const faqData = [
    {
        question: "How can I book a Hinjewadi Cab Service with Virendra Cab?",
        answer: "You can book a Hinjewadi Cab Service by sharing your pickup point, destination, travel date, preferred time, and passenger details. Virendra Cab can arrange suitable travel for office commuting, airport transfers, local trips, family travel, and outstation journeys."
    },
    {
        question: "Does Hinjewadi Cab Service cover different phases of Hinjewadi?",
        answer: "Cab bookings can be planned around Hinjewadi Phase 1, Phase 2, Phase 3, Rajiv Gandhi Infotech Park, nearby residential societies, and surrounding areas. The exact pickup location can be shared during booking for smoother trip planning."
    },
    {
        question: "Can I book a cab from Hinjewadi to Pune Airport?",
        answer: "Airport transfers from Hinjewadi to Pune Airport can be scheduled according to your flight timing. Providing the pickup location and departure details in advance helps plan a suitable vehicle and allows enough time for the airport journey."
    },
    {
        question: "Is Hinjewadi Cab Service available for corporate travel?",
        answer: "Corporate travelers can use cab services for office commuting, client meetings, business appointments, conferences, and airport or railway station transfers. Regular travel requirements can also be planned around office schedules and preferred pickup locations."
    },
    {
        question: "Can I hire a cab from Hinjewadi for outstation travel?",
        answer: "Outstation trips can be arranged from Hinjewadi to destinations such as Mumbai, Lonavala, Mahabaleshwar, Nashik, Shirdi, Satara, Kolhapur, and other cities. One-way or return options can be selected according to the planned journey."
    },
    {
        question: "What type of vehicles can I book through Hinjewadi Cab Service?",
        answer: "The vehicle can be selected according to passenger count, luggage, and journey type. Sedan options can suit individuals or smaller groups, while SUVs and Innova-type vehicles may be considered when additional seating or luggage capacity is required."
    },
    {
        question: "Can families use Hinjewadi Cab Service for local sightseeing?",
        answer: "Families can arrange a private cab for sightseeing around Pune and nearby destinations. A scheduled vehicle can make it easier to visit places such as Sinhagad, Mulshi, Lonavala, or other attractions while traveling together."
    },
    {
        question: "Can I book a one-way cab from Hinjewadi?",
        answer: "One-way cab bookings can be arranged when you only require transportation to your destination. This can be useful for airport travel, relocation, business visits, outstation journeys, or reaching another city without retaining the cab for the return trip."
    },
    {
        question: "Is cab service available in Hinjewadi for early morning travel?",
        answer: "Early-morning travel can be discussed during the booking process, particularly for airport departures, office schedules, railway connections, and long-distance journeys. Sharing the required pickup time in advance helps with trip planning."
    },
    {
        question: "How early should I book a Hinjewadi Cab Service?",
        answer: "Advance booking is useful for airport transfers, corporate events, weekend trips, weddings, and outstation travel. Providing the date, pickup time, destination, and vehicle preference beforehand can make it easier to organize the required cab."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Abhishek Korde",
        feedback: "My office schedule in Hinjewadi often involves early meetings, so having a cab arranged for airport and business travel has been convenient. The booking details were easy to communicate, and the vehicle suited my regular travel needs.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Neha Ranade",
        feedback: "A family trip starting from Hinjewadi needed a comfortable vehicle with enough room for everyone and our luggage. The cab made the journey much easier, especially because we could travel together and follow our planned schedule.",
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
  "name": "Hinjewadi Cab Service",
  "image": "https://www.virendracabs.com/assets/images/hinjewadi-cab-service.webp",
  "description": "Hinjewadi Cab Service offers convenient local, airport and outstation transportation for residents, IT professionals, corporate travellers, families and visitors travelling around Hinjewadi and Pune. Virendra Cab supports customers searching for Hinjewadi Cab Service, Taxi Service in Hinjewadi, Hinjewadi Cab Booking, Cab Service Near Me Hinjewadi and Outstation Cab Service in Hinjewadi with suitable cab options for different travel requirements. Local cab bookings can be arranged for office commuting, business meetings, shopping, railway station transfers, hotel transfers, airport travel and daily transportation needs. Customers travelling between Hinjewadi and Pune can also arrange direct private cabs according to their preferred pickup and drop locations. Hinjewadi to Pune cab service is useful for passengers travelling towards Wakad, Baner, Aundh, Shivajinagar, Kothrud, Deccan, Swargate, Pune Railway Station and other parts of the city. Outstation Cab Service in Hinjewadi can be planned for destinations such as Mumbai, Lonavala, Mahabaleshwar, Nashik, Shirdi, Goa, Kolhapur, Satara, Solapur, Aurangabad and other cities based on the customer's itinerary. One-way, round-trip, hourly and full-day cab options can be considered for local and intercity journeys. Sedan, SUV, Ertiga, Innova and Innova Crysta vehicles can be selected depending on passenger count, luggage and comfort preferences. Customers searching for Cab Service Near Me Hinjewadi can enquire about pickup from residential societies, IT parks, offices, hotels, commercial areas and nearby localities. Advance Hinjewadi Cab Booking can help passengers arrange scheduled transportation for early-morning airport transfers, corporate travel, family outings, railway station drops and planned outstation journeys. Customers looking for Hinjewadi Cab Fare, Taxi Fare in Hinjewadi or Outstation Taxi Charges can contact Virendra Cab for the latest applicable fare, as pricing depends on vehicle type, distance, route, trip duration and booking category. The service is suitable for corporate employees and businesses requiring dependable transportation around Rajiv Gandhi Infotech Park and nearby commercial areas, as well as families and individuals travelling within Pune. Hinjewadi to Pune taxi bookings can be arranged for convenient point-to-point transportation, while reverse and longer-distance routes can also be customized. Virendra Cab provides flexible local and outstation cab solutions for passengers travelling from Hinjewadi and connecting destinations across Pune and beyond.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.virendracabs.com/hinjewadi-cab-service"
  }
};



    return (
        <div>
<Helmet>
  <title>
    Hinjewadi Cab Service | Taxi Service in Hinjewadi | +91 9022549022
  </title>

  <meta
    name="description"
    content="Book Hinjewadi Cab Service for local, airport and outstation travel. Get reliable taxi booking in Hinjewadi for Pune, corporate travel, family trips and intercity journeys."
  />

  <meta
    name="keywords"
    content="Hinjewadi Cab Service, Taxi Service in Hinjewadi, Hinjewadi Cab Booking, Cab Service Near Me Hinjewadi, Outstation Cab Service in Hinjewadi, Hinjewadi to Pune, Hinjewadi to Pune Cab, Hinjewadi to Pune Taxi, Hinjewadi to Pune Cab Service, Hinjewadi to Pune Taxi Service, Hinjewadi Taxi Service, Hinjewadi Taxi Booking, Hinjewadi Cab Booking Online, Cab in Hinjewadi, Cabs in Hinjewadi, Taxi in Hinjewadi, Cab Near Hinjewadi, Taxi Near Hinjewadi, Cab Service Near Hinjewadi, Taxi Service Near Hinjewadi, Best Cab Service in Hinjewadi, Best Taxi Service in Hinjewadi, Affordable Cab Service Hinjewadi, Reliable Taxi Hinjewadi, Local Cab Service Hinjewadi, Local Taxi Service Hinjewadi, Hinjewadi Outstation Cab, Hinjewadi Outstation Taxi, Hinjewadi Outstation Cab Service, Hinjewadi Outstation Taxi Service, Outstation Taxi Hinjewadi, Outstation Car Rental Hinjewadi, Hinjewadi One Way Cab, Hinjewadi Round Trip Cab, Hinjewadi One Way Taxi, Hinjewadi Round Trip Taxi, Hinjewadi Airport Cab, Hinjewadi Airport Taxi, Hinjewadi Airport Transfer, Hinjewadi Airport Cab Service, Hinjewadi Railway Station Cab, Hinjewadi Railway Station Taxi, Hinjewadi Corporate Cab, Hinjewadi Corporate Taxi, Hinjewadi Business Cab, Hinjewadi Office Cab, Hinjewadi Daily Cab Service, Hinjewadi Full Day Cab, Hinjewadi Hourly Cab Rental, Hinjewadi Family Cab, Hinjewadi Tourist Cab, Hinjewadi Sightseeing Cab, Hinjewadi to Pune One Way Cab, Hinjewadi to Pune Round Trip Cab, Hinjewadi to Pune Cab Booking, Hinjewadi to Pune Taxi Booking, Hinjewadi to Mumbai Cab, Hinjewadi to Mumbai Taxi, Hinjewadi to Lonavala Cab, Hinjewadi to Mahabaleshwar Cab, Hinjewadi to Nashik Cab, Hinjewadi to Shirdi Cab, Hinjewadi to Goa Cab, Hinjewadi to Kolhapur Cab, Hinjewadi to Satara Cab, Hinjewadi to Solapur Cab, Hinjewadi to Hyderabad Cab, Hinjewadi to Indore Cab, Hinjewadi Sedan Cab, Hinjewadi SUV Cab, Hinjewadi Ertiga Cab, Hinjewadi Innova Cab, Hinjewadi Innova Crysta Cab, Hinjewadi Cab Fare, Hinjewadi Taxi Fare, Hinjewadi Outstation Fare, Hinjewadi Cab Rental, Hinjewadi Car Rental, Cab Booking Hinjewadi Pune, Taxi Booking Hinjewadi Pune"
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
                            <img src='/images/keyword/111.jpg' alt='img' className='img-fluid' />
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

export default Hinnjewadicabservice ;