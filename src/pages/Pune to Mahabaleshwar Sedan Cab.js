import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Punetomahabaleshwarsedan() {



const cardData = {
    keyword: "Pune to Mahabaleshwar Sedan Cab",
    headingDescription: "Pune to Mahabaleshwar Sedan Cab service from Virendra Cab is a convenient option for travellers planning a comfortable private journey to the popular hill station. The route can be arranged for one-way transfers, round trips, weekend getaways, family holidays, or customized sightseeing plans covering Mahabaleshwar and nearby Panchgani. The commonly travelled route passes through the Wai and Panchgani side before reaching Mahabaleshwar, making attractions such as Mapro Garden, Venna Lake, Arthur's Seat, Wilson Point, Elephant's Head Point, and Panchgani Table Land convenient additions to a sightseeing itinerary.",

    topPlaces: [
        {
            title: "Venna Lake",
            description: "Include Venna Lake in your Mahabaleshwar sightseeing plan for a relaxed stop surrounded by the hill station's scenic landscape, with private sedan transportation available for convenient access."
        },
        {
            title: "Arthur's Seat",
            description: "Visit Arthur's Seat as part of a viewpoint-focused Mahabaleshwar trip and continue comfortably between nearby sightseeing locations with a dedicated sedan cab."
        },
        {
            title: "Panchgani Table Land",
            description: "Panchgani Table Land can be added to the Pune to Mahabaleshwar itinerary, allowing travellers to combine two popular hill-station destinations during the same road trip."
        },
        {
            title: "Mapro Garden",
            description: "Plan a stop at Mapro Garden on the Panchgani-Mahabaleshwar route and enjoy convenient private travel while exploring the area's popular food and strawberry-related attractions."
        },
        {
            title: "Pratapgad Fort",
            description: "Add Pratapgad Fort to a longer Mahabaleshwar sightseeing itinerary for a combination of hill-station travel and historical exploration."
        },
        {
            title: "Wilson Point",
            description: "Include Wilson Point for a scenic viewpoint experience and coordinate the visit with other Mahabaleshwar attractions through a flexible private sedan itinerary."
        },
        {
            title: "Wai",
            description: "Wai provides an interesting stop on the Pune to Mahabaleshwar route, particularly for travellers who want to include riverside and heritage sightseeing before continuing towards the hill station."
        },
        {
            title: "Kate's Point",
            description: "Add Kate's Point to your sightseeing route for valley views and combine it with other nearby Mahabaleshwar viewpoints using a private cab."
        }
    ],

    services: [
        {
            name: "Pune To Mahabaleshwar Sedan Cab Service",
            description: "Virendra Cab provides private sedan transportation from Pune to Mahabaleshwar for travellers planning direct transfers, weekend trips, family holidays, and customized hill-station sightseeing."
        },
        {
            name: "Pune To Mahabaleshwar Sedan Cab",
            description: "A dedicated sedan offers a comfortable private travel option for the Pune to Mahabaleshwar route, with convenient pickup and drop arrangements suited to individual travel plans."
        },
        {
            name: "Pune To Mahabaleshwar Sedan Taxi",
            description: "Pune to Mahabaleshwar sedan taxi service is suitable for couples, families, and small groups seeking private transportation for the hill-station journey."
        },
        {
            name: "Pune To Mahabaleshwar Cab Service",
            description: "Private cab service makes it convenient to travel from Pune to Mahabaleshwar while allowing passengers to plan one-way transfers, return journeys, or sightseeing stops according to their requirements."
        },
        {
            name: "Pune To Mahabaleshwar Taxi Service",
            description: "A dedicated taxi can provide direct transportation from Pune to Mahabaleshwar, making the journey convenient for tourists, families, and weekend travellers."
        },
        {
            name: "Pune To Mahabaleshwar Sedan Cab Booking",
            description: "Advance sedan cab booking helps travellers arrange their preferred vehicle, Pune pickup point, travel date, and Mahabaleshwar drop location before beginning the journey."
        },
        {
            name: "Pune To Mahabaleshwar One Way Sedan Cab",
            description: "One-way sedan cab service is useful for passengers who need a private transfer from Pune to Mahabaleshwar without requiring the same vehicle for the return journey."
        },
        {
            name: "Pune To Mahabaleshwar Round Trip Sedan Cab",
            description: "A round-trip sedan cab is practical for weekend holidays and short getaways when travellers want private transportation for both the Pune-to-Mahabaleshwar journey and the return trip."
        },
        {
            name: "Pune To Mahabaleshwar Sedan Taxi Booking",
            description: "Sedan taxi booking allows travellers to organize a private vehicle in advance and communicate their preferred pickup, destination, travel date, and return requirements."
        },
        {
            name: "Pune To Mahabaleshwar Outstation Sedan Cab",
            description: "The outstation sedan option provides private transportation for the Pune to Mahabaleshwar route, with suitable arrangements for one-way travel, return trips, or multi-stop journeys."
        },
        {
            name: "Pune To Mahabaleshwar Private Sedan Cab",
            description: "A private sedan cab provides direct travel without shared passengers, giving families and small groups greater convenience when travelling between Pune and Mahabaleshwar."
        },
        {
            name: "Pune To Mahabaleshwar Family Sedan Cab",
            description: "Families can choose a sedan for a comfortable hill-station journey, with practical seating for small groups and convenient luggage space for a weekend or holiday trip."
        },
        {
            name: "Pune To Mahabaleshwar Online Cab Booking",
            description: "Online cab booking provides a convenient way to arrange the vehicle, travel date, pickup location, and trip type before starting your Pune to Mahabaleshwar journey."
        },
        {
            name: "Pune To Mahabaleshwar Tourist Sedan Cab",
            description: "Tourists can use a private sedan for direct travel to Mahabaleshwar and combine the transfer with sightseeing at viewpoints, lakes, gardens, and nearby Panchgani attractions."
        },
        {
            name: "Pune To Mahabaleshwar Affordable Sedan Cab",
            description: "Travellers comparing economical private travel options can consider a sedan based on their route, passenger count, trip type, and overall sightseeing requirements."
        },
        {
            name: "Pune To Mahabaleshwar Sedan Car Hire",
            description: "Sedan car hire provides a private chauffeur-driven travel option for passengers planning a comfortable Pune to Mahabaleshwar transfer or a longer sightseeing itinerary."
        },
        {
            name: "Pune To Mahabaleshwar Sedan Cab Service",
            description: "Sedan cab service from Pune to Mahabaleshwar can be planned for direct transfers, family holidays, weekend trips, and sightseeing journeys with flexible travel arrangements."
        },
        {
            name: "Pune To Mahabaleshwar Sedan Cab",
            description: "Travellers can arrange a private sedan for the Pune to Mahabaleshwar route and select one-way or return travel according to the duration of their hill-station visit."
        },
        {
            name: "Pune To Mahabaleshwar Sedan Taxi",
            description: "A private sedan taxi offers convenient transportation for the scenic Pune to Mahabaleshwar journey, with pickup and drop arrangements suited to individual travel schedules."
        },
        {
            name: "Pune To Mahabaleshwar Cab Service",
            description: "Cab service on this route provides direct road transportation between Pune and Mahabaleshwar, making it useful for tourists, families, couples, and small groups."
        },
        {
            name: "Pune To Mahabaleshwar Taxi Service",
            description: "Taxi service can be arranged for a direct Pune-to-Mahabaleshwar transfer or incorporated into a longer itinerary covering sightseeing locations around the hill station."
        },
        {
            name: "Pune To Mahabaleshwar Sedan Car Rentals",
            description: "Sedan car rental arrangements give travellers a comfortable private vehicle for the Pune to Mahabaleshwar route, with options suited to short holidays and multi-stop travel plans."
        },
        {
            name: "Pune To Mahabaleshwar One Way Sedan Cab",
            description: "One-way sedan travel is convenient when the requirement is limited to a private transfer from Pune to Mahabaleshwar and no return vehicle is needed under the same trip plan."
        },
        {
            name: "Pune To Mahabaleshwar Round Trip Sedan Cab",
            description: "Round-trip sedan service works well for weekend getaways, allowing travellers to plan their onward and return journeys together while keeping the transportation private."
        },
        {
            name: "Pune To Mahabaleshwar Outstation Sedan Cab",
            description: "An outstation sedan cab provides a practical private option for travelling from Pune to Mahabaleshwar, including trips that involve sightseeing or an overnight stay."
        },
        {
            name: "Pune To Mahabaleshwar Online Cab Booking",
            description: "Online booking makes it easier to arrange a sedan in advance for the Pune to Mahabaleshwar route, including details such as pickup time, travel date, and return requirements."
        }
    ],

    tableData: [
        ["Pune To Mahabaleshwar Sedan Cab Service"],
        ["Pune To Mahabaleshwar Sedan Cab"],
        ["Pune To Mahabaleshwar Sedan Taxi"],
        ["Pune To Mahabaleshwar Cab Service"],
        ["Pune To Mahabaleshwar Taxi Service"],
        ["Pune To Mahabaleshwar Sedan Cab Booking"],
        ["Pune To Mahabaleshwar One Way Sedan Cab"],
        ["Pune To Mahabaleshwar Round Trip Sedan Cab"],
        ["Pune To Mahabaleshwar Sedan Taxi Booking"],
        ["Pune To Mahabaleshwar Outstation Sedan Cab"],
        ["Pune To Mahabaleshwar Private Sedan Cab"],
        ["Pune To Mahabaleshwar Family Sedan Cab"],
        ["Pune To Mahabaleshwar Online Cab Booking"],
        ["Pune To Mahabaleshwar Tourist Sedan Cab"],
        ["Pune To Mahabaleshwar Affordable Sedan Cab"],
        ["Pune To Mahabaleshwar Sedan Car Hire"],
        ["Pune To Mahabaleshwar Sedan Cab Service"],
        ["Pune To Mahabaleshwar Sedan Cab"],
        ["Pune To Mahabaleshwar Sedan Taxi"],
        ["Pune To Mahabaleshwar Cab Service"],
        ["Pune To Mahabaleshwar Taxi Service"],
        ["Pune To Mahabaleshwar Sedan Car Rentals"],
        ["Pune To Mahabaleshwar One Way Sedan Cab"],
        ["Pune To Mahabaleshwar Round Trip Sedan Cab"],
        ["Pune To Mahabaleshwar Outstation Sedan Cab"],
        ["Pune To Mahabaleshwar Online Cab Booking"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Dedicated Pune To Mahabaleshwar Travel",
            WhyChoosedescription: "Virendra Cab provides private sedan transportation for the complete Pune to Mahabaleshwar journey, making it convenient for travellers who prefer direct road travel without changing vehicles along the route."
        },
        {
            WhyChooseheading: "One-Way And Return Options",
            WhyChoosedescription: "Travellers can select a one-way sedan when only a destination transfer is required or choose a round-trip arrangement for a weekend getaway, family holiday, or planned return journey from Mahabaleshwar."
        },
        {
            WhyChooseheading: "Comfortable Sedan For Small Groups",
            WhyChoosedescription: "Sedans are a practical choice for couples, families, and small groups travelling together. The private vehicle provides comfortable point-to-point transportation while keeping the group together throughout the hill-station journey."
        },
        {
            WhyChooseheading: "Sightseeing Flexibility",
            WhyChoosedescription: "A Pune to Mahabaleshwar trip can be combined with selected sightseeing stops such as Venna Lake, Mapro Garden, Arthur's Seat, Wilson Point, Kate's Point, and Panchgani. The itinerary can be structured around the attractions that matter most to the travellers."
        },
        {
            WhyChooseheading: "Convenient Panchgani And Wai Route",
            WhyChoosedescription: "The journey can incorporate the Wai and Panchgani side of the route, making it possible to include additional stops such as Panchgani Table Land or Wai before reaching Mahabaleshwar. "
        },
        {
            WhyChooseheading: "Suitable For Weekend Getaways",
            WhyChoosedescription: "Mahabaleshwar is a popular short-break destination from Pune, and a private sedan can simplify weekend travel by providing direct pickup and return transportation. Travellers can also plan a longer stay when more sightseeing time is required."
        },
        {
            WhyChooseheading: "Private Family-Friendly Transportation",
            WhyChoosedescription: "Families can travel together in a dedicated sedan with their luggage and preferred departure schedule. Private transportation also makes it easier to coordinate hotel pickup, sightseeing stops, meal breaks, and the return journey."
        },
        {
            WhyChooseheading: "Advance Booking Convenience",
            WhyChoosedescription: "Advance booking allows travellers to organize their sedan, pickup point, travel date, trip type, and sightseeing requirements before departure. This is especially useful for weekend travel when demand for Pune to Mahabaleshwar cabs can increase."
        }
    ]
};





const faqData = [
    {
        question: "Can I book a Pune to Mahabaleshwar Sedan Cab with Virendra Cab?",
        answer: "Virendra Cab can arrange a private sedan cab from Pune to Mahabaleshwar based on your travel date, pickup location, passenger count, luggage, and preferred departure time. The journey can be planned for family holidays, weekend trips, or sightseeing."
    },
    {
        question: "Is a sedan suitable for a Pune to Mahabaleshwar trip?",
        answer: "A sedan can be a practical choice for a small group travelling from Pune to Mahabaleshwar. Vehicle suitability can be considered according to the number of passengers, luggage, journey duration, and comfort requirements."
    },
    {
        question: "Can I book a one-way sedan cab from Pune to Mahabaleshwar?",
        answer: "Travellers who only require transportation from Pune to Mahabaleshwar can enquire about a one-way sedan cab. The pickup address, travel date, departure time, and destination details can be shared while making the booking."
    },
    {
        question: "Can I reserve a round-trip sedan cab for Mahabaleshwar?",
        answer: "A round-trip sedan can be considered for travellers planning to explore Mahabaleshwar and return to Pune. The return date, sightseeing duration, waiting requirements, and preferred itinerary can be discussed during the travel planning."
    },
    {
        question: "Which Mahabaleshwar attractions can I visit by sedan cab?",
        answer: "A private sedan can be used to plan sightseeing around attractions such as Venna Lake, Mapro Garden, Arthur's Seat, Elephant's Head Point, Pratapgad Fort, and other suitable locations according to the available time."
    },
    {
        question: "Can families travel from Pune to Mahabaleshwar by sedan?",
        answer: "Small families can enquire about a private sedan for the Pune to Mahabaleshwar journey. The cab arrangement can be planned according to the family's passenger count, luggage, preferred pickup point, and sightseeing requirements."
    },
    {
        question: "Can I get Pune pickup for a Mahabaleshwar sedan cab from different areas?",
        answer: "Pickup arrangements can be discussed from areas such as Baner, Wakad, Hinjewadi, Kothrud, Hadapsar, Viman Nagar, Pimpri-Chinchwad, and other suitable Pune locations based on the travel requirements."
    },
    {
        question: "Is a Pune to Mahabaleshwar sedan useful for a weekend getaway?",
        answer: "A private sedan can be considered for a weekend trip to Mahabaleshwar, allowing travellers to plan their departure, sightseeing stops, and return schedule according to their available time and preferred places."
    },
    {
        question: "Can I include Panchgani in my Pune to Mahabaleshwar sedan trip?",
        answer: "Travellers can discuss combining Mahabaleshwar with nearby Panchgani when the itinerary and available travel time permit. Sightseeing points and the preferred route can be considered while planning the complete cab journey."
    },
    {
        question: "What details are required to book a Pune to Mahabaleshwar Sedan Cab?",
        answer: "Passengers can provide their Pune pickup address, travel date, preferred departure time, number of travellers, luggage details, one-way or round-trip requirement, sightseeing preferences, and preferred sedan option while making the enquiry."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Abhijit Salunkhe",
        feedback: "A weekend Mahabaleshwar trip was planned for our family, and we wanted a private sedan for both travel and local sightseeing. Virendra Cab arranged the journey around our pickup location and preferred sightseeing schedule.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Tejal More",
        feedback: "We travelled from Pune to Mahabaleshwar with a small group and included Panchgani in our plan. The sedan was a suitable option for our group, and the travel arrangements were discussed clearly before the trip.",
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
  "name": "Pune to Mahabaleshwar Sedan Cab",
  "image": "https://www.virendracabs.com/assets/images/pune-to-mahabaleshwar-sedan-cab.webp",
  "description": "Pune to Mahabaleshwar Sedan Cab is a comfortable travel option for families, couples, business travelers and small groups planning a journey from Pune to Mahabaleshwar. Virendra Cab provides private sedan transportation for customers searching for Pune to Mahabaleshwar Sedan Cab Service, Pune to Mahabaleshwar Sedan Cab and Pune to Mahabaleshwar Sedan Taxi. The service is suitable for weekend trips, family holidays, sightseeing, hotel transfers and planned outstation travel. A sedan can be a practical choice for passengers who want comfortable seating, useful luggage space and a private vehicle for the journey. Travelers can arrange one-way or round-trip transportation depending on their itinerary and stay duration. Customers planning a Mahabaleshwar sightseeing trip can also discuss suitable travel arrangements for visiting popular local attractions according to their preferred schedule. The cab can be booked for direct travel from Pune or for a customized round-trip journey with planned sightseeing stops. Current Pune to Mahabaleshwar Sedan Cab fare depends on the selected vehicle, travel date, route, trip type and duration, so passengers can contact Virendra Cab for the latest fare details. Advance booking helps confirm the sedan, pickup location, departure time and return requirements before travel. The service can also be considered by families traveling with luggage or couples looking for a private road journey without shared transportation. Whether the requirement is a one-way transfer, weekend holiday, sightseeing trip or round-trip travel, Virendra Cab offers a convenient sedan cab option from Pune to Mahabaleshwar.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.virendracabs.com/pune-to-mahabaleshwar-sedan-cab"
  }
};



    return (
        <div>

<Helmet>
  <title>
    Pune to Mahabaleshwar Sedan Cab | Pune to Mahabaleshwar Sedan Taxi | +91 9022549022
  </title>

  <meta
    name="description"
    content="Book Pune to Mahabaleshwar Sedan Cab for comfortable one-way, round-trip and sightseeing travel. Get private sedan taxi service from Pune with Virendra Cab."
  />

  <meta
    name="keywords"
    content="Pune to Mahabaleshwar Sedan Cab, Pune to Mahabaleshwar Sedan Cab Service, Pune to Mahabaleshwar Sedan Cab, Pune to Mahabaleshwar Sedan Taxi, Pune to Mahabaleshwar Sedan Taxi Service, Pune to Mahabaleshwar Sedan Cab Booking, Pune to Mahabaleshwar Sedan Cab Fare, Pune to Mahabaleshwar Sedan Taxi Fare, Pune to Mahabaleshwar One Way Sedan Cab, Pune to Mahabaleshwar Round Trip Sedan Cab, Pune to Mahabaleshwar Outstation Sedan Cab, Sedan Cab from Pune to Mahabaleshwar, Sedan Taxi from Pune to Mahabaleshwar, Pune Mahabaleshwar Sedan Car Rental, Pune Mahabaleshwar Sedan Taxi Booking, Mahabaleshwar Sedan Cab from Pune, Pune to Mahabaleshwar Private Sedan Cab, Pune to Mahabaleshwar Tour Cab, Pune to Mahabaleshwar Sightseeing Cab, Pune Mahabaleshwar Sedan Rental, Pune to Mahabaleshwar Car Rental, Pune to Mahabaleshwar Taxi Service"
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
                            <img src='/images/keyword/39.jpg' alt='img' className='img-fluid' />
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

export default Punetomahabaleshwarsedan ;