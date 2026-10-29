import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Virendracabservice() {



const cardData = {
    keyword: "Virendra Cabs Services Pune",
    headingDescription: "Virendra Cabs Services Pune offers convenient cab and taxi solutions for local travel, airport transfers, outstation journeys, one-way drops, round trips, and private car requirements. Virendra Cab provides multiple vehicle options for individuals, families, business travellers, and groups, with services covering popular routes from Pune to Mumbai, Shirdi, Ahilyanagar, Nashik, Lonavala, and Mahabaleshwar. Customers can enquire about online booking, airport pickup and drop, sedan and SUV availability, outstation travel, and other transportation requirements according to their schedule.",
    topPlaces: [
        {
            title: "Pune Airport",
            description: "Pune Airport is a key pickup and drop destination for travellers requiring convenient airport transportation for domestic and connecting journeys."
        },
        {
            title: "Mumbai",
            description: "Business travellers, families, and individuals can arrange a private cab from Pune to Mumbai for office visits, family trips, airport transfers, and personal travel."
        },
        {
            title: "Shirdi",
            description: "A dedicated cab to Shirdi is convenient for devotees and families planning temple visits with flexible pickup and return travel arrangements."
        },
        {
            title: "Ahilyanagar",
            description: "Travellers can choose a comfortable outstation cab from Pune to Ahilyanagar for business visits, family requirements, and personal journeys."
        },
        {
            title: "Nashik",
            description: "Private taxi service to Nashik provides convenient intercity transportation for business travel, religious visits, family trips, and sightseeing plans."
        },
        {
            title: "Lonavala",
            description: "Lonavala is a popular short-distance destination from Pune, and a private cab allows travellers to plan their journey around their preferred schedule."
        },
        {
            title: "Mahabaleshwar",
            description: "Families and groups can travel comfortably from Pune to Mahabaleshwar with a suitable cab selected according to passenger count and luggage requirements."
        },
        {
            title: "Bhimashankar",
            description: "A private cab makes travel to Bhimashankar convenient for devotees and nature travellers planning a flexible day trip or pilgrimage journey."
        },
        {
            title: "Alibaug",
            description: "Travellers heading toward Alibaug can arrange a private outstation cab for family holidays, weekend travel, and coastal getaways."
        },
        {
            title: "Goa",
            description: "Long-distance cab service from Pune to Goa provides a private travel option for families, groups, and travellers planning an extended road journey."
        }
    ],
    services: [
        {
            name: "Virendra Cabs Services Pune",
            description: "Virendra Cab provides a range of transportation solutions in Pune, including local travel, airport transfers, outstation journeys, one-way drops, round trips, and private cab bookings."
        },
        {
            name: "Virendra Cabs Pune",
            description: "Virendra Cabs Pune offers convenient taxi options for passengers requiring comfortable transportation for local destinations, airports, business travel, and intercity journeys."
        },
        {
            name: "Virendra Cabs Taxi Service Pune",
            description: "The taxi service is designed for individuals, families, and corporate travellers who need dependable transportation with vehicle choices suited to different travel requirements."
        },
        {
            name: "Virendra Cabs Cab Booking Pune",
            description: "Cab booking in Pune can be arranged according to the passenger's pickup location, destination, travel date, preferred vehicle, and one-way or round-trip requirement."
        },
        {
            name: "Virendra Cabs Contact Number Pune",
            description: "Passengers can use the Virendra Cabs contact support to enquire about vehicle availability, fare details, airport transfers, outstation routes, and booking requirements."
        },
        {
            name: "Virendra Cabs Online Booking",
            description: "Online booking provides a convenient way to share travel details and request a suitable cab for local, airport, or outstation transportation from Pune."
        },
        {
            name: "Virendra Cabs Outstation Taxi Pune",
            description: "Outstation taxi service from Pune is suitable for travellers planning private journeys to nearby cities, pilgrimage destinations, holiday locations, and longer intercity routes."
        },
        {
            name: "Virendra Cabs Airport Taxi Pune",
            description: "Airport taxi service helps passengers arrange comfortable transportation to or from Pune Airport with pickup and drop details planned around their flight schedule."
        },
        {
            name: "Virendra Cabs One-Way Cab Pune",
            description: "One-way cab service is useful for passengers who need a direct drop from Pune to another city without retaining the vehicle for the return journey."
        },
        {
            name: "Virendra Cabs Round-Trip Taxi Pune",
            description: "Round-trip taxi service provides a practical option for travellers planning to visit another city or destination from Pune and return after completing their trip."
        },
        {
            name: "Virendra Cabs Pune To Mumbai",
            description: "Pune to Mumbai cab service offers private intercity transportation for business meetings, airport travel, family visits, relocation, and other personal requirements."
        },
        {
            name: "Virendra Cabs Pune To Shirdi",
            description: "Pune to Shirdi taxi service is suitable for devotees and families seeking comfortable transportation for temple visits, pilgrimage plans, and return journeys."
        },
        {
            name: "Virendra Cabs Pune To Ahilyanagar",
            description: "Travellers can arrange a private cab from Pune to Ahilyanagar for business travel, family visits, personal trips, and other outstation requirements."
        },
        {
            name: "Virendra Cabs Pune To Nashik",
            description: "Pune to Nashik cab service provides a convenient travel option for business journeys, religious visits, family trips, and sightseeing plans."
        },
        {
            name: "Virendra Cabs Pune To Lonavala",
            description: "A Pune to Lonavala cab offers comfortable transportation for weekend outings, family trips, resort visits, and short leisure journeys."
        },
        {
            name: "Virendra Cabs Pune To Mahabaleshwar",
            description: "Private cab service from Pune to Mahabaleshwar allows families, couples, and groups to travel comfortably with a vehicle selected according to their requirements."
        },
        {
            name: "Virendra Cabs Pune Airport Pickup",
            description: "Pune Airport pickup service helps arriving passengers arrange a convenient cab from the airport to their preferred home, hotel, office, or onward destination."
        },
        {
            name: "Virendra Cabs Pune Airport Drop",
            description: "Airport drop service provides direct transportation from a Pune pickup location to the airport, helping passengers coordinate their journey around scheduled flight timings."
        },
        {
            name: "Virendra Cabs Affordable Taxi Service",
            description: "Travellers looking for economical transportation can compare available vehicle categories and select a taxi option that fits their passenger count, luggage, and travel requirements."
        },
        {
            name: "Virendra Cabs Car Rental Pune",
            description: "Car rental service in Pune is useful for travellers who need a private vehicle with a driver for city travel, multiple stops, business appointments, or extended journeys."
        },
        {
            name: "Virendra Cabs Sedan Booking Pune",
            description: "Sedan booking is a practical choice for couples, small families, and business travellers looking for comfortable seating and suitable luggage capacity."
        },
        {
            name: "Virendra Cabs SUV Booking Pune",
            description: "SUV booking provides additional cabin and luggage space for families and groups who require a larger vehicle for local or outstation travel."
        },
        {
            name: "Virendra Cabs Reliable Taxi Service Pune",
            description: "Virendra Cab focuses on organized pickup arrangements, suitable vehicles, route planning, and customer assistance for passengers travelling within and beyond Pune."
        },
        {
            name: "Virendra Cabs Customer Support Pune",
            description: "Customer support helps travellers enquire about cab availability, vehicle categories, booking details, airport transfers, outstation routes, and other travel requirements."
        }
    ],
    tableData: [
        ["Virendra Cabs Services Pune"],
        ["Virendra Cabs Pune"],
        ["Virendra Cabs Taxi Service Pune"],
        ["Virendra Cabs Cab Booking Pune"],
        ["Virendra Cabs Contact Number Pune"],
        ["Virendra Cabs Online Booking"],
        ["Virendra Cabs Outstation Taxi Pune"],
        ["Virendra Cabs Airport Taxi Pune"],
        ["Virendra Cabs One-Way Cab Pune"],
        ["Virendra Cabs Round-Trip Taxi Pune"],
        ["Virendra Cabs Pune To Mumbai"],
        ["Virendra Cabs Pune To Shirdi"],
        ["Virendra Cabs Pune To Ahilyanagar"],
        ["Virendra Cabs Pune To Nashik"],
        ["Virendra Cabs Pune To Lonavala"],
        ["Virendra Cabs Pune To Mahabaleshwar"],
        ["Virendra Cabs Pune Airport Pickup"],
        ["Virendra Cabs Pune Airport Drop"],
        ["Virendra Cabs Affordable Taxi Service"],
        ["Virendra Cabs Car Rental Pune"],
        ["Virendra Cabs Sedan Booking Pune"],
        ["Virendra Cabs SUV Booking Pune"],
        ["Virendra Cabs Reliable Taxi Service Pune"],
        ["Virendra Cabs Customer Support Pune"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Wide Range Of Cab Services",
            WhyChoosedescription: "Virendra Cab provides multiple transportation options covering local travel, airport transfers, outstation trips, one-way drops, round trips, and private car requirements."
        },
        {
            WhyChooseheading: "Convenient Pune Airport Transfers",
            WhyChoosedescription: "Passengers can arrange airport pickup or drop service according to their flight schedule, making travel to and from Pune Airport more convenient."
        },
        {
            WhyChooseheading: "Popular Outstation Routes",
            WhyChoosedescription: "Travellers can plan private journeys from Pune toward destinations such as Mumbai, Shirdi, Ahilyanagar, Nashik, Lonavala, and Mahabaleshwar."
        },
        {
            WhyChooseheading: "Flexible One-Way And Round Trips",
            WhyChoosedescription: "Different travel plans can be accommodated through one-way and round-trip options, allowing passengers to select a journey structure that matches their schedule."
        },
        {
            WhyChooseheading: "Multiple Vehicle Categories",
            WhyChoosedescription: "Sedan and SUV options provide flexibility for individuals, couples, families, and groups with different seating, comfort, and luggage requirements."
        },
        {
            WhyChooseheading: "Private Door-To-Door Travel",
            WhyChoosedescription: "A dedicated cab allows passengers to travel directly between their chosen pickup and destination points without managing multiple public transportation connections."
        },
        {
            WhyChooseheading: "Advance Booking Convenience",
            WhyChoosedescription: "Passengers can share their journey requirements in advance, making it easier to coordinate vehicle availability, pickup timing, destination details, and travel plans."
        },
        {
            WhyChooseheading: "Customer-Focused Travel Support",
            WhyChoosedescription: "From initial booking enquiries to route selection and vehicle requirements, customer support helps travellers organize their cab journey according to their specific transportation needs."
        }
    ]
};


const faqData = [
    {
        question: "What services are available from Virendra Cabs Services Pune?",
        answer: "Virendra Cabs Services Pune can be used for local city travel, airport transfers, outstation journeys, one-way trips, round trips, business travel, family outings, and special occasions. The booking can be planned according to the route, passenger count, and travel schedule."
    },
    {
        question: "Can I book Virendra Cabs Services Pune for airport transportation?",
        answer: "Airport transfers can be arranged for passengers travelling to or from Pune Airport and other nearby airport routes. You can provide your pickup point, flight timing, luggage details, and preferred vehicle while making the booking."
    },
    {
        question: "Does Virendra Cabs Services Pune provide outstation cab bookings?",
        answer: "Outstation trips can be planned from Pune to destinations such as Mumbai, Nashik, Shirdi, Mahabaleshwar, Lonavala, Goa, Kolhapur, Aurangabad, and other cities. Both one-way and return travel requirements can be discussed during reservation."
    },
    {
        question: "Can I hire a cab for local sightseeing in Pune?",
        answer: "Yes, a cab can be arranged for exploring Pune and nearby attractions. Places such as Shaniwar Wada, Aga Khan Palace, Sinhagad Fort, Pataleshwar Cave Temple, and other local destinations can be included according to your preferred itinerary."
    },
    {
        question: "Are different car options available through Virendra Cabs Services Pune?",
        answer: "Vehicle selection can depend on the number of travellers, luggage, route, and trip duration. Sedan cars can suit smaller groups, while vehicles such as Ertiga and Innova Crysta can be considered when additional seating and luggage space are needed."
    },
    {
        question: "Can Virendra Cabs Services Pune be used for corporate travel?",
        answer: "Corporate travellers can arrange transportation for office visits, client meetings, employee travel, airport transfers, conferences, and outstation business trips. Pickup and drop details can be coordinated around the required business schedule."
    },
    {
        question: "Is it possible to book Virendra Cabs Services Pune for a one-way journey?",
        answer: "One-way cab bookings can be arranged when you only need transportation from Pune to your destination without planning a return journey in the same booking. The destination, pickup location, date, and preferred departure time should be provided during reservation."
    },
    {
        question: "Can families use Virendra Cabs Services Pune for weekend trips?",
        answer: "Families can choose the cab service for weekend travel to destinations around Pune, including Lonavala, Mahabaleshwar, Panchgani, Mulshi, and other popular getaway locations. Vehicle selection can be based on family size and luggage requirements."
    },
    {
        question: "Can I book a Pune cab for weddings and special events?",
        answer: "Cab arrangements can be considered for weddings, family functions, ceremonies, and other special occasions where dependable transportation is needed. Different vehicle sizes can be discussed depending on guest movement and event requirements."
    },
    {
        question: "How can I reserve a cab with Virendra Cabs Services Pune?",
        answer: "To make a reservation, share your pickup location, destination, travel date, departure time, number of passengers, and vehicle preference. Providing these details in advance helps in planning the appropriate cab for your journey."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Adwait Joshi",
        feedback: "I needed separate cab arrangements for a Pune office meeting and an airport transfer later the same day. The booking details were handled clearly, and the vehicle suited both parts of my schedule.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Tanvi Chavan",
        feedback: "A weekend family plan from Pune to Lonavala became much easier after arranging the cab in advance. The car had enough room for everyone and our travel bags, making the outing comfortable.",
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
  "name": "Virendra Cabs Services Pune",
  "image": "https://www.virendracabs.com/assets/images/virendra-cabs-services-pune.webp",
  "description": "Virendra Cabs Services Pune offers private cab and taxi transportation for local travel, airport transfers, one-way journeys, round-trip bookings and outstation trips from Pune. Virendra Cab provides convenient travel solutions for customers searching for Virendra Cabs Services Pune, Virendra Cabs Pune, Virendra Cabs Taxi Service Pune and Virendra Cabs Cab Booking Pune. Customers can enquire about suitable vehicles and booking options according to their destination, passenger count, luggage requirements and travel schedule. Local Pune cab services can be arranged for residential, business, shopping, railway station, hotel and other city travel requirements, while outstation taxi services are suitable for intercity journeys to destinations across Maharashtra and neighbouring states. Virendra Cabs Online Booking allows passengers to plan their journey in advance and coordinate pickup details according to their preferred travel time. Customers looking for the Virendra Cabs Contact Number Pune can use +91 9022549022 to enquire about vehicle availability, booking details, current cab fares and travel requirements. Airport transportation is also available for passengers searching for Virendra Cabs Airport Taxi Pune, including transfers to and from Pune Airport as well as longer airport journeys such as Pune to Mumbai Airport. One-way cab bookings can be arranged for customers who need a direct drop without a return journey, while round-trip taxi services are suitable for passengers planning to return to Pune after completing their visit. Virendra Cabs Outstation Taxi Pune can support business trips, family travel, pilgrimage journeys, weekend trips, airport transfers and other intercity transportation needs. Customers can choose from practical vehicle categories such as Sedan, Ertiga, SUV, Innova and Innova Crysta depending on group size and comfort requirements. Pune to Mumbai cab services are also available for passengers travelling between Pune and Mumbai for business, airport transfers, family visits and personal work. Other intercity destinations can be discussed according to the customer's travel plan. The final fare depends on factors such as vehicle type, pickup and drop locations, travel date, trip type, route and applicable toll or parking requirements, so passengers should confirm the current quotation before booking. With advance booking and flexible trip options, Virendra Cabs Services Pune provides a practical choice for customers seeking local, airport and outstation cab transportation from Pune.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.virendracabs.com/virendra-cabs-services-pune"
  }
};




    return (
        <div>

<Helmet>
  <title>
    Virendra Cabs Services Pune | Virendra Cabs Taxi Service Pune | +91 9022549022
  </title>

  <meta
    name="description"
    content="Explore Virendra Cabs Services Pune for local, airport, one-way, round-trip and outstation taxi services. Book online or contact Virendra Cabs for your travel needs."
  />

  <meta
    name="keywords"
    content="Virendra Cabs Services Pune, Virendra Cabs Pune, Virendra Cabs taxi service Pune, Virendra Cabs cab booking Pune, Virendra Cabs contact number Pune, Virendra Cabs online booking, Virendra Cabs outstation taxi Pune, Virendra Cabs airport taxi Pune, Virendra Cabs one-way cab Pune, Virendra Cabs round-trip taxi Pune, Virendra Cabs Pune to Mumbai, Virendra Cabs Pune taxi service, Virendra Cabs Pune cab service, Virendra Cabs Pune booking, Virendra Cabs Pune online booking, Virendra Cabs taxi booking Pune, Virendra Cabs cab service Pune, Virendra Cabs local taxi Pune, Virendra Cabs local cab Pune, Virendra Cabs outstation cab Pune, Virendra Cabs outstation taxi service Pune, Virendra Cabs airport cab Pune, Virendra Cabs airport transfer Pune, Virendra Cabs one way taxi Pune, Virendra Cabs one way cab service Pune, Virendra Cabs round trip cab Pune, Virendra Cabs round trip taxi service Pune, Virendra Cabs private taxi Pune, Virendra Cabs private cab Pune, Virendra Cabs car rental Pune, Virendra Cabs Sedan Pune, Virendra Cabs Ertiga Pune, Virendra Cabs SUV Pune, Virendra Cabs Innova Pune, Virendra Cabs Innova Crysta Pune, Virendra Cabs Pune Airport Taxi, Virendra Cabs Pune Airport Cab, Virendra Cabs Pune Railway Station Taxi, Virendra Cabs Pune Railway Station Cab, Virendra Cabs Pune to Mumbai Cab, Virendra Cabs Pune to Mumbai Taxi, Virendra Cabs Pune to Mumbai One Way Cab, Virendra Cabs Pune to Mumbai Outstation Taxi, Virendra Cabs Pune to Mumbai Airport Cab, Virendra Cabs Pune to Mumbai Airport Taxi, Virendra Cabs contact number, Virendra Cabs phone number Pune, Virendra Cabs booking number Pune, Virendra Cabs cab booking online, Virendra Cabs taxi booking online, Virendra Cabs affordable taxi Pune, Virendra Cabs best taxi service Pune, Virendra Cabs reliable cab service Pune, Virendra Cabs corporate taxi Pune, Virendra Cabs family cab Pune, Virendra Cabs intercity taxi Pune, Virendra Cabs travel service Pune"
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
                            <img src='/images/keyword/122.jpg' alt='img' className='img-fluid' />
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

export default Virendracabservice ;