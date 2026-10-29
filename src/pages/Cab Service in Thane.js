import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Cabserviceinthane() {



const cardData = {
    keyword: "Cab Service in Thane",
    headingDescription: "Cab Service in Thane provides convenient transportation for local travel, airport transfers, outstation journeys, corporate movement, family trips and special occasions. Virendra Cab offers flexible taxi and car rental options from Thane with suitable vehicles for individuals, families and groups. Whether you need a quick city ride, an airport drop, a one-way outstation cab or a round-trip journey to destinations such as Pune, Nashik, Lonavala, Shirdi or Goa, the service can be planned around your preferred pickup location, vehicle type and travel schedule.",
    topPlaces: [
        {
            title: "Thane West",
            description: "Thane West is a convenient pickup area for local rides, airport transfers, corporate travel and outstation journeys arranged through a private cab."
        },
        {
            title: "Thane East",
            description: "Passengers from Thane East can arrange comfortable taxi services for city transportation, railway station transfers, airport travel and longer road journeys."
        },
        {
            title: "Viviana Mall",
            description: "Viviana Mall is a useful pickup and drop location for shoppers, families and visitors requiring convenient private transportation around Thane."
        },
        {
            title: "Upvan Lake",
            description: "Travel around Upvan Lake and nearby Thane areas with a private cab suitable for local sightseeing, family outings and scheduled city trips."
        },
        {
            title: "Ghodbunder Road",
            description: "Cab services around Ghodbunder Road provide convenient connectivity for residents and businesses travelling towards Mumbai, Navi Mumbai and outstation destinations."
        },
        {
            title: "Wagle Estate",
            description: "Wagle Estate passengers can use private cabs for office travel, employee movement, airport transfers and scheduled intercity journeys."
        },
        {
            title: "Thane Railway Station",
            description: "Arrange convenient pickup or drop at Thane Railway Station for train passengers needing local transfers or onward journeys to other cities."
        },
        {
            title: "Kalyan",
            description: "Travellers from Kalyan can connect with Thane and surrounding destinations through private cab arrangements suited to local and outstation requirements."
        },
        {
            title: "Bhiwandi",
            description: "Cab services from Bhiwandi support business, warehouse, family and intercity travel needs with suitable vehicles and planned pickup arrangements."
        },
        {
            title: "Majiwada",
            description: "Majiwada provides convenient access to private cab services for airport trips, corporate travel, shopping visits and outstation journeys."
        }
    ],
    services: [
        {
            name: "Thane to Pune Cab",
            description: "Thane to Pune cab service provides comfortable private transportation for business trips, family travel, weekend plans and other intercity journeys."
        },
        {
            name: "Cab Booking in Thane",
            description: "Cab booking in Thane allows passengers to arrange local, airport and outstation transportation with a vehicle selected according to their travel requirements."
        },
        {
            name: "Car Rental in Thane for Outstation",
            description: "Car rental in Thane for outstation travel is suitable for passengers planning longer road journeys with a chauffeur-driven vehicle and flexible travel arrangements."
        },
        {
            name: "Pune Thane Cab Service",
            description: "Pune Thane cab service provides convenient private travel between Pune and Thane for business passengers, families and travellers planning one-way or return journeys."
        },
        {
            name: "Pune to Thane Taxi Fare",
            description: "Pune to Thane taxi fare can be planned according to the selected vehicle, journey type, pickup point and passenger requirements."
        },
        {
            name: "Cab Service in Thane",
            description: "Virendra Cab provides cab service in Thane for local transportation, airport transfers, corporate requirements, family travel and outstation journeys."
        },
        {
            name: "Taxi Service in Thane",
            description: "Taxi service in Thane offers convenient private transportation for everyday city rides, scheduled pickups, airport transfers and longer intercity routes."
        },
        {
            name: "Cabs in Thane",
            description: "Cabs in Thane can be arranged for short local trips as well as outstation travel, with vehicle options suited to different passenger and luggage requirements."
        },
        {
            name: "Taxi in Thane",
            description: "A taxi in Thane provides a practical travel option for shopping, meetings, station transfers, airport drops and planned journeys outside the city."
        },
        {
            name: "Thane Cab Service",
            description: "Thane cab service supports local and intercity transportation with flexible booking options for individuals, families, corporate travellers and groups."
        },
        {
            name: "Thane Taxi Service",
            description: "Thane taxi service provides private rides for city travel, airport transportation, one-way drops, round trips and selected outstation destinations."
        },
        {
            name: "Car Rental in Thane",
            description: "Car rental in Thane is useful for travellers who need a chauffeur-driven vehicle for hourly travel, full-day requirements, airport transfers or outstation trips."
        },
        {
            name: "Cab Booking in Thane",
            description: "Cab booking in Thane can be arranged around the required pickup location, destination, travel date, passenger count and preferred vehicle category."
        },
        {
            name: "Taxi Booking Thane",
            description: "Taxi booking Thane services provide a convenient way to arrange private transportation for local journeys, airport transfers and longer intercity travel."
        },
        {
            name: "Best Cab Service in Thane",
            description: "Travellers comparing the best cab service in Thane can select a suitable private vehicle based on comfort, passenger capacity, route requirements and booking convenience."
        },
        {
            name: "Cheap Cab Service in Thane",
            description: "A cheap cab service in Thane can be useful for budget-conscious travellers looking for practical transportation while choosing a vehicle that matches their journey requirements."
        },
        {
            name: "Affordable Taxi Service Thane",
            description: "Affordable taxi service Thane options provide practical transportation for local and outstation journeys, with vehicle choices available for different group sizes."
        },
        {
            name: "24x7 Cab Service in Thane",
            description: "24x7 cab service in Thane supports early-morning airport transfers, late-night arrivals, urgent travel requirements and scheduled rides throughout the day."
        },
        {
            name: "Cab Service Near Me Thane",
            description: "Cab service near me Thane helps passengers arrange convenient pickups from residential areas, offices, hotels, stations and other suitable locations across the city."
        },
        {
            name: "Airport Cab Service Thane",
            description: "Airport cab service Thane provides private pickup and drop transportation for passengers travelling between Thane and Mumbai or Navi Mumbai airport locations."
        },
        {
            name: "Outstation Cab Service Thane",
            description: "Outstation cab service Thane is suitable for one-way and round-trip journeys to Pune, Nashik, Lonavala, Shirdi, Goa and other destinations."
        },
        {
            name: "One Way Cab Thane",
            description: "One way cab Thane service is convenient when travellers need a direct drop to another city without requiring the same vehicle for the return journey."
        },
        {
            name: "Round Trip Taxi Thane",
            description: "Round trip taxi Thane service provides a convenient option for return journeys, sightseeing plans, family visits and business travel outside the city."
        },
        {
            name: "Corporate Cab Service Thane",
            description: "Corporate cab service Thane supports employee movement, guest transportation, office transfers, meetings and scheduled business travel with suitable vehicles."
        },
        {
            name: "Wedding Cab Service Thane",
            description: "Wedding cab service Thane helps families arrange transportation for guests, wedding venues, hotels, railway stations and airport transfers during special events."
        },
        {
            name: "Thane to Mumbai Airport Cab",
            description: "Thane to Mumbai Airport cab provides convenient private airport transportation for domestic and international passengers with pickup times planned around flight schedules."
        },
        {
            name: "Thane to Pune Cab",
            description: "Thane to Pune cab service offers comfortable intercity travel for office trips, family visits, weekend travel and planned one-way or return journeys."
        },
        {
            name: "Thane to Nashik Cab",
            description: "Thane to Nashik cab service is suitable for business travel, family visits, religious trips and leisure journeys requiring direct private transportation."
        },
        {
            name: "Thane to Lonavala Cab",
            description: "Thane to Lonavala cab provides convenient transportation for weekend getaways, family holidays and sightseeing trips to the popular hill-station destination."
        },
        {
            name: "Thane to Shirdi Cab",
            description: "Thane to Shirdi cab service offers private transportation for devotees and families planning a comfortable pilgrimage journey with one-way or round-trip options."
        },
        {
            name: "Thane to Goa Cab",
            description: "Thane to Goa cab service provides a private long-distance travel option for families, groups and travellers planning a road trip to Goa."
        },
        {
            name: "SUV Cab Service in Thane",
            description: "SUV cab service in Thane offers additional cabin space and comfortable seating for families, groups and passengers travelling with more luggage."
        },
        {
            name: "7 Seater Cab in Thane",
            description: "A 7 seater cab in Thane is a practical choice for larger families and small groups who need additional passenger capacity for local or outstation travel."
        },
        {
            name: "Innova Cab Service Thane",
            description: "Innova cab service Thane provides a spacious vehicle option for families, groups and corporate travellers requiring comfortable seating for longer journeys."
        },
        {
            name: "Innova Crysta on Rent in Thane",
            description: "Innova Crysta on rent in Thane is suitable for premium family travel, corporate movement, airport transfers, weddings and comfortable outstation journeys."
        },
        {
            name: "Ertiga Cab in Thane",
            description: "Ertiga cab in Thane provides a practical combination of passenger space and luggage capacity for families and small groups travelling locally or outstation."
        },
        {
            name: "Kia Carens Cab Thane",
            description: "Kia Carens cab Thane offers a comfortable multi-passenger travel option for families, group outings, airport transfers and longer road journeys."
        },
        {
            name: "Family Cab Service in Thane",
            description: "Family cab service in Thane provides comfortable private transportation for parents, children and relatives travelling to local destinations, airports and outstation locations."
        }
    ],
    tableData: [
        ["Thane to Pune Cab"],
        ["Cab Booking in Thane"],
        ["Car Rental in Thane for Outstation"],
        ["Pune Thane Cab Service"],
        ["Pune to Thane Taxi Fare"],
        ["Cab Service in Thane"],
        ["Taxi Service in Thane"],
        ["Cabs in Thane"],
        ["Taxi in Thane"],
        ["Thane Cab Service"],
        ["Thane Taxi Service"],
        ["Car Rental in Thane"],
        ["Cab Booking in Thane"],
        ["Taxi Booking Thane"],
        ["Best Cab Service in Thane"],
        ["Cheap Cab Service in Thane"],
        ["Affordable Taxi Service Thane"],
        ["24x7 Cab Service in Thane"],
        ["Cab Service Near Me Thane"],
        ["Airport Cab Service Thane"],
        ["Outstation Cab Service Thane"],
        ["One Way Cab Thane"],
        ["Round Trip Taxi Thane"],
        ["Corporate Cab Service Thane"],
        ["Wedding Cab Service Thane"],
        ["Thane to Mumbai Airport Cab"],
        ["Thane to Pune Cab"],
        ["Thane to Nashik Cab"],
        ["Thane to Lonavala Cab"],
        ["Thane to Shirdi Cab"],
        ["Thane to Goa Cab"],
        ["SUV Cab Service in Thane"],
        ["7 Seater Cab in Thane"],
        ["Innova Cab Service Thane"],
        ["Innova Crysta on Rent in Thane"],
        ["Ertiga Cab in Thane"],
        ["Kia Carens Cab Thane"],
        ["Family Cab Service in Thane"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Local and Outstation Travel Options",
            WhyChoosedescription: "Virendra Cab supports everyday Thane transportation as well as longer journeys, allowing passengers to arrange local rides, airport transfers, one-way drops and round trips through one service."
        },
        {
            WhyChooseheading: "Wide Vehicle Selection",
            WhyChoosedescription: "Passengers can select from sedan, Ertiga, Innova, Innova Crysta, SUV, Kia Carens and other suitable options according to group size, luggage and comfort requirements."
        },
        {
            WhyChooseheading: "Convenient Airport Transfers",
            WhyChoosedescription: "Airport transportation can be arranged from Thane for passengers travelling to Mumbai airport or other nearby aviation hubs, with pickup and drop timings planned around the journey."
        },
        {
            WhyChooseheading: "Comfortable Outstation Journeys",
            WhyChoosedescription: "Private outstation cabs provide a more convenient way to travel from Thane to destinations such as Pune, Nashik, Lonavala, Shirdi and Goa without depending on shared transportation."
        },
        {
            WhyChooseheading: "Family-Friendly Cab Options",
            WhyChoosedescription: "Families can choose spacious vehicles according to the number of passengers and luggage, making local outings, airport trips, pilgrimages and holidays easier to organize."
        },
        {
            WhyChooseheading: "Corporate Travel Support",
            WhyChoosedescription: "Corporate cab requirements can be planned for employee movement, office visits, client transfers, airport pickups, meetings and scheduled business transportation across Thane and nearby cities."
        },
        {
            WhyChooseheading: "One-Way and Round-Trip Flexibility",
            WhyChoosedescription: "Whether the requirement is a direct destination drop or a return journey, Virendra Cab provides travel formats that can be selected according to the passenger's itinerary."
        },
        {
            WhyChooseheading: "Suitable for Special Events",
            WhyChoosedescription: "Wedding, family function and group travel requirements can be supported with larger vehicles such as Innova, Innova Crysta, SUV and other spacious cab options."
        }
    ]
};



const faqData = [
    {
        question: "How can I book a Cab Service in Thane with Virendra Cab?",
        answer: "Booking a Cab Service in Thane with Virendra Cab can be arranged for local travel, airport transfers, business trips, family outings, and outstation journeys. Share your pickup location, destination, travel date, and preferred vehicle type to plan the trip according to your requirements."
    },
    {
        question: "Does Virendra Cab provide pickup and drop services across Thane?",
        answer: "Thane travel can be arranged from areas such as Thane West, Thane East, Ghodbunder Road, Wagle Estate, Manpada, Majiwada, and nearby residential or commercial locations. Pickup and drop details can be discussed while making the reservation."
    },
    {
        question: "Can I hire a Thane cab for airport transfers?",
        answer: "Airport transportation from Thane can be scheduled for Mumbai airport travel, including early-morning departures and late-night arrivals. The booking can be planned around your flight schedule with suitable luggage space and vehicle requirements."
    },
    {
        question: "Are outstation trips available from Thane through Virendra Cab?",
        answer: "Travelers can arrange outstation journeys from Thane to destinations such as Pune, Nashik, Lonavala, Mahabaleshwar, Surat, and other cities. Depending on the itinerary, one-way and return travel options can be considered."
    },
    {
        question: "What type of vehicles can be booked for Cab Service in Thane?",
        answer: "Vehicle selection depends on the number of passengers, luggage, and nature of the journey. Sedan and larger options can be considered for individual travel, families, corporate groups, and longer outstation routes."
    },
    {
        question: "Can I use a Thane cab for a full-day local trip?",
        answer: "A full-day cab arrangement can be useful for multiple stops around Thane and nearby Mumbai areas. It allows travelers to plan meetings, shopping, family visits, sightseeing, or other local activities without arranging separate transportation for every destination."
    },
    {
        question: "Is Cab Service in Thane suitable for corporate travel?",
        answer: "Business travelers can use Virendra Cab for office visits, client meetings, railway and airport transfers, corporate events, and intercity business travel. Pickup and drop points can be scheduled according to the day's professional itinerary."
    },
    {
        question: "Can families book a cab in Thane for sightseeing?",
        answer: "Families can arrange a cab for convenient sightseeing around Thane and nearby Mumbai destinations. Places such as Upvan Lake, Yeoor Hills, Sanjay Gandhi National Park, and other attractions can be included depending on the planned route and available time."
    },
    {
        question: "Can I book a Cab Service in Thane for railway station transfers?",
        answer: "Yes, cab bookings can be planned for railway station transfers from Thane and surrounding areas. Providing the train timing and pickup location in advance helps coordinate the journey more conveniently, especially for early or late departures."
    },
    {
        question: "How early should I reserve a cab in Thane?",
        answer: "Advance reservation is useful when you have a fixed travel schedule, particularly for airport transfers, weddings, corporate events, and long-distance journeys. For urgent local travel, availability can be checked based on the required pickup time and vehicle."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Akhil Sawant",
        feedback: "A business meeting in Thane required several pickups during the day, and the cab arrangement worked well for my schedule. The vehicle was comfortable, communication was clear, and the overall journey made moving between different locations much easier.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Isha Bhandari",
        feedback: "For a family visit around Thane, having one cab for the day's travel was much more convenient than arranging separate rides. The trip covered our planned stops comfortably, and the booking process was straightforward from start to finish.",
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
  "name": "Cab Service in Thane",
  "image": "https://www.virendracabs.com/assets/images/cab-service-in-thane.webp",
  "description": "Cab Service in Thane provides convenient local, airport and outstation transportation for residents, families, business travellers, tourists and visitors across Thane and nearby areas. Virendra Cab supports customers searching for Thane to Pune Cab, Cab Booking in Thane, Car Rental in Thane for Outstation, Pune Thane Cab Service, Pune to Thane Taxi Fare, Cab Service in Thane, Taxi Service in Thane, Cabs in Thane, Taxi in Thane, Thane Cab Service, Thane Taxi Service and Car Rental in Thane with flexible vehicle options for different travel requirements. Local cab bookings can be arranged for daily transportation, office travel, shopping, railway station transfers, hotel transfers, airport trips, sightseeing and personal travel. Customers can book private cabs from important Thane areas such as Thane West, Thane East, Ghodbunder Road, Manpada, Wagle Estate, Majiwada, Kalwa, Kopri, Mulund, Kolshet and nearby locations. Cab Booking in Thane can be arranged for one-way journeys, round trips, hourly requirements, full-day rentals and customized travel plans. Outstation car rental from Thane is suitable for passengers travelling to Pune, Mumbai, Lonavala, Mahabaleshwar, Nashik, Shirdi, Goa, Surat, Ahmedabad and other destinations. Customers searching for Thane Cab Fare, Thane Taxi Fare, Car Rental in Thane or Pune to Thane Taxi Fare can contact Virendra Cab for the latest applicable fare, as pricing depends on the vehicle type, route, distance, duration and travel requirements. Sedan, SUV, Ertiga, Innova and Innova Crysta options can be considered according to passenger count, luggage and preferred comfort level. Thane to Pune Cab and Pune to Thane Cab Service are useful for business travellers, students, families, medical visits, airport connections and intercity journeys. Airport transfers can also be arranged between Thane and Mumbai Airport or Navi Mumbai International Airport. Full-day and hourly cab rental options can help customers who need a vehicle for multiple stops, meetings, shopping or sightseeing within and around Thane. One-way taxi services provide direct transportation to the selected destination, while round-trip bookings can be planned for return travel. Corporate customers can use private cabs for office visits, business meetings and employee transportation, while families can select spacious vehicles for longer journeys. Advance Thane Cab Booking allows passengers to organize pickup from homes, offices, hotels, railway stations and other convenient locations. Virendra Cab offers flexible local and outstation transportation for customers looking for a reliable Cab Service in Thane.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.virendracabs.com/cab-service-in-thane"
  }
};



    return (
        <div>
<Helmet>
  <title>
    Cab Service in Thane | Thane Taxi Service | +91 9022549022
  </title>

  <meta
    name="description"
    content="Book Cab Service in Thane for local, airport and outstation travel. Get sedan, SUV, Ertiga, Innova and Innova Crysta options for Pune, Mumbai, Lonavala and other destinations."
  />

  <meta
    name="keywords"
    content="Thane to Pune Cab, Cab Booking in Thane, Car Rental in Thane for Outstation, Pune Thane Cab Service, Pune to Thane Taxi Fare, Cab Service in Thane, Taxi Service in Thane, Cabs in Thane, Taxi in Thane, Thane Cab Service, Thane Taxi Service, Car Rental in Thane, Cab Booking in Thane, Thane Cab Booking, Thane Taxi Booking, Thane Car Rental, Thane Cab Hire, Thane Taxi Hire, Thane Local Cab Service, Thane Local Taxi Service, Thane Outstation Cab, Thane Outstation Taxi, Thane Outstation Cab Service, Thane Outstation Taxi Service, Thane One Way Cab, Thane One Way Taxi, Thane Round Trip Cab, Thane Round Trip Taxi, Thane Private Cab, Thane Private Taxi, Thane Cab Fare, Thane Taxi Fare, Thane Cab Price, Thane Taxi Price, Thane Car Rental Price, Thane Airport Cab, Thane Airport Taxi, Thane Airport Transfer, Thane Railway Station Cab, Thane Corporate Cab, Thane Business Cab, Thane Family Cab, Thane Full Day Cab, Thane Hourly Cab, Thane Sightseeing Cab, Thane Sedan Cab, Thane Sedan Taxi, Thane SUV Cab, Thane SUV Taxi, Thane Ertiga Cab, Thane Ertiga Taxi, Thane Innova Cab, Thane Innova Taxi, Thane Innova Crysta Cab, Thane Innova Crysta Taxi, Best Cab Service in Thane, Best Taxi Service in Thane, Best Cab in Thane, Reliable Cab Service Thane, Affordable Cab Service Thane, Cheap Cab Service Thane, Professional Cab Service Thane, Safe Cab Service Thane, Thane to Pune Cab Service, Thane to Pune Taxi, Thane to Pune Taxi Service, Thane to Pune Cab Booking, Thane to Pune One Way Cab, Thane to Pune Round Trip Cab, Thane to Mumbai Cab, Thane to Mumbai Taxi, Thane to Lonavala Cab, Thane to Lonavala Taxi, Thane to Mahabaleshwar Cab, Thane to Mahabaleshwar Taxi, Thane to Nashik Cab, Thane to Nashik Taxi, Thane to Shirdi Cab, Thane to Shirdi Taxi, Thane to Goa Cab, Thane to Goa Taxi, Pune to Thane Cab, Pune to Thane Taxi, Pune to Thane Cab Service, Pune to Thane Taxi Service, Pune to Thane Cab Booking, Pune to Thane One Way Cab, Pune to Thane Round Trip Taxi, Pune to Thane Cab Fare, Pune to Thane Taxi Fare"
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
                            <img src='/images/keyword/105.jpg' alt='img' className='img-fluid' />
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

export default Cabserviceinthane ;