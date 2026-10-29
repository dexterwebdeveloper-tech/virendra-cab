import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Punetolonavalacabsedan() {



const cardData = {
    keyword: "Pune to Lonavala Sedan Cabs",
    headingDescription: "Pune to Lonavala Sedan Cabs provide a comfortable and private travel option for weekend trips, family outings, couple journeys, sightseeing plans and one-day tours. Virendra Cab offers sedan cab arrangements from Pune to Lonavala with options suited to one-way travel, round trips, sightseeing packages, holiday plans and customized itineraries, making it convenient to explore Lonavala and nearby attractions at a flexible pace.",
    topPlaces: [
        {
            title: "Bhushi Dam",
            description: "Bhushi Dam is a popular Lonavala stop during seasonal trips, offering a scenic setting where travellers can enjoy the surrounding hills and plan a convenient sightseeing break."
        },
        {
            title: "Tiger Point",
            description: "Tiger Point provides expansive views of the Sahyadri landscape and is a popular destination for visitors planning a scenic Lonavala road trip from Pune."
        },
        {
            title: "Rajmachi Fort",
            description: "Rajmachi Fort is a historic destination surrounded by the Western Ghats and can be included in a longer Lonavala sightseeing itinerary for travellers interested in nature and heritage."
        },
        {
            title: "Karla Caves",
            description: "Karla Caves offer an opportunity to explore ancient Buddhist rock-cut architecture near Lonavala and can be included in a Pune to Lonavala sightseeing route."
        },
        {
            title: "Lohagad Fort",
            description: "Lohagad Fort is a well-known hill fort near Lonavala that suits travellers looking to combine a private sedan journey with scenic landscapes and historical sightseeing."
        },
        {
            title: "Pawna Lake",
            description: "Pawna Lake provides a peaceful outdoor setting surrounded by hills and is suitable for travellers adding nature views and a relaxed stop to their Lonavala itinerary."
        },
        {
            title: "Sunil's Wax Museum",
            description: "Sunil's Wax Museum offers a family-friendly sightseeing stop in Lonavala and can be incorporated into a planned one-day cab tour from Pune."
        },
        {
            title: "Kune Waterfalls",
            description: "Kune Waterfalls is a scenic attraction surrounded by greenery and hills, making it a suitable addition to a monsoon or nature-focused Lonavala sightseeing plan."
        }
    ],
    services: [
        {
            name: "Lonavala Sedan Cab from Pune",
            description: "Lonavala sedan cab from Pune provides private and comfortable transportation for travellers planning a direct journey to Lonavala. The service is suitable for couples, families and small groups looking for convenient road travel."
        },
        {
            name: "Pune to Lonavala Taxi Fare",
            description: "Travellers comparing Pune to Lonavala taxi fare can select a suitable sedan according to their journey requirements, travel type and itinerary. Fare details can be discussed based on one-way, round-trip or sightseeing needs."
        },
        {
            name: "Pune to Lonavala Tourist Taxi",
            description: "Pune to Lonavala tourist taxi services are useful for sightseeing trips where passengers want private transportation between multiple attractions. The cab can support a planned itinerary with convenient movement throughout the day."
        },
        {
            name: "Pune to Lonavala Weekend Trip Cab",
            description: "A weekend trip cab from Pune to Lonavala is a practical option for travellers planning a short hill-station getaway. Private sedan travel allows couples and families to follow their preferred schedule."
        },
        {
            name: "Pune to Lonavala Outstation Taxi",
            description: "Pune to Lonavala outstation taxi services offer private road transportation for travellers planning a dedicated trip outside Pune. The service can be arranged for one-way travel, return journeys or sightseeing."
        },
        {
            name: "Pune to Lonavala Sedan Car Hire",
            description: "Sedan car hire from Pune to Lonavala is suitable for passengers who prefer a comfortable private vehicle for their journey. It can be used for family outings, couple trips, sightseeing and planned weekend travel."
        },
        {
            name: "Pune to Lonavala Family Tour Cab",
            description: "A family tour cab from Pune to Lonavala provides dedicated transportation for family outings, allowing passengers to travel together comfortably and include sightseeing stops according to their planned itinerary."
        },
        {
            name: "Pune to Lonavala Day Trip Cab",
            description: "Pune to Lonavala day trip cab services are designed for travellers planning a same-day return journey. A private sedan makes it easier to coordinate sightseeing, meal stops and return travel within the planned schedule."
        },
        {
            name: "Pune to Lonavala Budget Cab",
            description: "Travellers looking for a budget cab from Pune to Lonavala can consider a sedan as a practical option for private transportation. The journey can be planned according to the preferred route and travel requirements."
        },
        {
            name: "Pune to Lonavala Cab Tour Package",
            description: "Pune to Lonavala cab tour packages combine private transportation with a planned sightseeing itinerary. Travellers can organize their day around selected attractions while travelling comfortably in a dedicated sedan."
        },
        {
            name: "Pune to Lonavala Tour Package",
            description: "A Pune to Lonavala tour package is suitable for travellers who want to combine transportation and sightseeing into one planned trip. It can be customized for families, couples, friends and weekend travellers."
        },
        {
            name: "Pune to Lonavala Sightseeing Package",
            description: "Pune to Lonavala sightseeing packages help travellers cover selected attractions during their trip without relying on separate local transportation. A private sedan provides convenient movement between planned sightseeing points."
        },
        {
            name: "Pune to Lonavala Cab Package",
            description: "Pune to Lonavala cab packages provide a convenient private travel arrangement for passengers planning a dedicated road trip. The package can be structured around one-way travel, round trips or sightseeing requirements."
        },
        {
            name: "Pune to Lonavala Tourist Package",
            description: "A Pune to Lonavala tourist package is useful for visitors planning a short leisure trip with private transportation. The itinerary can include scenic attractions, family-friendly places and popular sightseeing locations."
        },
        {
            name: "Pune to Lonavala One Day Tour Package",
            description: "The Pune to Lonavala one day tour package is suitable for travellers who want to leave Pune, explore selected attractions and return on the same day. Private sedan travel offers flexibility for the day's schedule."
        },
        {
            name: "Pune to Lonavala Family Tour Package",
            description: "Pune to Lonavala family tour packages provide private transportation for families planning a comfortable day or weekend outing. The itinerary can include sightseeing, nature stops and suitable family-friendly attractions."
        },
        {
            name: "Pune to Lonavala Taxi Package",
            description: "Pune to Lonavala taxi packages offer a structured transportation option for travellers who want their cab journey planned around their selected travel requirements. One-way, return and sightseeing arrangements can be considered."
        },
        {
            name: "Pune to Lonavala Holiday Package",
            description: "A Pune to Lonavala holiday package is suitable for travellers planning a relaxing getaway from Pune. Private sedan transportation makes it convenient to visit scenic locations and maintain a comfortable travel schedule."
        },
        {
            name: "Pune to Lonavala Weekend Tour Package",
            description: "Weekend tour packages from Pune to Lonavala are ideal for short leisure breaks. A private cab allows travellers to plan departure, sightseeing and return travel around their preferred weekend itinerary."
        },
        {
            name: "Pune to Lonavala Darshan Package",
            description: "Pune to Lonavala darshan packages can be arranged for travellers who want to include temples or spiritual stops in their route. Private cab transportation provides convenient movement between selected places during the trip."
        },
        {
            name: "Pune to Lonavala Cab Booking Package",
            description: "Pune to Lonavala cab booking packages make it convenient to arrange private transportation in advance for a planned tour. Travellers can share their journey requirements and select a suitable itinerary for the trip."
        },
        {
            name: "Pune to Lonavala Round Trip Package",
            description: "A Pune to Lonavala round trip package provides private transportation for both onward and return travel. It is useful for day trips, weekend visits and sightseeing plans where passengers want a coordinated return journey."
        },
        {
            name: "Pune to Lonavala Tourist Cab Package",
            description: "Pune to Lonavala tourist cab packages are designed for travellers who want private transportation while visiting multiple attractions. The itinerary can be planned around sightseeing preferences and available travel time."
        },
        {
            name: "Pune to Lonavala Private Tour Package",
            description: "A private tour package from Pune to Lonavala gives travellers dedicated cab transportation without sharing the vehicle with unrelated passengers. It is suitable for couples, families and small groups with customized plans."
        },
        {
            name: "Pune to Lonavala Travel Package",
            description: "Pune to Lonavala travel packages offer a convenient way to organize transportation for a leisure journey. Passengers can plan one-way, round-trip or sightseeing travel based on their preferred itinerary."
        },
        {
            name: "Pune to Lonavala Group Tour Package",
            description: "Group tour packages from Pune to Lonavala are suitable for small groups planning a shared leisure outing. Multiple travel arrangements can be coordinated according to group size, itinerary and transportation requirements."
        },
        {
            name: "Pune to Lonavala AC Cab Package",
            description: "Pune to Lonavala AC cab packages provide a more comfortable travel environment for passengers travelling during warm weather. The private sedan can be arranged for sightseeing, day trips and round-trip journeys."
        },
        {
            name: "Pune to Lonavala Couple Tour Package",
            description: "A Pune to Lonavala couple tour package offers private transportation for couples planning a relaxed getaway. The itinerary can include scenic viewpoints, lakes, nature attractions and other preferred stops."
        },
        {
            name: "Pune to Lonavala Online Tour Booking",
            description: "Online tour booking from Pune to Lonavala provides a convenient way to arrange the cab and discuss travel requirements before the journey. Passengers can plan their preferred dates, pickup point and sightseeing itinerary."
        },
        {
            name: "Pune to Lonavala Sedan Cab",
            description: "Pune to Lonavala sedan cab service provides comfortable private transportation for travellers heading towards the hill station. It is suitable for couples, families, business travellers and small groups."
        },
        {
            name: "Pune to Lonavala Sedan Cab Service",
            description: "Pune to Lonavala sedan cab service offers dedicated transportation for one-way trips, round trips, sightseeing and weekend travel. Passengers can plan their journey around their preferred departure and return schedule."
        },
        {
            name: "Pune to Lonavala Taxi Service",
            description: "Pune to Lonavala taxi service provides convenient private transportation for leisure trips, family outings, sightseeing plans and weekend journeys. The service can be arranged according to the passenger's selected travel option."
        }
    ],
    tableData: [
        ["Lonavala Sedan Cab from Pune"],
        ["Pune to Lonavala Taxi Fare"],
        ["Pune to Lonavala Tourist Taxi"],
        ["Pune to Lonavala Weekend Trip Cab"],
        ["Pune to Lonavala Outstation Taxi"],
        ["Pune to Lonavala Sedan Car Hire"],
        ["Pune to Lonavala Family Tour Cab"],
        ["Pune to Lonavala Day Trip Cab"],
        ["Pune to Lonavala Budget Cab"],
        ["Pune to Lonavala Cab Tour Package"],
        ["Pune to Lonavala Tour Package"],
        ["Pune to Lonavala Sightseeing Package"],
        ["Pune to Lonavala Cab Package"],
        ["Pune to Lonavala Tourist Package"],
        ["Pune to Lonavala One Day Tour Package"],
        ["Pune to Lonavala Family Tour Package"],
        ["Pune to Lonavala Taxi Package"],
        ["Pune to Lonavala Holiday Package"],
        ["Pune to Lonavala Weekend Tour Package"],
        ["Pune to Lonavala Darshan Package"],
        ["Pune to Lonavala Cab Booking Package"],
        ["Pune to Lonavala Round Trip Package"],
        ["Pune to Lonavala Tourist Cab Package"],
        ["Pune to Lonavala Private Tour Package"],
        ["Pune to Lonavala Travel Package"],
        ["Pune to Lonavala Group Tour Package"],
        ["Pune to Lonavala AC Cab Package"],
        ["Pune to Lonavala Couple Tour Package"],
        ["Pune to Lonavala Online Tour Booking"],
        ["Pune to Lonavala Sedan Cab"],
        ["Pune to Lonavala Sedan Cab Service"],
        ["Pune to Lonavala Taxi Service"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Comfortable Sedan Journey",
            WhyChoosedescription: "Virendra Cab provides sedan transportation for Pune to Lonavala travel, offering a private cabin suitable for couples, families and small groups looking for a comfortable road journey."
        },
        {
            WhyChooseheading: "Flexible Trip Planning",
            WhyChoosedescription: "Travellers can plan one-way travel, round trips, day tours or sightseeing journeys according to their preferred schedule, making the cab suitable for different Lonavala travel plans."
        },
        {
            WhyChooseheading: "Sightseeing-Friendly Travel",
            WhyChoosedescription: "Private cab travel makes it easier to include selected attractions in the itinerary and move between sightseeing points without depending on shared transportation or fixed group schedules."
        },
        {
            WhyChooseheading: "Weekend Getaway Convenience",
            WhyChoosedescription: "A dedicated sedan is a practical choice for weekend trips from Pune to Lonavala, allowing passengers to coordinate departure and return travel around their available holiday time."
        },
        {
            WhyChooseheading: "Family And Couple Travel",
            WhyChoosedescription: "Families and couples can enjoy private transportation during their Lonavala trip, with the flexibility to select suitable sightseeing stops and maintain their preferred travel pace."
        },
        {
            WhyChooseheading: "One-Day Tour Options",
            WhyChoosedescription: "Same-day Lonavala trips can be organized with planned pickup, sightseeing and return travel, helping passengers make better use of their available time without arranging separate transportation."
        },
        {
            WhyChooseheading: "Private Outstation Transportation",
            WhyChoosedescription: "The Pune to Lonavala route can be arranged as a private outstation journey, providing dedicated transportation for passengers who prefer direct travel with their own group."
        },
        {
            WhyChooseheading: "Advance Booking Support",
            WhyChoosedescription: "Advance cab booking allows travellers to discuss their route, travel date, trip type and sightseeing requirements before departure, helping create a more organized Lonavala travel plan."
        }
    ]
};



const faqData = [
    {
        question: "Can I book Pune to Lonavala Sedan Cabs with Virendra Cab?",
        answer: "Virendra Cab can arrange a private sedan from Pune to Lonavala based on your travel date, pickup location, passenger count, luggage, and preferred departure time. The cab can be planned for family outings, weekend trips, sightseeing, or personal travel."
    },
    {
        question: "Is a sedan suitable for travelling from Pune to Lonavala?",
        answer: "A sedan can be a convenient option for a small group travelling from Pune to Lonavala. The vehicle can be selected according to the number of passengers, luggage, journey duration, and comfort preferences."
    },
    {
        question: "Can I book a one-way sedan cab from Pune to Lonavala?",
        answer: "Travellers who only need transportation from Pune to Lonavala can enquire about a one-way sedan cab. The pickup address, travel date, preferred departure time, and destination details can be discussed before confirming the journey."
    },
    {
        question: "Can I reserve a round-trip sedan for a Lonavala trip?",
        answer: "A round-trip sedan can be considered for passengers planning to spend time in Lonavala and return to Pune. The return timing, sightseeing duration, waiting requirements, and preferred itinerary can be discussed during the booking process."
    },
    {
        question: "Which places can I visit in Lonavala with a sedan cab?",
        answer: "A private sedan can be used for sightseeing at attractions such as Bhushi Dam, Tiger Point, Rajmachi Point, Karla Caves, Lohagad Fort, and other suitable locations depending on the available time and selected route."
    },
    {
        question: "Can families book a Pune to Lonavala sedan cab?",
        answer: "Small families can enquire about a private sedan for their Lonavala journey. The cab arrangement can be planned around the family size, luggage, preferred pickup location, travel schedule, and sightseeing requirements."
    },
    {
        question: "Can I get Pune pickup from different areas for a Lonavala sedan cab?",
        answer: "Pickup arrangements can be discussed from areas including Baner, Wakad, Hinjewadi, Kothrud, Hadapsar, Viman Nagar, Pimpri-Chinchwad, and other suitable residential or commercial locations across Pune."
    },
    {
        question: "Is a sedan suitable for a Lonavala weekend getaway?",
        answer: "A private sedan can be considered for a weekend getaway from Pune to Lonavala, allowing travellers to plan their departure, sightseeing stops, meal breaks, and return schedule around their preferred itinerary."
    },
    {
        question: "Can I include Khandala in my Pune to Lonavala sedan trip?",
        answer: "Travellers can discuss combining Lonavala with nearby Khandala during the same trip when the available time permits. Viewpoints, attractions, and other suitable stops can be added according to the planned route."
    },
    {
        question: "What details are required to book Pune to Lonavala Sedan Cabs?",
        answer: "Passengers can provide their Pune pickup address, travel date, preferred departure time, number of travellers, luggage details, one-way or round-trip requirement, sightseeing preferences, and preferred sedan option while making the booking enquiry."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Manish Shirole",
        feedback: "Our family planned a Lonavala weekend trip and wanted a private sedan for both the Pune transfer and local sightseeing. Virendra Cab arranged the travel around our pickup point and the attractions we wanted to cover.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Riddhi Patwardhan",
        feedback: "A small group of friends travelled from Pune to Lonavala and also planned stops around Khandala. The sedan was suitable for our group, and the cab schedule was discussed according to our weekend itinerary.",
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
  "name": "Pune to Lonavala Sedan Cabs",
  "image": "https://www.virendracabs.com/assets/images/pune-to-lonavala-sedan-cabs.webp",
  "description": "Pune to Lonavala Sedan Cabs are a comfortable travel option for families, couples, small groups and travelers planning a weekend or sightseeing journey from Pune to Lonavala. Virendra Cab provides private sedan transportation for customers searching for Lonavala Sedan Cab from Pune, Pune to Lonavala Taxi Fare and Pune to Lonavala Tourist Taxi. A sedan can be a practical choice for passengers who want comfortable seating, luggage space and a dedicated vehicle for their journey. Travelers planning a Pune to Lonavala Weekend Trip Cab can arrange a one-way or round-trip journey according to their stay and return schedule. Pune to Lonavala Outstation Taxi is suitable for private intercity travel, while Pune to Lonavala Sedan Car Hire can be considered by families and small groups looking for a comfortable vehicle for sightseeing and longer travel. Pune to Lonavala Family Tour Cab provides a convenient option for family outings, while a Pune to Lonavala Day Trip Cab can be planned for travelers who want to visit Lonavala and return to Pune on the same day. The route can also be customized for sightseeing stops according to the passenger's preferred itinerary and available travel time. Customers comparing Pune to Lonavala Taxi Fare can contact Virendra Cab for current fare details based on the selected sedan, travel date, route, duration and trip type. Advance booking helps confirm the vehicle, pickup location, departure time and return requirements. Whether the purpose is a weekend holiday, family tour, tourist visit, one-day trip or private outstation journey, Virendra Cab offers a convenient sedan cab option from Pune to Lonavala.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.virendracabs.com/pune-to-lonavala-sedan-cabs"
  }
};






    return (
        <div>
<Helmet>
  <title>
    Pune to Lonavala Sedan Cabs | Pune to Lonavala Tourist Taxi | +91 9022549022
  </title>

  <meta
    name="description"
    content="Book Pune to Lonavala Sedan Cabs for weekend trips, family tours, sightseeing and day trips. Get private sedan taxi service from Pune with Virendra Cab."
  />

  <meta
    name="keywords"
    content="Pune to Lonavala Sedan Cabs, Lonavala Sedan Cab from Pune, Pune to Lonavala Taxi Fare, Pune to Lonavala Tourist Taxi, Pune to Lonavala Weekend Trip Cab, Pune to Lonavala Outstation Taxi, Pune to Lonavala Sedan Car Hire, Pune to Lonavala Family Tour Cab, Pune to Lonavala Day Trip Cab, Pune to Lonavala Sedan Taxi, Pune to Lonavala Sedan Cab Service, Pune to Lonavala Sedan Cab Booking, Pune to Lonavala Sedan Cab Fare, Pune to Lonavala Sedan Taxi Service, Pune to Lonavala One Way Sedan Cab, Pune to Lonavala Round Trip Sedan Cab, Pune to Lonavala Private Sedan Cab, Pune Lonavala Sedan Car Rental, Pune Lonavala Sedan Taxi Booking, Lonavala Cab from Pune, Lonavala Taxi from Pune, Pune to Lonavala Family Sedan Cab, Pune to Lonavala Sightseeing Sedan Cab, Pune to Lonavala One Day Sedan Cab, Pune Lonavala Weekend Cab, Pune to Lonavala Tour Cab, Pune to Lonavala Car Hire, Pune to Lonavala Taxi Service"
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
                            <img src='/images/keyword/44.jpg' alt='img' className='img-fluid' />
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

export default Punetolonavalacabsedan ;