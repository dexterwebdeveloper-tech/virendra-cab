import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Punetojalnacab() {



const cardData = {
    keyword: "Pune to Jalna Cab",
    headingDescription: "Travel from Pune to Jalna with Virendra Cab through a comfortable and convenient private outstation taxi service suitable for business journeys, family visits, personal travel and long-distance road trips. Passengers can choose from sedan, Ertiga, Innova, Innova Crysta and SUV options based on group size, luggage and comfort preferences. Flexible pickup options from Pune Airport, Hinjewadi, Wakad, Hadapsar and Pimpri-Chinchwad make it easier to begin the journey from a convenient location, while one-way and return travel arrangements can be planned according to the complete itinerary.",
    
    topPlaces: [
        {
            title: "Jalna City",
            description: "Explore Jalna's important city areas, markets and local destinations with private cab transportation planned around your travel schedule."
        },
        {
            title: "Ambad",
            description: "Include Ambad in your regional travel plan for family visits, business requirements or local sightseeing with a comfortable private cab."
        },
        {
            title: "Partur",
            description: "Travel conveniently to Partur for personal, family or business purposes with a vehicle selected according to passenger count and luggage requirements."
        },
        {
            title: "Bhokardan",
            description: "Bhokardan can be included in a customized Jalna district itinerary, making private cab transportation useful for regional and family travel."
        },
        {
            title: "Jafrabad",
            description: "Plan a comfortable journey to Jafrabad for local or personal travel with flexible cab arrangements suited to your preferred schedule."
        },
        {
            title: "Badnapur",
            description: "Badnapur is a convenient regional stop around Jalna and can be reached through a private cab suitable for business, family and personal journeys."
        },
        {
            title: "Ghansawangi",
            description: "Travel to Ghansawangi with a dedicated vehicle and include the destination in a wider Jalna district road-trip itinerary."
        },
        {
            title: "Jalna Industrial Area",
            description: "Business travellers visiting Jalna's industrial areas can arrange direct cab transportation from Pune with flexible pickup and scheduling options."
        },
        {
            title: "Jamb Samarth",
            description: "Jamb Samarth can be included in a regional religious or heritage-focused travel itinerary with private transportation arranged for comfortable sightseeing."
        },
        {
            title: "Matsyodari Devi Temple",
            description: "Add Matsyodari Devi Temple to a religious travel itinerary around Jalna with a private cab suitable for families and groups."
        }
    ],

    services: [
        {
            name: "Pune To Jalna Cabs",
            description: "Pune to Jalna cabs provide private intercity transportation for travellers heading to Jalna for business, family visits, personal work or regional travel. Vehicle selection can be matched with passenger count and luggage."
        },
        {
            name: "Jalna To Pune Cab",
            description: "A Jalna to Pune cab offers a convenient return-direction travel option for passengers heading back to Pune after completing business work, family commitments or personal visits."
        },
        {
            name: "Pune To Jalna Cabs",
            description: "Travellers can arrange Pune to Jalna cabs for direct outstation transportation with vehicle options suitable for couples, families and small groups travelling with different luggage requirements."
        },
        {
            name: "Pune To Jalna Cab",
            description: "A Pune to Jalna cab provides comfortable point-to-point transportation for passengers who prefer a private road journey. The service can be arranged for both planned and customized travel schedules."
        },
        {
            name: "Pune To Jalna Taxi",
            description: "Pune to Jalna taxi service is suitable for business travellers, families and individuals looking for direct transportation between the two cities with a vehicle selected according to their travel needs."
        },
        {
            name: "Pune To Jalna Cab Service",
            description: "Virendra Cab provides Pune to Jalna cab service for long-distance journeys with sedan and larger vehicle options. Travellers can choose a suitable category according to group size, luggage and comfort requirements."
        },
        {
            name: "Pune To Jalna Taxi Service",
            description: "The Pune to Jalna taxi service provides a convenient private travel option for passengers planning business trips, family visits or personal journeys with flexible departure arrangements."
        },
        {
            name: "Cab From Pune To Jalna",
            description: "A cab from Pune to Jalna makes long-distance travel more convenient by providing direct road transportation. The service can accommodate different group sizes through a range of vehicle categories."
        },
        {
            name: "Taxi From Pune To Jalna",
            description: "Travellers can arrange a taxi from Pune to Jalna for personal, business or family travel. Pickup timing and vehicle type can be planned around the passenger's preferred itinerary."
        },
        {
            name: "Pune To Jalna Outstation Cab",
            description: "Pune to Jalna outstation cab service is designed for intercity travel and can be arranged as a direct one-way journey or a return trip depending on the traveller's complete schedule."
        },
        {
            name: "Pune To Jalna Car Rental",
            description: "Pune to Jalna car rental provides dedicated private transportation for passengers who want a comfortable road journey. Vehicle selection can be based on passenger capacity, luggage and travel duration."
        },
        {
            name: "Pune To Jalna Innova Cab",
            description: "The Pune to Jalna Innova cab is suitable for families and small groups looking for additional seating and luggage space during a long-distance road journey."
        },
        {
            name: "Pune To Jalna Innova Crysta Cab",
            description: "Pune to Jalna Innova Crysta cab service offers a spacious and premium travel option for passengers who prefer enhanced comfort during an extended intercity journey."
        },
        {
            name: "Pune To Jalna Ertiga Cab",
            description: "An Ertiga cab from Pune to Jalna provides a practical option for families and small groups seeking comfortable seating and useful luggage capacity for the road trip."
        },
        {
            name: "Pune To Jalna Sedan Cab",
            description: "Pune to Jalna sedan cab service is suitable for couples, small families and business travellers who prefer a private vehicle for comfortable intercity transportation."
        },
        {
            name: "Pune To Jalna SUV Taxi",
            description: "Pune to Jalna SUV taxi service provides additional passenger and luggage space, making it suitable for families and groups planning a longer road journey."
        },
        {
            name: "Pune To Jalna AC Cab",
            description: "An air-conditioned Pune to Jalna cab provides a comfortable travel environment throughout the intercity journey and is suitable for families, professionals and passengers carrying luggage."
        },
        {
            name: "Pune Airport To Jalna Cab",
            description: "Pune Airport to Jalna cab service provides direct transportation for passengers arriving at the airport and continuing towards Jalna, avoiding the need to arrange separate local transfers."
        },
        {
            name: "Hinjewadi To Jalna Taxi",
            description: "Hinjewadi to Jalna taxi service is convenient for IT professionals, residents and families who need direct intercity transportation from the Hinjewadi area to Jalna."
        },
        {
            name: "Wakad To Jalna Cab",
            description: "A Wakad to Jalna cab provides convenient pickup from western Pune for travellers heading to Jalna for business, family visits, personal work or other travel requirements."
        },
        {
            name: "Hadapsar To Jalna Taxi",
            description: "Hadapsar to Jalna taxi service allows passengers to begin their intercity journey directly from Hadapsar, providing a convenient alternative to arranging separate transportation to another pickup point."
        },
        {
            name: "Pimpri Chinchwad To Jalna Cab",
            description: "Pimpri Chinchwad to Jalna cab service provides private transportation for residents, families and business travellers who want a direct road journey from the PCMC region."
        },
        {
            name: "Pune To Jalna Business Travel Taxi",
            description: "Pune to Jalna business travel taxi service is useful for professionals travelling for meetings, industrial visits, client appointments and other work-related commitments in Jalna and nearby areas."
        },
        {
            name: "Pune To Jalna Family Trip Cab",
            description: "A Pune to Jalna family trip cab provides private transportation for families travelling with children, senior members or additional luggage, with vehicle options selected according to group requirements."
        },
        {
            name: "Pune To Jalna Long Distance Taxi",
            description: "Pune to Jalna long distance taxi service is designed for passengers seeking comfortable private transportation over an extended road journey, with vehicle categories available for different group sizes."
        },
        {
            name: "Pune To Jalna Night Travel Cab",
            description: "A Pune to Jalna night travel cab provides a private transportation option for passengers who need to travel during evening or nighttime hours according to their personal, business or family schedule."
        },
        {
            name: "Pune To Jalna Outstation Taxi Service",
            description: "Pune to Jalna outstation taxi service offers flexible intercity transportation for one-way and return journeys, allowing travellers to select a vehicle that suits their passenger and luggage requirements."
        },
        {
            name: "Pune To Ambad Cabs Service",
            description: "Pune to Ambad cabs service provides private transportation for travellers heading to Ambad for family, business, religious or personal requirements, with suitable vehicle options for different groups."
        },
        {
            name: "Pune To Partur Cab",
            description: "A Pune to Partur cab provides convenient road transportation for passengers travelling to Partur for personal work, family visits or regional business requirements."
        },
        {
            name: "Pune To Bhokardan Cab Booking",
            description: "Pune to Bhokardan cab booking allows travellers to arrange private transportation in advance for a comfortable journey to Bhokardan, with vehicle selection based on passenger count and luggage."
        },
        {
            name: "Pune To Jafrabad Cab Booking",
            description: "Pune to Jafrabad cab booking provides an organized private travel option for passengers heading to Jafrabad for personal, family or business purposes."
        },
        {
            name: "Pune To Badnapur Cab",
            description: "A Pune to Badnapur cab offers convenient intercity transportation for travellers visiting Badnapur for business, family commitments or other personal requirements."
        },
        {
            name: "Pune To Ghansawangi Cab",
            description: "Pune to Ghansawangi cab service provides private road transportation for travellers heading to Ghansawangi and surrounding Jalna district areas with vehicle options suited to different groups."
        }
    ],

    tableData: [
        ["Pune To Jalna Cabs"],
        ["Jalna To Pune Cab"],
        ["Pune To Jalna Cabs"],
        ["Pune To Jalna Cab"],
        ["Pune To Jalna Taxi"],
        ["Pune To Jalna Cab Service"],
        ["Pune To Jalna Taxi Service"],
        ["Cab From Pune To Jalna"],
        ["Taxi From Pune To Jalna"],
        ["Pune To Jalna Outstation Cab"],
        ["Pune To Jalna Car Rental"],
        ["Pune To Jalna Innova Cab"],
        ["Pune To Jalna Innova Crysta Cab"],
        ["Pune To Jalna Ertiga Cab"],
        ["Pune To Jalna Sedan Cab"],
        ["Pune To Jalna SUV Taxi"],
        ["Pune To Jalna AC Cab"],
        ["Pune Airport To Jalna Cab"],
        ["Hinjewadi To Jalna Taxi"],
        ["Wakad To Jalna Cab"],
        ["Hadapsar To Jalna Taxi"],
        ["Pimpri Chinchwad To Jalna Cab"],
        ["Pune To Jalna Business Travel Taxi"],
        ["Pune To Jalna Family Trip Cab"],
        ["Pune To Jalna Long Distance Taxi"],
        ["Pune To Jalna Night Travel Cab"],
        ["Pune To Jalna Outstation Taxi Service"],
        ["Pune To Ambad Cabs Service"],
        ["Pune To Partur Cab"],
        ["Pune To Bhokardan Cab Booking"],
        ["Pune To Jafrabad Cab Booking"],
        ["Pune To Badnapur Cab"],
        ["Pune To Ghansawangi Cab"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Comfortable Long-Distance Journey",
            WhyChoosedescription: "The Pune to Jalna route involves a substantial road journey, making a comfortable private vehicle an important part of the travel experience. Virendra Cab offers multiple vehicle categories so passengers can choose according to group size, luggage and comfort needs."
        },
        {
            WhyChooseheading: "Flexible Travel Arrangements",
            WhyChoosedescription: "Travellers can plan their Jalna journey around their own schedule instead of relying on fixed group transportation. One-way, return and customized outstation arrangements can be considered based on the purpose and duration of the trip."
        },
        {
            WhyChooseheading: "Multiple Vehicle Choices",
            WhyChoosedescription: "Sedan, Ertiga, Innova, Innova Crysta and SUV options provide flexibility for different passenger groups. Families, couples, professionals and small groups can select a vehicle that offers the required seating and luggage space."
        },
        {
            WhyChooseheading: "Convenient Pune Pickup Areas",
            WhyChoosedescription: "Passengers can arrange travel from convenient locations such as Pune Airport, Hinjewadi, Wakad, Hadapsar and Pimpri-Chinchwad. This makes the service useful for travellers starting their Jalna journey from different parts of Pune."
        },
        {
            WhyChooseheading: "Useful For Business Trips",
            WhyChoosedescription: "Professionals travelling to Jalna can use a private business travel taxi for meetings, industrial visits, appointments and work-related commitments. Direct transportation provides greater flexibility when coordinating the journey with a busy schedule."
        },
        {
            WhyChooseheading: "Family Travel Convenience",
            WhyChoosedescription: "A private cab allows families to travel together without coordinating multiple transport connections. Spacious vehicle options can accommodate children, senior family members and additional luggage more conveniently during the long road journey."
        },
        {
            WhyChooseheading: "Regional Jalna Connectivity",
            WhyChoosedescription: "The service extends beyond Jalna city to destinations such as Ambad, Partur, Bhokardan, Jafrabad, Badnapur and Ghansawangi. This makes private cab travel useful for passengers visiting different parts of the Jalna district."
        },
        {
            WhyChooseheading: "Suitable For Day And Night Travel",
            WhyChoosedescription: "Travellers with different schedules can plan their Pune to Jalna journey according to their preferred departure time, including evening or nighttime travel requirements. Advance planning helps arrange a suitable vehicle and pickup location for the trip."
        }
    ]
};

const faqData = [
    {
        question: "How can I book a Pune to Jalna Cab with Virendra Cab?",
        answer: "To arrange a Pune to Jalna Cab, provide Virendra Cab with your Pune pickup location, travel date, passenger count, luggage requirements, and preferred vehicle type. The journey can be organized according to your one-way, return, business, family, or sightseeing requirements."
    },
    {
        question: "Is a one-way cab available from Pune to Jalna?",
        answer: "Travellers who need direct transportation to Jalna can choose a one-way cab service. It can be a convenient option for personal visits, work assignments, relocation, or any trip where you do not require the same vehicle for the return journey."
    },
    {
        question: "Can I book a round-trip taxi from Pune to Jalna?",
        answer: "A round-trip taxi can be arranged when your itinerary includes returning to Pune after your stay in Jalna. You can share your expected return date and timing so the complete travel plan can be discussed while booking."
    },
    {
        question: "Which cab is suitable for travelling from Pune to Jalna?",
        answer: "Vehicle selection can be based on the number of travellers, luggage, and duration of your journey. A sedan may suit couples or smaller groups, while an Ertiga or Innova Crysta can be considered by families and groups looking for additional seating and luggage space."
    },
    {
        question: "Can I hire a Pune to Jalna Cab for work or business travel?",
        answer: "Business travellers can use a private cab for meetings, site visits, client appointments, and professional commitments in Jalna. A dedicated vehicle also makes it easier to manage additional stops if several business locations need to be covered during the trip."
    },
    {
        question: "Is Pune to Jalna cab service suitable for family trips?",
        answer: "Families can opt for a private cab when they prefer travelling together without changing vehicles during the journey. The vehicle can be selected according to the family size, luggage quantity, and any planned stops along the Pune to Jalna route."
    },
    {
        question: "Can I include sightseeing in my Pune to Jalna Cab trip?",
        answer: "Sightseeing can be included when you want to explore Jalna or nearby attractions after reaching the destination. Depending on your itinerary, places such as Mastani Talav, local temples, historical sites, and other nearby points of interest can be considered for the travel plan."
    },
    {
        question: "Can I get a Pune pickup for my Jalna cab journey?",
        answer: "Pickup arrangements can be discussed for your preferred location in Pune. Sharing the pickup area, departure time, number of passengers, and luggage details in advance helps Virendra Cab plan the journey around your requirements."
    },
    {
        question: "Can I travel with luggage in a Pune to Jalna taxi?",
        answer: "Regular suitcases, travel bags, and other personal luggage can be carried in the cab, with capacity depending on the selected vehicle. If you are travelling with several bags, mentioning the quantity during booking can help determine a more suitable vehicle."
    },
    {
        question: "When is the best time to reserve a Pune to Jalna Cab?",
        answer: "Booking your cab in advance is useful when your travel date is already confirmed, especially for weekends, holidays, and family journeys. Early confirmation of the route, passenger count, pickup location, and vehicle preference helps make the travel arrangements more organized."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Rohan Jadhav",
        feedback: "My work required a trip from Pune to Jalna, and I preferred having a private vehicle for the complete journey. The cab gave me flexibility with my departure time and luggage, while the travel itself was comfortable. Virendra Cab handled the booking process smoothly for my requirement.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Tejaswini More",
        feedback: "A family visit to Jalna was much easier with a direct cab from Pune. We had several bags with us, so having a private vehicle was more convenient than travelling through multiple connections. The overall experience was comfortable, and the journey fit well with our planned schedule.",
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
  "name": "Pune to Jalna Cab",
  "image": "https://www.virendracabs.com/assets/images/pune-to-jalna-cab.webp",
  "description": "Pune to Jalna Cab provides a convenient private travel option for passengers traveling between Pune and Jalna. Virendra Cab offers booking support for customers searching for Pune to Jalna Cabs, Jalna to Pune Cab, Pune to Jalna Cab, Pune to Jalna Taxi, Pune to Jalna Cab Service and Pune to Jalna Taxi Service. A private intercity cab can be arranged for families, business travelers, medical visits, personal journeys, students and other long-distance transportation requirements. Cab from Pune to Jalna and Taxi from Pune to Jalna can be scheduled according to the preferred pickup location, departure time and destination. Pune to Jalna Outstation Cab is suitable for one-way and round-trip journeys, while Pune to Jalna Car Rental can provide a dedicated vehicle for passengers who want flexible travel arrangements. Travelers requiring additional space and comfort can enquire about Pune to Jalna Innova Cab, Pune to Jalna Innova Crysta Cab and Pune to Jalna Ertiga options based on passenger count, luggage and trip requirements. One-way service is useful when the vehicle is needed only for the journey toward Jalna, while round-trip travel can be arranged when passengers require the same cab for their return journey. Customers can also enquire about suitable sedan, SUV and other vehicle categories depending on their budget and comfort preferences. Current Pune to Jalna cab fares and rental charges vary according to vehicle type, route, distance, travel date, trip duration and one-way or round-trip requirements, so passengers can contact Virendra Cab for the latest fare details. Advance booking helps coordinate vehicle availability, pickup timing and travel requirements for a smoother Pune to Jalna journey.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.virendracabs.com/pune-to-jalna-cab"
  }
};






    return (
        <div>



<Helmet>
  <title>
    Pune to Jalna Cab | Pune to Jalna Taxi Service | +91 9022549022
  </title>

  <meta
    name="description"
    content="Book Pune to Jalna Cab for private one-way and round-trip travel. Choose suitable Innova, Innova Crysta or Ertiga cab options from Pune to Jalna with Virendra Cab."
  />

  <meta
    name="keywords"
    content="Pune to Jalna Cab, Pune to Jalna Cabs, Jalna to Pune Cab, Pune to Jalna Taxi, Pune to Jalna Cab Service, Pune to Jalna Taxi Service, Cab from Pune to Jalna, Taxi from Pune to Jalna, Pune to Jalna Outstation Cab, Pune to Jalna Outstation Taxi, Pune to Jalna Car Rental, Pune to Jalna Innova Cab, Pune to Jalna Innova Crysta Cab, Pune to Jalna Ertiga, Pune to Jalna Cab Booking, Pune to Jalna Taxi Booking, Pune to Jalna One Way Cab, Pune to Jalna One Way Taxi, Pune to Jalna Round Trip Cab, Pune to Jalna Round Trip Taxi, Pune to Jalna Private Cab, Pune to Jalna Car Hire, Pune to Jalna Taxi Fare, Pune to Jalna Cab Fare, Pune Jalna Cab, Pune Jalna Taxi, Jalna Cab from Pune, Jalna Taxi from Pune, Jalna to Pune Taxi, Jalna to Pune Cab Service, Jalna to Pune Taxi Service, Jalna to Pune Cab Booking, Jalna to Pune Taxi Booking, Pune Jalna Car Rental, Pune Jalna Innova Rental, Pune Jalna Innova Crysta Rental, Pune Jalna Ertiga Rental, Pune to Jalna Innova Rental, Pune to Jalna Innova Crysta Rental, Pune to Jalna Ertiga Rental, Pune to Jalna SUV Cab, Pune to Jalna Family Cab, Pune to Jalna Business Cab, Pune to Jalna Travel Cab, Pune to Jalna Long Distance Cab, Pune to Jalna Intercity Taxi"
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
                            <img src='/images/keyword/68.jpg' alt='img' className='img-fluid' />
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

export default Punetojalnacab ;