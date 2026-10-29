import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Punetoashtavinayakdarshan() {



const cardData = {
    keyword: "Pune to Ashtavinayak Darshan Cab",
    headingDescription: "Pune to Ashtavinayak Darshan Cab by Virendra Cab provides convenient private transportation for devotees planning the traditional Ashtavinayak pilgrimage across Maharashtra. Whether you prefer a one-day darshan, an express temple tour, a relaxed three-day journey, a customized itinerary or a group pilgrimage, suitable sedan, SUV, Innova, Innova Crysta, 6-seater, 7-seater, Tempo Traveller, 12-seater and 17-seater options can be selected according to group size and comfort requirements. The service is suitable for families, senior citizens, religious groups and travellers planning special Ganesh festival, Sankashti Chaturthi, Angarki Chaturthi, weekend, Diwali, New Year and monsoon pilgrimage trips.",
    topPlaces: [
        {
            title: "Morgaon",
            description: "Visit Mayureshwar at Morgaon as an important starting point for an Ashtavinayak pilgrimage, with private cab arrangements for devotees travelling from Pune."
        },
        {
            title: "Siddhatek",
            description: "Include Siddhivinayak at Siddhatek in your religious itinerary with comfortable road transportation suitable for families and pilgrimage groups."
        },
        {
            title: "Pali",
            description: "Reach Ballaleshwar Temple at Pali conveniently as part of a planned Ashtavinayak darshan route from Pune."
        },
        {
            title: "Mahad",
            description: "Visit Varadvinayak at Mahad with a private cab itinerary designed for convenient temple travel and flexible pilgrimage scheduling."
        },
        {
            title: "Theur",
            description: "Theur's Chintamani Temple can be included in an Ashtavinayak route with suitable transportation for one-day or multi-day pilgrimage plans."
        },
        {
            title: "Lenyadri",
            description: "Travel to Lenyadri for Girijatmaj Darshan while enjoying the flexibility of a private vehicle throughout the Ashtavinayak journey."
        },
        {
            title: "Ozar",
            description: "Include Vighneshwar Temple at Ozar in your pilgrimage itinerary with a comfortable cab suitable for family and group travel."
        },
        {
            title: "Ranjangaon",
            description: "Visit Mahaganapati at Ranjangaon as part of a complete Ashtavinayak circuit planned around your preferred travel schedule."
        },
        {
            title: "Jejuri",
            description: "Jejuri can be added as an additional religious stop to a customized Maharashtra temple itinerary when planning a broader pilgrimage from Pune."
        },
        {
            title: "Alandi",
            description: "Alandi offers another important spiritual destination that can be combined with an Ashtavinayak journey through a customized private cab itinerary."
        }
    ],
    services: [
        {
            name: "Pune To Ashtavinayak Cab",
            description: "Virendra Cab provides private transportation from Pune for devotees planning an Ashtavinayak pilgrimage. The journey can be organized as a one-day visit, multi-day tour or customized temple itinerary according to the group's preferred schedule."
        },
        {
            name: "Ashtavinayak Darshan Cab Pune",
            description: "Ashtavinayak Darshan cab service in Pune is suitable for devotees who want convenient private transportation across the traditional eight-temple circuit. Vehicle options can be selected according to family size, group requirements and luggage."
        },
        {
            name: "Pune Ashtavinayak Taxi Service",
            description: "Pune Ashtavinayak Taxi Service provides a practical travel solution for pilgrims visiting multiple Ganesh temples across Maharashtra. Virendra Cab can arrange suitable vehicles for individuals, families, senior citizens and larger pilgrimage groups."
        },
        {
            name: "Cab For Ashtavinayak Yatra Pune",
            description: "A cab for Ashtavinayak Yatra from Pune allows devotees to travel together through the pilgrimage circuit in a private vehicle. The itinerary can be planned according to the number of temples, available days and preferred travel pace."
        },
        {
            name: "Pune To Ashtavinayak Tour Cab",
            description: "Pune to Ashtavinayak tour cab service is designed for travellers planning a complete religious road trip covering the eight sacred Ganesh temples. Vehicle selection can be matched with the size and comfort requirements of the group."
        },
        {
            name: "Ashtavinayak Darshan Taxi Pune",
            description: "Ashtavinayak Darshan taxi service from Pune provides direct private transportation for devotees visiting the complete temple circuit. It is suitable for families and groups seeking flexible travel between the different pilgrimage locations."
        },
        {
            name: "Pune Religious Cab Ashtavinayak",
            description: "Pune religious cab service for Ashtavinayak Darshan supports devotees planning a dedicated Ganesh pilgrimage. The cab can be arranged around temple visits, rest stops and the preferred duration of the religious journey."
        },
        {
            name: "Pune Temple Darshan Cab",
            description: "Pune temple darshan cab service provides convenient private travel for devotees visiting Ashtavinayak and other religious destinations. The itinerary can be customized for single-day trips or extended temple tours."
        },
        {
            name: "One Day Ashtavinayak Cab Pune",
            description: "A one day Ashtavinayak cab from Pune is designed for travellers looking to complete an intensive pilgrimage itinerary within a single day. A suitable vehicle can be selected based on the number of passengers and travel requirements."
        },
        {
            name: "Pune Pilgrimage Cab Ashtavinayak",
            description: "Pune pilgrimage cab service for Ashtavinayak provides private transportation for devotees travelling across the eight temple destinations. It is suitable for family groups, friends and organized religious journeys."
        },
        {
            name: "Best Ashtavinayak Cab Pune",
            description: "Travellers comparing the best Ashtavinayak cab in Pune can consider vehicle comfort, seating capacity, itinerary flexibility and suitability for long temple journeys. Virendra Cab offers multiple categories for different pilgrimage requirements."
        },
        {
            name: "SUV Ashtavinayak Cab Pune",
            description: "An SUV Ashtavinayak cab from Pune provides additional space for passengers and luggage during the temple circuit. It is a practical option for families and small groups seeking comfortable private transportation."
        },
        {
            name: "Innova Ashtavinayak Cab Pune",
            description: "An Innova Ashtavinayak cab from Pune offers spacious seating for families and groups travelling across multiple temple destinations. It is suitable for longer pilgrimage routes where passengers need additional cabin and luggage space."
        },
        {
            name: "Sedan Ashtavinayak Cab Pune",
            description: "A sedan Ashtavinayak cab from Pune is suitable for couples, small families and smaller pilgrimage groups. It provides a practical private travel option for devotees planning a compact temple itinerary."
        },
        {
            name: "Ashtavinayak Yatra Booking Pune",
            description: "Ashtavinayak Yatra booking in Pune allows devotees to organize their vehicle and pilgrimage itinerary in advance. Travel dates, passenger count, vehicle type and preferred journey duration can be considered while planning the trip."
        },
        {
            name: "Pune To Ashtavinayak One-Day Trip",
            description: "A Pune to Ashtavinayak one-day trip provides a compact pilgrimage option for devotees with limited travel time. The itinerary can be planned around the selected vehicle, temple sequence and available sightseeing schedule."
        },
        {
            name: "One-Day Ashtavinayak Cab Package",
            description: "The one-day Ashtavinayak cab package is suitable for devotees who want private transportation for an intensive temple circuit. It provides a convenient travel arrangement for families and groups working with a limited schedule."
        },
        {
            name: "Ashtavinayak Darshan In One Day From Pune",
            description: "Ashtavinayak Darshan in one day from Pune requires careful route planning and suitable road transportation. Virendra Cab can provide a private vehicle based on group size and help travellers organize their temple journey around their available time."
        },
        {
            name: "Pune Ashtavinayak Express Tour",
            description: "The Pune Ashtavinayak express tour is designed for travellers seeking a fast-paced pilgrimage itinerary covering the temple circuit within a short period. Vehicle selection can be based on passenger count and required travel comfort."
        },
        {
            name: "Pune Ashtavinayak 3-Day Package",
            description: "A Pune Ashtavinayak 3-day package offers devotees a more manageable schedule for completing the temple circuit. The extended duration allows families and groups to plan travel with a more relaxed pace and convenient overnight arrangements."
        },
        {
            name: "Ashtavinayak Three-Day Relaxed Tour",
            description: "The Ashtavinayak three-day relaxed tour provides additional time for devotees who prefer not to rush between temples. A private cab can remain with the group throughout the itinerary for convenient inter-destination travel."
        },
        {
            name: "Pune Ashtavinayak 3 Days 2 Nights",
            description: "Pune Ashtavinayak 3 days 2 nights travel is suitable for families and groups wanting a balanced pilgrimage schedule with overnight stays. The itinerary can be customized according to temple visits and preferred travel timing."
        },
        {
            name: "Ashtavinayak Package For Senior Citizens",
            description: "An Ashtavinayak package for senior citizens can be planned with a comfortable vehicle and a less rushed itinerary. Private transportation makes it easier for families to organize travel around rest breaks and individual mobility requirements."
        },
        {
            name: "Customized Ashtavinayak Itinerary From Pune",
            description: "A customized Ashtavinayak itinerary from Pune allows travellers to plan the pilgrimage according to their preferred duration, temple sequence, overnight stops and group requirements. Virendra Cab supports flexible vehicle selection for personalized journeys."
        },
        {
            name: "Pune Ashtavinayak Sedan Cab",
            description: "Pune Ashtavinayak sedan cab service is suitable for couples and small families seeking a private vehicle for the temple circuit. The sedan provides a practical choice for groups with moderate luggage and compact travel requirements."
        },
        {
            name: "Pune Ashtavinayak Dzire Cab",
            description: "A Pune Ashtavinayak Dzire cab is a practical option for smaller pilgrimage groups looking for private transportation. It can be suitable for couples and small families planning a focused temple journey."
        },
        {
            name: "Pune Ashtavinayak Ertiga Cab",
            description: "Pune Ashtavinayak Ertiga cab provides additional seating and luggage capacity for families and small groups. It offers a practical vehicle option for devotees planning a multi-temple pilgrimage."
        },
        {
            name: "Pune Ashtavinayak Innova Cab",
            description: "An Innova cab from Pune for Ashtavinayak Darshan provides spacious transportation for families and groups. The larger cabin is useful for longer journeys where passengers carry luggage and travel together between several temples."
        },
        {
            name: "Pune Ashtavinayak Innova Crysta",
            description: "Pune Ashtavinayak Innova Crysta service is suitable for travellers who prefer additional space and a premium road-trip experience during the temple circuit. It can accommodate families, corporate groups and special pilgrimage journeys."
        },
        {
            name: "Pune Ashtavinayak SUV Cab",
            description: "A Pune Ashtavinayak SUV cab provides additional passenger and luggage space for devotees travelling as a family or small group. It is suitable for extended road travel across the complete pilgrimage route."
        },
        {
            name: "Pune Ashtavinayak 6-Seater Cab",
            description: "Pune Ashtavinayak 6-seater cab service is convenient for medium-sized families and groups who want to travel together during the pilgrimage. The additional seating helps accommodate passengers and their travel belongings."
        },
        {
            name: "Pune Ashtavinayak 7-Seater Cab",
            description: "A Pune Ashtavinayak 7-seater cab is suitable for families and groups requiring more seating capacity for a multi-temple journey. It provides a convenient private alternative for travelling together."
        },
        {
            name: "Pune Ashtavinayak Tempo Traveller",
            description: "Pune Ashtavinayak Tempo Traveller service is suitable for larger families, friends, religious groups and organized pilgrimages. The higher seating capacity makes it practical for group travel across the temple circuit."
        },
        {
            name: "Ashtavinayak Darshan 12-Seater Traveller",
            description: "An Ashtavinayak Darshan 12-seater traveller provides group transportation for larger pilgrimage parties. It is useful for families, religious organizations and groups planning to complete the temple circuit together."
        },
        {
            name: "Pune Ashtavinayak 17-Seater Traveller",
            description: "Pune Ashtavinayak 17-seater traveller service is designed for larger groups travelling together on an organized pilgrimage. The higher seating capacity makes it suitable for extended temple tours and group religious outings."
        },
        {
            name: "Pune Ashtavinayak Minibus",
            description: "A Pune Ashtavinayak minibus provides transportation for larger groups requiring more seating than standard cab categories. It can support organized religious tours, family gatherings and group pilgrimage programs."
        },
        {
            name: "Group Ashtavinayak Tour From Pune",
            description: "A group Ashtavinayak tour from Pune allows friends, families and religious groups to travel together throughout the temple circuit. Vehicle selection can be matched to group size, luggage and itinerary duration."
        },
        {
            name: "Luxury Ashtavinayak Cab Package",
            description: "The luxury Ashtavinayak cab package is suitable for devotees who prefer a more premium and spacious travel experience during their pilgrimage. Higher-comfort vehicle options can be selected according to group requirements."
        },
        {
            name: "Ganesh Chaturthi Ashtavinayak Tour",
            description: "A Ganesh Chaturthi Ashtavinayak tour provides private transportation for devotees planning a pilgrimage during the festive season. Travel arrangements can be organized around the group's preferred temple sequence and schedule."
        },
        {
            name: "Pune Ashtavinayak Ganpati Festival Package",
            description: "Pune Ashtavinayak Ganpati festival package service supports devotees planning temple visits during the Ganpati festival period. Suitable vehicles can be arranged for families and groups travelling across multiple destinations."
        },
        {
            name: "Sankashti Chaturthi Ashtavinayak Cab",
            description: "A Sankashti Chaturthi Ashtavinayak cab is suitable for devotees planning a religious journey around the Sankashti Chaturthi observance. Private transportation allows the group to organize the pilgrimage itinerary according to its preferred schedule."
        },
        {
            name: "Angarki Chaturthi Ashtavinayak Tour",
            description: "The Angarki Chaturthi Ashtavinayak tour option provides private road transportation for devotees planning temple visits during this important Ganesh devotional occasion. Vehicle choices can accommodate families and larger groups."
        },
        {
            name: "Pune Ashtavinayak Weekend Yatra",
            description: "Pune Ashtavinayak weekend Yatra service is useful for devotees who want to utilize a weekend for their temple pilgrimage. A suitable cab can be arranged according to the group's preferred pace and travel requirements."
        },
        {
            name: "Diwali Ashtavinayak Package From Pune",
            description: "The Diwali Ashtavinayak package from Pune provides a convenient private travel option for families planning a festive pilgrimage. The itinerary can be arranged around temple visits, group size and available holiday time."
        },
        {
            name: "New Year Ashtavinayak Tour",
            description: "A New Year Ashtavinayak tour offers a private road-trip option for families and groups beginning the year with a religious journey. Vehicle selection can be tailored to passenger numbers and the planned itinerary."
        },
        {
            name: "Monsoon Ashtavinayak Road Trip",
            description: "The monsoon Ashtavinayak road trip is suitable for travellers combining temple visits with a scenic Maharashtra drive. Private cab transportation provides flexibility for families and groups planning a multi-destination pilgrimage during the rainy season."
        }
    ],
    tableData: [
        ["Pune To Ashtavinayak Cab"],
        ["Ashtavinayak Darshan Cab Pune"],
        ["Pune Ashtavinayak Taxi Service"],
        ["Cab For Ashtavinayak Yatra Pune"],
        ["Pune To Ashtavinayak Tour Cab"],
        ["Ashtavinayak Darshan Taxi Pune"],
        ["Pune Religious Cab Ashtavinayak"],
        ["Pune Temple Darshan Cab"],
        ["One Day Ashtavinayak Cab Pune"],
        ["Pune Pilgrimage Cab Ashtavinayak"],
        ["Best Ashtavinayak Cab Pune"],
        ["SUV Ashtavinayak Cab Pune"],
        ["Innova Ashtavinayak Cab Pune"],
        ["Sedan Ashtavinayak Cab Pune"],
        ["Ashtavinayak Yatra Booking Pune"],
        ["Pune To Ashtavinayak One-Day Trip"],
        ["One-Day Ashtavinayak Cab Package"],
        ["Ashtavinayak Darshan In One Day From Pune"],
        ["Pune Ashtavinayak Express Tour"],
        ["Pune Ashtavinayak 3-Day Package"],
        ["Ashtavinayak Three-Day Relaxed Tour"],
        ["Pune Ashtavinayak 3 Days 2 Nights"],
        ["Ashtavinayak Package For Senior Citizens"],
        ["Customized Ashtavinayak Itinerary From Pune"],
        ["Pune Ashtavinayak Sedan Cab"],
        ["Pune Ashtavinayak Dzire Cab"],
        ["Pune Ashtavinayak Ertiga Cab"],
        ["Pune Ashtavinayak Innova Cab"],
        ["Pune Ashtavinayak Innova Crysta"],
        ["Pune Ashtavinayak SUV Cab"],
        ["Pune Ashtavinayak 6-Seater Cab"],
        ["Pune Ashtavinayak 7-Seater Cab"],
        ["Pune Ashtavinayak Tempo Traveller"],
        ["Ashtavinayak Darshan 12-Seater Traveller"],
        ["Pune Ashtavinayak 17-Seater Traveller"],
        ["Pune Ashtavinayak Minibus"],
        ["Group Ashtavinayak Tour From Pune"],
        ["Luxury Ashtavinayak Cab Package"],
        ["Ganesh Chaturthi Ashtavinayak Tour"],
        ["Pune Ashtavinayak Ganpati Festival Package"],
        ["Sankashti Chaturthi Ashtavinayak Cab"],
        ["Angarki Chaturthi Ashtavinayak Tour"],
        ["Pune Ashtavinayak Weekend Yatra"],
        ["Diwali Ashtavinayak Package From Pune"],
        ["New Year Ashtavinayak Tour"],
        ["Monsoon Ashtavinayak Road Trip"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Dedicated Ashtavinayak Pilgrimage Travel",
            WhyChoosedescription: "Virendra Cab provides private transportation specifically suited to devotees planning the Ashtavinayak temple circuit from Pune, with vehicle options for individual pilgrims, families and organized groups."
        },
        {
            WhyChooseheading: "One-Day And Multi-Day Options",
            WhyChoosedescription: "Travellers can plan an intensive one-day darshan or choose a more relaxed two-night and three-day itinerary according to their available time and preferred pilgrimage pace."
        },
        {
            WhyChooseheading: "Vehicles For Every Group Size",
            WhyChoosedescription: "Sedan, Dzire, Ertiga, Innova, Innova Crysta, SUV, 6-seater, 7-seater, Tempo Traveller, 12-seater, 17-seater and minibus options support different family and group requirements."
        },
        {
            WhyChooseheading: "Senior Citizen-Friendly Planning",
            WhyChoosedescription: "Families travelling with senior citizens can choose a spacious vehicle and a less rushed itinerary, allowing the pilgrimage to be organized around suitable travel breaks and temple visits."
        },
        {
            WhyChooseheading: "Customized Temple Itineraries",
            WhyChoosedescription: "The pilgrimage can be customized according to the preferred temple sequence, trip duration, overnight requirements, group size and additional religious destinations included in the journey."
        },
        {
            WhyChooseheading: "Festival And Special Occasion Trips",
            WhyChoosedescription: "Virendra Cab supports pilgrimage planning for Ganesh Chaturthi, Sankashti Chaturthi, Angarki Chaturthi, Diwali, New Year and other special occasions when devotees may plan dedicated temple visits."
        },
        {
            WhyChooseheading: "Comfortable Group Transportation",
            WhyChoosedescription: "Larger groups can travel together in suitable traveller or minibus options, reducing the need to divide the pilgrimage party between multiple smaller vehicles."
        },
        {
            WhyChooseheading: "Flexible Religious Road Trips",
            WhyChoosedescription: "Private cab travel provides flexibility for weekend Yatras, monsoon road trips, express tours and extended pilgrimage journeys while allowing travellers to organize the itinerary around their preferred schedule."
        }
    ]
};

const faqData = [
    {
        question: "How can I book a Pune to Ashtavinayak Darshan Cab with Virendra Cab?",
        answer: "You can plan your Ashtavinayak Darshan Cab by sharing your travel date, passenger count, pickup location, and preferred vehicle with Virendra Cab. The itinerary can be discussed according to the number of temples you want to cover and the time available for the pilgrimage."
    },
    {
        question: "Can I visit all eight Ashtavinayak temples by cab from Pune?",
        answer: "A private cab can be used to plan a complete Ashtavinayak pilgrimage covering all eight traditionally worshipped temples. Since the journey involves multiple destinations, the route and duration should be planned in advance according to temple timings, darshan requirements, and your preferred travel schedule."
    },
    {
        question: "How many days are generally needed for an Ashtavinayak Darshan trip?",
        answer: "The duration depends on your chosen route, temple visit timings, sightseeing preferences, and overnight stays. Some travelers plan a compact pilgrimage, while others prefer a more relaxed itinerary spread across multiple days to avoid rushing between temples."
    },
    {
        question: "Which Ashtavinayak temples can be covered during the journey?",
        answer: "The traditional Ashtavinayak circuit includes Moreshwar at Morgaon, Siddhivinayak at Siddhatek, Ballaleshwar at Pali, Varadvinayak at Mahad, Chintamani at Theur, Girijatmaj at Lenyadri, Vighneshwar at Ozar, and Mahaganapati at Ranjangaon."
    },
    {
        question: "Is a private cab suitable for an Ashtavinayak pilgrimage with family?",
        answer: "A private cab can be a convenient choice for families because everyone can travel together throughout the pilgrimage route. It also allows the group to carry personal belongings and plan rest breaks according to the needs of children, senior citizens, and other family members."
    },
    {
        question: "What vehicle should I choose for an Ashtavinayak Darshan trip?",
        answer: "Vehicle selection depends mainly on the number of devotees and luggage. A sedan may suit a smaller group, while an Ertiga or Innova Crysta can provide additional seating and luggage space for larger families traveling across multiple temple locations."
    },
    {
        question: "Can senior citizens travel comfortably for Ashtavinayak Darshan by cab?",
        answer: "Senior citizens can benefit from a private cab because the journey can be organized with suitable rest intervals and direct transportation between pilgrimage locations. Families can also discuss their seating and luggage requirements when selecting the vehicle."
    },
    {
        question: "Can the Ashtavinayak cab itinerary be customized?",
        answer: "The itinerary can be planned around your preferred temple sequence, travel dates, overnight stays, and available time. You can also discuss additional religious or sightseeing stops if they fit naturally into the route without making the pilgrimage unnecessarily rushed."
    },
    {
        question: "Can I book an Ashtavinayak Darshan Cab for a multi-day pilgrimage?",
        answer: "Multi-day cab arrangements are suitable for devotees who want to complete the circuit at a comfortable pace. The plan can include appropriate breaks and overnight stays between temple visits, making it easier to manage a longer pilgrimage with family or a group."
    },
    {
        question: "How early should I reserve a Pune to Ashtavinayak Darshan Cab?",
        answer: "Advance booking is recommended when your pilgrimage dates are fixed, particularly around weekends, festivals, and religious occasions. Sharing the expected group size, travel duration, pickup point, and vehicle preference early gives more time to organize the complete temple itinerary."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Milind Joshi",
        feedback: "Our family completed the Ashtavinayak pilgrimage by private cab and found the arrangement very convenient. Having one vehicle throughout the circuit helped us keep our luggage together and follow the temple schedule without changing transportation at every destination.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Swati Deshpande",
        feedback: "The Ashtavinayak Darshan trip was planned comfortably for our group. We appreciated having enough flexibility for temple visits and rest breaks, especially while traveling with senior members of the family. The overall pilgrimage was well suited to our planned itinerary.",
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
  "name": "Pune to Ashtavinayak Darshan Cab",
  "image": "https://www.virendracabs.com/assets/images/pune-to-ashtavinayak-darshan-cab.webp",
  "description": "Pune to Ashtavinayak Darshan Cab is a convenient private travel option for devotees and families planning an Ashtavinayak pilgrimage from Pune. Virendra Cab supports passengers searching for Pune to Ashtavinayak Cab, Ashtavinayak Darshan Cab Pune, Pune Ashtavinayak Taxi Service and Cab for Ashtavinayak Yatra Pune with suitable vehicle options for individual travellers, families, senior citizens and groups. A private cab makes it easier to plan a multi-temple pilgrimage according to the preferred schedule, allowing passengers to travel between the important Ashtavinayak temples without arranging separate transportation for every leg of the journey. The service can be planned for one-day, multi-day or customized pilgrimage requirements depending on the itinerary and travel preferences. Customers can enquire about sedan, SUV, Ertiga, Innova and Innova Crysta options according to group size, luggage and comfort requirements. Pune to Ashtavinayak Cab Booking can be arranged in advance with pickup from homes, hotels, offices, railway stations or other convenient locations in Pune. The journey can cover destinations associated with the Ashtavinayak circuit, including Morgaon, Siddhatek, Pali, Mahad, Theur, Lenyadri, Ozar and Ranjangaon, with the itinerary planned according to the travel schedule. Passengers looking for Ashtavinayak Darshan Taxi Fare or Pune to Ashtavinayak Cab Price can contact Virendra Cab for the latest applicable fare, as pricing depends on the selected vehicle, duration, route, number of travel days and itinerary. Round-trip and customized pilgrimage cab options can be discussed for devotees who want transportation throughout their darshan journey. The service is especially useful for families travelling with senior citizens, children or multiple passengers who prefer private door-to-door transportation. Customers can also enquire about additional sightseeing or nearby pilgrimage destinations when planning a longer religious tour. Virendra Cab provides flexible cab booking support for devotees looking for a comfortable and convenient Pune to Ashtavinayak Darshan travel experience.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.virendracabs.com/pune-to-ashtavinayak-darshan-cab"
  }
};




    return (
        <div>


<Helmet>
  <title>
    Pune to Ashtavinayak Darshan Cab | Ashtavinayak Darshan Cab Pune | +91 9022549022
  </title>

  <meta
    name="description"
    content="Book Pune to Ashtavinayak Darshan Cab for a convenient pilgrimage journey covering the Ashtavinayak temples. Choose private sedan, SUV, Ertiga, Innova and Innova Crysta options."
  />

  <meta
    name="keywords"
    content="Pune to Ashtavinayak Darshan Cab, Pune to Ashtavinayak Cab, Ashtavinayak Darshan Cab Pune, Pune Ashtavinayak Taxi Service, Cab for Ashtavinayak Yatra Pune, Pune to Ashtavinayak Taxi, Pune to Ashtavinayak Cab Service, Pune to Ashtavinayak Taxi Service, Pune Ashtavinayak Cab Booking, Ashtavinayak Cab Booking Pune, Ashtavinayak Taxi Booking Pune, Pune to Ashtavinayak Cab Booking, Pune to Ashtavinayak Taxi Booking, Ashtavinayak Darshan Taxi Pune, Ashtavinayak Yatra Cab Pune, Ashtavinayak Yatra Taxi Pune, Ashtavinayak Tour Package Pune, Ashtavinayak Tour Cab Pune, Ashtavinayak Pilgrimage Cab Pune, Ashtavinayak Pilgrimage Taxi Pune, Ashtavinayak Darshan Package Pune, Ashtavinayak Darshan Cab Service, Ashtavinayak Cab Rental Pune, Ashtavinayak Car Rental Pune, Pune Ashtavinayak One Day Cab, Pune Ashtavinayak Multi Day Cab, Pune Ashtavinayak Round Trip Cab, Pune Ashtavinayak Private Cab, Pune Ashtavinayak Taxi Fare, Pune Ashtavinayak Cab Fare, Pune to Ashtavinayak Cab Price, Pune to Ashtavinayak Taxi Price, Best Ashtavinayak Cab Pune, Reliable Ashtavinayak Taxi Pune, Affordable Ashtavinayak Cab Pune, Ashtavinayak Sedan Cab Pune, Ashtavinayak SUV Cab Pune, Ashtavinayak Ertiga Cab Pune, Ashtavinayak Innova Cab Pune, Ashtavinayak Innova Crysta Cab Pune, Ashtavinayak Cab for Family Pune, Ashtavinayak Cab for Senior Citizens Pune, Ashtavinayak Temple Cab Pune, Ashtavinayak Darshan Car Pune, Morgaon Ashtavinayak Cab Pune, Siddhatek Ashtavinayak Cab Pune, Pali Ashtavinayak Cab Pune, Mahad Ashtavinayak Cab Pune, Theur Ashtavinayak Cab Pune, Lenyadri Ashtavinayak Cab Pune, Ozar Ashtavinayak Cab Pune, Ranjangaon Ashtavinayak Cab Pune, Pune Ashtavinayak Yatra Booking, Pune Ashtavinayak Darshan Booking"
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
                            <img src='/images/keyword/94.jpg' alt='img' className='img-fluid' />
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

export default Punetoashtavinayakdarshan ;