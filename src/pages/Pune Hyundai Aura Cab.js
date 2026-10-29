import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Punehyundaiauracab() {



const cardData = {
    keyword: "Pune Hyundai Aura Cab",
    headingDescription: "Pune Hyundai Aura Cab services provide a comfortable and practical travel option for passengers looking for a private sedan across Pune, PCMC and major business and residential areas. Virendra Cab offers Hyundai Aura booking options for local travel, airport transfers, corporate movement, family journeys, sightseeing and outstation routes, with flexible arrangements for passengers travelling from areas such as Hinjewadi, Kharadi, Hadapsar, Baner, Wakad and Pimpri Chinchwad.",
    topPlaces: [
       
       {
            title: "Mahabaleshwar",
            description: "A Hyundai Aura can be considered for a comfortable Pune to Mahabaleshwar road trip, particularly for couples, families and small groups planning a private hill-station journey."
        },
         {
            title: "Pune Airport",
            description: "Hyundai Aura cabs are a convenient choice for airport pickup and drop services, offering comfortable seating and practical luggage space for business travellers, families and holiday passengers."
        },
        {
            title: "Hinjewadi",
            description: "A Hyundai Aura can be arranged for comfortable travel around Hinjewadi, making it useful for IT professionals, corporate meetings, office transfers and planned city journeys."
        },
        {
            title: "Kharadi",
            description: "Passengers travelling to Kharadi can choose a private Hyundai Aura for business appointments, residential transfers, airport connections and everyday transportation requirements."
        },
        {
            title: "Hadapsar",
            description: "Hyundai Aura cab services around Hadapsar provide private transportation for office travel, family visits, local transfers and longer journeys starting from the eastern side of Pune."
        },
        {
            title: "Baner",
            description: "A Hyundai Aura is suitable for comfortable travel around Baner for corporate meetings, personal appointments, airport transfers and planned trips across Pune."
        },
        {
            title: "Wakad",
            description: "Travellers from Wakad can arrange Hyundai Aura transportation for local destinations, PCMC travel, airport transfers and outstation journeys requiring a private sedan."
        },
        {
            title: "Pimpri Chinchwad",
            description: "Hyundai Aura cabs provide convenient private transportation across Pimpri Chinchwad for families, professionals and passengers travelling towards Pune, airports and outstation destinations."
        },
        
    ],
    services: [
        {
            name: "Aura Cab Service in Pune",
            description: "Aura cab service in Pune provides private and comfortable transportation for local travel, airport transfers, business appointments, family journeys and planned outstation trips. Virendra Cab helps passengers arrange the vehicle according to their route and schedule."
        },
        {
            name: "Hyundai Aura Rental Pune",
            description: "Hyundai Aura rental in Pune is suitable for passengers who prefer a comfortable sedan for scheduled transportation. It can be arranged for local travel, corporate requirements, sightseeing, airport movement and longer intercity journeys."
        },
        {
            name: "Hyundai Aura Taxi Booking Pune",
            description: "Hyundai Aura taxi booking in Pune allows travellers to arrange a private sedan for their preferred pickup and destination. The service is suitable for personal trips, airport transfers, office travel, family transportation and outstation routes."
        },
        {
            name: "Sedan Cab Service Pune",
            description: "Sedan cab service in Pune offers a practical travel option for passengers who want a private and comfortable car. Hyundai Aura can be used for city transfers, business travel, airport trips, family journeys and selected outstation destinations."
        },
        {
            name: "Hyundai Aura Car Booking Pune",
            description: "Hyundai Aura car booking in Pune makes it convenient to reserve a sedan for planned travel. Passengers can provide their pickup point, destination and schedule to arrange suitable transportation for local or intercity journeys."
        },
        {
            name: "Aura Outstation Cab Pune",
            description: "Aura outstation cab services from Pune are suitable for travellers planning private road journeys to nearby cities, tourist destinations and pilgrimage locations. The sedan provides a comfortable option for one-way and return travel."
        },
        {
            name: "Hyundai Aura Airport Transfer Pune",
            description: "Hyundai Aura airport transfer services in Pune are useful for passengers requiring scheduled transportation to or from Pune Airport. The private sedan offers comfortable seating and convenient space for travel luggage."
        },
        {
            name: "Pune Aura Car Hire",
            description: "Pune Aura car hire provides private transportation for passengers who need a sedan for personal, corporate, airport or sightseeing requirements. Travel arrangements can be planned around the passenger's route and preferred schedule."
        },
        {
            name: "Hyundai Aura Tourist Vehicle Pune",
            description: "Hyundai Aura tourist vehicle services in Pune are suitable for sightseeing trips, weekend outings and city-to-city travel. Passengers can enjoy private transportation while maintaining flexibility for their planned itinerary."
        },
        {
            name: "Hyundai Aura Online Cab Booking Pune",
            description: "Online Hyundai Aura cab booking in Pune offers a convenient way to arrange private transportation in advance. Travellers can share their journey details and plan a suitable sedan for local, airport, corporate or outstation travel."
        },
        {
            name: "Hyundai Aura Cabs in Hinjewadi Pune",
            description: "Hyundai Aura cabs in Hinjewadi Pune are useful for IT professionals, corporate visitors, residents and travellers requiring comfortable transportation. The service can support office transfers, airport journeys and outstation trips."
        },
        {
            name: "Hyundai Aura Cabs in Kharadi Pune",
            description: "Passengers in Kharadi can arrange Hyundai Aura cabs for business meetings, airport transfers, residential travel and longer journeys. Private sedan transportation provides a comfortable option for planned trips."
        },
        {
            name: "Hyundai Aura Cabs in Hadapsar Pune",
            description: "Hyundai Aura cabs in Hadapsar Pune provide private transportation for office travel, family requirements, airport connections and city transfers. They can also be arranged for planned outstation journeys."
        },
        {
            name: "Hyundai Aura Cabs in Baner Pune",
            description: "Hyundai Aura cabs in Baner Pune are suitable for corporate travel, personal appointments, airport transfers and local movement. Passengers can arrange private transportation according to their required pickup and destination."
        },
        {
            name: "Hyundai Aura Cabs in Wakad Pune",
            description: "Hyundai Aura cabs in Wakad Pune offer comfortable private travel for residents, professionals and families. The service can be used for PCMC movement, Pune city transfers, airport trips and outstation travel."
        },
        {
            name: "Hyundai Aura Cabs in Pimpri Chinchwad",
            description: "Hyundai Aura cabs in Pimpri Chinchwad provide convenient private transportation for local and intercity travel. Passengers can use the service for office visits, family journeys, airport transfers and outstation requirements."
        },
        {
            name: "Hyundai Aura Cabs in Viman Nagar Pune",
            description: "Hyundai Aura cabs in Viman Nagar Pune are convenient for passengers travelling near the airport and eastern Pune. They can be arranged for airport transfers, corporate travel, hotel movement and local journeys."
        },
        {
            name: "Hyundai Aura Cabs in Kothrud Pune",
            description: "Passengers in Kothrud can book Hyundai Aura cabs for comfortable local transportation, family travel, business appointments, airport transfers and outstation journeys from western Pune."
        },
        {
            name: "Hyundai Aura Cabs in Magarpatta Pune",
            description: "Hyundai Aura cabs in Magarpatta Pune are useful for professionals, residents and visitors requiring private transportation. The service can support corporate travel, airport transfers, local movement and longer routes."
        },
        {
            name: "Hyundai Aura Cabs in Wagholi Pune",
            description: "Hyundai Aura cabs in Wagholi Pune provide a private sedan option for passengers travelling towards Pune city, airport areas, business locations and outstation destinations."
        },
        {
            name: "Hyundai Aura Cabs in Pune",
            description: "Hyundai Aura cabs in Pune offer comfortable transportation for a wide range of travel needs, including local transfers, airport pickup and drop, corporate movement, family trips and outstation journeys."
        },
        {
            name: "Hyundai Aura Cab Service Pune",
            description: "Hyundai Aura cab service in Pune provides a convenient private sedan option for passengers who value comfortable travel and flexible booking. It can be used for daily transportation, airport trips, sightseeing and intercity travel."
        },
        {
            name: "Hyundai Aura Taxi Service Pune",
            description: "Hyundai Aura taxi service in Pune is suitable for passengers seeking private point-to-point transportation. The service can be arranged for office travel, family requirements, airport transfers and planned outstation routes."
        },
        {
            name: "Hyundai Aura Cab Booking Pune",
            description: "Hyundai Aura cab booking in Pune makes it easier to reserve a private sedan according to the required pickup location, destination and travel schedule. It supports both short city trips and longer road journeys."
        },
        {
            name: "Hyundai Aura Car Rental Pune",
            description: "Hyundai Aura car rental in Pune is a practical option for passengers requiring private transportation for a scheduled journey. It can be used for corporate travel, family outings, airport transfers and sightseeing."
        },
        {
            name: "Hyundai Aura Outstation Cab Pune",
            description: "Hyundai Aura outstation cab services from Pune are designed for private intercity travel. Passengers can plan comfortable journeys to tourist destinations, business cities, pilgrimage locations and nearby states according to their itinerary."
        },
        {
            name: "Hyundai Aura Airport Cab Pune",
            description: "Hyundai Aura airport cab service in Pune provides convenient private transportation for airport pickup and drop requirements. The sedan is suitable for travellers carrying luggage and passengers travelling for business or leisure."
        },
        {
            name: "Online Hyundai Aura Booking Pune",
            description: "Online Hyundai Aura booking in Pune allows passengers to arrange their sedan before travelling. Providing the travel date, pickup point, destination and journey type helps coordinate a suitable cab arrangement."
        },
        {
            name: "Hyundai Aura Sedan Cab Pune",
            description: "Hyundai Aura sedan cab services in Pune combine the convenience of a private vehicle with comfortable sedan travel. They are suitable for city transfers, airport transportation, family trips, corporate journeys and outstation routes."
        },
        {
            name: "Hyundai Aura Cab Service Pune",
            description: "Hyundai Aura cab service in Pune provides private transportation for passengers travelling across the city and beyond. The service can be arranged for local requirements, airport movement, corporate trips and longer journeys."
        },
        {
            name: "Hyundai Aura Taxi Booking Pune",
            description: "Hyundai Aura taxi booking in Pune gives passengers a convenient way to reserve a private sedan for planned transportation. It is suitable for airport transfers, family travel, office requirements, sightseeing and outstation journeys."
        },
        {
            name: "Hyundai Aura Sedan Rental Pune",
            description: "Hyundai Aura sedan rental in Pune is suitable for travellers looking for a comfortable private car for scheduled transportation. The vehicle can be considered for personal trips, business travel, airport transfers and outstation travel."
        },
        {
            name: "Hyundai Aura Airport Cab Pune",
            description: "Hyundai Aura airport cab services in Pune provide private pickup and drop transportation for passengers travelling through Pune Airport. Advance planning can help coordinate the journey around flight schedules and luggage requirements."
        },
        {
            name: "Hyundai Aura Corporate Cab Pune",
            description: "Hyundai Aura corporate cab services in Pune are useful for client meetings, employee transportation, office visits and airport transfers. The sedan provides a professional and comfortable option for business-related travel."
        },
        {
            name: "Hyundai Aura Tourist Taxi Pune",
            description: "Hyundai Aura tourist taxi services in Pune are suitable for sightseeing, weekend trips and planned excursions. Private transportation allows passengers to follow their itinerary with convenient movement between selected destinations."
        },
        {
            name: "Hyundai Aura Family Travel Cab Pune",
            description: "Hyundai Aura family travel cabs in Pune provide private and comfortable transportation for family outings, airport trips, city visits and outstation journeys. The sedan is suitable for small family groups seeking dedicated travel."
        },
        {
            name: "Hyundai Aura Outstation Car Rental Pune",
            description: "Hyundai Aura outstation car rental from Pune offers a practical sedan option for longer road journeys. Travellers can plan private transportation for family visits, sightseeing, business trips and intercity travel according to their itinerary."
        }
    ],
    tableData: [
        ["Aura Cab Service in Pune"],
        ["Hyundai Aura Rental Pune"],
        ["Hyundai Aura Taxi Booking Pune"],
        ["Sedan Cab Service Pune"],
        ["Hyundai Aura Car Booking Pune"],
        ["Aura Outstation Cab Pune"],
        ["Hyundai Aura Airport Transfer Pune"],
        ["Pune Aura Car Hire"],
        ["Hyundai Aura Tourist Vehicle Pune"],
        ["Hyundai Aura Online Cab Booking Pune"],
        ["Hyundai Aura Cabs in Hinjewadi Pune"],
        ["Hyundai Aura Cabs in Kharadi Pune"],
        ["Hyundai Aura Cabs in Hadapsar Pune"],
        ["Hyundai Aura Cabs in Baner Pune"],
        ["Hyundai Aura Cabs in Wakad Pune"],
        ["Hyundai Aura Cabs in Pimpri Chinchwad"],
        ["Hyundai Aura Cabs in Viman Nagar Pune"],
        ["Hyundai Aura Cabs in Kothrud Pune"],
        ["Hyundai Aura Cabs in Magarpatta Pune"],
        ["Hyundai Aura Cabs in Wagholi Pune"],
        ["Hyundai Aura Cabs in Pune"],
        ["Hyundai Aura Cab Service Pune"],
        ["Hyundai Aura Taxi Service Pune"],
        ["Hyundai Aura Cab Booking Pune"],
        ["Hyundai Aura Car Rental Pune"],
        ["Hyundai Aura Outstation Cab Pune"],
        ["Hyundai Aura Airport Cab Pune"],
        ["Online Hyundai Aura Booking Pune"],
        ["Hyundai Aura Sedan Cab Pune"],
        ["Hyundai Aura Cab Service Pune"],
        ["Hyundai Aura Taxi Booking Pune"],
        ["Hyundai Aura Sedan Rental Pune"],
        ["Hyundai Aura Airport Cab Pune"],
        ["Hyundai Aura Corporate Cab Pune"],
        ["Hyundai Aura Tourist Taxi Pune"],
        ["Hyundai Aura Family Travel Cab Pune"],
        ["Hyundai Aura Outstation Car Rental Pune"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Comfortable Hyundai Aura Travel",
            WhyChoosedescription: "Virendra Cab provides Hyundai Aura travel options for passengers looking for a comfortable private sedan suitable for city transfers, airport journeys, family trips and longer road travel."
        },
        {
            WhyChooseheading: "Coverage Across Pune And PCMC",
            WhyChoosedescription: "Booking support is available for major Pune and PCMC areas, including business and residential locations such as Hinjewadi, Kharadi, Hadapsar, Baner, Wakad and Pimpri Chinchwad."
        },
        {
            WhyChooseheading: "Airport Pickup And Drop",
            WhyChoosedescription: "Hyundai Aura airport cab arrangements are suitable for passengers travelling to or from Pune Airport, with private transportation that can be planned around flight schedules and luggage requirements."
        },
        {
            WhyChooseheading: "Outstation Travel Flexibility",
            WhyChoosedescription: "The Hyundai Aura can be arranged for planned outstation journeys from Pune, giving passengers a private sedan option for sightseeing, family visits, business travel and intercity transportation."
        },
        {
            WhyChooseheading: "Suitable For Corporate Travel",
            WhyChoosedescription: "Corporate travellers can use Hyundai Aura cabs for client meetings, employee transfers, business appointments and airport transportation, providing a practical and professional travel option."
        },
        {
            WhyChooseheading: "Family-Friendly Sedan Option",
            WhyChoosedescription: "Families can choose a Hyundai Aura for private travel when planning local outings, airport transfers, sightseeing trips or outstation journeys that require a dedicated and comfortable vehicle."
        },
        {
            WhyChooseheading: "Online Booking Convenience",
            WhyChoosedescription: "Online booking support makes it easier to share the travel date, pickup point, destination and preferred journey type before the trip, helping coordinate the required Hyundai Aura cab efficiently."
        },
        {
            WhyChooseheading: "Local And Intercity Transportation",
            WhyChoosedescription: "From short city transfers to longer road journeys, Hyundai Aura cab services can be arranged according to different travel requirements, giving passengers a flexible private transportation solution."
        }
    ]
};




const faqData = [
    {
        question: "Can I book a Pune Hyundai Aura Cab with Virendra Cab?",
        answer: "Virendra Cab can arrange a Hyundai Aura cab in Pune for local travel, airport transfers, business journeys, family trips, and suitable outstation routes. The booking can be planned according to the pickup location, travel date, passenger count, luggage, and preferred timing."
    },
    {
        question: "Is Hyundai Aura available for local cab travel in Pune?",
        answer: "Passengers can enquire about Hyundai Aura for transportation within Pune and nearby areas. The pickup point, destination, travel duration, and preferred schedule can be shared while arranging the cab service."
    },
    {
        question: "Can I use a Pune Hyundai Aura Cab for airport transportation?",
        answer: "Hyundai Aura can be considered for Pune Airport pickup and drop when the passenger count and luggage requirements are suitable. Travellers can provide their flight timing, pickup address, and preferred airport travel schedule."
    },
    {
        question: "Is Hyundai Aura suitable for outstation travel from Pune?",
        answer: "Passengers can enquire about using a Hyundai Aura for suitable outstation journeys from Pune. Routes such as Mumbai, Lonavala, Nashik, Shirdi, Mahabaleshwar, and other destinations can be discussed according to the trip requirements."
    },
    {
        question: "Can I book a one-way Hyundai Aura cab from Pune?",
        answer: "Travellers requiring transportation from Pune to another destination without a return journey can enquire about a one-way Hyundai Aura cab. The route, pickup location, travel date, destination, and departure time can be discussed before confirmation."
    },
    {
        question: "Can I reserve a Hyundai Aura for a round-trip journey?",
        answer: "Round-trip Hyundai Aura arrangements can be discussed for passengers travelling to a destination and returning to Pune. The return timing, waiting requirements, route, and sightseeing plans can be considered while planning the journey."
    },
    {
        question: "Is Hyundai Aura suitable for small families in Pune?",
        answer: "Small families can consider a Hyundai Aura for city transportation, airport travel, sightseeing, and selected outstation journeys. Vehicle suitability can be evaluated according to the number of passengers and luggage requirements."
    },
    {
        question: "Can I hire a Hyundai Aura for business travel in Pune?",
        answer: "Professionals can enquire about Hyundai Aura transportation for office visits, client meetings, business appointments, industrial visits, and airport transfers. Pickup and drop timings can be arranged around the planned work schedule."
    },
    {
        question: "Which Pune areas can get Hyundai Aura cab pickup?",
        answer: "Pickup arrangements can be discussed from Pune areas such as Baner, Kothrud, Wakad, Hinjewadi, Hadapsar, Viman Nagar, Kalyani Nagar, Pimpri-Chinchwad, and other suitable residential or commercial locations."
    },
    {
        question: "What details are needed to book a Pune Hyundai Aura Cab?",
        answer: "Passengers can provide their pickup address, destination, travel date, preferred timing, number of travellers, luggage details, one-way or round-trip requirement, and purpose of travel when making a Pune Hyundai Aura Cab booking enquiry."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Rohan Gawande",
        feedback: "I needed a compact sedan for several Pune appointments followed by an airport drop. The Hyundai Aura arranged through Virendra Cab suited my travel requirements, and the pickup schedule was coordinated according to my plans.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Kavya Shinde",
        feedback: "For our small family outing from Pune, we preferred a private Hyundai Aura instead of a larger vehicle. Virendra Cab helped arrange the cab according to our passenger count, luggage, and planned travel schedule.",
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
  "name": "Pune Hyundai Aura Cab",
  "image": "https://www.virendracabs.com/assets/images/pune-hyundai-aura-cab.webp",
  "description": "Pune Hyundai Aura Cab is a practical private transportation option for passengers looking for a comfortable sedan for local travel, airport transfers, business trips, family journeys and outstation routes. Virendra Cab provides Hyundai Aura rental and taxi booking options for customers searching for Aura Cab Service in Pune, Hyundai Aura Rental Pune and Hyundai Aura Taxi Booking Pune. The Hyundai Aura can be a suitable choice for individuals, couples, families and small groups who need comfortable seating along with useful luggage space. Customers looking for Hyundai Aura Car Booking Pune can arrange a vehicle for city travel, office visits, appointments, shopping, events and other local transportation requirements. Sedan Cab Service Pune is also suitable for scheduled airport transfers and direct pickup or drop journeys. Aura Outstation Cab Pune can be used for intercity travel, weekend trips, family visits, pilgrimage journeys and planned road trips outside Pune. Hyundai Aura Airport Transfer Pune can be arranged according to the passenger's flight schedule, pickup location and destination. Customers searching for Pune Aura Car Hire can enquire about rental options based on the selected vehicle, travel distance, duration and trip requirements. One-way and round-trip journeys can be planned according to the itinerary, while current rental and cab charges can be confirmed with Virendra Cab based on vehicle availability and travel details. Advance booking helps organize the preferred vehicle, pickup timing and destination information before departure. Whether the requirement is a local sedan, airport transfer, business trip or outstation journey, Pune Hyundai Aura Cab provides a convenient way to arrange private road transportation.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.virendracabs.com/pune-hyundai-aura-cab"
  }
};





    return (
        <div>


<Helmet>
  <title>
    Pune Hyundai Aura Cab | Hyundai Aura Rental Pune | +91 9022549022
  </title>

  <meta
    name="description"
    content="Book Pune Hyundai Aura Cab for local travel, airport transfers and outstation journeys. Get Hyundai Aura rental, taxi booking and private sedan options with Virendra Cab."
  />

  <meta
    name="keywords"
    content="Pune Hyundai Aura Cab, Aura Cab Service in Pune, Hyundai Aura Rental Pune, Hyundai Aura Taxi Booking Pune, Sedan Cab Service Pune, Hyundai Aura Car Booking Pune, Aura Outstation Cab Pune, Hyundai Aura Airport Transfer Pune, Pune Aura Car Hire, Hyundai Aura Cab Pune, Hyundai Aura Taxi Pune, Hyundai Aura Car Rental Pune, Aura Cab Rental Pune, Aura Taxi Service Pune, Aura Cab Booking Pune, Aura Car Booking Pune, Hyundai Aura Hire Pune, Hyundai Aura Hire for Outstation Pune, Hyundai Aura Outstation Taxi Pune, Hyundai Aura Airport Cab Pune, Hyundai Aura Airport Taxi Pune, Aura One Way Cab Pune, Hyundai Aura One Way Rental Pune, Aura Round Trip Cab Pune, Aura Local Cab Pune, Aura Private Cab Pune, Aura Sedan Rental Pune, Hyundai Aura Car Hire Pune, Aura Rental for Family Pune, Aura Cab for Business Travel Pune, Aura Cab for Airport Pickup Pune"
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
                            <img src='/images/keyword/43.jpg' alt='img' className='img-fluid' />
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

export default Punehyundaiauracab ;