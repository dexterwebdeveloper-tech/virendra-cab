import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Punetonashikcabservice() {



const cardData = {
    keyword: "Pune to Nashik Cab Service",
    headingDescription: "Pune to Nashik Cab Service makes intercity travel convenient for passengers planning business trips, family visits, pilgrimages, weekend journeys, and airport transfers. Virendra Cab provides flexible options for one-way and round-trip travel, with convenient pickup arrangements from Pune city and Pune Airport. Travellers can choose a suitable cab based on passenger count, luggage, travel schedule, and budget while enjoying a comfortable journey toward Nashik. Whether you need an advance cab booking, a taxi from Pune Airport to Nashik, or a return trip after exploring Nashik, the service is designed to make the route simple and well organized.",

    topPlaces: [
        {
            title: "Trimbakeshwar Jyotirlinga",
            description: "A major pilgrimage destination near Nashik, Trimbakeshwar Jyotirlinga is an important stop for devotees travelling from Pune for religious visits and temple darshan."
        },
        {
            title: "Sula Vineyards",
            description: "Sula Vineyards is a popular Nashik destination known for its vineyard experiences, scenic surroundings, and relaxed outings, making it suitable for leisure travellers."
        },
        {
            title: "Panchavati",
            description: "Panchavati is one of Nashik's prominent cultural and religious areas, featuring important temples and places connected with the city's spiritual heritage."
        },
        {
            title: "Saptashrungi Gad",
            description: "Located in the Nashik district, Saptashrungi Gad attracts devotees and visitors looking for a memorable religious journey through the surrounding hills."
        },
        {
            title: "Pandavleni Caves",
            description: "The ancient Pandavleni Caves provide an interesting sightseeing experience for travellers interested in history, rock-cut architecture, and elevated city views."
        },
        {
            title: "Ram Kund",
            description: "Situated in Panchavati, Ram Kund is a significant religious location along the Godavari River and an important place to visit during a Nashik city tour."
        },
        {
            title: "Kalaram Temple",
            description: "Kalaram Temple is a historic temple in Panchavati known for its distinctive architecture and religious significance, attracting pilgrims throughout the year."
        },
        {
            title: "Gangapur Dam",
            description: "Gangapur Dam offers a peaceful setting around Nashik and can be included in leisure-focused itineraries for visitors looking to explore the city's scenic surroundings."
        },
        {
            title: "Anjaneri Hills",
            description: "Anjaneri Hills is a scenic destination associated with local mythology and trekking, providing an appealing stop for travellers interested in nature and outdoor experiences."
        },
        {
            title: "Nashik City",
            description: "Nashik City combines temples, historical sites, vineyards, markets, and riverside attractions, making it a versatile destination for business and leisure travellers."
        }
    ],

    services: [
        {
            name: "Pune To Nashik Cab Service",
            description: "Virendra Cab provides convenient Pune to Nashik cab service for passengers travelling between the two cities. Flexible pickup arrangements and suitable vehicle options make the journey practical for families, professionals, and leisure travellers."
        },
        {
            name: "Pune To Nashik Cab",
            description: "A Pune to Nashik cab is useful for travellers who prefer direct point-to-point transportation without the complications of changing vehicles. The journey can be arranged according to your preferred pickup time and travel requirements."
        },
        {
            name: "Pune To Nashik Taxi",
            description: "Choose a Pune to Nashik taxi for a comfortable intercity journey with convenient pickup from your preferred location in Pune. This option works well for solo passengers, couples, families, and small groups."
        },
        {
            name: "Pune To Nashik Taxi Fare",
            description: "Pune to Nashik taxi fare depends on factors such as vehicle category, trip type, pickup location, and travel requirements. Travellers can select an appropriate option after reviewing the applicable fare for their journey."
        },
        {
            name: "Pune To Nashik Cab Fare",
            description: "The Pune to Nashik cab fare can vary according to the selected vehicle, one-way or round-trip requirement, and additional travel arrangements. Virendra Cab helps passengers choose a suitable option based on their itinerary."
        },
        {
            name: "Pune Nashik Taxi Service",
            description: "Pune Nashik taxi service is suitable for planned city-to-city travel, family visits, corporate journeys, and sightseeing trips. Convenient scheduling helps passengers organize their Nashik travel with greater ease."
        },
        {
            name: "Pune To Nashik Cab Charges",
            description: "Pune to Nashik cab charges are influenced by the vehicle type, journey pattern, and selected service requirements. Passengers can compare suitable travel options according to their budget and preferred level of comfort."
        },
        {
            name: "One Way Cab Pune To Nashik",
            description: "One way cab Pune to Nashik is a practical choice for travellers who only need transportation to Nashik and do not require the same vehicle for the return journey. It is convenient for relocation, business visits, and planned drop-offs."
        },
        {
            name: "Pune To Nashik Cab Booking",
            description: "Pune to Nashik cab booking allows travellers to arrange their vehicle in advance and plan the journey around their preferred departure time. Advance booking can be especially useful for airport transfers, family trips, and scheduled appointments."
        },
        {
            name: "Pune Nashik Taxi Fare",
            description: "Pune Nashik taxi fare varies according to the selected cab category and journey requirements. Travellers can choose a vehicle that offers a suitable balance between passenger capacity, luggage space, comfort, and overall travel budget."
        },
        {
            name: "Pune Nashik One Way Cab",
            description: "Pune Nashik one way cab service offers direct transportation for passengers travelling to Nashik without a return requirement. It is well suited to travellers with fixed destination plans and one-direction travel schedules."
        },
        {
            name: "Pune Nashik Car Service",
            description: "Pune Nashik car service provides a convenient private travel option between Pune and Nashik. Passengers can arrange the journey for personal, professional, religious, or leisure purposes with a suitable vehicle."
        },
        {
            name: "Pune To Nashik Cab Round Trip",
            description: "Pune to Nashik cab round trip is ideal for passengers planning to return to Pune after completing their Nashik visit. It can simplify travel arrangements for sightseeing, temple visits, meetings, and family outings."
        },
        {
            name: "Taxi From Pune To Nashik",
            description: "A taxi from Pune to Nashik offers direct intercity transportation with pickup arranged according to the passenger's location and schedule. It provides a convenient alternative for travellers who prefer private road travel."
        },
        {
            name: "Pune Airport To Nashik Cab",
            description: "Pune Airport to Nashik cab service is designed for passengers arriving at Pune Airport and continuing directly toward Nashik. The direct transfer helps reduce the need for multiple local transport connections."
        },
        {
            name: "Pune Airport To Nashik Cab",
            description: "Passengers arriving at Pune Airport can arrange a cab to Nashik for a straightforward onward journey. This service is useful for business travellers, tourists, families, and passengers carrying luggage."
        },
        {
            name: "Pune Airport To Nashik Taxi",
            description: "Pune Airport to Nashik taxi service provides direct airport-to-city transportation for travellers who want a private vehicle after landing. Pickup timing can be planned around the passenger's flight schedule."
        },
        {
            name: "Pune Airport To Nashik Cab Service",
            description: "Pune Airport to Nashik cab service helps passengers continue their journey from the airport without arranging separate local transportation. It is suitable for both pre-planned trips and scheduled airport arrivals."
        },
        {
            name: "Pune Airport To Nashik Taxi Booking",
            description: "Pune Airport to Nashik taxi booking allows passengers to organize their airport transfer before arrival. Advance planning can make it easier to coordinate pickup timing, luggage requirements, and the preferred vehicle."
        },
        {
            name: "Cab From Pune Airport To Nashik",
            description: "A cab from Pune Airport to Nashik offers a direct road transfer for passengers arriving in Pune and travelling onward to Nashik. The service is particularly useful when avoiding multiple changes after a flight."
        },
        {
            name: "Taxi From Pune Airport To Nashik",
            description: "Taxi from Pune Airport to Nashik provides a private transfer option for passengers heading directly toward Nashik after landing. It can accommodate different travel requirements depending on the chosen vehicle."
        },
        {
            name: "Pune Airport To Nashik Car Rental",
            description: "Pune Airport to Nashik car rental is suitable for travellers looking for a private vehicle for their onward journey. Depending on the itinerary, passengers can select an appropriate arrangement for direct travel or extended use."
        },
        {
            name: "Pune To Nashik Cab Booking",
            description: "Pune to Nashik cab booking helps travellers secure a suitable vehicle before their scheduled departure. The service can be planned for individual travel, family journeys, business requirements, and sightseeing."
        },
        {
            name: "Pune To Nashik Taxi Booking Online",
            description: "Pune to Nashik taxi booking online offers a convenient way to plan intercity travel in advance. Passengers can share their journey requirements and arrange a suitable cab without needing to visit a booking office."
        },
        {
            name: "Pune To Nashik Cab Fare",
            description: "Pune to Nashik cab fare is determined according to factors such as vehicle selection, trip type, and journey requirements. Travellers can select an option that matches their planned route and budget."
        },
        {
            name: "Pune To Nashik Taxi Fare",
            description: "Pune to Nashik taxi fare can differ based on the vehicle category and whether the journey is one-way or round-trip. Clear trip details help passengers identify the most suitable travel arrangement."
        },
        {
            name: "Pune To Nashik Cab Price",
            description: "Pune to Nashik cab price depends on the selected vehicle and service requirements. Travellers comparing economical options can choose a suitable cab after considering passenger capacity, luggage, and journey type."
        },
        {
            name: "Pune To Nashik Taxi Charges",
            description: "Pune to Nashik taxi charges vary according to the selected service, vehicle category, and travel plan. Virendra Cab provides options that help passengers plan their intercity journey around their specific requirements."
        },
        {
            name: "Best Pune To Nashik Cab Service",
            description: "Travellers searching for the best Pune to Nashik cab service can consider factors such as vehicle condition, booking convenience, driver coordination, route planning, and suitability for their travel schedule."
        },
        {
            name: "Cheap Pune To Nashik Cab",
            description: "Travellers looking for a cheap Pune to Nashik cab can compare available vehicle and trip options according to their budget. Economical choices can be selected while still considering comfort, luggage capacity, and travel convenience."
        }
    ],

    tableData: [
        ["Pune To Nashik Cab Service"],
        ["Pune To Nashik Cab"],
        ["Pune To Nashik Taxi"],
        ["Pune To Nashik Taxi Fare"],
        ["Pune To Nashik Cab Fare"],
        ["Pune Nashik Taxi Service"],
        ["Pune To Nashik Cab Charges"],
        ["One Way Cab Pune To Nashik"],
        ["Pune To Nashik Cab Booking"],
        ["Pune Nashik Taxi Fare"],
        ["Pune Nashik One Way Cab"],
        ["Pune Nashik Car Service"],
        ["Pune To Nashik Cab Round Trip"],
        ["Taxi From Pune To Nashik"],
        ["Pune Airport To Nashik Cab"],
        ["Pune Airport To Nashik Cab"],
        ["Pune Airport To Nashik Taxi"],
        ["Pune Airport To Nashik Cab Service"],
        ["Pune Airport To Nashik Taxi Booking"],
        ["Cab From Pune Airport To Nashik"],
        ["Taxi From Pune Airport To Nashik"],
        ["Pune Airport To Nashik Car Rental"],
        ["Pune To Nashik Cab Booking"],
        ["Pune To Nashik Taxi Booking Online"],
        ["Pune To Nashik Cab Fare"],
        ["Pune To Nashik Taxi Fare"],
        ["Pune To Nashik Cab Price"],
        ["Pune To Nashik Taxi Charges"],
        ["Best Pune To Nashik Cab Service"],
        ["Cheap Pune To Nashik Cab"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Flexible One-Way Travel",
            WhyChoosedescription: "Passengers travelling to Nashik without a return requirement can select a one-way cab arrangement that keeps the journey direct and convenient without unnecessary return-trip planning."
        },
        {
            WhyChooseheading: "Convenient Airport Transfers",
            WhyChoosedescription: "Pune Airport pickups can be coordinated for travellers continuing toward Nashik, making the transfer easier for passengers arriving with luggage or following a fixed flight schedule."
        },
        {
            WhyChooseheading: "Vehicle Options For Different Needs",
            WhyChoosedescription: "Virendra Cab can accommodate different passenger requirements by offering suitable vehicle choices for individual travellers, couples, families, and groups with varying luggage needs."
        },
        {
            WhyChooseheading: "Planned Round-Trip Journeys",
            WhyChoosedescription: "Travellers visiting Nashik for sightseeing, temple darshan, business meetings, or family occasions can arrange round-trip transportation around their planned departure and return schedule."
        },
        {
            WhyChooseheading: "Straightforward Route Planning",
            WhyChoosedescription: "The Pune to Nashik journey can be organized around the passenger's pickup location, destination, preferred departure time, and travel purpose, helping create a more structured intercity experience."
        },
        {
            WhyChooseheading: "Suitable For Airport And City Pickups",
            WhyChoosedescription: "Whether the journey begins from a Pune residential area, business location, hotel, or airport, the cab arrangement can be planned according to the passenger's specific pickup requirement."
        },
        {
            WhyChooseheading: "Comfortable Intercity Journey",
            WhyChoosedescription: "Private cab travel gives passengers the convenience of travelling together in a dedicated vehicle, with space for luggage and the flexibility to manage the journey more comfortably than shared transportation."
        },
        {
            WhyChooseheading: "Easy Advance Booking",
            WhyChoosedescription: "Advance booking helps travellers organize their Pune to Nashik transportation before the travel date, particularly when the trip involves airport arrival, family travel, religious visits, or a time-sensitive appointment."
        }
    ]
};



const faqData = [
    {
        question: "Can I book a Pune to Nashik cab service with Virendra Cab?",
        answer: "Virendra Cab offers private cab options for passengers travelling from Pune to Nashik, with vehicle arrangements based on the number of travellers, luggage, pickup location, travel date, and purpose of the journey."
    },
    {
        question: "Is one-way Pune to Nashik cab service available?",
        answer: "Travellers who only need transportation from Pune to Nashik can enquire about a one-way cab, with the route, vehicle category, and travel requirements discussed before confirming the booking."
    },
    {
        question: "Can I book a round-trip cab from Pune to Nashik?",
        answer: "Round-trip cab arrangements can be planned for passengers visiting Nashik and returning to Pune, with the departure schedule, sightseeing plans, waiting requirements, and return timing considered during the travel discussion."
    },
    {
        question: "Can Virendra Cab provide a cab for Nashik sightseeing from Pune?",
        answer: "Passengers can discuss sightseeing trips covering Nashik attractions such as Sula Vineyards, Trimbakeshwar, Panchavati, Sita Gufa, Pandavleni Caves, and other suitable places according to their itinerary and available travel time."
    },
    {
        question: "What type of vehicle can I choose for Pune to Nashik travel?",
        answer: "Vehicle selection depends on passenger count, luggage, journey duration, and comfort preferences. Virendra Cab can discuss suitable cab options after understanding the complete requirements of the Nashik trip."
    },
    {
        question: "Can families travel from Pune to Nashik by private cab?",
        answer: "Families can enquire about private transportation by sharing their group size, luggage requirements, Pune pickup location, travel date, and preferred departure time for a suitable cab arrangement."
    },
    {
        question: "Can I get a Pune pickup for Nashik travel from different locations?",
        answer: "Pickup arrangements can be discussed from different Pune areas including Baner, Wakad, Kothrud, Hinjewadi, Hadapsar, Viman Nagar, Pimpri-Chinchwad, and other suitable residential or commercial locations."
    },
    {
        question: "Is Pune to Nashik cab service useful for a pilgrimage trip?",
        answer: "Private cab travel can be considered for devotees visiting Nashik and nearby religious destinations such as Trimbakeshwar and Panchavati, with the journey schedule planned according to the intended temple visits."
    },
    {
        question: "Can I book a Pune to Nashik cab for business travel?",
        answer: "Business travellers can enquire about private transportation for meetings, industrial visits, client appointments, and other professional requirements in Nashik, with pickup and return timings planned around their work schedule."
    },
    {
        question: "What information is required to book a Pune to Nashik cab service?",
        answer: "Passengers can provide their Pune pickup address, Nashik destination, travel date, preferred pickup time, passenger count, luggage details, one-way or round-trip requirement, and preferred vehicle type when making an enquiry."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Sameer Wagh",
        feedback: "My family planned a Pune to Nashik trip that included temple visits and local sightseeing. Virendra Cab discussed our itinerary and passenger requirements clearly, and the private cab made moving between the planned locations much easier.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Isha Kulkarni",
        feedback: "I needed to travel from Pune to Nashik for a professional meeting and preferred a direct cab rather than changing transportation. The Virendra Cab team coordinated the pickup and travel details according to my schedule.",
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
  "name": "Pune to Nashik Cab Service",
  "image": "https://www.virendracabs.com/assets/images/pune-to-nashik-cab-service.webp",
  "description": "Pune to Nashik Cab Service is a convenient option for travelers looking for comfortable and dependable road transportation between Pune and Nashik. Virendra Cab provides cab booking support for passengers searching for Pune to Nashik Cab Service, Pune to Nashik Cab and Pune to Nashik Taxi. The service is suitable for families, couples, business travelers, tourists, pilgrims and groups planning a journey to Nashik for sightseeing, work, family visits or religious travel. A private taxi allows passengers to plan their departure according to their schedule while enjoying a more flexible travel experience compared with fixed public transport timings. Travelers can enquire about one-way and round-trip cab options based on their itinerary and return requirements. Pune to Nashik travel can also be combined with visits to important local attractions, temples, business locations and nearby destinations. Advance booking helps passengers arrange an appropriate vehicle according to the number of travelers and luggage requirements. Whether the journey is planned as a direct transfer, weekend trip, family visit or outstation travel, Virendra Cab provides a practical way to organize Pune to Nashik transportation.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.virendracabs.com/pune-to-nashik-cab-service"
  }
};



    return (
        <div>


<Helmet>
  <title>
    Pune to Nashik Cab Service | Pune to Nashik Taxi | +91 9022549022
  </title>

  <meta
    name="description"
    content="Book Pune to Nashik Cab Service for comfortable one-way, round-trip and outstation travel. Choose a suitable Pune to Nashik cab or taxi for family, business and sightseeing journeys with Virendra Cab."
  />

  <meta
    name="keywords"
    content="Pune to Nashik Cab Service, Pune to Nashik Cab, Pune to Nashik Taxi, Pune to Nashik Taxi Service, Pune to Nashik Cab Booking, Pune to Nashik Cab Fare, Pune to Nashik Taxi Fare, Pune to Nashik One Way Cab, Pune to Nashik Round Trip Cab, Pune to Nashik Outstation Cab, Cab from Pune to Nashik, Taxi from Pune to Nashik, Pune Nashik Car Rental, Pune Nashik Taxi Booking, Pune to Nashik Private Cab, Pune to Nashik Travel Cab, Nashik Cab from Pune"
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
                            <img src='/images/keyword/9.jpg' alt='img' className='img-fluid' />
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

export default Punetonashikcabservice;