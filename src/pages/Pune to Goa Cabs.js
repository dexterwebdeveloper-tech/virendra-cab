import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Punetogoacabs() {




const cardData = {
    keyword: "Pune to Goa Cabs",
    headingDescription: "Virendra Cab provides comfortable and convenient Pune to Goa cab services for travellers planning one-way trips, return journeys, family holidays, corporate travel, and private outstation transportation. Customers can choose from suitable vehicle options based on passenger count, luggage, travel duration, and route requirements, including Innova and Innova Crysta options for spacious group travel. Whether you need a cab from Pune to Goa for a planned vacation, airport transfer, private road trip, or flexible car rental, the journey can be arranged with suitable pickup locations and travel preferences.",
    
    topPlaces: [
        {
            title: "Panaji",
            description: "Panaji is a convenient destination for travellers arriving in Goa, with easy access to hotels, business areas, riverfront attractions, and onward transportation across the state."
        },
        {
            title: "Calangute Beach",
            description: "Calangute is one of Goa's popular coastal destinations and a practical drop location for travellers planning a beach holiday with family, friends, or small groups."
        },
        {
            title: "Baga Beach",
            description: "Baga offers access to beaches, restaurants, nightlife, and accommodation areas, making it a popular destination for travellers taking a private cab from Pune."
        },
        {
            title: "Candolim",
            description: "Candolim is suitable for travellers looking for convenient access to North Goa resorts, beaches, restaurants, and nearby attractions after arriving from Pune."
        },
        {
            title: "Anjuna",
            description: "Anjuna is a popular North Goa destination known for its beachside atmosphere and nearby attractions, making it a useful drop point for holiday travellers."
        },
        {
            title: "Vagator",
            description: "Vagator provides access to scenic coastal areas, accommodation options, and nearby North Goa attractions for travellers arriving by private cab from Pune."
        },
        {
            title: "Morjim",
            description: "Morjim is a quieter coastal destination in North Goa where travellers can arrange a direct cab drop for beach stays, resorts, and relaxed holiday itineraries."
        },
        {
            title: "Colva",
            description: "Colva is a convenient South Goa destination for travellers staying near the beach and can be included as a direct drop point for private Pune to Goa journeys."
        },
        {
            title: "Margao",
            description: "Margao is an important South Goa city with railway connectivity, commercial areas, hotels, and access to several nearby destinations."
        },
        {
            title: "Goa Airport",
            description: "Goa Airport is a useful destination for travellers requiring direct transportation from Pune, particularly for connecting with flights, hotels, business locations, or onward holiday plans."
        }
    ],

    services: [
        {
            name: "Pune To Goa Cab Service",
            description: "Virendra Cab provides Pune to Goa cab service for travellers seeking private road transportation for holidays, family trips, business travel, and planned outstation journeys."
        },
        {
            name: "Pune To Goa Cab",
            description: "A private Pune to Goa cab offers direct transportation between the two destinations, allowing travellers to plan their departure time, pickup location, luggage, and preferred travel arrangement."
        },
        {
            name: "Pune To Goa Car Rental",
            description: "Pune to Goa car rental services are suitable for travellers who prefer dedicated road transportation for a holiday, family journey, corporate trip, or customized itinerary."
        },
        {
            name: "Pune To Goa Taxi",
            description: "Travellers can arrange a Pune to Goa taxi for direct intercity travel with a vehicle selected according to passenger requirements, luggage, and preferred level of comfort."
        },
        {
            name: "Pune To Goa Taxi Fare",
            description: "Pune to Goa taxi fare can vary according to the vehicle category, travel arrangement, route, trip type, and other journey requirements, allowing customers to discuss their itinerary before booking."
        },
        {
            name: "Pune To Goa Cab Package",
            description: "Pune to Goa cab packages can be planned around one-way or return travel requirements, trip duration, vehicle preference, passenger count, and the desired Goa itinerary."
        },
        {
            name: "Pune To Goa Cab Fare",
            description: "The cab fare from Pune to Goa depends on factors such as vehicle selection, journey type, travel schedule, and route requirements, making it useful to share complete trip details before confirming."
        },
        {
            name: "Best Cab Service From Pune To Goa",
            description: "Travellers searching for a suitable cab service from Pune to Goa can compare vehicle comfort, pickup convenience, travel requirements, and booking flexibility before selecting an appropriate option."
        },
        {
            name: "Cab Service From Pune To Goa",
            description: "Cab service from Pune to Goa provides a convenient private travel option for families, friends, business travellers, and tourists planning a direct road journey."
        },
        {
            name: "Car Hire Pune To Goa",
            description: "Car hire from Pune to Goa allows travellers to arrange dedicated transportation for their holiday itinerary, with vehicle selection based on group size and luggage requirements."
        },
        {
            name: "Car Rental Pune To Goa",
            description: "A Pune to Goa car rental is useful for customers planning a private intercity journey and looking for a vehicle suited to their travel duration and passenger requirements."
        },
        {
            name: "Goa Pune Cab Service",
            description: "Goa Pune cab service supports travellers returning from Goa to Pune who need a planned private transfer after completing their holiday, business visit, or family trip."
        },
        {
            name: "Goa To Pune Car Rental",
            description: "Goa to Pune car rental services provide a convenient return-travel option for passengers who want dedicated transportation from their Goa location to Pune."
        },
        {
            name: "One Way Cab From Pune To Goa",
            description: "A one-way cab from Pune to Goa is suitable for travellers who only need transportation toward Goa and do not require the same vehicle for a return journey."
        },
        {
            name: "Pune To Goa Cab Rental",
            description: "Pune to Goa cab rental arrangements can be planned according to the preferred vehicle, travel date, pickup location, passenger count, and one-way or return requirement."
        },
        {
            name: "Pune To Goa Cab Cost",
            description: "Pune to Goa cab cost depends on the selected vehicle, journey type, travel requirements, and itinerary, so customers can provide their complete trip details for a suitable rental arrangement."
        },
        {
            name: "Pune To Goa Cab Service Fare",
            description: "The Pune to Goa cab service fare can vary with vehicle category and travel arrangement, allowing travellers to discuss their route, passenger count, and journey type before booking."
        },
        {
            name: "Pune To Goa Cab Service Rates",
            description: "Customers comparing Pune to Goa cab service rates can share their preferred travel date, pickup point, vehicle type, and one-way or return requirement to identify a suitable option."
        },
        {
            name: "Pune To Goa Car Booking",
            description: "Advance Pune to Goa car booking helps travellers organize their vehicle according to the travel date, passenger requirements, luggage, pickup location, and planned Goa destination."
        },
        {
            name: "Pune To Goa Car Hire",
            description: "Pune to Goa car hire provides private transportation for tourists, families, friends, and corporate travellers who prefer a dedicated vehicle for the highway journey."
        },
        {
            name: "Pune To Goa Car Rental Price",
            description: "The Pune to Goa car rental price can differ based on vehicle category, trip type, route, and travel requirements, making itinerary details important when planning the rental."
        },
        {
            name: "Pune To Goa Innova Rental",
            description: "An Innova rental from Pune to Goa is a practical choice for families and groups seeking spacious seating, comfortable highway travel, and convenient luggage capacity."
        },
        {
            name: "Pune To Goa One Way Cab",
            description: "The Pune to Goa one-way cab option provides direct private transportation for travellers who plan to stay in Goa and arrange their return separately."
        },
        {
            name: "Pune To Goa One Way Taxi",
            description: "A one-way taxi from Pune to Goa offers a convenient alternative for passengers who need a dedicated vehicle only for the journey toward their Goa destination."
        },
        {
            name: "Pune To Goa Private Cab",
            description: "A private cab from Pune to Goa gives travellers a dedicated vehicle for their group, making it suitable for family holidays, couples, friends, and business journeys."
        },
        {
            name: "Pune To Goa Taxi Fare One Way",
            description: "One-way taxi fare from Pune to Goa can vary according to the selected vehicle and journey requirements, so customers can discuss their complete travel plan before confirming."
        },
        {
            name: "Pune To Goa Taxi Packages",
            description: "Pune to Goa taxi packages can be planned for one-way or return journeys based on travel duration, vehicle category, passenger count, and the preferred Goa itinerary."
        },
        {
            name: "Pune To Goa Taxi Service",
            description: "Pune to Goa taxi service provides private intercity transportation for travellers planning vacations, family trips, business travel, and other scheduled journeys between Pune and Goa."
        },
        {
            name: "Pune To Goa Innova Crysta Cab",
            description: "An Innova Crysta cab from Pune to Goa is suitable for families and groups looking for a spacious vehicle with comfortable seating and practical luggage capacity for a long highway journey."
        }
    ],

    tableData: [
        ["Pune To Goa Cab Service"],
        ["Pune To Goa Cab"],
        ["Pune To Goa Car Rental"],
        ["Pune To Goa Taxi"],
        ["Pune To Goa Taxi Fare"],
        ["Pune To Goa Cab Package"],
        ["Pune To Goa Cab Fare"],
        ["Best Cab Service From Pune To Goa"],
        ["Cab Service From Pune To Goa"],
        ["Car Hire Pune To Goa"],
        ["Car Rental Pune To Goa"],
        ["Goa Pune Cab Service"],
        ["Goa To Pune Car Rental"],
        ["One Way Cab From Pune To Goa"],
        ["Pune To Goa Cab Rental"],
        ["Pune To Goa Cab Cost"],
        ["Pune To Goa Cab Service Fare"],
        ["Pune To Goa Cab Service Rates"],
        ["Pune To Goa Car Booking"],
        ["Pune To Goa Car Hire"],
        ["Pune To Goa Car Rental Price"],
        ["Pune To Goa Innova Rental"],
        ["Pune To Goa One Way Cab"],
        ["Pune To Goa One Way Taxi"],
        ["Pune To Goa Private Cab"],
        ["Pune To Goa Taxi Fare One Way"],
        ["Pune To Goa Taxi Packages"],
        ["Pune To Goa Taxi Service"],
        ["Pune To Goa Innova Crysta Cab"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Direct Pune To Goa Travel",
            WhyChoosedescription: "Virendra Cab provides direct private transportation between Pune and Goa, allowing travellers to plan their journey around their preferred pickup location, departure schedule, and destination."
        },
        {
            WhyChooseheading: "One Way And Return Options",
            WhyChoosedescription: "Travellers can choose a one-way arrangement when they only need transportation to Goa or plan a suitable return arrangement when the trip requires transportation in both directions."
        },
        {
            WhyChooseheading: "Multiple Vehicle Choices",
            WhyChoosedescription: "Different travel groups can select a suitable vehicle category based on passenger count, luggage, comfort requirements, and the expected duration of the Pune to Goa journey."
        },
        {
            WhyChooseheading: "Spacious Innova Options",
            WhyChoosedescription: "Families and groups can consider Innova and Innova Crysta options when additional seating space and luggage capacity are important for the long-distance highway journey."
        },
        {
            WhyChooseheading: "Flexible Pune Pickup",
            WhyChoosedescription: "Pickup arrangements can be planned around convenient Pune locations and the traveller's schedule, helping passengers begin their Goa journey without unnecessary local transportation."
        },
        {
            WhyChooseheading: "Suitable For Holiday Travel",
            WhyChoosedescription: "Private Pune to Goa cabs are useful for families, couples, friends, and groups planning beach holidays, sightseeing trips, weekend travel, and longer Goa stays."
        },
        {
            WhyChooseheading: "Customized Travel Planning",
            WhyChoosedescription: "The cab arrangement can be discussed according to travel date, destination area in Goa, passenger count, vehicle preference, luggage, and one-way or return requirements."
        },
        {
            WhyChooseheading: "Advance Booking Convenience",
            WhyChoosedescription: "Providing journey details in advance helps organize the preferred vehicle and pickup arrangement, making the Pune to Goa travel plan easier to coordinate before departure."
        }
    ]
};




const faqData = [
    {
        question: "Can I book Pune to Goa Cabs with Virendra Cab?",
        answer: "Virendra Cab can arrange private cab travel from Pune to Goa according to your travel date, pickup point, passenger count, luggage, and preferred vehicle category. The journey can be planned for holidays, family vacations, group trips, or personal travel."
    },
    {
        question: "Is a one-way Pune to Goa cab available?",
        answer: "Travellers who only require transportation from Pune to Goa can enquire about a one-way cab. The Goa destination, Pune pickup location, departure timing, and vehicle requirements can be discussed before confirming the journey."
    },
    {
        question: "Can I book a round-trip cab from Pune to Goa?",
        answer: "A round-trip cab can be considered for travellers planning a Goa vacation and returning to Pune. The stay duration, return date, sightseeing plans, and preferred travel schedule can be discussed while arranging the trip."
    },
    {
        question: "Can I use a Pune to Goa cab for sightseeing?",
        answer: "Passengers can discuss a private Goa itinerary covering destinations such as Panjim, Calangute, Baga, Candolim, Anjuna, Vagator, or South Goa attractions. The sightseeing plan can be adjusted according to the available time and travel preferences."
    },
    {
        question: "Which cab is suitable for travelling from Pune to Goa?",
        answer: "The suitable vehicle depends on the number of passengers, luggage volume, journey duration, and desired comfort level. Virendra Cab can discuss available cab categories after understanding the requirements of the Pune to Goa trip."
    },
    {
        question: "Are Pune to Goa Cabs suitable for family holidays?",
        answer: "Families can enquire about private cab travel by sharing their group size, luggage requirements, Pune pickup location, travel date, and preferred departure time. Vehicle selection can be considered according to the family's travel requirements."
    },
    {
        question: "Can I get a Pune pickup from different locations for Goa travel?",
        answer: "Pickup arrangements can be discussed from various Pune areas including Baner, Wakad, Hinjewadi, Kothrud, Hadapsar, Viman Nagar, Pimpri-Chinchwad, and other suitable residential or commercial locations."
    },
    {
        question: "Can I book Pune to Goa Cabs for a group trip?",
        answer: "Groups travelling to Goa for vacations, celebrations, or leisure can enquire about private cab options. Passenger count, luggage, preferred vehicle, travel dates, and planned Goa destinations can be discussed to identify a suitable arrangement."
    },
    {
        question: "Can I hire a cab from Pune to Goa for a multi-day trip?",
        answer: "Travellers planning to spend several days in Goa can discuss a multi-day cab arrangement based on their itinerary. The stay period, local travel requirements, sightseeing locations, and return schedule can be considered during trip planning."
    },
    {
        question: "What details are needed to book Pune to Goa Cabs?",
        answer: "Passengers can provide their Pune pickup address, Goa destination, travel date, preferred departure time, number of travellers, luggage details, one-way or round-trip requirement, trip duration, and preferred vehicle type when making a booking enquiry."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Tejas Khot",
        feedback: "Our friends planned a Goa trip from Pune and wanted a private cab for the long journey. Virendra Cab discussed our group size, luggage, pickup location, and travel schedule before arranging the trip, making the overall planning convenient.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Riya Jagtap",
        feedback: "For our family holiday, travelling directly from Pune to Goa was more convenient than changing transportation along the way. The cab requirements were coordinated with Virendra Cab around our departure plans and luggage needs.",
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
  "name": "Pune to Goa Cabs",
  "image": "https://www.virendracabs.com/assets/images/pune-to-goa-cabs.webp",
  "description": "Pune to Goa Cabs provide a convenient private transportation option for travelers planning a comfortable road journey from Pune to Goa. Virendra Cab offers cab and taxi booking options for families, couples, friends, business travelers and groups heading to Goa for holidays, beach vacations, weekend trips and longer stays. Passengers searching for Pune to Goa Cab Service, Pune to Goa Cab and Pune to Goa Car Rental can enquire about suitable vehicle options according to their group size, luggage and travel schedule. A Pune to Goa Taxi is useful for travelers who prefer a private vehicle and flexible departure arrangements instead of fixed public transportation timings. Those comparing Pune to Goa Taxi Fare or Pune to Goa Cab Fare can contact Virendra Cab for the current fare based on the selected vehicle, route and trip type. A Pune to Goa Cab Package can be considered for planned holiday itineraries, while Best Cab Service from Pune to Goa and Cab Service from Pune to Goa options can be arranged according to the travel requirement. Travelers searching for Car Hire Pune to Goa or Car Rental Pune to Goa can also enquire about suitable rental arrangements for one-way or round-trip journeys. The service provides a practical way to organize long-distance road travel with a dedicated cab and planned pickup and destination schedule.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.virendracabs.com/pune-to-goa-cabs"
  }
};










    return (
        <div>
<Helmet>
  <title>
    Pune to Goa Cabs | Best Cab Service from Pune to Goa | +91 9022549022
  </title>

  <meta
    name="description"
    content="Book Pune to Goa Cabs for comfortable holiday and outstation travel. Explore Pune to Goa cab service, taxi, car rental, cab package, fare and car hire options with Virendra Cab."
  />

  <meta
    name="keywords"
    content="Pune to Goa Cabs, Pune to Goa Cab Service, Pune to Goa Cab, Pune to Goa Car Rental, Pune to Goa Taxi, Pune to Goa Taxi Fare, Pune to Goa Cab Package, Pune to Goa Cab Fare, Best Cab Service from Pune to Goa, Cab Service from Pune to Goa, Car Hire Pune to Goa, Car Rental Pune to Goa, Goa Pune Cab Service, Pune Goa Cab Booking, Pune to Goa Taxi Service, Pune to Goa Cab Booking, Pune to Goa One Way Cab, Pune to Goa Round Trip Cab, Pune to Goa Outstation Cab, Cab from Pune to Goa, Taxi from Pune to Goa, Pune Goa Private Cab, Pune Goa Car Hire, Pune Goa Taxi Booking"
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
                            <img src='/images/keyword/17.jpg' alt='img' className='img-fluid' />
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

export default Punetogoacabs;