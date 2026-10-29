import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Punetoshirdisedancabs() {



const cardData = {
    keyword: "Pune to Shirdi Sedan Cabs",
    headingDescription: "Pune to Shirdi Sedan Cabs from Virendra Cab provide a comfortable private travel option for devotees, families, couples, and small groups planning a pilgrimage to Shirdi. The journey can be arranged as a one-way transfer, round trip, same-day darshan trip, or customized pilgrimage itinerary, with sedan options suited to different passenger requirements. The commonly travelled road route connects Pune with Shirdi through the Ahmednagar and Sangamner corridors, with the overall road distance generally around 180–190 km depending on the route and pickup point. Travellers can also combine Shirdi with Shani Shingnapur, Ahmednagar, or other nearby religious destinations when planning a longer pilgrimage itinerary.",

    topPlaces: [
        {
            title: "Sai Baba Samadhi Mandir",
            description: "Make the revered Sai Baba Samadhi Mandir the main destination of your Pune to Shirdi pilgrimage and plan your sedan journey around your preferred darshan schedule."
        },
        {
            title: "Dwarkamai",
            description: "Include Dwarkamai in your Shirdi itinerary after darshan and conveniently travel between the major pilgrimage locations with a dedicated private sedan."
        },
        {
            title: "Shani Shingnapur",
            description: "Combine Shani Shingnapur with Shirdi for a two-temple pilgrimage route, an option commonly considered by devotees planning a same-day or extended cab journey. "
        },
        {
            title: "Chavadi",
            description: "Visit Chavadi as part of your Shirdi religious itinerary and include it alongside other important places associated with Sai Baba."
        },
        {
            title: "Gurusthan",
            description: "Add Gurusthan to your Shirdi darshan plan and use private sedan transportation to move conveniently between the temple complex and other selected destinations."
        },
        {
            title: "Ahmednagar",
            description: "Ahmednagar can be included as a stop or additional destination on a Pune to Shirdi journey, particularly for travellers planning a broader Maharashtra pilgrimage route."
        },
        {
            title: "Nashik",
            description: "Extend a Shirdi pilgrimage towards Nashik and Trimbakeshwar when additional temple sightseeing is required, creating a customized multi-destination outstation itinerary."
        }
    ],

    services: [
        {
            name: "Shirdi Sedan Cab From Pune",
            description: "Virendra Cab provides private sedan transportation from Pune to Shirdi for devotees and families seeking a comfortable journey with convenient pickup and destination drop arrangements."
        },
        {
            name: "Pune To Shirdi Sedan Taxi Service",
            description: "Pune to Shirdi sedan taxi service offers direct private transportation for pilgrims, couples, and small groups travelling to Shirdi for darshan or a short religious trip."
        },
        {
            name: "Pune To Shirdi Darshan Cab",
            description: "A dedicated darshan cab can be planned around the passenger's preferred temple visit schedule, allowing convenient travel from Pune to Shirdi and return transportation when required."
        },
        {
            name: "Pune To Shirdi Sai Baba Cab",
            description: "Travel to Shirdi Sai Baba Temple in a private sedan with a journey planned around your preferred departure time, darshan requirements, and return schedule."
        },
        {
            name: "Pune To Shirdi Tourist Taxi",
            description: "Tourist taxi service provides private transportation for visitors travelling from Pune to Shirdi, with the option to include nearby pilgrimage attractions within the itinerary."
        },
        {
            name: "Pune To Shirdi Budget Sedan Cab",
            description: "Travellers comparing economical private travel options can consider a sedan cab according to passenger count, journey type, and preferred one-way or return arrangement."
        },
        {
            name: "Pune To Shirdi Outstation Taxi",
            description: "An outstation taxi provides direct road transportation from Pune to Shirdi, making it practical for devotees planning one-way transfers, return journeys, or extended pilgrimage routes."
        },
        {
            name: "Pune To Shirdi Sedan Car Hire",
            description: "Sedan car hire gives passengers a private vehicle for the Pune to Shirdi journey, with flexible arrangements for darshan trips, family travel, and sightseeing."
        },
        {
            name: "Pune To Shirdi One Day Trip Cab",
            description: "A one-day trip cab can be arranged for travellers planning an early Pune departure, Shirdi darshan, optional nearby temple visits, and a return journey on the same day. "
        },
        {
            name: "Pune To Shirdi Family Tour Cab",
            description: "Families can choose a private sedan for their Shirdi pilgrimage, keeping everyone together while allowing practical planning around darshan, meals, breaks, and return travel."
        },
        {
            name: "Pune To Shirdi Sedan Cab",
            description: "A private sedan provides comfortable point-to-point transportation from Pune to Shirdi and can be arranged for both direct transfers and sightseeing-based pilgrimage trips."
        },
        {
            name: "Pune To Shirdi Sedan Taxi",
            description: "Pune to Shirdi sedan taxi service is suitable for couples, families, and small groups who prefer a dedicated air-conditioned vehicle for their pilgrimage journey."
        },
        {
            name: "Pune To Shirdi Sedan Cab Service",
            description: "Sedan cab service connects Pune and Shirdi through a private road journey with flexible pickup points, travel schedules, and one-way or round-trip requirements."
        },
        {
            name: "Pune To Shirdi Taxi Service",
            description: "A dedicated taxi can take passengers directly from Pune to Shirdi, providing a convenient alternative for travellers who prefer private road transportation."
        },
        {
            name: "Pune To Shirdi Cab Booking",
            description: "Advance cab booking helps pilgrims organize their vehicle, travel date, pickup location, darshan timing, and return requirements before starting the Shirdi journey."
        },
        {
            name: "Pune To Shirdi One Way Sedan Cab",
            description: "One-way sedan service is useful for passengers who require a private transfer from Pune to Shirdi without booking the same cab for the return journey."
        },
        {
            name: "Pune To Shirdi Round Trip Sedan Cab",
            description: "Round-trip sedan service is convenient for devotees planning to travel from Pune to Shirdi and return after completing their darshan, with the itinerary structured around their available time."
        },
        {
            name: "Pune To Shirdi Darshan Sedan Cab",
            description: "A darshan-focused sedan cab can be planned around the Shirdi temple visit, with suitable departure and return arrangements based on the passenger's preferred schedule."
        },
        {
            name: "Pune To Shirdi Outstation Sedan Cab",
            description: "Outstation sedan service provides private transportation for the Pune to Shirdi pilgrimage and can also accommodate longer itineraries covering nearby religious destinations."
        },
        {
            name: "Pune To Shirdi Online Cab Booking",
            description: "Online cab booking makes it convenient to arrange a private sedan in advance by sharing the travel date, pickup location, passenger details, and preferred trip type."
        },
        {
            name: "Pune To Shirdi Sedan Cab With Driver",
            description: "A sedan with driver allows passengers to focus on their pilgrimage while a dedicated driver handles the road journey, making the trip convenient for families and devotees."
        },
        {
            name: "AC Sedan Cab From Pune To Shirdi",
            description: "An air-conditioned sedan offers a comfortable environment for the Pune to Shirdi road journey, particularly for families and passengers travelling during warmer weather."
        },
        {
            name: "Pune To Shirdi Swift Dzire Cab",
            description: "Swift Dzire can be selected for Pune to Shirdi travel when passengers prefer a practical sedan suitable for couples, small families, or compact travel groups."
        },
        {
            name: "Pune To Shirdi Hyundai Aura Cab",
            description: "Hyundai Aura provides another sedan option for the Pune to Shirdi route, offering private transportation for devotees and small groups."
        },
        {
            name: "Pune To Shirdi Honda Amaze Cab",
            description: "Honda Amaze can be arranged for travellers seeking a private sedan for their Pune to Shirdi pilgrimage, including one-way and return travel requirements."
        },
        {
            name: "Pune To Shirdi Same Day Darshan Cab",
            description: "Same-day darshan cab service can be organized for travellers planning an early departure from Pune, temple darshan in Shirdi, and return travel later the same day. The actual return timing depends on traffic and temple queue conditions. "
        },
        {
            name: "Best Sedan Cab Service Pune To Shirdi",
            description: "Travellers comparing Pune to Shirdi sedan services can choose a private cab based on their preferred vehicle, passenger capacity, travel schedule, trip type, and pilgrimage requirements."
        },
        {
            name: "Pune To Shirdi Round Trip Sedan Taxi",
            description: "Round-trip sedan taxi service allows devotees to complete the Pune to Shirdi journey and return using a planned private transportation arrangement suited to their darshan schedule."
        },
        {
            name: "Pune To Shirdi Online Sedan Cab Booking",
            description: "Online sedan cab booking provides a convenient way to arrange the vehicle before the pilgrimage and communicate pickup, travel date, passenger, and return details."
        },
        {
            name: "Affordable Sedan Taxi Pune To Shirdi",
            description: "Passengers comparing affordable private travel can evaluate sedan taxi options according to their group size, journey type, vehicle category, and overall pilgrimage requirements."
        },
        {
            name: "Pune To Shani Shingnapur Cab",
            description: "A private cab from Pune to Shani Shingnapur can be combined with Shirdi for a broader pilgrimage itinerary, allowing devotees to cover both religious destinations in one planned journey. "
        },
        {
            name: "Pune To Ahmednagar Cab",
            description: "Pune to Ahmednagar cab service provides private transportation for travellers visiting the city for business, family, religious, or onward Shirdi travel requirements."
        }
    ],

    tableData: [
        ["Shirdi Sedan Cab From Pune"],
        ["Pune To Shirdi Sedan Taxi Service"],
        ["Pune To Shirdi Darshan Cab"],
        ["Pune To Shirdi Sai Baba Cab"],
        ["Pune To Shirdi Tourist Taxi"],
        ["Pune To Shirdi Budget Sedan Cab"],
        ["Pune To Shirdi Outstation Taxi"],
        ["Pune To Shirdi Sedan Car Hire"],
        ["Pune To Shirdi One Day Trip Cab"],
        ["Pune To Shirdi Family Tour Cab"],
        ["Pune To Shirdi Sedan Cab"],
        ["Pune To Shirdi Sedan Taxi"],
        ["Pune To Shirdi Sedan Cab Service"],
        ["Pune To Shirdi Taxi Service"],
        ["Pune To Shirdi Cab Booking"],
        ["Pune To Shirdi One Way Sedan Cab"],
        ["Pune To Shirdi Round Trip Sedan Cab"],
        ["Pune To Shirdi Darshan Sedan Cab"],
        ["Pune To Shirdi Outstation Sedan Cab"],
        ["Pune To Shirdi Online Cab Booking"],
        ["Pune To Shirdi Sedan Cab With Driver"],
        ["AC Sedan Cab From Pune To Shirdi"],
        ["Pune To Shirdi Swift Dzire Cab"],
        ["Pune To Shirdi Hyundai Aura Cab"],
        ["Pune To Shirdi Honda Amaze Cab"],
        ["Pune To Shirdi Same Day Darshan Cab"],
        ["Best Sedan Cab Service Pune To Shirdi"],
        ["Pune To Shirdi Round Trip Sedan Taxi"],
        ["Pune To Shirdi Online Sedan Cab Booking"],
        ["Affordable Sedan Taxi Pune To Shirdi"],
        ["Pune To Shani Shingnapur Cab"],
        ["Pune To Ahmednagar Cab"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Dedicated Shirdi Pilgrimage Travel",
            WhyChoosedescription: "Virendra Cab provides private sedan transportation for devotees travelling from Pune to Shirdi, allowing the journey to be planned around temple darshan, family requirements, preferred departure times, and return arrangements."
        },
        {
            WhyChooseheading: "One-Way And Round-Trip Options",
            WhyChoosedescription: "Passengers can select one-way travel when only a Pune-to-Shirdi transfer is required or choose a round-trip sedan for a complete pilgrimage journey. This flexibility is useful for both short visits and longer stays."
        },
        {
            WhyChooseheading: "Same-Day Darshan Planning",
            WhyChoosedescription: "A same-day Shirdi trip can be organized with an early departure from Pune, allowing travellers to reach Shirdi for darshan and return later in the day. Actual timings can vary according to traffic, stopovers, and temple queues. "
        },
        {
            WhyChooseheading: "Comfortable Sedan Choices",
            WhyChoosedescription: "Swift Dzire, Hyundai Aura, and Honda Amaze can provide practical sedan options for couples, individuals, and small families. Travellers can select a vehicle according to their passenger count and luggage requirements."
        },
        {
            WhyChooseheading: "Shirdi And Shani Shingnapur Combination",
            WhyChoosedescription: "Devotees can extend their itinerary to include Shani Shingnapur along with Shirdi. This combination is commonly considered for private cab journeys because both pilgrimage destinations can be incorporated into one planned route. "
        },
        {
            WhyChooseheading: "Private Cab With Driver",
            WhyChoosedescription: "A dedicated sedan with driver allows passengers to travel privately without sharing the vehicle with unrelated travellers. This can be particularly convenient for families, senior travellers, and devotees carrying personal belongings or prasad."
        },
        {
            WhyChooseheading: "Flexible Pilgrimage Itineraries",
            WhyChoosedescription: "The journey can be customized beyond the main Shirdi temple visit to include Dwarkamai, Chavadi, Gurusthan, Shani Shingnapur, Ahmednagar, or other destinations according to the group's available time and travel preferences. "
        },
        {
            WhyChooseheading: "Advance Booking Convenience",
            WhyChoosedescription: "Booking the sedan in advance allows travellers to communicate their pickup location, preferred vehicle, travel date, darshan plan, and return requirement before departure. This is especially useful during Thursdays, weekends, and major pilgrimage periods when Shirdi can experience heavier visitor traffic. "
        }
    ]
};




const faqData = [
    {
        question: "Can I book Pune to Shirdi Sedan Cabs with Virendra Cab?",
        answer: "Virendra Cab can arrange a private sedan for travel from Pune to Shirdi according to your journey date, pickup point, passenger count, luggage, and preferred departure time. The cab can be planned for Sai Baba darshan, family travel, or a pilgrimage trip."
    },
    {
        question: "Is a sedan suitable for a Pune to Shirdi pilgrimage?",
        answer: "A sedan can be a suitable choice for small groups travelling from Pune to Shirdi. Vehicle selection can be considered according to the number of passengers, luggage, journey duration, and comfort requirements."
    },
    {
        question: "Can I book a one-way Pune to Shirdi sedan cab?",
        answer: "Travellers who only need transportation from Pune to Shirdi can enquire about a one-way sedan. The pickup address, travel date, preferred departure time, and destination details can be discussed before confirming the journey."
    },
    {
        question: "Can I reserve a round-trip sedan from Pune to Shirdi?",
        answer: "A round-trip sedan arrangement can be considered for devotees planning to visit Shirdi and return to Pune. The darshan schedule, waiting period, return timing, and any additional stops can be discussed while planning the trip."
    },
    {
        question: "Can the sedan cab be used for Sai Baba Temple darshan?",
        answer: "The cab can be arranged for travel to Shirdi for devotees visiting Shri Saibaba Sansthan Temple. Travellers can plan their departure and return schedule around their preferred darshan timing and other pilgrimage requirements."
    },
    {
        question: "Can senior citizens travel from Pune to Shirdi by sedan?",
        answer: "Families travelling with senior citizens can consider a private sedan for the Pune to Shirdi journey. Pickup timing, travel breaks, passenger requirements, and the overall schedule can be discussed to suit the group's travel preferences."
    },
    {
        question: "Can I get Pune pickup from my area for a Shirdi sedan cab?",
        answer: "Pickup arrangements can be discussed from Pune locations such as Baner, Wakad, Hinjewadi, Kothrud, Hadapsar, Viman Nagar, Pimpri-Chinchwad, and other suitable residential or commercial areas."
    },
    {
        question: "Can I include other religious places with a Pune to Shirdi sedan trip?",
        answer: "Passengers can discuss adding suitable pilgrimage destinations to their Shirdi itinerary when the available time permits. The route, temple visits, sightseeing stops, and return schedule can be considered while planning the journey."
    },
    {
        question: "Is Pune to Shirdi sedan cab useful for a family pilgrimage?",
        answer: "Small families can enquire about a private sedan for their Shirdi pilgrimage. The cab arrangement can be planned according to the family size, luggage, preferred pickup location, darshan schedule, and return requirements."
    },
    {
        question: "What details are required to book Pune to Shirdi Sedan Cabs?",
        answer: "Passengers can provide their Pune pickup address, travel date, preferred departure time, number of travellers, luggage details, one-way or round-trip requirement, darshan plans, and preferred sedan option while making the booking enquiry."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Suresh Chavan",
        feedback: "My parents and I planned a Shirdi darshan from Pune and preferred a private sedan for the journey. Virendra Cab coordinated the pickup and travel schedule around our temple visit, which made the pilgrimage easier to manage.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Anushka Patil",
        feedback: "A small group of relatives travelled from Pune to Shirdi for a religious visit. The sedan was appropriate for our group size and luggage, while the cab arrangement allowed us to plan the return after darshan according to our schedule.",
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
  "name": "Pune to Shirdi Sedan Cabs",
  "image": "https://www.virendracabs.com/assets/images/pune-to-shirdi-sedan-cabs.webp",
  "description": "Pune to Shirdi Sedan Cabs are a comfortable and practical option for devotees, families, couples and small groups planning a pilgrimage from Pune to Shirdi. Virendra Cab provides private sedan transportation for customers searching for Shirdi Sedan Cab from Pune, Pune to Shirdi Sedan Taxi Service and Pune to Shirdi Darshan Cab. The service is suitable for Sai Baba devotees who want a dedicated vehicle for temple visits, family pilgrimage trips and planned one-day journeys. Travelers looking for a Pune to Shirdi Sai Baba Cab can arrange private transportation according to their preferred departure and return schedule. Pune to Shirdi Tourist Taxi is also suitable for passengers who want to include sightseeing or nearby religious destinations in their itinerary. Customers searching for a Pune to Shirdi Budget Sedan Cab can enquire about available sedan options according to passenger count, luggage requirements and travel plans. Pune to Shirdi Outstation Taxi provides a convenient choice for travelers who prefer private road transportation instead of shared travel. Sedan car hire can be arranged for one-way journeys, round trips or a Pune to Shirdi One Day Trip Cab according to the planned darshan schedule. Families can also choose a Pune to Shirdi Family Tour Cab for a comfortable pilgrimage experience with a dedicated vehicle. Current fare depends on the selected sedan, travel date, route, duration and trip type, so passengers can contact Virendra Cab for the latest fare details. Advance booking helps confirm the vehicle, pickup location, departure time and return requirements. Whether the purpose is Sai Baba darshan, a one-day pilgrimage, family travel or an outstation temple visit, Virendra Cab offers a convenient private sedan cab option from Pune to Shirdi.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.virendracabs.com/pune-to-shirdi-sedan-cabs"
  }
};







    return (
        <div>

<Helmet>
  <title>
    Pune to Shirdi Sedan Cabs | Pune to Shirdi Sedan Taxi Service | +91 9022549022
  </title>

  <meta
    name="description"
    content="Book Pune to Shirdi Sedan Cabs for Sai Baba darshan, one-day trips and family pilgrimage travel. Get private sedan taxi service from Pune with Virendra Cab."
  />

  <meta
    name="keywords"
    content="Pune to Shirdi Sedan Cabs, Shirdi Sedan Cab from Pune, Pune to Shirdi Sedan Taxi Service, Pune to Shirdi Darshan Cab, Pune to Shirdi Sai Baba Cab, Pune to Shirdi Tourist Taxi, Pune to Shirdi Budget Sedan Cab, Pune to Shirdi Outstation Taxi, Pune to Shirdi Sedan Car Hire, Pune to Shirdi One Day Trip Cab, Pune to Shirdi Family Tour Cab, Pune to Shirdi Sedan Cab, Pune to Shirdi Sedan Taxi, Pune to Shirdi Sedan Cab Service, Pune to Shirdi Sedan Cab Booking, Pune to Shirdi Sedan Cab Fare, Pune to Shirdi Sedan Taxi Fare, Pune to Shirdi One Way Sedan Cab, Pune to Shirdi Round Trip Sedan Cab, Pune to Shirdi Private Sedan Cab, Pune to Shirdi Taxi Service, Pune to Shirdi Cab Service, Pune Shirdi Sedan Car Rental, Pune Shirdi Sedan Taxi Booking, Sai Baba Darshan Sedan Cab Pune, Shirdi Temple Sedan Cab Pune, Pune to Shirdi Pilgrimage Sedan Cab, Pune to Shirdi Tourist Cab, Pune to Shirdi Family Sedan Taxi"
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
                            <img src='/images/keyword/41.jpg' alt='img' className='img-fluid' />
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

export default Punetoshirdisedancabs ;