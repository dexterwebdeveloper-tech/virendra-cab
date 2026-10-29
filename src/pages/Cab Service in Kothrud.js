import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Cabserviceinkothrud() {



const cardData = {
    keyword: "Cab Service in Kothrud",
    headingDescription: "Virendra Cab provides convenient cab and taxi services in Kothrud, Pune for local transportation, airport transfers, corporate travel, family journeys, and outstation trips. Customers can arrange direct cabs from Kothrud to Pune Airport as well as popular destinations including Mumbai, Shirdi, Nashik, Lonavala, Mahabaleshwar, Bhimashankar, Alibaug, Kolhapur, Goa, Jejuri, and Ashtavinayak pilgrimage locations. The service also covers nearby Karve Nagar, making it useful for one-way travel, round trips, airport transfers, religious visits, weekend holidays, and long-distance road journeys.",
    topPlaces: [
        {
            title: "Kothrud",
            description: "Kothrud is a major residential and commercial area in western Pune with regular demand for local, airport, corporate, and outstation transportation. Private cabs provide convenient travel for residents, professionals, families, and visitors."
        },
        {
            title: "Karve Nagar",
            description: "Karve Nagar is a well-established residential locality close to Kothrud and important Pune roads. Cab services provide direct connectivity for daily commuting, airport travel, business requirements, and outstation journeys."
        },
        {
            title: "Pune Airport",
            description: "Pune Airport is a frequent travel destination for Kothrud residents and business travellers. Airport cabs provide direct pickup and drop transportation that can be coordinated around flight schedules and luggage requirements."
        },
        {
            title: "Deccan Gymkhana",
            description: "Deccan Gymkhana is a prominent central Pune area with educational, commercial, recreational, and residential destinations. Private cabs provide convenient transportation between Kothrud and central Pune."
        },
        {
            title: "Shivajinagar",
            description: "Shivajinagar is an important transport and commercial hub of Pune. A cab from Kothrud provides direct travel for railway connections, bus travel, business meetings, appointments, and personal requirements."
        },
        {
            title: "Lonavala",
            description: "Lonavala is a popular weekend destination for families, couples, and groups from Pune. Travellers from Kothrud can arrange private cabs for sightseeing, resort stays, and short leisure holidays."
        },
        {
            title: "Mahabaleshwar",
            description: "Mahabaleshwar attracts visitors looking for scenic surroundings, family vacations, and weekend breaks. A private cab provides direct road transportation from Kothrud with suitable seating and luggage space."
        },
        {
            title: "Bhimashankar",
            description: "Bhimashankar is a popular pilgrimage and nature destination in Maharashtra. Private cabs from Kothrud provide convenient transportation for devotees, families, and groups planning a scheduled visit."
        },
        {
            title: "Jejuri",
            description: "Jejuri is a well-known religious destination near Pune and attracts devotees throughout the year. A private cab provides direct transportation from Kothrud for one-way or return pilgrimage trips."
        },
        {
            title: "Goa",
            description: "Goa is a popular long-distance destination for beach holidays, family vacations, group trips, and leisure travel. Travellers from Kothrud can arrange a private cab according to their passenger and luggage requirements."
        }
    ],
    services: [
        {
            name: "Cab Service in Kothrud",
            description: "Virendra Cab provides cab service in Kothrud for local transportation, airport transfers, office commuting, family trips, and outstation journeys. Customers can choose a suitable vehicle according to passenger count, luggage, destination, and travel schedule."
        },
        {
            name: "Cab Service in Kothrud Pune",
            description: "Cab service in Kothrud Pune supports convenient transportation for residents, professionals, families, and visitors. Private cabs can be arranged for local areas, airport transfers, railway station travel, business trips, and intercity journeys."
        },
        {
            name: "Taxi Service in Kothrud",
            description: "Taxi service in Kothrud provides direct transportation for daily commuting, appointments, airport travel, family requirements, and planned outstation trips. Customers can arrange rides according to their preferred pickup time and destination."
        },
        {
            name: "Taxi Service in Kothrud Pune",
            description: "Taxi service in Kothrud Pune is suitable for local and long-distance travel requirements. Virendra Cab supports transportation between Kothrud and important Pune areas as well as popular destinations outside the city."
        },
        {
            name: "Kothrud Cab Service",
            description: "Kothrud cab service offers convenient transportation for residents, professionals, visitors, and families. Private vehicles can be arranged for airport transfers, office travel, local journeys, family outings, and longer road trips."
        },
        {
            name: "Kothrud Taxi Service",
            description: "Kothrud taxi service provides private transportation for local travel, airport connections, railway station transfers, business requirements, and outstation journeys. Customers can plan trips around their preferred schedule."
        },
        {
            name: "Cab Booking in Kothrud",
            description: "Cab booking in Kothrud allows customers to arrange transportation in advance for local rides, airport transfers, office travel, family functions, and intercity journeys. Advance planning helps coordinate the pickup and required vehicle."
        },
        {
            name: "Cabs in Kothrud Pune",
            description: "Cabs in Kothrud Pune provide a practical transportation option for individuals, families, professionals, and groups. Vehicles can be arranged for daily travel, airport connections, railway station transfers, and outstation destinations."
        },
        {
            name: "Cab Near Me in Kothrud",
            description: "Cab near me in Kothrud is useful for passengers looking for convenient private transportation around their locality. Virendra Cab supports planned pickups for nearby destinations, airport trips, business travel, and longer journeys."
        },
        {
            name: "Taxi Near Me in Kothrud",
            description: "Taxi near me in Kothrud helps travellers arrange private transportation for appointments, office commuting, airport travel, family requirements, and local journeys. Pickup arrangements can be coordinated around the customer's travel plan."
        },
        {
            name: "Best Cab Service in Kothrud",
            description: "Travellers comparing the best cab service in Kothrud can consider vehicle options, route coverage, booking convenience, travel requirements, and suitability for their group. Virendra Cab supports both local and outstation transportation."
        },
        {
            name: "Affordable Cab Service in Kothrud",
            description: "An affordable cab service in Kothrud allows travellers to select transportation according to their journey requirements and budget. Private cabs can be considered for local trips, airport transfers, and planned intercity travel."
        },
        {
            name: "Reliable Taxi Service Kothrud",
            description: "Reliable taxi service in Kothrud is useful for customers who need organized transportation for important appointments, business travel, airport schedules, family functions, and outstation journeys. Advance arrangements help coordinate the trip efficiently."
        },
        {
            name: "Kothrud to Pune Airport Cab",
            description: "Kothrud to Pune Airport cab service provides direct transportation for passengers travelling for domestic or international flights. Pickup timing can be planned around the flight schedule, travel buffer, and luggage requirements."
        },
        {
            name: "Pune Airport to Kothrud Cab",
            description: "Pune Airport to Kothrud cab service provides arriving passengers with direct transportation to homes, offices, hotels, and residential areas. It is convenient for families, professionals, and visitors carrying airport luggage."
        },
        {
            name: "Kothrud to Pune Airport Taxi",
            description: "Kothrud to Pune Airport taxi service offers private transportation for passengers requiring a scheduled airport transfer. Travellers can plan their pickup according to departure timing and preferred vehicle requirements."
        },
        {
            name: "Kothrud to Pune Airport Cab Fare",
            description: "Kothrud to Pune Airport cab fare can vary according to vehicle type, travel requirements, pickup details, and other trip factors. Customers can select an appropriate cab based on their airport transfer needs."
        },
        {
            name: "Cheap Airport Cab from Kothrud",
            description: "A cheap airport cab from Kothrud can be considered by travellers looking for economical transportation to Pune Airport. Customers can compare suitable vehicle options according to their passenger count, luggage, and travel schedule."
        },
        {
            name: "Outstation Cab Service in Kothrud",
            description: "Outstation cab service in Kothrud provides private transportation for holidays, business journeys, pilgrimages, family visits, and long-distance travel. Customers can choose one-way or round-trip arrangements based on their itinerary."
        },
        {
            name: "One-Way Cab from Kothrud",
            description: "A one-way cab from Kothrud is suitable for passengers travelling to another city without requiring the same vehicle for the return journey. This option can support relocation, business visits, personal work, and planned intercity travel."
        },
        {
            name: "Round-Trip Cab from Kothrud",
            description: "A round-trip cab from Kothrud provides transportation for both onward and return journeys. It is useful for sightseeing, family functions, pilgrimage trips, weekend holidays, and business visits requiring a planned return."
        },
        {
            name: "Kothrud to Mumbai Cab",
            description: "Kothrud to Mumbai cab service provides direct road transportation for business meetings, family visits, personal work, and city travel. Customers can choose a suitable vehicle according to passenger count and luggage requirements."
        },
        {
            name: "Kothrud to Shirdi Cab",
            description: "Kothrud to Shirdi cab service offers direct transportation for devotees and families planning a pilgrimage. Customers can arrange a suitable vehicle for one-way travel or a return journey according to their schedule."
        },
        {
            name: "Kothrud to Nashik Cab",
            description: "Kothrud to Nashik cab service supports religious visits, business travel, family journeys, and leisure trips. A private cab provides direct intercity transportation with flexible departure arrangements."
        },
        {
            name: "Kothrud to Lonavala Cab",
            description: "Kothrud to Lonavala cab service is convenient for weekend getaways, family outings, sightseeing, and resort stays. Travellers can arrange private transportation according to their preferred departure time and group size."
        },
        {
            name: "Kothrud to Mahabaleshwar Cabm",
            description: "Kothrud to Mahabaleshwar cabm service provides private transportation for families, couples, and groups visiting the hill station. Vehicle selection can be planned according to passenger count, luggage, and journey requirements."
        },
        {
            name: "Kothrud to Bhimashankar Cab",
            description: "Kothrud to Bhimashankar cab service is suitable for pilgrimage trips, family outings, and nature-focused travel. Private cabs provide direct transportation for individuals and groups planning a scheduled visit."
        },
        {
            name: "Kothrud to Alibaug Cab",
            description: "Kothrud to Alibaug cab service provides convenient transportation for beach trips, resort stays, weekend holidays, and family outings. Travellers can choose a vehicle with suitable seating and luggage capacity."
        },
        {
            name: "Kothrud to Kolhapur Cab",
            description: "Kothrud to Kolhapur cab service offers direct intercity travel for religious visits, business requirements, family journeys, and personal work. Customers can arrange a suitable vehicle for individual or group travel."
        },
        {
            name: "Kothrud to Goa Cab",
            description: "Kothrud to Goa cab service provides private road transportation for beach holidays, family vacations, group trips, and leisure travel. Customers can select a vehicle according to passenger count, luggage, and journey duration."
        },
        {
            name: "Kothrud to Jejuri Cab",
            description: "Kothrud to Jejuri cab service provides convenient transportation for devotees visiting the Khandoba temple and families planning a religious outing. One-way and return travel options can be arranged."
        },
        {
            name: "Kothrud to Ashtavinayak Cab",
            description: "Kothrud to Ashtavinayak cab service supports pilgrimage travel to the famous Ashtavinayak temples of Maharashtra. Private transportation is suitable for families and groups planning a multi-stop religious itinerary."
        },
        {
            name: "Outstation Cab Service in Karve Nagar",
            description: "Outstation cab service in Karve Nagar provides private transportation to destinations outside Pune for holidays, pilgrimages, business travel, and family visits. One-way and round-trip arrangements can be selected according to the itinerary."
        },
        {
            name: "One-Way Cab from Karve Nagar",
            description: "A one-way cab from Karve Nagar is convenient for travellers who need direct transportation to another city without requiring the same vehicle for the return journey. It can support relocation, business travel, and personal trips."
        },
        {
            name: "Round-Trip Taxi from Karve Nagar",
            description: "Round-trip taxi from Karve Nagar provides transportation for both onward and return journeys. This option is useful for family holidays, religious visits, sightseeing plans, business travel, and weekend trips."
        },
        {
            name: "Karve Nagar to Mumbai Cab",
            description: "Karve Nagar to Mumbai cab service provides direct road connectivity for business meetings, family visits, personal work, and city travel. Customers can choose a suitable vehicle according to passengers and luggage."
        },
        {
            name: "Karve Nagar to Shirdi Cab",
            description: "Karve Nagar to Shirdi cab service is suitable for devotees, families, and groups planning a pilgrimage. Private transportation allows travellers to choose a convenient departure schedule and return arrangement."
        },
        {
            name: "Karve Nagar to Nashik Cab",
            description: "Karve Nagar to Nashik cab service supports religious trips, business journeys, family travel, and leisure requirements. A private vehicle provides direct intercity transportation without multiple public transport changes."
        },
        {
            name: "Karve Nagar to Lonavala Cab",
            description: "Karve Nagar to Lonavala cab service is suitable for weekend travel, resort stays, sightseeing, and family outings. Travellers can arrange private transportation according to their group size and preferred timing."
        },
        {
            name: "Karve Nagar to Mahabaleshwar Cab",
            description: "Karve Nagar to Mahabaleshwar cab service provides direct transportation for hill-station holidays, family trips, and weekend breaks. Vehicle selection can be matched with passenger and luggage requirements."
        },
        {
            name: "Karve Nagar to Bhimashankar Cab",
            description: "Karve Nagar to Bhimashankar cab service offers convenient transportation for religious visits, nature trips, and family outings. Private cabs are suitable for individuals and groups seeking direct road travel."
        },
        {
            name: "Karve Nagar to Alibaug Cab",
            description: "Karve Nagar to Alibaug cab service provides private transportation for coastal holidays, beach visits, resort stays, and family weekend trips. Customers can select a vehicle suited to their passenger and luggage requirements."
        },
        {
            name: "Karve Nagar to Kolhapur Cab",
            description: "Karve Nagar to Kolhapur cab service provides direct intercity transportation for religious visits, family journeys, business travel, and personal requirements. Suitable vehicle options can be arranged for individual or group travel."
        },
        {
            name: "Karve Nagar to Goa Cab",
            description: "Karve Nagar to Goa cab service offers private road transportation for beach holidays, family vacations, group trips, and leisure travel. Customers can select a suitable vehicle based on group size and luggage."
        },
        {
            name: "Karve Nagar to Jejuri Cab",
            description: "Karve Nagar to Jejuri cab service provides direct transportation for devotees and families visiting the Khandoba temple. One-way or return journeys can be arranged according to the planned pilgrimage schedule."
        },
        {
            name: "Karve Nagar to Ashtavinayak Cab",
            description: "Karve Nagar to Ashtavinayak cab service supports religious tours covering the Ashtavinayak temples of Maharashtra. Private cabs provide convenient transportation for families and groups planning multi-destination pilgrimage travel."
        }
    ],
    tableData: [
        ["Cab Service in Kothrud"],
        ["Cab Service in Kothrud Pune"],
        ["Taxi Service in Kothrud"],
        ["Taxi Service in Kothrud Pune"],
        ["Kothrud Cab Service"],
        ["Kothrud Taxi Service"],
        ["Cab Booking in Kothrud"],
        ["Cabs in Kothrud Pune"],
        ["Cab Near Me in Kothrud"],
        ["Taxi Near Me in Kothrud"],
        ["Best Cab Service in Kothrud"],
        ["Affordable Cab Service in Kothrud"],
        ["Reliable Taxi Service Kothrud"],
        ["Kothrud to Pune Airport Cab"],
        ["Pune Airport to Kothrud Cab"],
        ["Kothrud to Pune Airport Taxi"],
        ["Kothrud to Pune Airport Cab Fare"],
        ["Cheap Airport Cab from Kothrud"],
        ["Outstation Cab Service in Kothrud"],
        ["One-Way Cab from Kothrud"],
        ["Round-Trip Cab from Kothrud"],
        ["Kothrud to Mumbai Cab"],
        ["Kothrud to Shirdi Cab"],
        ["Kothrud to Nashik Cab"],
        ["Kothrud to Lonavala Cab"],
        ["Kothrud to Mahabaleshwar Cabm"],
        ["Kothrud to Bhimashankar Cab"],
        ["Kothrud to Alibaug Cab"],
        ["Kothrud to Kolhapur Cab"],
        ["Kothrud to Goa Cab"],
        ["Kothrud to Jejuri Cab"],
        ["Kothrud to Ashtavinayak Cab"],
        ["Outstation Cab Service in Karve Nagar"],
        ["One-Way Cab from Karve Nagar"],
        ["Round-Trip Taxi from Karve Nagar"],
        ["Karve Nagar to Mumbai Cab"],
        ["Karve Nagar to Shirdi Cab"],
        ["Karve Nagar to Nashik Cab"],
        ["Karve Nagar to Lonavala Cab"],
        ["Karve Nagar to Mahabaleshwar Cab"],
        ["Karve Nagar to Bhimashankar Cab"],
        ["Karve Nagar to Alibaug Cab"],
        ["Karve Nagar to Kolhapur Cab"],
        ["Karve Nagar to Goa Cab"],
        ["Karve Nagar to Jejuri Cab"],
        ["Karve Nagar to Ashtavinayak Cab"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Extensive Kothrud Connectivity",
            WhyChoosedescription: "Virendra Cab supports transportation across Kothrud and nearby areas including Karve Nagar, Deccan, Shivajinagar, and other important parts of western and central Pune. This makes local and intercity travel easier to arrange."
        },
        {
            WhyChooseheading: "Dedicated Airport Travel",
            WhyChoosedescription: "Passengers can arrange direct transportation between Kothrud and Pune Airport according to their flight schedule. Airport transfers are suitable for individuals, families, professionals, and travellers carrying luggage."
        },
        {
            WhyChooseheading: "Popular Outstation Routes",
            WhyChoosedescription: "Private cabs are available for popular destinations including Mumbai, Shirdi, Nashik, Lonavala, Mahabaleshwar, Bhimashankar, Alibaug, Kolhapur, Goa, and Jejuri. These routes support leisure, religious, business, and family travel."
        },
        {
            WhyChooseheading: "One-Way and Return Options",
            WhyChoosedescription: "Travellers can choose one-way or round-trip transportation based on their itinerary. These options are useful for business visits, holidays, family functions, pilgrimages, relocations, and personal journeys."
        },
        {
            WhyChooseheading: "Ashtavinayak Travel Support",
            WhyChoosedescription: "Customers planning an Ashtavinayak pilgrimage can arrange private cab transportation for multi-stop temple visits. A dedicated vehicle can make it easier for families and groups to follow their planned religious itinerary."
        },
        {
            WhyChooseheading: "Convenient Private Transportation",
            WhyChoosedescription: "Private cabs provide direct door-to-door transportation without requiring multiple public transport connections. This is especially useful for families, business travellers, groups, and passengers carrying luggage."
        },
        {
            WhyChooseheading: "Suitable for Different Travel Needs",
            WhyChoosedescription: "Vehicle selection can be planned according to passenger count, luggage, trip distance, and purpose of travel. The service is suitable for individual travellers, families, corporate passengers, and groups."
        },
        {
            WhyChooseheading: "Flexible Journey Planning",
            WhyChoosedescription: "Cab arrangements can be planned around different schedules, including early airport departures, business appointments, weekend holidays, religious visits, and long-distance journeys from Kothrud or Karve Nagar."
        }
    ]
};


const faqData = [
    {
        question: "How can I book a Cab Service in Kothrud with Virendra Cab?",
        answer: "To book a Cab Service in Kothrud, share your pickup location, destination, travel date, preferred timing, and number of passengers. Virendra Cab can arrange suitable travel for local trips, airport transfers, business requirements, family outings, and outstation journeys."
    },
    {
        question: "Can I get a cab from different parts of Kothrud?",
        answer: "Cab pickups can be arranged from residential areas, apartment societies, commercial locations, and other convenient points across Kothrud. Providing the exact pickup address while booking helps coordinate the journey according to your schedule."
    },
    {
        question: "Is cab service available from Kothrud to Pune Airport?",
        answer: "Airport transfers from Kothrud to Pune Airport can be scheduled according to your flight timing. You can share the pickup location and departure details in advance so the journey can be planned with suitable travel time and luggage space."
    },
    {
        question: "Can I book an outstation cab from Kothrud?",
        answer: "Outstation travel can be arranged from Kothrud to destinations such as Mumbai, Lonavala, Mahabaleshwar, Nashik, Shirdi, Satara, Kolhapur, and other cities. One-way and return journeys can be planned according to your requirements."
    },
    {
        question: "What type of vehicles are available through Cab Service in Kothrud?",
        answer: "The vehicle can be selected based on passenger count, luggage, and trip distance. Sedan cars can work well for smaller groups, while SUVs or Innova-type vehicles may be preferable for families and groups that need more seating or luggage capacity."
    },
    {
        question: "Can families hire a Kothrud cab for sightseeing?",
        answer: "Families can use a private cab for sightseeing around Pune and nearby destinations. Depending on the itinerary, trips can include locations such as Shaniwar Wada, Sinhagad Fort, Aga Khan Palace, Mulshi, or other places selected by the travelers."
    },
    {
        question: "Is Cab Service in Kothrud suitable for corporate travel?",
        answer: "Professionals can arrange cabs for office commuting, client meetings, business appointments, conferences, airport transfers, and intercity work travel. Pickup and drop schedules can be coordinated around the requirements of the business itinerary."
    },
    {
        question: "Can I book a one-way cab from Kothrud?",
        answer: "One-way cab service can be arranged when you only require transportation to your destination. This can be useful for relocation, airport travel, business visits, outstation journeys, or reaching another city without retaining the vehicle for the return trip."
    },
    {
        question: "Can I use Cab Service in Kothrud for railway station transfers?",
        answer: "Railway station transfers can be planned from Kothrud to Pune Railway Station or other suitable stations. Providing the train arrival or departure time and your pickup location can help organize the transfer more conveniently."
    },
    {
        question: "How early should I book a Cab Service in Kothrud?",
        answer: "Advance booking is useful for airport transfers, weekends, holidays, weddings, corporate events, and long-distance journeys. Sharing the travel date, destination, pickup time, and vehicle preference early can make the cab arrangement easier."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Manav Deshpande",
        feedback: "I needed regular transportation from Kothrud for a mix of business meetings and airport travel. The cab arrangement gave me the flexibility to plan different pickup points, and the vehicle was comfortable throughout the longer journeys.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Riya Bapat",
        feedback: "Our family booked a cab from Kothrud for a weekend outing and had several places planned along the route. Traveling in one private vehicle made the day much easier, especially since we were carrying bags and traveling with children.",
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
  "name": "Cab Service in Kothrud",
  "image": "https://www.virendracabs.com/assets/images/cab-service-in-kothrud.webp",
  "description": "Cab Service in Kothrud provides convenient local, airport, corporate and outstation transportation for residents, students, working professionals, families and visitors travelling around Kothrud and Pune. Virendra Cab supports customers searching for Cab Service in Kothrud, Cab Service in Kothrud Pune, Taxi Service in Kothrud, Taxi Service in Kothrud Pune, Kothrud Cab Service, Kothrud Taxi Service, Cab Booking in Kothrud, Cabs in Kothrud Pune, Cab Near Me in Kothrud, Taxi Near Me in Kothrud, Best Cab Service in Kothrud, Affordable Cab Service in Kothrud and Reliable Taxi Service Kothrud with suitable vehicles for different travel requirements. Local cab bookings can be arranged for daily commuting, office travel, college and educational visits, shopping, hotel transfers, medical appointments, railway station trips and point-to-point journeys across Pune. Kothrud connects conveniently with areas such as Karve Nagar, Deccan, Shivajinagar, Erandwane, Bavdhan, Warje, Baner, Aundh, Swargate and central Pune, making private cab transportation useful for both personal and professional travel. Cab Booking in Kothrud can be scheduled in advance for airport transfers, office meetings, family outings, railway station drops and planned local journeys. Customers searching for Cab Near Me in Kothrud or Taxi Near Me in Kothrud can enquire about pickup from residential societies, offices, hotels, hospitals, educational institutions and commercial areas. Airport cab services can be arranged between Kothrud and Pune Airport for arriving and departing passengers, while Pune Railway Station and other railway connections can also be covered. Outstation Cab Service from Kothrud can be planned for destinations such as Mumbai, Lonavala, Mahabaleshwar, Nashik, Shirdi, Goa, Kolhapur, Satara, Solapur, Aurangabad, Hyderabad and other cities according to the travel itinerary. One-way and round-trip cab options can be considered for intercity journeys, while hourly and full-day rental arrangements are suitable for local travel requirements. Sedan, SUV, Ertiga, Innova and Innova Crysta vehicles can be selected according to passenger count, luggage and preferred comfort level. Customers looking for Best Cab Service in Kothrud can choose a vehicle according to their journey type, while Affordable Cab Service in Kothrud customers can enquire about the current applicable fare before confirming their booking. Reliable Taxi Service Kothrud can be useful for early-morning airport transfers, late-night travel, business meetings, family transportation and scheduled outstation journeys. Corporate travellers can arrange Kothrud cab services for office transfers and business travel, while families can select spacious vehicles for sightseeing, holidays and long-distance trips. Customers searching for Kothrud Cab Fare, Kothrud Taxi Fare, Kothrud Car Rental Charges or Outstation Cab Charges can contact Virendra Cab for the latest applicable fare, as pricing depends on vehicle type, route, distance, trip duration and booking category. Advance booking allows passengers to organize transportation according to their preferred schedule and pickup location. Virendra Cab offers flexible Kothrud cab and taxi solutions for local Pune travel, airport transportation, corporate requirements and outstation journeys.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.virendracabs.com/cab-service-in-kothrud"
  }
};



    return (
        <div>

<Helmet>
  <title>
    Cab Service in Kothrud | Kothrud Taxi Service | +91 9022549022
  </title>

  <meta
    name="description"
    content="Book Cab Service in Kothrud for local, airport, corporate and outstation travel. Get reliable Kothrud taxi booking with comfortable cab options for Pune and intercity journeys."
  />

  <meta
    name="keywords"
    content="Cab service in Kothrud, Cab service in Kothrud Pune, Taxi service in Kothrud, Taxi service in Kothrud Pune, Kothrud cab service, Kothrud taxi service, Cab booking in Kothrud, Cabs in Kothrud Pune, Cab near me in Kothrud, Taxi near me in Kothrud, Best cab service in Kothrud, Affordable cab service in Kothrud, Reliable taxi service Kothrud, Kothrud Cab Booking, Kothrud Taxi Booking, Kothrud Cab Booking Online, Kothrud Taxi Booking Online, Cab in Kothrud, Taxi in Kothrud, Cabs in Kothrud, Kothrud Cabs, Kothrud Taxi, Best Taxi Service in Kothrud, Affordable Taxi Service in Kothrud, Reliable Cab Service in Kothrud, Local Cab Service Kothrud, Local Taxi Service Kothrud, Cab Service Near Me Kothrud, Taxi Service Near Me Kothrud, Kothrud Cab Near Me, Kothrud Taxi Near Me, Kothrud Car Rental, Car Rental in Kothrud, Kothrud Car Hire, Kothrud Airport Cab, Kothrud Airport Taxi, Kothrud Airport Cab Service, Kothrud Airport Taxi Service, Kothrud to Pune Airport Cab, Kothrud to Pune Airport Taxi, Pune Airport to Kothrud Cab, Pune Airport to Kothrud Taxi, Kothrud Railway Station Cab, Kothrud Railway Station Taxi, Kothrud Corporate Cab, Kothrud Corporate Taxi, Kothrud Business Cab, Kothrud Office Cab, Kothrud Daily Cab Service, Kothrud Full Day Cab, Kothrud Hourly Cab Rental, Kothrud Family Cab, Kothrud Tourist Cab, Kothrud Sightseeing Cab, Kothrud Outstation Cab, Kothrud Outstation Taxi, Outstation Cab Service Kothrud, Outstation Taxi Service Kothrud, Kothrud One Way Cab, Kothrud One Way Taxi, Kothrud Round Trip Cab, Kothrud Round Trip Taxi, Kothrud Private Cab, Kothrud Private Taxi, Kothrud to Pune Cab, Kothrud to Pune Taxi, Kothrud to Deccan Cab, Kothrud to Shivajinagar Cab, Kothrud to Karve Nagar Cab, Kothrud to Bavdhan Cab, Kothrud to Warje Cab, Kothrud to Baner Cab, Kothrud to Aundh Cab, Kothrud to Mumbai Cab, Kothrud to Mumbai Taxi, Kothrud to Lonavala Cab, Kothrud to Mahabaleshwar Cab, Kothrud to Nashik Cab, Kothrud to Shirdi Cab, Kothrud to Goa Cab, Kothrud to Kolhapur Cab, Kothrud to Satara Cab, Kothrud to Solapur Cab, Kothrud Sedan Cab, Kothrud Sedan Taxi, Kothrud SUV Cab, Kothrud SUV Taxi, Kothrud Ertiga Cab, Kothrud Ertiga Taxi, Kothrud Innova Cab, Kothrud Innova Taxi, Kothrud Innova Crysta Cab, Kothrud Innova Crysta Taxi, Kothrud Cab Fare, Kothrud Taxi Fare, Kothrud Car Rental Price, Kothrud Cab Charges, Kothrud Taxi Charges, Best Cabs in Kothrud Pune, Cheap Cab Service Kothrud, Safe Cab Service Kothrud, Premium Cab Service Kothrud"
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
                            <img src='/images/keyword/128.jpeg' alt='img' className='img-fluid' />
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

export default Cabserviceinkothrud ;