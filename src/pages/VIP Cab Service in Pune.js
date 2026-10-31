import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Vipcabserviceinpune() {



const cardData = {
    keyword: "VIP Cab Service in Pune",
    headingDescription: "VIP Cab Service in Pune offers premium chauffeur-driven transportation for executives, business leaders, important guests, corporate teams and travellers seeking a comfortable and private travel experience. Virendra Cab can arrange suitable luxury sedans, SUVs and premium vehicles for airport transfers, business meetings, corporate events, weddings, hotel transfers and outstation journeys. With dedicated driver support and flexible travel arrangements, passengers can plan transportation according to their occasion, schedule, destination and vehicle preference.",
    topPlaces: [
      
        {
            title: "Shirdi",
            description: "Shirdi is suitable for private family journeys, VIP religious travel and organized corporate or guest trips. A premium cab allows passengers to travel comfortably with a dedicated vehicle and chauffeur throughout the route."
        },
        {
            title: "Bhandardara",
            description: "Bhandardara offers a peaceful destination for private getaways, executive retreats and family holidays. A luxury SUV or premium sedan can provide convenient road transportation for travellers seeking a more relaxed journey."
        },
        {
            title: "Ratnagiri",
            description: "Ratnagiri is a suitable destination for extended private travel, business visits and family holidays along the Konkan coast. A VIP outstation cab provides a dedicated vehicle for the complete journey and planned stops."
        },
          {
            title: "Khandala",
            description: "Khandala is a convenient destination for executive retreats, private celebrations and premium weekend travel from Pune. A chauffeur-driven VIP cab provides a comfortable journey for passengers who prefer dedicated transportation."
        },
        {
            title: "Dapoli",
            description: "Dapoli can be planned for premium weekend holidays, private family trips and corporate retreats. Chauffeur-driven transportation provides a convenient option for travellers carrying luggage and following a personalized itinerary."
        },
        {
            title: "Panhala",
            description: "Panhala is well suited for heritage visits, private group travel and relaxed weekend journeys. A premium cab can provide comfortable point-to-point transportation while allowing passengers to follow their preferred schedule."
        },
        {
            title: "Gokarna",
            description: "Gokarna is a suitable long-distance destination for private holidays, corporate leisure trips and special occasions. VIP outstation cab service provides dedicated transportation for passengers travelling together over an extended route."
        },
        {
            title: "Udaipur",
            description: "Udaipur can be included in a premium multi-day road itinerary for weddings, private celebrations, corporate travel and leisure tours. A chauffeur-driven vehicle provides flexibility for long-distance travel and local sightseeing."
        },
        {
            title: "Jaisalmer",
            description: "Jaisalmer is an extended outstation destination suitable for luxury holidays, destination events and private group tours. A dedicated VIP vehicle can make the long road journey more comfortable and organized."
        },
        {
            title: "Ranthambore",
            description: "Ranthambore is suitable for premium wildlife holidays, private family trips and corporate retreats. A luxury SUV or executive vehicle can support the road journey while providing comfortable transportation throughout the itinerary."
        }
    ],
    services: [
        {
            name: "VIP cab service in Pune",
            description: "VIP cab service in Pune provides premium transportation for executives, business leaders, private travellers and important guests who prefer comfort and dedicated chauffeur support. Vehicles can be arranged for local, airport, event and outstation travel."
        },
        {
            name: "VIP taxi service Pune",
            description: "VIP taxi service Pune is suitable for passengers seeking a private and comfortable travel experience for important journeys. Chauffeur-driven cars can be arranged for meetings, hotel transfers, airport travel, events and personal transportation."
        },
        {
            name: "Premium cab service Pune",
            description: "Premium cab service Pune offers comfortable vehicle options for executives, corporate guests, families and special occasions. The service can be planned around passenger requirements, pickup timing, destination and overall travel schedule."
        },
        {
            name: "Luxury cab booking Pune",
            description: "Luxury cab booking Pune provides a convenient way to arrange premium transportation in advance for business meetings, airport transfers, weddings, events and private travel. Vehicle selection can be based on the occasion and passenger requirements."
        },
        {
            name: "VIP car rental Pune",
            description: "VIP car rental Pune is suitable for individuals and organizations requiring a dedicated premium vehicle for a few hours, a full day or an extended itinerary. Chauffeur support can make business and personal travel more convenient."
        },
        {
            name: "VIP chauffeur service Pune",
            description: "VIP chauffeur service Pune provides professional driver-supported transportation for executives, corporate guests, visiting clients and private travellers. It is suitable for airport transfers, meetings, events and multi-stop itineraries."
        },
        {
            name: "VIP car hire Pune",
            description: "VIP car hire Pune allows travellers to select a premium vehicle according to the occasion, passenger count and travel plan. It can be arranged for executive travel, special events, airport movement and outstation journeys."
        },
        {
            name: "Executive cab service Pune",
            description: "Executive cab service Pune is designed for business professionals, senior executives and corporate guests requiring comfortable transportation for meetings, office visits, airport transfers and scheduled business travel."
        },
        {
            name: "Premium taxi booking Pune",
            description: "Premium taxi booking Pune provides a convenient option for travellers who want a private chauffeur-driven vehicle for important journeys. Advance booking can help coordinate pickup time, destination, vehicle category and special requirements."
        },
        {
            name: "VIP airport transfer Pune",
            description: "VIP airport transfer Pune provides premium pickup and drop transportation for executives, corporate guests, families and important visitors. The journey can be coordinated around flight schedules, luggage requirements and preferred pickup arrangements."
        },
        {
            name: "VIP pickup and drop Pune",
            description: "VIP pickup and drop Pune can be arranged between airports, hotels, offices, residences, event venues and railway stations. Dedicated chauffeur service helps passengers maintain a convenient and organized travel schedule."
        },
        {
            name: "VIP travel service Pune",
            description: "VIP travel service Pune supports premium transportation for business meetings, private events, family occasions, airport transfers and outstation journeys. Vehicle and chauffeur arrangements can be planned according to the complete itinerary."
        },
        {
            name: "Luxury sedan booking Pune",
            description: "Luxury sedan booking Pune is suitable for executives, business guests, couples and individual travellers seeking a comfortable premium vehicle. Sedans can be arranged for meetings, airport transfers, hotel movement and private occasions."
        },
        {
            name: "Luxury SUV rental Pune",
            description: "Luxury SUV rental Pune provides additional cabin space and a premium travel environment for executives, families and small groups. SUVs are suitable for airport transfers, business travel, events and longer outstation journeys."
        },
        {
            name: "BMW cab service Pune",
            description: "BMW cab service Pune offers a premium vehicle option for executive travel, corporate guests, special occasions and important meetings. Chauffeur-driven service provides a private and comfortable experience for passengers."
        },
        {
            name: "Mercedes cab service Pune",
            description: "Mercedes cab service Pune is suitable for executive travel, VIP guest movement, special events and corporate transportation. A dedicated chauffeur can manage the planned route while passengers focus on their schedule."
        },
        {
            name: "Audi car rental Pune",
            description: "Audi car rental Pune provides a premium transportation option for corporate executives, client visits, private celebrations and important occasions. The vehicle can be arranged with professional chauffeur support."
        },
        {
            name: "VIP Innova rental Pune",
            description: "VIP Innova rental Pune is useful for executives, families and small groups requiring a comfortable premium vehicle with additional seating space. It can be arranged for airport transfers, business travel and outstation journeys."
        },
        {
            name: "VIP Fortuner rental Pune",
            description: "VIP Fortuner rental Pune provides a premium SUV option for executive travel, private tours, corporate events and longer road journeys. Its spacious cabin makes it suitable for passengers who prefer additional comfort."
        },
        {
            name: "Corporate VIP cab service Pune",
            description: "Corporate VIP cab service Pune helps businesses arrange premium transportation for directors, senior executives, visiting clients, board members and important guests. Vehicles can be scheduled for meetings, airport transfers and corporate events."
        },
        {
            name: "VIP guest transportation Pune",
            description: "VIP guest transportation Pune provides dedicated travel arrangements for visiting executives, clients, delegates, speakers and special guests. Chauffeur-driven vehicles can connect airports, hotels, offices, venues and meeting locations."
        },
        {
            name: "VIP protocol car service Pune",
            description: "VIP protocol car service Pune supports carefully planned transportation for official guests, senior executives, delegates and important visitors. Vehicle deployment can be coordinated around schedules, venues, designated pickup points and event requirements."
        },
        {
            name: "VIP outstation cab Pune",
            description: "VIP outstation cab Pune provides private chauffeur-driven transportation for long-distance business trips, family travel, events and leisure journeys. One-way, round-trip and multi-day travel can be planned according to the itinerary."
        },
        {
            name: "Private luxury cab Pune",
            description: "Private luxury cab Pune gives travellers a dedicated vehicle for personal, corporate or special-event transportation. It is suitable for passengers who value privacy, comfort and flexibility throughout their planned journey."
        },
        {
            name: "Professional VIP driver service Pune",
            description: "Professional VIP driver service Pune provides chauffeur support for executives, corporate guests and private travellers. Professional driving and courteous passenger handling can help create a smooth experience during local and outstation journeys."
        }
    ],
    tableData: [
        ["VIP cab service in Pune"],
        ["VIP taxi service Pune"],
        ["Premium cab service Pune"],
        ["Luxury cab booking Pune"],
        ["VIP car rental Pune"],
        ["VIP chauffeur service Pune"],
        ["VIP car hire Pune"],
        ["Executive cab service Pune"],
        ["Premium taxi booking Pune"],
        ["VIP airport transfer Pune"],
        ["VIP pickup and drop Pune"],
        ["VIP travel service Pune"],
        ["Luxury sedan booking Pune"],
        ["Luxury SUV rental Pune"],
        ["BMW cab service Pune"],
        ["Mercedes cab service Pune"],
        ["Audi car rental Pune"],
        ["VIP Innova rental Pune"],
        ["VIP Fortuner rental Pune"],
        ["Corporate VIP cab service Pune"],
        ["VIP guest transportation Pune"],
        ["VIP protocol car service Pune"],
        ["VIP outstation cab Pune"],
        ["Private luxury cab Pune"],
        ["Professional VIP driver service Pune"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Premium Vehicle Selection",
            WhyChoosedescription: "Travellers can choose suitable premium sedans, SUVs, Innova, Fortuner and luxury vehicle categories according to the occasion, passenger requirements and planned itinerary."
        },
        {
            WhyChooseheading: "Dedicated Chauffeur Support",
            WhyChoosedescription: "Professional chauffeur-driven transportation allows executives, guests and private travellers to enjoy a convenient journey while focusing on meetings, events or personal schedules."
        },
        {
            WhyChooseheading: "Executive Travel Comfort",
            WhyChoosedescription: "VIP transportation is suitable for business leaders, senior professionals, visiting clients and corporate guests who require a comfortable and organized point-to-point travel experience."
        },
        {
            WhyChooseheading: "Airport Transfer Assistance",
            WhyChoosedescription: "Airport pickup and drop services can be coordinated around flight timings, luggage requirements and preferred meeting points for executives, corporate guests and private travellers."
        },
        {
            WhyChooseheading: "Corporate Guest Movement",
            WhyChoosedescription: "Companies can arrange dedicated premium vehicles for directors, clients, delegates, speakers and visiting executives travelling between airports, hotels, offices and event venues."
        },
        {
            WhyChooseheading: "Private Travel Experience",
            WhyChoosedescription: "A dedicated luxury cab provides passengers with a private travel environment suitable for business conversations, important appointments, family journeys and special occasions."
        },
        {
            WhyChooseheading: "Flexible Outstation Plans",
            WhyChoosedescription: "VIP cab arrangements can be planned for local transfers, full-day requirements, one-way journeys, round trips and multi-day outstation travel according to the passenger's itinerary."
        },
        {
            WhyChooseheading: "Special Event Transportation",
            WhyChoosedescription: "Premium vehicles can be arranged for weddings, corporate events, private celebrations, executive functions and other occasions where comfortable and polished transportation is required."
        }
    ]
};


const faqData = [
    {
        question: "What is a VIP Cab Service in Pune?",
        answer: "VIP Cab Service in Pune is designed for travelers who prefer a more comfortable and premium private cab experience for important journeys. Virendra Cab can be considered for executive travel, airport transfers, business meetings, family occasions, special events, and outstation trips."
    },
    {
        question: "How can I book a VIP Cab Service in Pune?",
        answer: "To arrange a VIP cab in Pune, share your pickup location, destination, travel date, passenger count, and preferred vehicle category with Virendra Cab. Providing the complete itinerary helps in planning a suitable private transportation option."
    },
    {
        question: "Which vehicles can be used for VIP Cab Service in Pune?",
        answer: "Vehicle selection depends on the number of passengers, luggage requirements, travel distance, and preferred level of comfort. Premium sedans and spacious SUVs such as an Innova or Innova Crysta can be considered for executive and VIP travel requirements."
    },
    {
        question: "Can I hire a VIP cab in Pune for airport transfers?",
        answer: "Yes, VIP cab service can be arranged for Pune Airport transfers as well as journeys involving Mumbai Airport and other nearby airports. It can be useful for business executives, visiting guests, families, and travelers who prefer a private and comfortable airport transfer."
    },
    {
        question: "Is VIP Cab Service in Pune suitable for corporate travel?",
        answer: "Corporate travelers can use a VIP cab for client meetings, executive transfers, conferences, business visits, and employee travel. A private vehicle can make it easier to manage schedules when several business locations need to be covered during the day."
    },
    {
        question: "Can I book a VIP cab from Pune for outstation travel?",
        answer: "VIP cab rental can be planned for outstation journeys from Pune to destinations such as Mumbai, Lonavala, Mahabaleshwar, Nashik, Goa, Shirdi, and other cities. One-way, round-trip, and multi-day travel requirements can be discussed according to the itinerary."
    },
    {
        question: "Does VIP Cab Service in Pune include a professional driver?",
        answer: "Driver-assisted VIP travel can be arranged for customers who prefer a convenient chauffeur-driven journey. This can be particularly useful for business executives, wedding guests, airport transfers, sightseeing tours, and long-distance road trips."
    },
    {
        question: "Can VIP cabs be hired for weddings and special events in Pune?",
        answer: "A VIP cab can be used for wedding transportation, family functions, celebrations, corporate events, and other occasions where comfortable private travel is preferred. The vehicle can be scheduled for guest transfers between hotels, venues, airports, and railway stations."
    },
    {
        question: "Can I hire a VIP cab for a full-day local trip in Pune?",
        answer: "Yes, full-day cab rental can be useful when your schedule includes multiple stops across Pune. It can support business meetings, city sightseeing, shopping, personal appointments, guest transportation, and event-related travel without arranging separate rides for each destination."
    },
    {
        question: "How early should I reserve a VIP Cab Service in Pune?",
        answer: "Advance reservation is recommended for airport travel, corporate meetings, weddings, special events, weekend trips, and outstation journeys. Sharing your vehicle preference and complete schedule early gives Virendra Cab time to plan the transportation according to your requirements."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Aditya Ranade",
        feedback: "I needed a comfortable cab for a series of business meetings across Pune and preferred having one vehicle throughout the day. The VIP cab arrangement made the schedule easier to manage and provided a comfortable setting between meetings.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Kavya Deshmukh",
        feedback: "For an airport transfer followed by a family function, we chose a VIP cab in Pune. The private vehicle was spacious enough for our luggage and made the entire travel plan much more convenient.",
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
  "name": "VIP Cab Service in Pune",
  "image": "https://virendracabs.com/assets/images/vip-cab-service-in-pune.webp",
  "description": "VIP Cab Service in Pune is designed for executives, business travellers, corporate guests, visiting professionals, special occasions and passengers who prefer a premium chauffeur-driven travel experience. Virendra Cab provides VIP taxi and luxury car rental options for business meetings, airport transfers, hotel pickups, corporate events, conferences, private functions and important city journeys. VIP taxi service Pune can be arranged for individual passengers as well as small groups requiring a professional and comfortable vehicle. Premium cab service Pune is suitable for corporate travel, executive transportation, client visits and scheduled appointments where convenience and presentation are important. Luxury cab booking Pune allows passengers to plan chauffeur-driven travel according to their itinerary, while VIP car rental Pune can be arranged for local usage, full-day requirements, business visits and outstation journeys. VIP chauffeur service Pune provides a dedicated driver for planned travel, airport transfers, meetings, events and special occasions. VIP car hire Pune can also be coordinated for corporate guests, wedding functions, private tours and premium intercity transportation. Executive cab service Pune offers a convenient option for professionals travelling between offices, hotels, airports, railway stations and business destinations. Premium taxi booking Pune can be customized around pickup time, destination, duration and vehicle preference. VIP airport transfer Pune is suitable for passengers requiring a smooth transfer to or from Pune Airport, with pickup and drop arrangements coordinated according to the flight schedule. Customers can share their travel date, pickup location, destination and preferred vehicle category to receive a customized quotation. The final fare depends on the vehicle selected, travel distance, duration, route, waiting requirements, tolls, parking and overall itinerary. Virendra Cab can arrange premium local and outstation transportation across Pune and nearby destinations for business, executive and personal travel requirements.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "38642"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://virendracabs.com/vip-cab-service-in-pune"
  }
};




    return (
        <div>

<Helmet>
  <title>
    VIP Cab Service in Pune | VIP Taxi Service Pune | +91 9022549022
  </title>

  <meta
    name="description"
    content="VIP Cab Service in Pune for executives, corporate guests and premium travellers, with luxury cars, professional chauffeurs, airport transfers and outstation travel."
  />

  <meta
    name="keywords"
    content="VIP cab service in Pune, VIP taxi service Pune, Premium cab service Pune, Luxury cab booking Pune, VIP car rental Pune, VIP chauffeur service Pune, VIP car hire Pune, Executive cab service Pune, Premium taxi booking Pune, VIP airport transfer Pune, VIP airport cab Pune, VIP airport taxi Pune, Luxury taxi service Pune, Luxury cab service Pune, Premium car rental Pune, Premium car hire Pune, Executive taxi service Pune, Executive car rental Pune, Executive car hire Pune, Corporate VIP cab Pune, Corporate luxury cab Pune, Corporate chauffeur service Pune, Business class cab service Pune, Business travel cab Pune, Business taxi service Pune, Premium chauffeur driven car Pune, Luxury chauffeur service Pune, Chauffeur driven luxury car Pune, VIP corporate travel Pune, VIP business travel Pune, VIP hotel transfer Pune, VIP railway station transfer Pune, VIP airport pickup Pune, VIP airport drop Pune, Pune airport VIP cab, Pune airport luxury taxi, VIP cab booking Pune, VIP taxi booking Pune, Premium cab booking Pune, Luxury car booking Pune, Executive cab booking Pune, VIP local cab Pune, VIP outstation cab Pune, VIP outstation taxi Pune, Premium outstation cab Pune, Luxury outstation car rental Pune, VIP car rental with driver Pune, Luxury car rental with chauffeur Pune, VIP wedding car service Pune, VIP event transportation Pune, VIP conference transportation Pune, VIP corporate event cab Pune, VIP guest transportation Pune, Premium airport transfer Pune, Luxury airport transfer Pune, VIP cab service near Pune, Premium taxi service Pune"
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
                            <img src='/images/keyword/133.jpeg' alt='img' className='img-fluid' />
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

export default Vipcabserviceinpune ;