import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Punetolaturcab() {



const cardData = {
    keyword: "Pune to Latur Cab",
    headingDescription: "Virendra Cab provides comfortable and convenient Pune to Latur cab services for personal travel, family journeys, business visits, airport transfers, and long-distance outstation trips. Travellers can choose from sedan, Ertiga, Innova, Innova Crysta, SUV, and traveller options according to passenger count, luggage, comfort preferences, and trip requirements. The service also supports pickups from Pune Airport, Hinjewadi, Wakad, Hadapsar, and Pimpri Chinchwad, making it easier to arrange direct transportation towards Latur.",
    topPlaces: [
        {
            title: "Latur City",
            description: "Latur is an important city in Maharashtra and a common destination for business, family, educational, and personal visits. A private cab provides direct and comfortable transportation from Pune with flexible pickup and drop arrangements."
        },
        {
            title: "Udgir",
            description: "Udgir is known for its historic fort and regional importance in the Latur district. Travellers can include Udgir in a longer road itinerary while using a private cab for convenient transportation."
        },
        {
            title: "Ausa Fort",
            description: "Ausa Fort is a historic attraction located near Latur and offers an interesting stop for travellers exploring the region. A private vehicle allows visitors to plan the visit without depending on fixed public transport schedules."
        },
        {
            title: "Kharosa Caves",
            description: "Kharosa Caves are known for their ancient rock-cut sculptures and historical significance. The destination can be included in a regional sightseeing plan when travelling around Latur by cab."
        },
        {
            title: "Nilanga",
            description: "Nilanga is a prominent town in the Latur region and can be useful as a destination for personal, family, or business travel. A direct cab offers convenient transportation with pickup from the traveller's preferred Pune location."
        },
        {
            title: "Deoni",
            description: "Deoni provides access to rural and regional areas around Latur and can be included in private road travel plans. A cab gives passengers greater flexibility when visiting multiple locations during the same journey."
        },
        {
            title: "Udgir Fort",
            description: "Udgir Fort is an important historical landmark in the region and attracts travellers interested in local heritage. Comfortable cab travel makes it easier for families and groups to include the fort in their itinerary."
        },
        {
            title: "Ganj Golai",
            description: "Ganj Golai is a distinctive circular market area and a well-known landmark in Latur city. Visitors can conveniently reach the central area by private cab while managing shopping, luggage, and other local plans."
        }
    ],
    services: [
        {
            name: "Pune To Latur Car Rental",
            description: "Pune to Latur car rental provides travellers with a private vehicle for planned long-distance journeys between the two cities. Customers can select a suitable car based on passenger capacity, luggage, comfort requirements, and whether the trip is one way or round trip."
        },
        {
            name: "Pune To Latur Ca",
            description: "Pune to Latur Ca is suitable for travellers searching for direct private transportation between Pune and Latur. Virendra Cab offers vehicle options for individuals, families, professionals, and groups based on their travel requirements."
        },
        {
            name: "Pune To Latur Cab",
            description: "Virendra Cab provides Pune to Latur cab services for comfortable outstation travel with convenient pickup and destination drop arrangements. The service can accommodate personal visits, family journeys, business travel, and other long-distance requirements."
        },
        {
            name: "Pune To Latur Taxi",
            description: "A Pune to Latur taxi provides direct point-to-point transportation for passengers who prefer a private road journey. Travellers can choose a vehicle according to their group size, luggage requirements, and desired level of comfort."
        },
        {
            name: "Pune To Latur Cab Service",
            description: "Pune to Latur cab service is designed for travellers looking for dependable private transportation for the long-distance route. Virendra Cab supports scheduled pickups and offers different vehicle categories for varied travel needs."
        },
        {
            name: "Pune To Latur Taxi Service",
            description: "Pune to Latur taxi service provides a convenient alternative to coordinating multiple public transport connections. Passengers can travel directly from their selected Pune pickup location to their destination in Latur."
        },
        {
            name: "Cab From Pune To Latur",
            description: "A cab from Pune to Latur is suitable for travellers who want a dedicated vehicle throughout the journey. The service can be planned for individual passengers, families, corporate travellers, or groups requiring additional luggage space."
        },
        {
            name: "Taxi From Pune To Latur",
            description: "Taxi from Pune to Latur provides direct road transportation with flexible pickup arrangements. Customers can select a suitable vehicle and plan the journey according to their preferred departure schedule and destination."
        },
        {
            name: "Pune To Latur Outstation Cab",
            description: "Pune to Latur outstation cab service is suitable for travellers planning an intercity journey with a private vehicle. It can be arranged for one-way drops, return trips, business travel, family visits, and extended road travel."
        },
        {
            name: "Pune To Latur Cab Booking",
            description: "Pune to Latur cab booking allows passengers to arrange their vehicle before the journey and coordinate the pickup location and travel schedule. Advance booking also makes it easier to select a vehicle based on passenger and luggage requirements."
        },
        {
            name: "Pune To Latur Taxi Booking Online",
            description: "Pune to Latur taxi booking online offers a convenient way to request private transportation without visiting a physical booking counter. Travellers can provide their date, pickup point, destination, vehicle preference, and trip type while planning the journey."
        },
        {
            name: "Pune To Latur Cab Fare",
            description: "Pune to Latur cab fare can vary according to the vehicle category, pickup location, trip type, and other journey requirements. Travellers can share their complete itinerary to select an appropriate option for their planned travel."
        },
        {
            name: "Pune To Latur Taxi Fare",
            description: "Pune to Latur taxi fare depends on factors such as the selected vehicle and whether the journey is one way or round trip. Virendra Cab helps customers identify a suitable vehicle after understanding their passenger and travel requirements."
        },
        {
            name: "Pune To Latur Cab Price",
            description: "The Pune to Latur cab price may differ according to vehicle type, journey arrangement, pickup point, and travel requirements. Customers can compare suitable options based on their group size, luggage, and preferred comfort level."
        },
        {
            name: "Pune To Latur Taxi Charges",
            description: "Pune to Latur taxi charges are influenced by the vehicle selected and the nature of the journey. Travellers can discuss their complete travel plan in advance to understand the applicable booking requirements and select an appropriate vehicle."
        },
        {
            name: "Best Pune To Latur Cab Service",
            description: "Travellers comparing the best Pune to Latur cab service can consider vehicle condition, passenger comfort, pickup convenience, booking support, and suitability for long-distance travel. Virendra Cab provides multiple options for different journey requirements."
        },
        {
            name: "Cheap Pune To Latur Cab",
            description: "A cheap Pune to Latur cab can be considered by travellers who want to manage their transportation budget while retaining the convenience of private travel. Selecting the right vehicle and trip type can help match the journey with the available budget."
        },
        {
            name: "Pune To Latur One Way Cab",
            description: "Pune to Latur one way cab is suitable for passengers who require a direct drop at Latur without arranging a return journey. It can be useful for relocation, business visits, family travel, and personal work."
        },
        {
            name: "Pune To Latur Round Trip Taxi",
            description: "A Pune to Latur round trip taxi provides transportation for both the onward and return journeys under a planned travel arrangement. This option can be convenient for travellers attending functions, visiting relatives, completing business work, or planning an extended stay."
        },
        {
            name: "Pune To Latur Innova Cab",
            description: "Pune to Latur Innova cab is suitable for families and groups requiring comfortable seating and useful luggage capacity. The spacious vehicle provides a practical option for travellers planning a long-distance road journey."
        },
        {
            name: "Pune To Latur Innova Crysta Cab",
            description: "A Pune to Latur Innova Crysta cab can be selected by passengers looking for additional comfort and cabin space during the long journey. It is suitable for families, executive travellers, and groups carrying luggage."
        },
        {
            name: "Pune To Latur Ertiga Cab",
            description: "Pune to Latur Ertiga cab offers a practical combination of passenger capacity and cabin space for family and group travel. It can be considered when travellers need more seating than a standard sedan while maintaining a comfortable road journey."
        },
        {
            name: "Pune To Latur Sedan Cab",
            description: "A Pune to Latur sedan cab is a convenient option for individuals, couples, and small families who prefer private transportation. Sedan travel can be suitable for business trips, personal visits, and comfortable one-way journeys."
        },
        {
            name: "Pune To Latur SUV Taxi",
            description: "Pune to Latur SUV taxi provides additional cabin space for passengers travelling with luggage or as a small group. The larger vehicle category can be useful for family journeys, business travel, and extended road trips."
        },
        {
            name: "Pune To Latur AC Cab",
            description: "Pune to Latur AC cab provides a climate-controlled private travel environment for passengers covering the long-distance route. It can be suitable for families, professionals, and travellers seeking added comfort throughout the journey."
        },
        {
            name: "Pune To Latur Luxury Cab",
            description: "A Pune to Latur luxury cab is designed for travellers who prefer an enhanced level of comfort and a more premium private travel experience. It can be considered for executive journeys, special occasions, and comfortable family travel."
        },
        {
            name: "Pune Airport To Latur Cab",
            description: "Pune Airport to Latur cab provides direct transportation for passengers arriving in Pune and continuing towards Latur. Travellers can coordinate the pickup around their flight schedule and avoid changing vehicles before reaching their destination."
        },
        {
            name: "Hinjewadi To Latur Taxi",
            description: "Hinjewadi to Latur taxi service offers direct outstation transportation for IT professionals, residents, and business travellers starting their journey from the Hinjewadi area. The service can be arranged for one-way or return travel."
        },
        {
            name: "Wakad To Latur Cab",
            description: "Wakad to Latur cab provides a convenient starting point for travellers living or working around Wakad. Passengers can arrange direct pickup and choose a suitable vehicle according to group size and luggage requirements."
        },
        {
            name: "Hadapsar To Latur Taxi",
            description: "Hadapsar to Latur taxi supports direct long-distance travel from the eastern side of Pune. The service can accommodate personal, family, and business journeys with vehicle selection based on the passenger's travel requirements."
        },
        {
            name: "Pimpri Chinchwad To Latur Cab",
            description: "Pimpri Chinchwad to Latur cab service allows passengers from PCMC areas to begin their outstation journey directly from their preferred pickup point. This can reduce the need for additional local transfers before travelling towards Latur."
        },
        {
            name: "Pune To Latur Business Travel Taxi",
            description: "Pune to Latur business travel taxi is suitable for professionals attending meetings, visiting offices, managing projects, or travelling for work-related commitments. A private cab provides direct transportation with flexible scheduling."
        },
        {
            name: "Pune To Latur Family Trip Cab",
            description: "Pune to Latur family trip cab offers private transportation for families travelling together with luggage and personal belongings. Vehicle options can be selected according to family size, seating requirements, and desired comfort."
        },
        {
            name: "Pune To Latur Long Distance Taxi",
            description: "A Pune to Latur long distance taxi provides direct road transportation for passengers who prefer a private vehicle throughout the journey. It is suitable for planned personal travel, family visits, corporate trips, and extended road journeys."
        },
        {
            name: "Pune To Latur Night Travel Cab",
            description: "Pune to Latur night travel cab is suitable for travellers whose schedules require an evening or overnight departure. Advance coordination helps arrange the preferred pickup location, vehicle category, and travel timing."
        },
        {
            name: "Pune To Latur Outstation Taxi Service",
            description: "Pune to Latur outstation taxi service supports direct intercity travel with options for one-way and return journeys. The service can be tailored to passenger count, luggage, pickup location, and preferred vehicle category."
        },
        {
            name: "Pune To Latur Sedan Cab",
            description: "Pune to Latur sedan cab is a practical choice for small groups and passengers seeking a comfortable private car for the journey. It can be used for family visits, business travel, personal work, and one-way transportation."
        },
        {
            name: "Pune To Latur Dzire Cab",
            description: "Pune to Latur Dzire cab provides a practical sedan option for individuals, couples, and small families. Its compact format makes it suitable for travellers who want private transportation without requiring a larger group vehicle."
        },
        {
            name: "Pune To Latur Etios Cab",
            description: "Pune to Latur Etios cab is suitable for passengers looking for a comfortable sedan for an intercity journey. It can be considered for business travel, family visits, and personal trips where standard seating capacity is sufficient."
        },
        {
            name: "Pune To Latur Ertiga Cab",
            description: "Pune to Latur Ertiga cab offers additional seating capacity for families and small groups travelling together. The vehicle provides useful cabin and luggage space for a comfortable long-distance journey."
        },
        {
            name: "Pune To Latur Innova Cab",
            description: "Pune to Latur Innova cab is well suited to groups seeking a spacious private vehicle for the long road journey. It can accommodate passengers and luggage comfortably for family trips, business travel, and extended stays."
        },
        {
            name: "Pune To Latur Innova Crysta",
            description: "Pune to Latur Innova Crysta offers a spacious and comfortable vehicle option for travellers who prefer a premium group-travel experience. It can be useful for families, corporate passengers, and groups travelling with substantial luggage."
        },
        {
            name: "Pune To Latur 7-Seater Cab",
            description: "Pune to Latur 7-seater cab provides additional seating for families and groups who need more capacity than a regular sedan. It is suitable for passengers travelling together while keeping the journey in a single private vehicle."
        },
        {
            name: "Pune To Latur Tempo Traveller",
            description: "Pune to Latur Tempo Traveller is suitable for larger families, tour groups, and organisations travelling together. The additional seating capacity allows passengers to coordinate their long-distance journey in one dedicated vehicle."
        },
        {
            name: "Pune To Latur 12-Seater Traveller",
            description: "Pune to Latur 12-seater traveller provides a convenient group transportation option for larger parties. It can be arranged for family functions, group tours, corporate travel, and other journeys where multiple passengers need to travel together."
        },
        {
            name: "Pune To Latur Minibus",
            description: "Pune to Latur minibus is an appropriate option for larger groups requiring more seating capacity for an intercity journey. It can support group tours, events, corporate transportation, and family travel with shared private transportation."
        }
    ],
    tableData: [
        ["Pune To Latur Car Rental"],
        ["Pune To Latur Ca"],
        ["Pune To Latur Cab"],
        ["Pune To Latur Taxi"],
        ["Pune To Latur Cab Service"],
        ["Pune To Latur Taxi Service"],
        ["Cab From Pune To Latur"],
        ["Taxi From Pune To Latur"],
        ["Pune To Latur Outstation Cab"],
        ["Pune To Latur Cab Booking"],
        ["Pune To Latur Taxi Booking Online"],
        ["Pune To Latur Cab Fare"],
        ["Pune To Latur Taxi Fare"],
        ["Pune To Latur Cab Price"],
        ["Pune To Latur Taxi Charges"],
        ["Best Pune To Latur Cab Service"],
        ["Cheap Pune To Latur Cab"],
        ["Pune To Latur One Way Cab"],
        ["Pune To Latur Round Trip Taxi"],
        ["Pune To Latur Innova Cab"],
        ["Pune To Latur Innova Crysta Cab"],
        ["Pune To Latur Ertiga Cab"],
        ["Pune To Latur Sedan Cab"],
        ["Pune To Latur SUV Taxi"],
        ["Pune To Latur AC Cab"],
        ["Pune To Latur Luxury Cab"],
        ["Pune Airport To Latur Cab"],
        ["Hinjewadi To Latur Taxi"],
        ["Wakad To Latur Cab"],
        ["Hadapsar To Latur Taxi"],
        ["Pimpri Chinchwad To Latur Cab"],
        ["Pune To Latur Business Travel Taxi"],
        ["Pune To Latur Family Trip Cab"],
        ["Pune To Latur Long Distance Taxi"],
        ["Pune To Latur Night Travel Cab"],
        ["Pune To Latur Outstation Taxi Service"],
        ["Pune To Latur Sedan Cab"],
        ["Pune To Latur Dzire Cab"],
        ["Pune To Latur Etios Cab"],
        ["Pune To Latur Ertiga Cab"],
        ["Pune To Latur Innova Cab"],
        ["Pune To Latur Innova Crysta"],
        ["Pune To Latur 7-Seater Cab"],
        ["Pune To Latur Tempo Traveller"],
        ["Pune To Latur 12-Seater Traveller"],
        ["Pune To Latur Minibus"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Flexible Vehicle Selection",
            WhyChoosedescription: "Virendra Cab provides multiple vehicle categories ranging from practical sedans to spacious Innova, Innova Crysta, SUV, and traveller options, allowing passengers to select according to group size and luggage."
        },
        {
            WhyChooseheading: "One Way And Return Travel",
            WhyChoosedescription: "Travellers can arrange either a direct one-way drop or a planned round trip between Pune and Latur, making the service suitable for different schedules and purposes."
        },
        {
            WhyChooseheading: "Pickup From Major Pune Areas",
            WhyChoosedescription: "Pickup arrangements can be planned from important areas such as Pune Airport, Hinjewadi, Wakad, Hadapsar, and Pimpri Chinchwad, helping passengers begin their journey from a convenient location."
        },
        {
            WhyChooseheading: "Suitable For Long-Distance Journeys",
            WhyChoosedescription: "The service is designed around the needs of intercity travellers, with vehicle choices that provide suitable seating, cabin space, and luggage capacity for a longer road journey."
        },
        {
            WhyChooseheading: "Family And Group Travel Support",
            WhyChoosedescription: "Families and larger groups can select 7-seater, Tempo Traveller, 12-seater, or minibus options when travelling together, reducing the need to coordinate several separate vehicles."
        },
        {
            WhyChooseheading: "Airport-To-Destination Convenience",
            WhyChoosedescription: "Passengers arriving at Pune Airport can arrange direct transportation towards Latur, helping them continue their journey without an additional city transfer or vehicle change."
        },
        {
            WhyChooseheading: "Business Travel Convenience",
            WhyChoosedescription: "Professionals travelling between Pune and Latur for meetings, office visits, projects, or other work requirements can use private cab transportation with pickup and drop arrangements suited to their schedule."
        },
        {
            WhyChooseheading: "Advance Booking Assistance",
            WhyChoosedescription: "Advance booking allows travellers to provide their journey date, pickup point, passenger count, luggage requirements, and preferred vehicle so the transportation plan can be arranged according to the trip."
        }
    ]
};

const faqData = [
    {
        question: "Can I book a Pune to Latur Cab with Virendra Cab?",
        answer: "Virendra Cab can arrange private cab transportation from Pune to Latur based on your travel date, pickup location, passenger count, luggage, and preferred vehicle category. The service can be planned for family visits, personal travel, business requirements, or other long-distance journeys."
    },
    {
        question: "Is a one-way Pune to Latur Cab available?",
        answer: "Travellers who only need transportation from Pune to Latur can enquire about a one-way cab. The pickup address, destination, travel date, preferred departure time, and passenger details can be shared while planning the trip."
    },
    {
        question: "Can I book a round-trip cab from Pune to Latur?",
        answer: "Passengers planning to return to Pune after their Latur visit can discuss a round-trip cab arrangement. The return date, duration of stay, preferred timing, and vehicle requirements can be considered while organizing the complete journey."
    },
    {
        question: "Which vehicle is suitable for travelling from Pune to Latur?",
        answer: "The vehicle category can be selected according to passenger numbers, luggage, journey duration, and comfort preferences. Virendra Cab can discuss a suitable option after understanding the requirements of your Pune to Latur trip."
    },
    {
        question: "Can families travel from Pune to Latur by private cab?",
        answer: "Families can enquire about private cab travel by sharing their group size, luggage requirements, Pune pickup point, travel date, and preferred departure time. Vehicle selection can be considered according to the space and comfort needed by the group."
    },
    {
        question: "Can I book a Pune to Latur cab for business travel?",
        answer: "Private cab transportation can be considered for business meetings, office visits, client appointments, professional work, and other business requirements in Latur. The journey can be planned according to the traveller's work schedule."
    },
    {
        question: "Can I get pickup from different Pune locations for Latur travel?",
        answer: "Pickup arrangements can be discussed from Pune areas such as Hadapsar, Kharadi, Viman Nagar, Kothrud, Baner, Wakad, Hinjewadi, Pimpri-Chinchwad, and other suitable residential or commercial locations."
    },
    {
        question: "Can I travel with luggage in a Pune to Latur private cab?",
        answer: "Passengers can carry personal, family, or work-related luggage during the journey. The number of travellers and amount of baggage can be considered when discussing the appropriate vehicle for the Pune to Latur trip."
    },
    {
        question: "Can I use the cab for sightseeing around Latur?",
        answer: "Travellers can discuss adding local sightseeing to their Latur travel itinerary. Depending on the planned route, destinations such as Udgir Fort, Kharosa Caves, Ausa Fort, Siddheshwar Temple, and other nearby attractions can be considered."
    },
    {
        question: "What information is required to book a Pune to Latur Cab?",
        answer: "Passengers can provide their Pune pickup address, Latur destination, travel date, preferred departure time, number of travellers, luggage details, one-way or round-trip requirement, sightseeing plans, and preferred vehicle type when making the booking enquiry."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Yogesh Jadhav",
        feedback: "I had to travel from Pune to Latur for a family-related visit and wanted a private vehicle for the complete journey. Virendra Cab discussed my pickup location, travel timing, passenger details, luggage, and vehicle preference before arranging the cab.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Vaidehi Patil",
        feedback: "Our group was travelling to Latur and preferred having a cab from Pune rather than coordinating different transport options. The booking discussion covered our group size, luggage, pickup point, and travel schedule, which made the planning easier.",
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
  "name": "Pune to Latur Cab",
  "image": "https://www.virendracabs.com/assets/images/pune-to-latur-cab.webp",
  "description": "Pune to Latur Cab provides a convenient private travel option for passengers planning journeys between Pune and Latur. Virendra Cab offers cab booking and car rental support for customers searching for Pune to Latur Car Rental, Pune to Latur Cab, Pune to Latur Taxi and Pune to Latur Cab Service. A private cab can be arranged for business travel, family visits, personal journeys, educational trips, medical visits, sightseeing and other intercity transportation requirements. Pune to Latur Taxi Service is suitable for passengers who prefer a dedicated vehicle with flexible pickup and drop arrangements rather than shared transportation. Cab from Pune to Latur can be booked according to the preferred travel date, pickup location, destination and vehicle category. Taxi from Pune to Latur provides another convenient option for individuals and families who need comfortable transportation for a long-distance journey. Customers can enquire about sedan, SUV and other suitable vehicle options based on passenger count, luggage requirements and comfort preferences. One-way travel can be arranged when transportation is required only from Pune to Latur, while round-trip bookings can be considered when the same vehicle is needed for the return journey. Pune to Latur Car Rental can also be useful for planned travel where passengers require a private vehicle for an extended itinerary. Current Pune to Latur cab fare depends on vehicle type, distance, travel date, duration and one-way or round-trip requirements, so passengers can contact Virendra Cab for the latest fare details. Advance booking helps coordinate vehicle availability, pickup timing and destination information, making it easier to plan a comfortable private road journey from Pune to Latur.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.virendracabs.com/pune-to-latur-cab"
  }
};









    return (
        <div>
<Helmet>
  <title>
    Pune to Latur Cab | Pune to Latur Taxi Service | +91 9022549022
  </title>

  <meta
    name="description"
    content="Book Pune to Latur Cab for private intercity travel, car rental and taxi service. Get one-way or round-trip cab options from Pune to Latur with Virendra Cab."
  />

  <meta
    name="keywords"
    content="Pune to Latur Cab, Pune to Latur Car Rental, Pune to Latur Ca, Pune to Latur Taxi, Pune to Latur Cab Service, Pune to Latur Taxi Service, Cab from Pune to Latur, Taxi from Pune to Latur, Pune to Latur Cab Booking, Pune to Latur Taxi Booking, Pune to Latur Outstation Cab, Pune to Latur Outstation Taxi, Pune to Latur One Way Cab, Pune to Latur Round Trip Cab, Pune to Latur Private Cab, Pune to Latur Car Hire, Pune to Latur Cab Fare, Pune to Latur Taxi Fare, Pune Latur Cab, Pune Latur Taxi, Pune Latur Car Rental, Latur Cab from Pune, Latur Taxi from Pune, Latur to Pune Cab, Latur to Pune Taxi, Latur to Pune Cab Service, Latur to Pune Taxi Service, Latur to Pune Cab Booking, Latur to Pune Taxi Booking, Latur to Pune Outstation Cab, Latur to Pune One Way Cab, Latur to Pune Round Trip Cab, Pune Latur Travel Cab, Pune Latur Family Cab, Pune Latur Business Cab, Pune Latur Tourist Cab"
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
                            <img src='/images/keyword/57.jpg' alt='img' className='img-fluid' />
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

export default Punetolaturcab ;