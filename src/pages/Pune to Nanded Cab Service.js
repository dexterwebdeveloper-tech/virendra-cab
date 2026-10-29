import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Punetonandedcab() {



const cardData = {
    keyword: "Pune to Nanded Cab Service",
    headingDescription: "Pune to Nanded Cab Service by Virendra Cab offers comfortable and convenient private transportation for travellers heading toward Nanded and other important destinations across the Marathwada region. Passengers can choose one-way or round-trip travel with sedan, SUV, Innova, and other suitable vehicle options depending on group size, luggage, and journey requirements. The service also supports routes to Jalna, Hingoli, Latur, Dharashiv, Parbhani, and other Marathwada destinations, making it suitable for family trips, business travel, religious journeys, and long-distance outstation travel.",
    topPlaces: [
        {
            title: "Nanded",
            description: "Nanded is a major Marathwada destination and an important religious and cultural centre, making private cab travel from Pune useful for family trips and pilgrimage journeys."
        },
        {
            title: "Jalna",
            description: "A private cab to Jalna provides convenient door-to-door transportation for business visits, family travel, industrial work, and personal journeys."
        },
        {
            title: "Hingoli",
            description: "Travellers heading to Hingoli can choose private cab transportation for comfortable long-distance travel, family visits, religious trips, and planned stays."
        },
        {
            title: "Latur",
            description: "Pune to Latur cab travel is suitable for business requirements, educational visits, family journeys, and passengers looking for direct outstation transportation."
        },
        {
            title: "Dharashiv",
            description: "A private cab to Dharashiv offers convenient road transportation for travellers visiting the city for personal, business, family, and regional travel needs."
        },
        {
            title: "Parbhani",
            description: "Passengers travelling toward Parbhani can arrange a comfortable private cab for family visits, business work, religious travel, and other long-distance requirements."
        },
        {
            title: "Aundha Nagnath",
            description: "Aundha Nagnath is an important religious destination in Marathwada, making private cab travel suitable for planned pilgrimage and family journeys."
        },
        {
            title: "Tuljapur",
            description: "Travellers can use private cab transportation to reach Tuljapur for religious visits, family trips, and convenient onward travel across the region."
        },
        {
            title: "Udgir",
            description: "A cab to Udgir provides direct transportation for passengers travelling for business, family requirements, educational purposes, and personal work."
        },
        {
            title: "Hingoli District",
            description: "Private outstation transportation across Hingoli district gives travellers a flexible option for reaching regional towns, villages, religious sites, and family destinations."
        }
    ],
    services: [
        {
            name: "Pune to Nanded Cab",
            description: "Virendra Cab provides direct private transportation from Pune to Nanded with comfortable vehicles and flexible pickup arrangements for individuals, families, and groups."
        },
        {
            name: "Pune to Nanded Taxi",
            description: "A private taxi from Pune to Nanded is suitable for business travel, family visits, religious journeys, and other long-distance transportation requirements."
        },
        {
            name: "Cab from Pune to Nanded",
            description: "Passengers can arrange a direct cab from Pune to Nanded according to their preferred departure time, passenger count, luggage requirements, and vehicle category."
        },
        {
            name: "Taxi from Pune to Nanded",
            description: "Private taxi transportation provides a convenient door-to-door option for travellers who want a comfortable journey without changing vehicles along the route."
        },
        {
            name: "Pune to Nanded Cab Service",
            description: "The service supports long-distance travel between Pune and Nanded with suitable vehicle choices and professional driver assistance for different journey requirements."
        },
        {
            name: "Pune to Nanded Taxi Fare",
            description: "Travellers can enquire about the applicable taxi fare according to the selected vehicle, travel type, route requirements, and whether the journey is one-way or round-trip."
        },
        {
            name: "Pune to Nanded One Way Cab",
            description: "One-way cab service is convenient for passengers travelling directly to Nanded who have separate arrangements for their return journey."
        },
        {
            name: "Pune to Nanded Round Trip Taxi",
            description: "Round-trip taxi service provides transportation for both onward and return journeys, making it useful for family visits, business work, religious travel, and planned stays."
        },
        {
            name: "Pune to Nanded Cab Booking",
            description: "Advance cab booking allows passengers to provide their pickup location, destination, travel date, departure time, passenger count, and preferred vehicle for better trip planning."
        },
        {
            name: "Cheap Pune to Nanded Cab",
            description: "Travellers comparing economical options can select a suitable vehicle based on group size, luggage, journey type, and overall transportation requirements."
        },
        {
            name: "Best Pune to Nanded Taxi",
            description: "Virendra Cab provides private taxi options with comfortable vehicles and professional driver assistance for travellers comparing suitable Pune to Nanded transportation."
        },
        {
            name: "Sedan Pune to Nanded Cab",
            description: "A sedan is a practical option for individuals, couples, and small groups looking for comfortable seating and efficient luggage space during the long-distance journey."
        },
        {
            name: "SUV Pune to Nanded Taxi",
            description: "SUV taxi options provide additional passenger and luggage capacity, making them useful for families and groups travelling from Pune to Nanded."
        },
        {
            name: "Innova Pune to Nanded Cab",
            description: "An Innova offers spacious seating and practical luggage capacity for families and groups seeking comfortable private transportation on the Pune to Nanded route."
        },
        {
            name: "Long Route Cab Pune Nanded",
            description: "Long-distance private cab service provides a convenient travel option for passengers who prefer direct road transportation with flexible pickup and vehicle choices."
        },
        {
            name: "Pune to Marathwada Cab",
            description: "Private cab service from Pune to Marathwada connects travellers with important regional destinations for family trips, business travel, religious journeys, and personal work."
        },
        {
            name: "Marathwada Cab Service from Pune",
            description: "Travellers can arrange private transportation from Pune toward different Marathwada cities with vehicle options suited to individual and group travel."
        },
        {
            name: "Pune to Marathwada Taxi Service",
            description: "A private taxi service provides direct transportation toward Marathwada for passengers requiring comfortable and flexible long-distance road travel."
        },
        {
            name: "Pune to Marathwada Cab Booking",
            description: "Advance booking helps passengers plan their Marathwada journey by confirming pickup details, destination, travel schedule, passenger count, and preferred vehicle."
        },
        {
            name: "Best Marathwada Cab Pune",
            description: "Travellers comparing Marathwada transportation can choose a suitable private cab according to their destination, group size, luggage, and preferred vehicle type."
        },
        {
            name: "Outstation Cab Pune to Marathwada",
            description: "Outstation cab service provides direct private transportation from Pune to Marathwada destinations for family, business, religious, and personal travel."
        },
        {
            name: "Luxury Cab Pune Marathwada",
            description: "Luxury cab options are suitable for travellers who prefer enhanced comfort and a spacious private vehicle during longer journeys between Pune and Marathwada."
        },
        {
            name: "Pune to Marathwada Tour Cab",
            description: "A private tour cab is useful for travellers planning multi-destination Marathwada trips with flexible stops, sightseeing requirements, and return transportation."
        },
        {
            name: "Round Trip Marathwada Taxi Pune",
            description: "Round-trip taxi service from Pune to Marathwada provides convenient onward and return transportation for planned family trips, religious visits, and business travel."
        },
        {
            name: "One Way Pune to Marathwada Cab",
            description: "One-way private cab service is suitable for passengers travelling from Pune to Marathwada who do not require the same vehicle for their return journey."
        },
        {
            name: "Pune to Jalna Cab",
            description: "A private cab from Pune to Jalna provides direct transportation for business travellers, families, students, and passengers travelling for personal work."
        },
        {
            name: "Pune to Jalna Cab Service",
            description: "The service offers comfortable private transportation to Jalna with flexible pickup arrangements and vehicle choices for different passenger requirements."
        },
        {
            name: "Pune to Jalna Taxi Service",
            description: "Private taxi transportation to Jalna is convenient for business trips, family visits, industrial work, and planned outstation journeys."
        },
        {
            name: "Pune to Jalna Cab Booking",
            description: "Passengers can arrange advance cab bookings to Jalna by sharing their pickup location, travel date, departure time, and preferred vehicle."
        },
        {
            name: "Best Pune to Jalna Cab",
            description: "Travellers can select a suitable private cab for the Pune to Jalna route based on comfort, passenger capacity, luggage needs, and journey type."
        },
        {
            name: "One Way Pune to Jalna Cab",
            description: "One-way service provides direct transportation from Pune to Jalna for passengers who only require an onward journey."
        },
        {
            name: "Round Trip Pune to Jalna Taxi",
            description: "Round-trip taxi service is useful for passengers visiting Jalna for business, family work, appointments, religious travel, or short planned stays."
        },
        {
            name: "Pune to Hingoli Cab",
            description: "Private cab transportation from Pune to Hingoli provides a convenient option for long-distance family, business, religious, and personal travel."
        },
        {
            name: "Pune to Hingoli Cab Service",
            description: "The service connects Pune with Hingoli through direct private transportation and vehicle options designed for individuals, families, and groups."
        },
        {
            name: "Pune to Hingoli Taxi Service",
            description: "A private taxi to Hingoli offers comfortable road transportation with flexible pickup arrangements for planned outstation journeys."
        },
        {
            name: "Pune to Hingoli Cab Booking",
            description: "Advance booking helps passengers organize their Hingoli trip with confirmed pickup details, travel schedules, passenger information, and vehicle preferences."
        },
        {
            name: "Best Pune to Hingoli Cab",
            description: "Passengers comparing travel options can choose a suitable Pune to Hingoli cab according to comfort, group size, luggage, and preferred journey format."
        },
        {
            name: "One Way Pune to Hingoli Cab",
            description: "One-way cab service provides direct transportation to Hingoli for travellers who have separate arrangements for their return trip."
        },
        {
            name: "Round Trip Pune to Hingoli Taxi",
            description: "Round-trip taxi service allows passengers to plan both onward and return transportation for family visits, business work, and religious journeys."
        },
        {
            name: "Cheap Pune to Hingoli Cab",
            description: "Travellers seeking economical transportation can compare suitable vehicle options based on passenger requirements and the type of journey planned."
        },
        {
            name: "Pune to Latur Cab Booking",
            description: "Advance cab booking for Latur allows passengers to arrange convenient pickup, preferred departure time, suitable vehicle, and travel requirements in advance."
        },
        {
            name: "Pune to Latur Cab Service",
            description: "Private cab service from Pune to Latur supports comfortable long-distance travel for business, education, family visits, and personal journeys."
        },
        {
            name: "Pune to Latur Taxi Service",
            description: "A dedicated taxi service provides direct transportation between Pune and Latur with vehicle options for different passenger and luggage requirements."
        },
        {
            name: "Pune to Latur Cab",
            description: "Passengers can travel from Pune to Latur in a private cab with flexible pickup arrangements and vehicle choices suited to the journey."
        },
        {
            name: "Best Pune to Latur Cab",
            description: "Travellers can choose a suitable private cab for Pune to Latur based on seating comfort, luggage capacity, travel type, and group size."
        },
        {
            name: "One Way Pune to Latur Cab",
            description: "One-way cab service offers direct transportation from Pune to Latur for passengers who only need an onward journey."
        },
        {
            name: "Round Trip Pune to Latur Taxi",
            description: "Round-trip taxi service is convenient for passengers planning business visits, family trips, appointments, or short stays in Latur."
        },
        {
            name: "Cheap Pune to Latur Cab",
            description: "Passengers looking for economical travel can select an appropriate cab according to their group size, luggage requirements, and preferred vehicle category."
        },
        {
            name: "Pune to Dharashiv Cab",
            description: "Private cab service from Pune to Dharashiv provides direct road transportation for family visits, business work, religious travel, and personal journeys."
        },
        {
            name: "Pune to Dharashiv Cab Service",
            description: "The service offers comfortable transportation to Dharashiv with flexible pickup arrangements and vehicle options for individual and group travellers."
        },
        {
            name: "Pune to Dharashiv Taxi Service",
            description: "A private taxi to Dharashiv provides convenient door-to-door transportation for passengers planning long-distance outstation travel."
        },
        {
            name: "Pune to Dharashiv Cab Booking",
            description: "Advance booking enables travellers to arrange their Dharashiv trip with a suitable vehicle, scheduled departure, pickup point, and passenger details."
        },
        {
            name: "Best Pune to Dharashiv Cab",
            description: "Travellers can compare suitable private cab options for Dharashiv according to comfort, passenger capacity, luggage needs, and travel requirements."
        },
        {
            name: "One Way Pune to Dharashiv Cab",
            description: "One-way transportation is useful for passengers travelling directly from Pune to Dharashiv without requiring a return cab in the same booking."
        },
        {
            name: "Round Trip Pune to Dharashiv Taxi",
            description: "Round-trip taxi service supports planned onward and return journeys for family visits, business requirements, religious travel, and personal work."
        },
        {
            name: "Cheap Pune to Dharashiv Cab",
            description: "Passengers comparing economical options can choose a suitable vehicle according to their travel requirements, passenger count, and luggage."
        },
        {
            name: "Pune to Nanded Taxi",
            description: "A private taxi from Pune to Nanded provides direct and comfortable transportation for travellers undertaking business, family, religious, or personal journeys."
        },
        {
            name: "Pune to Marathwada Taxi",
            description: "Private taxi transportation from Pune to Marathwada offers a convenient option for travellers visiting different cities and regional destinations."
        },
        {
            name: "Pune to Jalna Cab Booking",
            description: "Passengers can arrange an advance Pune to Jalna cab booking with their preferred pickup time, destination details, passenger count, and vehicle requirements."
        },
        {
            name: "Pune to Hingoli Taxi",
            description: "A private taxi to Hingoli provides direct road transportation for families, business travellers, religious visitors, and passengers travelling for personal work."
        },
        {
            name: "Pune to Latur Outstation Cab",
            description: "Outstation cab service from Pune to Latur offers private transportation for long-distance travel with vehicle options suitable for different group sizes."
        },
        {
            name: "Pune to Dharashiv Taxi",
            description: "Travellers can arrange a private taxi from Pune to Dharashiv for convenient intercity transportation, family trips, business work, and planned visits."
        },
        {
            name: "Pune to Nanded Innova Crysta",
            description: "An Innova Crysta provides spacious seating and comfortable luggage capacity for families and groups travelling on the long Pune to Nanded route."
        },
        {
            name: "Pune to Latur Tempo Traveller",
            description: "A Tempo Traveller is suitable for larger groups travelling from Pune to Latur who require additional seating space and shared private transportation."
        },
        {
            name: "Pune to Parbhani Cab",
            description: "Private cab transportation to Parbhani is useful for family visits, business requirements, religious journeys, and long-distance personal travel."
        },
        {
            name: "Pune to Latur Cab",
            description: "A direct Pune to Latur cab provides flexible private transportation with suitable vehicle options for individuals, families, and groups."
        }
    ],
    tableData: [
        ["Pune to Nanded Cab"],
        ["Pune to Nanded Taxi"],
        ["Cab from Pune to Nanded"],
        ["Taxi from Pune to Nanded"],
        ["Pune to Nanded Cab Service"],
        ["Pune to Nanded Taxi Fare"],
        ["Pune to Nanded One Way Cab"],
        ["Pune to Nanded Round Trip Taxi"],
        ["Pune to Nanded Cab Booking"],
        ["Cheap Pune to Nanded Cab"],
        ["Best Pune to Nanded Taxi"],
        ["Sedan Pune to Nanded Cab"],
        ["SUV Pune to Nanded Taxi"],
        ["Innova Pune to Nanded Cab"],
        ["Long Route Cab Pune Nanded"],
        ["Pune to Marathwada Cab"],
        ["Marathwada Cab Service from Pune"],
        ["Pune to Marathwada Taxi Service"],
        ["Pune to Marathwada Cab Booking"],
        ["Best Marathwada Cab Pune"],
        ["Outstation Cab Pune to Marathwada"],
        ["Luxury Cab Pune Marathwada"],
        ["Pune to Marathwada Tour Cab"],
        ["Round Trip Marathwada Taxi Pune"],
        ["One Way Pune to Marathwada Cab"],
        ["Pune to Jalna Cab"],
        ["Pune to Jalna Cab Service"],
        ["Pune to Jalna Taxi Service"],
        ["Pune to Jalna Cab Booking"],
        ["Best Pune to Jalna Cab"],
        ["One Way Pune to Jalna Cab"],
        ["Round Trip Pune to Jalna Taxi"],
        ["Pune to Hingoli Cab"],
        ["Pune to Hingoli Cab Service"],
        ["Pune to Hingoli Taxi Service"],
        ["Pune to Hingoli Cab Booking"],
        ["Best Pune to Hingoli Cab"],
        ["One Way Pune to Hingoli Cab"],
        ["Round Trip Pune to Hingoli Taxi"],
        ["Cheap Pune to Hingoli Cab"],
        ["Pune to Latur Cab Booking"],
        ["Pune to Latur Cab Service"],
        ["Pune to Latur Taxi Service"],
        ["Pune to Latur Cab"],
        ["Best Pune to Latur Cab"],
        ["One Way Pune to Latur Cab"],
        ["Round Trip Pune to Latur Taxi"],
        ["Cheap Pune to Latur Cab"],
        ["Pune to Dharashiv Cab"],
        ["Pune to Dharashiv Cab Service"],
        ["Pune to Dharashiv Taxi Service"],
        ["Pune to Dharashiv Cab Booking"],
        ["Best Pune to Dharashiv Cab"],
        ["One Way Pune to Dharashiv Cab"],
        ["Round Trip Pune to Dharashiv Taxi"],
        ["Cheap Pune to Dharashiv Cab"],
        ["Pune to Nanded Taxi"],
        ["Pune to Marathwada Taxi"],
        ["Pune to Jalna Cab Booking"],
        ["Pune to Hingoli Taxi"],
        ["Pune to Latur Outstation Cab"],
        ["Pune to Dharashiv Taxi"],
        ["Pune to Nanded Innova Crysta"],
        ["Pune to Latur Tempo Traveller"],
        ["Pune to Parbhani Cab"],
        ["Pune to Latur Cab"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Dedicated Nanded Travel",
            WhyChoosedescription: "Virendra Cab provides direct private transportation between Pune and Nanded with flexible pickup arrangements suitable for families, business travellers, religious visitors, and individuals."
        },
        {
            WhyChooseheading: "Extensive Marathwada Connectivity",
            WhyChoosedescription: "The service covers important Marathwada destinations including Nanded, Jalna, Hingoli, Latur, Dharashiv, and Parbhani, making multi-city travel more convenient."
        },
        {
            WhyChooseheading: "Flexible One-Way Travel",
            WhyChoosedescription: "One-way cab options allow passengers to travel directly to their destination without paying for or coordinating a return journey when it is not required."
        },
        {
            WhyChooseheading: "Round-Trip Convenience",
            WhyChoosedescription: "Round-trip bookings are useful for passengers planning family visits, business meetings, religious journeys, appointments, or short stays before returning to Pune."
        },
        {
            WhyChooseheading: "Multiple Vehicle Choices",
            WhyChoosedescription: "Sedan, SUV, Innova, Innova Crysta, and larger group options allow travellers to select transportation based on passenger count, luggage, comfort, and trip requirements."
        },
        {
            WhyChooseheading: "Long-Distance Comfort",
            WhyChoosedescription: "Private transportation provides a more convenient option for the extended Pune to Nanded and Marathwada routes, with direct travel and flexible pickup arrangements."
        },
        {
            WhyChooseheading: "Group Travel Support",
            WhyChoosedescription: "Families and larger groups can select spacious vehicles such as Innova or Tempo Traveller options when additional seating and luggage capacity are required."
        },
        {
            WhyChooseheading: "Planned Booking Assistance",
            WhyChoosedescription: "Passengers can share their pickup point, destination, travel date, departure time, passenger count, luggage requirements, and preferred vehicle to organize their outstation journey."
        }
    ]
};



const faqData = [
    {
        question: "How can I book a Pune to Nanded Cab Service with Virendra Cab?",
        answer: "To arrange a Pune to Nanded Cab Service, provide your Pune pickup location, travel date, passenger count, luggage requirements, and preferred vehicle. Virendra Cab can plan the journey according to whether you need one-way travel, a return trip, family transportation, business travel, or a pilgrimage journey."
    },
    {
        question: "Is a one-way taxi available from Pune to Nanded?",
        answer: "One-way cab travel can be arranged for passengers who only need transportation from Pune to Nanded. This option can be suitable for personal visits, work-related travel, relocation, or travellers who already have separate arrangements for their return."
    },
    {
        question: "Can I book a round-trip cab from Pune to Nanded?",
        answer: "A round-trip cab can be considered when your plans include returning to Pune after your stay in Nanded. You can share the expected return date and timing so the complete travel schedule can be planned around your itinerary."
    },
    {
        question: "Which vehicle is suitable for a Pune to Nanded journey?",
        answer: "The right vehicle depends on your group size, luggage, and travel requirements. A sedan can suit smaller groups, while an Ertiga or Innova Crysta can be considered when families or larger groups need additional seating and luggage space."
    },
    {
        question: "Can I book a Pune to Nanded Cab for a pilgrimage trip?",
        answer: "Nanded is known for important religious destinations, and a private cab can be useful for pilgrimage travel. Travellers can plan visits to Hazur Sahib and other local religious places while keeping the itinerary flexible according to their available time."
    },
    {
        question: "Is Pune to Nanded cab service suitable for family travel?",
        answer: "Families can choose a private cab for a direct journey from Pune to Nanded without changing transportation along the route. Vehicle selection can be based on the number of family members, luggage, and any sightseeing or religious stops planned during the trip."
    },
    {
        question: "Can I use the Pune to Nanded Cab Service for business travel?",
        answer: "Business travellers can use a dedicated cab for meetings, client visits, site work, and professional commitments in Nanded. The private vehicle can also be useful when your schedule requires visiting multiple locations during the same trip."
    },
    {
        question: "Can I include Nanded sightseeing with my cab booking?",
        answer: "If your schedule allows additional travel after reaching Nanded, local sightseeing can be included in the itinerary. Depending on your interests, places such as Hazur Sahib, Kandhar Fort, local temples, and other nearby attractions can be considered."
    },
    {
        question: "Can I carry luggage in a Pune to Nanded taxi?",
        answer: "Passengers can carry regular suitcases, travel bags, and personal belongings in the cab. If your group has substantial luggage, sharing the approximate number of bags during booking can help determine a vehicle with suitable space."
    },
    {
        question: "How early should I book a Pune to Nanded Cab Service?",
        answer: "Advance booking is useful for this long-distance route, especially during weekends, holidays, pilgrimage periods, and family travel seasons. Providing your travel date, pickup point, passenger count, and vehicle preference early can make the journey planning more convenient."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Dinesh Shinde",
        feedback: "We travelled from Pune to Nanded for a family pilgrimage and preferred a private cab because we were carrying several bags. The journey gave us the flexibility to manage our stops and travel together comfortably. Virendra Cab was a convenient option for our religious trip.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Komal Wagh",
        feedback: "My work required a trip from Pune to Nanded, and I wanted a direct vehicle rather than changing buses along the way. The cab made the long journey easier to coordinate with my schedule, and there was enough room for my luggage. The overall booking experience was smooth.",
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
  "name": "Pune to Nanded Cab Service",
  "image": "https://www.virendracabs.com/assets/images/pune-to-nanded-cab-service.webp",
  "description": "Pune to Nanded Cab Service offers convenient private transportation for passengers travelling from Pune to Nanded for business, family visits, religious trips, medical appointments, education, relocation and other personal requirements. Virendra Cab supports customers searching for Pune to Nanded Cab, Pune to Nanded Taxi, Cab from Pune to Nanded and Taxi from Pune to Nanded with suitable vehicle options based on passenger count, luggage and journey preferences. The service can be arranged as a Pune to Nanded One Way Cab for passengers who require a direct drop, while Pune to Nanded Round Trip Taxi options are suitable for travellers who need transportation for both onward and return journeys. Customers can request pickup from homes, offices, hotels, railway stations or other convenient locations across Pune. Nanded is also an important destination for visitors travelling to Hazur Sahib and other religious or family-related locations, making a private cab useful for planned pilgrimage and long-distance travel. Passengers comparing Pune to Nanded Taxi Fare, Pune to Nanded Cab Fare or Cheap Pune to Nanded Cab options can contact Virendra Cab for the current applicable fare, as pricing depends on the vehicle category, route, travel schedule and trip type. Sedan, SUV, Ertiga, Innova and Innova Crysta options can be considered according to the number of passengers, luggage and preferred comfort level. Pune to Nanded Cab Booking can be arranged in advance so that the pickup time, destination, vehicle and travel schedule are coordinated before departure. The reverse journey can also be planned for customers looking for Nanded to Pune Cab or Nanded to Pune Taxi Service. Private intercity travel provides a direct journey without requiring passengers to change vehicles along the route. The service is suitable for individual travellers, families, corporate passengers and groups planning longer road journeys. Virendra Cab provides booking assistance for one-way and round-trip Pune to Nanded travel with vehicle options suited to different passenger requirements.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.virendracabs.com/pune-to-nanded-cab-service"
  }
};







    return (
        <div>

<Helmet>
  <title>
    Pune to Nanded Cab Service | Pune to Nanded Taxi | +91 9022549022
  </title>

  <meta
    name="description"
    content="Book Pune to Nanded Cab Service for one-way or round-trip travel. Get private sedan, SUV, Ertiga, Innova and Innova Crysta options with Virendra Cab."
  />

  <meta
    name="keywords"
    content="Pune to Nanded Cab Service, Pune to Nanded Cab, Pune to Nanded Taxi, Cab from Pune to Nanded, Taxi from Pune to Nanded, Pune to Nanded Cab Service, Pune to Nanded Taxi Service, Pune to Nanded Taxi Fare, Pune to Nanded Cab Fare, Pune to Nanded Cab Price, Pune to Nanded Taxi Price, Pune to Nanded One Way Cab, Pune to Nanded One Way Taxi, Pune to Nanded Round Trip Cab, Pune to Nanded Round Trip Taxi, Pune to Nanded Cab Booking, Pune to Nanded Taxi Booking, Cheap Pune to Nanded Cab, Best Pune to Nanded Cab, Reliable Pune to Nanded Taxi, Affordable Pune to Nanded Cab, Pune to Nanded Outstation Cab, Pune to Nanded Outstation Taxi, Pune to Nanded Private Cab, Pune to Nanded Private Taxi, Pune to Nanded Car Rental, Pune to Nanded Cab Hire, Pune to Nanded Taxi Hire, Pune Nanded Cab Service, Pune Nanded Taxi Service, Pune to Nanded Sedan Cab, Pune to Nanded Sedan Taxi, Pune to Nanded SUV Cab, Pune to Nanded SUV Taxi, Pune to Nanded Ertiga Cab, Pune to Nanded Ertiga Taxi, Pune to Nanded Innova Cab, Pune to Nanded Innova Taxi, Pune to Nanded Innova Crysta Cab, Pune to Nanded Innova Crysta Taxi, Pune to Nanded Intercity Cab, Pune to Nanded Family Cab, Pune to Nanded Corporate Cab, Pune to Nanded Pilgrimage Cab, Pune to Nanded Hazur Sahib Cab, Pune to Nanded Cab Booking Online, Nanded to Pune Cab, Nanded to Pune Taxi, Nanded to Pune Cab Service, Nanded to Pune Taxi Service, Nanded to Pune One Way Cab, Nanded to Pune One Way Taxi"
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
                            <img src='/images/keyword/87.jpg' alt='img' className='img-fluid' />
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

export default Punetonandedcab ;