import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Auracabserviceipune() {



const cardData = {
    keyword: "Aura Cab Service in Pune",
    headingDescription: "Virendra Cab provides Hyundai Aura cab services in Pune for local transportation, airport transfers, corporate travel, family journeys, sightseeing, round trips, and outstation travel. Hyundai Aura is a practical sedan choice for individuals, couples, families, and business travellers who prefer private transportation with comfortable seating and convenient luggage space. Aura cab bookings can be arranged from different parts of Pune according to the pickup requirement, while outstation journeys can be planned for hill stations, pilgrimage destinations, coastal locations, heritage places, and business cities. With advance booking options, travellers can select Hyundai Aura transportation according to their destination, travel schedule, trip duration, and preferred journey type.",
    topPlaces: [
        {
            title: "Panchgani",
            description: "Hyundai Aura cabs can be arranged for private trips to Panchgani from Pune, making the sedan suitable for family holidays, sightseeing, and relaxed hill-station journeys."
        },
        {
            title: "Bhimashankar",
            description: "An Aura cab is a convenient option for passengers planning a private pilgrimage journey to Bhimashankar, with comfortable road travel for individuals and small families."
        },
        {
            title: "Murud-Janjira",
            description: "Travellers visiting Murud-Janjira can use a Hyundai Aura for a private coastal journey from Pune, suitable for sightseeing and weekend travel."
        },
        {
            title: "Diveagar",
            description: "Hyundai Aura provides a practical sedan option for trips to Diveagar, particularly for families and couples planning a private Konkan beach getaway."
        },
        {
            title: "Harihareshwar",
            description: "An Aura cab can be used for private travel to Harihareshwar for temple visits, coastal sightseeing, and family holiday itineraries."
        },
        {
            title: "Bhandardara",
            description: "Travellers planning a nature-focused trip to Bhandardara can choose an Aura cab for comfortable private road transportation from Pune."
        },
        {
            title: "Jejuri",
            description: "Hyundai Aura transportation to Jejuri is suitable for pilgrimage visits and short private trips, especially for individuals and small family groups."
        },
        {
            title: "Pandharpur",
            description: "A private Aura cab can support pilgrimage travel to Pandharpur, offering convenient transportation for families and small groups planning a temple visit."
        },
        {
            title: "Panhala Fort",
            description: "Passengers visiting Panhala Fort can arrange a Hyundai Aura for a private heritage and sightseeing journey from Pune with flexible travel planning."
        },
        {
            title: "Mulshi",
            description: "Mulshi is suitable for a short private getaway from Pune, with Hyundai Aura transportation useful for nature trips, family outings, and weekend sightseeing."
        }
    ],
    services: [
        {
            name: "Aura Cab Service in Pune",
            description: "Aura Cab Service in Pune provides private Hyundai Aura transportation for local rides, airport transfers, corporate requirements, sightseeing, family trips, and outstation journeys."
        },
        {
            name: "Hyundai Aura Rental Pune",
            description: "Hyundai Aura Rental Pune is suitable for travellers who need a private sedan for city travel, business visits, airport transportation, family outings, or longer journeys."
        },
        {
            name: "Hyundai Aura Taxi Booking Pune",
            description: "Hyundai Aura Taxi Booking Pune allows passengers to plan private sedan transportation in advance according to their pickup location, destination, travel date, and trip requirements."
        },
        {
            name: "Sedan Cab Service Pune",
            description: "Sedan Cab Service Pune provides a comfortable private vehicle option for daily transportation, airport travel, corporate movement, sightseeing, and intercity journeys."
        },
        {
            name: "Hyundai Aura Car Booking Pune",
            description: "Hyundai Aura Car Booking Pune is useful for passengers looking to reserve a dedicated Aura sedan for local transportation, airport transfers, family travel, and outstation requirements."
        },
        {
            name: "Aura Outstation Cab Pune",
            description: "Aura Outstation Cab Pune is suitable for private journeys from Pune to hill stations, pilgrimage destinations, coastal locations, business cities, and tourist attractions."
        },
        {
            name: "Hyundai Aura Airport Transfer Pune",
            description: "Hyundai Aura Airport Transfer Pune provides direct private transportation for airport pickups and drops, suitable for individuals, couples, and small families travelling with regular luggage."
        },
        {
            name: "Pune Aura Car Hire",
            description: "Pune Aura Car Hire can be arranged for personal travel, corporate requirements, sightseeing, airport transportation, and planned outstation journeys."
        },
        {
            name: "Hyundai Aura Tourist Vehicle Pune",
            description: "Hyundai Aura Tourist Vehicle Pune is suitable for sightseeing trips, weekend travel, local tours, and private holiday transportation for individuals and small groups."
        },
        {
            name: "Hyundai Aura Online Cab Booking Pune",
            description: "Hyundai Aura Online Cab Booking Pune helps travellers arrange their sedan transportation in advance according to the journey date, pickup area, destination, and preferred travel plan."
        },
        {
            name: "Hyundai Aura Cab in Hinjewadi Pune",
            description: "Hyundai Aura Cab in Hinjewadi Pune is suitable for technology professionals, corporate visitors, residents, airport travellers, and passengers planning outstation journeys."
        },
        {
            name: "Hyundai Aura Cab in Kharadi Pune",
            description: "Hyundai Aura Cab in Kharadi Pune provides private transportation for office travel, business meetings, airport transfers, hotel visits, and local journeys."
        },
        {
            name: "Hyundai Aura Cab in Hadapsar Pune",
            description: "Hyundai Aura Cab in Hadapsar Pune supports local travel, family transportation, corporate movement, airport requirements, and planned outstation trips."
        },
        {
            name: "Hyundai Aura Cab in Baner Pune",
            description: "Hyundai Aura Cab in Baner Pune can be used for business meetings, residential travel, airport transfers, sightseeing, and intercity transportation."
        },
        {
            name: "Hyundai Aura Cab in Wakad Pune",
            description: "Hyundai Aura Cab in Wakad Pune offers private transportation for local rides, corporate travel, airport drops, family trips, and outstation journeys."
        },
        {
            name: "Hyundai Aura Cab in Pimpri Chinchwad",
            description: "Hyundai Aura Cab in Pimpri Chinchwad provides a convenient sedan option for local travel, business requirements, airport transfers, and journeys beyond Pune."
        },
        {
            name: "Hyundai Aura Cab in Viman Nagar Pune",
            description: "Hyundai Aura Cab in Viman Nagar Pune is useful for airport transportation, hotel transfers, corporate visits, local rides, and planned outstation travel."
        },
        {
            name: "Hyundai Aura Cab in Kothrud Pune",
            description: "Hyundai Aura Cab in Kothrud Pune provides private sedan transportation for local errands, family journeys, airport transfers, sightseeing, and outstation routes."
        },
        {
            name: "Hyundai Aura Cab in Magarpatta Pune",
            description: "Hyundai Aura Cab in Magarpatta Pune is suitable for corporate travel, office transfers, client visits, airport transportation, and scheduled intercity journeys."
        },
        {
            name: "Hyundai Aura Cab in Wagholi Pune",
            description: "Hyundai Aura Cab in Wagholi Pune provides private transportation for local trips, business travel, airport transfers, family requirements, and outstation journeys."
        },
        {
            name: "Hyundai Aura Cab in Pune",
            description: "Hyundai Aura Cab in Pune offers a practical private sedan option for local travel, airport transfers, sightseeing, corporate transportation, family trips, and outstation journeys."
        },
        {
            name: "Hyundai Aura Cab Service Pune",
            description: "Hyundai Aura Cab Service Pune supports comfortable point-to-point transportation for personal, family, business, airport, and intercity travel requirements."
        },
        {
            name: "Hyundai Aura Taxi Service Pune",
            description: "Hyundai Aura Taxi Service Pune is suitable for passengers seeking a dedicated sedan for city transportation, airport travel, sightseeing, and longer routes."
        },
        {
            name: "Hyundai Aura Cab Booking Pune",
            description: "Hyundai Aura Cab Booking Pune makes it easier to reserve a private sedan according to the required pickup location, destination, travel date, and journey type."
        },
        {
            name: "Hyundai Aura Car Rental Pune",
            description: "Hyundai Aura Car Rental Pune can be used for local travel, family outings, corporate requirements, airport transfers, and planned tourist journeys."
        },
        {
            name: "Hyundai Aura with Driver Pune",
            description: "Hyundai Aura with Driver Pune provides passengers with a private car and driver arrangement for local transportation, sightseeing, airport travel, and outstation trips."
        },
        {
            name: "Hyundai Aura Outstation Cab Pune",
            description: "Hyundai Aura Outstation Cab Pune is a practical choice for private intercity travel to destinations across Maharashtra and nearby regions."
        },
        {
            name: "Hyundai Aura Airport Cab Pune",
            description: "Hyundai Aura Airport Cab Pune provides direct airport pickup and drop transportation for passengers looking for a comfortable private sedan."
        },
        {
            name: "Online Hyundai Aura Booking Pune",
            description: "Online Hyundai Aura Booking Pune allows travellers to plan their private sedan requirement ahead of time for airport, local, corporate, tourist, and outstation travel."
        },
        {
            name: "Hyundai Aura Sedan Cab Pune",
            description: "Hyundai Aura Sedan Cab Pune provides comfortable private transportation for individuals, couples, families, and business travellers."
        },
        {
            name: "Hyundai Aura Round Trip Cab Pune",
            description: "Hyundai Aura Round Trip Cab Pune is suitable for return journeys, weekend holidays, family visits, business travel, sightseeing, and multi-day outstation plans."
        },
        {
            name: "Best Hyundai Aura Cab Service Pune",
            description: "Travellers searching for a suitable Hyundai Aura cab service in Pune can choose private sedan transportation according to their route, travel schedule, pickup location, and journey requirements."
        }
    ],
    tableData: [
        ["Aura Cab Service in Pune"],
        ["Hyundai Aura Rental Pune"],
        ["Hyundai Aura Taxi Booking Pune"],
        ["Sedan Cab Service Pune"],
        ["Hyundai Aura Car Booking Pune"],
        ["Aura Outstation Cab Pune"],
        ["Hyundai Aura Airport Transfer Pune"],
        ["Pune Aura Car Hire"],
        ["Hyundai Aura Tourist Vehicle Pune"],
        ["Hyundai Aura Online Cab Booking Pune"],
        ["Hyundai Aura Cab in Hinjewadi Pune"],
        ["Hyundai Aura Cab in Kharadi Pune"],
        ["Hyundai Aura Cab in Hadapsar Pune"],
        ["Hyundai Aura Cab in Baner Pune"],
        ["Hyundai Aura Cab in Wakad Pune"],
        ["Hyundai Aura Cab in Pimpri Chinchwad"],
        ["Hyundai Aura Cab in Viman Nagar Pune"],
        ["Hyundai Aura Cab in Kothrud Pune"],
        ["Hyundai Aura Cab in Magarpatta Pune"],
        ["Hyundai Aura Cab in Wagholi Pune"],
        ["Hyundai Aura Cab in Pune"],
        ["Hyundai Aura Cab Service Pune"],
        ["Hyundai Aura Taxi Service Pune"],
        ["Hyundai Aura Cab Booking Pune"],
        ["Hyundai Aura Car Rental Pune"],
        ["Hyundai Aura with Driver Pune"],
        ["Hyundai Aura Outstation Cab Pune"],
        ["Hyundai Aura Airport Cab Pune"],
        ["Online Hyundai Aura Booking Pune"],
        ["Hyundai Aura Sedan Cab Pune"],
        ["Hyundai Aura Round Trip Cab Pune"],
        ["Best Hyundai Aura Cab Service Pune"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Dedicated Hyundai Aura Travel",
            WhyChoosedescription: "Virendra Cab provides Hyundai Aura transportation for passengers who prefer a private sedan for local travel, airport transfers, business journeys, sightseeing, and outstation trips."
        },
        {
            WhyChooseheading: "Varied Outstation Destinations",
            WhyChoosedescription: "Aura cabs can be planned for destinations such as Panchgani, Bhimashankar, Murud-Janjira, Diveagar, Harihareshwar, Bhandardara, Jejuri, Pandharpur, Panhala Fort, and Mulshi."
        },
        {
            WhyChooseheading: "Flexible Pune Pickup Areas",
            WhyChoosedescription: "Passengers can arrange Hyundai Aura pickups from different parts of Pune, including major residential, commercial, technology, and business areas."
        },
        {
            WhyChooseheading: "Convenient Airport Transportation",
            WhyChoosedescription: "Hyundai Aura cabs provide direct airport pickup and drop services, making them suitable for passengers who want private transportation with comfortable seating and regular luggage space."
        },
        {
            WhyChooseheading: "Suitable For Family Trips",
            WhyChoosedescription: "Families can choose an Aura sedan for private transportation during holidays, airport journeys, sightseeing plans, personal visits, and outstation travel."
        },
        {
            WhyChooseheading: "Useful For Corporate Requirements",
            WhyChoosedescription: "Business travellers can use Hyundai Aura cabs for office visits, client meetings, corporate events, hotel transfers, employee movement, and professional airport transportation."
        },
        {
            WhyChooseheading: "Private Car With Driver",
            WhyChoosedescription: "A Hyundai Aura with driver provides dedicated transportation without shared passengers, making travel convenient for individuals, couples, families, professionals, and tourists."
        },
        {
            WhyChooseheading: "Round Trip And Advance Planning",
            WhyChoosedescription: "Passengers can plan round trips and other journeys in advance according to their pickup location, destination, travel date, trip duration, and preferred transportation arrangement."
        }
    ]
};



const faqData = [
    {
        question: "Can I book an Aura Cab Service in Pune with Virendra Cab?",
        answer: "Virendra Cab can arrange Aura cab services in Pune for local transportation, airport transfers, family travel, business requirements, and suitable outstation journeys. The booking can be planned according to the travel date, pickup location, passenger count, and preferred schedule."
    },
    {
        question: "Is Aura available for local cab service in Pune?",
        answer: "Passengers can enquire about using an Aura cab for transportation within Pune and nearby areas. Pickup and destination details, travel timing, and the expected duration can be shared while arranging the journey."
    },
    {
        question: "Can I use an Aura cab for outstation travel from Pune?",
        answer: "Aura cab service can be considered for suitable outstation routes from Pune, depending on passenger and luggage requirements. Destinations such as Lonavala, Mumbai, Nashik, Shirdi, Mahabaleshwar, and other locations can be discussed during the enquiry."
    },
    {
        question: "Can I book an Aura cab for Pune airport pickup or drop?",
        answer: "An Aura can be considered for airport transportation when the passenger and luggage requirements are suitable. Travellers can share their flight timing, pickup or drop location, and preferred departure schedule for planning the cab service."
    },
    {
        question: "Is Aura cab suitable for small family trips in Pune?",
        answer: "Small families can consider an Aura cab for local travel, airport transportation, sightseeing, and selected outstation journeys. The vehicle can be matched with the group's passenger count, luggage, and overall travel requirements."
    },
    {
        question: "Can I book an Aura cab for a one-way trip from Pune?",
        answer: "Travellers requiring transportation to a destination without a return journey can enquire about a one-way Aura cab. The route, pickup point, travel date, destination, and preferred departure time can be discussed before the booking."
    },
    {
        question: "Is round-trip Aura cab service available in Pune?",
        answer: "Passengers planning to travel from Pune to another destination and return can discuss a round-trip Aura cab arrangement. The return schedule, waiting requirements, route, and sightseeing plans can be considered while organising the trip."
    },
    {
        question: "Can I hire an Aura cab for business travel in Pune?",
        answer: "Professionals can enquire about Aura cab transportation for office visits, client meetings, business appointments, airport transfers, and intercity travel. Pickup and drop timings can be planned around the work schedule."
    },
    {
        question: "Can I use an Aura cab for Pune sightseeing?",
        answer: "An Aura cab can be considered for sightseeing within Pune and nearby destinations. Travellers can plan visits to places such as Shaniwar Wada, Aga Khan Palace, Sinhagad Fort, Lonavala, Khandala, and other suitable locations according to their itinerary."
    },
    {
        question: "What details are required to book Aura Cab Service in Pune?",
        answer: "Passengers can provide their pickup address, destination, travel date, preferred timing, number of travellers, luggage details, one-way or round-trip requirement, and purpose of travel when enquiring about Aura Cab Service in Pune."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Pratik Shinde",
        feedback: "I needed a cab in Pune for airport travel followed by a few local appointments. The Aura cab arranged through Virendra Cab was suitable for my schedule, and the pickup details were coordinated clearly before the journey.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Rupal Deshmukh",
        feedback: "Our family selected an Aura for a short Pune sightseeing plan because we wanted a comfortable option for a small group. Virendra Cab helped us organise the travel around the places we wanted to visit.",
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
  "name": "Aura Cab Service in Pune",
  "image": "https://www.virendracabs.com/assets/images/aura-cab-service-in-pune.webp",
  "description": "Aura Cab Service in Pune is a convenient transportation option for passengers looking for a comfortable sedan for local travel, airport transfers, business trips, family journeys and outstation routes. Virendra Cab provides Hyundai Aura rental and taxi booking options for customers searching for Aura Cab Service in Pune, Hyundai Aura Rental Pune and Hyundai Aura Taxi Booking Pune. The Hyundai Aura can be a practical choice for individuals, couples, families and small groups who prefer private transportation with comfortable seating and useful luggage space. Customers looking for Hyundai Aura Car Booking Pune can arrange a vehicle for city travel, appointments, business meetings, shopping, events and other local requirements. Sedan Cab Service Pune can also be used for scheduled airport transportation and direct pickup or drop services. Aura Outstation Cab Pune is suitable for intercity journeys, weekend trips, family visits, pilgrimage travel and other planned road trips outside Pune. Hyundai Aura Airport Transfer Pune can be arranged according to the passenger's preferred pickup time and flight schedule. Customers searching for Pune Aura Car Hire can enquire about suitable rental arrangements based on the distance, duration and type of journey. One-way and round-trip travel options can also be discussed according to the itinerary. Current cab and rental charges depend on vehicle availability, distance, route, duration and travel requirements, so passengers can contact Virendra Cab for the latest fare details. Advance booking helps confirm the vehicle, pickup location, destination and schedule before departure. Whether the need is a local sedan, airport transfer, one-way trip or outstation journey, Virendra Cab offers a practical Hyundai Aura cab option for comfortable private travel in Pune.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.virendracabs.com/aura-cab-service-in-pune"
  }
};


    return (
        <div>

<Helmet>
  <title>
    Aura Cab Service in Pune | Hyundai Aura Rental Pune | +91 9022549022
  </title>

  <meta
    name="description"
    content="Book Aura Cab Service in Pune for local travel, airport transfers and outstation journeys. Get Hyundai Aura rental, taxi booking and car hire options with Virendra Cab."
  />

  <meta
    name="keywords"
    content="Aura Cab Service in Pune, Hyundai Aura Rental Pune, Hyundai Aura Taxi Booking Pune, Sedan Cab Service Pune, Hyundai Aura Car Booking Pune, Aura Outstation Cab Pune, Hyundai Aura Airport Transfer Pune, Pune Aura Car Hire, Hyundai Aura Cab Pune, Hyundai Aura Taxi Pune, Hyundai Aura Car Rental Pune, Aura Cab Rental Pune, Aura Taxi Service Pune, Aura Cab Booking Pune, Aura Car Booking Pune, Hyundai Aura Hire Pune, Hyundai Aura Hire for Outstation Pune, Hyundai Aura Outstation Taxi Pune, Hyundai Aura Airport Cab Pune, Hyundai Aura Airport Taxi Pune, Aura One Way Cab Pune, Hyundai Aura One Way Rental Pune, Aura Round Trip Cab Pune, Aura Local Cab Pune, Aura Private Cab Pune, Aura Sedan Rental Pune, Hyundai Aura Car Hire Pune, Aura Rental for Family Pune, Aura Cab for Business Travel Pune, Aura Cab for Airport Pickup Pune"
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
                            <img src='/images/keyword/36.jpg' alt='img' className='img-fluid' />
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

export default Auracabserviceipune ;