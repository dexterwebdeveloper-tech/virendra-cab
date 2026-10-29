import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Punetodhulecabs() {



const cardData = {
    keyword: "Pune to Dhule Cab",
    headingDescription: "Travel comfortably from Pune to Dhule with Virendra Cab through a convenient private outstation taxi service designed for business trips, family visits, personal travel and onward journeys across North Maharashtra. Whether you need a direct one-way cab, round-trip taxi or a vehicle for a customized itinerary, you can select from sedan, Ertiga, Innova, Innova Crysta and SUV options according to passenger count, luggage and comfort requirements. Pickup can also be arranged from Pune Airport, Hinjewadi, Wakad, Hadapsar, Pimpri-Chinchwad and other convenient locations for a smoother intercity journey.",
    
    topPlaces: [
        {
            title: "Dhule City",
            description: "Explore Dhule's important city areas, local markets and nearby attractions with convenient private transportation arranged around your travel schedule."
        },
        {
            title: "Shirpur",
            description: "Plan a comfortable journey to Shirpur for family visits, business requirements or local sightseeing with a cab suitable for your group size."
        },
        {
            title: "Sakri",
            description: "Sakri can be included in a North Maharashtra travel itinerary for personal, business or regional travel with flexible private cab transportation."
        },
        {
            title: "Sindkheda",
            description: "Travel conveniently to Sindkheda as part of your intercity journey with a private vehicle selected according to passenger and luggage requirements."
        },
        {
            title: "Songir Fort",
            description: "Visit the historic Songir Fort near Dhule and include this heritage location in a customized sightseeing itinerary around the region."
        },
        {
            title: "Thalner Fort",
            description: "Discover Thalner Fort and its historical surroundings while travelling through the Dhule region with a private cab arranged for comfortable local exploration."
        },
        {
            title: "Laling Fort",
            description: "Laling Fort provides an interesting heritage stop near Dhule and can be included in a customized road-trip or sightseeing plan."
        },
        {
            title: "Aner Dam",
            description: "Aner Dam is a useful nature-focused stop for travellers exploring the Dhule region and can be incorporated into a flexible family or weekend itinerary."
        },
        {
            title: "Shirpur Temple Circuit",
            description: "Travellers visiting Shirpur for religious purposes can plan convenient private transportation between temples and other nearby destinations."
        },
        {
            title: "Nandurbar",
            description: "Nandurbar can be added to a broader North Maharashtra road trip from Dhule, making a private cab useful for families, business travellers and regional sightseeing."
        }
    ],

    services: [
        {
            name: "Pune To Dhule Cab",
            description: "Virendra Cab provides private Pune to Dhule cab service for travellers seeking comfortable intercity transportation. Vehicle selection can be based on passenger count, luggage, travel purpose and preferred level of comfort."
        },
        {
            name: "Pune To Dhule Taxi",
            description: "A Pune to Dhule taxi offers convenient point-to-point transportation for business travellers, families and individuals travelling between the two cities. The journey can be arranged around the customer's preferred departure schedule."
        },
        {
            name: "Pune To Dhule Cab Service",
            description: "Pune to Dhule cab service is suitable for planned outstation travel, family visits, business journeys and regional travel. Travellers can choose an appropriate vehicle according to their group size and luggage requirements."
        },
        {
            name: "Pune To Dhule Taxi Service",
            description: "The Pune to Dhule taxi service provides a private alternative for passengers who prefer direct road transportation. One-way and return travel arrangements can be planned according to the complete itinerary."
        },
        {
            name: "Cab From Pune To Dhule",
            description: "A cab from Pune to Dhule provides a practical solution for long-distance road travel without the need to coordinate multiple local transport options. Sedan and larger vehicles are available for different passenger requirements."
        },
        {
            name: "Taxi From Pune To Dhule",
            description: "Travellers can arrange a private taxi from Pune to Dhule for work, family commitments, personal visits or onward travel. Pickup timing and vehicle category can be planned according to the journey requirements."
        },
        {
            name: "Pune To Dhule Outstation Cab",
            description: "Pune to Dhule outstation cab service is designed for intercity travel and can accommodate both one-way and round-trip plans. The vehicle can be selected according to passenger capacity, luggage and overall comfort needs."
        },
        {
            name: "Pune To Dhule Car Rental",
            description: "Pune to Dhule car rental provides a convenient private travel option for passengers who want dedicated transportation for their intercity journey. Different vehicle categories can be considered based on group size and travel duration."
        },
        {
            name: "Dhule To Pune Cab",
            description: "A Dhule to Pune cab provides convenient return-direction transportation for passengers travelling back to Pune for work, family requirements, appointments or onward connections."
        },
        {
            name: "Pune To Dhule Taxi",
            description: "Pune to Dhule taxi service offers private road transportation with vehicle options suited to different passenger groups. It can be used for direct travel as well as planned return journeys."
        },
        {
            name: "Pune To Dhule Cab Booking",
            description: "Pune to Dhule cab booking allows travellers to arrange their vehicle before departure and plan the journey around their preferred pickup time. Vehicle selection can be matched with passenger count and luggage."
        },
        {
            name: "Pune To Dhule Taxi Booking Online",
            description: "Online taxi booking for Pune to Dhule makes it easier to arrange an outstation journey in advance. Travellers can provide their travel details and select a suitable vehicle category for the trip."
        },
        {
            name: "Pune To Dhule Cab Fare",
            description: "Pune to Dhule cab fare can vary according to the selected vehicle, journey format, distance and travel requirements. Sharing complete trip details helps travellers identify an option suited to their planned journey."
        },
        {
            name: "Pune To Dhule Taxi Fare",
            description: "The Pune to Dhule taxi fare depends on factors such as vehicle category, one-way or round-trip travel and the overall booking requirements. Travellers can choose a suitable arrangement after discussing their itinerary."
        },
        {
            name: "Pune To Dhule Cab Price",
            description: "Pune to Dhule cab price is influenced by the vehicle type, journey format and travel requirements. Customers can compare suitable options based on their passenger count, luggage and preferred comfort level."
        },
        {
            name: "Pune To Dhule Taxi Charges",
            description: "Pune to Dhule taxi charges may differ according to the selected vehicle and travel arrangement. Providing the complete route and booking requirement helps determine the applicable cost for the journey."
        },
        {
            name: "Best Pune To Dhule Cab Service",
            description: "Travellers comparing the best Pune to Dhule cab service can consider vehicle comfort, passenger capacity, pickup convenience, travel flexibility and suitability for one-way or round-trip journeys."
        },
        {
            name: "Cheap Pune To Dhule Cab",
            description: "Those searching for a cheap Pune to Dhule cab can compare different vehicle categories and journey formats to find a practical option that fits their budget while meeting basic comfort and luggage requirements."
        },
        {
            name: "Pune To Dhule One Way Cab",
            description: "A Pune to Dhule one way cab is useful for travellers who need a direct drop and do not require a return journey in the same booking. It can suit business travel, relocation and personal visits."
        },
        {
            name: "Pune To Dhule Round Trip Taxi",
            description: "Pune to Dhule round trip taxi service is convenient for passengers who plan to return to Pune after completing their work, family visit or other activities in Dhule."
        },
        {
            name: "Pune To Dhule Innova Cab",
            description: "The Pune to Dhule Innova cab is suitable for families and small groups looking for additional seating and luggage capacity during a long-distance road journey."
        },
        {
            name: "Pune To Dhule Innova Crysta Cab",
            description: "Pune to Dhule Innova Crysta cab service provides a spacious and premium option for travellers who prefer enhanced comfort during an extended intercity road trip."
        },
        {
            name: "Pune To Dhule Ertiga Cab",
            description: "An Ertiga cab from Pune to Dhule is a practical choice for families and small groups seeking comfortable seating and useful luggage space without selecting a larger SUV."
        },
        {
            name: "Pune To Dhule Sedan Cab",
            description: "Pune to Dhule sedan cab service works well for couples, small families and business travellers who prefer a private and comfortable vehicle for their intercity journey."
        },
        {
            name: "Pune To Dhule SUV Taxi",
            description: "Pune to Dhule SUV taxi service offers additional space for passengers and luggage, making it suitable for families, groups and travellers planning a longer road journey."
        },
        {
            name: "Pune To Dhule AC Cab",
            description: "An air-conditioned Pune to Dhule cab provides a more comfortable travel environment during the intercity journey and is suitable for families, professionals and passengers carrying luggage."
        },
        {
            name: "Pune Airport To Dhule Cab",
            description: "Pune Airport to Dhule cab service provides direct airport-to-destination transportation for passengers arriving in Pune and continuing their journey towards Dhule without arranging separate local transfers."
        },
        {
            name: "Hinjewadi To Dhule Taxi",
            description: "Hinjewadi to Dhule taxi service is convenient for IT professionals, families and residents who need a direct intercity journey from the Hinjewadi area to Dhule."
        },
        {
            name: "Wakad To Dhule Cab",
            description: "A Wakad to Dhule cab provides convenient pickup from the western Pune area for travellers heading to Dhule for business, family visits or personal travel."
        },
        {
            name: "Hadapsar To Dhule Taxi",
            description: "Hadapsar to Dhule taxi service gives passengers a convenient option for starting their North Maharashtra journey directly from Hadapsar without requiring a separate transfer to another pickup point."
        },
        {
            name: "Pimpri Chinchwad To Dhule Cab",
            description: "Pimpri Chinchwad to Dhule cab service provides private transportation for residents, families and business travellers who want a direct road journey from the PCMC region to Dhule."
        },
        {
            name: "Pune To Sakri Cab Booking",
            description: "Pune to Sakri cab booking allows travellers to arrange private transportation to Sakri for family visits, business requirements or regional travel. Vehicle selection can be based on passenger count and luggage."
        },
        {
            name: "Pune To Sindkheda Cab",
            description: "A Pune to Sindkheda cab provides convenient intercity transportation for travellers heading to Sindkheda for personal, business or family-related purposes, with suitable vehicle options for different groups."
        },
        {
            name: "Pune To Shirpur Cab",
            description: "Pune to Shirpur cab service offers a private travel option for passengers travelling to Shirpur for work, family visits, education, religious purposes or other regional requirements."
        }
    ],

    tableData: [
        ["Pune To Dhule Cab"],
        ["Pune To Dhule Taxi"],
        ["Pune To Dhule Cab Service"],
        ["Pune To Dhule Taxi Service"],
        ["Cab From Pune To Dhule"],
        ["Taxi From Pune To Dhule"],
        ["Pune To Dhule Outstation Cab"],
        ["Pune To Dhule Car Rental"],
        ["Dhule To Pune Cab"],
        ["Pune To Dhule Taxi"],
        ["Pune To Dhule Cab Booking"],
        ["Pune To Dhule Taxi Booking Online"],
        ["Pune To Dhule Cab Fare"],
        ["Pune To Dhule Taxi Fare"],
        ["Pune To Dhule Cab Price"],
        ["Pune To Dhule Taxi Charges"],
        ["Best Pune To Dhule Cab Service"],
        ["Cheap Pune To Dhule Cab"],
        ["Pune To Dhule One Way Cab"],
        ["Pune To Dhule Round Trip Taxi"],
        ["Pune To Dhule Innova Cab"],
        ["Pune To Dhule Innova Crysta Cab"],
        ["Pune To Dhule Ertiga Cab"],
        ["Pune To Dhule Sedan Cab"],
        ["Pune To Dhule SUV Taxi"],
        ["Pune To Dhule AC Cab"],
        ["Pune Airport To Dhule Cab"],
        ["Hinjewadi To Dhule Taxi"],
        ["Wakad To Dhule Cab"],
        ["Hadapsar To Dhule Taxi"],
        ["Pimpri Chinchwad To Dhule Cab"],
        ["Pune To Sakri Cab Booking"],
        ["Pune To Sindkheda Cab"],
        ["Pune To Shirpur Cab"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Comfortable Pune To Dhule Travel",
            WhyChoosedescription: "A private cab makes the Pune to Dhule journey more convenient by providing direct road transportation without the need to coordinate multiple connections. Virendra Cab offers different vehicle categories to match passenger count, luggage and comfort requirements."
        },
        {
            WhyChooseheading: "Flexible One-Way And Return Trips",
            WhyChoosedescription: "Travellers can choose between one-way and round-trip arrangements depending on the purpose of their journey. This flexibility is useful for business visits, family commitments, personal travel and planned return journeys."
        },
        {
            WhyChooseheading: "Multiple Vehicle Categories",
            WhyChoosedescription: "Sedan, Ertiga, Innova, Innova Crysta and SUV options provide practical choices for different group sizes. Passengers can select a vehicle based on seating capacity, luggage requirements and preferred travel comfort."
        },
        {
            WhyChooseheading: "Convenient Pune Pickup Locations",
            WhyChoosedescription: "The service can support travel requirements from different parts of Pune, including Pune Airport, Hinjewadi, Wakad, Hadapsar and Pimpri-Chinchwad. This helps passengers arrange transportation closer to their preferred starting point."
        },
        {
            WhyChooseheading: "Suitable For Business Travel",
            WhyChoosedescription: "Professionals travelling between Pune and Dhule can use private taxi transportation for meetings, site visits, work commitments and other business requirements. Flexible departure planning can make the journey easier to coordinate with a work schedule."
        },
        {
            WhyChooseheading: "Family-Friendly Cab Options",
            WhyChoosedescription: "Families can select a spacious vehicle according to the number of passengers and luggage they are carrying. Private travel also provides greater flexibility for breaks and timing during the intercity journey."
        },
        {
            WhyChooseheading: "Regional Travel Beyond Dhule",
            WhyChoosedescription: "The service can also support journeys towards Sakri, Sindkheda, Shirpur and other destinations around North Maharashtra. This makes the cab useful for travellers combining multiple stops within a broader regional itinerary."
        },
        {
            WhyChooseheading: "Planned Outstation Transportation",
            WhyChoosedescription: "Advance cab booking helps travellers organize their vehicle, pickup location and journey format before departure. Whether the requirement is a direct Dhule drop or a return trip, the travel arrangement can be planned around the customer's schedule."
        }
    ]
};

const faqData = [
    {
        question: "How can I book a Pune to Dhule Cab with Virendra Cab?",
        answer: "Booking a Pune to Dhule Cab is convenient when you share your travel date, Pune pickup location, passenger count, luggage details, and preferred vehicle with Virendra Cab. The trip can be arranged as a one-way transfer, return journey, or travel plan with additional stops."
    },
    {
        question: "Is one-way cab service available from Pune to Dhule?",
        answer: "Passengers travelling to Dhule without a planned return journey can choose a one-way cab. This arrangement can be useful for personal visits, work-related travel, relocation, or other situations where you need direct transportation from Pune."
    },
    {
        question: "Can I reserve a round-trip taxi from Pune to Dhule?",
        answer: "A round-trip taxi is suitable when your travel plans include returning to Pune after completing your work or visit in Dhule. The return date and timing can be discussed while arranging the complete itinerary with Virendra Cab."
    },
    {
        question: "Which cars can be booked for Pune to Dhule travel?",
        answer: "The appropriate cab depends on the number of passengers and luggage you plan to carry. Smaller groups may prefer a sedan, while families or groups requiring more cabin and luggage space can consider vehicles such as Ertiga or Innova Crysta."
    },
    {
        question: "Can I hire a Pune to Dhule Cab for business purposes?",
        answer: "A private cab can be useful for business meetings, industrial visits, client appointments, and professional travel in Dhule. With a dedicated vehicle, travellers can also plan multiple stops around their work schedule instead of depending on fixed public transport timings."
    },
    {
        question: "Is Pune to Dhule taxi service suitable for family travel?",
        answer: "Families can choose a private cab when they want to travel together with their luggage and maintain a flexible schedule. Vehicle selection can be based on family size, luggage requirements, and whether additional stops are needed along the route."
    },
    {
        question: "Can I visit places around Dhule after reaching by cab?",
        answer: "Yes, the cab itinerary can include local travel if you want to explore destinations around Dhule after reaching the city. Depending on your available time, the journey can be planned around local attractions, temples, historical sites, or nearby areas of interest."
    },
    {
        question: "Can Virendra Cab provide pickup from my Pune location for Dhule travel?",
        answer: "Pickup can be planned according to the Pune locality you provide during booking. Sharing the complete pickup address or area, departure preference, and passenger details in advance helps in arranging the journey according to your schedule."
    },
    {
        question: "How much luggage can I carry in a Pune to Dhule Cab?",
        answer: "The luggage capacity varies with the selected vehicle and number of passengers. Travellers carrying multiple suitcases or larger bags should mention their luggage requirements during booking so a vehicle with suitable space can be considered."
    },
    {
        question: "How early should I book a Pune to Dhule Cab?",
        answer: "Reserving your cab ahead of the travel date is helpful, particularly for weekend journeys, holidays, and planned family trips. Providing the date, pickup point, passenger count, and vehicle preference early allows the travel arrangements to be organized more smoothly."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Mahesh Pawar",
        feedback: "A business visit required me to travel from Pune to Dhule with some equipment and luggage. Having a private cab made the long journey much easier because I could manage my schedule without depending on bus timings. The vehicle was comfortable and the overall experience with Virendra Cab was satisfactory.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Kavita Chavan",
        feedback: "We selected a cab for our family trip from Pune to Dhule because we wanted a direct and comfortable journey. The booking was handled smoothly, and there was sufficient space for everyone and our bags. Being able to travel at our own pace made the trip more convenient.",
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
  "name": "Pune to Dhule Cab",
  "image": "https://www.virendracabs.com/assets/images/pune-to-dhule-cab.webp",
  "description": "Pune to Dhule Cab provides a convenient private transportation option for passengers traveling between Pune and Dhule. Virendra Cab offers cab and taxi booking support for customers searching for Pune to Dhule Cab, Pune to Dhule Taxi, Pune to Dhule Cab Service and Pune to Dhule Taxi Service. A dedicated private cab can be arranged for families, business travelers, students, medical visits, personal journeys and other long-distance transportation requirements. Cab from Pune to Dhule and Taxi from Pune to Dhule can be booked according to the preferred pickup point, travel date, departure time and destination. Pune to Dhule Outstation Cab is suitable for passengers who need a comfortable intercity vehicle for one-way or round-trip travel. Customers can enquire about sedan, SUV and other suitable vehicle categories according to passenger count, luggage and comfort preferences. One-way cab service is useful when the vehicle is required only for the journey from Pune to Dhule, while round-trip arrangements can be planned when passengers need the same cab for their return journey. The route can also be used for business visits, family travel, relocation requirements and other planned intercity trips. Current Pune to Dhule cab and taxi fares depend on the vehicle category, distance, route, travel date, trip duration and one-way or round-trip requirements, so customers can contact Virendra Cab for the latest fare details. Advance booking helps coordinate vehicle availability, pickup location, departure timing and travel requirements for a smoother Pune to Dhule journey.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.virendracabs.com/pune-to-dhule-cab"
  }
};



    return (
        <div>

<Helmet>
  <title>
    Pune to Dhule Cab | Pune to Dhule Taxi Service | +91 9022549022
  </title>

  <meta
    name="description"
    content="Book Pune to Dhule Cab for private, one-way and round-trip travel. Get reliable Dhule taxi and outstation cab options from Pune with Virendra Cab."
  />

  <meta
    name="keywords"
    content="Pune to Dhule Cab, Pune to Dhule Taxi, Pune to Dhule Cab Service, Pune to Dhule Taxi Service, Cab from Pune to Dhule, Taxi from Pune to Dhule, Pune to Dhule Outstation Cab, Pune to Dhule Outstation Taxi, Pune to Dhule Cab Booking, Pune to Dhule Taxi Booking, Pune to Dhule One Way Cab, Pune to Dhule One Way Taxi, Pune to Dhule Round Trip Cab, Pune to Dhule Round Trip Taxi, Pune to Dhule Private Cab, Pune to Dhule Car Rental, Pune to Dhule Cab Fare, Pune to Dhule Taxi Fare, Pune Dhule Cab, Pune Dhule Taxi, Dhule Cab from Pune, Dhule Taxi from Pune, Dhule to Pune Cab, Dhule to Pune Taxi, Dhule to Pune Cab Service, Dhule to Pune Taxi Service, Dhule to Pune Cab Booking, Dhule to Pune Taxi Booking, Pune Dhule Car Rental, Pune Dhule Taxi Booking, Pune Dhule Private Cab, Pune Dhule Travel Cab, Pune Dhule Family Cab, Pune Dhule Business Cab, Pune Dhule Tourist Cab, Pune to Dhule Long Distance Cab, Pune to Dhule Intercity Taxi, Pune to Dhule Travel Taxi"
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
                            <img src='/images/keyword/66.jpg' alt='img' className='img-fluid' />
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

export default Punetodhulecabs ;