import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Innovacrystacabinpune() {




const cardData = {
    keyword: "Innova Crysta Cab in Pune",
    headingDescription: "Virendra Cab provides comfortable and dependable Innova Crysta cab services in Pune for local travel, airport transfers, corporate requirements, weddings, family outings, and long-distance journeys. Whether you need an Innova Crysta on rent for a few hours, a full-day requirement, a Pune to Mumbai trip, or an outstation journey to Nashik, Goa, Shirdi, or Kolhapur, the service is designed around spacious seating, luggage convenience, and a relaxed travel experience. Customers can choose suitable rental options based on their route, duration, pickup location, and travel purpose.",
    
    topPlaces: [
        {
            title: "Pune Airport",
            description: "Convenient Innova Crysta pickup and drop services are available for travellers requiring comfortable airport transportation with sufficient space for passengers and luggage."
        },
        {
            title: "Hinjewadi",
            description: "Hinjewadi is a major IT and business destination where Innova Crysta services are suitable for corporate transfers, employee travel, meetings, and group transportation."
        },
        {
            title: "Wakad",
            description: "Wakad offers easy access to major highways and business areas, making it a practical pickup point for local rentals as well as outstation Innova Crysta journeys."
        },
        {
            title: "Baner",
            description: "Travellers staying or working around Baner can use Innova Crysta cabs for airport transfers, corporate travel, family trips, and convenient city-to-city transportation."
        },
        {
            title: "Kharadi",
            description: "Kharadi's business hubs and residential areas create regular demand for spacious cabs suitable for office transfers, airport travel, and planned outstation journeys."
        },
        {
            title: "Hadapsar",
            description: "Hadapsar customers can arrange Innova Crysta transportation for local requirements, family travel, corporate movement, and longer journeys from eastern Pune."
        },
        {
            title: "Pimpri Chinchwad",
            description: "Innova Crysta services around Pimpri Chinchwad are useful for families, business travellers, and groups looking for comfortable transportation across Pune and nearby destinations."
        },
        {
            title: "Pune Railway Station",
            description: "Passengers arriving at Pune Railway Station can arrange spacious Innova Crysta transfers for hotel drops, business destinations, family travel, or onward outstation journeys."
        },
        {
            title: "Koregaon Park",
            description: "Koregaon Park is a convenient Pune pickup area for travellers seeking premium-feel transportation for airport trips, social occasions, business visits, and intercity travel."
        },
        {
            title: "Shivajinagar",
            description: "Shivajinagar provides a central pickup location for Innova Crysta requirements, connecting passengers with Pune city areas, transport hubs, and popular outstation routes."
        }
    ],

    services: [
        {
            name: "Innova On Rent In Pune",
            description: "Virendra Cab offers Innova rental options in Pune for local travel, family outings, business requirements, airport transfers, and planned journeys where a spacious vehicle is preferred."
        },
        {
            name: "Innova Crysta Rental Pune",
            description: "Innova Crysta rental in Pune is suitable for customers looking for a comfortable and roomy vehicle for city travel, corporate movement, family trips, and intercity journeys."
        },
        {
            name: "Innova Car Rental Per Km In Pune",
            description: "Customers searching for per-kilometre Innova rental options in Pune can discuss their route and travel requirements with Virendra Cab to select a suitable rental arrangement."
        },
        {
            name: "Innova Crysta On Rent Pune",
            description: "An Innova Crysta on rent in Pune provides a practical choice for longer local usage, airport transportation, family functions, business travel, and outstation trips."
        },
        {
            name: "Pune Mumbai Innova Rental",
            description: "Pune to Mumbai travel becomes more convenient with an Innova rental suited to passengers who value spacious seating, luggage capacity, and a comfortable highway journey."
        },
        {
            name: "Innova Crysta Cab In Pune",
            description: "Virendra Cab provides Innova Crysta cabs in Pune for local transfers, airport travel, corporate requirements, family outings, events, and destinations outside the city."
        },
        {
            name: "Innova Crysta On Rent In Pune",
            description: "Customers can hire an Innova Crysta in Pune for short-duration requirements, full-day travel, family programs, business visits, or longer journeys based on their itinerary."
        },
        {
            name: "Innova Crysta Cab In Pune",
            description: "A spacious Innova Crysta cab is suitable for Pune passengers travelling with family, colleagues, or additional luggage who want a convenient vehicle for different travel purposes."
        },
        {
            name: "Innova Crysta Taxi In Pune",
            description: "Innova Crysta taxi services in Pune provide comfortable transportation for airport pickups, local travel, business trips, family movements, and outstation routes."
        },
        {
            name: "Innova Crysta On Rent In Pune",
            description: "Rental requirements ranging from a few hours to longer travel schedules can be accommodated with an Innova Crysta selected according to the customer's route and usage needs."
        },
        {
            name: "Innova Crysta Car Rental Pune",
            description: "Innova Crysta car rental in Pune is designed for travellers seeking extra cabin space and convenient transportation for local as well as intercity journeys."
        },
        {
            name: "Innova Crysta Cab Service Pune",
            description: "Virendra Cab provides Innova Crysta cab services across Pune for airport transfers, business travel, family transportation, functions, and scheduled outstation journeys."
        },
        {
            name: "Innova Crysta Hire In Pune",
            description: "Hiring an Innova Crysta in Pune offers a comfortable solution for groups and families requiring a spacious vehicle for planned city travel or longer-distance transportation."
        },
        {
            name: "Innova Crysta Taxi Service Pune",
            description: "The Innova Crysta taxi service in Pune supports local and outstation travel with a spacious cabin that can accommodate passengers and their luggage comfortably."
        },
        {
            name: "Innova Crysta Airport Cab Pune",
            description: "Travellers can arrange an Innova Crysta airport cab in Pune for scheduled pickups and drops, with convenient space for passengers, suitcases, and travel bags."
        },
        {
            name: "Innova Crysta Outstation Cab Pune",
            description: "For outstation journeys from Pune, an Innova Crysta offers a practical combination of passenger space, luggage capacity, and comfort for longer highway travel."
        },
        {
            name: "Innova Crysta Local Cab Pune",
            description: "Local Innova Crysta cab services in Pune are useful for shopping trips, family movements, meetings, appointments, city sightseeing, and full-day transportation requirements."
        },
        {
            name: "Innova Crysta Corporate Cab Pune",
            description: "Corporate travellers can use Innova Crysta cabs in Pune for office transfers, client meetings, airport transportation, employee movement, and scheduled business travel."
        },
        {
            name: "Innova Crysta Wedding Cab Pune",
            description: "Wedding transportation in Pune can be arranged with an Innova Crysta for family members, guests, venue transfers, hotel pickups, and other event-related travel requirements."
        },
        {
            name: "Innova Crysta Family Cab Pune",
            description: "Families can choose an Innova Crysta in Pune when travelling together for functions, holidays, airport transfers, sightseeing, or long-distance trips requiring additional cabin space."
        },
        {
            name: "Innova Crysta Cab In Hinjewadi",
            description: "Innova Crysta cabs in Hinjewadi are convenient for IT professionals, corporate visitors, families, and groups travelling between business parks, residential areas, airports, and other cities."
        },
        {
            name: "Innova Crysta Cab In Wakad",
            description: "Passengers in Wakad can arrange Innova Crysta transportation for airport transfers, corporate travel, local requirements, family trips, and highway journeys from western Pune."
        },
        {
            name: "Innova Crysta Cab In Baner",
            description: "Innova Crysta cabs in Baner provide spacious transportation for business meetings, airport travel, family outings, social occasions, and planned intercity journeys."
        },
        {
            name: "Innova Crysta Cab In Hadapsar",
            description: "Customers in Hadapsar can use Innova Crysta cabs for airport transfers, local transportation, office travel, family programs, and outstation trips from eastern Pune."
        },
        {
            name: "Innova Crysta Cab In Kharadi",
            description: "Kharadi travellers can arrange Innova Crysta cabs for corporate transfers, airport journeys, client visits, family travel, and comfortable transportation beyond Pune."
        },
        {
            name: "Innova Crysta Cab In Pimpri Chinchwad",
            description: "Innova Crysta services in Pimpri Chinchwad are suitable for families, corporate groups, airport passengers, and travellers planning comfortable journeys to Pune and nearby destinations."
        },
        {
            name: "Innova Crysta Cab Near Me Pune",
            description: "Customers looking for an Innova Crysta cab near their Pune location can enquire about convenient pickup arrangements based on their travel schedule, destination, and vehicle requirement."
        },
        {
            name: "Pune To Mumbai Innova Crysta Cab",
            description: "An Innova Crysta is a convenient choice for Pune to Mumbai travel, offering spacious seating and luggage room for families, business travellers, and groups on the highway."
        },
        {
            name: "Pune Airport Innova Crysta Taxi",
            description: "Passengers travelling through Pune Airport can arrange an Innova Crysta taxi for comfortable airport pickups and drops, particularly when travelling with family or multiple bags."
        },
        {
            name: "Pune To Nashik Innova Crysta Cab",
            description: "For the Pune to Nashik route, an Innova Crysta provides a spacious travel option for families, groups, and business travellers planning a comfortable intercity journey."
        },
        {
            name: "Pune To Goa Innova Crysta Cab",
            description: "Travellers heading from Pune to Goa can select an Innova Crysta for a relaxed long-distance journey with ample passenger space and convenient luggage accommodation."
        },
        {
            name: "Pune To Shirdi Innova Crysta Cab",
            description: "An Innova Crysta cab from Pune to Shirdi is suitable for families and groups planning a comfortable temple visit with convenient seating and space for travel belongings."
        },
        {
            name: "Pune To Kolhapur Innova Crysta Cab",
            description: "Passengers travelling from Pune to Kolhapur can use an Innova Crysta for a spacious highway journey suitable for family travel, group trips, and planned intercity transportation."
        }
    ],

    tableData: [
        ["Innova On Rent In Pune"],
        ["Innova Crysta Rental Pune"],
        ["Innova Car Rental Per Km In Pune"],
        ["Innova Crysta On Rent Pune"],
        ["Pune Mumbai Innova Rental"],
        ["Innova Crysta Cab In Pune"],
        ["Innova Crysta On Rent In Pune"],
        ["Innova Crysta Cab In Pune"],
        ["Innova Crysta Taxi In Pune"],
        ["Innova Crysta On Rent In Pune"],
        ["Innova Crysta Car Rental Pune"],
        ["Innova Crysta Cab Service Pune"],
        ["Innova Crysta Hire In Pune"],
        ["Innova Crysta Taxi Service Pune"],
        ["Innova Crysta Airport Cab Pune"],
        ["Innova Crysta Outstation Cab Pune"],
        ["Innova Crysta Local Cab Pune"],
        ["Innova Crysta Corporate Cab Pune"],
        ["Innova Crysta Wedding Cab Pune"],
        ["Innova Crysta Family Cab Pune"],
        ["Innova Crysta Cab In Hinjewadi"],
        ["Innova Crysta Cab In Wakad"],
        ["Innova Crysta Cab In Baner"],
        ["Innova Crysta Cab In Hadapsar"],
        ["Innova Crysta Cab In Kharadi"],
        ["Innova Crysta Cab In Pimpri Chinchwad"],
        ["Innova Crysta Cab Near Me Pune"],
        ["Pune To Mumbai Innova Crysta Cab"],
        ["Pune Airport Innova Crysta Taxi"],
        ["Pune To Nashik Innova Crysta Cab"],
        ["Pune To Goa Innova Crysta Cab"],
        ["Pune To Shirdi Innova Crysta Cab"],
        ["Pune To Kolhapur Innova Crysta Cab"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Spacious Innova Crysta Travel",
            WhyChoosedescription: "The Innova Crysta provides a roomy cabin that works well for families, groups, corporate travellers, and passengers carrying luggage during local or long-distance journeys."
        },
        {
            WhyChooseheading: "Flexible Local And Outstation Use",
            WhyChoosedescription: "From short Pune city trips to extended highway journeys, Virendra Cab can accommodate different travel requirements with Innova Crysta options suited to the planned itinerary."
        },
        {
            WhyChooseheading: "Convenient Pune Pickup Locations",
            WhyChoosedescription: "Pickup arrangements can be planned from areas such as Hinjewadi, Wakad, Baner, Kharadi, Hadapsar, Pimpri Chinchwad, and other convenient Pune locations."
        },
        {
            WhyChooseheading: "Airport Transfer Convenience",
            WhyChoosedescription: "Travellers can arrange Innova Crysta transportation for Pune Airport pickups and drops, making it practical for passengers travelling with family members and multiple pieces of luggage."
        },
        {
            WhyChooseheading: "Suitable For Corporate Travel",
            WhyChoosedescription: "Business travellers can use the spacious vehicle for client meetings, office transfers, airport movement, employee travel, and planned corporate schedules across Pune and beyond."
        },
        {
            WhyChooseheading: "Comfortable Family Transportation",
            WhyChoosedescription: "Families and groups can benefit from additional seating space and luggage capacity when travelling for holidays, functions, religious visits, sightseeing, or intercity trips."
        },
        {
            WhyChooseheading: "Multiple Route Options",
            WhyChoosedescription: "Virendra Cab supports Innova Crysta travel from Pune toward destinations such as Mumbai, Nashik, Goa, Shirdi, and Kolhapur, allowing customers to plan transportation around their itinerary."
        },
        {
            WhyChooseheading: "Easy Advance Booking",
            WhyChoosedescription: "Advance booking allows travellers to share their pickup point, destination, travel date, passenger requirement, and vehicle preference so the Innova Crysta service can be planned accordingly."
        }
    ]
};




const faqData = [
    {
        question: "Can I book an Innova Crysta cab in Pune with Virendra Cab?",
        answer: "Virendra Cab can arrange Innova Crysta cab services in Pune for local travel, airport transfers, outstation journeys, family trips, business travel, and other private transportation requirements based on availability and your travel schedule."
    },
    {
        question: "Is Innova Crysta suitable for outstation travel from Pune?",
        answer: "Innova Crysta can be a practical choice for longer journeys from Pune because of its spacious cabin and luggage capacity. Travellers can enquire about the vehicle for destinations such as Mumbai, Goa, Nashik, Shirdi, Mahabaleshwar, Kolhapur, and other outstation routes."
    },
    {
        question: "Can I hire an Innova Crysta for airport travel in Pune?",
        answer: "Passengers can enquire about an Innova Crysta for airport pickups and drops in Pune, especially when travelling with family members, multiple passengers, or several pieces of luggage. Pickup and flight-related timings can be shared during booking."
    },
    {
        question: "How many passengers can travel in an Innova Crysta cab?",
        answer: "The suitable passenger arrangement depends on the seating configuration, luggage quantity, and travel requirements. Customers can share their exact group size with Virendra Cab to determine whether an Innova Crysta is appropriate for their planned journey."
    },
    {
        question: "Can I book an Innova Crysta for a family trip from Pune?",
        answer: "Families can enquire about an Innova Crysta for holidays, weekend journeys, pilgrimages, and outstation travel. Its spacious interior can be considered when the group needs additional room for passengers and luggage."
    },
    {
        question: "Is Innova Crysta available for one-way trips from Pune?",
        answer: "Travellers who need transportation from Pune to another city can enquire about a one-way Innova Crysta cab. The destination, travel date, pickup location, passenger count, and luggage details can be discussed before confirming the trip."
    },
    {
        question: "Can I hire an Innova Crysta for a round-trip journey from Pune?",
        answer: "A round-trip Innova Crysta can be considered for travellers who want to visit an outstation destination and return to Pune. The return date, itinerary, expected travel duration, and sightseeing requirements can be shared while planning the journey."
    },
    {
        question: "Can I book an Innova Crysta for corporate travel in Pune?",
        answer: "Business travellers can enquire about Innova Crysta transportation for client meetings, corporate visits, conferences, airport transfers, and outstation professional journeys. The vehicle requirement can be planned around the business schedule."
    },
    {
        question: "Can I use an Innova Crysta for sightseeing around Pune?",
        answer: "An Innova Crysta can be considered for private sightseeing trips around Pune and nearby destinations. Travellers can plan routes covering places such as Lonavala, Khandala, Lavasa, Sinhagad, Mahabaleshwar, or other preferred locations."
    },
    {
        question: "What details are required to book an Innova Crysta cab in Pune?",
        answer: "Passengers can provide their pickup location, destination, travel date, preferred departure time, number of travellers, luggage requirements, one-way or round-trip preference, and trip purpose when enquiring about an Innova Crysta cab in Pune."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Harshad Kulkarni",
        feedback: "For our family journey from Pune, we wanted a spacious vehicle with enough room for everyone and our luggage. The Innova Crysta arranged through Virendra Cab suited our travel plans well, and the booking details were discussed clearly.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Aditi Mahajan",
        feedback: "A corporate trip required comfortable transportation for a small group travelling from Pune. I enquired about an Innova Crysta with Virendra Cab and found the coordination of the pickup, destination, and schedule convenient for our requirement.",
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
  "name": "Innova Crysta Cab in Pune",
  "image": "https://www.virendracabs.com/assets/images/innova-crysta-cab-in-pune.webp",
  "description": "Innova Crysta Cab in Pune is a comfortable vehicle rental option for families, business travelers, groups and passengers planning local or outstation journeys. Virendra Cab provides Innova rental options for travelers searching for Innova on Rent in Pune, Innova Crysta Rental Pune and Innova Crysta on Rent Pune. The vehicle is suitable for airport transfers, family trips, corporate travel, weddings, sightseeing, long-distance journeys and intercity transportation where passengers prefer a spacious private car. Travelers comparing Innova Car Rental Per Km in Pune can contact Virendra Cab to check the current applicable fare based on the vehicle, trip duration, route and travel requirements. For passengers planning travel between Maharashtra's major cities, Pune Mumbai Innova Rental can be arranged for one-way or round-trip journeys according to the preferred schedule. The Innova Crysta is a practical choice for passengers who need additional seating space and luggage capacity for longer road trips. Advance booking allows travelers to plan their pickup location, destination, journey duration and vehicle requirement in advance. Whether the requirement is a local Pune transfer, airport pickup, business journey, family outing or outstation trip, Virendra Cab offers Innova Crysta rental options tailored to the planned travel.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.virendracabs.com/innova-crysta-cab-in-pune"
  }
};






    return (
        <div>
<Helmet>
  <title>
    Innova Crysta Cab in Pune | Innova Crysta Rental Pune | +91 9022549022
  </title>

  <meta
    name="description"
    content="Hire an Innova Crysta Cab in Pune for local, airport and outstation travel. Explore Innova on rent, Crysta rental, per-km rental and Pune Mumbai Innova options with Virendra Cab."
  />

  <meta
    name="keywords"
    content="Innova Crysta Cab in Pune, Innova on Rent in Pune, Innova Crysta Rental Pune, Innova Car Rental Per Km in Pune, Innova Crysta on Rent Pune, Pune Mumbai Innova Rental, Innova Crysta Rental, Innova Crysta Cab Pune, Innova Crysta Taxi Pune, Innova Crysta Car Rental Pune, Innova on Rent Pune, Innova Crysta Booking Pune, Innova Crysta for Outstation Pune, Innova Crysta for Airport Transfer Pune, Innova Crysta One Way Rental Pune, Innova Crysta Round Trip Rental Pune, Pune Innova Car Rental, Innova Taxi Rental Pune"
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
                            <img src='/images/keyword/14.jpg' alt='img' className='img-fluid' />
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

export default Innovacrystacabinpune;