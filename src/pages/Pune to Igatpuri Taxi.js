import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Puntolgatpuricab() {



const cardData = {
    keyword: "Pune to Igatpuri Taxi",
    headingDescription: "Pune to Igatpuri Taxi service by Virendra Cab offers a convenient private travel option for passengers planning trips to Igatpuri, Nashik, Trimbakeshwar and nearby destinations. Whether the journey is for a weekend getaway, family vacation, business travel, religious visit or long-distance outstation trip, travellers can choose suitable sedan, SUV, Innova, Innova Crysta, Ertiga or Tempo Traveller options according to their group size and luggage needs. One-way, round-trip and airport-related travel requirements can also be planned with flexible pickup arrangements.",
    topPlaces: [
        {
            title: "Igatpuri",
            description: "Enjoy a comfortable cab journey to Igatpuri, a scenic destination known for its hills, greenery, resorts and peaceful weekend atmosphere."
        },
        {
            title: "Nashik",
            description: "A private cab from Pune to Nashik is convenient for sightseeing, family visits, business travel, winery tours and religious journeys."
        },
        {
            title: "Trimbakeshwar",
            description: "Include Trimbakeshwar in your itinerary for a comfortable road journey to the historic temple town and surrounding scenic areas."
        },
        {
            title: "Bhandardara",
            description: "Travel towards Bhandardara for a relaxing nature escape featuring lakes, hills and peaceful countryside surroundings."
        },
        {
            title: "Sula Vineyards",
            description: "A cab journey makes it convenient to include Sula Vineyards and the surrounding Nashik wine region in a planned private itinerary."
        },
        {
            title: "Vihigaon Waterfall",
            description: "Vihigaon Waterfall is a popular seasonal attraction near Igatpuri that can be included in an adventure-focused road trip."
        },
        {
            title: "Anjaneri Hills",
            description: "Explore Anjaneri Hills near Nashik with a private cab arrangement suitable for nature lovers, families and travellers planning local sightseeing."
        },
        {
            title: "Pandavleni Caves",
            description: "Pandavleni Caves offer a convenient sightseeing stop near Nashik for travellers interested in historic surroundings and hilltop views."
        },
        {
            title: "Kalsubai",
            description: "The Kalsubai region is suitable for travellers planning a mountain and trekking-focused trip around the Igatpuri-Bhandardara belt."
        },
        {
            title: "Gangapur Dam",
            description: "Gangapur Dam provides a peaceful Nashik-side destination that can be added to a flexible sightseeing or family road-trip itinerary."
        }
    ],
    services: [
        {
            name: "Pune To Igatpuri Cab",
            description: "Virendra Cab provides a comfortable Pune to Igatpuri cab service for travellers planning weekend getaways, family holidays, resort stays and scenic hill drives. Passengers can select a suitable vehicle according to group size, luggage and preferred travel comfort."
        },
        {
            name: "Pune To Igatpuri Taxi",
            description: "A Pune to Igatpuri taxi offers direct private transportation for travellers who prefer a convenient road journey instead of shared travel. The service can be arranged for personal trips, family vacations, sightseeing plans and business travel."
        },
        {
            name: "Cab From Pune To Igatpuri",
            description: "Travellers looking for a cab from Pune to Igatpuri can arrange a direct transfer with Virendra Cab based on their preferred pickup point and travel schedule. Vehicle choices can accommodate individuals, couples, families and larger groups."
        },
        {
            name: "Taxi From Pune To Igatpuri",
            description: "Taxi from Pune to Igatpuri is a practical option for passengers travelling towards the scenic hill region for holidays, resort stays or sightseeing. Virendra Cab supports different vehicle requirements for comfortable long-distance road travel."
        },
        {
            name: "Pune To Igatpuri Cab Service",
            description: "The Pune to Igatpuri cab service is suitable for travellers who need dependable private transportation between Pune and Igatpuri. Sedan, SUV and larger vehicle options can be selected according to passenger count, luggage and trip requirements."
        },
        {
            name: "Pune To Igatpuri Taxi Fare",
            description: "Travellers comparing Pune to Igatpuri taxi fare can discuss their journey details with Virendra Cab before confirming the trip. The applicable fare can depend on the vehicle category, journey type, pickup location, travel schedule and other trip requirements."
        },
        {
            name: "Pune To Igatpuri One Way Cab",
            description: "A Pune to Igatpuri one way cab is convenient for passengers who only require a direct transfer to Igatpuri. It works well for hotel check-ins, weekend arrivals, family trips and travel plans where the return journey is arranged separately."
        },
        {
            name: "Pune To Igatpuri Round Trip Taxi",
            description: "The Pune to Igatpuri round trip taxi option is useful for travellers planning a return journey after spending time at the destination. Families, couples and groups can arrange transportation around their sightseeing, resort or weekend itinerary."
        },
        {
            name: "Pune To Igatpuri Cab Booking",
            description: "Pune to Igatpuri cab booking with Virendra Cab allows passengers to organize their vehicle requirements before travelling. Pickup location, journey date, passenger count, luggage requirements and preferred vehicle category can be discussed during trip planning."
        },
        {
            name: "Cheap Pune To Igatpuri Cab",
            description: "Travellers searching for a cheap Pune to Igatpuri cab can compare suitable vehicle options according to their budget and group requirements. Virendra Cab provides practical choices for passengers looking to manage travel costs while maintaining private road-trip convenience."
        },
        {
            name: "Best Pune To Igatpuri Taxi",
            description: "Travellers comparing the best Pune to Igatpuri taxi options can consider vehicle suitability, booking convenience, passenger comfort and journey requirements. Virendra Cab offers different categories to help individuals, families and groups plan their trip."
        },
        {
            name: "Sedan Pune To Igatpuri Cab",
            description: "A sedan Pune to Igatpuri cab is a practical choice for couples, small families and business travellers who prefer a comfortable private car. The sedan category offers convenient seating and luggage space for a relaxed intercity journey."
        },
        {
            name: "SUV Pune To Igatpuri Taxi",
            description: "The SUV Pune to Igatpuri taxi option is suitable for passengers who need additional cabin and luggage space. It can be particularly useful for families and groups travelling with more belongings for an extended stay."
        },
        {
            name: "Innova Pune To Igatpuri Cab",
            description: "An Innova Pune to Igatpuri cab provides a spacious option for families and groups travelling together. Its larger seating arrangement makes it suitable for longer road journeys where passengers want additional space for people and luggage."
        },
        {
            name: "Hill Drive Cab Pune Igatpuri",
            description: "Virendra Cab provides a convenient hill drive cab from Pune to Igatpuri for travellers heading towards the scenic Western Ghats. The service is suitable for weekend escapes, resort visits, family holidays and nature-focused road trips."
        },
        {
            name: "Pune To Igatpuri Cab",
            description: "The Pune to Igatpuri Cab option supports direct travel between Pune and Igatpuri for leisure, family and business purposes. Travellers can select a vehicle based on the number of passengers, luggage and desired comfort level."
        },
        {
            name: "Pune To Igatpuri Cab Service",
            description: "Virendra Cab's Pune to Igatpuri Cab Service can be planned for weekend holidays, resort transfers, sightseeing and personal travel. Flexible vehicle options make it possible to arrange transportation around different passenger and itinerary requirements."
        },
        {
            name: "Pune To Igatpuri Taxi Service",
            description: "Pune to Igatpuri Taxi Service offers direct private transportation for travellers seeking a convenient alternative to shared travel. The service can support one-way transfers, return journeys and customized holiday travel plans."
        },
        {
            name: "Pune To Igatpuri Cab Booking",
            description: "With Pune to Igatpuri Cab Booking, passengers can plan their journey in advance by sharing their pickup location, travel date and preferred vehicle category. Advance planning is helpful for families, groups and travellers with fixed weekend schedules."
        },
        {
            name: "Best Pune To Igatpuri Cab",
            description: "Travellers searching for the best Pune to Igatpuri cab can evaluate Virendra Cab based on vehicle choices, trip flexibility and comfort requirements. Suitable options are available for personal travel, family holidays and group journeys."
        },
        {
            name: "Round Trip Pune To Igatpuri Taxi",
            description: "A round trip Pune to Igatpuri taxi is suitable for travellers who want transportation for both the onward and return portions of their journey. It can be planned around sightseeing, resort stays, weekend trips and family travel schedules."
        },
        {
            name: "Cheap Pune To Igatpuri Cab",
            description: "For travellers looking for a cheap Pune to Igatpuri cab, Virendra Cab offers different vehicle categories that can be considered according to budget, passenger count and comfort preferences. This makes private travel easier to plan for different types of trips."
        },
        {
            name: "24x7 Pune To Igatpuri Cab Service",
            description: "The 24x7 Pune to Igatpuri cab service is useful for travellers with early-morning, late-evening or flexible departure requirements. Pickup arrangements can be planned according to the passenger's schedule and selected destination."
        },
        {
            name: "Outstation Cab Pune To Igatpuri",
            description: "An outstation cab from Pune to Igatpuri provides a private road travel solution for weekend holidays, resort stays and longer sightseeing plans. Passengers can choose a vehicle according to group size, luggage and journey type."
        },
        {
            name: "Pune To Nashik Cab",
            description: "Virendra Cab offers Pune to Nashik cab service for passengers travelling for business, family visits, sightseeing, religious trips and leisure holidays. Different vehicle categories can be selected according to the size and requirements of the travelling group."
        },
        {
            name: "Pune To Nashik Cab Service",
            description: "The Pune to Nashik Cab Service provides direct private transportation between the two cities for personal and professional travel. It is suitable for airport-related journeys, family visits, sightseeing and planned outstation trips."
        },
        {
            name: "Pune To Nashik Taxi Service",
            description: "Pune to Nashik Taxi Service is designed for travellers who prefer a comfortable private vehicle for their intercity journey. Virendra Cab can arrange suitable transportation based on the passenger count, luggage and preferred travel schedule."
        },
        {
            name: "Pune To Nashik Cab Booking",
            description: "Pune to Nashik Cab Booking allows travellers to organize their vehicle before departure and communicate their pickup point, travel date and vehicle requirements. It is suitable for individuals, families, business travellers and groups."
        },
        {
            name: "Best Pune To Nashik Cab",
            description: "Travellers comparing the best Pune to Nashik cab can consider Virendra Cab for its range of vehicle options and flexible trip arrangements. The service can be planned for one-way transfers, return journeys, family travel and business requirements."
        },
        {
            name: "One Way Pune To Nashik Cab",
            description: "A one way Pune to Nashik cab is useful for passengers who need a direct transfer without booking an immediate return journey. It can support hotel transfers, business visits, family travel and sightseeing plans."
        },
        {
            name: "Round Trip Pune To Nashik Taxi",
            description: "The round trip Pune to Nashik taxi option works well for passengers planning to return to Pune after completing their visit. Families, corporate travellers and sightseeing groups can arrange the journey around their planned schedule."
        },
        {
            name: "Cheap Pune To Nashik Cab",
            description: "Travellers looking for a cheap Pune to Nashik cab can compare available vehicle categories based on their budget and passenger requirements. Virendra Cab provides practical options for private travel while allowing customers to select suitable comfort levels."
        },
        {
            name: "Pune To Nashik Innova Crysta Cab",
            description: "Pune to Nashik Innova Crysta Cab is suitable for families, groups and travellers seeking additional space during an intercity journey. The larger cabin and luggage capacity make it practical for longer trips and group travel."
        },
        {
            name: "Innova Crysta Cab Pune Nashik",
            description: "An Innova Crysta cab from Pune to Nashik provides a spacious and comfortable travel option for families and professional groups. It can be arranged for sightseeing, business travel, family visits and extended road journeys."
        },
        {
            name: "Luxury Innova Crysta Pune Nashik",
            description: "Luxury Innova Crysta Pune Nashik service is suitable for travellers who prefer a more premium and spacious road-trip experience. The vehicle works well for corporate journeys, family travel, special occasions and long-distance transfers."
        },
        {
            name: "Pune To Nashik Innova Cab",
            description: "A Pune to Nashik Innova cab offers additional seating space for families and groups travelling together. It is a practical choice for passengers carrying luggage or planning a longer journey with multiple travellers."
        },
        {
            name: "Innova Cab Service Pune Nashik",
            description: "Innova Cab Service Pune Nashik provides spacious private transportation for travellers who need more seating and luggage capacity. The option is suitable for family trips, group travel, corporate movement and sightseeing journeys."
        },
        {
            name: "Family Innova Taxi Pune Nashik",
            description: "A family Innova taxi from Pune to Nashik gives families a convenient private travel option with additional seating space. It is useful for family visits, religious journeys, sightseeing and weekend travel with luggage."
        },
        {
            name: "Pune To Nashik Ertiga Cab",
            description: "Pune to Nashik Ertiga Cab is a practical choice for families and small groups looking for a comfortable vehicle with useful passenger and luggage space. It can be arranged for one-way, round-trip and sightseeing requirements."
        },
        {
            name: "Pune To Nashik Tempo Traveller",
            description: "A Pune to Nashik Tempo Traveller is suitable for larger families, friends and group tours travelling together. The vehicle provides additional seating capacity and can be useful for sightseeing plans, family functions and group outstation journeys."
        },
        {
            name: "Best Pune To Nashik Cab Service",
            description: "Travellers searching for the best Pune to Nashik cab service can evaluate options according to vehicle comfort, group size, travel schedule and journey type. Virendra Cab offers different vehicle categories to support a range of private travel requirements."
        },
        {
            name: "Cheap Pune To Igatpuri Taxi",
            description: "Passengers looking for a cheap Pune to Igatpuri taxi can compare vehicle categories according to their budget and travel requirements. Virendra Cab offers practical private travel options for individuals, couples, families and groups."
        },
        {
            name: "Book Pune To Trimbakeshwar Cab Online",
            description: "Travellers can plan a Pune to Trimbakeshwar cab online for a convenient direct road journey to the temple town. The service is suitable for religious visits, family travel and sightseeing plans, with vehicle selection based on passenger and luggage requirements."
        },
        {
            name: "Pune To Nashik Family Trip Cab",
            description: "A Pune to Nashik family trip cab provides private transportation for families travelling with children, luggage and holiday essentials. Vehicle selection can be planned according to family size, comfort preferences and the destinations included in the itinerary."
        }
    ],
    tableData: [
        ["Pune To Igatpuri Cab"],
        ["Pune To Igatpuri Taxi"],
        ["Cab From Pune To Igatpuri"],
        ["Taxi From Pune To Igatpuri"],
        ["Pune To Igatpuri Cab Service"],
        ["Pune To Igatpuri Taxi Fare"],
        ["Pune To Igatpuri One Way Cab"],
        ["Pune To Igatpuri Round Trip Taxi"],
        ["Pune To Igatpuri Cab Booking"],
        ["Cheap Pune To Igatpuri Cab"],
        ["Best Pune To Igatpuri Taxi"],
        ["Sedan Pune To Igatpuri Cab"],
        ["SUV Pune To Igatpuri Taxi"],
        ["Innova Pune To Igatpuri Cab"],
        ["Hill Drive Cab Pune Igatpuri"],
        ["Pune To Igatpuri Cab"],
        ["Pune To Igatpuri Cab Service"],
        ["Pune To Igatpuri Taxi Service"],
        ["Pune To Igatpuri Cab Booking"],
        ["Best Pune To Igatpuri Cab"],
        ["Round Trip Pune To Igatpuri Taxi"],
        ["Cheap Pune To Igatpuri Cab"],
        ["24x7 Pune To Igatpuri Cab Service"],
        ["Outstation Cab Pune To Igatpuri"],
        ["Pune To Nashik Cab"],
        ["Pune To Nashik Cab Service"],
        ["Pune To Nashik Taxi Service"],
        ["Pune To Nashik Cab Booking"],
        ["Best Pune To Nashik Cab"],
        ["One Way Pune To Nashik Cab"],
        ["Round Trip Pune To Nashik Taxi"],
        ["Cheap Pune To Nashik Cab"],
        ["Pune To Nashik Innova Crysta Cab"],
        ["Innova Crysta Cab Pune Nashik"],
        ["Luxury Innova Crysta Pune Nashik"],
        ["Pune To Nashik Innova Cab"],
        ["Innova Cab Service Pune Nashik"],
        ["Family Innova Taxi Pune Nashik"],
        ["Pune To Nashik Ertiga Cab"],
        ["Pune To Nashik Tempo Traveller"],
        ["Best Pune To Nashik Cab Service"],
        ["Cheap Pune To Igatpuri Taxi"],
        ["Book Pune To Trimbakeshwar Cab Online"],
        ["Pune To Nashik Family Trip Cab"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Comfortable Outstation Travel",
            WhyChoosedescription: "Virendra Cab provides suitable vehicle options for the Pune to Igatpuri and Pune to Nashik routes, helping passengers enjoy a comfortable private journey for holidays, family visits and business travel."
        },
        {
            WhyChooseheading: "Wide Choice Of Vehicles",
            WhyChoosedescription: "Travellers can choose from sedan, SUV, Innova, Innova Crysta, Ertiga and Tempo Traveller options according to passenger numbers, luggage requirements and preferred comfort level."
        },
        {
            WhyChooseheading: "Igatpuri And Nashik Connectivity",
            WhyChoosedescription: "The service covers both Igatpuri and Nashik travel requirements, making it convenient to plan combined itineraries involving hill destinations, city visits, resorts, sightseeing and religious locations."
        },
        {
            WhyChooseheading: "One Way And Return Journeys",
            WhyChoosedescription: "Flexible one-way and round-trip options allow passengers to select the arrangement that best matches their travel plans, whether they need a direct transfer or transportation for the complete journey."
        },
        {
            WhyChooseheading: "Family And Group-Friendly Options",
            WhyChoosedescription: "Families and larger groups can select spacious vehicles such as Innova, Innova Crysta or Tempo Traveller according to their seating and luggage needs for longer outstation journeys."
        },
        {
            WhyChooseheading: "Suitable For Scenic Trips",
            WhyChoosedescription: "Igatpuri and the surrounding Nashik region are popular for scenic drives and weekend travel, and a private cab provides the flexibility to plan stops and destinations according to the group's itinerary."
        },
        {
            WhyChooseheading: "Trimbakeshwar Travel Support",
            WhyChoosedescription: "Passengers planning religious or sightseeing trips to Trimbakeshwar can arrange a private cab from Pune with a vehicle selected according to their passenger count, luggage and preferred travel schedule."
        },
        {
            WhyChooseheading: "Flexible Trip Planning",
            WhyChoosedescription: "Pickup location, destination, travel date, vehicle category and journey type can be planned around individual requirements, making Virendra Cab suitable for personal, family, corporate and group travel."
        }
    ]
};



const faqData = [
    {
        question: "How do I arrange a Pune to Igatpuri Taxi with Virendra Cab?",
        answer: "To arrange a Pune to Igatpuri Taxi, you can share your preferred Pune pickup point, travel date, passenger count, and vehicle requirement with Virendra Cab. The journey can be planned as a one-way transfer or a return trip depending on your itinerary."
    },
    {
        question: "Can I hire a taxi from Pune to Igatpuri for a weekend trip?",
        answer: "A private taxi is a convenient option for a weekend getaway to Igatpuri. You can plan the departure from Pune around your schedule and use the cab for local sightseeing, hotel transfers, and the return journey if required."
    },
    {
        question: "Is a one-way Pune to Igatpuri cab available?",
        answer: "Passengers who only need transportation to Igatpuri can opt for a one-way cab. This arrangement can suit travelers visiting friends, checking into a resort, attending a personal event, or continuing their journey from Igatpuri by another mode of transport."
    },
    {
        question: "Which places can I visit in Igatpuri with a private taxi?",
        answer: "A private cab can help you explore attractions such as Tringalwadi Fort, Vihigaon Waterfall, Bhatsa River Valley, Camel Valley, and nearby scenic viewpoints. The sightseeing plan can be adjusted according to your interests and the time available."
    },
    {
        question: "What vehicles can be booked for Pune to Igatpuri travel?",
        answer: "The vehicle can be selected according to your group size, luggage, and comfort preferences. Sedan cars are suitable for smaller groups, while Ertiga or Innova Crysta can be considered when additional passenger and luggage space is needed."
    },
    {
        question: "Can families book a Pune to Igatpuri Taxi for sightseeing?",
        answer: "Families can use a private taxi to travel together from Pune and explore Igatpuri at a comfortable pace. Having a dedicated vehicle makes it easier to coordinate sightseeing stops, meal breaks, hotel transfers, and the return trip without depending on public transport timings."
    },
    {
        question: "Is Igatpuri suitable for a nature-focused cab trip from Pune?",
        answer: "Igatpuri is a popular choice for travelers interested in hills, greenery, waterfalls, and scenic surroundings. A private cab allows you to organize a nature-oriented itinerary with suitable stops while keeping the journey flexible for your group."
    },
    {
        question: "Can I take a taxi from Pune to Igatpuri for a multi-day stay?",
        answer: "Multi-day travel can be planned when you want to spend more time exploring Igatpuri and nearby attractions. The cab arrangement can be discussed according to your stay duration, sightseeing plans, passenger requirements, and return schedule."
    },
    {
        question: "How much luggage can I carry in a Pune to Igatpuri Taxi?",
        answer: "The amount of luggage depends on the vehicle chosen for your trip. Travelers carrying weekend bags, family luggage, or additional equipment can mention their requirements during booking so that a suitable vehicle with adequate space can be considered."
    },
    {
        question: "When should I reserve a Pune to Igatpuri Taxi?",
        answer: "It is useful to reserve your taxi in advance when traveling on weekends, holidays, or during periods when Igatpuri attracts more visitors. Providing the journey date, pickup location, passenger count, and preferred vehicle beforehand helps organize the trip more smoothly."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Manish Kharat",
        feedback: "Our Igatpuri weekend plan was much easier with a private cab from Pune. We had enough flexibility to visit Tringalwadi Fort and enjoy the scenic surroundings without worrying about local transport between different places.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Priya Wagh",
        feedback: "For our family getaway, the Pune to Igatpuri taxi was a comfortable choice. There was good space for our bags, and being able to decide our sightseeing stops along the way made the trip feel relaxed and convenient.",
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
  "name": "Pune to Igatpuri Taxi",
  "image": "https://www.virendracabs.com/assets/images/pune-to-igatpuri-taxi.webp",
  "description": "Pune to Igatpuri Taxi offers convenient private road transportation for passengers travelling from Pune to Igatpuri for weekend getaways, family holidays, sightseeing, business visits, personal travel and other intercity requirements. Virendra Cab supports customers searching for Pune to Igatpuri Cab, Pune to Igatpuri Taxi, Cab from Pune to Igatpuri and Taxi from Pune to Igatpuri with vehicle options suited to different passenger and luggage requirements. Pune to Igatpuri Cab Service can be booked for a direct one-way drop when a return journey is not required, while Pune to Igatpuri Round Trip Taxi options are suitable for travellers planning to return to Pune after their stay. The destination is popular for its scenic surroundings, hill-station atmosphere, lakes, forts, viewpoints and nature-based trips, making private transportation useful for families, couples, groups and tourists. Customers looking for Pune to Igatpuri Taxi Fare, Pune to Igatpuri Cab Fare or Cheap Pune to Igatpuri Cab options can enquire about the current applicable fare, as the final amount may vary according to vehicle category, travel date, route, timing and trip type. Sedan Pune to Igatpuri Cab options can be suitable for smaller groups, while SUV, Ertiga, Innova and Innova Crysta vehicles can be considered for families or larger groups requiring additional seating and luggage capacity. Pune to Igatpuri Cab Booking can be arranged in advance with pickup from residential areas, offices, hotels, railway stations or other convenient locations in Pune. The service is suitable for sightseeing trips, weekend travel, family outings, corporate journeys and private intercity transportation. Passengers searching for the Best Pune to Igatpuri Taxi can discuss their preferred vehicle, pickup schedule and travel requirements before confirming the journey. One-way bookings are useful for direct transfers, while round-trip bookings provide transportation for both onward and return travel. The reverse route can also be arranged for customers requiring an Igatpuri to Pune Cab or Igatpuri to Pune Taxi. Virendra Cab provides flexible private cab options for comfortable Pune to Igatpuri travel with fare and availability enquiries available before booking.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.virendracabs.com/pune-to-igatpuri-taxi"
  }
};







    return (
        <div>

<Helmet>
  <title>
    Pune to Igatpuri Taxi | Pune to Igatpuri Cab Service | +91 9022549022
  </title>

  <meta
    name="description"
    content="Book Pune to Igatpuri Taxi for one-way or round-trip travel with private sedan, SUV, Ertiga, Innova and Innova Crysta options. Enquire about current fares with Virendra Cab."
  />

  <meta
    name="keywords"
    content="Pune to Igatpuri Taxi, Pune to Igatpuri Cab, Cab from Pune to Igatpuri, Taxi from Pune to Igatpuri, Pune to Igatpuri Cab Service, Pune to Igatpuri Taxi Service, Pune to Igatpuri Taxi Fare, Pune to Igatpuri Cab Fare, Pune to Igatpuri Cab Price, Pune to Igatpuri Taxi Price, Pune to Igatpuri One Way Cab, Pune to Igatpuri One Way Taxi, Pune to Igatpuri Round Trip Cab, Pune to Igatpuri Round Trip Taxi, Pune to Igatpuri Cab Booking, Pune to Igatpuri Taxi Booking, Cheap Pune to Igatpuri Cab, Best Pune to Igatpuri Taxi, Reliable Pune to Igatpuri Cab, Affordable Pune to Igatpuri Taxi, Pune to Igatpuri Outstation Cab, Pune to Igatpuri Outstation Taxi, Pune to Igatpuri Private Cab, Pune to Igatpuri Private Taxi, Pune to Igatpuri Car Rental, Pune to Igatpuri Cab Hire, Pune to Igatpuri Taxi Hire, Pune Igatpuri Cab Service, Pune Igatpuri Taxi Service, Sedan Pune to Igatpuri Cab, Sedan Pune to Igatpuri Taxi, SUV Pune to Igatpuri Cab, SUV Pune to Igatpuri Taxi, Pune to Igatpuri Ertiga Cab, Pune to Igatpuri Ertiga Taxi, Pune to Igatpuri Innova Cab, Pune to Igatpuri Innova Taxi, Pune to Igatpuri Innova Crysta Cab, Pune to Igatpuri Innova Crysta Taxi, Pune to Igatpuri Family Cab, Pune to Igatpuri Tourist Cab, Pune to Igatpuri Sightseeing Cab, Pune to Igatpuri Weekend Cab, Pune to Igatpuri Holiday Cab, Pune to Igatpuri Tour Taxi, Pune to Igatpuri Cab Booking Online, Igatpuri to Pune Cab, Igatpuri to Pune Taxi, Igatpuri to Pune Cab Service, Igatpuri to Pune Taxi Service, Igatpuri to Pune One Way Cab"
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
                            <img src='/images/keyword/91.jpg' alt='img' className='img-fluid' />
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

export default Puntolgatpuricab ;