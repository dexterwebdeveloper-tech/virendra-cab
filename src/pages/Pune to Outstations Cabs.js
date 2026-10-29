import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Puneoutstaationcabs() {



const cardData = {

    keyword: "Pune to Outstations Cabs",

    headingDescription: "Pune to Outstations Cabs provides a convenient private travel solution for passengers planning journeys from Pune to cities, towns, tourist destinations and business locations outside the city. Virendra Cab offers one-way drops, round trips, intercity taxi services, outstation car rentals and multiple vehicle choices for individuals, families and groups. From compact sedans and Dzire cars to Ertiga, Kia Carens, Innova, Innova Crysta and larger group vehicles, travellers can select an option according to their passenger count, luggage and route requirements. Whether the journey starts from Pune, Pimpri Chinchwad, PCMC or Pune Airport, Virendra Cab makes outstation transportation easier to arrange with planned pickup, comfortable travel and route-specific cab options.",

    topPlaces: [
        {
            title: "Mumbai",
            description: "Mumbai is one of the most frequently travelled intercity destinations from Pune for business, airport transfers, family visits and personal work. Virendra Cab provides direct Pune to Mumbai outstation cabs with suitable options for one-way and return journeys."
        },
        {
            title: "Kolhapur",
            description: "Kolhapur is a popular destination for business trips, family travel and visits to important cultural and religious locations. Travellers can arrange a comfortable Pune to Kolhapur cab with Virendra Cab according to their preferred vehicle and travel schedule."
        },
        {
            title: "Mahabaleshwar",
            description: "Mahabaleshwar attracts families, couples and groups travelling from Pune for leisure trips and weekend breaks. An outstation cab offers convenient door-to-door transportation without requiring passengers to manage multiple public transport connections."
        },
        {
            title: "Nashik",
            description: "Nashik is an important Maharashtra destination for business, tourism, religious visits and family travel. Virendra Cab can provide a private Pune to Nashik outstation journey with vehicle choices suited to individual travellers and groups."
        },
        {
            title: "Shirdi",
            description: "Shirdi is a major religious destination visited by travellers throughout the year. A Pune to Shirdi outstation cab allows families and groups to travel directly from their preferred pickup point with convenient luggage space and flexible journey planning."
        },
        {
            title: "Goa",
            description: "Goa is a popular long-distance destination for holidays, family vacations and group trips from Pune. Virendra Cab offers spacious outstation vehicles for travellers who want a private road journey with convenient pickup and planned travel arrangements."
        },
        {
            title: "Satara",
            description: "Satara is an accessible Maharashtra destination for business travel, family visits and onward journeys toward the western parts of the state. Pune to Satara outstation cab services provide a practical private alternative for passengers travelling on their own schedule."
        },
        {
            title: "Lonavala",
            description: "Lonavala is a popular short-distance outstation destination from Pune for weekend trips, family outings and leisure travel. Virendra Cab can arrange comfortable cabs for individuals and groups who prefer direct transportation from their Pune location."
        },
        {
            title: "Aurangabad",
            description: "Aurangabad, also known as Chhatrapati Sambhajinagar, is an important destination for tourism, business and family travel. Travellers from Pune can use an outstation cab for a direct road journey with vehicle options based on group size."
        },
        {
            title: "Pune Airport",
            description: "Pune Airport is a useful starting point for travellers arriving in Pune before continuing toward an outstation destination. Virendra Cab provides airport-connected outstation transportation for passengers who need direct private travel after landing."
        }
    ],

    services: [
        {
            name: "pune to outstation cab",
            description: "Virendra Cab provides Pune to outstation cab services for travellers planning one-way, return or scheduled intercity journeys from different parts of Pune."
        },
        {
            name: "outstation taxi service pune",
            description: "The outstation taxi service Pune option helps passengers arrange private transportation for planned journeys outside Pune with suitable vehicle choices."
        },
        {
            name: "one way cab pune",
            description: "One way cab Pune service is suitable for travellers who need direct transportation from Pune to another city without booking a return journey."
        },
        {
            name: "best outstation cab service in pune",
            description: "Virendra Cab provides organized outstation transportation in Pune with comfortable vehicles, planned pickups and options for different passenger and luggage requirements."
        },
        {
            name: "outstation cab service in pune",
            description: "Outstation cab service in Pune allows individuals, families and groups to arrange private intercity transportation for business, leisure, family and personal travel."
        },
        {
            name: "outstation car rental pune",
            description: "Outstation car rental Pune services provide travellers with dedicated vehicles for intercity journeys, allowing them to select a car according to their group size and route."
        },
        {
            name: "taxi in pune for outstation",
            description: "A taxi in Pune for outstation travel provides direct transportation from a convenient pickup location toward cities and destinations outside Pune."
        },
        {
            name: "taxi service in pune for outstation",
            description: "Virendra Cab offers taxi service in Pune for outstation journeys with private vehicles suitable for individual passengers, families and groups."
        },
        {
            name: "book outstation cabs pune",
            description: "Travellers can book outstation cabs Pune according to their route, pickup location, passenger count and preferred vehicle type."
        },
        {
            name: "cab booking in pune for outstation",
            description: "Cab booking in Pune for outstation travel allows passengers to arrange their intercity transportation in advance and coordinate the journey around their schedule."
        },
        {
            name: "intercity in cab pune",
            description: "Intercity in cab Pune service provides a private road travel option for passengers travelling between Pune and destinations across Maharashtra and beyond."
        },
        {
            name: "intercity cab service in pune",
            description: "Intercity cab service in Pune supports direct travel between cities with comfortable vehicles and flexible options for one-way or return transportation."
        },
        {
            name: "one way drop taxi pune",
            description: "One way drop taxi Pune service is designed for passengers who need a direct intercity drop without requiring the same cab for their return trip."
        },
        {
            name: "outstation cabs mumbai to pune",
            description: "Virendra Cab also provides outstation cabs Mumbai to Pune for passengers travelling from Mumbai toward Pune for business, family visits or planned personal journeys."
        },
        {
            name: "outstation cabs pune to mumbai",
            description: "Outstation cabs Pune to Mumbai offer direct private transportation between the two cities with vehicle choices suitable for individuals, families and groups."
        },
        {
            name: "outstation taxi in pune",
            description: "Outstation taxi in Pune service provides convenient private transportation for travellers heading toward nearby and long-distance destinations outside the city."
        },
        {
            name: "outstation taxi service in pune",
            description: "Outstation taxi service in Pune from Virendra Cab supports planned intercity journeys with suitable cars and flexible travel arrangements."
        },
        {
            name: "pune airport to kolhapur cab",
            description: "Pune airport to Kolhapur cab service provides direct transportation for passengers arriving at Pune Airport and continuing toward Kolhapur without arranging multiple transfers."
        },
        {
            name: "pune car rental outstation",
            description: "Pune car rental outstation service provides vehicle options for travellers planning private journeys outside Pune based on their route, passenger count and luggage requirements."
        },
        {
            name: "pune to outstation taxi",
            description: "Pune to outstation taxi service offers direct transportation from Pune toward different cities and tourist destinations with one-way and return journey options."
        },
        {
            name: "pimpri chinchwad to Outstation Cabs",
            description: "Pimpri Chinchwad to Outstation Cabs service helps residents and businesses in the PCMC region arrange convenient private transportation for intercity journeys."
        },
        {
            name: "pcmc to outstation cab booking",
            description: "PCMC to outstation cab booking allows passengers to arrange scheduled pickups from Pimpri Chinchwad and travel directly toward their selected destination."
        },
        {
            name: "book innova crysta for outstation",
            description: "Travellers can book Innova Crysta for outstation journeys when they require a premium, spacious vehicle with comfortable seating for families or groups."
        },
        {
            name: "book ertiga for outstation in pune",
            description: "Book Ertiga for outstation in Pune service is suitable for groups looking for a spacious and practical vehicle for medium-distance and long-distance road trips."
        },
        {
            name: "maruti ertiga rent per day",
            description: "Passengers enquiring about Maruti Ertiga rent per day can discuss their travel duration, route and vehicle requirements with Virendra Cab before confirming the booking."
        },
        {
            name: "Ertiga per km rate for outstation",
            description: "Ertiga per km rate for outstation travel can be checked according to the planned route, journey type and applicable travel requirements before booking."
        },
        {
            name: "swift dzire on rent in pune for outstation",
            description: "Swift Dzire on rent in Pune for outstation travel is a practical option for smaller groups seeking a comfortable sedan for intercity journeys."
        },
        {
            name: "Sedan Cab for Outstation",
            description: "Sedan Cab for Outstation service provides a comfortable option for individuals and small families who prefer an economical car for planned intercity travel."
        },
        {
            name: "kia carens rent for outstation in pune",
            description: "Kia Carens rent for outstation in Pune is suitable for families and groups looking for additional seating space and a comfortable vehicle for longer road journeys."
        },
        {
            name: "Pune to Mumbai Airport sedan cab",
            description: "Pune to Mumbai Airport sedan cab service offers a comfortable private option for passengers travelling from Pune to Mumbai Airport for domestic or international flights."
        },
        {
            name: "Pune to Mumbai Airport Dzire cab",
            description: "Pune to Mumbai Airport Dzire cab is a practical choice for individuals and smaller groups looking for a comfortable sedan for their airport journey."
        },
        {
            name: "Pune to Mumbai Airport SUV cab",
            description: "Pune to Mumbai Airport SUV cab provides additional space for passengers and luggage, making it suitable for families or travellers carrying multiple bags."
        },
        {
            name: "Pune to Mumbai Airport Ertiga cab",
            description: "Pune to Mumbai Airport Ertiga cab offers spacious seating for families and small groups travelling from Pune toward Mumbai Airport."
        },
        {
            name: "Pune to Mumbai Airport Innova cab",
            description: "Pune to Mumbai Airport Innova cab is suitable for passengers seeking a spacious vehicle for comfortable airport transportation from Pune."
        },
        {
            name: "Pune to Mumbai Airport Innova Crysta",
            description: "Pune to Mumbai Airport Innova Crysta provides a spacious and comfortable option for families, business travellers and groups requiring additional luggage capacity."
        },
        {
            name: "Pune to Mumbai Airport luxury cab",
            description: "Pune to Mumbai Airport luxury cab service is designed for travellers who prefer an elevated and comfortable private transportation experience for their airport journey."
        },
        {
            name: "Pune to Mumbai Airport tempo traveller",
            description: "Pune to Mumbai Airport tempo traveller service is useful for larger groups travelling together with multiple passengers and luggage from Pune to Mumbai Airport."
        },
        {
            name: "Pune to Mumbai Airport group taxi",
            description: "Pune to Mumbai Airport group taxi service provides a convenient travel option for families, corporate teams and larger groups who want to travel together."
        }
    ],

    tableData: [
        ["pune to outstation cab", "outstation taxi service pune"],
        ["one way cab pune", "best outstation cab service in pune"],
        ["outstation cab service in pune", "outstation car rental pune"],
        ["taxi in pune for outstation", "taxi service in pune for outstation"],
        ["book outstation cabs pune", "cab booking in pune for outstation"],
        ["intercity in cab pune", "intercity cab service in pune"],
        ["one way drop taxi pune", "outstation cabs mumbai to pune"],
        ["outstation cabs pune to mumbai", "outstation taxi in pune"],
        ["outstation taxi service in pune", "pune airport to kolhapur cab"],
        ["pune car rental outstation", "pune to outstation taxi"],
        ["pimpri chinchwad to Outstation Cabs", "pcmc to outstation cab booking"],
        ["book innova crysta for outstation", "book ertiga for outstation in pune"],
        ["maruti ertiga rent per day", "Ertiga per km rate for outstation"],
        ["swift dzire on rent in pune for outstation", "Sedan Cab for Outstation"],
        ["kia carens rent for outstation in pune", "Pune to Mumbai Airport sedan cab"],
        ["Pune to Mumbai Airport Dzire cab", "Pune to Mumbai Airport SUV cab"],
        ["Pune to Mumbai Airport Ertiga cab", "Pune to Mumbai Airport Innova cab"],
        ["Pune to Mumbai Airport Innova Crysta", "Pune to Mumbai Airport luxury cab"],
        ["Pune to Mumbai Airport tempo traveller", "Pune to Mumbai Airport group taxi"],
        ["Pune to Outstations Cabs", "Pune Outstation Cab Service"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Wide Outstation Travel Coverage",
            WhyChoosedescription: "Virendra Cab supports journeys from Pune to a wide range of intercity destinations, making it easier to arrange private transportation for business trips, family visits, religious travel, holidays and personal work."
        },
        {
            WhyChooseheading: "One-Way and Return Options",
            WhyChoosedescription: "Passengers can select a one-way drop when they only need transportation to their destination or plan a return cab when they want the same travel arrangement for the journey back to Pune."
        },
        {
            WhyChooseheading: "Multiple Vehicle Categories",
            WhyChoosedescription: "Different journeys require different levels of space, so Virendra Cab offers practical vehicle choices ranging from sedans and Dzire cars to Ertiga, Kia Carens, Innova and Innova Crysta options."
        },
        {
            WhyChooseheading: "Group-Friendly Transportation",
            WhyChoosedescription: "Families, friends and corporate groups can choose spacious vehicles according to their passenger count and luggage requirements, helping everyone travel together instead of arranging multiple smaller vehicles."
        },
        {
            WhyChooseheading: "Pune and PCMC Pickup",
            WhyChoosedescription: "Outstation travel can be arranged from suitable locations across Pune and Pimpri Chinchwad, making the service convenient for passengers who do not want to travel to a fixed pickup point."
        },
        {
            WhyChooseheading: "Airport Connected Outstation Cabs",
            WhyChoosedescription: "Passengers arriving at Pune Airport can continue directly toward destinations such as Kolhapur and other cities with an arranged private cab, reducing the need for additional local transportation."
        },
        {
            WhyChooseheading: "Comfort for Long Road Journeys",
            WhyChoosedescription: "Long-distance travel becomes easier with a suitable private vehicle, adequate seating and luggage space. Virendra Cab provides options that can be selected according to the length and nature of the journey."
        },
        {
            WhyChooseheading: "Planned Booking Assistance",
            WhyChoosedescription: "Virendra Cab helps travellers coordinate pickup details, destination information, vehicle preferences and journey requirements before the trip, allowing outstation transportation to be organized in advance."
        }
    ]

};




const faqData = [
    {
        question: "What does Virendra Cab offer for Pune to outstation cab travel?",
        answer: "Virendra Cab provides outstation cab options for passengers travelling from Pune to different cities, tourist destinations, pilgrimage locations, business centres, and nearby states, with vehicle selection based on the route and travel requirements."
    },
    {
        question: "Which destinations can I visit from Pune by outstation cab?",
        answer: "Passengers can enquire about routes from Pune to destinations such as Mumbai, Nashik, Shirdi, Mahabaleshwar, Goa, Kolhapur, Aurangabad, Lonavala, Satara, and other suitable outstation locations."
    },
    {
        question: "Can I book a one-way outstation cab from Pune?",
        answer: "One-way travel can be discussed for passengers who need transportation from Pune to a specific destination without a return journey, with the fare and vehicle arrangement depending on the selected route and travel details."
    },
    {
        question: "Are round-trip cabs available for Pune outstation journeys?",
        answer: "Round-trip arrangements can be considered for customers planning to return to Pune after completing their visit, with the itinerary, travel duration, destination, and vehicle requirements discussed before confirming the journey."
    },
    {
        question: "What types of vehicles are available for Pune to outstation travel?",
        answer: "Vehicle selection can be based on the number of passengers, luggage, journey distance, comfort preference, and trip duration. Virendra Cab can discuss suitable car options after receiving the complete travel requirements."
    },
    {
        question: "Can families book an outstation cab from Pune?",
        answer: "Family groups can enquire about outstation cabs by sharing the number of travellers, luggage requirements, destination, travel date, and preferred vehicle size so that an appropriate travel option can be considered."
    },
    {
        question: "Can I book a Pune outstation cab for a pilgrimage trip?",
        answer: "Pilgrimage journeys from Pune to destinations such as Shirdi, Trimbakeshwar, Pandharpur, Jejuri, Tuljapur, and other religious locations can be discussed according to the planned itinerary and passenger requirements."
    },
    {
        question: "Can Virendra Cab provide cabs for business trips from Pune?",
        answer: "Business travellers can enquire about transportation to cities and industrial or commercial destinations outside Pune, with the cab arrangement planned around the required pickup location, destination, travel schedule, passenger count, and luggage."
    },
    {
        question: "How can I plan a multi-city outstation cab trip from Pune?",
        answer: "For multi-city travel, passengers can share all intended destinations, approximate travel dates, number of travellers, overnight requirements if applicable, and preferred vehicle so that the overall itinerary can be discussed before the trip."
    },
    {
        question: "What details are required to book a Pune to outstation cab?",
        answer: "To enquire about an outstation cab, passengers can provide the Pune pickup location, destination, travel date, pickup time, number of passengers, luggage details, one-way or round-trip requirement, and preferred vehicle type."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Rahul Chavan",
        feedback: "My family planned a road trip from Pune covering Mahabaleshwar and nearby destinations. Virendra Cab understood our multi-stop itinerary and helped us choose a comfortable vehicle for the journey, making the overall travel experience convenient.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Ayesha Khan",
        feedback: "A work requirement took me from Pune to multiple locations outside the city over a few days. I shared the travel schedule with Virendra Cab, and the cab arrangement suited the route and timing we had planned.",
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
  "name": "Pune to Outstations Cabs",
  "image": "https://www.virendracabs.com/assets/images/pune-to-outstations-cabs.webp",
  "description": "Pune to Outstations Cabs provide a convenient travel solution for passengers planning intercity journeys from Pune to destinations across Maharashtra and other nearby cities. Virendra Cab offers cab booking options for families, business travelers, groups and individuals looking for dependable outstation transportation. The service covers searches such as Pune to Outstation Cab, Outstation Taxi Service Pune, One Way Cab Pune, Best Outstation Cab Service in Pune and Outstation Car Rental Pune. Travelers can also plan one way drops, round trips and intercity journeys with suitable cab options based on their destination and travel requirements. Whether you need a taxi in Pune for outstation travel, want to book outstation cabs in Pune, require a Pune to Mumbai cab or are planning a Pune Airport to Kolhapur journey, advance booking can make the trip easier to organize. Virendra Cab also caters to searches for outstation cabs from Mumbai to Pune, Pune to Mumbai, Pimpri Chinchwad to outstation destinations and other intercity routes. With convenient booking and route-focused cab options, the service is suitable for family trips, business travel, weekend journeys and long-distance road transportation.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.virendracabs.com/pune-to-outstations-cabs"
  }
};









    return (
        <div>
<Helmet>
  <title>
    Pune to Outstations Cabs | Outstation Taxi Service Pune | +91 9022549022
  </title>

  <meta
    name="description"
    content="Book Pune to Outstations Cabs for one way, round trip and intercity travel. Get outstation taxi service in Pune, one way cabs, outstation car rental and convenient cab booking with Virendra Cab."
  />

  <meta
    name="keywords"
    content="Pune to Outstations Cabs, Pune to Outstation Cab, Outstation Taxi Service Pune, One Way Cab Pune, Best Outstation Cab Service in Pune, Outstation Cab Service in Pune, Outstation Car Rental Pune, Taxi in Pune for Outstation, Taxi Service in Pune for Outstation, Book Outstation Cabs Pune, Cab Booking in Pune for Outstation, Intercity Cab Pune, Intercity Cab Service in Pune, One Way Drop Taxi Pune, Outstation Cabs Mumbai to Pune, Outstation Cabs Pune to Mumbai, Outstation Taxi in Pune, Outstation Taxi Service in Pune, Pune Airport to Kolhapur Cab, Pune Car Rental Outstation, Pune to Outstation Taxi, Pimpri Chinchwad to Outstation Cab"
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
                            <img src='/images/keyword/2.jpg' alt='img' className='img-fluid' />
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

export default Puneoutstaationcabs;