import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Sedancabbookingpune() {



const cardData = {
    keyword: "Sedan Cab Booking Pune",
    headingDescription: "Sedan Cab Booking Pune is a convenient choice for travellers looking for comfortable, private and dependable transportation within Pune, PCMC, airport routes and outstation destinations. Virendra Cab provides sedan options for local travel, airport transfers, family journeys, corporate requirements, one-way trips and round-trip travel, with flexible booking support for both Pune and Pimpri Chinchwad passengers.",
    topPlaces: [
        {
            title: "Pune Airport",
            description: "Enjoy convenient sedan transfers to and from Pune Airport with comfortable seating, luggage space and flexible pickup arrangements for business and leisure travellers."
        },
        {
            title: "Mahabaleshwar",
            description: "A sedan cab is a practical option for a comfortable journey from Pune to Mahabaleshwar, making it suitable for couples, families and small groups planning a hill-station visit."
        },
        {
            title: "Mumbai",
            description: "Travel between Pune and Mumbai in a private sedan with a comfortable cabin, professional driving support and suitable arrangements for business, personal and airport-related journeys."
        },
        {
            title: "Shirdi",
            description: "Plan a peaceful pilgrimage journey from Pune to Shirdi with a private sedan cab that provides convenient travel for families and passengers carrying personal luggage."
        },
        {
            title: "Nashik",
            description: "Choose a sedan for comfortable Pune to Nashik travel, whether the journey is planned for business work, family visits, sightseeing or a longer outstation itinerary."
        },
        {
            title: "Goa",
            description: "For longer road journeys, a private sedan offers a relaxed travel environment with direct transportation from Pune towards Goa for planned leisure and holiday trips."
        },
        {
            title: "Kolhapur",
            description: "Travel conveniently from Pune to Kolhapur in a private sedan suitable for family journeys, personal visits, business travel and flexible outstation schedules."
        },
        {
            title: "Hinjewadi",
            description: "Sedan cab services around Hinjewadi are useful for corporate employees, client meetings and business transfers requiring comfortable transportation across Pune's major IT corridor."
        }
    ],
    services: [
        {
            name: "Sedan Cab Service in Pune",
            description: "Virendra Cab provides comfortable sedan cab services across Pune for daily travel, personal appointments, family journeys, business visits and planned local transportation. Passengers can choose private travel according to their preferred schedule and pickup location."
        },
        {
            name: "Sedan Taxi Service Pune",
            description: "Sedan taxi service in Pune offers a practical combination of comfort, privacy and convenient road travel. The service can be arranged for local transfers, airport journeys, office travel, sightseeing and selected outstation destinations."
        },
        {
            name: "Sedan Cab Booking Pune",
            description: "Sedan Cab Booking Pune allows travellers to arrange private transportation according to their journey requirements. Virendra Cab supports advance bookings for local, airport, one-way, round-trip, family and corporate travel."
        },
        {
            name: "Sedan Cab Hire Pune",
            description: "Hiring a sedan cab in Pune is suitable for passengers who prefer a dedicated vehicle rather than shared transportation. The service can be planned for short local trips, airport transfers, meetings, sightseeing and longer road journeys."
        },
        {
            name: "Sedan Taxi Booking Pune",
            description: "Sedan taxi booking in Pune makes it easier to arrange comfortable transportation before the journey begins. Passengers can plan suitable pickup and drop locations for personal, professional and outstation travel requirements."
        },
        {
            name: "Sedan Car Hire Pune",
            description: "Sedan car hire in Pune provides private transportation for individuals, couples, families and corporate travellers. A sedan offers a comfortable cabin and practical luggage capacity for a variety of planned journeys."
        },
        {
            name: "Sedan Outstation Cab Pune",
            description: "Sedan outstation cab services from Pune are suitable for travellers planning trips to nearby cities, hill stations, pilgrimage destinations and business locations. Private travel provides flexibility for planned stops and convenient return schedules."
        },
        {
            name: "Sedan Airport Cab Pune",
            description: "Sedan airport cab service in Pune is designed for convenient airport pickup and drop requirements. Travellers can arrange private transportation according to flight timings, luggage requirements and preferred pickup locations."
        },
        {
            name: "Sedan One Way Cab Pune",
            description: "A sedan one-way cab from Pune is useful when passengers need private transportation to another city without requiring the same vehicle for the return journey. It can be planned for personal, business and relocation-related travel."
        },
        {
            name: "Sedan Round Trip Cab Pune",
            description: "Sedan round-trip cab services from Pune provide convenient transportation for journeys where passengers need the same travel arrangement for onward and return routes. This option works well for family visits, sightseeing and business travel."
        },
        {
            name: "Online Sedan Cab Booking Pune",
            description: "Online sedan cab booking in Pune offers a convenient way to plan transportation before travelling. Customers can share their route, pickup details, travel date and preferred journey type to arrange a suitable private cab."
        },
        {
            name: "Luxury Sedan Cab Pune",
            description: "Luxury sedan cab options in Pune are suited to travellers who prefer a more refined and comfortable road journey. They can be considered for corporate meetings, special occasions, airport transfers and premium personal travel."
        },
        {
            name: "Sedan Tourist Cab Pune",
            description: "Sedan tourist cab services in Pune are useful for sightseeing trips, weekend outings and planned city-to-city journeys. Travellers can enjoy private transportation while maintaining flexibility around their itinerary and stops."
        },
        {
            name: "Sedan Cabs in Pune",
            description: "Sedan cabs in Pune provide a convenient travel solution for passengers who need a private car for local or outstation transportation. They are suitable for individuals, couples, families and corporate travellers."
        },
        {
            name: "Sedan Taxi Pune",
            description: "Sedan taxi services in Pune combine comfortable seating with private point-to-point transportation. They can be arranged for office transfers, airport travel, personal appointments, sightseeing and longer journeys."
        },
        {
            name: "Sedan Car on Rent Pune",
            description: "Sedan car rental in Pune is suitable for travellers who require a comfortable private vehicle for scheduled transportation. Options can be considered for local usage, airport transfers, family travel and outstation routes."
        },
        {
            name: "Sedan Rental Service Pune",
            description: "Sedan rental service in Pune gives passengers a practical option for arranging private transportation based on their travel plan. The service can support local movement, business requirements, airport trips and outstation journeys."
        },
        {
            name: "Sedan Cab for Outstation Pune",
            description: "A sedan cab for outstation travel from Pune is suitable for comfortable intercity journeys to destinations across Maharashtra and nearby states. Passengers can plan one-way or return travel based on their itinerary."
        },
        {
            name: "Pune Airport Sedan Cab",
            description: "Pune Airport sedan cab service provides private transportation for passengers travelling to or from the airport. The sedan format offers comfortable seating and useful luggage space for individual, family and business travellers."
        },
        {
            name: "Sedan Taxi for Family Travel",
            description: "Sedan taxis are a convenient choice for family travel because they provide a private cabin and a comfortable environment for planned journeys. Families can use them for local visits, airport transfers, sightseeing and outstation trips."
        },
        {
            name: "Corporate Sedan Taxi Pune",
            description: "Corporate sedan taxi services in Pune support business transportation for meetings, employee movement, client visits, airport transfers and scheduled office travel. Private sedan arrangements help maintain a professional and comfortable travel experience."
        },
        {
            name: "Sedan Cab Near Me Pune",
            description: "Travellers searching for a sedan cab near them in Pune can arrange private transportation for nearby destinations, airport transfers, office travel or longer routes. Pickup planning can be coordinated according to the required location."
        },
        {
            name: "Best Sedan Cab Service Pune",
            description: "Travellers comparing the best sedan cab service in Pune can consider factors such as vehicle comfort, booking convenience, route flexibility, driver support and suitability for their specific journey before making a reservation."
        },
        {
            name: "Sedan Cab Service in PCMC",
            description: "Sedan cab service in PCMC provides private transportation across Pimpri Chinchwad and surrounding areas. It is suitable for local travel, corporate movement, airport transfers, family journeys and outstation requirements."
        },
        {
            name: "Sedan Taxi Pimpri Chinchwad",
            description: "Sedan taxi services in Pimpri Chinchwad offer comfortable point-to-point travel for residents, employees, families and business travellers. The service can be planned for local destinations as well as longer routes."
        },
        {
            name: "Sedan Car on Rent PCMC",
            description: "Sedan car rental in PCMC is useful for passengers who need private transportation for planned trips. It can support business visits, family travel, airport transfers, sightseeing and outstation journeys from Pimpri Chinchwad."
        },
        {
            name: "Sedan Rental Service Pimpri Chinchwad",
            description: "Sedan rental services in Pimpri Chinchwad provide convenient private travel options for different schedules and destinations. Passengers can plan suitable vehicles for local requirements, airport transportation and intercity travel."
        },
        {
            name: "PCMC Airport Sedan Cab",
            description: "PCMC airport sedan cab services make airport transportation more convenient for passengers travelling from Pimpri Chinchwad. Private pickup and drop arrangements are suitable for business travellers, families and passengers with luggage."
        },
        {
            name: "Sedan Outstation Taxi PCMC",
            description: "Sedan outstation taxis from PCMC are suitable for comfortable road journeys to cities, pilgrimage destinations, tourist locations and business hubs. Passengers can select one-way or round-trip arrangements according to their travel plan."
        },
        {
            name: "Pimpri Chinchwad Sedan Taxi Service",
            description: "Pimpri Chinchwad sedan taxi service provides private transportation for local and intercity travel. The service is useful for office commutes, airport transfers, family journeys, personal appointments and planned outstation routes."
        },
        {
            name: "Sedan Cab Near Me PCMC",
            description: "Passengers looking for a sedan cab near them in PCMC can arrange convenient pickup for local destinations, airport travel or outstation journeys. Private sedan transportation provides a comfortable alternative to shared travel."
        },
        {
            name: "Corporate Sedan Cab Service PCMC",
            description: "Corporate sedan cab services in PCMC are designed for professional transportation needs such as client meetings, employee transfers, business appointments and airport travel. Advance scheduling helps businesses coordinate journeys more conveniently."
        },
        {
            name: "Best Sedan Cab Service in Pimpri Chinchwad",
            description: "When comparing the best sedan cab service in Pimpri Chinchwad, travellers can evaluate vehicle comfort, driver coordination, booking flexibility, route coverage and suitability for local, airport and outstation requirements."
        },
        {
            name: "Sedan Outstation Cab Pune",
            description: "Sedan outstation cab services from Pune are convenient for travellers planning private intercity journeys. The service can be arranged for one-way transfers, round trips, family travel, business visits and sightseeing itineraries."
        },
        {
            name: "Sedan Cab Service in Pimpri Chinchwad",
            description: "Sedan cab service in Pimpri Chinchwad offers a comfortable private travel option for passengers moving across PCMC, Pune and nearby destinations. It can be scheduled for airport, corporate, family and outstation transportation."
        },
        {
            name: "Sedan Taxi Service PCMC",
            description: "Sedan taxi service in PCMC provides convenient transportation for everyday and planned travel needs. Passengers can arrange private cabs for business trips, airport transfers, family travel, local movement and longer routes."
        },
        {
            name: "Sedan Cab Booking Pimpri Chinchwad",
            description: "Sedan cab booking in Pimpri Chinchwad allows travellers to arrange private transportation according to their pickup location, destination and travel schedule. The service can support local, airport, corporate, family and outstation journeys."
        }
    ],
    tableData: [
        ["Sedan Cab Service in Pune"],
        ["Sedan Taxi Service Pune"],
        ["Sedan Cab Booking Pune"],
        ["Sedan Cab Hire Pune"],
        ["Sedan Taxi Booking Pune"],
        ["Sedan Car Hire Pune"],
        ["Sedan Outstation Cab Pune"],
        ["Sedan Airport Cab Pune"],
        ["Sedan One Way Cab Pune"],
        ["Sedan Round Trip Cab Pune"],
        ["Online Sedan Cab Booking Pune"],
        ["Luxury Sedan Cab Pune"],
        ["Sedan Tourist Cab Pune"],
        ["Sedan Cabs in Pune"],
        ["Sedan Taxi Pune"],
        ["Sedan Car on Rent Pune"],
        ["Sedan Rental Service Pune"],
        ["Sedan Cab for Outstation Pune"],
        ["Pune Airport Sedan Cab"],
        ["Sedan Taxi for Family Travel"],
        ["Corporate Sedan Taxi Pune"],
        ["Sedan Cab Near Me Pune"],
        ["Best Sedan Cab Service Pune"],
        ["Sedan Cab Service in PCMC"],
        ["Sedan Taxi Pimpri Chinchwad"],
        ["Sedan Car on Rent PCMC"],
        ["Sedan Rental Service Pimpri Chinchwad"],
        ["PCMC Airport Sedan Cab"],
        ["Sedan Outstation Taxi PCMC"],
        ["Pimpri Chinchwad Sedan Taxi Service"],
        ["Sedan Cab Near Me PCMC"],
        ["Corporate Sedan Cab Service PCMC"],
        ["Best Sedan Cab Service in Pimpri Chinchwad"],
        ["Sedan Outstation Cab Pune"],
        ["Sedan Cab Service in Pimpri Chinchwad"],
        ["Sedan Taxi Service PCMC"],
        ["Sedan Cab Booking Pimpri Chinchwad"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Comfortable Sedan Travel",
            WhyChoosedescription: "Virendra Cab provides sedan travel options designed for passengers who prefer a comfortable private cabin, practical luggage space and a relaxed journey for both local and outstation transportation."
        },
        {
            WhyChooseheading: "Pune And PCMC Coverage",
            WhyChoosedescription: "Cab booking support covers important areas across Pune and Pimpri Chinchwad, making it convenient for passengers to arrange transportation from residential areas, business zones, airport routes and nearby locations."
        },
        {
            WhyChooseheading: "Local And Outstation Options",
            WhyChoosedescription: "Whether the requirement is a short city transfer or a longer intercity journey, sedan cab options can be planned according to the passenger's route, schedule and preferred travel arrangement."
        },
        {
            WhyChooseheading: "Airport Transfer Convenience",
            WhyChoosedescription: "Airport-focused sedan services are useful for travellers who need scheduled pickup or drop transportation with enough cabin comfort and luggage space for business trips, holidays and family journeys."
        },
        {
            WhyChooseheading: "One-Way And Round-Trip Flexibility",
            WhyChoosedescription: "Passengers can select one-way or round-trip travel according to their itinerary, making the cab service suitable for relocation journeys, family visits, sightseeing plans, business travel and return trips."
        },
        {
            WhyChooseheading: "Family-Friendly Transportation",
            WhyChoosedescription: "Private sedan travel offers a convenient environment for families travelling together, with dedicated transportation that can accommodate planned stops and direct movement between pickup and destination points."
        },
        {
            WhyChooseheading: "Corporate Travel Support",
            WhyChoosedescription: "Business travellers can use sedan cab services for client meetings, office visits, employee movement and airport transfers, providing a practical transportation option for professional schedules."
        },
        {
            WhyChooseheading: "Convenient Advance Booking",
            WhyChoosedescription: "Advance booking makes it easier to coordinate the vehicle, pickup point, destination and travel schedule before the journey, helping passengers plan local, airport and outstation transportation more efficiently."
        }
    ]
};




const faqData = [
    {
        question: "How can I make a Sedan Cab Booking in Pune with Virendra Cab?",
        answer: "Virendra Cab allows passengers to enquire about sedan cab bookings in Pune by sharing their pickup location, destination, travel date, preferred timing, passenger count, and luggage requirements. The cab can be planned for local, airport, business, or outstation travel."
    },
    {
        question: "Can I book a sedan cab in Pune for local travel?",
        answer: "A sedan can be arranged for local transportation across Pune and nearby areas. Passengers can provide their pickup and drop locations along with the expected travel duration while discussing the booking."
    },
    {
        question: "Is sedan cab booking available for Pune airport transfers?",
        answer: "Travellers can enquire about sedan bookings for Pune Airport pickup and drop. Flight timing, passenger details, luggage, pickup address, and required airport reporting time can be considered while arranging the journey."
    },
    {
        question: "Can I book a sedan cab from Pune for outstation travel?",
        answer: "Sedan cab bookings can be considered for suitable outstation routes from Pune, including Mumbai, Nashik, Shirdi, Mahabaleshwar, Lonavala, Kolhapur, and other destinations based on the travel requirements."
    },
    {
        question: "Is one-way sedan cab booking available in Pune?",
        answer: "Passengers who need transportation to another city without a return journey can enquire about a one-way sedan booking. The route, pickup address, destination, travel date, and departure time can be discussed before confirmation."
    },
    {
        question: "Can I book a sedan cab for a round trip from Pune?",
        answer: "Round-trip sedan bookings can be planned for passengers travelling to a destination and returning to Pune. The return date, waiting requirements, sightseeing plans, and preferred schedule can be shared during the booking enquiry."
    },
    {
        question: "Which Pune areas can I use for sedan cab pickup?",
        answer: "Pickup can be discussed from several Pune areas including Baner, Kothrud, Wakad, Hinjewadi, Hadapsar, Viman Nagar, Kalyani Nagar, Pimpri-Chinchwad, and other suitable residential or commercial locations."
    },
    {
        question: "Can families book a sedan cab in Pune?",
        answer: "Small families can consider a sedan for city travel, airport transportation, sightseeing, and outstation journeys. Vehicle suitability can be discussed according to the number of family members, luggage, and journey requirements."
    },
    {
        question: "Can I book a sedan cab for business travel in Pune?",
        answer: "Professionals can enquire about sedan transportation for meetings, office visits, client appointments, industrial visits, and airport transfers. The cab schedule can be coordinated around the planned business itinerary."
    },
    {
        question: "What information is required for Sedan Cab Booking Pune?",
        answer: "Passengers can provide their pickup address, destination, travel date, preferred departure time, number of travellers, luggage details, one-way or round-trip preference, and purpose of travel when making a Sedan Cab Booking Pune enquiry."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Kiran Jagtap",
        feedback: "I needed a sedan for a combination of Pune local travel and an airport transfer on the same day. Virendra Cab understood my schedule and coordinated the booking around the locations and timings I provided.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Meera Bhandari",
        feedback: "Our family required a private cab for an outstation visit from Pune and wanted a sedan that suited our small group. The booking process with Virendra Cab was clear, and the travel arrangements matched our planned itinerary.",
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
  "name": "Sedan Cab Booking Pune",
  "image": "https://www.virendracabs.com/assets/images/sedan-cab-booking-pune.webp",
  "description": "Sedan Cab Booking Pune is a convenient option for passengers looking for comfortable private transportation for local travel, airport transfers, business journeys, family trips and outstation routes. Virendra Cab provides sedan taxi and rental options for customers searching for Sedan Cab Service in Pune, Sedan Taxi Service Pune and Sedan Cab Booking Pune. Sedan vehicles are suitable for individuals, couples, families and small groups who prefer comfortable seating and practical luggage space for their journey. Customers can arrange Sedan Cab Hire Pune or Sedan Car Hire Pune for local city travel, business meetings, shopping, events, appointments and personal transportation. Sedan Taxi Booking Pune can be planned according to the preferred pickup location, destination and travel schedule. For intercity journeys, Sedan Outstation Cab Pune provides a suitable private travel option for weekend trips, family visits, pilgrimage routes and business travel outside Pune. Passengers can also arrange Sedan Airport Cab Pune for scheduled airport pickup and drop services. Sedan One Way Cab Pune is useful for direct transportation when a return journey is not required, while Sedan Round Trip Cab Pune can be arranged for passengers who need the same vehicle for their return. Online Sedan Cab Booking Pune provides a convenient way to enquire about vehicle availability and organize travel requirements in advance. Customers looking for a Luxury Sedan Cab can discuss available vehicle options according to their comfort preferences and journey requirements. Current rental and cab charges depend on vehicle type, distance, duration, route and trip category, so passengers can contact Virendra Cab for the latest fare details. Advance booking helps confirm vehicle availability, pickup timing and destination information before travel.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.virendracabs.com/sedan-cab-booking-pune"
  }
};







    return (
        <div>

<Helmet>
  <title>
    Sedan Cab Booking Pune | Sedan Cab Service in Pune | +91 9022549022
  </title>

  <meta
    name="description"
    content="Book a Sedan Cab in Pune for local travel, airport transfers, one-way, round-trip and outstation journeys. Get convenient sedan taxi booking with Virendra Cab."
  />

  <meta
    name="keywords"
    content="Sedan Cab Booking Pune, Sedan Cab Service in Pune, Sedan Taxi Service Pune, Sedan Cab Booking Pune, Sedan Cab Hire Pune, Sedan Taxi Booking Pune, Sedan Car Hire Pune, Sedan Outstation Cab Pune, Sedan Airport Cab Pune, Sedan One Way Cab Pune, Sedan Round Trip Cab Pune, Online Sedan Cab Booking Pune, Luxury Sedan Cab Pune, Sedan Taxi Pune, Sedan Car Rental Pune, Sedan Cab Rental Pune, Sedan Car Booking Pune, Sedan Cab Hire in Pune, Sedan Taxi Hire Pune, Sedan Outstation Taxi Pune, Sedan Airport Taxi Pune, Sedan Airport Transfer Pune, Sedan One Way Taxi Pune, Sedan Round Trip Taxi Pune, Sedan Local Cab Pune, Sedan Private Cab Pune, Sedan Rental for Outstation Pune, Sedan Rental for Airport Pune, Sedan Business Cab Pune, Sedan Family Cab Pune, Premium Sedan Cab Pune, Luxury Sedan Rental Pune"
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
                            <img src='/images/keyword/42.jpg' alt='img' className='img-fluid' />
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

export default Sedancabbookingpune ;