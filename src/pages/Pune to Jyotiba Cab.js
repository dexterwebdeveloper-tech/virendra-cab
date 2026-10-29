import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Punetojyotibacab() {



const cardData = {
    keyword: "Pune to Jyotiba Cab",
    headingDescription: "Pune to Jyotiba Cab from Virendra Cab is a convenient private travel option for devotees and families planning a pilgrimage to Jyotiba Temple near Kolhapur. The journey can be customized for a direct Jyotiba visit or combined with important nearby destinations such as Mahalaxmi Temple, Panhala Fort, Narsobawadi, Khidrapur, Admapur, and Kaneri Math. Travellers can choose suitable vehicles including sedan, Ertiga, Innova, Innova Crysta, or Kia Carens according to group size and luggage requirements. Whether the requirement is a one-day darshan package, a two-day Jyotiba and Panhala tour, or a broader Kolhapur pilgrimage itinerary, Virendra Cab provides flexible private transportation from Pune and Pimpri Chinchwad.",

    topPlaces: [
        {
            title: "Jyotiba Temple",
            description: "Jyotiba Temple is the primary pilgrimage destination for this route, and a private cab from Pune makes it convenient for devotees to plan their darshan according to their preferred schedule."
        },
        {
            title: "Mahalaxmi Temple, Kolhapur",
            description: "Mahalaxmi Temple can be combined with Jyotiba Temple for a popular Kolhapur pilgrimage itinerary, making private cab travel suitable for families and groups."
        },
        {
            title: "Panhala Fort",
            description: "Panhala Fort is an ideal addition to a Jyotiba journey for travellers interested in combining religious darshan with historical sightseeing around Kolhapur."
        },
        {
            title: "Admapur",
            description: "Admapur can be included in a broader religious itinerary from Pune, particularly for devotees planning a Balumama-focused pilgrimage alongside Jyotiba and Kolhapur."
        },
        {
            title: "Narsobawadi",
            description: "Narsobawadi is suitable for travellers extending their Kolhapur pilgrimage to additional religious destinations, with private cab travel allowing a flexible multi-stop itinerary."
        },
        {
            title: "Khidrapur",
            description: "Khidrapur can be included in a multi-destination pilgrimage route from Pune, providing an opportunity to combine Jyotiba darshan with heritage and temple sightseeing."
        },
        {
            title: "Kaneri Math",
            description: "Kaneri Math is a useful stop for travellers planning a combined Jyotiba and Kolhapur sightseeing package with private transportation."
        },
        {
            title: "Gagangiri",
            description: "Gagangiri can be incorporated into a broader Kolhapur-region itinerary for travellers looking to cover additional spiritual destinations during their private cab journey."
        },
        {
            title: "Kolhapur City",
            description: "Kolhapur provides convenient access to Jyotiba Temple, Mahalaxmi Temple, Panhala, and other regional attractions, making it a practical base for a multi-destination pilgrimage."
        },
        {
            title: "Pimpri Chinchwad",
            description: "Devotees from Pimpri Chinchwad can arrange a private cab pickup for Jyotiba Temple and plan a one-day or multi-day pilgrimage according to their group and itinerary."
        }
    ],

    services: [
        {
            name: "Pune to Kolhapur Cab Service",
            description: "Pune to Kolhapur cab service is suitable for devotees, families, and business travellers looking for private transportation between Pune and Kolhapur with flexible destination planning."
        },
        {
            name: "Pune to Kolhapur Cab Booking",
            description: "Advance Pune to Kolhapur cab booking allows travellers to organize private transportation for Jyotiba darshan, Mahalaxmi Temple visits, Panhala sightseeing, and other regional requirements."
        },
        {
            name: "Pune to Balumama Cab Service",
            description: "Pune to Balumama cab service provides private transportation for devotees travelling towards Admapur and planning a religious journey with convenient pickup and return arrangements."
        },
        {
            name: "Pune to Admapur Cab",
            description: "Pune to Admapur cab service is useful for devotees visiting the Balumama temple area and combining the journey with other pilgrimage destinations around Kolhapur."
        },
        {
            name: "Pune to Kolhapur Laxmi Temple Cab",
            description: "Pune to Kolhapur Laxmi Temple cab service provides private transportation for devotees visiting Mahalaxmi Temple, with the option to combine the journey with Jyotiba and other nearby destinations."
        },
        {
            name: "Pune to Jyotiba Cab Package",
            description: "A Pune to Jyotiba cab package can be planned around temple darshan, travel duration, vehicle selection, and additional Kolhapur sightseeing requirements."
        },
        {
            name: "Pune to Jyotiba Innova Cab Package",
            description: "Pune to Jyotiba Innova cab packages are suitable for families and groups looking for spacious private transportation during a pilgrimage journey to Jyotiba Temple."
        },
        {
            name: "Pune to Jyotiba Innova Crysta Cab",
            description: "Pune to Jyotiba Innova Crysta cab service is a comfortable option for larger families and groups requiring additional passenger and luggage space."
        },
        {
            name: "Pune to Jyotiba Ertiga Cab",
            description: "Pune to Jyotiba Ertiga cab service provides a practical 7-seater option for families and small groups travelling together for temple darshan."
        },
        {
            name: "Pune to Jyotiba Sedan Cab Booking",
            description: "Pune to Jyotiba sedan cab booking can suit smaller families or groups seeking a compact private vehicle for their pilgrimage journey from Pune."
        },
        {
            name: "Pimpri Chinchwad to Jyotiba Temple Cab",
            description: "Pimpri Chinchwad to Jyotiba Temple cab service allows devotees from the western Pune region to arrange direct private transportation for their pilgrimage."
        },
        {
            name: "Pimpri Chinchwad to Jyotiba Cab",
            description: "Pimpri Chinchwad to Jyotiba cab service is suitable for families and groups planning a direct temple journey or a broader Kolhapur pilgrimage itinerary."
        },
        {
            name: "Pune to Kolhapur Gagangiri Cab",
            description: "Pune to Kolhapur Gagangiri cab service can be arranged for devotees planning a multi-destination spiritual journey around the Kolhapur region."
        },
        {
            name: "Pune to Jyotiba Kia Carens Cab",
            description: "Pune to Jyotiba Kia Carens cab service provides another spacious vehicle option for families and groups requiring comfortable seating during the pilgrimage."
        },
        {
            name: "Pimpri Chinchwad to Jyotiba Temple Cab",
            description: "Devotees from Pimpri Chinchwad can arrange a private cab to Jyotiba Temple and customize the journey according to their preferred darshan schedule and additional stops."
        },
        {
            name: "Pune to Jyotiba Temple Kolhapur Cab",
            description: "Pune to Jyotiba Temple Kolhapur cab service is designed for devotees seeking direct private transportation to the temple with suitable vehicle choices for different group sizes."
        },
        {
            name: "Pune to Jyotiba Mahalaxmi Cab",
            description: "Pune to Jyotiba Mahalaxmi cab service combines two important pilgrimage destinations around Kolhapur, making it suitable for families planning a dedicated religious journey."
        },
        {
            name: "Pune Jyotiba Mahalaxmi Darshan Package",
            description: "A Pune Jyotiba Mahalaxmi darshan package can combine both temples in a planned private itinerary, with the schedule adjusted according to travel time and darshan requirements."
        },
        {
            name: "Pune to Kolhapur Mahalaxmi Jyotiba Cab",
            description: "Pune to Kolhapur Mahalaxmi Jyotiba cab service is suitable for devotees who want to visit both prominent temples in a single private journey."
        },
        {
            name: "Pune Jyotiba Mahalaxmi Panhala Tour",
            description: "A Pune Jyotiba Mahalaxmi Panhala tour allows travellers to combine religious visits with historical sightseeing through a flexible private cab itinerary."
        },
        {
            name: "Pune to Jyotiba and Panhala Fort Cab",
            description: "Pune to Jyotiba and Panhala Fort cab service is suitable for travellers who want to combine temple darshan with a visit to the historic Panhala Fort."
        },
        {
            name: "Pune to Kolhapur Jyotiba Tour Package",
            description: "A Pune to Kolhapur Jyotiba tour package can be customized around temple darshan, travel duration, vehicle type, and additional Kolhapur sightseeing requirements."
        },
        {
            name: "Pune Kolhapur Jyotiba One-Day Package",
            description: "The Pune Kolhapur Jyotiba one-day package is suitable for devotees who want to complete their temple visit and return journey within a planned single-day schedule."
        },
        {
            name: "Pune to Mahalaxmi Temple and Jyotiba Cab",
            description: "Pune to Mahalaxmi Temple and Jyotiba cab service provides private transportation for devotees planning a combined visit to both important Kolhapur pilgrimage destinations."
        },
        {
            name: "Pune Jyotiba Panhala Two-Day Package",
            description: "A two-day Pune Jyotiba Panhala package gives travellers more flexibility to combine temple darshan, fort sightseeing, rest breaks, and comfortable return travel."
        },
        {
            name: "Pune to Kolhapur Pilgrimage Cab",
            description: "Pune to Kolhapur pilgrimage cab service can be used for Jyotiba, Mahalaxmi, and other religious destinations, with the itinerary planned around the group's preferred stops."
        },
        {
            name: "Pune Kolhapur Mahalaxmi Jyotiba Darshan",
            description: "Pune Kolhapur Mahalaxmi Jyotiba darshan travel allows devotees to cover two major temples through private transportation and a schedule suited to their pilgrimage requirements."
        },
        {
            name: "Pune Narsobawadi Jyotiba Mahalaxmi Tour",
            description: "A Pune Narsobawadi Jyotiba Mahalaxmi tour can combine multiple religious destinations into a broader pilgrimage itinerary with private cab transportation."
        },
        {
            name: "Pune Jyotiba Mahalaxmi Narsobawadi Cab",
            description: "Pune Jyotiba Mahalaxmi Narsobawadi cab service is suitable for devotees planning a multi-temple journey with flexible travel timing and private transportation."
        },
        {
            name: "Pune Kolhapur Jyotiba Khidrapur Package",
            description: "A Pune Kolhapur Jyotiba Khidrapur package can combine temple visits with a stop at Khidrapur, providing a broader religious and heritage-focused road trip."
        },
        {
            name: "Pune to Jyotiba Kaneri Math Cab Package",
            description: "Pune to Jyotiba Kaneri Math cab packages allow travellers to combine Jyotiba darshan with a visit to Kaneri Math through a convenient private vehicle itinerary."
        }
    ],

    tableData: [
        ["Pune to Kolhapur Cab Service"],
        ["Pune to Kolhapur Cab Booking"],
        ["Pune to Balumama Cab Service"],
        ["Pune to Admapur Cab"],
        ["Pune to Kolhapur Laxmi Temple Cab"],
        ["Pune to Jyotiba Cab Package"],
        ["Pune to Jyotiba Innova Cab Package"],
        ["Pune to Jyotiba Innova Crysta Cab"],
        ["Pune to Jyotiba Ertiga Cab"],
        ["Pune to Jyotiba Sedan Cab Booking"],
        ["Pimpri Chinchwad to Jyotiba Temple Cab"],
        ["Pimpri Chinchwad to Jyotiba Cab"],
        ["Pune to Kolhapur Gagangiri Cab"],
        ["Pune to Jyotiba Kia Carens Cab"],
        ["Pimpri Chinchwad to Jyotiba Temple Cab"],
        ["Pune to Jyotiba Temple Kolhapur Cab"],
        ["Pune to Jyotiba Mahalaxmi Cab"],
        ["Pune Jyotiba Mahalaxmi Darshan Package"],
        ["Pune to Kolhapur Mahalaxmi Jyotiba Cab"],
        ["Pune Jyotiba Mahalaxmi Panhala Tour"],
        ["Pune to Jyotiba and Panhala Fort Cab"],
        ["Pune to Kolhapur Jyotiba Tour Package"],
        ["Pune Kolhapur Jyotiba One-Day Package"],
        ["Pune to Mahalaxmi Temple and Jyotiba Cab"],
        ["Pune Jyotiba Panhala Two-Day Package"],
        ["Pune to Kolhapur Pilgrimage Cab"],
        ["Pune Kolhapur Mahalaxmi Jyotiba Darshan"],
        ["Pune Narsobawadi Jyotiba Mahalaxmi Tour"],
        ["Pune Jyotiba Mahalaxmi Narsobawadi Cab"],
        ["Pune Kolhapur Jyotiba Khidrapur Package"],
        ["Pune to Jyotiba Kaneri Math Cab Package"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Dedicated Jyotiba Pilgrimage Travel",
            WhyChoosedescription: "Virendra Cab provides private transportation focused on Jyotiba Temple journeys from Pune, allowing devotees to organize direct darshan trips or broader Kolhapur pilgrimage routes."
        },
        {
            WhyChooseheading: "Multiple Vehicle Options",
            WhyChoosedescription: "Sedan, Ertiga, Innova, Innova Crysta, and Kia Carens options provide flexibility for different passenger counts, luggage requirements, and comfort preferences."
        },
        {
            WhyChooseheading: "Mahalaxmi And Jyotiba Combinations",
            WhyChoosedescription: "Travellers can combine Jyotiba Temple with Mahalaxmi Temple in a single itinerary, making the cab suitable for devotees planning a focused Kolhapur darshan."
        },
        {
            WhyChooseheading: "One-Day And Two-Day Plans",
            WhyChoosedescription: "The journey can be organized as a one-day Jyotiba visit or a longer two-day itinerary that includes Panhala Fort and other destinations according to the group's available time."
        },
        {
            WhyChooseheading: "Flexible Pickup From Pune Areas",
            WhyChoosedescription: "Devotees from Pune and Pimpri Chinchwad can plan convenient pickups before beginning their journey towards Jyotiba Temple and other Kolhapur destinations."
        },
        {
            WhyChooseheading: "Multi-Destination Pilgrimage Routes",
            WhyChoosedescription: "Beyond Jyotiba and Mahalaxmi, travellers can include Narsobawadi, Khidrapur, Admapur, Kaneri Math, or other destinations when planning an extended religious itinerary."
        },
        {
            WhyChooseheading: "Suitable For Family Groups",
            WhyChoosedescription: "Private cab travel allows families and groups to remain together throughout the pilgrimage, with flexible stops and travel breaks according to their requirements."
        },
        {
            WhyChooseheading: "Advance Package Booking",
            WhyChoosedescription: "Advance booking makes it easier to reserve the preferred vehicle and organize the complete travel schedule for one-day darshan, multi-day pilgrimage, or Jyotiba sightseeing packages."
        }
    ]
};


const faqData = [
    {
        question: "Can I book a Pune to Jyotiba cab with Virendra Cab?",
        answer: "Virendra Cab can arrange private cab travel from Pune to Jyotiba according to your travel date, pickup location, number of passengers, luggage, and preferred vehicle type. The trip can be planned for temple visits, family travel, or a dedicated pilgrimage journey."
    },
    {
        question: "Is a one-way cab available from Pune to Jyotiba?",
        answer: "Passengers travelling only from Pune to Jyotiba can enquire about a one-way cab arrangement. Pickup details, departure time, passenger count, and vehicle requirements can be discussed before the journey is confirmed."
    },
    {
        question: "Can I hire a cab from Pune to Jyotiba for temple darshan?",
        answer: "A private cab can be arranged for devotees visiting Shri Jyotiba Temple near Kolhapur. The travel schedule can be planned around the preferred darshan timing and other stops included in the pilgrimage itinerary."
    },
    {
        question: "Can I book a round-trip cab for Pune to Jyotiba travel?",
        answer: "Round-trip cab travel can be considered for devotees who want to visit Jyotiba and return to Pune. The return schedule, waiting requirements, and sightseeing preferences can be discussed while planning the complete journey."
    },
    {
        question: "What type of vehicle is suitable for a Pune to Jyotiba pilgrimage?",
        answer: "The appropriate cab depends on the number of travellers, luggage, journey duration, and comfort requirements. Virendra Cab can help identify a suitable vehicle category after understanding the group's travel needs."
    },
    {
        question: "Can senior citizens travel from Pune to Jyotiba by private cab?",
        answer: "Private cab travel can be convenient for families travelling with senior citizens because the group can plan the pickup and departure according to its requirements. Passengers can share mobility and comfort considerations while making the cab enquiry."
    },
    {
        question: "Can I get a Pune pickup from my local area for the Jyotiba trip?",
        answer: "Pickup arrangements can be discussed from various Pune locations such as Kothrud, Baner, Wakad, Hinjewadi, Hadapsar, Viman Nagar, Pimpri-Chinchwad, and other suitable residential or commercial areas."
    },
    {
        question: "Can I combine Jyotiba Temple with other places near Kolhapur?",
        answer: "Travellers can discuss adding suitable destinations around Kolhapur to their Jyotiba pilgrimage itinerary, depending on the available time and preferred route. The journey can be planned around temple visits, sightseeing, or additional religious stops."
    },
    {
        question: "Is Pune to Jyotiba cab suitable for a family pilgrimage?",
        answer: "Families can use a private cab for a Pune to Jyotiba pilgrimage by sharing their group size, travel date, luggage requirements, and preferred schedule. A suitable vehicle can be considered according to the number of family members."
    },
    {
        question: "What details are needed to book a Pune to Jyotiba cab?",
        answer: "For a cab enquiry, passengers can provide their Pune pickup address, travel date, preferred departure time, number of travellers, luggage details, one-way or round-trip requirement, sightseeing plans, and preferred vehicle category."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Rajendra Pawar",
        feedback: "A family pilgrimage to Jyotiba was planned from Pune, including senior members who preferred travelling in a private vehicle. Virendra Cab helped us coordinate the pickup and journey details around our temple visit schedule.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Mitali Deshpande",
        feedback: "The Pune to Jyotiba trip was planned as a weekend religious visit with friends. Having a dedicated cab made the long journey and return planning much easier, and the travel requirements were discussed clearly before the booking.",
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
  "name": "Pune to Jyotiba Cab",
  "image": "https://www.virendracabs.com/assets/images/pune-to-jyotiba-cab.webp",
  "description": "Pune to Jyotiba Cab is a convenient private travel option for devotees planning a religious journey from Pune to Jyotiba Temple and nearby pilgrimage destinations around Kolhapur. Virendra Cab provides cab booking support for travelers searching for Pune to Kolhapur Cab Service, Pune to Kolhapur Cab Booking and Pune to Jyotiba Cab. The journey can also be planned for devotees visiting Admapur and Balumama Temple, making it suitable for a broader pilgrimage itinerary across important religious places in the region. Passengers looking for Pune to Balumama Cab Service or Pune to Admapur Cab can arrange private transportation according to their preferred travel schedule. The service is also useful for travelers visiting the Pune to Kolhapur Laxmi Temple route along with Jyotiba and other nearby spiritual destinations. Families, senior citizens and groups can enquire about suitable vehicle options based on passenger count, luggage and trip duration. One-way and round-trip cab arrangements can be planned according to the darshan schedule and return requirements, while multi-destination journeys can be customized when passengers want to cover Jyotiba, Kolhapur, Admapur and other pilgrimage locations in the same trip. Current cab fare depends on the selected vehicle, route, travel date and journey type, so passengers can contact Virendra Cab for the latest fare details. Advance booking helps organize pickup timing and destination details before departure. Whether the requirement is Jyotiba darshan, Balumama pilgrimage, Kolhapur temple travel or a combined religious tour, Virendra Cab provides a practical private cab option from Pune.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.virendracabs.com/pune-to-jyotiba-cab"
  }
};





    return (
        <div>

<Helmet>
  <title>
    Pune to Jyotiba Cab | Pune to Jyotiba Temple Taxi Service | +91 9022549022
  </title>

  <meta
    name="description"
    content="Book Pune to Jyotiba Cab for temple darshan and pilgrimage travel. Get Pune to Kolhapur, Admapur and Balumama cab services with convenient private taxi options from Virendra Cab."
  />

  <meta
    name="keywords"
    content="Pune to Jyotiba Cab, Pune to Kolhapur Cab Service, Pune to Kolhapur Cab Booking, Pune to Balumama Cab Service, Pune to Admapur Cab, Pune to Kolhapur Laxmi Temple Cab, Pune to Jyotiba Taxi, Pune to Jyotiba Taxi Service, Pune to Jyotiba Cab Service, Pune to Jyotiba Cab Booking, Pune to Jyotiba Cab Fare, Pune to Jyotiba Taxi Fare, Pune to Jyotiba One Way Cab, Pune to Jyotiba Round Trip Cab, Pune to Jyotiba Outstation Cab, Cab from Pune to Jyotiba, Taxi from Pune to Jyotiba, Jyotiba Temple Cab Pune, Jyotiba Darshan Cab Pune, Jyotiba Yatra Cab Pune, Pune Jyotiba Car Rental, Pune Jyotiba Taxi Booking, Pune Kolhapur Taxi Service, Pune Kolhapur Private Cab, Pune to Balumama Taxi, Balumama Temple Cab Pune, Pune to Admapur Taxi, Admapur Balumama Cab Pune, Pune to Kolhapur Laxmi Temple Taxi, Kolhapur Laxmi Temple Cab Pune, Pune to Jyotiba Private Cab"
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
                            <img src='/images/keyword/29.jpg' alt='img' className='img-fluid' />
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

export default Punetojyotibacab ;