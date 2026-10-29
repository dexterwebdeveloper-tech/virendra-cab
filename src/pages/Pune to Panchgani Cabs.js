import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Punetopanchganicabs() {



const cardData = {
    keyword: "Pune to Panchgani Cabs",
    headingDescription: "Virendra Cab provides comfortable and convenient cab services for travellers journeying from Pune to Panchgani. Whether the trip is planned as a weekend getaway, family holiday, sightseeing visit, or one-way transfer, passengers can choose from suitable sedan, SUV, Ertiga, and Innova Crysta options based on their group size and luggage needs. The service also supports Pune Airport to Panchgani travel, return journeys, advance cab booking, and flexible travel arrangements for a smooth hill-station journey.",
    topPlaces: [
        {
            title: "Panchgani",
            description: "Panchgani is a popular hill station known for its pleasant climate, scenic surroundings, and peaceful holiday atmosphere. A private cab from Pune offers direct transportation for families, couples, and groups planning a comfortable getaway."
        },
        {
            title: "Table Land",
            description: "Table Land is one of Panchgani's well-known attractions, offering expansive views and an open landscape for visitors. Travellers can conveniently reach the area by cab while exploring Panchgani during their stay."
        },
        {
            title: "Sydney Point",
            description: "Sydney Point provides beautiful views of the surrounding hills and valleys and is a popular stop for sightseeing. A Pune to Panchgani cab makes it convenient to include such scenic locations in a planned holiday."
        },
        {
            title: "Parsi Point",
            description: "Parsi Point is a scenic viewpoint overlooking the Krishna Valley and surrounding landscapes. Visitors travelling from Pune can use a private taxi for a relaxed journey and convenient local sightseeing."
        },
        {
            title: "Mapro Garden",
            description: "Mapro Garden near Panchgani is a popular attraction for families and leisure travellers. It can be included in a Panchgani trip itinerary along with other nearby sightseeing locations."
        },
        {
            title: "Dhom Dam",
            description: "Dhom Dam offers a peaceful setting surrounded by hills and water, making it suitable for travellers interested in nature and photography. A private cab provides convenient access when planning a broader Panchgani-area trip."
        },
        {
            title: "Devrai Art Village",
            description: "Devrai Art Village provides an opportunity to experience traditional-inspired art and creative work in a natural setting. Travellers can include this attraction while exploring destinations around Panchgani."
        },
        {
            title: "Rajpuri Caves",
            description: "Rajpuri Caves are an interesting stop for visitors looking to explore a combination of natural surroundings and local heritage. Cab travel makes it easier for families and groups to include the location in their sightseeing plan."
        },
        {
            title: "Venna Lake",
            description: "Venna Lake in nearby Mahabaleshwar is a popular leisure attraction for boating and family outings. Travellers visiting Panchgani can conveniently extend their itinerary to nearby Mahabaleshwar attractions by private cab."
        },
        {
            title: "Mahabaleshwar",
            description: "Mahabaleshwar is located close to Panchgani and is frequently included in hill-station holiday itineraries. A private cab allows visitors to combine both destinations with flexible sightseeing and comfortable transportation."
        }
    ],
    services: [
        {
            name: "Pune to Panchgani Cab",
            description: "Virendra Cab provides private cabs from Pune to Panchgani for family holidays, weekend trips, sightseeing plans, and personal travel. Passengers can select a vehicle according to their group size, luggage, and preferred journey requirements."
        },
        {
            name: "Panchgani to Pune Cab",
            description: "Panchgani to Pune cab service offers a convenient return travel option for visitors completing their hill-station stay. Travellers can arrange a private vehicle for a comfortable direct journey back to Pune."
        },
        {
            name: "Panchgani to Pune Taxi",
            description: "A Panchgani to Pune taxi is useful for tourists, families, and business travellers who need direct transportation after visiting the hill station. Vehicle selection can be planned according to passenger and luggage requirements."
        },
        {
            name: "Pune Airport to Panchgani Taxi Fare",
            description: "Travellers comparing Pune Airport to Panchgani taxi fare can select a suitable cab based on the vehicle category and journey requirements. Virendra Cab supports airport pickup arrangements for passengers continuing directly to Panchgani."
        },
        {
            name: "Pune to Panchgani Ertiga Cab Booking",
            description: "Pune to Panchgani Ertiga cab booking is suitable for families and small groups looking for additional seating and luggage space. The vehicle provides a practical option for a comfortable hill-station journey."
        },
        {
            name: "Pune to Panchgani Cab Fare",
            description: "Pune to Panchgani cab fare can vary according to the selected vehicle, trip type, route, and travel requirements. Customers can choose a suitable cab category while planning their journey according to their budget and group size."
        },
        {
            name: "Pune to Panchgani Distance by Taxi Fare",
            description: "When planning Pune to Panchgani travel, passengers may compare the route distance and applicable taxi fare before booking. Virendra Cab helps travellers select a suitable vehicle and trip arrangement for the journey."
        },
        {
            name: "Pune to Panchgani Taxi",
            description: "A Pune to Panchgani taxi provides direct private transportation for weekend getaways, family vacations, and sightseeing trips. Travellers can plan their departure according to their preferred schedule."
        },
        {
            name: "Pune to Panchgani Taxi Distance",
            description: "Travellers checking Pune to Panchgani taxi distance can plan their departure, vehicle choice, and expected travel requirements in advance. A private cab provides a direct road journey without the need for multiple transfers."
        },
        {
            name: "Pune to Panchgani Taxi Fare",
            description: "Pune to Panchgani taxi fare depends on factors such as vehicle category, trip type, and journey requirements. Customers can select a suitable sedan, SUV, or larger vehicle based on their travel plans."
        },
        {
            name: "Pune to Panchgani Innova Crysta Cab Booking",
            description: "Pune to Panchgani Innova Crysta cab booking is a suitable choice for families and groups seeking spacious seating, generous luggage capacity, and a comfortable ride. It works well for longer hill-station journeys and group holidays."
        },
        {
            name: "Pune to Panchgani Cab",
            description: "Virendra Cab offers Pune to Panchgani cab options for travellers planning direct transportation to the hill station. The service can be used for family outings, couples' trips, group holidays, and sightseeing itineraries."
        },
        {
            name: "Pune to Panchgani Taxi",
            description: "Pune to Panchgani taxi service provides a convenient alternative for passengers who prefer private road travel. Customers can select a vehicle according to passenger count, luggage, and overall journey requirements."
        },
        {
            name: "Pune to Panchgani Cab Service",
            description: "Pune to Panchgani cab service supports comfortable intercity travel for tourists, families, and business travellers. Private pickup and direct destination drop arrangements make the journey easier to organize."
        },
        {
            name: "Pune to Panchgani One Way Cab",
            description: "A Pune to Panchgani one-way cab is useful for travellers who only require transportation to Panchgani and do not need the same vehicle for the return journey. It can suit hotel stays, family visits, and planned holiday itineraries."
        },
        {
            name: "Pune to Panchgani Taxi Fare",
            description: "Travellers planning a Pune to Panchgani trip can compare taxi fare according to the selected vehicle and journey type. Virendra Cab provides options that can be matched with different group sizes and travel preferences."
        },
        {
            name: "Pune to Panchgani Cab Booking",
            description: "Pune to Panchgani cab booking allows customers to arrange their private vehicle ahead of the planned journey. Advance arrangements are useful for weekend trips, family holidays, and travel during busy vacation periods."
        },
        {
            name: "Pune Airport to Panchgani Cab",
            description: "Pune Airport to Panchgani cab service provides direct transportation for passengers arriving in Pune and continuing towards the hill station. Pickup timing can be planned around flight schedules for a smoother onward journey."
        },
        {
            name: "Cheapest Cab from Pune to Panchgani",
            description: "Travellers searching for the cheapest cab from Pune to Panchgani can compare available vehicle categories and trip requirements before selecting an economical option. Virendra Cab provides choices for different passenger groups and travel plans."
        },
        {
            name: "SUV Cab Pune to Panchgani",
            description: "An SUV cab from Pune to Panchgani is suitable for families and groups who need more cabin space and luggage capacity. The larger vehicle format can provide added comfort during the hill-station journey."
        },
        {
            name: "Innova Crysta Pune to Panchgani Cab",
            description: "An Innova Crysta Pune to Panchgani cab is well suited to families, groups, and travellers seeking a spacious and comfortable vehicle. It offers a practical option for carrying passengers and luggage during a leisure trip."
        }
    ],
    tableData: [
        ["Pune to Panchgani Cab"],
        ["Panchgani to Pune Cab"],
        ["Panchgani to Pune Taxi"],
        ["Pune Airport to Panchgani Taxi Fare"],
        ["Pune to Panchgani Ertiga Cab Booking"],
        ["Pune to Panchgani Cab Fare"],
        ["Pune to Panchgani Distance by Taxi Fare"],
        ["Pune to Panchgani Taxi"],
        ["Pune to Panchgani Taxi Distance"],
        ["Pune to Panchgani Taxi Fare"],
        ["Pune to Panchgani Innova Crysta Cab Booking"],
        ["Pune to Panchgani Cab"],
        ["Pune to Panchgani Taxi"],
        ["Pune to Panchgani Cab Service"],
        ["Pune to Panchgani One Way Cab"],
        ["Pune to Panchgani Taxi Fare"],
        ["Pune to Panchgani Cab Booking"],
        ["Pune Airport to Panchgani Cab"],
        ["Cheapest Cab from Pune to Panchgani"],
        ["SUV Cab Pune to Panchgani"],
        ["Innova Crysta Pune to Panchgani Cab"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Direct Pune to Panchgani Travel",
            WhyChoosedescription: "Virendra Cab provides direct transportation between Pune and Panchgani, helping travellers avoid the inconvenience of changing vehicles during their journey. The service is suitable for families, couples, groups, and weekend travellers."
        },
        {
            WhyChooseheading: "Multiple Vehicle Options",
            WhyChoosedescription: "Travellers can choose from practical vehicle categories based on passenger count, luggage, and comfort preferences. Sedan, Ertiga, SUV, and Innova Crysta options can accommodate different types of Panchgani travel requirements."
        },
        {
            WhyChooseheading: "One-Way Booking Convenience",
            WhyChoosedescription: "Passengers who only need transportation to Panchgani can choose a one-way cab arrangement. This provides flexibility for travellers staying at hotels, continuing their journey elsewhere, or making separate return arrangements."
        },
        {
            WhyChooseheading: "Airport Pickup to Panchgani",
            WhyChoosedescription: "Travellers arriving at Pune Airport can arrange a direct cab to Panchgani instead of making multiple transfers. Pickup planning around the flight schedule helps create a more convenient start to the hill-station trip."
        },
        {
            WhyChooseheading: "Comfortable Family Travel",
            WhyChoosedescription: "Private cab travel gives families dedicated space for passengers and luggage throughout the journey. Larger options such as Ertiga, SUV, and Innova Crysta can be considered when additional seating and storage are required."
        },
        {
            WhyChooseheading: "Convenient Sightseeing Plans",
            WhyChoosedescription: "A private cab makes it easier to include Panchgani attractions and nearby destinations in the travel itinerary. Passengers can plan visits to viewpoints, nature spots, and nearby Mahabaleshwar attractions according to their schedule."
        },
        {
            WhyChooseheading: "Experienced Drivers",
            WhyChoosedescription: "Experienced drivers can make the Pune to Panchgani road journey more comfortable by managing the route while passengers focus on their trip. Professional driving is particularly useful for families and visitors travelling to the hill station for the first time."
        },
        {
            WhyChooseheading: "Flexible Trip Planning",
            WhyChoosedescription: "Virendra Cab supports different travel requirements, including one-way transfers, return journeys, airport pickups, family holidays, and group trips. This flexibility helps customers select a travel arrangement that fits their Panchgani itinerary."
        }
    ]
};



const faqData = [
    {
        question: "How can I book Pune to Panchgani Cabs with Virendra Cab?",
        answer: "Booking Pune to Panchgani Cabs is simple when you provide your Pune pickup location, travel date, preferred departure time, passenger count, and vehicle requirement. The trip can then be planned according to whether you need one-way travel, a return journey, or a sightseeing-focused itinerary."
    },
    {
        question: "Is a one-way cab available from Pune to Panchgani?",
        answer: "One-way travel can be arranged for passengers who only need transportation from Pune to Panchgani. This option works well for travelers staying in Panchgani for several days or making separate arrangements for their return journey."
    },
    {
        question: "Can I book a return cab from Panchgani to Pune?",
        answer: "A return cab can be included when planning your Panchgani trip. You can provide the preferred return date and departure time so the journey fits around your hotel stay, sightseeing plans, or weekend schedule."
    },
    {
        question: "Which Panchgani attractions can I visit by cab?",
        answer: "A private cab can make it convenient to explore places such as Table Land, Sydney Point, Parsi Point, Devrai Art Village, and nearby viewpoints. The sightseeing route can be adjusted according to the places you want to cover during your stay."
    },
    {
        question: "What type of vehicle is suitable for a Pune to Panchgani trip?",
        answer: "Vehicle choice depends on the number of travelers, luggage, and planned sightseeing. A sedan can work for smaller groups, while an SUV or Innova-type vehicle may be more suitable for families or groups looking for additional seating and luggage space."
    },
    {
        question: "Can families book Pune to Panchgani Cabs for a weekend trip?",
        answer: "Families can use a private cab for a weekend getaway to Panchgani, especially when traveling with children, senior members, or luggage. Having one vehicle also makes it easier to move between viewpoints, local attractions, restaurants, and accommodation."
    },
    {
        question: "Can the cab stop at places on the way from Pune to Panchgani?",
        answer: "Planned breaks can be discussed while arranging the journey. Travelers may request suitable stops for refreshments, meals, rest, or selected attractions along the route, depending on the overall schedule and travel plan."
    },
    {
        question: "Is Pune to Panchgani cab travel suitable for senior citizens?",
        answer: "A private cab can be a convenient option for senior citizens because the journey can be organized around comfortable pickup and drop points. The itinerary can also include reasonable breaks and avoid unnecessary changes in transportation."
    },
    {
        question: "Can I carry luggage in Pune to Panchgani Cabs?",
        answer: "Passengers can carry normal travel luggage, with the available space depending on the selected vehicle. If you are traveling with several bags or additional equipment, it is useful to mention this during booking so an appropriate vehicle can be considered."
    },
    {
        question: "How early should I reserve a Pune to Panchgani cab?",
        answer: "Advance booking is helpful for weekends, holidays, monsoon travel, and other busy periods when Panchgani receives more visitors. Sharing your preferred date, timing, and vehicle requirement early can make trip planning more convenient."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Tejas Kshirsagar",
        feedback: "Our Panchgani weekend became much easier because we had a private cab from Pune for the entire journey. We could carry our luggage comfortably and visit Table Land and a few viewpoints without worrying about arranging separate rides.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Prachi Jagtap",
        feedback: "I booked a cab for a family trip to Panchgani, and the overall travel experience was convenient. The vehicle had enough room for our group and bags, while the flexibility to plan sightseeing stops made the short holiday more enjoyable.",
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
  "name": "Pune to Panchgani Cabs",
  "image": "https://www.virendracabs.com/assets/images/pune-to-panchgani-cabs.webp",
  "description": "Pune to Panchgani Cabs provide convenient private transportation for families, couples, groups and tourists planning a scenic hill-station journey from Pune to Panchgani. Virendra Cab supports travellers searching for Pune to Panchgani Cab, Panchgani to Pune Cab, Panchgani to Pune Taxi, Pune Airport to Panchgani Taxi Fare, Pune to Panchgani Ertiga Cab Booking and Pune to Panchgani Cab Fare with suitable vehicle options for different travel requirements. A private cab offers direct transportation between Pune and Panchgani and can be arranged for one-way journeys, round trips, weekend holidays, family vacations and customized sightseeing trips. Customers looking for Pune to Panchgani Cab Fare, Pune to Panchgani Taxi Fare or Pune to Panchgani Cab Price can contact Virendra Cab for the latest applicable fare, as pricing depends on the vehicle type, travel date, pickup location, trip category and itinerary. Sedan, SUV, Ertiga, Innova and Innova Crysta options can be considered according to passenger count, luggage and preferred comfort level. Pune to Panchgani Ertiga Cab Booking is particularly suitable for families and small groups who want a spacious vehicle for a hill-station journey with luggage. Airport transfers can also be arranged for passengers travelling from Pune Airport to Panchgani, making Pune Airport to Panchgani Taxi service useful for tourists arriving by flight and continuing directly to their destination. The cab can be planned for direct drops to hotels, resorts, homes and other locations in Panchgani. Travellers can also use a round-trip cab for sightseeing around Panchgani and nearby attractions such as Table Land, Parsi Point, Sydney Point, Dhom Dam and other scenic locations. Families with children and senior citizens can select a comfortable vehicle according to their group size and travel needs. Advance Pune to Panchgani Cab Booking allows passengers to organize pickup from homes, offices, hotels, railway stations or Pune Airport. The reverse route is also supported for travellers searching for Panchgani to Pune Cab or Panchgani to Pune Taxi. One-way transportation is useful for direct transfers, while round-trip bookings can provide a convenient vehicle for the complete holiday itinerary. Virendra Cab offers flexible Pune to Panchgani transportation for a comfortable and convenient hill-station travel experience.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.virendracabs.com/pune-to-panchgani-cabs"
  }
};





    return (
        <div>

<Helmet>
  <title>
    Pune to Panchgani Cabs | Pune to Panchgani Taxi Service | +91 9022549022
  </title>

  <meta
    name="description"
    content="Book Pune to Panchgani Cabs for comfortable hill-station travel. Choose one-way or round-trip sedan, SUV, Ertiga, Innova and Innova Crysta options with Virendra Cab."
  />

  <meta
    name="keywords"
    content="Pune to Panchgani Cabs, Pune to Panchgani Cab, Panchgani to Pune Cab, Panchgani to Pune Taxi, Pune Airport to Panchgani Taxi Fare, Pune to Panchgani Ertiga Cab Booking, Pune to Panchgani Cab Fare, Pune to Panchgani Taxi Fare, Pune to Panchgani Cab Price, Pune to Panchgani Taxi Price, Pune to Panchgani Cab Service, Pune to Panchgani Taxi Service, Pune to Panchgani Cab Booking, Pune to Panchgani Taxi Booking, Pune to Panchgani One Way Cab, Pune to Panchgani One Way Taxi, Pune to Panchgani Round Trip Cab, Pune to Panchgani Round Trip Taxi, Pune to Panchgani Private Cab, Pune to Panchgani Private Taxi, Pune to Panchgani Outstation Cab, Pune to Panchgani Outstation Taxi, Pune to Panchgani Car Rental, Pune to Panchgani Cab Hire, Pune to Panchgani Taxi Hire, Pune Panchgani Cab Service, Pune Panchgani Taxi Service, Best Pune to Panchgani Cab, Best Pune to Panchgani Taxi, Reliable Pune to Panchgani Cab, Affordable Pune to Panchgani Taxi, Cheap Pune to Panchgani Cab, Pune to Panchgani Sedan Cab, Pune to Panchgani Sedan Taxi, Pune to Panchgani SUV Cab, Pune to Panchgani SUV Taxi, Pune to Panchgani Ertiga Cab, Pune to Panchgani Ertiga Taxi, Pune to Panchgani Innova Cab, Pune to Panchgani Innova Taxi, Pune to Panchgani Innova Crysta Cab, Pune to Panchgani Innova Crysta Taxi, Pune to Panchgani Family Cab, Pune to Panchgani Couple Cab, Pune to Panchgani Group Cab, Pune to Panchgani Tourist Cab, Pune to Panchgani Sightseeing Cab, Pune to Panchgani Hill Station Cab, Pune to Panchgani Tour Cab, Pune to Panchgani Weekend Cab, Pune to Panchgani Holiday Cab, Pune Airport to Panchgani Cab, Pune Airport to Panchgani Taxi, Pune Airport Panchgani Cab Service, Pune Airport Panchgani Transfer, Pune to Panchgani Airport Cab Booking, Panchgani to Pune Cab Service, Panchgani to Pune Taxi Service, Panchgani to Pune One Way Cab, Panchgani to Pune Round Trip Taxi, Panchgani Taxi Booking, Panchgani Cab Booking, Panchgani Local Sightseeing Cab, Panchgani Tour Taxi, Pune to Panchgani Cab Booking Online"
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
                            <img src='/images/keyword/110.jpg' alt='img' className='img-fluid' />
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

export default Punetopanchganicabs ;