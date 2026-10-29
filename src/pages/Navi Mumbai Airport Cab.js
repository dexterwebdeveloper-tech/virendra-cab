import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Navimumbaiairportcab() {



const cardData = {
    keyword: "Navi Mumbai Airport Cab",
    headingDescription: "Navi Mumbai Airport Cab service by Virendra Cab provides convenient and comfortable transportation for passengers travelling to or from Navi Mumbai Airport. Whether you need an airport pickup, drop service, online taxi booking, or an outstation transfer, you can select a suitable vehicle according to your travel requirements. Sedan, Ertiga, Innova, SUV, AC, and luxury cab options are available for individuals, families, business travellers, and groups. The service is designed to make airport travel easier with planned bookings, flexible pickup arrangements, and direct transfers to preferred destinations.",
    topPlaces: [
        {
            title: "Navi Mumbai Airport",
            description: "Passengers can arrange convenient pickup and drop services at Navi Mumbai Airport with suitable cab options for local and outstation journeys."
        },
        {
            title: "Panvel",
            description: "Panvel is a key destination around Navi Mumbai Airport, making it convenient for passengers travelling between the airport and nearby residential or business areas."
        },
        {
            title: "Kharghar",
            description: "Travellers staying in Kharghar can use a private airport cab for comfortable pickup and drop services between the area and Navi Mumbai Airport."
        },
        {
            title: "Belapur",
            description: "Airport taxi services connect Navi Mumbai Airport with Belapur for business travellers, families, hotel guests, and local residents."
        },
        {
            title: "Nerul",
            description: "Passengers travelling to Nerul can arrange a direct airport transfer with a vehicle selected according to their seating and luggage requirements."
        },
        {
            title: "Vashi",
            description: "Vashi travellers can book an airport cab for convenient point-to-point transportation between Navi Mumbai Airport and residential or commercial locations."
        },
        {
            title: "Turbhe",
            description: "A private cab provides a practical travel option for passengers commuting between Navi Mumbai Airport and the industrial and commercial areas around Turbhe."
        },
        {
            title: "Airoli",
            description: "Travellers heading toward Airoli can arrange an airport taxi for a direct transfer without the need for multiple public transport connections."
        },
        {
            title: "Uran",
            description: "Airport cab services can also support passengers travelling toward Uran, with private vehicles available for planned local and regional transfers."
        },
        {
            title: "Thane",
            description: "Passengers travelling onward to Thane can use Navi Mumbai Airport cab services for a comfortable intercity transfer with flexible vehicle choices."
        }
    ],
    services: [
        {
            name: "Navi Mumbai Airport Cab",
            description: "Virendra Cab provides Navi Mumbai Airport cab service for passengers requiring convenient pickup, drop, and private transportation to their preferred destination."
        },
        {
            name: "Navi Mumbai Airport Taxi",
            description: "Navi Mumbai Airport taxi service offers a direct and comfortable travel option for individuals, families, and business travellers arriving at or departing from the airport."
        },
        {
            name: "Navi Mumbai Airport Cab Service",
            description: "Passengers can arrange Navi Mumbai Airport cab service for airport transfers, local journeys, hotel drops, and selected outstation routes with suitable vehicle options."
        },
        {
            name: "Navi Mumbai Airport Taxi Service",
            description: "Navi Mumbai Airport taxi service provides private transportation for travellers looking for convenient airport pickup and drop facilities without changing vehicles."
        },
        {
            name: "Cab Service At Navi Mumbai Airport",
            description: "Cab service at Navi Mumbai Airport helps passengers arrange a private vehicle for airport pickup, airport drop, local travel, business trips, and onward journeys."
        },
        {
            name: "Taxi Service At Navi Mumbai Airport",
            description: "Taxi service at Navi Mumbai Airport is suitable for passengers who need a comfortable and direct transfer to residential areas, hotels, offices, railway stations, or other destinations."
        },
        {
            name: "Airport Cab Navi Mumbai",
            description: "Airport cab Navi Mumbai service provides flexible transportation for passengers travelling to or from the airport with vehicle choices based on group size and luggage."
        },
        {
            name: "Navi Mumbai Airport Cab Booking",
            description: "Advance Navi Mumbai Airport cab booking allows passengers to plan their airport transfer by sharing the pickup details, destination, travel date, and preferred vehicle."
        },
        {
            name: "Navi Mumbai Airport Taxi Booking Online",
            description: "Online taxi booking for Navi Mumbai Airport makes it convenient to arrange an airport transfer in advance and select a vehicle according to the journey requirements."
        },
        {
            name: "Navi Mumbai Airport Cab Fare",
            description: "Navi Mumbai Airport cab fare can vary according to the selected vehicle, travel distance, trip requirements, and type of transfer, helping passengers choose a suitable option."
        },
        {
            name: "Navi Mumbai Airport Taxi Charges",
            description: "Navi Mumbai Airport taxi charges depend on factors such as vehicle category, destination, and journey type, allowing travellers to plan their airport transportation accordingly."
        },
        {
            name: "Navi Mumbai Airport Cab Price",
            description: "Navi Mumbai Airport cab price may vary based on vehicle selection, route, and travel requirements, with options available for different passenger groups."
        },
        {
            name: "Best Navi Mumbai Airport Cab Service",
            description: "Travellers comparing Navi Mumbai airport cab services can choose Virendra Cab for planned airport transfers, comfortable vehicles, convenient booking, and direct transportation."
        },
        {
            name: "Cheap Navi Mumbai Airport Cab",
            description: "Passengers looking for an economical Navi Mumbai Airport cab can compare available vehicle options and select a suitable service based on their route and travel requirements."
        },
        {
            name: "24x7 Navi Mumbai Airport Cab Service",
            description: "24x7 Navi Mumbai Airport cab service supports passengers with travel requirements at different hours, making it useful for early-morning flights, late arrivals, and scheduled airport drops."
        },
        {
            name: "Navi Mumbai Airport Innova Cab",
            description: "Navi Mumbai Airport Innova cab is suitable for families and groups requiring additional seating and luggage space for airport transfers and longer journeys."
        },
        {
            name: "Navi Mumbai Airport Ertiga Cab",
            description: "Navi Mumbai Airport Ertiga cab provides a practical option for families and small groups looking for comfortable seating and useful luggage capacity."
        },
        {
            name: "Navi Mumbai Airport Sedan Taxi",
            description: "Navi Mumbai Airport sedan taxi is a convenient choice for individuals, couples, and small families who prefer a comfortable private airport transfer."
        },
        {
            name: "Navi Mumbai Airport SUV Cab",
            description: "Navi Mumbai Airport SUV cab offers additional interior space for families and groups travelling with more passengers or luggage."
        },
        {
            name: "Navi Mumbai Airport AC Cab",
            description: "Navi Mumbai Airport AC cab service provides a comfortable climate-controlled travel option for passengers seeking a pleasant journey to or from the airport."
        },
        {
            name: "Navi Mumbai Airport Luxury Cab",
            description: "Navi Mumbai Airport luxury cab service is suitable for corporate travellers, special occasions, and passengers who prefer a premium and more comfortable airport transportation experience."
        }
    ],
    tableData: [
        ["Navi Mumbai Airport Cab"],
        ["Navi Mumbai Airport Taxi"],
        ["Navi Mumbai Airport Cab Service"],
        ["Navi Mumbai Airport Taxi Service"],
        ["Cab Service At Navi Mumbai Airport"],
        ["Taxi Service At Navi Mumbai Airport"],
        ["Airport Cab Navi Mumbai"],
        ["Navi Mumbai Airport Cab Booking"],
        ["Navi Mumbai Airport Taxi Booking Online"],
        ["Navi Mumbai Airport Cab Fare"],
        ["Navi Mumbai Airport Taxi Charges"],
        ["Navi Mumbai Airport Cab Price"],
        ["Best Navi Mumbai Airport Cab Service"],
        ["Cheap Navi Mumbai Airport Cab"],
        ["24x7 Navi Mumbai Airport Cab Service"],
        ["Navi Mumbai Airport Innova Cab"],
        ["Navi Mumbai Airport Ertiga Cab"],
        ["Navi Mumbai Airport Sedan Taxi"],
        ["Navi Mumbai Airport SUV Cab"],
        ["Navi Mumbai Airport AC Cab"],
        ["Navi Mumbai Airport Luxury Cab"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Convenient Airport Pickup And Drop",
            WhyChoosedescription: "Virendra Cab provides planned pickup and drop facilities for passengers travelling through Navi Mumbai Airport, making airport transportation easier from the start of the journey."
        },
        {
            WhyChooseheading: "Multiple Vehicle Choices",
            WhyChoosedescription: "Travellers can select sedan, Ertiga, Innova, SUV, AC, or luxury cab options according to the number of passengers, luggage requirements, and preferred comfort level."
        },
        {
            WhyChooseheading: "Online Booking Convenience",
            WhyChoosedescription: "Advance online booking allows passengers to provide their airport details, destination, travel date, and vehicle preference before the scheduled journey."
        },
        {
            WhyChooseheading: "Suitable For Families And Groups",
            WhyChoosedescription: "Families and groups can choose spacious vehicles with suitable seating and luggage capacity, making airport travel more comfortable and convenient."
        },
        {
            WhyChooseheading: "Flexible Travel Options",
            WhyChoosedescription: "The service supports airport pickup, airport drop, local transfers, business travel, and longer journeys, giving passengers flexibility when planning transportation."
        },
        {
            WhyChooseheading: "Airport And Outstation Transfers",
            WhyChoosedescription: "Passengers can arrange both local Navi Mumbai airport transfers and longer road journeys according to their destination and travel schedule."
        },
        {
            WhyChooseheading: "Comfortable AC Travel",
            WhyChoosedescription: "AC cab options provide a climate-controlled environment for passengers who want a more comfortable journey, particularly during longer airport transfers."
        },
        {
            WhyChooseheading: "Travel Support Around The Clock",
            WhyChoosedescription: "24x7 cab service options make it easier for passengers to plan transportation for early departures, late-night arrivals, and flights scheduled at different hours."
        }
    ]
};

const faqData = [
    {
        question: "How can I book a Navi Mumbai Airport Cab with Virendra Cab?",
        answer: "You can arrange a Navi Mumbai Airport Cab by sharing your flight schedule, pickup or drop location, passenger count, and preferred vehicle. Virendra Cab can plan the airport transfer around your travel timing and destination requirements."
    },
    {
        question: "Can I book a cab to Navi Mumbai Airport from Pune?",
        answer: "Travelers from Pune can arrange a private cab to Navi Mumbai Airport for domestic or international flight travel. Providing your departure time and Pune pickup location in advance helps plan the journey according to your airport reporting requirements."
    },
    {
        question: "Is Navi Mumbai Airport Cab service available for airport pickup?",
        answer: "Airport pickup arrangements can be planned for passengers arriving at Navi Mumbai Airport. Sharing your flight details, arrival timing, and final destination helps coordinate the transfer from the airport to your home, hotel, office, or another location."
    },
    {
        question: "Can I use a Navi Mumbai Airport taxi for outstation travel?",
        answer: "Passengers arriving at Navi Mumbai Airport can continue their journey to outstation destinations by private cab. Depending on your requirement, routes toward Pune, Mumbai, Nashik, Lonavala, or other cities can be planned as part of the airport transfer."
    },
    {
        question: "What vehicles can I choose for Navi Mumbai Airport travel?",
        answer: "The vehicle can be selected according to your group size and luggage requirements. Sedan cars can work well for individuals and smaller groups, while Ertiga or Innova Crysta may be more suitable for families and groups carrying multiple bags."
    },
    {
        question: "Can families book a Navi Mumbai Airport Cab with luggage?",
        answer: "Families can use a private airport cab to travel together with their luggage. When booking, you can mention the number of passengers and approximate luggage quantity so that a vehicle with suitable seating and storage space can be considered."
    },
    {
        question: "Can I book a Navi Mumbai Airport cab for an early morning flight?",
        answer: "Passengers with early morning departures can arrange their airport transfer in advance according to the flight schedule. Sharing the pickup location and departure details helps plan the journey with appropriate travel time before reaching the airport."
    },
    {
        question: "Is Navi Mumbai Airport Cab service useful for business travelers?",
        answer: "Business travelers can use airport cabs for office transfers, client meetings, corporate visits, hotel transportation, and scheduled flights. A private vehicle can provide direct travel between the airport and the required business destination."
    },
    {
        question: "Can I book a one-way cab to Navi Mumbai Airport?",
        answer: "A one-way airport transfer can be arranged when you only need transportation from your current location to Navi Mumbai Airport. This option can suit passengers departing from Pune, Mumbai, Navi Mumbai, or nearby areas for a scheduled flight."
    },
    {
        question: "How early should I reserve a Navi Mumbai Airport Cab?",
        answer: "Advance booking is useful when your flight schedule is confirmed, especially during weekends, holidays, and busy travel periods. Providing the flight timing, pickup point, passenger details, luggage requirements, and preferred vehicle helps organize the airport journey more smoothly."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Yashwant More",
        feedback: "I booked a private cab for my airport transfer from Pune to Navi Mumbai. The direct journey was convenient, especially because I was carrying multiple bags, and I could plan the departure around my flight timing.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Tanvi Kulkarni",
        feedback: "Our family needed a comfortable ride to Navi Mumbai Airport with several suitcases. The cab gave us enough space to travel together, and arranging the airport transfer in advance made the departure day much less stressful.",
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
  "name": "Navi Mumbai Airport Cab",
  "image": "https://www.virendracabs.com/assets/images/navi-mumbai-airport-cab.webp",
  "description": "Navi Mumbai Airport Cab provides convenient private transportation for passengers travelling to or from Navi Mumbai International Airport and destinations across Navi Mumbai, Mumbai, Pune and nearby cities. Virendra Cab supports travellers searching for Navi Mumbai Airport Cab, Navi Mumbai Airport Taxi, Navi Mumbai Airport Cab Service, Navi Mumbai Airport Taxi Service and Cab Service at Navi Mumbai with suitable vehicle options for individuals, families, corporate travellers and groups. Airport transfers can be arranged for direct pickups and drops between Navi Mumbai Airport and residential areas, hotels, offices, railway stations, business hubs and other destinations. A private airport cab is useful for passengers who prefer direct door-to-door transportation without changing vehicles during their journey. Navi Mumbai Airport Cab Booking can be planned in advance around flight arrival and departure schedules, making the service suitable for domestic and international travellers. Customers can enquire about one-way airport transfers, round trips, local airport drops and longer outstation journeys according to their travel requirements. Sedan, SUV, Ertiga, Innova and Innova Crysta options can be considered based on passenger count, luggage and preferred comfort level. Travellers searching for Navi Mumbai Airport Taxi Fare, Navi Mumbai Airport Cab Fare or Navi Mumbai Airport Cab Price can contact Virendra Cab for the latest applicable fare, as pricing depends on the selected vehicle, route, pickup location, destination and travel requirements. The service is useful for airport transportation to areas such as Vashi, Nerul, Belapur, Kharghar, Panvel, Airoli, Ghansoli, Kopar Khairane and other Navi Mumbai locations. Intercity airport transfers can also be arranged for passengers travelling between Navi Mumbai Airport and Pune, Mumbai, Thane, Lonavala, Nashik or other destinations. Families with luggage, business travellers attending meetings and tourists arriving for sightseeing can choose a private vehicle according to their itinerary. One-way cab bookings are suitable for direct airport drops, while round-trip arrangements can be discussed for passengers who require transportation for their return journey. Advance booking allows passengers to share travel details and organize a suitable pickup or drop-off plan. Virendra Cab offers flexible Navi Mumbai Airport Cab Service for comfortable, direct and convenient airport transportation.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.virendracabs.com/navi-mumbai-airport-cab"
  }
};




    return (
        <div>

<Helmet>
  <title>
    Navi Mumbai Airport Cab | Navi Mumbai Airport Taxi Service | +91 9022549022
  </title>

  <meta
    name="description"
    content="Book Navi Mumbai Airport Cab for convenient airport pickups and drops across Navi Mumbai, Mumbai and nearby cities. Choose sedan, SUV, Ertiga, Innova or Innova Crysta with Virendra Cab."
  />

  <meta
    name="keywords"
    content="Navi Mumbai Airport Cab, Navi Mumbai Airport Taxi, Navi Mumbai Airport Cab Service, Navi Mumbai Airport Taxi Service, Cab Service at Navi Mumbai, Navi Mumbai Airport Transfer, Navi Mumbai Airport Transfer Service, Navi Mumbai Airport Cab Booking, Navi Mumbai Airport Taxi Booking, Navi Mumbai Airport Taxi Booking Online, Navi Mumbai Airport Car Rental, Navi Mumbai Airport Car Hire, Navi Mumbai Airport Cabs, Airport Cab Navi Mumbai, Airport Taxi Navi Mumbai, Navi Mumbai Airport One Way Cab, Navi Mumbai Airport One Way Taxi, Navi Mumbai Airport Round Trip Cab, Navi Mumbai Airport Round Trip Taxi, Navi Mumbai Airport Private Cab, Navi Mumbai Airport Private Taxi, Navi Mumbai Airport Outstation Cab, Navi Mumbai Airport Outstation Taxi, Navi Mumbai Airport Sedan Cab, Navi Mumbai Airport Sedan Taxi, Navi Mumbai Airport SUV Cab, Navi Mumbai Airport SUV Taxi, Navi Mumbai Airport Ertiga Cab, Navi Mumbai Airport Ertiga Taxi, Navi Mumbai Airport Innova Cab, Navi Mumbai Airport Innova Taxi, Navi Mumbai Airport Innova Crysta Cab, Navi Mumbai Airport Innova Crysta Taxi, Navi Mumbai Airport Cab Fare, Navi Mumbai Airport Taxi Fare, Navi Mumbai Airport Cab Price, Navi Mumbai Airport Taxi Price, Navi Mumbai Airport Drop Cab, Navi Mumbai Airport Pickup Cab, Navi Mumbai Airport Corporate Cab, Navi Mumbai Airport Business Taxi, Navi Mumbai Airport Family Cab, Navi Mumbai Airport Cab Hire, Navi Mumbai Airport Taxi Hire, Best Navi Mumbai Airport Cab, Best Navi Mumbai Airport Taxi, Reliable Navi Mumbai Airport Cab, Affordable Navi Mumbai Airport Taxi, Navi Mumbai Airport Cab Booking Online, Navi Mumbai Airport Taxi Service Near Me, Navi Mumbai Airport Cab Service Near Me, Navi Mumbai Airport to Pune Cab, Navi Mumbai Airport to Pune Taxi, Navi Mumbai Airport to Mumbai Cab, Navi Mumbai Airport to Mumbai Taxi, Navi Mumbai Airport to Thane Cab, Navi Mumbai Airport to Thane Taxi, Navi Mumbai Airport to Panvel Cab, Navi Mumbai Airport to Panvel Taxi, Navi Mumbai Airport to Lonavala Cab, Navi Mumbai Airport to Nashik Cab, Vashi Airport Cab, Nerul Airport Cab, Belapur Airport Cab, Kharghar Airport Cab, Panvel Airport Cab, Airoli Airport Cab, Ghansoli Airport Cab"
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
                            <img src='/images/keyword/100.jpg' alt='img' className='img-fluid' />
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

export default Navimumbaiairportcab ;