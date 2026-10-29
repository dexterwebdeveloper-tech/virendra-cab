import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Punetoahilyanagarcabs() {



const cardData = {
    keyword: "Pune to Ahilyanagar Cabs",
    headingDescription: "Pune to Ahilyanagar Cabs provide a convenient and comfortable option for travellers planning business trips, family visits, personal journeys, and outstation travel between Pune and Ahilyanagar. Virendra Cab offers flexible one-way and round-trip options with sedan, SUV, and Ertiga vehicles, making it easier to choose a cab according to passenger count, luggage, schedule, and travel requirements. With online booking support, planned pickups, and route-focused service, passengers can arrange their Pune to Ahilyanagar journey with greater convenience and confidence.",
    topPlaces: [
        {
            title: "Ahilyanagar City",
            description: "Reach Ahilyanagar city conveniently with a private cab from Pune, suitable for family visits, business travel, and personal requirements."
        },
        {
            title: "Ahmednagar Fort",
            description: "Travel to the historic Ahmednagar Fort with a comfortable cab option that allows visitors to explore this important destination at their own pace."
        },
        {
            title: "Cavalry Tank Museum",
            description: "A private taxi makes it convenient for travellers to visit the Cavalry Tank Museum while enjoying a flexible and comfortable journey."
        },
        {
            title: "Shirdi",
            description: "Extend your journey toward Shirdi with a suitable cab option for pilgrims and families looking to combine Ahilyanagar travel with a temple visit."
        },
        {
            title: "Ranjangaon",
            description: "Ranjangaon can be included as a convenient stop during a wider Pune and Ahilyanagar travel plan, especially for religious and family trips."
        },
        {
            title: "Bhandardara",
            description: "Travellers planning an extended Maharashtra outing can choose a comfortable vehicle for reaching Bhandardara and its surrounding natural attractions."
        },
        {
            title: "Mula Dam",
            description: "A cab journey provides flexible access to Mula Dam and nearby scenic areas for travellers interested in a relaxed day trip."
        },
        {
            title: "Salabat Khan Tomb",
            description: "Explore the historic Salabat Khan Tomb with the convenience of a private vehicle and a journey planned around your preferred schedule."
        },
        {
            title: "Rehkuri Blackbuck Sanctuary",
            description: "Nature enthusiasts can plan a visit to Rehkuri Blackbuck Sanctuary with a suitable outstation cab for a comfortable and flexible trip."
        },
        {
            title: "Shani Shingnapur",
            description: "A private cab can make travel to Shani Shingnapur easier for devotees and families who want convenient pickup and drop arrangements."
        }
    ],
    services: [
        {
            name: "Pune To Ahilyanagar Cab Service",
            description: "Virendra Cab provides comfortable Pune to Ahilyanagar cab service for business trips, family travel, personal visits, and planned outstation journeys with convenient pickup and drop arrangements."
        },
        {
            name: "Pune To Ahilyanagar Taxi Service",
            description: "Choose a reliable taxi service from Pune to Ahilyanagar with vehicle options suited to different group sizes, luggage requirements, and travel schedules."
        },
        {
            name: "Pune To Ahilyanagar Cab Booking",
            description: "Pune to Ahilyanagar cab booking can be arranged in advance so travellers can select their preferred vehicle and plan the journey according to their pickup requirements."
        },
        {
            name: "Pune To Ahilyanagar One-Way Cab",
            description: "A one-way cab is suitable for passengers who need a direct drop in Ahilyanagar without arranging a return journey, making it practical for flexible travel plans."
        },
        {
            name: "Pune To Ahilyanagar Round-Trip Cab",
            description: "Round-trip cab service works well for travellers planning a return journey to Pune, with the flexibility to coordinate both onward and return travel."
        },
        {
            name: "Pune To Ahilyanagar Outstation Taxi",
            description: "For planned intercity travel, an outstation taxi from Pune to Ahilyanagar offers a private and comfortable alternative to shared transportation."
        },
        {
            name: "Pune To Ahilyanagar Cab Fare",
            description: "Travellers can enquire about the Pune to Ahilyanagar cab fare based on vehicle type, trip plan, distance, and whether the booking is one-way or round trip."
        },
        {
            name: "Pune To Ahilyanagar Taxi Fare",
            description: "Taxi fare for the Pune to Ahilyanagar route can be checked before confirming the trip, helping passengers choose an option that matches their travel budget."
        },
        {
            name: "Pune To Ahilyanagar Cab Charges",
            description: "Pune to Ahilyanagar cab charges depend on the selected vehicle and journey requirements, allowing passengers to discuss applicable trip details before booking."
        },
        {
            name: "Affordable Cab From Pune To Ahilyanagar",
            description: "Passengers looking for an economical travel option can compare suitable vehicle categories and choose an affordable cab from Pune to Ahilyanagar according to their requirements."
        },
        {
            name: "Best Cab Service Pune To Ahilyanagar",
            description: "Travellers comparing cab services for the route can select Virendra Cab for planned pickups, comfortable vehicles, responsive booking assistance, and dedicated outstation travel."
        },
        {
            name: "Book Cab From Pune To Ahilyanagar",
            description: "Booking a cab from Pune to Ahilyanagar allows passengers to arrange a private journey in advance with suitable pickup timing and vehicle selection."
        },
        {
            name: "Pune To Ahilyanagar Car Rental",
            description: "Pune to Ahilyanagar car rental is useful for travellers who prefer private transportation and want a vehicle selected according to the duration and purpose of their trip."
        },
        {
            name: "Pune To Ahilyanagar Private Cab",
            description: "A private cab provides passengers with a dedicated vehicle for the Pune to Ahilyanagar journey, offering greater privacy and flexibility than shared travel."
        },
        {
            name: "Pune To Ahilyanagar Sedan Cab",
            description: "Sedan cabs are a practical choice for small families, couples, and business travellers seeking comfortable seating and adequate luggage space for the route."
        },
        {
            name: "Pune To Ahilyanagar SUV Cab",
            description: "An SUV cab is suitable for travellers requiring additional cabin space, luggage capacity, or a comfortable vehicle for longer outstation journeys."
        },
        {
            name: "Pune To Ahilyanagar Ertiga Cab",
            description: "The Ertiga cab option can accommodate families and small groups comfortably, making it a useful choice for passengers travelling together from Pune to Ahilyanagar."
        },
        {
            name: "Pune To Ahilyanagar Taxi Booking",
            description: "Taxi booking for the Pune to Ahilyanagar route can be planned ahead of time with vehicle selection and pickup details arranged around the passenger's schedule."
        },
        {
            name: "Pune To Ahilyanagar Cab Contact Number",
            description: "Travellers can use the cab contact support to enquire about availability, vehicle categories, fare details, pickup arrangements, and other booking requirements."
        },
        {
            name: "Reliable Cab Service Pune To Ahilyanagar",
            description: "A reliable cab service helps travellers plan their Pune to Ahilyanagar journey with organized pickup arrangements, suitable vehicles, and dedicated route assistance."
        },
        {
            name: "Pune To Ahilyanagar Drop Taxi",
            description: "A drop taxi is convenient for passengers who require direct transportation from Pune to their destination in Ahilyanagar without arranging a return booking."
        },
        {
            name: "Pune To Ahilyanagar Round-Trip Taxi",
            description: "Travellers with a planned return schedule can choose a round-trip taxi that supports both the Pune to Ahilyanagar journey and the return travel requirement."
        },
        {
            name: "Pune To Ahilyanagar Cab Online Booking",
            description: "Online cab booking makes it easier to submit travel details, select a preferred vehicle, and coordinate the Pune pickup before beginning the journey."
        },
        {
            name: "Pune To Ahilyanagar Airport Pickup Cab",
            description: "Airport pickup cab service can be arranged for passengers travelling from Pune Airport toward Ahilyanagar, providing convenient onward transportation after their flight."
        }
    ],
    tableData: [
        ["Pune To Ahilyanagar Cab Service"],
        ["Pune To Ahilyanagar Taxi Service"],
        ["Pune To Ahilyanagar Cab Booking"],
        ["Pune To Ahilyanagar One-Way Cab"],
        ["Pune To Ahilyanagar Round-Trip Cab"],
        ["Pune To Ahilyanagar Outstation Taxi"],
        ["Pune To Ahilyanagar Cab Fare"],
        ["Pune To Ahilyanagar Taxi Fare"],
        ["Pune To Ahilyanagar Cab Charges"],
        ["Affordable Cab From Pune To Ahilyanagar"],
        ["Best Cab Service Pune To Ahilyanagar"],
        ["Book Cab From Pune To Ahilyanagar"],
        ["Pune To Ahilyanagar Car Rental"],
        ["Pune To Ahilyanagar Private Cab"],
        ["Pune To Ahilyanagar Sedan Cab"],
        ["Pune To Ahilyanagar SUV Cab"],
        ["Pune To Ahilyanagar Ertiga Cab"],
        ["Pune To Ahilyanagar Taxi Booking"],
        ["Pune To Ahilyanagar Cab Contact Number"],
        ["Reliable Cab Service Pune To Ahilyanagar"],
        ["Pune To Ahilyanagar Drop Taxi"],
        ["Pune To Ahilyanagar Round-Trip Taxi"],
        ["Pune To Ahilyanagar Cab Online Booking"],
        ["Pune To Ahilyanagar Airport Pickup Cab"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Comfortable Intercity Travel",
            WhyChoosedescription: "Virendra Cab offers comfortable vehicles for the Pune to Ahilyanagar route, helping passengers enjoy a relaxed journey whether travelling alone, with family, or as a small group."
        },
        {
            WhyChooseheading: "Flexible One-Way And Return Options",
            WhyChoosedescription: "Travel plans can vary, so passengers can choose a one-way drop or round-trip arrangement based on their schedule and destination requirements."
        },
        {
            WhyChooseheading: "Multiple Vehicle Choices",
            WhyChoosedescription: "Sedan, SUV, and Ertiga options provide flexibility for different passenger counts, luggage volumes, and comfort preferences during the outstation journey."
        },
        {
            WhyChooseheading: "Planned Pickup Service",
            WhyChoosedescription: "Pickup details can be coordinated in advance so travellers can start their Pune to Ahilyanagar journey from a convenient location at a suitable time."
        },
        {
            WhyChooseheading: "Suitable For Families And Groups",
            WhyChoosedescription: "Families and small groups can select a vehicle with appropriate seating and luggage capacity, making the route more convenient than arranging separate transportation."
        },
        {
            WhyChooseheading: "Transparent Booking Assistance",
            WhyChoosedescription: "Passengers can discuss vehicle availability, trip type, fare-related details, and pickup requirements before confirming their Pune to Ahilyanagar cab."
        },
        {
            WhyChooseheading: "Private Door-To-Door Journey",
            WhyChoosedescription: "A dedicated cab provides direct transportation between the pickup point in Pune and the desired destination in Ahilyanagar, reducing unnecessary transfers."
        },
        {
            WhyChooseheading: "Convenient Online Enquiry",
            WhyChoosedescription: "Travellers can enquire about Pune to Ahilyanagar cab availability and make advance arrangements, making the booking process easier for planned outstation trips."
        }
    ]
};


const faqData = [
    {
        question: "How can I book Pune to Ahilyanagar Cabs with Virendra Cab?",
        answer: "To book Pune to Ahilyanagar Cabs, share your Pune pickup location, travel date, preferred departure time, passenger count, and vehicle preference. The journey can be planned according to whether you need one-way travel, a return trip, or transportation for business and family purposes."
    },
    {
        question: "Is one-way cab service available from Pune to Ahilyanagar?",
        answer: "One-way cab travel can be arranged for passengers who only need transportation from Pune to Ahilyanagar. This can be convenient for relocation, business visits, family travel, or passengers who have separate arrangements for their return journey."
    },
    {
        question: "Can I book a return cab from Ahilyanagar to Pune?",
        answer: "Return travel can be included when arranging the Pune to Ahilyanagar journey. You can provide your preferred return date and timing so the cab arrangement fits your visit, work schedule, family plans, or other commitments."
    },
    {
        question: "What type of vehicles can I choose for Pune to Ahilyanagar Cabs?",
        answer: "Vehicle selection can be based on passenger numbers, luggage, and travel requirements. Sedan cars can suit smaller groups, while SUVs or Innova-type vehicles may be considered for families and groups looking for additional seating and luggage space."
    },
    {
        question: "Can families use Pune to Ahilyanagar Cabs for a comfortable trip?",
        answer: "Families can choose a private cab for the Pune to Ahilyanagar route when they prefer traveling together with luggage and flexible stops. The vehicle can be selected according to the size of the family and the overall journey requirements."
    },
    {
        question: "Is the Pune to Ahilyanagar cab suitable for business travel?",
        answer: "Business travelers can use the route for meetings, office visits, client appointments, industrial work, and other professional requirements. A private cab can provide convenient point-to-point transportation without depending on multiple local travel options."
    },
    {
        question: "Can I request stops during the Pune to Ahilyanagar journey?",
        answer: "Travelers can discuss suitable breaks while planning the trip. Depending on the schedule, stops for refreshments, meals, rest, or other planned requirements can be included without disrupting the overall travel itinerary."
    },
    {
        question: "Can I carry luggage in Pune to Ahilyanagar Cabs?",
        answer: "Normal travel luggage can be accommodated based on the selected vehicle. If your group has several suitcases, business equipment, or additional bags, mentioning the luggage requirement during booking helps in choosing an appropriate vehicle."
    },
    {
        question: "Can I book a cab from Pune to Ahilyanagar for a same-day trip?",
        answer: "A same-day return journey can be planned when the schedule allows sufficient travel and visit time. This option may be useful for business appointments, family work, official visits, or personal errands that require returning to Pune on the same day."
    },
    {
        question: "How early should I reserve Pune to Ahilyanagar Cabs?",
        answer: "Advance booking is helpful when you have a fixed travel date, particularly during weekends, holidays, family functions, or busy travel periods. Sharing the pickup time, passenger count, and vehicle preference beforehand makes trip planning more convenient."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Nikhil Pawar",
        feedback: "I had a scheduled business visit in Ahilyanagar and preferred traveling directly from Pune instead of changing vehicles. The private cab made the journey convenient, and I could plan the departure around my meeting time.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Sonali Jagtap",
        feedback: "Our family needed to travel from Pune to Ahilyanagar with several bags for a family function. The cab gave us enough space to stay together, and having a direct journey made the overall travel much more comfortable.",
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
  "name": "Pune to Ahilyanagar Cabs",
  "image": "https://www.virendracabs.com/assets/images/pune-to-ahilyanagar-cabs.webp",
  "description": "Pune to Ahilyanagar Cabs provide convenient private transportation for passengers travelling between Pune and Ahilyanagar for business, family visits, personal work, educational trips and intercity travel. Virendra Cab supports customers searching for Pune to Ahilyanagar Cab Service, Pune to Ahilyanagar Taxi Service, Pune to Ahilyanagar Cab Booking, Pune to Ahilyanagar One-Way Cab and Pune to Ahilyanagar Round-Trip Cab with suitable vehicle options based on passenger count, luggage and travel requirements. A private cab offers direct door-to-door transportation without the need to change vehicles during the journey. Pune to Ahilyanagar Cab Booking can be arranged for pickup from homes, offices, hotels, residential areas, railway stations or other convenient locations across Pune. One-way cab services are suitable for passengers who only require a direct drop in Ahilyanagar, while round-trip bookings can be planned when the same vehicle is required for the return journey. Customers searching for Pune to Ahilyanagar Cab Fare, Pune to Ahilyanagar Taxi Fare or Pune to Ahilyanagar Cab Price can contact Virendra Cab for the latest applicable fare, as pricing depends on the selected vehicle, pickup point, travel date, route, trip type and itinerary. Sedan, SUV, Ertiga, Innova and Innova Crysta options can be considered for individual passengers, families, corporate travellers and groups. The service can also be useful for passengers travelling towards Ahmednagar and nearby areas for business, personal or family requirements. Travellers can select a comfortable vehicle according to the number of passengers and amount of luggage being carried. Return transportation from Ahilyanagar to Pune can also be arranged for customers searching for Ahilyanagar to Pune Cab or Ahilyanagar to Pune Taxi Service. Advance booking allows passengers to coordinate their pickup time and destination according to their schedule. Corporate travellers can use the service for meetings and business visits, while families can choose spacious vehicles for longer intercity journeys. The cab can also be combined with nearby travel requirements when passengers need transportation to surrounding destinations. Virendra Cab offers flexible one-way and round-trip transportation for customers looking for a comfortable Pune to Ahilyanagar intercity cab service.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.virendracabs.com/pune-to-ahilyanagar-cabs"
  }
};




    return (
        <div>

<Helmet>
  <title>
    Pune to Ahilyanagar Cabs | Pune to Ahilyanagar Taxi Service | +91 9022549022
  </title>

  <meta
    name="description"
    content="Book Pune to Ahilyanagar Cabs for comfortable one-way and round-trip travel. Get sedan, SUV, Ertiga, Innova and Innova Crysta options with convenient pickup from Pune."
  />

  <meta
    name="keywords"
    content="Pune to Ahilyanagar Cabs, Pune to Ahilyanagar cab service, Pune to Ahilyanagar taxi service, Pune to Ahilyanagar cab booking, Pune to Ahilyanagar one-way cab, Pune to Ahilyanagar round-trip cab, Pune to Ahilyanagar taxi, Pune to Ahilyanagar cab, Pune to Ahilyanagar one way taxi, Pune to Ahilyanagar round trip taxi, Pune to Ahilyanagar private cab, Pune to Ahilyanagar private taxi, Pune to Ahilyanagar outstation cab, Pune to Ahilyanagar outstation taxi, Pune to Ahilyanagar car rental, Pune to Ahilyanagar cab fare, Pune to Ahilyanagar taxi fare, Pune to Ahilyanagar cab price, Pune to Ahilyanagar taxi price, Pune to Ahilyanagar cab booking online, Pune to Ahilyanagar taxi booking, Pune Ahilyanagar cab service, Pune Ahilyanagar taxi service, Pune Ahilyanagar one way cab, Pune Ahilyanagar round trip cab, Best Pune to Ahilyanagar Cab, Reliable Pune to Ahilyanagar Taxi, Affordable Pune to Ahilyanagar Cab, Pune to Ahilyanagar Sedan Cab, Pune to Ahilyanagar Sedan Taxi, Pune to Ahilyanagar SUV Cab, Pune to Ahilyanagar SUV Taxi, Pune to Ahilyanagar Ertiga Cab, Pune to Ahilyanagar Ertiga Taxi, Pune to Ahilyanagar Innova Cab, Pune to Ahilyanagar Innova Taxi, Pune to Ahilyanagar Innova Crysta Cab, Pune to Ahilyanagar Innova Crysta Taxi, Pune to Ahilyanagar family cab, Pune to Ahilyanagar corporate cab, Pune to Ahilyanagar business taxi, Pune to Ahilyanagar group cab, Pune to Ahilyanagar private car, Pune to Ahilyanagar intercity cab, Pune to Ahilyanagar intercity taxi, Pune to Ahilyanagar long distance cab, Pune to Ahilyanagar travel cab, Pune to Ahilyanagar return cab, Pune to Ahilyanagar round trip taxi, Ahilyanagar to Pune Cab, Ahilyanagar to Pune Taxi, Ahilyanagar to Pune Cab Service, Ahilyanagar to Pune Taxi Service, Ahilyanagar to Pune One Way Cab, Ahilyanagar to Pune Round Trip Cab, Pune to Ahmednagar Cab, Pune to Ahmednagar Taxi, Pune to Ahmednagar Cab Service, Pune to Ahmednagar One Way Cab, Pune to Ahmednagar Round Trip Cab"
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
                            <img src='/images/keyword/118.jpg' alt='img' className='img-fluid' />
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

export default Punetoahilyanagarcabs ;