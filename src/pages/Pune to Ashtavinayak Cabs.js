import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Punetoashtavinayakcabs() {




const cardData = {
    keyword: "Pune to Ashtavinayak Cabs",
    headingDescription: "Virendra Cab offers convenient Pune to Ashtavinayak cab services for devotees planning a comfortable pilgrimage across the eight revered Ashtavinayak temples of Maharashtra. Whether the requirement is for a one-day darshan trip, a two-day temple circuit, or a customized itinerary, travellers can choose suitable vehicles such as Innova, Ertiga, sedan, SUV, AC cab, or tempo traveller according to group size and travel needs. The service can be arranged from different parts of Pune, including Pune Airport, Hinjewadi, Wakad, Hadapsar, and Pimpri Chinchwad, with options for advance booking, one-way requirements, and extended outstation travel.",

    topPlaces: [
        {
            title: "Mayureshwar Temple, Morgaon",
            description: "Mayureshwar Temple at Morgaon is traditionally regarded as the first and most important stop in the Ashtavinayak pilgrimage circuit, making it a key destination for devotees travelling from Pune."
        },
        {
            title: "Siddhivinayak Temple, Siddhatek",
            description: "The Siddhivinayak Temple at Siddhatek is an important Ashtavinayak destination where devotees can plan darshan as part of a complete temple circuit from Pune."
        },
        {
            title: "Chintamani Temple, Theur",
            description: "Chintamani Temple at Theur is one of the prominent Ashtavinayak temples near Pune and can be included in a planned pilgrimage itinerary with convenient cab transportation."
        },
        {
            title: "Mahaganapati Temple, Ranjangaon",
            description: "The Mahaganapati Temple at Ranjangaon is a significant stop on the Ashtavinayak route and is suitable for devotees planning a structured temple darshan journey by cab."
        },
        {
            title: "Vighneshwar Temple, Ozar",
            description: "Vighneshwar Temple at Ozar forms an important part of the Ashtavinayak circuit, providing devotees with a convenient destination to include in a multi-temple pilgrimage itinerary."
        },
        {
            title: "Girijatmak Temple, Lenyadri",
            description: "Girijatmak Temple at Lenyadri is a distinctive Ashtavinayak pilgrimage destination where travellers can combine temple darshan with a planned visit to the surrounding hill area."
        },
        {
            title: "Ballaleshwar Temple, Pali",
            description: "Ballaleshwar Temple at Pali is one of the eight Ashtavinayak temples and can be comfortably covered as part of a multi-day pilgrimage journey from Pune."
        },
        {
            title: "Varadvinayak Temple, Mahad",
            description: "Varadvinayak Temple at Mahad is another important stop in the Ashtavinayak circuit and can be included in a customized route planned according to the traveller's available time."
        },
        {
            title: "Ashtavinayak Temple Circuit",
            description: "The complete Ashtavinayak circuit connects eight revered Lord Ganesha temples across Maharashtra, making a properly planned cab itinerary useful for devotees travelling with family or groups."
        },
        {
            title: "Pune Airport",
            description: "Pune Airport is a convenient starting point for devotees arriving by flight and continuing directly toward the Ashtavinayak pilgrimage circuit with pre-planned cab transportation."
        }
    ],

    services: [
        {
            name: "Ashtavinayak Darshan Cab Pune",
            description: "Virendra Cab provides Ashtavinayak darshan cabs from Pune for devotees planning visits to the eight temples, with vehicle options suited to families, groups, and different pilgrimage schedules."
        },
        {
            name: "Car Rental For Ashtavinayak From Pune",
            description: "Travellers can arrange a car rental from Pune for an Ashtavinayak pilgrimage, allowing the itinerary to be planned around temple timings, preferred stops, passenger count, and travel duration."
        },
        {
            name: "Cost Of Ashtavinayak Yatra Tour By Car From Pune",
            description: "Customers comparing the cost of an Ashtavinayak yatra by car from Pune can share their preferred itinerary, number of passengers, vehicle type, and trip duration to understand a suitable travel arrangement."
        },
        {
            name: "Pune To Ashtavinayak Cabs",
            description: "Pune to Ashtavinayak cabs are suitable for devotees travelling to multiple temples in one planned pilgrimage, with options for families, groups, and customized travel schedules."
        },
        {
            name: "Pune To Ashtavinayak Cab Service",
            description: "The Pune to Ashtavinayak cab service supports temple-to-temple travel with comfortable transportation and route planning for devotees completing part or all of the traditional pilgrimage circuit."
        },
        {
            name: "Pune To Ashtavinayak Taxi",
            description: "A Pune to Ashtavinayak taxi provides a convenient private travel option for devotees who prefer flexible temple visits, comfortable road travel, and a personalized pilgrimage itinerary."
        },
        {
            name: "Pune To Ashtavinayak Taxi Service",
            description: "Virendra Cab offers Pune to Ashtavinayak taxi services for individuals, families, and groups looking for planned transportation across multiple temple destinations."
        },
        {
            name: "Cab From Pune To Ashtavinayak",
            description: "A cab from Pune to Ashtavinayak allows devotees to travel directly toward the pilgrimage circuit while arranging pickup and return requirements according to their planned darshan schedule."
        },
        {
            name: "Taxi From Pune To Ashtavinayak",
            description: "Travellers can arrange a private taxi from Pune to Ashtavinayak for family pilgrimage trips, group darshan programs, and customized journeys covering selected or multiple temples."
        },
        {
            name: "Pune To Ashtavinayak Car Rental",
            description: "Pune to Ashtavinayak car rental services are useful for devotees who want a dedicated vehicle throughout their pilgrimage rather than relying on separate transportation between temple locations."
        },
        {
            name: "Pune To Ashtavinayak Cab Booking",
            description: "Advance Pune to Ashtavinayak cab booking allows travellers to share their preferred travel date, pickup location, vehicle requirement, passenger count, and planned pilgrimage duration."
        },
        {
            name: "Pune To Ashtavinayak Taxi Booking Online",
            description: "Travellers looking for online taxi booking for an Ashtavinayak journey from Pune can plan their transportation in advance by providing the required pickup, travel date, and vehicle details."
        },
        {
            name: "Pune To Ashtavinayak Cab Fare",
            description: "Ashtavinayak cab fare from Pune can depend on the selected vehicle, trip duration, route, number of temples covered, and whether the journey is planned as a one-day or multi-day pilgrimage."
        },
        {
            name: "Pune To Ashtavinayak Taxi Charges",
            description: "Customers comparing Pune to Ashtavinayak taxi charges can discuss their complete itinerary and vehicle requirement to determine an arrangement appropriate for their pilgrimage schedule."
        },
        {
            name: "Pune To Ashtavinayak Cab Price",
            description: "The Pune to Ashtavinayak cab price can vary according to vehicle category, travel duration, distance, number of passengers, and the temples included in the planned route."
        },
        {
            name: "Best Pune To Ashtavinayak Cab Service",
            description: "Travellers searching for a suitable Pune to Ashtavinayak cab service can choose an arrangement based on vehicle comfort, group size, route requirements, trip duration, and planned darshan schedule."
        },
        {
            name: "Cheap Pune To Ashtavinayak Cab",
            description: "Devotees comparing economical Pune to Ashtavinayak cab options can discuss vehicle categories and itinerary requirements with Virendra Cab to select a practical arrangement for their budget."
        },
        {
            name: "Pune To Ashtavinayak One Day Cab",
            description: "A one-day Pune to Ashtavinayak cab is designed for travellers working with a limited schedule who want to cover multiple temples through a carefully organized route and travel plan."
        },
        {
            name: "Pune To Ashtavinayak Two Day Cab",
            description: "A two-day Ashtavinayak cab journey from Pune gives devotees more flexibility to distribute temple visits across the itinerary and maintain a comfortable pace during the pilgrimage."
        },
        {
            name: "Pune To Ashtavinayak Outstation Cab",
            description: "The Pune to Ashtavinayak outstation cab option is suitable for devotees planning an extended pilgrimage involving multiple destinations, overnight stays, and return travel to Pune."
        },
        {
            name: "Pune To Ashtavinayak Innova Cab",
            description: "An Innova cab from Pune to Ashtavinayak is a practical choice for families and groups who prefer spacious seating and convenient luggage capacity during a multi-temple pilgrimage."
        },
        {
            name: "Pune To Ashtavinayak Ertiga Cab",
            description: "The Ertiga cab option from Pune to Ashtavinayak provides comfortable group transportation for devotees travelling together for temple darshan and extended road journeys."
        },
        {
            name: "Pune To Ashtavinayak Sedan Cab",
            description: "A sedan cab from Pune to Ashtavinayak can be suitable for smaller groups or families seeking a comfortable private vehicle for a planned pilgrimage route."
        },
        {
            name: "Pune To Ashtavinayak SUV Taxi",
            description: "An SUV taxi from Pune to Ashtavinayak provides a useful option for travellers who prefer a spacious vehicle for passengers, luggage, and longer road journeys between temple destinations."
        },
        {
            name: "Pune To Ashtavinayak AC Cab",
            description: "An AC cab from Pune to Ashtavinayak offers a comfortable travel environment for devotees spending extended hours on the road while visiting several pilgrimage destinations."
        },
        {
            name: "Pune To Ashtavinayak Tempo Traveller",
            description: "A tempo traveller from Pune to Ashtavinayak is suitable for larger families, religious groups, and tour groups requiring shared transportation throughout a multi-temple pilgrimage."
        },
        {
            name: "Pune Airport To Ashtavinayak Cab",
            description: "Devotees arriving at Pune Airport can arrange a direct cab toward the Ashtavinayak circuit, making it convenient to begin the pilgrimage without arranging separate local transportation."
        },
        {
            name: "Hinjewadi To Ashtavinayak Taxi",
            description: "A taxi from Hinjewadi to Ashtavinayak is convenient for IT professionals, families, and groups residing in western Pune who want to begin their pilgrimage directly from their local area."
        },
        {
            name: "Wakad To Ashtavinayak Cab",
            description: "Travellers from Wakad can arrange an Ashtavinayak cab for family pilgrimage trips, group darshan, and customized one-day or multi-day temple itineraries."
        },
        {
            name: "Hadapsar To Ashtavinayak Taxi",
            description: "A taxi from Hadapsar to Ashtavinayak provides a convenient starting option for devotees in eastern Pune planning a private pilgrimage covering multiple temples."
        },
        {
            name: "Pimpri Chinchwad To Ashtavinayak Cab",
            description: "Devotees from Pimpri Chinchwad can arrange a cab to the Ashtavinayak circuit with suitable vehicle choices for families, groups, and longer pilgrimage schedules."
        },
        {
            name: "Pune To Ashtavinayak Cab Near Me",
            description: "Customers searching for a Pune to Ashtavinayak cab near their location can enquire about convenient pickup arrangements based on their locality, travel date, group size, and preferred vehicle."
        }
    ],

    tableData: [
        ["Ashtavinayak Darshan Cab Pune"],
        ["Car Rental For Ashtavinayak From Pune"],
        ["Cost Of Ashtavinayak Yatra Tour By Car From Pune"],
        ["Pune To Ashtavinayak Cabs"],
        ["Pune To Ashtavinayak Cab Service"],
        ["Pune To Ashtavinayak Taxi"],
        ["Pune To Ashtavinayak Taxi Service"],
        ["Cab From Pune To Ashtavinayak"],
        ["Taxi From Pune To Ashtavinayak"],
        ["Pune To Ashtavinayak Car Rental"],
        ["Pune To Ashtavinayak Cab Booking"],
        ["Pune To Ashtavinayak Taxi Booking Online"],
        ["Pune To Ashtavinayak Cab Fare"],
        ["Pune To Ashtavinayak Taxi Charges"],
        ["Pune To Ashtavinayak Cab Price"],
        ["Best Pune To Ashtavinayak Cab Service"],
        ["Cheap Pune To Ashtavinayak Cab"],
        ["Pune To Ashtavinayak One Day Cab"],
        ["Pune To Ashtavinayak Two Day Cab"],
        ["Pune To Ashtavinayak Outstation Cab"],
        ["Pune To Ashtavinayak Innova Cab"],
        ["Pune To Ashtavinayak Ertiga Cab"],
        ["Pune To Ashtavinayak Sedan Cab"],
        ["Pune To Ashtavinayak SUV Taxi"],
        ["Pune To Ashtavinayak AC Cab"],
        ["Pune To Ashtavinayak Tempo Traveller"],
        ["Pune Airport To Ashtavinayak Cab"],
        ["Hinjewadi To Ashtavinayak Taxi"],
        ["Wakad To Ashtavinayak Cab"],
        ["Hadapsar To Ashtavinayak Taxi"],
        ["Pimpri Chinchwad To Ashtavinayak Cab"],
        ["Pune To Ashtavinayak Cab Near Me"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Complete Pilgrimage Planning",
            WhyChoosedescription: "Virendra Cab can support devotees planning a structured Ashtavinayak pilgrimage with transportation arranged around the temples, travel duration, preferred route, and return schedule."
        },
        {
            WhyChooseheading: "One Day And Two Day Options",
            WhyChoosedescription: "Travellers can plan their journey according to available time, whether they prefer an intensive one-day itinerary or a more relaxed two-day pilgrimage covering multiple temple destinations."
        },
        {
            WhyChooseheading: "Multiple Vehicle Choices",
            WhyChoosedescription: "Different vehicle categories such as sedan, Ertiga, Innova, SUV, AC cab, and tempo traveller can be considered according to passenger count, luggage, and group requirements."
        },
        {
            WhyChooseheading: "Convenient Pune Pickup",
            WhyChoosedescription: "Pickup arrangements can be planned from Pune Airport, Hinjewadi, Wakad, Hadapsar, Pimpri Chinchwad, and other convenient areas so devotees can begin their pilgrimage without unnecessary local transfers."
        },
        {
            WhyChooseheading: "Suitable For Families And Groups",
            WhyChoosedescription: "Families, friends, senior citizens, and religious groups can select a vehicle that provides appropriate seating and luggage space for travelling together throughout the pilgrimage."
        },
        {
            WhyChooseheading: "Flexible Temple Itinerary",
            WhyChoosedescription: "The travel plan can be organized around selected temples or a broader Ashtavinayak circuit, giving devotees flexibility to plan darshan stops according to their schedule."
        },
        {
            WhyChooseheading: "Comfortable Long Distance Travel",
            WhyChoosedescription: "An appropriately selected cab provides a convenient travel environment for devotees spending several hours on the road between different Ashtavinayak temple locations."
        },
        {
            WhyChooseheading: "Advance Booking Convenience",
            WhyChoosedescription: "Providing the travel date, pickup location, number of passengers, preferred vehicle, and planned duration in advance helps streamline the cab arrangement for the pilgrimage."
        }
    ]
};




const faqData = [
    {
        question: "Can I book Pune to Ashtavinayak Cabs with Virendra Cab?",
        answer: "Virendra Cab can arrange private cab travel from Pune for Ashtavinayak temple visits, with the itinerary planned according to the number of devotees, travel date, preferred vehicle, pickup location, and selected temples."
    },
    {
        question: "Can I cover all Ashtavinayak temples by cab from Pune?",
        answer: "Devotees can discuss a multi-temple Ashtavinayak journey covering the traditional eight temples. The route, temple sequence, travel duration, and return plan can be considered while preparing the cab itinerary."
    },
    {
        question: "Is a private cab suitable for an Ashtavinayak Darshan trip?",
        answer: "A private cab can provide direct transportation between the temples and allow the group to plan departures around darshan requirements. Vehicle selection can be discussed according to the number of passengers and luggage."
    },
    {
        question: "Can I book a one-day Pune to Ashtavinayak cab trip?",
        answer: "Travellers can enquire about a same-day Ashtavinayak itinerary, although the feasibility depends on the number of temples selected, departure time, traffic, darshan duration, and overall route. A practical schedule can be discussed before booking."
    },
    {
        question: "Which Ashtavinayak temples can I visit from Pune by cab?",
        answer: "The journey can be planned around temples such as Mayureshwar at Morgaon, Siddhivinayak at Siddhatek, Ballaleshwar at Pali, Varadvinayak at Mahad, Chintamani at Theur, Girijatmaj at Lenyadri, Vighneshwar at Ozar, and Mahaganapati at Ranjangaon."
    },
    {
        question: "What type of cab is suitable for Ashtavinayak Darshan from Pune?",
        answer: "Vehicle choice depends on the number of devotees, luggage, journey duration, and comfort preference. Virendra Cab can discuss suitable cab categories for couples, families, or larger pilgrimage groups."
    },
    {
        question: "Can senior citizens travel for Ashtavinayak Darshan by private cab?",
        answer: "Families travelling with senior citizens can enquire about private cab transportation so that the temple itinerary can be planned around their preferred pace, rest requirements, pickup location, and travel comfort."
    },
    {
        question: "Can I start the Ashtavinayak cab journey from my Pune location?",
        answer: "Pickup arrangements can be discussed from different Pune areas including Kothrud, Baner, Wakad, Hinjewadi, Hadapsar, Viman Nagar, Pimpri-Chinchwad, and other suitable locations depending on the travel plan."
    },
    {
        question: "Can I book a multi-day cab for Ashtavinayak Darshan?",
        answer: "Devotees who prefer a relaxed pilgrimage schedule can enquire about a multi-day private cab arrangement. Overnight stays, temple sequence, sightseeing requirements, and the return journey can be considered while planning the itinerary."
    },
    {
        question: "What details are required to book Pune to Ashtavinayak Cabs?",
        answer: "Passengers can provide their Pune pickup address, preferred travel date, number of devotees, selected temples or complete Ashtavinayak itinerary, expected duration, luggage details, and preferred vehicle type when making an enquiry."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Dinesh Shinde",
        feedback: "Our family planned an Ashtavinayak pilgrimage from Pune with elderly members, so having a private cab was important for managing the temple schedule comfortably. Virendra Cab coordinated the travel requirements around our group and planned itinerary.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Vaishnavi Deshpande",
        feedback: "A group of devotees wanted to visit several Ashtavinayak temples without depending on different transport options. The cab arrangement through Virendra Cab gave us a convenient way to follow our planned pilgrimage route from Pune.",
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
  "name": "Pune to Ashtavinayak Cabs",
  "image": "https://www.virendracabs.com/assets/images/pune-to-ashtavinayak-cabs.webp",
  "description": "Pune to Ashtavinayak Cabs provide a convenient private travel option for devotees and families planning the traditional Ashtavinayak pilgrimage from Pune. Virendra Cab offers cab booking support for travelers searching for Ashtavinayak Darshan Cab Pune, Car Rental for Ashtavinayak from Pune and Pune to Ashtavinayak Cabs. A private vehicle can make it easier to organize the pilgrimage schedule, temple visits, pickup points, travel breaks and return journey according to the group's preferred itinerary. Travelers comparing the Cost of Ashtavinayak Yatra Tour by Car from Pune can contact Virendra Cab for current fare details based on the selected vehicle, trip duration, route and passenger requirements rather than relying on a fixed assumed price. Pune to Ashtavinayak Cab Service is suitable for families, senior citizens, groups of devotees and travelers who prefer dedicated transportation for a multi-temple religious journey. Passengers looking for Pune to Ashtavinayak Taxi can enquire about suitable vehicle options according to group size and luggage requirements. Advance booking allows devotees to plan their departure and pilgrimage route more comfortably while keeping transportation arrangements organized throughout the yatra.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.virendracabs.com/pune-to-ashtavinayak-cabs"
  }
};








    return (
        <div>

<Helmet>
  <title>
    Pune to Ashtavinayak Cabs | Ashtavinayak Darshan Cab Pune | +91 9022549022
  </title>

  <meta
    name="description"
    content="Book Pune to Ashtavinayak Cabs for a comfortable pilgrimage journey. Enquire about Ashtavinayak Darshan Cab Pune, car rental, taxi service and Ashtavinayak Yatra tour costs with Virendra Cab."
  />

  <meta
    name="keywords"
    content="Pune to Ashtavinayak Cabs, Ashtavinayak Darshan Cab Pune, Car Rental for Ashtavinayak from Pune, Cost of Ashtavinayak Yatra Tour by Car from Pune, Pune to Ashtavinayak Cab Service, Pune to Ashtavinayak Taxi, Pune to Ashtavinayak Cab, Pune Ashtavinayak Cab Booking, Ashtavinayak Yatra Cab Pune, Ashtavinayak Tour Package from Pune, Ashtavinayak Taxi Service Pune, Ashtavinayak Car Rental Pune, Ashtavinayak Darshan Taxi Pune, Ashtavinayak Yatra by Car from Pune, Pune Ashtavinayak Tour Cab, Pune to Ashtavinayak One Way Cab, Pune to Ashtavinayak Outstation Cab, Ashtavinayak Cab from Pune"
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
                            <img src='/images/keyword/16.jpg' alt='img' className='img-fluid' />
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

export default Punetoashtavinayakcabs;