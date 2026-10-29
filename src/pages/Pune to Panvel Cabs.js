import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Punetopanvelcab() {



const cardData = {
    keyword: "Pune to Panvel Cabs",
    headingDescription: "Pune to Panvel Cabs from Virendra Cab provide comfortable and convenient private transportation between Pune and Panvel for business trips, family visits, airport connections, and personal travel. Passengers can choose one-way or round-trip cab options along with sedan, SUV, and Innova vehicles based on group size and luggage requirements. The service also supports travel toward Navi Mumbai and important destinations such as Kharghar, Kamothe, Belapur, Nerul, Taloja, and Uran, with flexible pickup arrangements and professional driver assistance.",
    topPlaces: [
        {
            title: "Panvel",
            description: "Panvel is an important Navi Mumbai gateway where private cab travel from Pune is useful for business, family visits, railway connections, and onward journeys."
        },
        {
            title: "Kharghar",
            description: "A direct cab to Kharghar provides convenient transportation for business meetings, residential visits, educational travel, and personal requirements."
        },
        {
            title: "Belapur",
            description: "Travellers heading to Belapur can arrange a private cab from Pune for corporate visits, government-related work, family travel, and city connections."
        },
        {
            title: "Nerul",
            description: "A private Pune to Nerul cab offers comfortable door-to-door transportation for business, residential, shopping, and personal journeys."
        },
        {
            title: "Kamothe",
            description: "Kamothe can be reached conveniently by private cab for family visits, business requirements, residential travel, and other planned trips."
        },
        {
            title: "Taloja",
            description: "A cab to Taloja is useful for passengers travelling toward industrial, commercial, and residential areas in the Navi Mumbai region."
        },
        {
            title: "Uran",
            description: "Travellers heading toward Uran can use a private cab for business, family, port-related, and personal travel requirements."
        },
        {
            title: "Mira Road",
            description: "A private cab from Pune to Mira Road provides direct transportation for passengers travelling toward Mumbai's western suburban region."
        },
        {
            title: "Borivali",
            description: "Pune to Borivali cab travel is suitable for family visits, business trips, shopping, and other planned journeys toward western Mumbai."
        },
        {
            title: "Mumbai Airport",
            description: "Private cab transportation to Mumbai Airport is convenient for passengers travelling from Pune with luggage and fixed flight schedules."
        }
    ],
    services: [
        {
            name: "Pune to Panvel Cab",
            description: "Virendra Cab provides private transportation from Pune to Panvel with comfortable vehicles, professional driver support, and flexible pickup arrangements."
        },
        {
            name: "Pune to Panvel Taxi",
            description: "A private taxi from Pune to Panvel is suitable for business travel, family visits, railway connections, shopping, and personal journeys."
        },
        {
            name: "Cab from Pune to Panvel",
            description: "Passengers can arrange a direct cab from Pune to Panvel according to their preferred travel time, passenger count, luggage requirements, and vehicle category."
        },
        {
            name: "Taxi from Pune to Panvel",
            description: "Private taxi transportation provides direct door-to-door travel between Pune and Panvel without requiring passengers to change vehicles."
        },
        {
            name: "Pune to Panvel Cab Service",
            description: "The service supports comfortable intercity transportation between Pune and Panvel for individuals, families, corporate travellers, and small groups."
        },
        {
            name: "Pune to Panvel Taxi Fare",
            description: "Passengers can enquire about the applicable taxi fare based on the selected vehicle, travel type, route, and other journey requirements before booking."
        },
        {
            name: "Pune to Panvel One Way Cab",
            description: "One-way cab service is convenient for passengers who need direct transportation from Pune to Panvel and have separate arrangements for their return journey."
        },
        {
            name: "Pune to Panvel Round Trip Taxi",
            description: "A round-trip taxi provides transportation for both onward and return travel, making it suitable for meetings, family visits, shopping, and planned stays."
        },
        {
            name: "Pune to Panvel Cab Booking",
            description: "Advance booking allows passengers to share their pickup location, destination, travel date, departure time, passenger count, and preferred vehicle."
        },
        {
            name: "Cheap Pune to Panvel Cab",
            description: "Travellers comparing economical transportation can choose a suitable vehicle according to their route, group size, luggage, and overall journey requirements."
        },
        {
            name: "Best Pune to Panvel Taxi",
            description: "Virendra Cab offers comfortable private taxi options with professional driver assistance and suitable vehicle choices for Pune to Panvel travel."
        },
        {
            name: "Sedan Pune to Panvel Cab",
            description: "A sedan cab is a practical choice for individuals, couples, and small groups seeking comfortable seating for the Pune to Panvel journey."
        },
        {
            name: "SUV Pune to Panvel Taxi",
            description: "SUV taxis provide additional passenger and luggage space, making them suitable for families and groups travelling between Pune and Panvel."
        },
        {
            name: "Innova Pune to Panvel Cab",
            description: "An Innova cab offers spacious seating and useful luggage capacity for families and groups seeking comfortable private travel from Pune to Panvel."
        },
        {
            name: "Fast Route Cab Pune Panvel",
            description: "Private cab travel provides a direct transportation option for passengers looking to travel efficiently between Pune and Panvel according to their planned schedule."
        },
        {
            name: "Panvel to Pune Cab",
            description: "Passengers returning from Panvel can arrange a private cab to Pune with flexible pickup timing and vehicle options suited to their travel needs."
        },
        {
            name: "Pune to Panvel Cab",
            description: "Direct cab transportation between Pune and Panvel allows travellers to enjoy a private journey with suitable vehicles and convenient pickup arrangements."
        },
        {
            name: "Cab from Panvel to Pune",
            description: "A private cab from Panvel to Pune provides convenient return transportation for business travellers, families, and passengers completing personal work."
        },
        {
            name: "Panvel to Pune Cab Charges",
            description: "Passengers can enquire about applicable cab charges according to the selected vehicle, journey type, route, and other travel requirements."
        },
        {
            name: "Pune to Panvel Cab Price",
            description: "Travellers can check the applicable cab price based on the vehicle category, one-way or round-trip requirement, and specific journey details."
        },
        {
            name: "Pune to Panvel Taxi",
            description: "Private taxi transportation provides a convenient option for passengers travelling between Pune and Panvel for business, family, airport, and personal requirements."
        },
        {
            name: "Pune to Navi Mumbai Cab",
            description: "A private cab from Pune to Navi Mumbai provides direct transportation for business trips, family visits, commercial travel, and connections across the region."
        },
        {
            name: "Pune to Mira Road Taxi",
            description: "Travellers heading toward Mira Road can arrange a private taxi from Pune for comfortable transportation to Mumbai's western suburban area."
        },
        {
            name: "Pune to Borivali Cab",
            description: "A private cab to Borivali is useful for business travel, family visits, shopping, appointments, and other planned journeys."
        },
        {
            name: "Pune to Andheri Taxi",
            description: "Private taxi travel from Pune to Andheri provides convenient transportation for corporate meetings, airport connections, business visits, and personal travel."
        },
        {
            name: "Pune to Vasai Cab",
            description: "A cab to Vasai offers direct private transportation for passengers travelling toward the western Mumbai region for business, family, or personal purposes."
        },
        {
            name: "Pune to Bhiwandi Taxi",
            description: "Travellers can arrange a private taxi from Pune to Bhiwandi for industrial, commercial, business, family, and personal travel requirements."
        },
        {
            name: "Pune to Palghar Cab",
            description: "A private cab to Palghar provides comfortable long-distance transportation for business trips, family visits, and planned journeys."
        },
        {
            name: "Pune to Mumbai Airport Taxi",
            description: "A direct taxi to Mumbai Airport is convenient for passengers travelling from Pune with luggage and fixed domestic or international flight schedules."
        },
        {
            name: "Pune to Panvel Cab",
            description: "Private Pune to Panvel cab travel provides a convenient option for business, family, railway, airport, and personal transportation needs."
        },
        {
            name: "Pune to Panvel Cab Service",
            description: "Virendra Cab supports Pune to Panvel journeys with comfortable vehicles, flexible pickup arrangements, and professional driver assistance."
        },
        {
            name: "Pune to Panvel Taxi Service",
            description: "Private taxi services offer direct transportation between Pune and Panvel for individuals, families, business travellers, and small groups."
        },
        {
            name: "Pune to Panvel Cab Booking",
            description: "Advance booking helps passengers organize their trip by confirming the pickup point, destination, travel date, departure time, and preferred vehicle."
        },
        {
            name: "Best Pune to Panvel Cab",
            description: "Travellers can arrange suitable private cab transportation with comfortable seating, professional drivers, and flexible travel options."
        },
        {
            name: "One Way Pune to Panvel Cab",
            description: "One-way cab service is useful for passengers travelling directly to Panvel who do not need a return journey included in the same booking."
        },
        {
            name: "Round Trip Pune to Panvel Taxi",
            description: "Round-trip taxi service provides transportation in both directions and is suitable for planned meetings, family visits, shopping, events, and personal work."
        },
        {
            name: "Cheap Pune to Panvel Cab",
            description: "Passengers comparing economical travel can select a suitable cab based on vehicle category, passenger count, luggage requirements, and journey type."
        },
        {
            name: "24x7 Pune to Panvel Cab Service",
            description: "Round-the-clock cab support is useful for early departures, late-night journeys, urgent travel, and passengers travelling outside regular hours."
        },
        {
            name: "Outstation Cab Pune to Panvel",
            description: "An outstation cab provides private transportation from Pune to Panvel with vehicle options suitable for individual travellers, families, and groups."
        },
        {
            name: "Pune to Navi Mumbai Cab",
            description: "Private cabs connect Pune with Navi Mumbai locations, offering direct transportation for corporate travel, family visits, commercial work, and personal journeys."
        },
        {
            name: "Pune to Kharghar Taxi",
            description: "A private taxi to Kharghar is convenient for business meetings, residential visits, educational travel, shopping, and personal requirements."
        },
        {
            name: "Pune to Kamothe Cab",
            description: "Travellers can arrange a direct cab from Pune to Kamothe for family visits, residential travel, business work, and other planned journeys."
        },
        {
            name: "Pune to Belapur Taxi",
            description: "A private taxi to Belapur provides convenient transportation for corporate, government, commercial, family, and personal travel requirements."
        },
        {
            name: "Pune to Nerul Cab",
            description: "A cab to Nerul offers direct door-to-door transportation for business visits, family travel, shopping, and other scheduled activities."
        },
        {
            name: "Pune to Taloja Taxi",
            description: "Private taxi service to Taloja is useful for passengers travelling toward residential, industrial, and commercial areas of Navi Mumbai."
        },
        {
            name: "Pune to Mumbai Airport Cab",
            description: "A direct Pune to Mumbai Airport cab provides convenient transportation for passengers carrying luggage and travelling according to a fixed flight schedule."
        },
        {
            name: "Pune to Uran Taxi",
            description: "Travellers heading toward Uran can arrange a private taxi from Pune for business, port-related, family, and personal travel requirements."
        }
    ],
    tableData: [
        ["Pune to Panvel Cab"],
        ["Pune to Panvel Taxi"],
        ["Cab from Pune to Panvel"],
        ["Taxi from Pune to Panvel"],
        ["Pune to Panvel Cab Service"],
        ["Pune to Panvel Taxi Fare"],
        ["Pune to Panvel One Way Cab"],
        ["Pune to Panvel Round Trip Taxi"],
        ["Pune to Panvel Cab Booking"],
        ["Cheap Pune to Panvel Cab"],
        ["Best Pune to Panvel Taxi"],
        ["Sedan Pune to Panvel Cab"],
        ["SUV Pune to Panvel Taxi"],
        ["Innova Pune to Panvel Cab"],
        ["Fast Route Cab Pune Panvel"],
        ["Panvel to Pune Cab"],
        ["Pune to Panvel Cab"],
        ["Cab from Panvel to Pune"],
        ["Panvel to Pune Cab Charges"],
        ["Pune to Panvel Cab Price"],
        ["Pune to Panvel Taxi"],
        ["Pune to Navi Mumbai Cab"],
        ["Pune to Mira Road Taxi"],
        ["Pune to Borivali Cab"],
        ["Pune to Andheri Taxi"],
        ["Pune to Vasai Cab"],
        ["Pune to Bhiwandi Taxi"],
        ["Pune to Palghar Cab"],
        ["Pune to Mumbai Airport Taxi"],
        ["Pune to Panvel Cab"],
        ["Pune to Panvel Cab Service"],
        ["Pune to Panvel Taxi Service"],
        ["Pune to Panvel Cab Booking"],
        ["Best Pune to Panvel Cab"],
        ["One Way Pune to Panvel Cab"],
        ["Round Trip Pune to Panvel Taxi"],
        ["Cheap Pune to Panvel Cab"],
        ["24x7 Pune to Panvel Cab Service"],
        ["Outstation Cab Pune to Panvel"],
        ["Pune to Navi Mumbai Cab"],
        ["Pune to Kharghar Taxi"],
        ["Pune to Kamothe Cab"],
        ["Pune to Belapur Taxi"],
        ["Pune to Nerul Cab"],
        ["Pune to Taloja Taxi"],
        ["Pune to Mumbai Airport Cab"],
        ["Pune to Uran Taxi"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Dedicated Pune to Panvel Service",
            WhyChoosedescription: "Virendra Cab provides direct private transportation between Pune and Panvel with flexible pickup arrangements for individuals, families, business travellers, and small groups."
        },
        {
            WhyChooseheading: "One-Way and Round-Trip Options",
            WhyChoosedescription: "Passengers can select a one-way cab when they only need onward travel or choose a round-trip taxi when they require transportation back to Pune."
        },
        {
            WhyChooseheading: "Comfortable Vehicle Categories",
            WhyChoosedescription: "Sedan, SUV, and Innova options allow travellers to select a suitable vehicle according to passenger count, luggage capacity, route distance, and comfort preferences."
        },
        {
            WhyChooseheading: "Navi Mumbai Connectivity",
            WhyChoosedescription: "The service extends beyond Panvel to important Navi Mumbai destinations such as Kharghar, Kamothe, Belapur, Nerul, Taloja, and Uran."
        },
        {
            WhyChooseheading: "Mumbai Region Travel",
            WhyChoosedescription: "Private cab options are also useful for passengers travelling toward Mira Road, Borivali, Andheri, Vasai, Bhiwandi, Palghar, and Mumbai Airport."
        },
        {
            WhyChooseheading: "Airport Travel Convenience",
            WhyChoosedescription: "Direct cab arrangements for Mumbai Airport help passengers manage fixed flight schedules while travelling with luggage from Pune and surrounding areas."
        },
        {
            WhyChooseheading: "Professional Driver Assistance",
            WhyChoosedescription: "Professional driver support helps make the intercity journey more organized through convenient pickup coordination and comfortable private road travel."
        },
        {
            WhyChooseheading: "Flexible Booking Support",
            WhyChoosedescription: "Customers can provide their pickup point, destination, travel date, departure time, passenger count, luggage needs, and preferred vehicle to plan the trip according to their requirements."
        }
    ]
};



const faqData = [
    {
        question: "How can I book Pune to Panvel Cabs with Virendra Cab?",
        answer: "To arrange Pune to Panvel Cabs, share your Pune pickup location, travel date, passenger count, luggage details, and preferred vehicle with Virendra Cab. The journey can be organized for one-way travel, return trips, business visits, family travel, or connecting transportation."
    },
    {
        question: "Is a one-way cab available from Pune to Panvel?",
        answer: "Travellers who only require transportation to Panvel can choose a one-way cab. This can be useful for office travel, personal visits, relocation, railway or airport connections, and other journeys where return transportation is not required."
    },
    {
        question: "Can I book a round-trip taxi from Pune to Panvel?",
        answer: "A round-trip cab is suitable when you want to travel back to Pune after completing your visit in Panvel. The return timing can be discussed during booking so the journey fits your planned schedule."
    },
    {
        question: "Which vehicle is suitable for Pune to Panvel travel?",
        answer: "Vehicle selection depends on the number of passengers and luggage you are carrying. Smaller groups can consider a sedan, while families and larger groups may prefer an Ertiga or Innova Crysta for additional seating and luggage space."
    },
    {
        question: "Can Pune to Panvel Cabs be used for business travel?",
        answer: "Private cab travel can be convenient for business meetings, office visits, client appointments, and industrial or commercial work around Panvel. A dedicated vehicle also allows travellers to include multiple stops in their schedule."
    },
    {
        question: "Is Pune to Panvel cab service suitable for family trips?",
        answer: "Families can use a private cab when they want a direct journey without changing transportation along the route. The vehicle can be selected according to family size, luggage quantity, departure timing, and any additional stops required."
    },
    {
        question: "Can I use a Pune to Panvel Cab for airport connectivity?",
        answer: "Panvel can be an important transit point for travellers connecting with the Navi Mumbai region and nearby transport facilities. A private cab can be planned around your onward train, airport, hotel, or local travel schedule."
    },
    {
        question: "Can I get pickup from different areas of Pune for Panvel travel?",
        answer: "Pickup arrangements can be discussed from your preferred Pune locality. Sharing the pickup point, departure time, passenger count, and luggage requirements beforehand helps Virendra Cab plan the journey according to your needs."
    },
    {
        question: "Can I carry luggage in a Pune to Panvel taxi?",
        answer: "Regular suitcases, travel bags, and personal belongings can be carried during the journey. If you are travelling with multiple or larger bags, mentioning the approximate luggage volume while booking can help in choosing a vehicle with suitable space."
    },
    {
        question: "How early should I reserve Pune to Panvel Cabs?",
        answer: "Advance reservation is helpful when your travel date is fixed, particularly during weekends, holidays, and busy travel periods. Providing the route, pickup location, passenger details, and vehicle preference early can make the travel arrangement easier to organize."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Rohit Bansode",
        feedback: "I needed to travel from Pune to Panvel for a business appointment and wanted a direct cab instead of using multiple transport connections. The journey was comfortable, and the private vehicle allowed me to manage my timing more conveniently. Virendra Cab handled the booking without any difficulty.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Shweta Patil",
        feedback: "Our family travelled from Pune to Panvel with luggage for a personal function. Having a private cab made the trip much easier because everyone could travel together and we did not have to change vehicles. The overall experience was comfortable and convenient.",
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
  "name": "Pune to Panvel Cabs",
  "image": "https://www.virendracabs.com/assets/images/pune-to-panvel-cabs.webp",
  "description": "Pune to Panvel Cabs provide a convenient private travel option for passengers travelling between Pune and Panvel for business, family visits, work commitments, airport connections, medical appointments, relocation and personal travel. Virendra Cab supports customers searching for Pune to Panvel Cab, Pune to Panvel Taxi, Cab from Pune to Panvel and Taxi from Pune to Panvel with suitable vehicle choices based on passenger count, luggage and journey requirements. Pune to Panvel Cab Service can be arranged for one-way travel when a direct drop is required, while round-trip bookings are suitable for passengers planning to return to Pune after completing their work or visit. Customers can enquire about pickup from residential locations, offices, hotels, railway stations or other convenient points in Pune. The service is also useful for travellers connecting to Navi Mumbai, Mumbai and nearby destinations through Panvel. Passengers looking for Pune to Panvel Taxi Fare or Pune to Panvel Cab Fare can contact Virendra Cab for the current applicable fare, as the final amount can vary according to the selected vehicle, route, travel time and trip type. Sedan, SUV, Ertiga, Innova and Innova Crysta options can be considered according to passenger capacity, luggage and comfort preferences. One-way cab booking is suitable for direct intercity drops, while round-trip taxi service can be planned when both onward and return travel are required. Advance Pune to Panvel Cab Booking helps coordinate the pickup schedule, destination and preferred vehicle before the journey. The reverse route can also be arranged for passengers searching for Panvel to Pune Cab or Panvel to Pune Taxi Service. Corporate travellers, families, students and individual passengers can enquire about suitable transportation according to their travel plans. Private cab travel allows passengers to reach Panvel directly without changing vehicles during the journey. Virendra Cab provides booking support for Pune to Panvel intercity transportation with flexible one-way and round-trip options.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.virendracabs.com/pune-to-panvel-cabs"
  }
};



    return (
        <div>

<Helmet>
  <title>
    Pune to Panvel Cabs | Pune to Panvel Taxi Service | +91 9022549022
  </title>

  <meta
    name="description"
    content="Book Pune to Panvel Cabs for convenient one-way and round-trip travel. Choose sedan, SUV, Ertiga, Innova or Innova Crysta options and enquire about current Pune to Panvel taxi fares."
  />

  <meta
    name="keywords"
    content="Pune to Panvel Cabs, Pune to Panvel Cab, Pune to Panvel Taxi, Cab from Pune to Panvel, Taxi from Pune to Panvel, Pune to Panvel Cab Service, Pune to Panvel Taxi Fare, Pune to Panvel One Way Cab, Pune to Panvel One Way Taxi, Pune to Panvel Round Trip Cab, Pune to Panvel Round Trip Taxi, Pune to Panvel Cab Booking, Pune to Panvel Taxi Booking, Pune to Panvel Cab Fare, Pune to Panvel Cab Price, Pune to Panvel Taxi Price, Pune to Panvel Cab Charges, Pune to Panvel Outstation Cab, Pune to Panvel Outstation Taxi, Pune to Panvel Private Cab, Pune to Panvel Car Rental, Pune to Panvel Cab Hire, Pune to Panvel Taxi Hire, Pune Panvel Cab Service, Pune Panvel Taxi Service, Pune to Panvel Sedan Cab, Pune to Panvel Sedan Taxi, Pune to Panvel SUV Cab, Pune to Panvel SUV Taxi, Pune to Panvel Ertiga Cab, Pune to Panvel Innova Cab, Pune to Panvel Innova Crysta Cab, Best Pune to Panvel Cab Service, Reliable Pune to Panvel Taxi, Affordable Pune to Panvel Cab, Cheap Pune to Panvel Cab, Pune to Panvel Intercity Cab, Pune to Panvel Private Taxi, Pune to Panvel Family Cab, Pune to Panvel Corporate Cab, Pune to Panvel Cab Booking Online, Panvel to Pune Cab, Panvel to Pune Taxi, Panvel to Pune Cab Service, Panvel to Pune Taxi Service, Panvel to Pune One Way Cab, Panvel to Pune One Way Taxi"
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
                            <img src='/images/keyword/86.jpg' alt='img' className='img-fluid' />
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

export default Punetopanvelcab ;