import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Punetopandharcabs() {




const cardData = {
    keyword: "Pune to Pandharpur Cab",
    headingDescription: "Pune to Pandharpur Cab service from Virendra Cab is a convenient option for devotees, families, and groups travelling to Pandharpur for Vitthal Rukmini darshan, religious visits, and pilgrimage tours. Travellers can choose from suitable sedan, Kia Carens, Innova Crysta, and other spacious vehicle options according to passenger count, luggage, and itinerary requirements. Along with direct Pune to Pandharpur travel, customized pilgrimage routes can cover Tuljapur, Akkalkot, Gangapur, Solapur, Jejuri, and Kolhapur, making the service suitable for one-day visits as well as multi-day Maharashtra pilgrimage packages.",

    topPlaces: [
        {
            title: "Vitthal Rukmini Temple",
            description: "The Shri Vitthal Rukmini Temple is the main pilgrimage attraction in Pandharpur and the primary destination for devotees travelling from Pune for Vitthal darshan."
        },
        {
            title: "Chandrabhaga River Ghat",
            description: "Chandrabhaga River Ghat is an important spiritual location in Pandharpur and can be included in a planned temple and pilgrimage itinerary."
        },
        {
            title: "Pundalik Temple",
            description: "Pundalik Temple is a significant religious site near the Chandrabhaga River and offers devotees another meaningful stop during a Pandharpur pilgrimage."
        },
        {
            title: "Tulja Bhavani Temple, Tuljapur",
            description: "The famous Tulja Bhavani Temple can be added to a multi-destination pilgrimage route connecting Pandharpur with Tuljapur from Pune."
        },
        {
            title: "Swami Samarth Temple, Akkalkot",
            description: "Akkalkot is an important spiritual destination associated with Swami Samarth and can be combined with Pandharpur for an extended devotional journey."
        },
        {
            title: "Dattatreya Temple, Gangapur",
            description: "Gangapur is a prominent pilgrimage destination associated with Lord Dattatreya and can be covered as part of a customized Pandharpur and Gangapur tour."
        },
        {
            title: "Siddheshwar Temple, Solapur",
            description: "Siddheshwar Temple in Solapur is a well-known religious attraction that can be included when travellers combine Pandharpur with a Solapur visit."
        },
        {
            title: "Jejuri Khandoba Temple",
            description: "Jejuri is known for the historic Khandoba Temple and can be incorporated into a broader Maharashtra pilgrimage package from Pune."
        },
        {
            title: "Mahalaxmi Temple, Kolhapur",
            description: "Kolhapur's Mahalaxmi Temple is a major religious destination and can be added to a longer pilgrimage itinerary covering Pandharpur and other Maharashtra temples."
        },
        {
            title: "Pandharpur City",
            description: "Pandharpur provides access to several temples, ghats, and pilgrimage-related locations, making it a convenient destination for planned family and devotional travel."
        }
    ],

    services: [
        {
            name: "Pune To Pandharpur Cab",
            description: "Pune to Pandharpur Cab service provides direct private transportation for devotees, families, and groups travelling to Pandharpur. Virendra Cab can arrange a suitable vehicle according to passenger count, luggage, pickup location, and preferred travel schedule."
        },
        {
            name: "Pune To Pandharpur Cab Service",
            description: "Pune to Pandharpur cab service is suitable for Vitthal Rukmini darshan, family visits, and planned pilgrimage journeys. Travellers can select a practical vehicle and coordinate their Pune pickup and Pandharpur travel schedule in advance."
        },
        {
            name: "Pune To Pandharpur Car Rental",
            description: "Pune to Pandharpur car rental offers a private travel option for devotees who prefer dedicated transportation throughout the journey. Vehicle selection can be based on group size, luggage requirements, and whether the trip is one-way or part of a return itinerary."
        },
        {
            name: "Pune To Pandharpur Taxi",
            description: "Pune to Pandharpur taxi service provides a convenient alternative to multiple public transport connections for travellers visiting Pandharpur. The journey can be planned around preferred departure timings and temple visit requirements."
        },
        {
            name: "Pandharpur To Pune Cab",
            description: "Pandharpur to Pune cab service is useful for devotees completing their pilgrimage and returning to Pune by private vehicle. Return travel can be coordinated according to the planned darshan schedule and preferred pickup time from Pandharpur."
        },
        {
            name: "Pune To Pandharpur Innova Crysta",
            description: "Pune to Pandharpur Innova Crysta is suitable for families and groups looking for a spacious vehicle for a long-distance pilgrimage journey. The vehicle provides additional cabin and luggage space for comfortable travel."
        },
        {
            name: "Pune To Pandharpur Taxi",
            description: "Pune to Pandharpur taxi arrangements can be planned for individual devotees, families, and small groups. A suitable vehicle category can be selected according to passenger requirements and the duration of the pilgrimage."
        },
        {
            name: "Pune To Pandharpur Kia Carens On Rent",
            description: "Pune to Pandharpur Kia Carens on rent provides a practical option for families and medium-sized groups requiring additional seating and luggage space. It can be used for direct Pandharpur travel or a longer pilgrimage itinerary."
        },
        {
            name: "Pune To Pandharpur Car Package",
            description: "A Pune to Pandharpur car package can be planned around temple visits, return travel, and preferred journey duration. Travellers can also combine Pandharpur with nearby pilgrimage destinations for a more comprehensive itinerary."
        },
        {
            name: "Pune To Pandharpur Cab Booking",
            description: "Pune to Pandharpur cab booking helps travellers arrange their preferred vehicle and pickup schedule before departure. Advance planning is useful for devotees travelling during busy pilgrimage periods or planning specific darshan timings."
        },
        {
            name: "Pune To Pandharpur Package Tour",
            description: "A Pune to Pandharpur package tour is suitable for travellers who want a planned pilgrimage journey rather than arranging separate transportation between destinations. The itinerary can include Pandharpur and additional temples according to the preferred schedule."
        },
        {
            name: "Pune To Akkalkot Trip Package Price",
            description: "Travellers comparing Pune to Akkalkot trip package price options can plan a suitable vehicle and itinerary based on journey duration, passenger count, and additional pilgrimage stops. Virendra Cab supports customized travel planning for devotional routes."
        },
        {
            name: "Pune To Pandharpur Yatra Package",
            description: "A Pune to Pandharpur Yatra package can be arranged for devotees seeking convenient transportation for Vitthal darshan and nearby religious visits. The journey can be customized for a one-day visit or an extended pilgrimage."
        },
        {
            name: "Pune To Pandharpur Tuljapur Cab",
            description: "Pune to Pandharpur Tuljapur cab service allows devotees to combine two important pilgrimage destinations within one planned journey. The route can be organized according to temple visit timings and preferred travel duration."
        },
        {
            name: "Pune To Pandharpur Akkalkot Cab",
            description: "Pune to Pandharpur Akkalkot cab is suitable for devotees planning visits to both Vitthal Rukmini Temple and Swami Samarth Temple. A private cab makes it easier to coordinate the sequence and timing of both destinations."
        },
        {
            name: "Pune To Pandharpur Gangapur Cab",
            description: "Pune to Pandharpur Gangapur cab service supports a multi-destination spiritual journey covering Pandharpur and the important Dattatreya pilgrimage centre at Gangapur. The itinerary can be planned around the preferred temple visits."
        },
        {
            name: "Pune Pandharpur Tuljapur Tour Package",
            description: "The Pune Pandharpur Tuljapur tour package is designed for devotees who want to cover Vitthal Rukmini Temple and Tulja Bhavani Temple in one organized pilgrimage. Travel duration and vehicle choice can be adjusted according to the itinerary."
        },
        {
            name: "Pune Pandharpur Akkalkot Tour Package",
            description: "A Pune Pandharpur Akkalkot tour package combines two prominent Maharashtra pilgrimage destinations and provides dedicated transportation for the journey. The route can be planned for family groups, devotees, or friends travelling together."
        },
        {
            name: "Pune To Pandharpur Tuljapur Akkalkot Cab",
            description: "Pune to Pandharpur Tuljapur Akkalkot cab service is suitable for travellers planning a multi-temple pilgrimage covering three important religious destinations. Virendra Cab can arrange a vehicle based on group size and the required trip duration."
        },
        {
            name: "Pune Pandharpur Akkalkot Gangapur Tour",
            description: "The Pune Pandharpur Akkalkot Gangapur tour connects important spiritual destinations including Vitthal darshan, Swami Samarth pilgrimage, and Gangapur. A private cab allows the group to follow a customized route without changing vehicles between locations."
        },
        {
            name: "Pune To Pandharpur Tuljapur Gangapur Package",
            description: "A Pune to Pandharpur Tuljapur Gangapur package is suitable for devotees looking to cover multiple temples in a single pilgrimage itinerary. Travel arrangements can be organized around preferred stay duration and temple visit schedules."
        },
        {
            name: "Pune To Pandharpur Kolhapur Cab",
            description: "Pune to Pandharpur Kolhapur cab service is useful for travellers combining Vitthal darshan with a visit to the Mahalaxmi Temple in Kolhapur. The route can be arranged as part of a longer religious or family tour."
        },
        {
            name: "Pune To Pandharpur Jejuri Cab Package",
            description: "A Pune to Pandharpur Jejuri cab package allows travellers to combine the Khandoba Temple at Jejuri with the spiritual attractions of Pandharpur. The itinerary can be adjusted according to the preferred temple sequence and available travel time."
        },
        {
            name: "Pune To Pandharpur And Solapur Cab",
            description: "Pune to Pandharpur and Solapur cab service provides convenient private transportation for travellers visiting both destinations. The journey can include Pandharpur's pilgrimage attractions along with religious or personal stops in Solapur."
        },
        {
            name: "Pune Pandharpur Tuljapur Akkalkot Three-Day Tour",
            description: "The Pune Pandharpur Tuljapur Akkalkot three-day tour is suitable for devotees seeking a relaxed multi-day pilgrimage covering three major spiritual destinations. A dedicated cab helps coordinate temple visits, travel time, and return planning."
        },
        {
            name: "Maharashtra Pilgrimage Package From Pune",
            description: "A Maharashtra pilgrimage package from Pune can be customized around multiple temples and religious destinations according to the traveller's preferred route. Virendra Cab can support private group travel with vehicle options suited to the number of passengers."
        },
        {
            name: "Pune Vitthal Swami Samarth Darshan Tour",
            description: "The Pune Vitthal Swami Samarth Darshan tour combines Pandharpur's Vitthal pilgrimage with Akkalkot's Swami Samarth darshan. This type of private religious tour is suitable for families and groups seeking a coordinated multi-destination journey."
        },
        {
            name: "Pune Pandharpur Akkalkot Gangapur Darshan Cab",
            description: "Pune Pandharpur Akkalkot Gangapur Darshan cab service provides dedicated transportation for devotees planning a broader pilgrimage covering Pandharpur, Akkalkot, and Gangapur. The route can be customized according to temple schedules, group size, and trip duration."
        }
    ],

    tableData: [
        ["Pune To Pandharpur Cab"],
        ["Pune To Pandharpur Cab Service"],
        ["Pune To Pandharpur Car Rental"],
        ["Pune To Pandharpur Taxi"],
        ["Pandharpur To Pune Cab"],
        ["Pune To Pandharpur Innova Crysta"],
        ["Pune To Pandharpur Taxi"],
        ["Pune To Pandharpur Kia Carens On Rent"],
        ["Pune To Pandharpur Car Package"],
        ["Pune To Pandharpur Cab Booking"],
        ["Pune To Pandharpur Package Tour"],
        ["Pune To Akkalkot Trip Package Price"],
        ["Pune To Pandharpur Yatra Package"],
        ["Pune To Pandharpur Tuljapur Cab"],
        ["Pune To Pandharpur Akkalkot Cab"],
        ["Pune To Pandharpur Gangapur Cab"],
        ["Pune Pandharpur Tuljapur Tour Package"],
        ["Pune Pandharpur Akkalkot Tour Package"],
        ["Pune To Pandharpur Tuljapur Akkalkot Cab"],
        ["Pune Pandharpur Akkalkot Gangapur Tour"],
        ["Pune To Pandharpur Tuljapur Gangapur Package"],
        ["Pune To Pandharpur Kolhapur Cab"],
        ["Pune To Pandharpur Jejuri Cab Package"],
        ["Pune To Pandharpur And Solapur Cab"],
        ["Pune Pandharpur Tuljapur Akkalkot Three-Day Tour"],
        ["Maharashtra Pilgrimage Package From Pune"],
        ["Pune Vitthal Swami Samarth Darshan Tour"],
        ["Pune Pandharpur Akkalkot Gangapur Darshan Cab"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Dedicated Pandharpur Pilgrimage Travel",
            WhyChoosedescription: "Virendra Cab provides private travel options for devotees visiting Pandharpur for Vitthal Rukmini darshan, with vehicle choices and pickup arrangements that can be planned around the pilgrimage schedule."
        },
        {
            WhyChooseheading: "Multi-Temple Tour Flexibility",
            WhyChoosedescription: "Travellers can combine Pandharpur with Tuljapur, Akkalkot, Gangapur, Jejuri, Solapur, or Kolhapur to create a customized Maharashtra pilgrimage route instead of arranging separate transportation for each destination."
        },
        {
            WhyChooseheading: "Multiple Vehicle Categories",
            WhyChoosedescription: "Sedans, Kia Carens, Ertiga, Innova, Innova Crysta, SUVs, and larger group vehicles provide flexibility for individuals, families, and devotional groups with different seating and luggage requirements."
        },
        {
            WhyChooseheading: "Suitable For Family Groups",
            WhyChoosedescription: "Families and groups can travel together in a vehicle selected according to passenger count, making longer pilgrimage routes more convenient and reducing the need to coordinate multiple smaller vehicles."
        },
        {
            WhyChooseheading: "One-Day And Multi-Day Options",
            WhyChoosedescription: "Whether the requirement is a direct Pandharpur visit or a two- or three-day pilgrimage covering several temples, the itinerary can be planned according to available time and preferred sightseeing requirements."
        },
        {
            WhyChooseheading: "Convenient Pune Pickup",
            WhyChoosedescription: "Pickup arrangements can be coordinated from suitable locations across Pune, allowing travellers to begin their pilgrimage journey directly without depending on additional local transportation."
        },
        {
            WhyChooseheading: "Customized Darshan Planning",
            WhyChoosedescription: "Temple visits, route sequence, stopovers, return travel, and additional destinations can be incorporated into the journey plan, giving devotees greater flexibility when organizing their pilgrimage."
        },
        {
            WhyChooseheading: "Advance Booking Convenience",
            WhyChoosedescription: "Advance booking helps travellers finalize their preferred vehicle, pickup timing, and multi-destination route before departure, which can be particularly useful for family pilgrimages and group tours."
        }
    ]
};



const faqData = [
    {
        question: "Can I book a Pune to Pandharpur cab with Virendra Cab?",
        answer: "Virendra Cab can arrange private cab travel from Pune to Pandharpur according to your travel date, pickup location, passenger count, luggage, and preferred vehicle category. The journey can be planned for pilgrimage, family travel, or personal requirements."
    },
    {
        question: "Is a one-way Pune to Pandharpur cab available?",
        answer: "Devotees travelling only from Pune to Pandharpur can enquire about a one-way cab. The pickup point, destination, departure time, number of passengers, and vehicle requirements can be discussed before confirming the trip."
    },
    {
        question: "Can I book a round-trip cab from Pune to Pandharpur?",
        answer: "A round-trip cab can be considered for passengers who plan to complete darshan in Pandharpur and return to Pune. The temple visit schedule, waiting requirements, and preferred return timing can be discussed while arranging the journey."
    },
    {
        question: "Can I visit Vitthal Rukmini Temple by cab from Pune?",
        answer: "Private cab travel can be planned for devotees visiting the Shri Vitthal Rukmini Temple in Pandharpur. The journey schedule can be arranged around the preferred departure time, darshan plans, and return requirements."
    },
    {
        question: "What type of cab is suitable for a Pune to Pandharpur pilgrimage?",
        answer: "The suitable vehicle depends on the number of devotees, luggage, journey duration, and comfort preferences. Virendra Cab can discuss appropriate cab categories for couples, families, or groups travelling from Pune to Pandharpur."
    },
    {
        question: "Can senior citizens travel from Pune to Pandharpur by private cab?",
        answer: "Families travelling with senior citizens can enquire about private transportation and plan the journey around their preferred travel pace, rest requirements, pickup location, temple schedule, and overall trip duration."
    },
    {
        question: "Can I get a Pune pickup from my local area for Pandharpur travel?",
        answer: "Pickup arrangements can be discussed from areas such as Kothrud, Baner, Wakad, Hinjewadi, Hadapsar, Viman Nagar, Pimpri-Chinchwad, and other suitable Pune locations depending on the travel requirements."
    },
    {
        question: "Is Pune to Pandharpur cab service suitable for family pilgrimage?",
        answer: "Families can enquire about a private cab by providing their passenger count, luggage details, travel date, preferred departure time, and darshan requirements. The vehicle can be selected according to the size and needs of the group."
    },
    {
        question: "Can I include other religious places in a Pune to Pandharpur cab trip?",
        answer: "Additional religious or local destinations can be discussed when they fit the planned route and available travel time. The preferred itinerary, temple visits, waiting requirements, and return schedule can be considered before finalising the trip."
    },
    {
        question: "What information is required to book a Pune to Pandharpur cab?",
        answer: "Passengers can provide their Pune pickup address, Pandharpur destination, travel date, preferred departure time, number of travellers, luggage details, one-way or round-trip requirement, darshan plans, and preferred vehicle type."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Vishal Jagtap",
        feedback: "Our family planned a Pune to Pandharpur pilgrimage and wanted a private vehicle because we were travelling with elderly parents. Virendra Cab discussed our passenger details and preferred schedule, making the journey easier to organise.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Renuka More",
        feedback: "A group of devotees arranged a trip from Pune to Pandharpur for Vitthal Rukmini darshan. The cab requirements and travel timing were coordinated with Virendra Cab according to our group size and planned temple visit.",
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
  "name": "Pune to Pandharpur Cab",
  "image": "https://www.virendracabs.com/assets/images/pune-to-pandharpur-cab.webp",
  "description": "Pune to Pandharpur Cab is a convenient travel option for devotees, families and travelers planning a comfortable journey from Pune to Pandharpur. Virendra Cab provides private cab booking support for passengers searching for Pune to Pandharpur Cab and Pune to Pandharpur Cab Service. The service is suitable for religious journeys, family trips, temple visits, weekend travel and one-way or round-trip transportation. Devotees can arrange a private taxi according to their preferred departure time, travel schedule and return requirements, making the journey more flexible than fixed public transportation. Passengers traveling with family members or groups can enquire about suitable vehicle options based on passenger count and luggage requirements. Travelers planning a broader pilgrimage itinerary can also combine Pandharpur travel with nearby religious destinations and other Maharashtra routes according to their schedule. Current fare details can be confirmed with Virendra Cab based on the selected vehicle, trip type and travel requirements. Advance booking helps organize pickup and destination details while providing a dedicated vehicle for the journey. Whether the purpose is Pandharpur darshan, a family visit, a pilgrimage trip or an outstation journey, Virendra Cab offers a practical way to arrange comfortable Pune to Pandharpur road transportation.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.virendracabs.com/pune-to-pandharpur-cab"
  }
};




    return (
        <div>


<Helmet>
  <title>
    Pune to Pandharpur Cab | Pune to Pandharpur Cab Service | +91 9022549022
  </title>

  <meta
    name="description"
    content="Book Pune to Pandharpur Cab for temple visits, pilgrimage and family travel. Get convenient Pune to Pandharpur cab service and private taxi options with Virendra Cab."
  />

  <meta
    name="keywords"
    content="Pune to Pandharpur Cab, Pune to Pandharpur Cab Service, Pune to Pandharpur Taxi, Pune to Pandharpur Taxi Service, Pune to Pandharpur Cab Booking, Pune to Pandharpur Cab Fare, Pune to Pandharpur Taxi Fare, Pune to Pandharpur One Way Cab, Pune to Pandharpur Round Trip Cab, Pune to Pandharpur Outstation Cab, Cab from Pune to Pandharpur, Taxi from Pune to Pandharpur, Pune Pandharpur Car Rental, Pune Pandharpur Taxi Booking, Pandharpur Cab from Pune, Pandharpur Darshan Cab Pune, Pandharpur Yatra Cab Pune, Pune to Pandharpur Private Cab, Pune to Pandharpur Travel Cab"
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
                            <img src='/images/keyword/20.jpg' alt='img' className='img-fluid' />
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

export default Punetopandharcabs ;