import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Cabserviceinravetpune() {



const cardData = {
    keyword: "Cab Service in Ravet Pune",
    headingDescription: "Virendra Cab provides convenient cab and taxi booking services in Ravet Pune for local travel, Pune outstation trips, airport transfers, one-way drops, round trips, and intercity journeys. Customers can arrange suitable cars according to passenger count, luggage, destination, and travel schedule. From daily transportation within Ravet to outstation destinations such as Mumbai, Shirdi, Nashik, Lonavala, and Mahabaleshwar, Virendra Cab supports practical and comfortable travel options for individuals, families, professionals, and groups.",
    topPlaces: [
        
        {
            title: "Mumbai",
            description: "Comfortable one-way and round-trip cab options for Ravet passengers travelling to Mumbai for business, family visits, airport connections, or personal work."
        },
        {
            title: "Shirdi",
            description: "Outstation cab arrangements from Ravet to Shirdi for pilgrims and families, with suitable vehicle choices for different group sizes."
        },
        {
            title: "Nashik",
            description: "Convenient Ravet to Nashik cab options for business travel, family journeys, religious visits, and planned return trips."
        },
        {
            title: "Lonavala",
            description: "A practical road travel option for Ravet residents planning weekend outings, family trips, or short leisure journeys to Lonavala."
        },
        {
            title: "Ravet",
            description: "Convenient pickup and drop services within Ravet for residents, professionals, families, and travellers requiring local or outstation transportation."
        },
        {
            title: "Pimpri Chinchwad",
            description: "Cab connectivity from Ravet to different parts of Pimpri Chinchwad for daily travel, business requirements, appointments, and planned transfers."
        },
        {
            title: "Wakad",
            description: "Useful for passengers travelling between Ravet and Wakad for office visits, residential transfers, shopping, and onward journeys."
        },
        {
            title: "Hinjewadi",
            description: "Practical cab services for IT professionals and residents travelling between Ravet and Hinjewadi for office commutes and scheduled transfers."
        },
        {
            title: "Pune Airport",
            description: "Airport pickup and drop arrangements from Ravet with vehicle options suited to individual travellers, families, and passengers carrying luggage."
        },
        {
            title: "Mahabaleshwar",
            description: "Comfortable outstation transportation from Ravet to Mahabaleshwar for holidays, weekend breaks, family tours, and sightseeing plans."
        }
    ],
    services: [
        {
            name: "Cab Service in Ravet Pune",
            description: "Virendra Cab offers convenient cab service in Ravet Pune for local transfers, airport travel, office journeys, family transportation, and outstation trips. Customers can select a suitable vehicle according to their route and passenger requirements."
        },
        {
            name: "Taxi Service in Ravet Pune",
            description: "Taxi service in Ravet Pune is suitable for point-to-point travel, planned city rides, airport transfers, and longer journeys. Virendra Cab helps customers arrange transportation around their preferred date and travel schedule."
        },
        {
            name: "Ravet Cab Service",
            description: "Ravet cab service supports residents and visitors who need dependable transportation within the local area or toward destinations outside Pune. Vehicle selection can be planned according to group size and luggage."
        },
        {
            name: "Ravet Taxi Service",
            description: "Travellers can use Ravet taxi service for daily transportation, personal errands, business visits, airport transfers, and intercity travel. Virendra Cab provides booking assistance for different journey requirements."
        },
        {
            name: "Cab Booking in Ravet",
            description: "Cab booking in Ravet can be arranged by sharing the pickup location, destination, travel date, time, and preferred vehicle. This makes it easier to organize local as well as outstation transportation in advance."
        },
        {
            name: "Taxi Booking in Ravet Pune",
            description: "Taxi booking in Ravet Pune is available for passengers planning local trips, airport transfers, one-way journeys, and round trips. Customers can discuss their travel requirements before confirming a suitable cab."
        },
        {
            name: "Cabs Near Me in Ravet",
            description: "Passengers searching for cabs near them in Ravet can share their exact pickup area and destination to arrange an appropriate vehicle. The service is useful for both immediate requirements and advance travel planning."
        },
        {
            name: "Taxi Near Me in Ravet",
            description: "Taxi near me services in Ravet provide a convenient option for local transportation, station transfers, airport travel, and planned intercity trips. Virendra Cab helps coordinate the ride according to the requested pickup point."
        },
        {
            name: "Best Cab Service in Ravet Pune",
            description: "Travellers comparing cab services in Ravet Pune can consider Virendra Cab based on route, vehicle preference, passenger capacity, timing, and overall travel requirements. Options are available for both local and outstation journeys."
        },
        {
            name: "Affordable Cab Service in Ravet",
            description: "Affordable cab service in Ravet is suitable for customers looking for practical transportation without selecting a vehicle larger than required. Sedan and SUV options can be considered according to the trip."
        },
        {
            name: "Reliable Taxi Service Ravet",
            description: "Virendra Cab supports reliable taxi bookings in Ravet for planned city rides, airport transfers, family travel, and outstation journeys. Customers can share their schedule in advance for organized trip coordination."
        },
        {
            name: "24/7 Cab Service in Ravet",
            description: "Customers with early-morning, late-night, or flexible travel requirements can enquire about 24/7 cab service in Ravet. Booking assistance is available for local, airport, and outstation transportation needs."
        },
        {
            name: "Local Taxi Service Ravet Pune",
            description: "Local taxi service in Ravet Pune can be used for shopping, appointments, office travel, residential transfers, railway station connections, and other everyday transportation requirements."
        },
        {
            name: "Outstation Cab Service in Ravet",
            description: "Outstation cab service from Ravet is suitable for travellers heading to Mumbai, Shirdi, Nashik, Lonavala, Mahabaleshwar, and other destinations. Customers can choose one-way or return travel according to their itinerary."
        },
        {
            name: "Pune Outstation Cab Service",
            description: "Virendra Cab provides Pune outstation cab service for travellers starting their journeys from Ravet and other Pune areas. Customers can plan one-way, round-trip, family, business, pilgrimage, and weekend journeys with a suitable vehicle."
        },
        {
            name: "One-Way Cab from Ravet",
            description: "A one-way cab from Ravet is a convenient choice when passengers need transportation to their destination without booking a return journey. Virendra Cab can arrange suitable cars based on passenger and luggage requirements."
        },
        {
            name: "Round-Trip Cab from Ravet",
            description: "Travellers planning a return journey can arrange a round-trip cab from Ravet with travel dates and destination details shared during booking. This option is useful for family visits, sightseeing, business trips, and planned tours."
        },
        {
            name: "Ravet to Pune Airport Cab",
            description: "Ravet to Pune Airport cab service helps passengers plan airport drops around their flight schedule. Customers can choose an appropriate vehicle based on passenger count, luggage, and pickup requirements."
        },
        {
            name: "Pune Airport to Ravet Taxi",
            description: "Passengers arriving at Pune Airport can arrange a taxi to Ravet for a convenient onward transfer. Vehicle choices can be selected according to the number of travellers and amount of luggage."
        },
        {
            name: "Ravet to Mumbai Cab",
            description: "Ravet to Mumbai cab service is suitable for business travel, family visits, airport connections, and personal journeys. One-way and round-trip options can be arranged according to the planned itinerary."
        },
        {
            name: "Ravet to Shirdi Cab",
            description: "Pilgrims and families can arrange a Ravet to Shirdi cab for a comfortable road journey. Sedan and SUV options provide flexibility based on group size, luggage, and travel preferences."
        },
        {
            name: "Ravet to Nashik Cab",
            description: "Ravet to Nashik cab service is useful for business visits, religious travel, family trips, and sightseeing. Customers can plan either a single-side drop or return journey depending on their schedule."
        },
        {
            name: "Ravet to Lonavala Cab",
            description: "Travellers planning a short leisure trip can book a Ravet to Lonavala cab for family outings, weekend travel, and sightseeing. Vehicle selection can be matched with the size of the travelling group."
        },
        {
            name: "Ravet to Mahabaleshwar Cab",
            description: "Ravet to Mahabaleshwar cab service provides a practical road travel option for weekend holidays, family tours, and sightseeing plans. Customers can choose a sedan or SUV according to their requirements."
        },
        {
            name: "Ravet Cab Contact Number",
            description: "Customers looking for the Ravet cab contact number can connect with Virendra Cab to discuss pickup details, destinations, vehicle availability, and booking requirements before planning their journey."
        },
        {
            name: "Ravet Car Rental with Driver",
            description: "Ravet car rental with driver is suitable for customers who prefer chauffeur-driven transportation for local work, sightseeing, business meetings, family travel, and outstation journeys. Vehicle selection can be based on the itinerary."
        },
        {
            name: "Ravet Airport Pickup and Drop Cab",
            description: "Ravet airport pickup and drop cab services help passengers coordinate transportation around their flight schedule. Suitable cars can be arranged for individuals, families, and travellers carrying different amounts of luggage."
        }
    ],
    tableData: [
        ["Cab Service in Ravet Pune"],
        ["Taxi Service in Ravet Pune"],
        ["Ravet Cab Service"],
        ["Ravet Taxi Service"],
        ["Cab Booking in Ravet"],
        ["Taxi Booking in Ravet Pune"],
        ["Cabs Near Me in Ravet"],
        ["Taxi Near Me in Ravet"],
        ["Best Cab Service in Ravet Pune"],
        ["Affordable Cab Service in Ravet"],
        ["Reliable Taxi Service Ravet"],
        ["24/7 Cab Service in Ravet"],
        ["Local Taxi Service Ravet Pune"],
        ["Outstation Cab Service in Ravet"],
        ["Pune Outstation Cab Service"],
        ["One-Way Cab from Ravet"],
        ["Round-Trip Cab from Ravet"],
        ["Ravet to Pune Airport Cab"],
        ["Pune Airport to Ravet Taxi"],
        ["Ravet to Mumbai Cab"],
        ["Ravet to Shirdi Cab"],
        ["Ravet to Nashik Cab"],
        ["Ravet to Lonavala Cab"],
        ["Ravet to Mahabaleshwar Cab"],
        ["Ravet Cab Contact Number"],
        ["Ravet Car Rental with Driver"],
        ["Ravet Airport Pickup and Drop Cab"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Convenient Ravet Pickup",
            WhyChoosedescription: "Virendra Cab makes it easier to arrange transportation from Ravet by allowing customers to specify their preferred pickup location, destination, travel date, and timing. This is useful for both local rides and longer journeys."
        },
        {
            WhyChooseheading: "Dedicated Pune Outstation Travel",
            WhyChoosedescription: "Customers travelling outside Pune can arrange outstation cab services from Ravet for business trips, family journeys, pilgrimages, and leisure travel. One-way and round-trip options can be selected according to the itinerary."
        },
        {
            WhyChooseheading: "Airport Transfer Support",
            WhyChoosedescription: "Passengers can arrange Ravet to Pune Airport and Pune Airport to Ravet transfers around their flight schedules. Vehicle choices can accommodate different passenger and luggage requirements."
        },
        {
            WhyChooseheading: "One-Way Booking Flexibility",
            WhyChoosedescription: "Travellers who do not require a return vehicle can choose a one-way cab from Ravet. This is practical for relocation, business travel, family visits, airport connections, and destination-side plans."
        },
        {
            WhyChooseheading: "Multiple Vehicle Choices",
            WhyChoosedescription: "Sedans and SUVs can be considered according to passenger capacity, luggage requirements, comfort preferences, and journey length. This helps individuals and groups select a vehicle appropriate for their trip."
        },
        {
            WhyChooseheading: "Planned Round Trips",
            WhyChoosedescription: "Customers travelling back to Ravet after visiting another destination can arrange a round-trip cab around their schedule. This option works well for sightseeing, family occasions, business visits, and weekend travel."
        },
        {
            WhyChooseheading: "Local and Intercity Coverage",
            WhyChoosedescription: "From routine transportation around Ravet and Pimpri Chinchwad to longer journeys toward Mumbai, Shirdi, Nashik, Lonavala, and Mahabaleshwar, Virendra Cab supports different travel requirements with practical booking options."
        },
        {
            WhyChooseheading: "Easy Booking Assistance",
            WhyChoosedescription: "Customers can discuss their route, preferred vehicle, passenger count, luggage, and travel timing before confirming a cab. This straightforward process helps organize Ravet and Pune outstation travel with fewer last-minute complications."
        }
    ]
};

const faqData = [
    {
        question: "How can I book a Cab Service in Ravet Pune with Virendra Cab?",
        answer: "To arrange a cab from Ravet, share your pickup point, destination, travel date, preferred departure time, passenger count, and vehicle preference. Virendra Cab can use these details to plan a suitable taxi for local, airport, or outstation travel."
    },
    {
        question: "Which areas around Ravet can be covered by the cab service?",
        answer: "Cab bookings can be arranged from Ravet and nearby locations such as Mukai Chowk, Tathawade, Punawale, Nigdi, Akurdi, Wakad, and Pimpri-Chinchwad areas. The exact pickup point can be provided while making the reservation."
    },
    {
        question: "Can I book a Cab Service in Ravet Pune for Pune Airport?",
        answer: "Airport transfers from Ravet to Pune Airport can be planned according to your flight schedule. Providing the pickup location and flight departure time in advance can help in arranging the journey with sufficient travel time."
    },
    {
        question: "Does Virendra Cab provide outstation taxis from Ravet?",
        answer: "Outstation journeys can be arranged from Ravet to destinations such as Mumbai, Lonavala, Mahabaleshwar, Nashik, Shirdi, Satara, Kolhapur, Goa, and other cities. Depending on your itinerary, you can request either a one-way or return journey."
    },
    {
        question: "What type of vehicle can I book from Ravet?",
        answer: "The vehicle can be selected according to the number of passengers, luggage, route, and trip duration. Sedan cars are suitable for smaller groups, while Ertiga or Innova Crysta can be considered when additional passenger and luggage space is required."
    },
    {
        question: "Can families hire a cab from Ravet for weekend trips?",
        answer: "Families can arrange a cab from Ravet for weekend destinations around Pune and nearby hill stations. Lonavala, Khandala, Mulshi, Mahabaleshwar, and other leisure locations can be included depending on the family's preferred travel plan."
    },
    {
        question: "Is a one-way Cab Service available from Ravet Pune?",
        answer: "One-way transportation can be arranged when you need a direct drop from Ravet to another city or destination without requiring the same cab for the return journey. The destination and preferred departure schedule should be shared during booking."
    },
    {
        question: "Can I use the Ravet cab service for corporate travel?",
        answer: "Business travellers can book taxis from Ravet for office visits, client meetings, airport transfers, conferences, and intercity work-related journeys. The pickup and drop locations can be scheduled around your professional commitments."
    },
    {
        question: "Can I book a cab from Ravet for railway station transfers?",
        answer: "Railway station transfers can be planned from Ravet to suitable Pune railway stations based on your train schedule. Sharing the train departure or arrival time helps in arranging the pickup or drop according to your travel requirements."
    },
    {
        question: "How early should I reserve a Cab Service in Ravet Pune?",
        answer: "Advance booking is useful when you have a fixed airport departure, railway schedule, early morning journey, weekend trip, or long-distance route. Providing your complete travel information beforehand allows Virendra Cab to plan the vehicle and timing more effectively."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Mihir Jadhav",
        feedback: "My pickup was from Ravet for a Pune Airport drop, and I needed the cab early in the morning. The booking details were communicated clearly, and the sedan had enough space for my luggage.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Anjali Kshirsagar",
        feedback: "We arranged a family cab from Ravet for a weekend visit to Lonavala. The larger vehicle was comfortable for our group, and having the pickup planned in advance made the outing much smoother.",
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
  "name": "Cab Service in Ravet Pune",
  "image": "https://www.virendracabs.com/assets/images/cab-service-in-ravet-pune.webp",
  "description": "Cab Service in Ravet Pune from Virendra Cab provides convenient private transportation for local travel, airport transfers, railway station trips, business journeys, family travel and outstation routes. Customers searching for Cab Service in Ravet Pune, Taxi Service in Ravet Pune, Ravet Cab Service or Ravet Taxi Service can enquire about suitable vehicles based on their destination, passenger count, luggage and preferred travel time. Cab Booking in Ravet can be arranged from residential societies, offices, commercial areas, hotels and other convenient pickup locations throughout Ravet and nearby PCMC areas. Taxi Booking in Ravet Pune is suitable for daily city travel, appointments, shopping, business meetings, railway station transfers and planned intercity journeys. Customers searching for Cabs Near Me in Ravet can contact Virendra Cab to check current availability for their required pickup location and destination. Local taxi services can connect Ravet with nearby areas such as Tathawade, Wakad, Hinjewadi, Punawale, Nigdi, Akurdi and Pimpri-Chinchwad. Airport cab services can also be arranged for passengers travelling to Pune Airport, while longer airport transfers such as Ravet to Mumbai Airport can be discussed according to the travel schedule. Outstation taxi options are suitable for customers travelling from Ravet towards Mumbai, Lonavala, Mahabaleshwar, Shirdi, Nashik, Goa and other destinations. One-way cab bookings can be selected when passengers require a direct drop without a return journey, while round-trip taxi services can be arranged for travellers who need transportation back to Ravet. Vehicle categories such as Sedan, Ertiga, SUV, Innova and Innova Crysta can be considered according to the number of passengers and luggage requirements. Corporate travellers can use Ravet cab services for office visits and business transportation, while families can choose spacious vehicles for airport trips, sightseeing, functions and outstation travel. Advance booking allows passengers to provide their pickup point, destination, travel date and preferred vehicle before confirming the journey. The final cab fare depends on factors such as vehicle category, travel distance, pickup and drop locations, trip type, travel date and applicable toll or parking charges. Customers can contact Virendra Cab to confirm the latest fare and vehicle availability. With local, airport, one-way, round-trip and outstation options, Virendra Cab provides a practical transportation choice for passengers looking for dependable Cab Service in Ravet Pune.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.virendracabs.com/cab-service-in-ravet-pune"
  }
};



    return (
        <div>

<Helmet>
  <title>
    Cab Service in Ravet Pune | Ravet Taxi Service | +91 9022549022
  </title>

  <meta
    name="description"
    content="Book Cab Service in Ravet Pune for local, airport, one-way, round-trip and outstation travel. Get convenient taxi booking from Ravet and nearby PCMC areas."
  />

  <meta
    name="keywords"
    content="Cab service in Ravet Pune, Taxi service in Ravet Pune, Ravet cab service, Ravet taxi service, Cab booking in Ravet, Taxi booking in Ravet Pune, Cabs near me in Ravet, Taxi near me in Ravet, Cab near me in Ravet, Ravet cab booking, Ravet taxi booking, Ravet online cab booking, Ravet online taxi booking, Best cab service in Ravet, Affordable cab service in Ravet, Reliable cab service in Ravet, Local cab service Ravet, Local taxi service Ravet, Outstation cab service Ravet, Outstation taxi service Ravet, One way cab from Ravet, One way taxi from Ravet, Round trip cab Ravet, Round trip taxi Ravet, Ravet airport cab, Ravet airport taxi, Ravet airport transfer, Ravet to Pune cab, Ravet to Pune taxi, Ravet to Hinjewadi cab, Ravet to Wakad cab, Ravet to Tathawade cab, Ravet to Pimpri cab, Ravet to Nigdi cab, Ravet to Akurdi cab, Ravet to Pune Airport cab, Ravet to Pune Airport taxi, Ravet to Mumbai Airport cab, Ravet to Mumbai Airport taxi, Ravet outstation cab, Ravet intercity taxi, Ravet private cab, Ravet private taxi, Ravet car rental, Ravet Sedan cab, Ravet Ertiga cab, Ravet SUV cab, Ravet Innova cab, Ravet Innova Crysta cab, Ravet family taxi, Ravet corporate cab, Ravet business taxi, Ravet railway station cab, Ravet railway station taxi, Cab service near Ravet, Taxi service near Ravet Pune, Cab booking near Ravet, Taxi booking near Ravet, Cab service in PCMC, Taxi service in PCMC, Ravet Pune cab service, Ravet Pune taxi service, Affordable taxi service Ravet, Reliable taxi service Ravet, 24/7 cab service Ravet, Ravet taxi service near me"
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
                            <img src='/images/keyword/125.jpg' alt='img' className='img-fluid' />
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

export default Cabserviceinravetpune ;