import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Sedancabservice() {



const cardData = {
    keyword: "Sedan Cab Service",
    headingDescription: "Virendra Cab provides flexible sedan cab services in Pune for local transportation, airport transfers, corporate travel, sightseeing, one-way journeys, round trips, and outstation travel. Sedan cabs are a practical choice for individuals, couples, families, and business travellers who prefer private and comfortable transportation. Pickup can be arranged from different parts of Pune according to the journey requirement, including residential, commercial, technology, and business areas. Travellers can choose suitable sedan transportation for regular city travel, airport requirements, private tours, and intercity journeys with advance booking convenience.",
    topPlaces: [
        {
            title: "Lonavala",
            description: "Lonavala is a popular weekend destination from Pune where a sedan cab is suitable for couples, families, and small groups planning a comfortable private hill-station trip."
        },
        {
            title: "Mahabaleshwar",
            description: "A sedan cab provides convenient private transportation from Pune to Mahabaleshwar for sightseeing, family holidays, and planned return journeys."
        },
        {
            title: "Lavasa",
            description: "Lavasa can be reached comfortably by private sedan for leisure trips, short breaks, and sightseeing plans where passengers prefer direct transportation."
        },
        {
            title: "Alibaug",
            description: "Travellers planning a coastal getaway to Alibaug can use sedan cabs for comfortable private travel with convenient pickup and destination drop arrangements."
        },
        {
            title: "Nashik",
            description: "Sedan transportation to Nashik is useful for business visits, family travel, temple trips, and sightseeing journeys requiring a private intercity vehicle."
        },
        {
            title: "Shirdi",
            description: "A private sedan is suitable for travellers visiting Shirdi for pilgrimage, providing a comfortable option for individual or small-family journeys from Pune."
        },
        {
            title: "Kolhapur",
            description: "Kolhapur is an important outstation destination where sedan cabs can support business travel, family visits, pilgrimage trips, and sightseeing."
        },
        {
            title: "Matheran",
            description: "Travellers heading towards Matheran can arrange sedan transportation for the road journey from Pune, making it convenient for planned leisure travel."
        },
        {
            title: "Satara",
            description: "Sedan cabs to Satara are useful for personal visits, business requirements, family travel, and onward journeys towards nearby destinations."
        },
        {
            title: "Khandala",
            description: "Khandala offers an easy hill-station getaway from Pune, with private sedan travel suitable for short trips, family outings, and weekend plans."
        }
    ],
    services: [
        {
            name: "Sedan Cab Service in Pune",
            description: "Virendra Cab provides private sedan transportation in Pune for local rides, airport transfers, business travel, family requirements, and planned outstation journeys."
        },
        {
            name: "Sedan Cab Service in Pune",
            description: "Sedan Cab Service in Pune is suitable for passengers looking for comfortable private transportation for daily travel, sightseeing, meetings, and scheduled trips."
        },
        {
            name: "Sedan Taxi Service Pune",
            description: "Sedan Taxi Service Pune offers convenient point-to-point transportation for individuals and small groups travelling across different parts of the city."
        },
        {
            name: "Sedan Cab Booking Pune",
            description: "Sedan Cab Booking Pune helps travellers arrange private sedan transportation in advance according to their pickup location, destination, and travel schedule."
        },
        {
            name: "Sedan Cab Hire Pune",
            description: "Sedan Cab Hire Pune can be used for local travel, airport transportation, business meetings, sightseeing, family trips, and outstation requirements."
        },
        {
            name: "Sedan Taxi Booking Pun",
            description: "Sedan Taxi Booking Pun provides a convenient way to plan private sedan transportation for city rides, airport transfers, and longer journeys."
        },
        {
            name: "Sedan Outstation Cab Pune",
            description: "Sedan Outstation Cab Pune is suitable for intercity travel where passengers prefer a private AC sedan for one-way or return journeys."
        },
        {
            name: "Sedan Airport Cab Pune",
            description: "Sedan Airport Cab Pune supports direct airport pickups and drops for passengers who need comfortable private transportation with regular luggage."
        },
        {
            name: "Sedan One Way Cab Pune",
            description: "Sedan One Way Cab Pune is useful when travellers need direct transportation from Pune to another destination without booking a return journey."
        },
        {
            name: "Sedan Round Trip Cab Pune",
            description: "Sedan Round Trip Cab Pune is suitable for return journeys, weekend trips, family visits, sightseeing, business travel, and multi-day plans."
        },
        {
            name: "AC Sedan Cab Pune",
            description: "AC Sedan Cab Pune offers a comfortable travel environment for local rides, airport transfers, corporate travel, and longer outstation routes."
        },
        {
            name: "Online Sedan Cab Booking Pune",
            description: "Online Sedan Cab Booking Pune allows passengers to plan their private transportation in advance based on the journey date, pickup point, destination, and trip type."
        },
        {
            name: "Corporate Sedan Cab Pune",
            description: "Corporate Sedan Cab Pune is suitable for employee movement, client meetings, business visits, conferences, hotel transfers, and airport transportation."
        },
        {
            name: "Affordable Sedan Cab Pune",
            description: "Affordable Sedan Cab Pune gives travellers a practical option to select sedan transportation according to their route, travel duration, and overall journey requirements."
        },
        {
            name: "Luxury Sedan Cab Pune",
            description: "Luxury Sedan Cab Pune is suitable for passengers looking for a more refined private travel experience for business trips, special occasions, airport travel, and planned tours."
        },
        {
            name: "Sedan Tourist Cab Pune",
            description: "Sedan Tourist Cab Pune can be arranged for sightseeing and leisure trips, providing private transportation for individuals, couples, and small groups."
        },
        {
            name: "Private Sedan Taxi Pune",
            description: "Private Sedan Taxi Pune provides dedicated transportation without shared passengers, making it useful for personal travel, family journeys, corporate requirements, and airport transfers."
        },
        {
            name: "Sedan Cab Service in Pune",
            description: "Sedan Cab Service in Pune supports different travel requirements with private transportation for city journeys, airport rides, sightseeing, and outstation travel."
        },
        {
            name: "Sedan Taxi Service Pune",
            description: "Sedan Taxi Service Pune provides a practical option for comfortable point-to-point travel across Pune for personal and professional requirements."
        },
        {
            name: "Sedan Cab Booking Pune",
            description: "Sedan Cab Booking Pune makes it convenient to reserve private sedan transportation ahead of time for local, airport, corporate, and outstation journeys."
        },
        {
            name: "Sedan Outstation Cab Pune",
            description: "Sedan Outstation Cab Pune is designed for passengers travelling from Pune to destinations across Maharashtra and nearby regions in a private vehicle."
        },
        {
            name: "Sedan Airport Cab Pune",
            description: "Sedan Airport Cab Pune is useful for scheduled airport pickups and drops where travellers want direct transportation and comfortable seating."
        },
        {
            name: "Online Sedan Cab Booking Pune",
            description: "Online Sedan Cab Booking Pune helps passengers organize sedan travel in advance for airport journeys, business transportation, sightseeing, and intercity routes."
        },
        {
            name: "Corporate Sedan Cab Pune",
            description: "Corporate Sedan Cab Pune provides private transportation for professionals attending meetings, visiting clients, travelling between offices, or requiring airport transfers."
        },
        {
            name: "Local Sedan Cab Service Pune",
            description: "Local Sedan Cab Service Pune is suitable for appointments, shopping, office visits, station transfers, meetings, and regular point-to-point city travel."
        },
        {
            name: "Sedan Cab Service in Hinjewadi Pune",
            description: "Sedan Cab Service in Hinjewadi Pune supports technology professionals, corporate visitors, residents, airport travellers, and passengers planning outstation journeys."
        },
        {
            name: "Sedan Cab Service in Kharadi Pune",
            description: "Sedan Cab Service in Kharadi Pune is useful for office travel, business meetings, airport transportation, hotel transfers, and local journeys."
        },
        {
            name: "Sedan Cab Service in Hadapsar Pune",
            description: "Sedan Cab Service in Hadapsar Pune provides convenient private transportation for residents, professionals, families, airport passengers, and outstation travellers."
        },
        {
            name: "Sedan Cab Service in Baner Pune",
            description: "Sedan Cab Service in Baner Pune offers private transportation for business meetings, residential travel, airport transfers, sightseeing, and intercity journeys."
        },
        {
            name: "Sedan Cab Service in Wakad Pune",
            description: "Sedan Cab Service in Wakad Pune can be arranged for local transportation, corporate travel, airport drops, family trips, and outstation routes."
        },
        {
            name: "Sedan Cab Service in Pimpri Chinchwad",
            description: "Sedan Cab Service in Pimpri Chinchwad provides a convenient transportation option for local travel, corporate requirements, airport transfers, and journeys outside Pune."
        },
        {
            name: "Sedan Cab Service in Viman Nagar Pune",
            description: "Sedan Cab Service in Viman Nagar Pune is convenient for airport travel, hotel transfers, business visits, local transportation, and planned outstation trips."
        },
        {
            name: "Sedan Cab Service in Kothrud Pune",
            description: "Sedan Cab Service in Kothrud Pune supports private travel for local errands, family transportation, airport transfers, sightseeing, and outstation requirements."
        },
        {
            name: "Sedan Cab Service in Magarpatta Pune",
            description: "Sedan Cab Service in Magarpatta Pune is suitable for corporate travel, office transfers, client visits, airport transportation, and scheduled intercity journeys."
        },
        {
            name: "Sedan Cab Service in Wagholi Pune",
            description: "Sedan Cab Service in Wagholi Pune provides private transportation for local trips, corporate travel, airport transfers, family journeys, and outstation routes."
        }
    ],
    tableData: [
        ["Sedan Cab Service in Pune"],
        ["Sedan Cab Service in Pune"],
        ["Sedan Taxi Service Pune"],
        ["Sedan Cab Booking Pune"],
        ["Sedan Cab Hire Pune"],
        ["Sedan Taxi Booking Pun"],
        ["Sedan Outstation Cab Pune"],
        ["Sedan Airport Cab Pune"],
        ["Sedan One Way Cab Pune"],
        ["Sedan Round Trip Cab Pune"],
        ["AC Sedan Cab Pune"],
        ["Online Sedan Cab Booking Pune"],
        ["Corporate Sedan Cab Pune"],
        ["Affordable Sedan Cab Pune"],
        ["Luxury Sedan Cab Pune"],
        ["Sedan Tourist Cab Pune"],
        ["Private Sedan Taxi Pune"],
        ["Sedan Cab Service in Pune"],
        ["Sedan Taxi Service Pune"],
        ["Sedan Cab Booking Pune"],
        ["Sedan Outstation Cab Pune"],
        ["Sedan Airport Cab Pune"],
        ["Online Sedan Cab Booking Pune"],
        ["Corporate Sedan Cab Pune"],
        ["Local Sedan Cab Service Pune"],
        ["Sedan Cab Service in Hinjewadi Pune"],
        ["Sedan Cab Service in Kharadi Pune"],
        ["Sedan Cab Service in Hadapsar Pune"],
        ["Sedan Cab Service in Baner Pune"],
        ["Sedan Cab Service in Wakad Pune"],
        ["Sedan Cab Service in Pimpri Chinchwad"],
        ["Sedan Cab Service in Viman Nagar Pune"],
        ["Sedan Cab Service in Kothrud Pune"],
        ["Sedan Cab Service in Magarpatta Pune"],
        ["Sedan Cab Service in Wagholi Pune"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Comfortable Sedan Transportation",
            WhyChoosedescription: "Virendra Cab provides private sedan travel for individuals, couples, families, and business passengers who prefer a comfortable vehicle for short or long journeys."
        },
        {
            WhyChooseheading: "Wide Range Of Travel Uses",
            WhyChoosedescription: "Sedan cabs can be arranged for local travel, airport transfers, corporate requirements, sightseeing, one-way journeys, round trips, and outstation transportation."
        },
        {
            WhyChooseheading: "Different Pune Pickup Areas",
            WhyChoosedescription: "Passengers can plan sedan pickups from various residential, commercial, and business areas across Pune according to their actual travel requirements."
        },
        {
            WhyChooseheading: "Convenient Outstation Journeys",
            WhyChoosedescription: "Private sedan transportation is suitable for destinations such as Lonavala, Mahabaleshwar, Nashik, Shirdi, Kolhapur, Alibaug, and other intercity locations."
        },
        {
            WhyChooseheading: "Useful For Business Travel",
            WhyChoosedescription: "Corporate passengers can use sedan cabs for office visits, client meetings, conferences, hotel transfers, employee movement, and business-related airport travel."
        },
        {
            WhyChooseheading: "Airport Travel Support",
            WhyChoosedescription: "Sedan cabs provide direct private transportation for airport pickups and drops, making scheduled travel more convenient for individuals and small groups."
        },
        {
            WhyChooseheading: "Suitable For Small Groups",
            WhyChoosedescription: "The sedan category works well for individuals, couples, and small families who want private travel with comfortable seating and space for regular luggage."
        },
        {
            WhyChooseheading: "Flexible Booking Plans",
            WhyChoosedescription: "Travellers can plan their sedan requirement around the journey type, pickup point, destination, travel date, and preferred one-way or return arrangement."
        }
    ]
};

const faqData = [
    {
        question: "What is included in Virendra Cab's Sedan Cab Service?",
        answer: "Virendra Cab offers sedan cab options for individuals, couples, families, and small groups looking for comfortable private transportation. The vehicle can be considered for local travel, airport transfers, outstation journeys, business trips, and sightseeing."
    },
    {
        question: "Can I book a sedan cab for local travel in Pune?",
        answer: "A sedan can be booked for transportation within Pune and nearby areas based on your travel requirements. Passengers can share their pickup location, destination, travel date, and preferred timing while making an enquiry."
    },
    {
        question: "Is Sedan Cab Service available for outstation trips?",
        answer: "Sedan cab arrangements can be considered for outstation routes from Pune to destinations such as Mumbai, Nashik, Shirdi, Mahabaleshwar, Kolhapur, Lonavala, and other locations according to the planned itinerary."
    },
    {
        question: "Can I hire a sedan cab for airport transportation?",
        answer: "Passengers can enquire about sedan transportation for airport pickup and drop services. The booking can be planned around the flight schedule, luggage requirements, pickup location, and preferred departure or arrival time."
    },
    {
        question: "How many passengers can travel in a sedan cab?",
        answer: "A sedan is generally suitable for a small group of passengers, with the practical capacity depending on the specific vehicle and amount of luggage. Travellers can share their passenger count and luggage details to discuss an appropriate option."
    },
    {
        question: "Can I book a sedan cab for a one-way journey?",
        answer: "One-way sedan cab bookings can be discussed for passengers who only require transportation to their destination. The route, pickup point, travel date, departure time, and vehicle requirements can be confirmed during the booking process."
    },
    {
        question: "Is a sedan suitable for family travel?",
        answer: "Families with a small number of passengers can consider a sedan for everyday travel, airport transfers, outstation journeys, and sightseeing. Vehicle suitability can be evaluated according to the family's passenger count and luggage."
    },
    {
        question: "Can I use a sedan cab for business travel?",
        answer: "Business travellers can enquire about sedan transportation for meetings, office visits, client appointments, airport transfers, and intercity travel. Pickup and drop timings can be discussed according to the professional schedule."
    },
    {
        question: "Can I hire a sedan for sightseeing and weekend trips?",
        answer: "A sedan can be considered for sightseeing and short leisure trips to destinations around Pune, including Lonavala, Khandala, Mahabaleshwar, Lavasa, and other suitable locations based on the planned route."
    },
    {
        question: "What details are needed to book a Sedan Cab Service?",
        answer: "For a sedan cab enquiry, passengers can provide their pickup address, destination, travel date, preferred timing, number of passengers, luggage requirements, one-way or round-trip preference, and purpose of travel."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Rohit Bhosale",
        feedback: "I needed a comfortable sedan for several business meetings around Pune and an airport transfer afterward. Virendra Cab understood my schedule and arranged the travel details around my planned appointments.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Aarti Mahajan",
        feedback: "For a weekend trip with my parents, we preferred a smaller private vehicle rather than a larger cab. The sedan arrangement through Virendra Cab suited our group size and made the sightseeing journey convenient.",
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
  "name": "Sedan Cab Service",
  "image": "https://www.virendracabs.com/assets/images/sedan-cab-service.webp",
  "description": "Sedan Cab Service is a convenient transportation option for passengers looking for comfortable private travel in Pune and for outstation journeys. Virendra Cab provides sedan taxi options for customers searching for Sedan Cab Service in Pune, Sedan Taxi Service Pune and Sedan Cab Booking Pune. Sedan vehicles are suitable for individuals, couples, families and small groups who prefer a practical combination of comfortable seating, luggage space and economical private transportation. Customers can arrange Sedan Cab Hire Pune for local travel, business meetings, personal appointments, shopping, events and city transportation. For longer journeys, Sedan Outstation Cab Pune provides a suitable option for intercity travel, weekend trips, family visits and pilgrimage routes. Passengers traveling to or from the airport can also enquire about Sedan Airport Cab Pune for scheduled pickup and drop services. Sedan One Way Cab Pune is useful for travelers who require a direct drop without booking a return journey, while round-trip arrangements can be planned when the same vehicle is required for the return trip. Sedan Taxi Booking Pune can be arranged according to the passenger's preferred pickup time, destination and travel requirements. Current cab fares depend on the vehicle, distance, duration, route and type of journey, so passengers can contact Virendra Cab for the latest fare details. Advance booking helps confirm vehicle availability, pickup information and trip requirements. Whether the need is a local Pune cab, airport transfer, one-way journey or outstation trip, Virendra Cab offers a practical sedan transportation option for comfortable private travel.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.virendracabs.com/sedan-cab-service"
  }
};





    return (
        <div>

<Helmet>
  <title>
    Sedan Cab Service | Sedan Taxi Service Pune | +91 9022549022
  </title>

  <meta
    name="description"
    content="Get Sedan Cab Service in Pune for local travel, airport transfers, one-way trips and outstation journeys. Book a comfortable sedan taxi with Virendra Cab."
  />

  <meta
    name="keywords"
    content="Sedan Cab Service, Sedan Cab Service in Pune, Sedan Taxi Service Pune, Sedan Cab Booking Pune, Sedan Cab Hire Pune, Sedan Taxi Booking Pune, Sedan Outstation Cab Pune, Sedan Airport Cab Pune, Sedan One Way Cab Pune, Sedan Taxi Pune, Sedan Car Rental Pune, Sedan Cab Rental Pune, Sedan Car Hire Pune, Sedan Cab in Pune, Sedan Taxi Booking in Pune, Sedan Cab Booking in Pune, Sedan Cab for Outstation Pune, Sedan Outstation Taxi Pune, Sedan Airport Taxi Pune, Sedan Airport Transfer Pune, Sedan One Way Taxi Pune, Sedan Round Trip Cab Pune, Sedan Local Cab Pune, Sedan Private Cab Pune, Sedan Rental for Family Pune, Sedan Cab for Business Travel Pune, Sedan Cab for Corporate Travel Pune"
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
                            <img src='/images/keyword/33.jpg' alt='img' className='img-fluid' />
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

export default Sedancabservice ;