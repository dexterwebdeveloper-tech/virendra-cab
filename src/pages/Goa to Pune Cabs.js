import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Goatopunecabservice() {




const cardData = {
    keyword: "Goa to Pune Cabs",
    headingDescription: "Goa to Pune Cabs provide a convenient private road travel option for tourists, families, business travellers, and groups returning from Goa to Pune. Virendra Cab offers one-way, round-trip, outstation, airport-connected, and vehicle-specific cab options from North Goa, South Goa, Panaji, Calangute, Baga, Madgaon, and Goa Airport. Travellers can choose from sedan, Ertiga, Innova, SUV, AC, luxury, and other suitable cab categories according to passenger count, luggage requirements, and travel preferences. The service can be arranged for convenient drop-offs across Pune, including airport, business, residential, and commercial areas.",

    topPlaces: [
        {
            title: "Pune Airport",
            description: "Pune Airport is a convenient arrival point for travellers coming from Goa who need direct transportation to hotels, residential areas, business districts, or other destinations across Pune."
        },
        {
            title: "Hinjewadi",
            description: "Hinjewadi is a major technology and corporate hub in Pune, making it an important destination for professionals travelling from Goa for office visits, meetings, and business requirements."
        },
        {
            title: "Wakad",
            description: "Wakad is a well-connected western Pune locality with residential, commercial, and hospitality areas, making it a practical drop-off destination for travellers arriving from Goa."
        },
        {
            title: "Baner",
            description: "Baner is a prominent Pune neighbourhood with offices, hotels, restaurants, and residential developments, providing a convenient destination for both business and leisure travellers from Goa."
        },
        {
            title: "Kharadi",
            description: "Kharadi is an important eastern Pune business and residential area where travellers from Goa may require transportation for corporate visits, accommodation, meetings, or family stays."
        },
        {
            title: "Hadapsar",
            description: "Hadapsar connects several commercial, residential, and industrial areas of Pune and is a useful destination for passengers completing their Goa to Pune journey."
        },
        {
            title: "Pimpri Chinchwad",
            description: "Pimpri Chinchwad is a major urban and industrial region near Pune, making it a suitable destination for travellers from Goa visiting family, workplaces, businesses, or residential areas."
        },
        {
            title: "Pune Railway Station",
            description: "Pune Railway Station is an important transport point for passengers arriving from Goa who may need to continue their journey by train or connect with other parts of Maharashtra."
        },
        {
            title: "Koregaon Park",
            description: "Koregaon Park is known for hotels, restaurants, commercial establishments, and residential areas, making it a useful Pune destination for tourists and business travellers arriving from Goa."
        },
        {
            title: "Shivajinagar",
            description: "Shivajinagar is centrally located and provides access to major business areas, educational institutions, transport facilities, and other important parts of Pune."
        }
    ],

    services: [
        {
            name: "Goa To Pune Cab",
            description: "Goa to Pune cab service provides direct private transportation for travellers returning from Goa. It is suitable for tourists, families, business travellers, and groups looking for a comfortable intercity journey."
        },
        {
            name: "Goa To Pune Cab Service",
            description: "Goa to Pune cab service offers planned transportation from different Goa locations to convenient destinations throughout Pune. The vehicle can be selected according to passenger capacity and luggage requirements."
        },
        {
            name: "Goa To Pune One Way Cab",
            description: "Goa to Pune one way cab is suitable for travellers who only require transportation toward Pune without needing the same cab for the return journey. It works well for holidays, relocation, and business travel."
        },
        {
            name: "Goa To Pune Taxi",
            description: "Goa to Pune taxi provides a private road travel option for passengers who prefer direct transportation instead of shared travel. The journey can be arranged according to the preferred pickup and Pune destination."
        },
        {
            name: "Goa To Pune Cab Price",
            description: "Goa to Pune cab price can vary according to the vehicle category, pickup location, trip type, passenger count, and destination. Travellers can compare suitable options according to their travel requirements."
        },
        {
            name: "Goa Pune Cab Service",
            description: "Goa Pune cab service is suitable for tourists completing their Goa vacation, families visiting Pune, professionals travelling for work, and groups requiring dedicated intercity transportation."
        },
        {
            name: "Goa To Pune Car Rental",
            description: "Goa to Pune car rental provides a private vehicle option for passengers planning a long-distance road journey. Vehicle selection can be based on group size, luggage, comfort preferences, and travel plans."
        },
        {
            name: "Goa To Pune Taxi Fare",
            description: "Goa to Pune taxi fare depends on factors such as vehicle type, travel arrangement, pickup point, and passenger requirements. Customers can enquire about an appropriate option before confirming their journey."
        },
        {
            name: "Goa To Pune Cabs",
            description: "Goa to Pune cabs provide direct transportation for individuals, families, and groups travelling between the two cities. The service can be arranged from various Goa pickup locations."
        },
        {
            name: "Goa To Pune Cabs",
            description: "Travellers can arrange Goa to Pune cabs for direct point-to-point transportation, making the journey more convenient when carrying luggage or travelling with family and friends."
        },
        {
            name: "Goa To Pune Taxi",
            description: "Goa to Pune taxi services provide private intercity travel for passengers returning from holidays, visiting relatives, attending business commitments, or continuing onward travel from Pune."
        },
        {
            name: "Goa To Pune Cab Service",
            description: "The Goa to Pune cab service can be planned from North Goa, South Goa, Panaji, Madgaon, Goa Airport, and other convenient pickup points according to the traveller's location."
        },
        {
            name: "Goa To Pune Taxi Service",
            description: "Goa to Pune taxi service provides a dedicated vehicle with planned pickup and drop-off arrangements. It is suitable for personal travel, family journeys, corporate requirements, and holiday returns."
        },
        {
            name: "Cab From Goa To Pune",
            description: "A cab from Goa to Pune offers a direct road travel solution for passengers who prefer a private vehicle for their complete journey. It can accommodate different travel purposes and group sizes."
        },
        {
            name: "Taxi From Goa To Pune",
            description: "Taxi from Goa to Pune provides direct transportation without requiring passengers to change vehicles during the route. It is useful for tourists, families, and professionals travelling with luggage."
        },
        {
            name: "Goa To Pune Outstation Cab",
            description: "Goa to Pune outstation cab is designed for the long-distance journey between Goa and Pune, providing private transportation for families, tourists, business travellers, and groups."
        },
        {
            name: "Goa To Pune Car Rentals",
            description: "Goa to Pune car rentals provide travellers with suitable private vehicle options for intercity transportation. The selection can be based on seating capacity, luggage space, comfort, and trip requirements."
        },
        {
            name: "Goa To Pune Innova Cab",
            description: "Goa to Pune Innova cab is suitable for families and groups looking for additional seating and luggage capacity during the long-distance journey from Goa to Pune."
        },
        {
            name: "Goa To Pune Ertiga Cab",
            description: "Goa to Pune Ertiga cab offers a practical option for small families and groups who want to travel together with comfortable seating and useful luggage space."
        },
        {
            name: "Goa To Pune Sedan Cab",
            description: "Goa to Pune sedan cab is suitable for individuals, couples, and smaller groups who prefer a compact private vehicle for their intercity journey."
        },
        {
            name: "Goa To Pune SUV Taxi",
            description: "Goa to Pune SUV taxi provides additional cabin and luggage space, making it a suitable option for families and groups carrying more belongings on the long-distance route."
        },
        {
            name: "Goa To Pune AC Cab",
            description: "Goa to Pune AC cab offers a climate-controlled travel environment for the extended road journey. It is suitable for families, tourists, professionals, and passengers seeking additional travel comfort."
        },
        {
            name: "Goa To Pune Luxury Cab",
            description: "Goa to Pune luxury cab is suitable for passengers looking for a more premium private travel experience. It can be considered for executive travel, special occasions, and comfortable holiday journeys."
        },
        {
            name: "North Goa To Pune Cab",
            description: "North Goa to Pune cab services can be arranged from areas such as Calangute, Baga, Anjuna, Vagator, Candolim, Morjim, and other convenient North Goa locations."
        },
        {
            name: "South Goa To Pune Taxi",
            description: "South Goa to Pune taxi is suitable for travellers beginning their journey around Madgaon, Colva, Vasco, and other southern Goa locations and travelling directly toward Pune."
        },
        {
            name: "Panaji To Pune Cabs",
            description: "Panaji to Pune cabs provide direct transportation from Goa's capital city to Pune. They are suitable for tourists, families, business travellers, and passengers carrying luggage."
        },
        {
            name: "Calangute To Pune Taxi",
            description: "Calangute to Pune taxi offers direct transportation for travellers staying around Calangute who want to complete their Goa-to-Pune journey without arranging multiple connecting vehicles."
        },
        {
            name: "Baga To Pune Cab",
            description: "Baga to Pune cab provides private transportation for tourists completing their Goa holiday and travelling toward Pune. Pickup can be coordinated around the preferred departure schedule."
        },
        {
            name: "Madgaon To Pune Taxi",
            description: "Madgaon to Pune taxi provides a convenient private road connection for passengers travelling from South Goa toward Pune for business, family visits, onward travel, or personal requirements."
        },
        {
            name: "Goa Airport To Pune Cab",
            description: "Goa Airport to Pune cab is useful for passengers arriving at the airport who need direct transportation toward Pune. It is particularly practical for travellers carrying luggage or following a fixed schedule."
        },
        {
            name: "Goa To Pune Cab Near Me",
            description: "Travellers searching for a Goa to Pune cab near them can enquire with Virendra Cab for pickup arrangements based on their current Goa location and preferred Pune destination."
        },
        {
            name: "Goa To Pune Cab Booking",
            description: "Goa to Pune cab booking allows passengers to arrange their intercity transportation in advance by providing the pickup location, travel date, passenger count, vehicle preference, and Pune drop point."
        },
        {
            name: "Goa To Pune Taxi Booking Online",
            description: "Goa to Pune taxi booking online provides a convenient way to enquire about and arrange private transportation before the journey. Travellers can share their trip details and vehicle requirements in advance."
        },
        {
            name: "Goa To Pune Cab Fare",
            description: "Goa to Pune cab fare can depend on the selected vehicle, pickup location, destination, and one-way or round-trip arrangement. Passengers can compare options according to their planned journey."
        },
        {
            name: "Goa To Pune Taxi Fare",
            description: "Goa to Pune taxi fare varies according to vehicle category and travel arrangement. Providing accurate pickup, destination, passenger, and luggage details helps identify a suitable option."
        },
        {
            name: "Goa To Pune Cab Price",
            description: "Goa to Pune cab price depends on the chosen vehicle and journey requirements. Travellers can consider economical, standard, or premium options according to their budget and group size."
        },
        {
            name: "Goa To Pune Taxi Charges",
            description: "Goa to Pune taxi charges can vary according to vehicle selection, pickup point, destination, and trip type. Travellers can discuss the journey details before confirming the cab."
        },
        {
            name: "Best Goa To Pune Cab Service",
            description: "Travellers searching for a suitable Goa to Pune cab service can compare vehicle comfort, luggage capacity, pickup convenience, booking process, and suitability for their particular travel requirements."
        },
        {
            name: "Cheap Goa To Pune Cab",
            description: "Passengers looking for an economical Goa to Pune cab can compare available vehicle categories according to their budget, passenger count, luggage requirements, and preferred travel arrangement."
        },
        {
            name: "Goa To Pune One Way Cab",
            description: "Goa to Pune one way cab is useful when the traveller needs direct transportation toward Pune and does not require the same cab for the return journey. It is suitable for personal and professional travel."
        },
        {
            name: "Goa To Pune Round Trip Taxi",
            description: "Goa to Pune round trip taxi is suitable for passengers planning to return to Goa after completing their Pune visit. The travel arrangement can be planned around the required departure and return schedule."
        }
    ],

    tableData: [
        ["Goa To Pune Cab"],
        ["Goa To Pune Cab Service"],
        ["Goa To Pune One Way Cab"],
        ["Goa To Pune Taxi"],
        ["Goa To Pune Cab Price"],
        ["Goa Pune Cab Service"],
        ["Goa To Pune Car Rental"],
        ["Goa To Pune Taxi Fare"],
        ["Goa To Pune Cabs"],
        ["Goa To Pune Cabs"],
        ["Goa To Pune Taxi"],
        ["Goa To Pune Cab Service"],
        ["Goa To Pune Taxi Service"],
        ["Cab From Goa To Pune"],
        ["Taxi From Goa To Pune"],
        ["Goa To Pune Outstation Cab"],
        ["Goa To Pune Car Rentals"],
        ["Goa To Pune Innova Cab"],
        ["Goa To Pune Ertiga Cab"],
        ["Goa To Pune Sedan Cab"],
        ["Goa To Pune SUV Taxi"],
        ["Goa To Pune AC Cab"],
        ["Goa To Pune Luxury Cab"],
        ["North Goa To Pune Cab"],
        ["South Goa To Pune Taxi"],
        ["Panaji To Pune Cabs"],
        ["Calangute To Pune Taxi"],
        ["Baga To Pune Cab"],
        ["Madgaon To Pune Taxi"],
        ["Goa Airport To Pune Cab"],
        ["Goa To Pune Cab Near Me"],
        ["Goa To Pune Cab Booking"],
        ["Goa To Pune Taxi Booking Online"],
        ["Goa To Pune Cab Fare"],
        ["Goa To Pune Taxi Fare"],
        ["Goa To Pune Cab Price"],
        ["Goa To Pune Taxi Charges"],
        ["Best Goa To Pune Cab Service"],
        ["Cheap Goa To Pune Cab"],
        ["Goa To Pune One Way Cab"],
        ["Goa To Pune Round Trip Taxi"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Direct Goa To Pune Travel",
            WhyChoosedescription: "Virendra Cab provides private point-to-point transportation from Goa to Pune, allowing passengers to travel directly without unnecessary vehicle changes during the long-distance journey."
        },
        {
            WhyChooseheading: "Convenient Pune Drop Locations",
            WhyChoosedescription: "Travellers can plan their Pune drop according to their requirements, including Pune Airport, Hinjewadi, Wakad, Baner, Kharadi, Hadapsar, Pimpri Chinchwad, Koregaon Park, and Shivajinagar."
        },
        {
            WhyChooseheading: "Multiple Vehicle Choices",
            WhyChoosedescription: "Sedan, Ertiga, Innova, SUV, AC, and luxury cab options can be considered according to passenger count, luggage requirements, comfort preferences, and the nature of the journey."
        },
        {
            WhyChooseheading: "Pickup From Different Goa Locations",
            WhyChoosedescription: "The service can be planned from North Goa, South Goa, Panaji, Calangute, Baga, Madgaon, Goa Airport, and other convenient pickup locations based on where the traveller begins the journey."
        },
        {
            WhyChooseheading: "Suitable For Family And Group Travel",
            WhyChoosedescription: "Families, friends, and groups can travel together in a dedicated vehicle, making the long-distance journey more convenient while providing practical space for passengers and holiday luggage."
        },
        {
            WhyChooseheading: "One-Way And Round-Trip Options",
            WhyChoosedescription: "Passengers can select a one-way cab when they only require transportation to Pune or consider a round-trip taxi when transportation back to Goa is also required after their Pune visit."
        },
        {
            WhyChooseheading: "Comfortable Long-Distance Journey",
            WhyChoosedescription: "A private AC cab provides a more comfortable environment for the extended Goa-to-Pune route, particularly for families, senior passengers, professionals, and travellers carrying luggage."
        },
        {
            WhyChooseheading: "Advance Booking Convenience",
            WhyChoosedescription: "Travellers can plan their pickup location, Pune destination, travel date, passenger count, vehicle category, and preferred schedule in advance for a more organized intercity cab booking experience."
        }
    ]
};




const faqData = [
    {
        question: "Can I book Goa to Pune cabs with Virendra Cab?",
        answer: "Virendra Cab can arrange private cab travel from Goa to Pune based on the pickup location, Pune destination, travel date, passenger count, luggage, and preferred vehicle category. The journey can be planned according to personal, family, or business travel needs."
    },
    {
        question: "Is a one-way Goa to Pune cab available?",
        answer: "Travellers who need transportation from Goa to Pune can enquire about a one-way cab service. The Goa pickup point, Pune drop location, departure time, and vehicle requirements can be discussed before confirming the journey."
    },
    {
        question: "Can I book a round-trip cab between Goa and Pune?",
        answer: "Passengers who require transportation in both directions can discuss a round-trip cab arrangement. Travel dates, return timing, sightseeing requirements, and the overall itinerary can be considered while planning the booking."
    },
    {
        question: "Can I get a Goa pickup from different locations for Pune travel?",
        answer: "Pickup arrangements can be discussed from suitable Goa locations such as Panjim, Candolim, Calangute, Baga, Margao, Vasco da Gama, and other areas depending on the passenger's accommodation or starting point."
    },
    {
        question: "What type of vehicle can I choose for Goa to Pune travel?",
        answer: "Vehicle selection depends on passenger count, luggage, journey duration, and comfort preferences. Virendra Cab can discuss suitable vehicle options after understanding the complete requirements of the Goa to Pune journey."
    },
    {
        question: "Are Goa to Pune cabs suitable for family travel?",
        answer: "Families can enquire about private cab transportation by sharing their group size, luggage details, Goa pickup location, Pune destination, and preferred departure time. The vehicle category can be considered according to the family's requirements."
    },
    {
        question: "Can I travel from Goa to Pune by cab after a holiday?",
        answer: "A private cab can be considered for travellers returning to Pune after a Goa vacation. The journey can be planned from the hotel, resort, residence, or another suitable pickup location according to the traveler's departure schedule."
    },
    {
        question: "Can I book a Goa to Pune cab for business travel?",
        answer: "Business travellers can enquire about private transportation from Goa to Pune for meetings, professional commitments, client visits, or other work-related requirements. Pickup and drop timings can be discussed around the planned schedule."
    },
    {
        question: "Can I carry luggage in a Goa to Pune cab?",
        answer: "Passengers can share their approximate luggage quantity while making the enquiry. Vehicle selection can then be discussed based on the number of travellers and available luggage so that the journey is planned appropriately."
    },
    {
        question: "What details are needed to book Goa to Pune cabs?",
        answer: "For a booking enquiry, passengers can provide the Goa pickup address, Pune drop location, travel date, preferred departure time, number of passengers, luggage details, one-way or round-trip requirement, and preferred vehicle type."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Saurabh Naik",
        feedback: "After spending a few days in Goa, I needed a direct cab to Pune for my family. The pickup location, luggage requirements, and departure schedule were discussed with Virendra Cab beforehand, making the return journey easier to organise.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Manasi Kulkarni",
        feedback: "Returning from Goa to Pune by private cab worked well for our group because we had several bags and wanted a direct journey. Virendra Cab coordinated the travel details around our planned departure and destination.",
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
  "name": "Goa to Pune Cabs",
  "image": "https://www.virendracabs.com/assets/images/goa-to-pune-cabs.webp",
  "description": "Goa to Pune Cabs provide a convenient private travel option for passengers planning a comfortable journey from Goa to Pune. Virendra Cab offers cab and taxi booking options for families, couples, business travelers, tourists and groups looking for dependable road transportation between the two cities. Travelers searching for Goa to Pune Cab, Goa to Pune Cab Service and Goa to Pune One Way Cab can arrange a vehicle according to their preferred departure schedule and travel requirements. A Goa to Pune Taxi can be useful for direct transfers, family trips, business travel and return journeys after a Goa holiday. Passengers comparing Goa to Pune Cab Price or Goa to Pune Taxi Fare can contact Virendra Cab to check the current fare based on the selected vehicle, journey type and passenger requirements. Goa to Pune Car Rental options can also be considered by travelers who need a private vehicle for longer journeys or flexible travel plans. The service covers searches for Goa Pune Cab Service, Goa to Pune Cabs, Goa to Pune Taxi, Goa to Pune Cab Service and Goa to Pune Taxi Service. Travelers can also arrange a Cab from Goa to Pune or Taxi from Goa to Pune for direct transportation. For passengers planning an intercity journey, a Goa to Pune Outstation Cab offers the flexibility of private road travel with a planned pickup and destination schedule.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.virendracabs.com/goa-to-pune-cabs"
  }
};



    return (
        <div>

<Helmet>
  <title>
    Goa to Pune Cabs | Goa to Pune One Way Cab | +91 9022549022
  </title>

  <meta
    name="description"
    content="Book Goa to Pune Cabs for one-way and outstation travel. Enquire about Goa to Pune taxi, cab service, car rental, cab price and taxi fare with Virendra Cab."
  />

  <meta
    name="keywords"
    content="Goa to Pune Cabs, Goa to Pune Cab, Goa to Pune Cab Service, Goa to Pune One Way Cab, Goa to Pune Taxi, Goa to Pune Cab Price, Goa Pune Cab Service, Goa to Pune Car Rental, Goa to Pune Taxi Fare, Goa to Pune Taxi Service, Cab from Goa to Pune, Taxi from Goa to Pune, Goa to Pune Outstation Cab, Goa to Pune Cabs, Goa to Pune Taxi, Goa to Pune Cab Booking, Goa to Pune One Way Taxi, Goa Pune Taxi Booking, Goa Pune Car Rental, Goa Pune Private Cab, Goa Pune Outstation Taxi, Pune Cab from Goa"
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
                            <img src='/images/keyword/13.jpg' alt='img' className='img-fluid' />
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

export default Goatopunecabservice;