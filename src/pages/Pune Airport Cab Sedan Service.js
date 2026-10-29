import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Puneairportcabsedan() {



const cardData = {
    keyword: "Pune Airport Cab Sedan Service",
    headingDescription: "Pune Airport Cab Sedan Service from Virendra Cab is designed for convenient airport pickups, drops, city transfers, and outstation journeys starting from Pune Airport. A private sedan is a practical choice for individuals, couples, families, and business travellers who want comfortable point-to-point transportation with suitable luggage space. Along with Pune Airport transfers, the service can be used for intercity and outstation routes such as Mumbai, Nashik, Shirdi, Mahabaleshwar, and other destinations across Maharashtra. One-way and round-trip arrangements can be planned according to the travel requirement, while sedan options such as Maruti Suzuki Dzire, Hyundai Aura, Honda Amaze, and Swift Dzire can suit different passenger preferences. Pune Airport is also commonly used as a starting point for direct outstation journeys to destinations including Mumbai, Shirdi, Nashik, Mahabaleshwar, Aurangabad, Kolhapur, Satara, and other cities. ",

    topPlaces: [
        {
            title: "Pune Airport",
            description: "Arrange a private sedan for convenient airport pickup or drop service, with travel planned around your flight schedule and preferred destination."
        },
        {
            title: "Mumbai",
            description: "Travel directly from Pune Airport towards Mumbai for business, family, or onward travel requirements with a comfortable sedan and private door-to-door transportation."
        },
        {
            title: "Nashik",
            description: "A sedan can provide direct airport-to-Nashik transportation for business visits, family travel, temple trips, or onward sightseeing plans."
        },
        {
            title: "Shirdi",
            description: "Plan a private Pune Airport to Shirdi journey for Sai Baba darshan with a dedicated sedan suitable for individuals, couples, and small families."
        },
        {
            title: "Mahabaleshwar",
            description: "Continue from Pune Airport towards Mahabaleshwar for a hill-station getaway, with private sedan travel offering convenient transportation throughout the route."
        },
        {
            title: "Kolhapur",
            description: "A private sedan can connect Pune Airport with Kolhapur for family visits, business travel, pilgrimage requirements, or longer Maharashtra journeys."
        },
        {
            title: "Bhimashankar",
            description: "Include Bhimashankar in an airport-to-outstation itinerary when travelling for pilgrimage or sightseeing and looking for direct private transportation."
        }
    ],

    services: [
        {
            name: "Pune Airport Cab Service",
            description: "Virendra Cab provides private sedan transportation for Pune Airport arrivals and departures, helping passengers travel conveniently between the airport, home, hotel, office, or other destinations."
        },
        {
            name: "Pune Airport Taxi",
            description: "A private Pune Airport taxi provides direct point-to-point transportation for passengers requiring a comfortable sedan for airport pickup, drop, or onward travel."
        },
        {
            name: "Pune Airport Pickup Cab",
            description: "Airport pickup cab service can be arranged for arriving passengers with convenient transportation from Pune Airport to their preferred city or outstation destination."
        },
        {
            name: "Pune Airport Drop Taxi",
            description: "Pune Airport drop taxi service helps travellers reach the airport comfortably from homes, hotels, offices, or other pickup locations according to their flight schedule."
        },
        {
            name: "Sedan Taxi Pune Airport",
            description: "A sedan taxi at Pune Airport is suitable for individuals and small groups who prefer private air-conditioned transportation with practical passenger and luggage capacity."
        },
        {
            name: "Airport Transfer Cab Pune",
            description: "Airport transfer cab service provides direct transportation to or from Pune Airport, making it convenient for business travellers, families, tourists, and passengers with scheduled flights."
        },
        {
            name: "Pune Airport Car Rental",
            description: "Pune Airport car rental arrangements can be planned for travellers who need a private sedan with driver for airport transfers, city travel, or onward outstation journeys."
        },
        {
            name: "Airport Cab Booking Pune",
            description: "Advance airport cab booking allows passengers to communicate their pickup or drop requirements, travel timing, destination, and preferred sedan category before the journey."
        },
        {
            name: "Pune Airport Travel Service",
            description: "Pune Airport travel service supports airport transfers as well as longer journeys from the airport to Maharashtra destinations, providing private transportation according to the trip requirement."
        },
        {
            name: "Airport Sedan Cab Pune",
            description: "An airport sedan cab offers comfortable private travel for passengers arriving at or departing from Pune Airport, with suitable arrangements for city and intercity destinations."
        },
        {
            name: "Pune Outstation Cab Service",
            description: "Pune outstation cab service provides private transportation beyond the city for routes such as Mumbai, Nashik, Shirdi, Mahabaleshwar, Kolhapur, and other destinations. "
        },
        {
            name: "Pune To Mumbai Sedan Cab",
            description: "A private sedan can be arranged for direct Pune to Mumbai travel, making it useful for business meetings, airport connections, family visits, and intercity journeys."
        },
        {
            name: "Pune To Nashik Sedan Cab",
            description: "Pune to Nashik sedan cab service provides comfortable private transportation for travellers heading to Nashik for business, pilgrimage, family visits, or sightseeing."
        },
        {
            name: "Pune To Shirdi Sedan Cab",
            description: "A dedicated sedan makes Pune to Shirdi travel convenient for Sai Baba devotees, families, and small groups who prefer private transportation for their pilgrimage."
        },
        {
            name: "Pune To Mahabaleshwar Sedan Cab",
            description: "Travel from Pune to Mahabaleshwar in a private sedan for weekend holidays, family trips, or sightseeing plans with convenient pickup and destination drop arrangements."
        },
        {
            name: "Pune Intercity Taxi Service",
            description: "Pune intercity taxi service provides private sedan transportation between Pune and destinations across Maharashtra, supporting business, family, tourism, and personal travel requirements."
        },
        {
            name: "Sedan Taxi For Outstation Travel",
            description: "A sedan taxi is a practical choice for outstation journeys involving small groups and moderate luggage, offering direct private travel without shared passengers."
        },
        {
            name: "Pune Long Route Cab Service",
            description: "Long-route cab service from Pune supports extended road journeys to cities and tourist destinations where travellers prefer a dedicated vehicle and flexible travel planning."
        },
        {
            name: "One Way Sedan Taxi Pune",
            description: "One-way sedan taxi service is useful when passengers need a private transfer from Pune to another destination without requiring the same cab for the return journey."
        },
        {
            name: "Outstation Taxi Booking Pune",
            description: "Advance outstation taxi booking allows travellers to arrange their preferred sedan, pickup location, travel date, destination, and one-way or round-trip requirement before departure."
        },
        {
            name: "Maruti Suzuki Dzire Airport Cab Pune",
            description: "Maruti Suzuki Dzire can be selected for Pune Airport transfers when passengers want a compact private sedan suitable for individuals, couples, or small families."
        },
        {
            name: "Hyundai Aura Airport Taxi Pune",
            description: "Hyundai Aura airport taxi service provides another sedan option for passengers seeking comfortable private transportation to or from Pune Airport."
        },
        {
            name: "Honda Amaze Outstation Cab Pune",
            description: "Honda Amaze can be arranged for outstation journeys from Pune when travellers prefer a sedan for intercity travel, family visits, or weekend trips."
        },
        {
            name: "Swift Dzire Airport Cab Pune",
            description: "Swift Dzire airport cab service provides private transportation for Pune Airport pickups and drops, with practical seating and luggage capacity for small groups."
        },
        {
            name: "Hyundai Aura Outstation Taxi Pune",
            description: "Hyundai Aura can be used for private outstation taxi travel from Pune, providing a comfortable sedan option for intercity and long-distance journeys."
        },
        {
            name: "Sedan Cab For Pune Airport",
            description: "A dedicated sedan cab for Pune Airport provides direct transportation between the airport and your selected pickup or drop location with convenient travel planning."
        },
        {
            name: "Sedan Taxi For Intercity Travel",
            description: "Intercity sedan taxi service provides private transportation between Pune and nearby cities or longer-distance destinations, making it suitable for business and personal travel."
        },
        {
            name: "AC Sedan Cab Service Pune",
            description: "Air-conditioned sedan cab service provides a comfortable environment for airport transfers and outstation journeys, particularly during longer road trips from Pune."
        },
        {
            name: "Executive Sedan Cab Pune",
            description: "Executive sedan cab service is suitable for business travellers and corporate guests who prefer a polished private transportation option for airport and intercity travel."
        },
        {
            name: "Budget Sedan Taxi Pune",
            description: "Travellers comparing economical private transportation can consider a sedan taxi based on their passenger count, destination, luggage needs, and selected trip type."
        },
        {
            name: "Pune Airport Cab Sedan Service",
            description: "Pune Airport Cab Sedan Service provides private airport transportation for pickups, drops, city transfers, and selected outstation journeys using suitable sedan options."
        },
        {
            name: "Pune Airport Sedan Cab",
            description: "A Pune Airport sedan cab offers convenient private transportation for passengers arriving at or departing from the airport and travelling towards their chosen destination."
        },
        {
            name: "Pune Airport Taxi Service",
            description: "Pune Airport taxi service supports direct airport transfers for passengers who want a private vehicle arranged around their flight timing and destination."
        },
        {
            name: "Pune Airport Cab Booking",
            description: "Pune Airport cab booking enables travellers to arrange airport transportation in advance by sharing the required pickup or drop location, travel date, and preferred vehicle."
        },
        {
            name: "Pune Airport Pickup And Drop Cab",
            description: "Pickup and drop cab service provides two-way airport transportation options for travellers who need reliable private travel between Pune Airport and their home, hotel, office, or another city."
        },
        {
            name: "Pune To Outstation Sedan Cab",
            description: "A Pune to outstation sedan cab provides direct private travel for passengers heading towards Maharashtra cities, pilgrimage destinations, hill stations, and other long-distance locations."
        },
        {
            name: "Outstation Sedan Cab Pune",
            description: "Outstation sedan cabs from Pune are suitable for couples, families, and small groups looking for comfortable point-to-point transportation beyond city limits."
        },
        {
            name: "Pune Outstation Taxi Service",
            description: "Pune outstation taxi service can be planned for one-way or return journeys to destinations such as Mumbai, Shirdi, Nashik, Mahabaleshwar, Kolhapur, and other routes. "
        },
        {
            name: "Sedan Cab For Outstation Pune",
            description: "A sedan cab for outstation travel from Pune provides private transportation for small groups and travellers who prefer a comfortable vehicle for longer road journeys."
        },
        {
            name: "Pune One Way Outstation Cab",
            description: "One-way outstation cab service allows passengers to travel from Pune to their destination without booking the same vehicle for the return trip, making it useful for relocation, visits, and onward travel."
        }
    ],

    tableData: [
        ["Pune Airport Cab Service"],
        ["Pune Airport Taxi"],
        ["Pune Airport Pickup Cab"],
        ["Pune Airport Drop Taxi"],
        ["Sedan Taxi Pune Airport"],
        ["Airport Transfer Cab Pune"],
        ["Pune Airport Car Rental"],
        ["Airport Cab Booking Pune"],
        ["Pune Airport Travel Service"],
        ["Airport Sedan Cab Pune"],
        ["Pune Outstation Cab Service"],
        ["Pune To Mumbai Sedan Cab"],
        ["Pune To Nashik Sedan Cab"],
        ["Pune To Shirdi Sedan Cab"],
        ["Pune To Mahabaleshwar Sedan Cab"],
        ["Pune Intercity Taxi Service"],
        ["Sedan Taxi For Outstation Travel"],
        ["Pune Long Route Cab Service"],
        ["One Way Sedan Taxi Pune"],
        ["Outstation Taxi Booking Pune"],
        ["Maruti Suzuki Dzire Airport Cab Pune"],
        ["Hyundai Aura Airport Taxi Pune"],
        ["Honda Amaze Outstation Cab Pune"],
        ["Swift Dzire Airport Cab Pune"],
        ["Hyundai Aura Outstation Taxi Pune"],
        ["Sedan Cab For Pune Airport"],
        ["Sedan Taxi For Intercity Travel"],
        ["AC Sedan Cab Service Pune"],
        ["Executive Sedan Cab Pune"],
        ["Budget Sedan Taxi Pune"],
        ["Pune Airport Cab Sedan Service"],
        ["Pune Airport Sedan Cab"],
        ["Pune Airport Taxi Service"],
        ["Pune Airport Cab Booking"],
        ["Pune Airport Pickup And Drop Cab"],
        ["Pune To Outstation Sedan Cab"],
        ["Outstation Sedan Cab Pune"],
        ["Pune Outstation Taxi Service"],
        ["Sedan Cab For Outstation Pune"],
        ["Pune One Way Outstation Cab"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Dedicated Airport Sedan Transfers",
            WhyChoosedescription: "Virendra Cab provides private sedan transportation for Pune Airport pickups and drops, allowing passengers to travel directly between the airport and their selected home, hotel, office, or destination without sharing the vehicle."
        },
        {
            WhyChooseheading: "Convenient Outstation Connections",
            WhyChoosedescription: "Pune Airport can also be used as the starting point for direct outstation journeys. Sedan travel can be arranged towards destinations such as Mumbai, Shirdi, Nashik, Mahabaleshwar, Kolhapur, and other Maharashtra locations. "
        },
        {
            WhyChooseheading: "Multiple Sedan Options",
            WhyChoosedescription: "Travellers can consider sedan options such as Maruti Suzuki Dzire, Hyundai Aura, Honda Amaze, and Swift Dzire according to passenger requirements, luggage needs, and the type of journey being planned."
        },
        {
            WhyChooseheading: "One-Way Travel Flexibility",
            WhyChoosedescription: "One-way airport and outstation sedan arrangements are useful when travellers do not need the same vehicle for the return journey. This can simplify airport transfers, intercity travel, relocation trips, and destination-specific journeys."
        },
        {
            WhyChooseheading: "Suitable For Business Travel",
            WhyChoosedescription: "Executive and standard sedan options can support corporate travellers travelling between Pune Airport, offices, hotels, business districts, and other cities. Private transportation also makes it easier to maintain a planned travel schedule."
        },
        {
            WhyChooseheading: "Comfortable AC Transportation",
            WhyChoosedescription: "Air-conditioned sedan travel provides a comfortable option for airport transfers as well as longer outstation journeys. The private setup is especially useful for travellers carrying luggage or travelling with family members."
        },
        {
            WhyChooseheading: "Intercity And Long-Route Coverage",
            WhyChoosedescription: "Beyond airport transfers, sedan cabs can be planned for longer routes across Maharashtra. Popular Pune corridors include Mumbai, Nashik, Shirdi, Mahabaleshwar, Kolhapur, Aurangabad, and other destinations. "
        },
        {
            WhyChooseheading: "Advance Booking Convenience",
            WhyChoosedescription: "Advance booking allows travellers to share their flight or travel schedule, pickup point, destination, vehicle preference, and trip type before departure. This makes it easier to organize airport pickups, drops, one-way transfers, and outstation sedan journeys."
        }
    ]
};




const faqData = [
    {
        question: "Can I book a Pune Airport Cab Sedan Service with Virendra Cab?",
        answer: "Virendra Cab can arrange a sedan for Pune Airport pickup and drop services according to your flight schedule, pickup location, passenger count, luggage, and preferred travel time. The service can be planned for individuals, families, and business travellers."
    },
    {
        question: "Is sedan cab service available for Pune Airport pickup?",
        answer: "Passengers arriving at Pune Airport can enquire about a private sedan for their onward journey. The flight details, airport pickup requirements, destination, and preferred vehicle can be shared while arranging the cab."
    },
    {
        question: "Can I book a sedan for Pune Airport drop from my home?",
        answer: "A sedan can be arranged for airport drop from residential or commercial locations across Pune. Travellers can provide their pickup address and flight departure time so the journey can be planned around their travel schedule."
    },
    {
        question: "How many passengers can travel in a Pune Airport sedan cab?",
        answer: "A sedan is generally suitable for a small number of passengers, with practical capacity depending on the specific vehicle and luggage requirements. Sharing the passenger count and number of bags helps determine whether a sedan is appropriate."
    },
    {
        question: "Can I book an early morning sedan cab to Pune Airport?",
        answer: "Travellers with early morning flights can enquire about a sedan pickup according to their required departure schedule. The pickup address, flight timing, and preferred reporting time at Pune Airport can be discussed during booking."
    },
    {
        question: "Can families use a sedan for Pune Airport transportation?",
        answer: "Small families can consider a private sedan for airport transportation when the passenger count and luggage are suitable for the vehicle. Pickup and drop arrangements can be planned according to the family's flight schedule."
    },
    {
        question: "Which Pune areas can get sedan cab pickup for airport travel?",
        answer: "Airport sedan pickup can be discussed from areas such as Kothrud, Baner, Wakad, Hinjewadi, Hadapsar, Kalyani Nagar, Viman Nagar, Pimpri-Chinchwad, and other suitable locations across Pune."
    },
    {
        question: "Can I use a Pune Airport sedan cab for business travel?",
        answer: "Business travellers can enquire about sedan airport transportation for meetings, corporate visits, client appointments, and onward travel. The pickup or drop schedule can be coordinated around the professional itinerary."
    },
    {
        question: "Can I book a sedan for both airport pickup and return travel?",
        answer: "Travellers requiring transportation to Pune Airport and later returning to the city can discuss their complete travel schedule. Airport pickup, drop, waiting requirements, and return transportation can be planned according to the itinerary."
    },
    {
        question: "What details are needed to book Pune Airport Cab Sedan Service?",
        answer: "Passengers can provide their pickup or drop address, flight date, flight timing, number of travellers, luggage details, preferred pickup time, and whether they require airport pickup or drop service when making the booking enquiry."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Vaibhav Kendre",
        feedback: "My early morning flight required a sedan pickup from Kothrud to Pune Airport. Virendra Cab coordinated the pickup timing around my flight schedule, making the airport transfer straightforward and convenient.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Rachana Borkar",
        feedback: "After returning to Pune with my family, we needed a private airport pickup with space for our luggage. The sedan arranged through Virendra Cab suited our group and made the journey from the airport comfortable.",
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
  "name": "Pune Airport Cab Sedan Service",
  "image": "https://www.virendracabs.com/assets/images/pune-airport-cab-sedan-service.webp",
  "description": "Pune Airport Cab Sedan Service is a convenient transportation option for passengers looking for comfortable private travel to and from Pune Airport. Virendra Cab provides sedan-based airport transportation for customers searching for Pune Airport Cab Service, Pune Airport Taxi and Pune Airport Pickup Cab. The service is suitable for passengers traveling for business, holidays, family visits, medical appointments, connecting journeys and other air travel requirements. Pune Airport Drop Taxi can be arranged for passengers who need a direct and scheduled ride from their home, hotel, office or another pickup location to the airport. Travelers arriving in Pune can also arrange a Pune Airport Pickup Cab for transportation to their hotel, residence, office or onward destination. Sedan Taxi Pune Airport provides a practical option for individuals, couples and small families who prefer a private vehicle with comfortable seating and luggage space. Airport Transfer Cab Pune can be planned around the passenger's flight schedule, pickup location and destination requirements. One-way airport transfers are suitable for direct pickup or drop requirements, while return arrangements can be discussed for passengers who need transportation for both arrival and departure. Current airport cab fares depend on pickup location, destination, vehicle type, travel time and trip requirements, so customers can contact Virendra Cab for the latest fare details. Advance booking helps organize the pickup timing, airport transfer details and vehicle preference before travel. Whether the requirement is an airport pickup, airport drop, hotel transfer or scheduled sedan taxi, Virendra Cab offers a practical private transportation option for Pune Airport travel.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.virendracabs.com/pune-airport-cab-sedan-service"
  }
};





    return (
        <div>

<Helmet>
  <title>
    Pune Airport Cab Sedan Service | Pune Airport Taxi Service | +91 9022549022
  </title>

  <meta
    name="description"
    content="Book Pune Airport Cab Sedan Service for airport pickup, drop and private transfers. Get comfortable Pune Airport Taxi and sedan cab options with Virendra Cab."
  />

  <meta
    name="keywords"
    content="Pune Airport Cab Sedan Service, Pune Airport Cab Service, Pune Airport Taxi, Pune Airport Pickup Cab, Pune Airport Drop Taxi, Sedan Taxi Pune Airport, Airport Transfer Cab Pune, Pune Airport Sedan Cab, Pune Airport Sedan Taxi, Pune Airport Cab Booking, Pune Airport Taxi Booking, Pune Airport Pickup Taxi, Pune Airport Drop Cab, Pune Airport Transfer Taxi, Pune Airport Private Cab, Pune Airport Car Rental, Pune Airport Sedan Rental, Pune Airport One Way Cab, Pune Airport One Way Taxi, Pune Airport Hotel Transfer Cab, Pune Airport Hotel Pickup Taxi, Pune Airport to Pune Cab, Pune Airport to City Taxi, Pune Airport Corporate Cab, Pune Airport Family Cab, Pune Airport Executive Sedan, Pune Airport Cab Hire, Pune Airport Taxi Service, Pune Airport Transfer Service"
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
                            <img src='/images/keyword/40.jpg' alt='img' className='img-fluid' />
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

export default Puneairportcabsedan ;