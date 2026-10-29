import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Onlinecabbookingpune() {



const cardData = {
    keyword: "Online Cab Booking Pune",
    headingDescription: "Online Cab Booking Pune makes it convenient for passengers to arrange local rides, airport transfers and outstation journeys from anywhere. Virendra Cab provides online booking options for individuals, families, business travellers and groups, with vehicle choices based on passenger capacity, luggage and destination. Customers can plan journeys such as Pune to Mumbai, Shirdi, Nashik, Goa, Bangalore and Hyderabad while selecting a suitable cab according to their travel schedule and requirements.",
    topPlaces: [
        {
            title: "Nashik",
            description: "Nashik is a popular outstation destination from Pune where travellers can conveniently arrange an online cab for business visits, family trips, pilgrimage travel and sightseeing."
        },
        {
            title: "Panchgani",
            description: "Panchgani is a scenic hill destination suitable for weekend and family travel, allowing passengers to book a private cab online according to their preferred schedule."
        },
        {
            title: "Aurangabad",
            description: "Aurangabad is a useful destination for business, heritage and family journeys from Pune, with online cab booking providing convenient door-to-door transportation."
        },
        {
            title: "Kolhapur",
            description: "Kolhapur attracts travellers from Pune for business, family and sightseeing trips, and an online cab can be arranged in advance for a comfortable road journey."
        },
        {
            title: "Bangalore",
            description: "Bangalore is a major long-distance destination where passengers can plan an intercity cab booking from Pune with vehicle options suited to extended road travel."
        },
        {
            title: "Shirdi",
            description: "Shirdi is an important pilgrimage destination where families and devotees can arrange their Pune cab booking online before starting their journey."
        },
        {
            title: "Goa",
            description: "Goa is suitable for longer leisure trips from Pune, and advance online cab booking allows travellers to plan private road transportation around their itinerary."
        },
        {
            title: "Mahabaleshwar",
            description: "Mahabaleshwar is a popular hill getaway where families and groups can book a private cab online for flexible sightseeing and comfortable travel from Pune."
        }
    ],
    services: [
        {
            name: "Online Cab Booking Pune",
            description: "Virendra Cab allows passengers to plan their Pune cab journey online by selecting their destination, travel date, vehicle preference and passenger requirements for convenient transportation."
        },
        {
            name: "Onlinecabbooking Pune",
            description: "Onlinecabbooking Pune helps travellers arrange private transportation in advance for local rides, airport transfers and outstation journeys according to their preferred schedule."
        },
        {
            name: "Online Auto Booking In Pune",
            description: "Passengers looking for convenient online auto booking in Pune can plan their short-distance transportation in advance, making everyday travel easier for personal and local requirements."
        },
        {
            name: "Taxi Booking Pune",
            description: "Taxi booking in Pune can be arranged online for local transportation, airport transfers and longer journeys, with vehicle selection based on passenger and luggage requirements."
        },
        {
            name: "Online Taxi Booking Pune",
            description: "Travellers can arrange an online taxi booking in Pune before their journey, helping them organize pickup details and select a suitable vehicle for their destination."
        },
        {
            name: "Mumbai Airport To Pune Taxi Online Booking",
            description: "Passengers arriving at Mumbai Airport can arrange a Pune-bound taxi online in advance, making airport-to-city transportation convenient for individuals, families and business travellers."
        },
        {
            name: "Pune To Shirdi Cab Booking Online",
            description: "Devotees and families travelling from Pune to Shirdi can book a private cab online with vehicle options suited to the number of passengers, luggage and planned return schedule."
        },
        {
            name: "Online Car Booking In Pune",
            description: "Online car booking in Pune provides a convenient way to arrange private transportation for city travel, airport transfers, business trips, family journeys and outstation routes."
        },
        {
            name: "Online Taxi Pune",
            description: "Passengers can arrange an online taxi in Pune for planned local and outstation journeys, making it easier to coordinate transportation before the required travel time."
        },
        {
            name: "Online Cab Services In Pimpri Chinchwad",
            description: "Online cab services in Pimpri Chinchwad help residents, employees and business travellers arrange private transportation for local movement, airport travel and outstation destinations."
        },
        {
            name: "Online Cab Services In Pimpri Chinchwad Contact Number",
            description: "Passengers looking for online cab services in Pimpri Chinchwad can use the available booking contact channel to coordinate vehicle requirements, pickup details, destinations and travel schedules."
        },
        {
            name: "Online Cab Service Innova Crysta",
            description: "Passengers requiring a spacious premium vehicle can arrange an Innova Crysta online for family travel, corporate journeys, airport transfers and comfortable long-distance road trips."
        },
        {
            name: "Online Cab Services In Innova Cabs",
            description: "Online cab arrangements with Innova vehicles are suitable for families and groups requiring additional seating and luggage space for local and outstation journeys."
        },
        {
            name: "Online Cab Service In Pune",
            description: "Virendra Cab supports online cab booking in Pune for local travel, airport transfers and outstation journeys, allowing passengers to plan transportation around their preferred schedule."
        },
        {
            name: "Ertiga Outstation Booking Pune",
            description: "Travellers can arrange an Ertiga for outstation travel from Pune through online booking, making it suitable for families and small groups requiring practical seating and luggage capacity."
        },
        {
            name: "Online Cab Booking Pune",
            description: "Online cab booking gives Pune passengers a convenient way to organize private transportation for daily travel, airport transfers, business requirements and longer road journeys."
        },
        {
            name: "Online Taxi Booking Pune",
            description: "Customers can arrange an online taxi in Pune by sharing their destination and travel requirements, helping them plan suitable private transportation before departure."
        },
        {
            name: "Online Cab Service In Pune",
            description: "Online cab service in Pune provides flexible transportation for individuals, families and professionals travelling within the city or planning trips to nearby and long-distance destinations."
        },
        {
            name: "Online Cabs In Pune",
            description: "Passengers can choose online cabs in Pune for convenient local rides, airport transfers and outstation journeys, with vehicle selection based on passenger count and travel needs."
        },
        {
            name: "Online Taxi Pune",
            description: "Online taxi booking makes it easier for Pune travellers to organize private transportation for scheduled journeys, including city travel and intercity routes."
        },
        {
            name: "Taxi Booking In Pune",
            description: "Taxi booking in Pune can be planned according to the pickup location, destination, passenger count and preferred vehicle, making private travel more organized and convenient."
        },
        {
            name: "Pune To Mumbai Cab Booking",
            description: "Passengers travelling from Pune to Mumbai can arrange their private cab booking online and select a vehicle suitable for business travel, family trips or personal journeys."
        },
        {
            name: "Pune To Mumbai Airport Cab",
            description: "Travellers heading from Pune to Mumbai Airport can schedule a private cab in advance, with pickup planning based on their flight timing, luggage and preferred vehicle."
        },
        {
            name: "Pune To Shirdi Cab Booking",
            description: "A Pune to Shirdi cab can be booked in advance for devotees, families and groups seeking private transportation with convenient pickup and comfortable road travel."
        },
        {
            name: "Pune To Nashik Cab Service",
            description: "Passengers travelling from Pune to Nashik can arrange a private cab for business, family, pilgrimage or sightseeing purposes with vehicle options suited to their journey."
        },
        {
            name: "Pune To Mahabaleshwar Cab",
            description: "Pune to Mahabaleshwar cab service is suitable for weekend trips, family holidays and sightseeing, with private vehicles that can be planned around the traveller's itinerary."
        },
        {
            name: "Pune To Lonavala Cab Booking",
            description: "Travellers can book a private cab from Pune to Lonavala online for weekend outings, family trips and sightseeing while selecting a vehicle appropriate for their group size."
        },
        {
            name: "Pune To Goa Cab Service",
            description: "A private cab from Pune to Goa provides flexible road transportation for families and groups planning longer leisure journeys, with advance booking available for better trip coordination."
        },
        {
            name: "Pune To Kolhapur Cab",
            description: "Passengers travelling to Kolhapur can arrange a private cab from Pune for personal, business, family and sightseeing journeys with suitable vehicle choices."
        },
        {
            name: "Pune To Bangalore Cab",
            description: "Pune to Bangalore is a long-distance road route where travellers can select a suitable private cab according to passenger count, luggage and the duration of the journey."
        },
        {
            name: "Pune To Hyderabad Cab",
            description: "Travellers planning a Pune to Hyderabad road journey can arrange a private cab in advance with vehicle options designed for comfortable long-distance transportation."
        },
        {
            name: "Online Cab Booking Pune",
            description: "Virendra Cab enables passengers to plan Pune cab travel online for local and outstation journeys, making it easier to coordinate destinations, pickup details and vehicle preferences."
        },
        {
            name: "Pune Cab Booking Online",
            description: "Pune cab booking online allows customers to organize private transportation before travelling, whether the requirement is a city ride, airport transfer or intercity journey."
        },
        {
            name: "Online Taxi Booking Pune",
            description: "Online taxi booking in Pune helps passengers arrange suitable transportation in advance, with options for individual travel, family trips, business movement and airport transfers."
        },
        {
            name: "Cab Service In Pune",
            description: "Virendra Cab provides private cab transportation in Pune for local and outstation requirements, supporting passengers with vehicle choices based on their route and group size."
        },
        {
            name: "Taxi Service Pune",
            description: "Taxi service in Pune is suitable for daily transportation, airport transfers, business travel and planned outstation trips, with private vehicle options for different passenger requirements."
        },
        {
            name: "Book Cab Online Pune",
            description: "Passengers can book a cab online in Pune by planning their destination, pickup details and vehicle preference in advance for a smoother local or outstation journey."
        },
        {
            name: "Online Taxi Service Pune",
            description: "Online taxi service in Pune provides a convenient booking method for passengers who want to arrange private transportation ahead of time for city and intercity travel."
        },
        {
            name: "Pune Taxi Booking",
            description: "Pune taxi booking can be arranged according to the traveller's destination, travel schedule and vehicle requirement, making it useful for personal, family and business transportation."
        },
        {
            name: "Cab Booking Pune",
            description: "Cab booking in Pune helps passengers organize convenient private transportation for local journeys, airport transfers and outstation trips with vehicle choices suited to their needs."
        }
    ],
    tableData: [
        ["Online Cab Booking Pune"],
        ["Onlinecabbooking Pune"],
        ["Online Auto Booking In Pune"],
        ["Taxi Booking Pune"],
        ["Online Taxi Booking Pune"],
        ["Mumbai Airport To Pune Taxi Online Booking"],
        ["Pune To Shirdi Cab Booking Online"],
        ["Online Car Booking In Pune"],
        ["Online Taxi Pune"],
        ["Online Cab Services In Pimpri Chinchwad"],
        ["Online Cab Services In Pimpri Chinchwad Contact Number"],
        ["Online Cab Service Innova Crysta"],
        ["Online Cab Services In Innova Cabs"],
        ["Online Cab Service In Pune"],
        ["Ertiga Outstation Booking Pune"],
        ["Online Cab Booking Pune"],
        ["Online Taxi Booking Pune"],
        ["Online Cab Service In Pune"],
        ["Online Cabs In Pune"],
        ["Online Taxi Pune"],
        ["Taxi Booking In Pune"],
        ["Pune To Mumbai Cab Booking"],
        ["Pune To Mumbai Airport Cab"],
        ["Pune To Shirdi Cab Booking"],
        ["Pune To Nashik Cab Service"],
        ["Pune To Mahabaleshwar Cab"],
        ["Pune To Lonavala Cab Booking"],
        ["Pune To Goa Cab Service"],
        ["Pune To Kolhapur Cab"],
        ["Pune To Bangalore Cab"],
        ["Pune To Hyderabad Cab"],
        ["Online Cab Booking Pune"],
        ["Pune Cab Booking Online"],
        ["Online Taxi Booking Pune"],
        ["Cab Service In Pune"],
        ["Taxi Service Pune"],
        ["Book Cab Online Pune"],
        ["Online Taxi Service Pune"],
        ["Pune Taxi Booking"],
        ["Cab Booking Pune"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Convenient Online Booking",
            WhyChoosedescription: "Passengers can organize their cab requirements online without needing to visit a booking office, making it easier to plan local rides, airport transfers and outstation journeys from Pune."
        },
        {
            WhyChooseheading: "Multiple Vehicle Choices",
            WhyChoosedescription: "Virendra Cab offers different vehicle categories for individual passengers, families and groups, allowing customers to consider seating, luggage capacity and journey distance before booking."
        },
        {
            WhyChooseheading: "Local And Outstation Travel",
            WhyChoosedescription: "The booking service supports everyday Pune transportation as well as longer journeys to destinations such as Mumbai, Goa, Shirdi, Nashik, Bangalore and Hyderabad."
        },
        {
            WhyChooseheading: "Airport Transfer Support",
            WhyChoosedescription: "Passengers can plan airport pickup and drop services in advance, making online cab booking useful for travellers with scheduled flights, luggage and specific departure requirements."
        },
        {
            WhyChooseheading: "Family-Friendly Cab Options",
            WhyChoosedescription: "Families can select vehicles according to their passenger count and luggage needs, making private cab travel suitable for holidays, pilgrimages, weekend trips and intercity journeys."
        },
        {
            WhyChooseheading: "Advance Journey Planning",
            WhyChoosedescription: "Booking a cab online allows travellers to organize their destination, pickup point, vehicle preference and travel schedule ahead of time for better journey coordination."
        },
        {
            WhyChooseheading: "Long-Distance Comfort",
            WhyChoosedescription: "For extended road journeys, passengers can select spacious vehicle categories that provide suitable seating and luggage capacity for comfortable travel between Pune and distant cities."
        },
        {
            WhyChooseheading: "Suitable For Business Travel",
            WhyChoosedescription: "Professionals can use online cab booking for airport transfers, client visits, intercity meetings and scheduled business travel, with private transportation arranged around their itinerary."
        }
    ]
};



const faqData = [
    {
        question: "How can I make an Online Cab Booking in Pune with Virendra Cab?",
        answer: "Virendra Cab allows travellers to enquire about cab bookings in Pune by sharing their pickup location, destination, travel date, preferred time, passenger count, luggage details, and vehicle preference. These details help in planning the required cab service."
    },
    {
        question: "Can I book a Pune cab online for local travel?",
        answer: "Local cab bookings can be arranged for travelling between residential areas, offices, railway stations, markets, hotels, and other destinations across Pune. Passengers can provide their route and preferred timing while making the booking enquiry."
    },
    {
        question: "Is online cab booking available for Pune Airport transfers?",
        answer: "Travellers can enquire about online cab arrangements for Pune Airport pickup and drop services. Flight timing, pickup address, destination, passenger count, and luggage information can be shared so the transportation can be planned accordingly."
    },
    {
        question: "Can I book an outstation cab online from Pune?",
        answer: "Online booking enquiries can be made for outstation journeys from Pune to destinations such as Mumbai, Lonavala, Mahabaleshwar, Nashik, Shirdi, Kolhapur, Goa, and other cities. The journey type and vehicle requirement can be discussed before confirmation."
    },
    {
        question: "Can I book a one-way cab through online booking in Pune?",
        answer: "Passengers travelling to another destination without requiring a return trip can enquire about one-way cab service. The complete pickup and drop details, travel date, departure time, passenger count, and preferred vehicle can be provided during the booking process."
    },
    {
        question: "Can families make an Online Cab Booking Pune for outstation travel?",
        answer: "Families can make a booking enquiry by providing the number of travellers, luggage requirements, pickup location, destination, and travel schedule. Vehicle selection can then be considered according to the group's space and comfort requirements."
    },
    {
        question: "Which areas of Pune can be selected for online cab pickup?",
        answer: "Online booking enquiries can be made for pickup locations across Pune, including Baner, Wakad, Hinjewadi, Kothrud, Hadapsar, Kharadi, Viman Nagar, Wagholi, Pimpri-Chinchwad, and other suitable areas."
    },
    {
        question: "Can I choose the vehicle while booking a cab online in Pune?",
        answer: "Vehicle preference can be shared during the online booking enquiry. The suitable category depends on passenger numbers, luggage, journey distance, and comfort requirements, allowing travellers to discuss an appropriate option before confirming the trip."
    },
    {
        question: "Can I make an online booking for Pune sightseeing?",
        answer: "Travellers can enquire about private cab bookings for Pune sightseeing and customized local itineraries. Popular places such as Shaniwar Wada, Aga Khan Palace, Sinhagad Fort, Dagdusheth Halwai Ganpati Temple, and Pataleshwar Cave Temple can be considered."
    },
    {
        question: "What information is required for an Online Cab Booking Pune?",
        answer: "Passengers can provide their pickup address, destination, travel date, preferred departure time, number of passengers, luggage details, one-way or round-trip requirement, and vehicle preference. Sharing complete information helps in discussing the booking requirements clearly."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Siddhant More",
        feedback: "I needed to arrange a cab from Pune for an early morning airport journey and preferred making the booking online. Virendra Cab discussed the pickup address, flight timing, passenger details, and vehicle requirement before arranging the trip.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Manisha Pawar",
        feedback: "A quick online enquiry helped us arrange a private cab for our Pune to Mahabaleshwar trip. The booking discussion covered our travel date, group size, luggage, pickup point, and preferred vehicle, making the planning process convenient.",
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
  "name": "Online Cab Booking Pune",
  "image": "https://www.virendracabs.com/assets/images/online-cab-booking-pune.webp",
  "description": "Online Cab Booking Pune provides a convenient way to arrange private transportation for local journeys, airport transfers, outstation trips and intercity travel. Virendra Cab offers booking support for customers searching for Online Cab Booking Pune, Online Cab Booking Pune, Online Auto Booking in Pune, Taxi Booking Pune and Online Taxi Booking Pune. Passengers can enquire about suitable cab options by sharing their pickup location, destination, travel date, preferred vehicle and journey type. Mumbai Airport to Pune Taxi Online Booking is useful for travelers arriving at Mumbai Airport who need a private transfer to Pune, while Pune to Shirdi Cab Booking Online provides a convenient option for passengers planning Sai Baba darshan or a pilgrimage trip. Online Car Booking in Pune can also be arranged for local city travel, business meetings, family transportation, shopping, appointments and planned sightseeing. Customers can choose from available sedan and other suitable vehicle categories according to passenger count, luggage requirements and comfort preferences. One-way cab bookings are suitable when transportation is needed only toward the destination, while round-trip bookings can be arranged when the same vehicle is required for the return journey. Online booking can also support airport pickup and drop services, railway station transfers, corporate travel and outstation routes from Pune. Passengers searching for Online Cab Booking Pune can contact Virendra Cab to confirm vehicle availability, pickup timing, route details and current fare information. Cab charges depend on the vehicle type, distance, duration, route and trip category, so the latest fare can be confirmed before booking. Advance online enquiry helps make the travel arrangement more organized and provides a convenient way to schedule private transportation for both local and long-distance journeys.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.virendracabs.com/online-cab-booking-pune"
  }
};






    return (
        <div>

<Helmet>
  <title>
    Online Cab Booking Pune | Taxi Booking Pune | +91 9022549022
  </title>

  <meta
    name="description"
    content="Book a cab online in Pune for local, airport and outstation travel. Get online taxi booking, car booking and routes such as Mumbai Airport to Pune and Pune to Shirdi."
  />

  <meta
    name="keywords"
    content="Online Cab Booking Pune, onlinecabbooking pune, Online Auto Booking in Pune, Taxi Booking Pune, Online Taxi Booking Pune, Mumbai Airport to Pune Taxi Online Booking, Pune to Shirdi Cab Booking Online, Online Car Booking in Pune, Online Cab Booking in Pune, Online Taxi Booking in Pune, Cab Booking Online Pune, Taxi Booking Online Pune, Online Car Rental Pune, Online Cab Service Pune, Online Taxi Service Pune, Online Cab Hire Pune, Online Taxi Hire Pune, Pune Cab Booking, Pune Taxi Booking, Pune Auto Booking, Pune Car Booking Online, Pune Airport Cab Booking Online, Pune Airport Taxi Booking Online, Pune Railway Station Cab Booking Online, Pune Railway Station Taxi Booking Online, Pune to Mumbai Cab Booking Online, Pune to Mumbai Taxi Booking Online, Pune to Shirdi Taxi Booking Online, Pune to Shirdi Cab Online, Pune Outstation Cab Booking Online, Pune Outstation Taxi Booking Online, One Way Cab Booking Pune, Round Trip Cab Booking Pune, Local Cab Booking Pune, Private Cab Booking Pune, Online Sedan Cab Booking Pune, Online Car Hire Pune, Cab Near Me Booking Pune"
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
                            <img src='/images/keyword/52.jpg' alt='img' className='img-fluid' />
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

export default Onlinecabbookingpune ;