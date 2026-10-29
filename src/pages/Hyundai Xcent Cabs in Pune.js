import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Hyundaixcentcabinpune() {



const cardData = {
    keyword: "Hyundai Xcent Cabs in Pune",
    headingDescription: "Virendra Cab provides Hyundai Xcent cab services in Pune for comfortable local transportation, airport transfers, corporate travel, sightseeing, one-way journeys, and outstation trips. Hyundai Xcent is a practical sedan option for individuals, couples, families, and business travellers who need private transportation with comfortable seating and suitable luggage space. Cab bookings can be planned from different parts of Pune, including major residential, commercial, technology, and business areas. Whether the requirement is a local ride, airport transfer, tourist journey, or intercity trip, Hyundai Xcent Cabs in Pune can be arranged according to the passenger's route, travel schedule, and vehicle requirement.",
    topPlaces: [
       
        {
            title: "Shirdi",
            description: "Hyundai Xcent cabs offer a practical option for individuals and small families travelling from Pune to Shirdi for pilgrimage and nearby sightseeing."
        },
        {
            title: "Alibaug",
            description: "A private Xcent cab can be arranged for coastal trips to Alibaug, providing comfortable transportation for leisure travel and planned return journeys."
        },
        {
            title: "Kolhapur",
            description: "Hyundai Xcent outstation travel to Kolhapur is useful for family visits, business requirements, pilgrimage trips, and sightseeing itineraries."
        },
         
        {
            title: "Mahabaleshwar",
            description: "A Hyundai Xcent can provide convenient private transportation for Pune to Mahabaleshwar trips, including family holidays, sightseeing, and planned return journeys."
        },
        {
            title: "Nashik",
            description: "Travellers heading to Nashik can use a Hyundai Xcent for business visits, family travel, temple visits, and sightseeing with direct private transportation."
        },
        {
            title: "Satara",
            description: "Passengers travelling to Satara can choose an Xcent cab for private transportation suited to personal visits, business travel, and onward journeys."
        },
        {
            title: "Lonavala",
            description: "Hyundai Xcent cabs are suitable for travellers planning a comfortable private journey from Pune to Lonavala for weekend breaks, sightseeing, and family outings."
        },
        {
            title: "Khandala",
            description: "Khandala is a convenient short-trip destination where an Xcent cab can provide direct transportation for couples, families, and small groups."
        },
        {
            title: "Lavasa",
            description: "Hyundai Xcent cabs can be used for leisure trips to Lavasa, giving passengers private road transportation for sightseeing and short holiday plans."
        },
        {
            title: "Matheran",
            description: "Travellers planning a Matheran trip can use a Hyundai Xcent for the road journey from Pune, making the travel arrangement convenient for small groups."
        }
    ],
    services: [
        {
            name: "Xcent Cab Service in Pune",
            description: "Xcent Cab Service in Pune provides private sedan transportation for local rides, airport transfers, corporate requirements, sightseeing, and outstation journeys."
        },
        {
            name: "Hyundai Xcent Rental Pune",
            description: "Hyundai Xcent Rental Pune is suitable for travellers who need a private sedan for city travel, business visits, family trips, airport transfers, or longer journeys."
        },
        {
            name: "Hyundai Xcent Taxi Booking Pune",
            description: "Hyundai Xcent Taxi Booking Pune allows passengers to plan a private sedan ride in advance according to their pickup point, destination, and travel schedule."
        },
        {
            name: "Sedan Cab Service Pune",
            description: "Sedan Cab Service Pune provides a comfortable private vehicle option for daily transportation, airport travel, corporate movement, sightseeing, and intercity journeys."
        },
        {
            name: "Hyundai Xcent Car Booking Pune",
            description: "Hyundai Xcent Car Booking Pune is useful for passengers looking to reserve a dedicated Xcent sedan for local travel, airport transfers, and outstation requirements."
        },
        {
            name: "Xcent Outstation Cab Pune",
            description: "Xcent Outstation Cab Pune is designed for passengers travelling from Pune to destinations such as hill stations, pilgrimage locations, business cities, and tourist destinations."
        },
        {
            name: "Hyundai Xcent Airport Transfer Pune",
            description: "Hyundai Xcent Airport Transfer Pune provides direct private transportation for airport pickups and drops, suitable for individuals and small families travelling with regular luggage."
        },
        {
            name: "Pune Xcent Car Hire",
            description: "Pune Xcent Car Hire can be arranged for personal travel, corporate requirements, sightseeing, airport transportation, and planned outstation journeys."
        },
        {
            name: "Hyundai Xcent Tourist Vehicle Pune",
            description: "Hyundai Xcent Tourist Vehicle Pune is suitable for sightseeing trips, local tours, weekend travel, and private holiday transportation for small groups."
        },
        {
            name: "Hyundai Xcent Online Cab Booking Pune",
            description: "Hyundai Xcent Online Cab Booking Pune helps travellers arrange their sedan transportation in advance according to the journey date, pickup area, destination, and trip type."
        },
        {
            name: "Hyundai Xcent Cabs in Hinjewadi Pune",
            description: "Hyundai Xcent Cabs in Hinjewadi Pune are suitable for technology professionals, corporate visitors, residents, airport travellers, and passengers planning outstation journeys."
        },
        {
            name: "Hyundai Xcent Cabs in Kharadi Pune",
            description: "Hyundai Xcent Cabs in Kharadi Pune provide private transportation for office travel, business meetings, airport transfers, hotel visits, and local journeys."
        },
        {
            name: "Hyundai Xcent Cabs in Hadapsar Pune",
            description: "Hyundai Xcent Cabs in Hadapsar Pune support local travel, family transportation, corporate movement, airport requirements, and planned outstation trips."
        },
        {
            name: "Hyundai Xcent Cabs in Baner Pune",
            description: "Hyundai Xcent Cabs in Baner Pune can be used for business meetings, residential travel, airport transfers, sightseeing, and intercity transportation."
        },
        {
            name: "Hyundai Xcent Cabs in Wakad Pune",
            description: "Hyundai Xcent Cabs in Wakad Pune offer private transportation for local rides, corporate travel, airport drops, family trips, and outstation journeys."
        },
        {
            name: "Hyundai Xcent Cabs in Pimpri Chinchwad",
            description: "Hyundai Xcent Cabs in Pimpri Chinchwad provide a convenient sedan option for local travel, business requirements, airport transfers, and journeys beyond Pune."
        },
        {
            name: "Hyundai Xcent Cabs in Viman Nagar Pune",
            description: "Hyundai Xcent Cabs in Viman Nagar Pune are useful for airport transportation, hotel transfers, corporate visits, local rides, and planned outstation travel."
        },
        {
            name: "Hyundai Xcent Cabs in Kothrud Pune",
            description: "Hyundai Xcent Cabs in Kothrud Pune provide private sedan transportation for local errands, family journeys, airport transfers, sightseeing, and outstation routes."
        },
        {
            name: "Hyundai Xcent Cabs in Magarpatta Pune",
            description: "Hyundai Xcent Cabs in Magarpatta Pune are suitable for corporate travel, office transfers, client visits, airport transportation, and scheduled intercity journeys."
        },
        {
            name: "Hyundai Xcent Cabs in Wagholi Pune",
            description: "Hyundai Xcent Cabs in Wagholi Pune provide private transportation for local trips, business travel, airport transfers, family requirements, and outstation journeys."
        },
        {
            name: "Hyundai Xcent Cabs in Pune",
            description: "Hyundai Xcent Cabs in Pune offer a practical private sedan option for local travel, airport transfers, sightseeing, corporate transportation, and outstation trips."
        },
        {
            name: "Hyundai Xcent Cab Service Pune",
            description: "Hyundai Xcent Cab Service Pune supports comfortable point-to-point transportation for personal, family, business, airport, and intercity travel requirements."
        },
        {
            name: "Hyundai Xcent Taxi Service Pune",
            description: "Hyundai Xcent Taxi Service Pune is suitable for passengers seeking a dedicated sedan for city transportation, airport travel, sightseeing, and longer routes."
        },
        {
            name: "Hyundai Xcent Cab Booking Pune",
            description: "Hyundai Xcent Cab Booking Pune makes it easier to reserve a private sedan according to the required pickup location, destination, travel date, and journey type."
        },
        {
            name: "Hyundai Xcent Car Rental Pune",
            description: "Hyundai Xcent Car Rental Pune can be used for local travel, family outings, corporate requirements, airport transfers, and planned tourist journeys."
        },
        {
            name: "Hyundai Xcent with Driver Pune",
            description: "Hyundai Xcent with Driver Pune provides passengers with a private car and driver arrangement for local transportation, sightseeing, airport travel, and outstation trips."
        },
        {
            name: "Hyundai Xcent Outstation Cab Pune",
            description: "Hyundai Xcent Outstation Cab Pune is a practical choice for private intercity travel to destinations across Maharashtra and nearby regions."
        },
        {
            name: "Hyundai Xcent Airport Cab Pune",
            description: "Hyundai Xcent Airport Cab Pune provides direct airport pickup and drop transportation for passengers looking for a comfortable private sedan."
        },
        {
            name: "Online Hyundai Xcent Booking Pune",
            description: "Online Hyundai Xcent Booking Pune allows travellers to plan their private sedan requirement ahead of time for airport, local, corporate, tourist, and outstation travel."
        },
        {
            name: "Hyundai Xcent Sedan Cab Pune",
            description: "Hyundai Xcent Sedan Cab Pune provides comfortable private transportation for individuals, couples, families, and business travellers."
        },
        {
            name: "Hyundai Xcent Cabs in Pune",
            description: "Hyundai Xcent Cabs in Pune are available for different travel purposes, including local rides, airport transfers, sightseeing, corporate trips, and outstation journeys."
        },
        {
            name: "Hyundai Xcent Cab Service Pune",
            description: "Hyundai Xcent Cab Service Pune offers private sedan transportation that can be planned for daily travel, airport transfers, family journeys, and intercity routes."
        },
        {
            name: "Hyundai Xcent Taxi Service Pune",
            description: "Hyundai Xcent Taxi Service Pune is suitable for passengers who prefer dedicated sedan transportation for city rides, business visits, airport trips, and sightseeing."
        },
        {
            name: "Hyundai Xcent Cab Booking Pune",
            description: "Hyundai Xcent Cab Booking Pune supports advance travel planning for passengers requiring a private Xcent cab for local or outstation transportation."
        },
        {
            name: "Hyundai Xcent Cab Hire Pune",
            description: "Hyundai Xcent Cab Hire Pune is useful for private city travel, airport transportation, corporate requirements, sightseeing, family trips, and longer journeys."
        },
        {
            name: "Hyundai Xcent Car Hire Pune",
            description: "Hyundai Xcent Car Hire Pune provides a private sedan option for travellers planning local transportation, tourist visits, airport transfers, and outstation trips."
        }
    ],
    tableData: [
        ["Xcent Cab Service in Pune"],
        ["Hyundai Xcent Rental Pune"],
        ["Hyundai Xcent Taxi Booking Pune"],
        ["Sedan Cab Service Pune"],
        ["Hyundai Xcent Car Booking Pune"],
        ["Xcent Outstation Cab Pune"],
        ["Hyundai Xcent Airport Transfer Pune"],
        ["Pune Xcent Car Hire"],
        ["Hyundai Xcent Tourist Vehicle Pune"],
        ["Hyundai Xcent Online Cab Booking Pune"],
        ["Hyundai Xcent Cabs in Hinjewadi Pune"],
        ["Hyundai Xcent Cabs in Kharadi Pune"],
        ["Hyundai Xcent Cabs in Hadapsar Pune"],
        ["Hyundai Xcent Cabs in Baner Pune"],
        ["Hyundai Xcent Cabs in Wakad Pune"],
        ["Hyundai Xcent Cabs in Pimpri Chinchwad"],
        ["Hyundai Xcent Cabs in Viman Nagar Pune"],
        ["Hyundai Xcent Cabs in Kothrud Pune"],
        ["Hyundai Xcent Cabs in Magarpatta Pune"],
        ["Hyundai Xcent Cabs in Wagholi Pune"],
        ["Hyundai Xcent Cabs in Pune"],
        ["Hyundai Xcent Cab Service Pune"],
        ["Hyundai Xcent Taxi Service Pune"],
        ["Hyundai Xcent Cab Booking Pune"],
        ["Hyundai Xcent Car Rental Pune"],
        ["Hyundai Xcent with Driver Pune"],
        ["Hyundai Xcent Outstation Cab Pune"],
        ["Hyundai Xcent Airport Cab Pune"],
        ["Online Hyundai Xcent Booking Pune"],
        ["Hyundai Xcent Sedan Cab Pune"],
        ["Hyundai Xcent Cabs in Pune"],
        ["Hyundai Xcent Cab Service Pune"],
        ["Hyundai Xcent Taxi Service Pune"],
        ["Hyundai Xcent Cab Booking Pune"],
        ["Hyundai Xcent Cab Hire Pune"],
        ["Hyundai Xcent Car Hire Pune"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Dedicated Hyundai Xcent Travel",
            WhyChoosedescription: "Virendra Cab provides Hyundai Xcent transportation for passengers who prefer a private sedan for local rides, airport transfers, business travel, sightseeing, and outstation journeys."
        },
        {
            WhyChooseheading: "Flexible Destination Options",
            WhyChoosedescription: "The Xcent can be planned for Pune city travel as well as destinations such as Lonavala, Mahabaleshwar, Nashik, Shirdi, Kolhapur, Alibaug, and other nearby cities."
        },
        {
            WhyChooseheading: "Convenient Pune Pickup",
            WhyChoosedescription: "Pickup arrangements can be planned from different parts of Pune, including Hinjewadi, Kharadi, Hadapsar, Baner, Wakad, Viman Nagar, Kothrud, Magarpatta, and Wagholi."
        },
        {
            WhyChooseheading: "Useful For Airport Transfers",
            WhyChoosedescription: "Hyundai Xcent cabs provide direct private transportation for airport pickups and drops, making them suitable for individuals and small groups travelling with regular luggage."
        },
        {
            WhyChooseheading: "Suitable For Corporate Trips",
            WhyChoosedescription: "Business travellers can use Xcent cabs for office visits, client meetings, corporate events, hotel transfers, and other professional transportation requirements."
        },
        {
            WhyChooseheading: "Outstation Travel Convenience",
            WhyChoosedescription: "The sedan category is suitable for planned intercity journeys where passengers want private road transportation for one-way, return, or sightseeing-based travel."
        },
        {
            WhyChooseheading: "Private Travel With Driver",
            WhyChoosedescription: "A Hyundai Xcent with driver provides dedicated transportation without shared passengers, making travel convenient for families, couples, professionals, and tourists."
        },
        {
            WhyChooseheading: "Advance Booking Flexibility",
            WhyChoosedescription: "Passengers can plan their Xcent requirement according to the pickup point, destination, travel date, journey type, and preferred transportation arrangement."
        }
    ]
};




const faqData = [
    {
        question: "Can I book Hyundai Xcent Cabs in Pune with Virendra Cab?",
        answer: "Virendra Cab can arrange Hyundai Xcent cab services in Pune for local transportation, airport transfers, business travel, family journeys, and selected outstation routes. Booking details can be planned according to the travel date, pickup location, passenger count, and vehicle requirements."
    },
    {
        question: "Is Hyundai Xcent suitable for airport pickup and drop in Pune?",
        answer: "Hyundai Xcent can be considered for airport transportation when the passenger count and luggage requirements suit the vehicle. Travellers can provide their flight schedule, pickup or drop location, and preferred timing while making the cab enquiry."
    },
    {
        question: "Can I hire a Hyundai Xcent cab for outstation travel from Pune?",
        answer: "Passengers can enquire about using a Hyundai Xcent for suitable outstation journeys from Pune. Routes such as Mumbai, Lonavala, Nashik, Shirdi, Mahabaleshwar, and other destinations can be discussed based on passenger and luggage requirements."
    },
    {
        question: "How many passengers can travel in a Hyundai Xcent cab?",
        answer: "Hyundai Xcent is generally considered for small groups, with the practical passenger and luggage capacity depending on the travel requirements. Sharing the number of travellers and luggage details helps in selecting a suitable cab arrangement."
    },
    {
        question: "Can I book a one-way Hyundai Xcent cab from Pune?",
        answer: "One-way Hyundai Xcent cab bookings can be discussed for travellers who need transportation from Pune to another destination without requiring a return journey. The route, pickup point, travel date, and preferred departure time can be provided during booking."
    },
    {
        question: "Is Hyundai Xcent a good option for family travel in Pune?",
        answer: "Families with a small number of passengers can consider a Hyundai Xcent for local trips, airport transfers, short outstation journeys, and sightseeing. The vehicle choice can be matched with the group's passenger count and luggage."
    },
    {
        question: "Can I use a Hyundai Xcent cab for business travel in Pune?",
        answer: "Professionals can enquire about Hyundai Xcent transportation for office visits, client meetings, business appointments, and airport travel. Pickup and drop arrangements can be coordinated around the planned work schedule."
    },
    {
        question: "Can I book a Hyundai Xcent for Pune sightseeing?",
        answer: "A Hyundai Xcent can be considered for sightseeing within Pune and nearby destinations when the group size is suitable. Travellers can plan visits to places such as Sinhagad Fort, Aga Khan Palace, Shaniwar Wada, and other locations according to their itinerary."
    },
    {
        question: "Can Hyundai Xcent be booked for a round-trip journey from Pune?",
        answer: "Round-trip Hyundai Xcent cab arrangements can be discussed for passengers who want to travel to a destination and return to Pune. The return date, waiting requirements, route, and sightseeing plans can be considered while preparing the trip."
    },
    {
        question: "What details are required to book Hyundai Xcent Cabs in Pune?",
        answer: "Passengers can provide their pickup address, destination, travel date, preferred timing, number of travellers, luggage details, one-way or round-trip requirement, and purpose of travel when enquiring about Hyundai Xcent Cabs in Pune."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Sandeep Karkhanis",
        feedback: "I needed a compact cab for airport travel and a few business visits around Pune. The Hyundai Xcent arranged through Virendra Cab was suitable for my travel requirements, and the pickup details were coordinated according to my schedule.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Rhea Patil",
        feedback: "Our small family group planned a short outstation trip from Pune and wanted a comfortable sedan without choosing a larger vehicle. The Hyundai Xcent cab worked well for our passenger count and luggage needs.",
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
  "name": "Hyundai Xcent Cabs in Pune",
  "image": "https://www.virendracabs.com/assets/images/hyundai-xcent-cabs-in-pune.webp",
  "description": "Hyundai Xcent Cabs in Pune are a practical choice for passengers looking for comfortable sedan transportation for local travel, airport transfers, business trips and outstation journeys. Virendra Cab provides Hyundai Xcent rental and taxi booking options for customers searching for Xcent Cab Service in Pune, Hyundai Xcent Rental Pune and Hyundai Xcent Taxi Booking Pune. The Hyundai Xcent can be a suitable option for individuals, couples, families and small groups who need convenient private transportation with useful seating and luggage space. Customers looking for Hyundai Xcent Car Booking Pune can arrange a vehicle according to their pickup location, destination and travel schedule. Sedan Cab Service Pune can also be used for local city transportation, appointments, shopping, events and business travel. Passengers planning longer journeys can enquire about Xcent Outstation Cab options for intercity travel, weekend trips, family visits and pilgrimage routes. Airport pickup and drop requirements can also be discussed when a sedan is preferred for direct transportation to or from Pune Airport. One-way and round-trip travel arrangements can be planned according to the itinerary, while current fare details depend on vehicle availability, distance, duration, route and trip type. Travelers can contact Virendra Cab to confirm the latest rental and booking details before finalizing their journey. Advance booking helps organize pickup timing, vehicle requirements and destination information. Whether the requirement is an Xcent taxi for local Pune travel, an airport transfer or an outstation journey, Virendra Cab offers a convenient private cab option for comfortable road transportation.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.virendracabs.com/hyundai-xcent-cabs-in-pune"
  }
};







    return (
        <div>
<Helmet>
  <title>
    Hyundai Xcent Cabs in Pune | Hyundai Xcent Rental Pune | +91 9022549022
  </title>

  <meta
    name="description"
    content="Book Hyundai Xcent Cabs in Pune for local travel, airport transfers and outstation journeys. Get Xcent rental and taxi booking options with Virendra Cab."
  />

  <meta
    name="keywords"
    content="Hyundai Xcent Cabs in Pune, Xcent Cab Service in Pune, Hyundai Xcent Rental Pune, Hyundai Xcent Taxi Booking Pune, Sedan Cab Service Pune, Hyundai Xcent Car Booking Pune, Xcent Outstation Cab Pune, Hyundai Xcent Cab Pune, Hyundai Xcent Taxi Pune, Hyundai Xcent Car Rental Pune, Hyundai Xcent Cab Rental Pune, Xcent Taxi Service Pune, Xcent Cab Booking Pune, Xcent Car Booking Pune, Hyundai Xcent Hire Pune, Hyundai Xcent Hire for Outstation Pune, Hyundai Xcent Outstation Taxi Pune, Hyundai Xcent Airport Cab Pune, Xcent Airport Taxi Pune, Hyundai Xcent One Way Cab Pune, Hyundai Xcent Round Trip Cab Pune, Xcent Sedan Cab Pune, Xcent Private Cab Pune, Xcent Rental for Family Pune, Xcent Taxi Hire Pune, Xcent Car Hire Pune, Xcent Cab for Local Travel Pune, Xcent Cab for Airport Transfer Pune"
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
                            <img src='/images/keyword/34.jpg' alt='img' className='img-fluid' />
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

export default Hyundaixcentcabinpune ;