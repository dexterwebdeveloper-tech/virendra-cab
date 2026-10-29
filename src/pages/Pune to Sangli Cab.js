import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Punetosanglicab() {



const cardData = {
    keyword: "Pune to Sangli Cab",
    headingDescription: "Pune to Sangli Cab services by Virendra Cab are designed for comfortable and dependable travel between Pune, Sangli and nearby destinations such as Miraj. Whether you need a one-way transfer, return journey, airport connection, family trip, business travel or a spacious vehicle for a group, you can choose from sedan, SUV and premium cab options according to your travel requirements. With convenient booking options, experienced drivers and route-focused service, Virendra Cab makes long-distance travel from Pune to Sangli more comfortable and organized.",
    topPlaces: [
        {
            title: "Sangli Ganapati Temple",
            description: "A prominent spiritual destination in Sangli, this temple is a convenient stop for travellers planning a religious visit or city sightseeing during their Pune to Sangli journey."
        },
        {
            title: "Miraj",
            description: "Known for its cultural heritage and convenient location near Sangli, Miraj is an important destination for passengers travelling for business, family visits, medical appointments or local sightseeing."
        },
        {
            title: "Sagareshwar Wildlife Sanctuary",
            description: "A peaceful natural attraction near Sangli, Sagareshwar is suitable for travellers looking to include greenery, open landscapes and a short nature visit in their itinerary."
        },
        {
            title: "Sangli Fort",
            description: "Located within the Sangli region, this historic attraction gives visitors an opportunity to explore local heritage while travelling around the destination."
        },
        {
            title: "Audumbar",
            description: "A popular spiritual location on the Krishna River, Audumbar can be included in a religious or family-oriented itinerary when travelling around the Sangli region."
        },
        {
            title: "Krishna River",
            description: "The Krishna River adds a scenic element to the Sangli region and provides travellers with opportunities to explore riverside surroundings during a local trip."
        },
        {
            title: "Dandoba Hills",
            description: "Dandoba Hills offers a combination of natural scenery and outdoor surroundings, making it a useful destination for travellers planning a relaxed excursion around Sangli."
        },
        {
            title: "Kundal",
            description: "Kundal is a historically significant area associated with the Sangli region and can be considered for travellers interested in exploring local heritage beyond the main city."
        },
        {
            title: "Tasgaon",
            description: "Known for its regional importance and agricultural surroundings, Tasgaon is a convenient nearby destination for business, family and personal travel from Pune."
        }
    ],
    services: [
        {
            name: "Cab From Pune To Sangli",
            description: "Virendra Cab provides a convenient cab from Pune to Sangli for travellers who want a direct and comfortable journey without depending on changing public transport. The service is suitable for families, professionals, individuals and planned long-distance trips."
        },
        {
            name: "Pune To Sangli Cabs",
            description: "Pune to Sangli cabs are available for different travel requirements, including personal journeys, family visits, business trips and planned outstation travel. Passengers can select a vehicle based on group size, luggage and comfort preferences."
        },
        {
            name: "Pune To Sangli Cab Booking",
            description: "Pune to Sangli cab booking with Virendra Cab helps travellers arrange their journey in advance with a suitable vehicle and pickup plan. Advance coordination can make long-distance travel more organized and convenient."
        },
        {
            name: "Pune To Sangli Cab Service",
            description: "The Pune to Sangli cab service is planned around comfortable road travel, dependable pickup arrangements and experienced driving. It is suitable for passengers looking for a practical private cab option between the two cities."
        },
        {
            name: "Pune To Sangli Car Rental",
            description: "Pune to Sangli car rental options are useful for travellers who want a private vehicle for their intercity journey. Virendra Cab can accommodate different passenger requirements through suitable sedan, SUV and larger vehicle choices."
        },
        {
            name: "Pune To Sangli Taxi",
            description: "A Pune to Sangli taxi provides direct point-to-point transportation for passengers travelling between the cities. The service can be arranged for personal, family, professional and other outstation travel needs."
        },
        {
            name: "Sangli To Pune Cab",
            description: "Travellers returning from Sangli can arrange a Sangli to Pune cab for a direct journey to Pune. This option is convenient for return trips, business schedules, family travel and planned city transfers."
        },
        {
            name: "Pune To Miraj Cab",
            description: "Pune to Miraj cab service connects Pune with the important nearby city of Miraj through a private road journey. It is suitable for passengers travelling for work, family commitments, medical visits or personal requirements."
        },
        {
            name: "Miraj To Pune Cab",
            description: "Miraj to Pune cab service offers a convenient return travel option for passengers heading toward Pune. The journey can be arranged according to the preferred pickup point, vehicle type and travel schedule."
        },
        {
            name: "Pune To Sangli Cab",
            description: "Virendra Cab also handles Pune to Sangli cab requirements for passengers seeking a private and comfortable alternative to shared transportation. Vehicle selection can be based on the number of passengers and luggage."
        },
        {
            name: "Pune To Sangli Taxi",
            description: "Pune to Sangli taxi service is suitable for direct intercity travel where passengers prefer a dedicated vehicle. It can be arranged for one-way journeys, return travel and scheduled personal or professional trips."
        },
        {
            name: "Pune To Sangli Cab Service",
            description: "With Pune to Sangli cab service, travellers can plan their route around convenient pickup and drop locations. Virendra Cab focuses on providing a comfortable travel experience for both individual and group passengers."
        },
        {
            name: "Pune To Sangli Taxi Service",
            description: "Pune to Sangli taxi service provides a practical solution for passengers travelling by road between the two cities. The service can support different trip purposes while allowing passengers to select a suitable cab category."
        },
        {
            name: "Cab From Pune To Sangli",
            description: "A private cab from Pune to Sangli allows travellers to begin their journey from a convenient Pune pickup point and travel directly toward their Sangli destination. It is useful for family, business and personal travel."
        },
        {
            name: "Taxi From Pune To Sangli",
            description: "Taxi from Pune to Sangli service is arranged for passengers who prefer direct transportation with a dedicated vehicle. It can be suitable for individuals, couples, families and small groups travelling on a planned schedule."
        },
        {
            name: "Pune To Sangli Outstation Cab",
            description: "Pune to Sangli outstation cab service is designed for long-distance road travel with comfortable vehicles and planned pickup arrangements. Travellers can choose a suitable cab according to their group size and journey requirements."
        },
        {
            name: "Pune To Sangli Car Rentals",
            description: "Pune to Sangli car rentals provide travellers with private vehicle options for planned intercity travel. Depending on the requirement, passengers can consider sedan, SUV or larger vehicles for better comfort and luggage capacity."
        },
        {
            name: "Pune To Sangli Cab Booking",
            description: "Advance Pune to Sangli cab booking helps passengers organize their pickup, destination and preferred vehicle before travelling. Virendra Cab supports planned journeys for families, professionals and individual travellers."
        },
        {
            name: "Pune To Sangli Taxi Booking Online",
            description: "Pune to Sangli taxi booking online offers a convenient way to arrange an intercity cab without visiting a booking office. Travellers can communicate their journey requirements and select an appropriate vehicle for the trip."
        },
        {
            name: "Pune To Sangli Cab Fare",
            description: "Pune to Sangli cab fare can vary according to vehicle category, trip type, pickup location and travel requirements. Travellers can discuss their exact itinerary with Virendra Cab to select an option suited to their budget and comfort."
        },
        {
            name: "Pune To Sangli Taxi Fare",
            description: "The Pune to Sangli taxi fare depends on factors such as the selected vehicle, journey arrangement and pickup or drop requirements. Getting the trip details confirmed in advance helps passengers plan their transportation expenses."
        },
        {
            name: "Pune To Sangli Cab Price",
            description: "Pune to Sangli cab price is influenced by the vehicle type and journey plan selected by the traveller. Virendra Cab provides different vehicle categories so passengers can choose according to their comfort, capacity and travel needs."
        },
        {
            name: "Pune To Sangli Taxi Charges",
            description: "Pune to Sangli taxi charges can differ based on the selected cab, trip arrangement and applicable travel requirements. Passengers can confirm the complete journey details before finalizing their preferred taxi."
        },
        {
            name: "Best Pune To Sangli Cab Service",
            description: "Travellers comparing the best Pune to Sangli cab service can consider factors such as vehicle condition, driver experience, booking convenience, passenger comfort and suitability for the planned route."
        },
        {
            name: "Cheap Pune To Sangli Cab",
            description: "A cheap Pune to Sangli cab can be a practical choice for travellers looking to manage their transportation budget while still having a private vehicle. Different vehicle options allow passengers to compare comfort and overall trip requirements."
        },
        {
            name: "Pune To Sangli One Way Cab",
            description: "Pune to Sangli one way cab service is convenient for passengers who need transportation to Sangli without immediately requiring a return vehicle. It is suitable for relocation, work visits, family travel and personal journeys."
        },
        {
            name: "Pune To Sangli Round Trip Taxi",
            description: "Pune to Sangli round trip taxi service works well for travellers planning to return to Pune after completing their visit. It can be useful for business meetings, family functions, sightseeing and scheduled personal trips."
        },
        {
            name: "Pune To Sangli Innova Cab",
            description: "Pune to Sangli Innova cab is suitable for families and groups seeking additional seating and luggage space for a longer road journey. The vehicle can provide a comfortable option for passengers travelling together."
        },
        {
            name: "Pune To Sangli Innova Crysta Cab",
            description: "Pune to Sangli Innova Crysta cab offers a spacious and premium-oriented travel option for families, corporate passengers and groups. Its larger cabin makes it suitable for longer journeys with passengers and luggage."
        },
        {
            name: "Pune To Sangli Ertiga Cab",
            description: "Pune to Sangli Ertiga cab is a practical choice for passengers looking for a comfortable multi-seater vehicle for intercity travel. It can accommodate families and small groups while providing useful luggage space."
        },
        {
            name: "Pune To Sangli Sedan Cab",
            description: "Pune to Sangli sedan cab is well suited to couples, individuals and small families who prefer a comfortable private vehicle for long-distance travel. Sedan options can be selected according to passenger and luggage requirements."
        },
        {
            name: "Pune To Sangli SUV Taxi",
            description: "Pune to Sangli SUV taxi provides additional cabin space and is useful for families or groups carrying more luggage. It offers a suitable balance of passenger capacity and comfort for an extended road journey."
        },
        {
            name: "Pune To Sangli AC Cab",
            description: "Pune to Sangli AC cab is a comfortable choice for passengers travelling long distances, particularly when maintaining a pleasant cabin environment is important. It can be arranged for personal, family and business travel."
        },
        {
            name: "Pune To Sangli Sedan Cab",
            description: "A Pune to Sangli sedan cab offers a dedicated and comfortable travel solution for smaller groups. The vehicle category is suitable for passengers who want a practical combination of seating comfort, luggage capacity and easy city-to-city travel."
        },
        {
            name: "Pune To Sangli Dzire Cab",
            description: "Pune to Sangli Dzire cab is a suitable option for individuals, couples and small families seeking a compact sedan for their outstation journey. It provides a practical private travel arrangement for the route."
        },
        {
            name: "Pune To Sangli Etios Cab",
            description: "Pune to Sangli Etios cab can be considered by travellers looking for a comfortable sedan category for intercity travel. It is useful for smaller groups travelling with normal luggage requirements."
        },
        {
            name: "Pune To Sangli Ertiga Cab",
            description: "Pune to Sangli Ertiga cab offers a spacious option for families and small groups who want to travel together in one vehicle. The seating arrangement and luggage capacity make it suitable for longer journeys."
        },
        {
            name: "Pune To Sangli Innova Cab",
            description: "Pune to Sangli Innova cab is designed for passengers who prefer a larger vehicle for family travel or group journeys. Its additional cabin space makes it useful when passenger comfort and luggage room are important."
        },
        {
            name: "Pune To Sangli Innova Crysta",
            description: "Pune to Sangli Innova Crysta provides a premium and spacious travel option for passengers planning a longer road journey. It can suit families, corporate travellers and groups looking for enhanced cabin comfort."
        },
        {
            name: "Pune To Sangli SUV Cab",
            description: "Pune to Sangli SUV cab is suitable for travellers who need more passenger and luggage space than a standard sedan. It works well for family journeys, group travel and extended outstation trips."
        },
        {
            name: "Pune To Sangli 7-Seater Cab",
            description: "Pune to Sangli 7-seater cab is a convenient choice for families and groups who want to travel together without splitting passengers across multiple cars. The larger seating capacity also helps accommodate travel luggage."
        },
        {
            name: "Pune To Sangli Tempo Traveller",
            description: "Pune to Sangli tempo traveller is useful for larger groups planning a common road journey. It provides additional seating and shared travel convenience for family functions, group tours, corporate trips and social events."
        },
        {
            name: "Pune To Sangli 12-Seater Traveller",
            description: "Pune to Sangli 12-seater traveller provides a practical group transportation option when more passengers need to travel together. It can be arranged for organized tours, family occasions and group travel requirements."
        },
        {
            name: "Pune To Sangli Minibus",
            description: "Pune to Sangli minibus is suitable for larger groups requiring shared transportation for an intercity journey. It can support group tours, events, corporate movement and family travel with increased seating capacity."
        },
        {
            name: "Pune To Sangli Luxury Cab",
            description: "Pune to Sangli luxury cab is suitable for travellers who prefer an elevated private travel experience for business journeys, special occasions, family travel or premium intercity transportation."
        },
        {
            name: "Hinjewadi To Sangli Cab",
            description: "Hinjewadi to Sangli cab service offers direct transportation from Pune's major technology and business hub toward Sangli. It is useful for professionals, families and passengers who want a convenient pickup without travelling to another Pune location."
        },
        {
            name: "Wakad To Sangli Cab",
            description: "Wakad to Sangli cab provides a direct outstation travel option for passengers starting their journey from Wakad. The service is suitable for business trips, family travel and planned journeys toward Sangli."
        },
        {
            name: "Baner To Sangli Cab",
            description: "Baner to Sangli cab service allows travellers from Baner to arrange a private vehicle directly for their Sangli journey. It is suitable for individuals, families and professionals seeking convenient pickup arrangements."
        },
        {
            name: "Aundh To Sangli Cab",
            description: "Aundh to Sangli cab offers a convenient intercity transportation option for passengers starting from Aundh. The service can be arranged for one-way, return and other planned outstation travel requirements."
        },
        {
            name: "Kothrud To Sangli Cab",
            description: "Kothrud to Sangli cab service provides direct road transportation for passengers travelling from western Pune toward Sangli. It can accommodate different passenger groups through suitable vehicle categories."
        },
        {
            name: "Hadapsar To Sangli Cab",
            description: "Hadapsar to Sangli cab is useful for passengers starting their journey from eastern Pune and travelling toward Sangli. Private pickup arrangements can make the long-distance journey more convenient and organized."
        },
        {
            name: "Kharadi To Sangli Cab",
            description: "Kharadi to Sangli cab service connects passengers from Pune's eastern business corridor with Sangli through a direct private journey. It is suitable for professionals, families and individual travellers."
        },
        {
            name: "Viman Nagar To Sangli Cab",
            description: "Viman Nagar to Sangli cab offers direct outstation transportation from the airport-side area of Pune. It can be useful for passengers combining city pickup, airport travel requirements or scheduled Sangli journeys."
        },
        {
            name: "Swargate To Sangli Cab",
            description: "Swargate to Sangli cab provides a convenient option for passengers starting from central Pune. The service can be arranged for direct one-way or planned return journeys according to the travel schedule."
        },
        {
            name: "Shivajinagar To Sangli Cab",
            description: "Shivajinagar to Sangli cab service helps passengers arrange direct intercity transportation from a central Pune pickup point. It is suitable for personal, business and family travel requirements."
        },
        {
            name: "PCMC To Sangli Cab",
            description: "PCMC to Sangli cab provides private outstation transportation for passengers travelling from the Pimpri-Chinchwad region. Vehicle selection can be based on the number of travellers, luggage and desired comfort."
        },
        {
            name: "Pimpri-Chinchwad To Sangli Cab",
            description: "Pimpri-Chinchwad to Sangli cab service allows passengers from the industrial and residential areas of PCMC to travel directly toward Sangli. It is suitable for work trips, family visits and long-distance personal travel."
        },
        {
            name: "Pune Railway Station To Sangli Cab",
            description: "Pune Railway Station to Sangli cab offers direct pickup for passengers arriving at or starting from Pune Railway Station. It is especially useful when travellers need a private onward journey to Sangli without changing transportation."
        }
    ],
    tableData: [
        ["Cab From Pune To Sangli"],
        ["Pune To Sangli Cabs"],
        ["Pune To Sangli Cab Booking"],
        ["Pune To Sangli Cab Service"],
        ["Pune To Sangli Car Rental"],
        ["Pune To Sangli Taxi"],
        ["Sangli To Pune Cab"],
        ["Pune To Miraj Cab"],
        ["Miraj To Pune Cab"],
        ["Pune To Sangli Cab"],
        ["Pune To Sangli Taxi"],
        ["Pune To Sangli Cab Service"],
        ["Pune To Sangli Taxi Service"],
        ["Cab From Pune To Sangli"],
        ["Taxi From Pune To Sangli"],
        ["Pune To Sangli Outstation Cab"],
        ["Pune To Sangli Car Rentals"],
        ["Pune To Sangli Cab Booking"],
        ["Pune To Sangli Taxi Booking Online"],
        ["Pune To Sangli Cab Fare"],
        ["Pune To Sangli Taxi Fare"],
        ["Pune To Sangli Cab Price"],
        ["Pune To Sangli Taxi Charges"],
        ["Best Pune To Sangli Cab Service"],
        ["Cheap Pune To Sangli Cab"],
        ["Pune To Sangli One Way Cab"],
        ["Pune To Sangli Round Trip Taxi"],
        ["Pune To Sangli Innova Cab"],
        ["Pune To Sangli Innova Crysta Cab"],
        ["Pune To Sangli Ertiga Cab"],
        ["Pune To Sangli Sedan Cab"],
        ["Pune To Sangli SUV Taxi"],
        ["Pune To Sangli AC Cab"],
        ["Pune To Sangli Sedan Cab"],
        ["Pune To Sangli Dzire Cab"],
        ["Pune To Sangli Etios Cab"],
        ["Pune To Sangli Ertiga Cab"],
        ["Pune To Sangli Innova Cab"],
        ["Pune To Sangli Innova Crysta"],
        ["Pune To Sangli SUV Cab"],
        ["Pune To Sangli 7-Seater Cab"],
        ["Pune To Sangli Tempo Traveller"],
        ["Pune To Sangli 12-Seater Traveller"],
        ["Pune To Sangli Minibus"],
        ["Pune To Sangli Luxury Cab"],
        ["Hinjewadi To Sangli Cab"],
        ["Wakad To Sangli Cab"],
        ["Baner To Sangli Cab"],
        ["Aundh To Sangli Cab"],
        ["Kothrud To Sangli Cab"],
        ["Hadapsar To Sangli Cab"],
        ["Kharadi To Sangli Cab"],
        ["Viman Nagar To Sangli Cab"],
        ["Swargate To Sangli Cab"],
        ["Shivajinagar To Sangli Cab"],
        ["PCMC To Sangli Cab"],
        ["Pimpri-Chinchwad To Sangli Cab"],
        ["Pune Railway Station To Sangli Cab"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Comfortable Long-Distance Travel",
            WhyChoosedescription: "Long-distance travel between Pune and Sangli can be more comfortable with a dedicated private cab. Virendra Cab provides vehicle choices suited to different passenger groups, helping travellers enjoy a more relaxed journey."
        },
        {
            WhyChooseheading: "Multiple Vehicle Categories",
            WhyChoosedescription: "From compact sedans to spacious SUVs, Innova models and larger group vehicles, travellers can select a category based on passenger count, luggage requirements and preferred level of comfort."
        },
        {
            WhyChooseheading: "Flexible One-Way Trips",
            WhyChoosedescription: "Passengers who do not need a return vehicle can choose a one-way travel arrangement. This makes the service practical for relocations, work assignments, family visits and other destination-specific journeys."
        },
        {
            WhyChooseheading: "Convenient Pickup Options",
            WhyChoosedescription: "Pickup can be planned from several parts of Pune, including Hinjewadi, Wakad, Baner, Aundh, Kothrud, Hadapsar, Kharadi, Viman Nagar and other convenient locations."
        },
        {
            WhyChooseheading: "Suitable for Families and Groups",
            WhyChoosedescription: "Family trips and group journeys can be arranged with vehicles offering additional seating and luggage space. Larger options such as 7-seater cabs, tempo travellers and minibuses help keep groups together."
        },
        {
            WhyChooseheading: "Useful for Business Travel",
            WhyChoosedescription: "Professionals travelling between Pune, Sangli and Miraj can choose a private cab for scheduled meetings, site visits, corporate travel and other work-related requirements without depending on shared transportation."
        },
        {
            WhyChooseheading: "Planned Booking Support",
            WhyChoosedescription: "Advance booking helps travellers coordinate their preferred pickup point, destination, vehicle category and travel schedule before starting the journey, making the overall trip more organized."
        },
        {
            WhyChooseheading: "Comfort-Focused Outstation Service",
            WhyChoosedescription: "Virendra Cab focuses on providing a practical and comfortable outstation experience with suitable vehicles, planned routes and driver-supported travel for passengers travelling from Pune toward Sangli and nearby destinations."
        }
    ]
};



const faqData = [
    {
        question: "Can I book a Pune to Sangli Cab with Virendra Cab?",
        answer: "Virendra Cab can arrange private cab transportation from Pune to Sangli according to your travel date, pickup location, passenger count, luggage, and preferred vehicle category. The service can be planned for family visits, personal travel, business trips, or other intercity requirements."
    },
    {
        question: "Is one-way cab service available from Pune to Sangli?",
        answer: "Travellers who only need transportation from Pune to Sangli can enquire about a one-way cab. The pickup address, destination, travel date, preferred departure time, and passenger details can be discussed while planning the journey."
    },
    {
        question: "Can I book a round-trip cab from Pune to Sangli?",
        answer: "Passengers who intend to return to Pune after their Sangli visit can discuss a round-trip cab arrangement. The return date, duration of stay, preferred timings, and vehicle requirements can be considered while planning the complete trip."
    },
    {
        question: "Which cab is suitable for a Pune to Sangli journey?",
        answer: "The vehicle category can be selected according to the number of passengers, luggage, journey duration, and comfort preferences. Virendra Cab can discuss a suitable option after understanding the specific requirements of your Pune to Sangli travel."
    },
    {
        question: "Can families travel from Pune to Sangli by private cab?",
        answer: "Families can enquire about private cab travel by sharing their group size, luggage details, Pune pickup point, travel date, and preferred departure time. A vehicle can then be considered according to the group's space and comfort requirements."
    },
    {
        question: "Can I book a Pune to Sangli Cab for a business trip?",
        answer: "Private cab transportation can be considered for business meetings, office visits, client appointments, industrial travel, and other professional requirements in Sangli. The journey can be planned around the traveller's work schedule."
    },
    {
        question: "Can I get pickup from different areas of Pune for Sangli travel?",
        answer: "Pickup arrangements can be discussed from Pune locations such as Kothrud, Baner, Wakad, Hinjewadi, Hadapsar, Kharadi, Viman Nagar, Pimpri-Chinchwad, and other suitable residential or commercial areas."
    },
    {
        question: "Can I travel with luggage in a Pune to Sangli private cab?",
        answer: "Passengers can carry personal, family, or business luggage during the journey. The amount of baggage and number of travellers can be considered when discussing the appropriate vehicle for the Pune to Sangli trip."
    },
    {
        question: "Can I include sightseeing around Sangli during the cab trip?",
        answer: "Travellers can discuss adding local sightseeing to their Sangli itinerary. Depending on the planned schedule, places such as Ganapati Temple in Sangli, Sagareshwar Wildlife Sanctuary, Dandoba Hills, and nearby attractions can be considered."
    },
    {
        question: "What details are required to book a Pune to Sangli Cab?",
        answer: "Passengers can provide their Pune pickup address, Sangli destination, travel date, preferred departure time, number of travellers, luggage details, one-way or round-trip requirement, sightseeing plans, and preferred vehicle type when making the booking enquiry."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Amey Patil",
        feedback: "My Pune to Sangli journey was arranged for an important family visit, and travelling together in a private cab was more convenient for us. Virendra Cab discussed our pickup location, group size, luggage, and travel schedule before arranging the vehicle.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Gauri Deshpande",
        feedback: "I had a professional visit planned in Sangli and wanted a direct cab from Pune. The booking discussion covered my departure time, pickup point, luggage, and vehicle preference, which helped me organize the trip around my work schedule.",
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
  "name": "Pune to Sangli Cab",
  "image": "https://www.virendracabs.com/assets/images/pune-to-sangli-cab.webp",
  "description": "Pune to Sangli Cab provides a convenient private transportation option for passengers traveling between Pune and Sangli, with additional cab services for the Miraj route. Virendra Cab offers booking support for customers searching for Cab from Pune to Sangli, Pune to Sangli Cabs, Pune to Sangli Cab Booking and Pune to Sangli Cab Service. A private cab can be arranged for business travel, family visits, personal journeys, medical trips, educational travel, sightseeing and other intercity transportation requirements. Pune to Sangli Car Rental is suitable for passengers who prefer a dedicated vehicle with flexible travel arrangements, while Pune to Sangli Taxi can be booked for comfortable point-to-point transportation. Sangli to Pune Cab provides a convenient option for passengers traveling in the opposite direction, and Pune to Miraj Cab and Miraj to Pune Cab can be arranged for travelers requiring transportation between these cities. Customers can choose from available sedan, SUV and other suitable vehicle categories according to passenger count, luggage requirements and comfort preferences. Pune to Sangli Cab Booking allows passengers to coordinate pickup timing, travel date, destination and vehicle requirements in advance. One-way travel can be arranged when transportation is required only toward Sangli or Miraj, while round-trip bookings can be considered when the same vehicle is required for the return journey. Current Pune to Sangli cab fare depends on the selected vehicle, distance, route, travel date and journey type, so passengers can contact Virendra Cab for the latest fare details. Advance booking helps confirm vehicle availability and organize pickup and drop information for a smoother long-distance journey between Pune, Sangli and Miraj.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.virendracabs.com/pune-to-sangli-cab"
  }
};




    return (
        <div>

<Helmet>
  <title>
    Pune to Sangli Cab | Pune to Sangli Cab Booking | +91 9022549022
  </title>

  <meta
    name="description"
    content="Book Pune to Sangli Cab for private intercity travel, car rental and taxi service. Get Sangli and Miraj cab booking options from Pune with Virendra Cab."
  />

  <meta
    name="keywords"
    content="Pune to Sangli Cab, Cab from Pune to Sangli, Pune to Sangli Cabs, Pune to Sangli Cab Booking, Pune to Sangli Cab Service, Pune to Sangli Car Rental, Pune to Sangli Taxi, Sangli to Pune Cab, Pune to Miraj Cab, Miraj to Pune Cab, Pune to Sangli Taxi, Pune to Sangli Taxi Service, Pune to Sangli Taxi Booking, Pune to Sangli Outstation Cab, Pune to Sangli Outstation Taxi, Pune to Sangli One Way Cab, Pune to Sangli Round Trip Cab, Pune to Sangli Private Cab, Pune to Sangli Cab Fare, Pune to Sangli Taxi Fare, Pune Sangli Car Rental, Pune Sangli Taxi Booking, Sangli Cab from Pune, Sangli Taxi from Pune, Sangli to Pune Taxi, Sangli to Pune Cab Service, Sangli to Pune Taxi Service, Sangli to Pune Cab Booking, Pune Miraj Cab Service, Pune Miraj Taxi Service, Pune to Miraj Cab Booking, Miraj to Pune Taxi, Miraj to Pune Cab Booking, Pune Sangli Travel Cab, Pune Sangli Family Cab, Pune Sangli Business Cab, Pune Sangli Tourist Cab"
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
                            <img src='/images/keyword/60.jpg' alt='img' className='img-fluid' />
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

export default Punetosanglicab ;