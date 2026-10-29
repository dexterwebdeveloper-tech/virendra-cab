import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Ertigahireinpune() {




const cardData = {
    keyword: "Ertiga Hire in Pune",
    headingDescription: "Ertiga Hire in Pune from Virendra Cab is a practical travel option for families, small groups, corporate travellers, airport transfers, weekend trips, and outstation journeys. The spacious 7-seater Ertiga offers comfortable seating with useful luggage capacity, making it suitable for both short city requirements and longer road trips. Travellers can arrange an Ertiga for routes such as Mahabaleshwar, Mumbai, Nashik, Shirdi, Goa, Lonavala, and Kolhapur, while location-based rental requirements can also be planned around Pimpri Chinchwad, Aundh, Baner, Hinjewadi, Viman Nagar, Kharadi, Hadapsar, and Magarpatta. Whether the requirement is a local rental, airport transfer, multi-day tour, or one-way outstation journey, Virendra Cab provides flexible Ertiga travel options according to the planned route and group size.",

    topPlaces: [
        {
            title: "Mahabaleshwar",
            description: "An Ertiga is a convenient choice for families and groups travelling from Pune to Mahabaleshwar, especially for multi-day sightseeing trips that require comfortable seating and luggage space."
        },
        {
            title: "Lonavala",
            description: "Pune to Lonavala Ertiga travel suits weekend outings and family sightseeing plans, offering private transportation for passengers travelling together."
        },
        {
            title: "Mumbai",
            description: "Ertiga hire for Pune to Mumbai journeys is useful for business visits, family travel, shopping trips, and planned intercity transportation with convenient group seating."
        },
        {
            title: "Mumbai Airport",
            description: "Travellers heading from Pune to Mumbai Airport can choose an Ertiga when travelling as a family or small group with luggage and requiring a comfortable airport transfer."
        },
        {
            title: "Nashik",
            description: "Pune to Nashik Ertiga cab bookings are suitable for business journeys, family visits, sightseeing, and religious travel where private transportation is preferred."
        },
        {
            title: "Shirdi",
            description: "An Ertiga cab from Pune to Shirdi provides a spacious option for families and devotees planning a comfortable pilgrimage journey with luggage."
        },
        {
            title: "Goa",
            description: "Pune to Goa Ertiga travel is suitable for groups planning a longer road trip, offering convenient seating and practical luggage space for a holiday journey."
        },
        {
            title: "Kolhapur",
            description: "Travellers can arrange an Ertiga for Pune to Kolhapur journeys or Kolhapur to Pune transfers, making it useful for family travel and business requirements."
        },
        {
            title: "Pimpri Chinchwad",
            description: "Ertiga hire in Pimpri Chinchwad is useful for local transportation, airport transfers, family functions, corporate travel, and outstation journeys from the western side of Pune."
        },
        {
            title: "Hinjewadi",
            description: "Ertiga rentals around Hinjewadi can support corporate transportation, employee movement, airport transfers, and family or group travel to destinations outside Pune."
        }
    ],

    services: [
        {
            name: "Ertiga On Rent in Pune",
            description: "Ertiga on rent in Pune is suitable for families, small groups, corporate travel, airport transfers, sightseeing, and outstation journeys where comfortable 7-seater transportation is required."
        },
        {
            name: "Ertiga On Rent Pune",
            description: "Customers looking for an Ertiga on rent in Pune can arrange the vehicle for local requirements, weekend trips, family functions, airport transfers, and longer intercity journeys."
        },
        {
            name: "Ertiga Car On Rent in Pune",
            description: "Ertiga car rental in Pune provides a spacious and practical travel option for passengers who want private transportation for city travel, events, sightseeing, and outstation routes."
        },
        {
            name: "Ertiga CNG On Rent in Pune",
            description: "Travellers searching for an Ertiga CNG on rent in Pune can explore suitable rental options for local and longer journeys based on vehicle availability and their planned travel requirements."
        },
        {
            name: "Ertiga Rent in Pune",
            description: "Ertiga rent in Pune can be planned for family outings, business transportation, airport transfers, weddings, sightseeing, and outstation trips involving multiple passengers."
        },
        {
            name: "Ertiga Rent Per Km in Pune",
            description: "Customers comparing Ertiga rent per km in Pune can consider the planned route, travel distance, duration, and vehicle usage when selecting an appropriate rental arrangement."
        },
        {
            name: "Ertiga Rental Pune",
            description: "Ertiga rental in Pune is a convenient choice for families and groups who need a 7-seater vehicle for local transportation, airport travel, weekend outings, or longer road journeys."
        },
        {
            name: "Maruti Ertiga On Rent in Pune",
            description: "Maruti Ertiga on rent in Pune offers a practical option for group travel, providing comfortable seating and useful luggage capacity for family, corporate, and outstation transportation."
        },
        {
            name: "Pune to Mahabaleshwar Ertiga Cab",
            description: "Pune to Mahabaleshwar Ertiga cab service is suitable for families and groups planning a comfortable road journey to the hill station, with space for passengers and travel luggage."
        },
        {
            name: "Pune to Mahabaleshwar Cab for 2 Days",
            description: "A two-day Pune to Mahabaleshwar cab plan allows travellers to combine comfortable transportation with a relaxed sightseeing schedule, making it suitable for families and weekend groups."
        },
        {
            name: "Pune to Mahabaleshwar Ertiga Booking",
            description: "Advance Pune to Mahabaleshwar Ertiga booking helps families and groups organize a suitable 7-seater vehicle for their planned sightseeing schedule and return journey."
        },
        {
            name: "Pune to Mahabaleshwar Tour Package",
            description: "Pune to Mahabaleshwar tour packages can include private Ertiga transportation for travellers planning a convenient hill-station visit with flexible sightseeing and return travel."
        },
        {
            name: "Pune to Mumbai Ertiga Cab",
            description: "Pune to Mumbai Ertiga cab service is useful for business travel, family visits, shopping trips, and other intercity requirements where passengers prefer private group transportation."
        },
        {
            name: "Pune to Mumbai Airport Ertiga Cab",
            description: "An Ertiga cab from Pune to Mumbai Airport provides a comfortable airport transfer option for families and small groups travelling with multiple bags."
        },
        {
            name: "Pune to Nashik Ertiga Cab Booking",
            description: "Pune to Nashik Ertiga cab booking is suitable for business trips, family journeys, sightseeing, and religious travel where a spacious private vehicle is preferred."
        },
        {
            name: "Pune to Shirdi Ertiga Cab Booking",
            description: "Devotees and families can arrange Pune to Shirdi Ertiga cab booking for a comfortable pilgrimage journey with convenient seating and luggage capacity."
        },
        {
            name: "Pune to Goa Ertiga Cab",
            description: "Pune to Goa Ertiga cab travel is a practical option for groups planning a long road journey, providing private transportation and useful space for passengers and luggage."
        },
        {
            name: "Pune to Lonavala Ertiga Cab",
            description: "Pune to Lonavala Ertiga cab service is suitable for weekend trips, family outings, and sightseeing plans where travellers prefer to travel together in a spacious vehicle."
        },
        {
            name: "Kolhapur to Pune Ertiga Cab Booking",
            description: "Kolhapur to Pune Ertiga cab booking provides a convenient private travel option for families, business travellers, and groups travelling towards Pune."
        },
        {
            name: "Pune to Kolhapur Ertiga Cab",
            description: "Pune to Kolhapur Ertiga cab service is useful for family visits, business travel, religious journeys, and other intercity requirements involving multiple passengers."
        },
        {
            name: "Ertiga Hire in Pimpri Chinchwad",
            description: "Ertiga hire in Pimpri Chinchwad can be arranged for local travel, airport transfers, family functions, corporate transportation, and outstation journeys."
        },
        {
            name: "Ertiga Hire in Aundh Baner",
            description: "Travellers in Aundh and Baner can hire an Ertiga for airport transfers, business travel, family outings, weddings, and intercity trips requiring a spacious 7-seater."
        },
        {
            name: "Ertiga Hire in Hinjewadi Pune",
            description: "Ertiga hire in Hinjewadi Pune is suitable for corporate teams, professionals, airport transportation, family travel, and outstation journeys from the western Pune region."
        },
        {
            name: "Ertiga Rent Per Km in Pune",
            description: "Travellers comparing Ertiga rent per km in Pune can discuss their destination, distance, and travel duration to identify a rental plan suited to their journey."
        },
        {
            name: "Ertiga Cabs in Viman Nagar Pune",
            description: "Ertiga cabs in Viman Nagar Pune are convenient for airport transfers, hotel transportation, business travel, family outings, and outstation trips from the airport-side area."
        },
        {
            name: "Ertiga On Rent in Kharadi",
            description: "Ertiga on rent in Kharadi is useful for corporate travel, airport transfers, family transportation, and long-distance journeys requiring comfortable 7-seater seating."
        },
        {
            name: "Ertiga Cab in Hadapsar Magarpatta",
            description: "Ertiga cab services around Hadapsar and Magarpatta are suitable for corporate requirements, local transfers, airport travel, family trips, and outstation journeys."
        }
    ],

    tableData: [
        ["Ertiga On Rent in Pune"],
        ["Ertiga On Rent Pune"],
        ["Ertiga Car On Rent in Pune"],
        ["Ertiga CNG On Rent in Pune"],
        ["Ertiga Rent in Pune"],
        ["Ertiga Rent Per Km in Pune"],
        ["Ertiga Rental Pune"],
        ["Maruti Ertiga On Rent in Pune"],
        ["Pune to Mahabaleshwar Ertiga Cab"],
        ["Pune to Mahabaleshwar Cab for 2 Days"],
        ["Pune to Mahabaleshwar Ertiga Booking"],
        ["Pune to Mahabaleshwar Tour Package"],
        ["Pune to Mumbai Ertiga Cab"],
        ["Pune to Mumbai Airport Ertiga Cab"],
        ["Pune to Nashik Ertiga Cab Booking"],
        ["Pune to Shirdi Ertiga Cab Booking"],
        ["Pune to Goa Ertiga Cab"],
        ["Pune to Lonavala Ertiga Cab"],
        ["Kolhapur to Pune Ertiga Cab Booking"],
        ["Pune to Kolhapur Ertiga Cab"],
        ["Ertiga Hire in Pimpri Chinchwad"],
        ["Ertiga Hire in Aundh Baner"],
        ["Ertiga Hire in Hinjewadi Pune"],
        ["Ertiga Rent Per Km in Pune"],
        ["Ertiga Cabs in Viman Nagar Pune"],
        ["Ertiga On Rent in Kharadi"],
        ["Ertiga Cab in Hadapsar Magarpatta"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Comfortable 7-Seater Transportation",
            WhyChoosedescription: "The Ertiga provides a practical seating arrangement for families and small groups, making it suitable for local travel, airport transfers, sightseeing, and longer road journeys."
        },
        {
            WhyChooseheading: "Flexible Pune Pickup Locations",
            WhyChoosedescription: "Rental requirements can be planned from areas such as Pimpri Chinchwad, Aundh, Baner, Hinjewadi, Viman Nagar, Kharadi, Hadapsar, and Magarpatta according to the travel requirement."
        },
        {
            WhyChooseheading: "Suitable For Multi-Day Trips",
            WhyChoosedescription: "Travellers planning a two-day Mahabaleshwar visit or other extended journeys can use an Ertiga for convenient private transportation throughout the planned itinerary."
        },
        {
            WhyChooseheading: "Convenient Airport Travel",
            WhyChoosedescription: "Families and small groups travelling to Mumbai Airport or Pune Airport can choose an Ertiga when additional seating and luggage space make group transportation more convenient."
        },
        {
            WhyChooseheading: "Multiple Outstation Routes",
            WhyChoosedescription: "Ertiga rental options can support popular routes from Pune to Mumbai, Mahabaleshwar, Nashik, Shirdi, Goa, Lonavala, and Kolhapur according to the customer's travel plan."
        },
        {
            WhyChooseheading: "Useful For Family And Corporate Travel",
            WhyChoosedescription: "The vehicle works well for family outings, business transportation, employee movement, client visits, weddings, and other situations where passengers prefer to travel together."
        },
        {
            WhyChooseheading: "Distance-Based Rental Planning",
            WhyChoosedescription: "Customers can consider their route distance, travel duration, passenger count, and vehicle requirement while planning an Ertiga rental that fits their specific journey."
        },
        {
            WhyChooseheading: "Advance Ertiga Booking",
            WhyChoosedescription: "Planning the Ertiga booking in advance makes it easier to organize transportation for holidays, airport transfers, family functions, weekend trips, religious journeys, and scheduled outstation travel."
        }
    ]
};


const faqData = [
    {
        question: "Can I hire an Ertiga in Pune from Virendra Cab?",
        answer: "Virendra Cab can arrange Ertiga hire options in Pune for local travel, airport transfers, family outings, business requirements, and outstation journeys, depending on vehicle availability and the planned travel schedule."
    },
    {
        question: "Is Ertiga suitable for family travel from Pune?",
        answer: "Ertiga can be considered for families looking for practical seating and luggage space during local or outstation journeys. The vehicle requirement can be discussed according to passenger count, luggage, travel distance, and trip duration."
    },
    {
        question: "Can I hire an Ertiga for an outstation trip from Pune?",
        answer: "Travellers can enquire about hiring an Ertiga for destinations such as Mumbai, Nashik, Shirdi, Mahabaleshwar, Kolhapur, Goa, and other outstation routes. The travel date, destination, passenger count, and itinerary can be discussed beforehand."
    },
    {
        question: "Is one-way Ertiga hire available from Pune?",
        answer: "Passengers travelling from Pune to another city can enquire about a one-way Ertiga arrangement. The pickup location, destination, travel date, preferred timing, and luggage requirements can be shared while planning the journey."
    },
    {
        question: "Can I hire an Ertiga for a round-trip journey from Pune?",
        answer: "A round-trip Ertiga can be considered when travellers need transportation to an outstation destination and back to Pune. The return date, expected duration, sightseeing plans, and overall itinerary can be discussed during the enquiry."
    },
    {
        question: "Can I hire an Ertiga for Pune airport transfers?",
        answer: "An Ertiga can be considered for Pune airport pickup and drop requirements when passengers need practical seating and luggage space. Customers can share their flight timing, pickup or drop location, passenger count, and luggage details."
    },
    {
        question: "Can an Ertiga be hired for sightseeing near Pune?",
        answer: "Private Ertiga travel can be planned for sightseeing around Pune and nearby destinations such as Lonavala, Khandala, Lavasa, Sinhagad, Mahabaleshwar, and other preferred locations according to the planned itinerary."
    },
    {
        question: "Is Ertiga suitable for group travel in Pune?",
        answer: "Small groups can enquire about hiring an Ertiga for weekend trips, family functions, pilgrimages, airport journeys, or outstation travel. Vehicle suitability can be discussed based on the number of passengers and luggage."
    },
    {
        question: "Can I hire an Ertiga in Pune for business travel?",
        answer: "Business travellers can enquire about Ertiga hire for client meetings, corporate visits, conferences, airport transfers, and professional journeys. Pickup points and travel timings can be coordinated according to the work schedule."
    },
    {
        question: "What details are required for Ertiga hire in Pune?",
        answer: "Customers can provide the pickup location, destination, travel date, preferred departure time, passenger count, luggage details, one-way or round-trip requirement, and expected trip duration when enquiring about Ertiga hire in Pune."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Nilesh Gaikwad",
        feedback: "Our family needed a practical vehicle in Pune for an outstation visit with luggage. The Ertiga arranged through Virendra Cab matched our group size, and the travel details were coordinated clearly before the journey.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Sakshi Jadhav",
        feedback: "For a weekend trip with friends, we wanted a private vehicle rather than arranging separate transportation. The Ertiga hire enquiry with Virendra Cab was handled according to our passenger count, pickup location, and planned destination.",
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
  "name": "Ertiga Hire in Pune",
  "image": "https://www.virendracabs.com/assets/images/ertiga-hire-in-pune.webp",
  "description": "Ertiga Hire in Pune is a practical choice for families, small groups, business travelers, airport transfers, sightseeing and outstation journeys that require a spacious and comfortable vehicle. Virendra Cab provides Ertiga rental options for customers searching for Ertiga on Rent in Pune, Ertiga on Rent Pune and Ertiga Car on Rent in Pune. The vehicle is suitable for passengers who need comfortable seating along with useful luggage space for local and long-distance travel. Customers can enquire about Ertiga rental for Pune city trips, airport transportation, family functions, sightseeing plans and intercity journeys. Those looking for an Ertiga CNG rental or Ertiga hire for an extended trip can discuss the available vehicle and current rental terms according to their travel requirements. One-way and round-trip arrangements can also be planned for outstation destinations, with pickup timing and route details confirmed before the journey. Rental requirements may vary according to distance, duration, passenger count and selected travel plan, so current fare details can be confirmed directly with Virendra Cab. Families and groups can choose a suitable Ertiga arrangement when traveling with luggage or planning longer road journeys. Whether the requirement is a local Pune rental, airport pickup and drop, Pune Mumbai travel or an outstation trip, Ertiga Hire in Pune offers a convenient way to arrange private transportation according to the planned itinerary.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.virendracabs.com/ertiga-hire-in-pune"
  }
};






    return (
        <div>

<Helmet>
  <title>
    Ertiga Hire in Pune | Ertiga Car Rental Pune | +91 9022549022
  </title>

  <meta
    name="description"
    content="Hire an Ertiga in Pune for family trips, airport transfers, local travel and outstation journeys. Get Ertiga on Rent in Pune and convenient rental options with Virendra Cab."
  />

  <meta
    name="keywords"
    content="Ertiga Hire in Pune, Ertiga on Rent in Pune, Ertiga on Rent Pune, Ertiga Car on Rent in Pune, Ertiga Rental Pune, Ertiga Car Rental Pune, Ertiga Hire Pune, Ertiga Taxi Rental Pune, Ertiga Booking Pune, Ertiga Car Hire Pune, Ertiga CNG on Rent in Pune, Ertiga CNG Rental Pune, Ertiga Rent in Pune, Ertiga Rent Per Km in Pune, Ertiga Car Rental Per Km Pune, Ertiga for Outstation Pune, Ertiga on Rent for Outstation Pune, Ertiga for Airport Transfer Pune, Ertiga One Way Rental Pune, Ertiga Round Trip Rental Pune, Pune Ertiga Car Rental, Pune Ertiga Taxi Service, Ertiga Cab in Pune, Ertiga Private Car Rental Pune, Ertiga Rental for Family Pune, Ertiga Rental for Group Travel Pune, Ertiga Car Hire for Outstation Pune"
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
                            <img src='/images/keyword/26.jpg' alt='img' className='img-fluid' />
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

export default Ertigahireinpune ;