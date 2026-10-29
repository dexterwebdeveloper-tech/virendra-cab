import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Puneinnovacabs() {



const cardData = {
    keyword: "Pune Innova Cabs",
    headingDescription: "Pune Innova Cabs provide a spacious and comfortable travel option for families, groups, corporate travellers and passengers planning outstation journeys. Virendra Cab offers Innova and Innova Crysta options for airport drops, weddings, family trips, business travel, sightseeing and long-distance routes from Pune and PCMC. Travellers can choose suitable cab arrangements based on passenger capacity, luggage, journey duration and travel requirements, with options for one-way trips, round trips, rentals and online bookings.",
    topPlaces: [
        {
            title: "Pune Airport",
            description: "Arrange a comfortable Innova for airport pickup and drop services from Pune Airport, especially when travelling with family, luggage or a larger group."
        },
        {
            title: "Lonavala",
            description: "An Innova is a practical choice for family and group trips from Pune to Lonavala, offering spacious seating for a comfortable hill-station journey."
        },
        {
            title: "Mahabaleshwar",
            description: "Travel from Pune to Mahabaleshwar in a spacious Innova or Innova Crysta suitable for families carrying luggage for a longer hill-station holiday."
        },
        {
            title: "Shirdi",
            description: "Book an Innova for a comfortable pilgrimage journey from Pune to Shirdi, with enough space for passengers and luggage during the round trip."
        },
        {
            title: "Nashik",
            description: "Pune to Nashik travel becomes convenient with a private Innova, making it suitable for family visits, business trips and sightseeing plans."
        },
        {
            title: "Mumbai",
            description: "An Innova provides comfortable intercity transportation from Pune to Mumbai for corporate travellers, families and groups requiring additional passenger space."
        },
        {
            title: "Goa",
            description: "Plan a longer Pune to Goa road trip with an Innova or Innova Crysta offering spacious seating and luggage capacity for families and groups."
        },
        {
            title: "Alibaug",
            description: "A private Innova makes group travel from Pune to Alibaug convenient for weekend getaways, beach trips and family holidays."
        },
        {
            title: "Bhimashankar",
            description: "Travel to Bhimashankar in a comfortable Innova for pilgrimage and nature trips, with private transportation suited to family and group travel."
        },
        {
            title: "Kolhapur",
            description: "Pune to Kolhapur journeys can be arranged with a spacious Innova for families, corporate travellers and groups planning longer road travel."
        }
    ],
    services: [
        {
            name: "Innova Taxi",
            description: "Innova taxi service provides spacious private transportation for families, groups, corporate travellers and passengers requiring comfortable seating for local or long-distance journeys."
        },
        {
            name: "Book Innova for Outstation",
            description: "Book Innova for outstation travel when you need a comfortable chauffeur-driven vehicle for family holidays, business journeys, pilgrimages or group trips."
        },
        {
            name: "Innova Taxi Near Me Pune",
            description: "Innova taxi near me Pune helps travellers arrange a spacious private vehicle from a convenient pickup location for airport transfers, local travel or outstation journeys."
        },
        {
            name: "Innova Cab Booking",
            description: "Innova cab booking allows passengers to reserve a suitable vehicle in advance according to their travel date, passenger count, luggage and destination."
        },
        {
            name: "Innova Booking Near Me Pimpari",
            description: "Innova booking near me Pimpari provides a convenient option for passengers around the PCMC region looking for a spacious vehicle for local or outstation travel."
        },
        {
            name: "Innova Car Rental for Outstation",
            description: "Innova car rental for outstation journeys is suitable for families and groups who prefer private chauffeur-driven transportation for longer road trips."
        },
        {
            name: "Innova for Airport Drop",
            description: "Innova for airport drop is useful for families and groups carrying multiple bags who need comfortable transportation to Pune Airport at a scheduled time."
        },
        {
            name: "Book Innova Crysta for Outstation",
            description: "Book Innova Crysta for outstation travel when additional comfort, spacious seating and a premium vehicle experience are preferred for a long-distance journey."
        },
        {
            name: "Innova Crysta Taxi",
            description: "Innova Crysta taxi service provides a spacious and premium travel option for families, corporate passengers and groups travelling locally or between cities."
        },
        {
            name: "Innova Cab Rental",
            description: "Innova cab rental offers flexible private transportation for airport transfers, sightseeing, family functions, corporate travel and outstation journeys."
        },
        {
            name: "Innova Outstation Charges",
            description: "Innova outstation charges can be discussed according to the selected travel route, vehicle arrangement, journey type and overall trip requirements."
        },
        {
            name: "Pune Innova for Outstation",
            description: "Pune Innova for outstation travel provides a spacious vehicle choice for passengers planning family vacations, pilgrimages, business trips and long-distance road journeys."
        },
        {
            name: "Innova Taxi Booking",
            description: "Innova taxi booking allows travellers to reserve a comfortable private vehicle in advance for local transportation, airport travel and outstation routes."
        },
        {
            name: "Innova on Rent for Outstation",
            description: "Innova on rent for outstation travel is suitable for passengers seeking a spacious vehicle for a dedicated road trip with family, friends or colleagues."
        },
        {
            name: "Innova Crysta Outstation Charges",
            description: "Innova Crysta outstation charges depend on the journey requirements, selected travel arrangement and route, allowing travellers to plan a suitable premium vehicle booking."
        },
        {
            name: "Innova Outstation Rentals",
            description: "Innova outstation rentals provide private transportation for longer journeys with spacious seating and luggage capacity suited to families and groups."
        },
        {
            name: "Innova Crysta Cab Booking",
            description: "Innova Crysta cab booking provides a convenient way to reserve a premium spacious vehicle for airport transfers, business travel, family trips and outstation journeys."
        },
        {
            name: "8 Seater Innova on Rent in Pune",
            description: "8 seater Innova on rent in Pune is a practical choice for larger families and groups who need additional passenger space for local and outstation travel."
        },
        {
            name: "Innova Booking for Marriage in Pune",
            description: "Innova booking for marriage in Pune helps families arrange comfortable transportation for wedding guests travelling between homes, hotels, venues, railway stations and airports."
        },
        {
            name: "Innova Cab for Rent in Pune",
            description: "Innova cab for rent in Pune provides a spacious private vehicle for family travel, corporate requirements, sightseeing, airport transfers and special occasions."
        },
        {
            name: "Innova Cab for Outstation",
            description: "Innova cab for outstation journeys offers comfortable private transportation for road trips, family vacations, religious tours and intercity travel."
        },
        {
            name: "Innova Cab Service in Pune",
            description: "Innova cab service in Pune provides spacious vehicles for airport transfers, local requirements, corporate movement, family trips and outstation destinations."
        },
        {
            name: "Innova Car Taxi in PCMC",
            description: "Innova car taxi in PCMC provides convenient private transportation for families, professionals and groups travelling within Pimpri Chinchwad or towards outstation destinations."
        },
        {
            name: "Innova Crysta Booking in Pune",
            description: "Innova Crysta booking in Pune allows passengers to reserve a premium spacious cab for airport travel, weddings, corporate journeys, family trips and outstation routes."
        },
        {
            name: "Innova Crysta Cab",
            description: "Innova Crysta cab service offers a comfortable and premium vehicle option for passengers who need additional cabin space and luggage capacity."
        },
        {
            name: "Innova Crysta for Taxi",
            description: "Innova Crysta for taxi service is suitable for family travel, corporate transportation, airport transfers and long-distance journeys requiring a spacious vehicle."
        },
        {
            name: "Innova Crysta Taxi Booking",
            description: "Innova Crysta taxi booking provides advance reservation convenience for travellers planning airport transfers, business trips, weddings or outstation journeys."
        },
        {
            name: "Innova Crysta Taxi Price",
            description: "Innova Crysta taxi price can be planned according to the travel route, vehicle arrangement and journey requirements before confirming the booking."
        },
        {
            name: "Innova Crysta Taxi Price per Km",
            description: "Innova Crysta taxi price per km can be discussed according to the applicable travel arrangement, route and trip requirements for local or outstation use."
        },
        {
            name: "Innova for Rent Outstation",
            description: "Innova for rent outstation provides a convenient option for passengers looking for a spacious private vehicle for family holidays, business travel or group road trips."
        },
        {
            name: "Innova for Outstation Trip",
            description: "Innova for outstation trip is suitable for travellers who want comfortable seating, useful luggage space and private transportation throughout a longer journey."
        },
        {
            name: "Innova for Taxi",
            description: "Innova for taxi service provides a spacious vehicle option for passengers travelling with family, friends, colleagues or additional luggage."
        },
        {
            name: "Innova Rent per Kilometer",
            description: "Innova rent per kilometer can be considered when planning a private vehicle arrangement, with the overall trip requirement and route determining the applicable travel cost."
        },
        {
            name: "Innova Taxi for Outstation",
            description: "Innova taxi for outstation travel provides comfortable transportation for long-distance family trips, corporate journeys, pilgrimages and sightseeing tours."
        },
        {
            name: "Innova Taxi Rates for Outstation",
            description: "Innova taxi rates for outstation travel can be discussed according to the selected route, vehicle arrangement, journey format and passenger requirements."
        },
        {
            name: "Online Innova Taxi Booking",
            description: "Online Innova taxi booking makes it convenient to reserve a spacious private vehicle in advance by sharing the pickup location, destination and travel requirements."
        }
    ],
    tableData: [
        ["Innova Taxi"],
        ["Book Innova for Outstation"],
        ["Innova Taxi Near Me Pune"],
        ["Innova Cab Booking"],
        ["Innova Booking Near Me Pimpari"],
        ["Innova Car Rental for Outstation"],
        ["Innova for Airport Drop"],
        ["Book Innova Crysta for Outstation"],
        ["Innova Crysta Taxi"],
        ["Innova Cab Rental"],
        ["Innova Outstation Charges"],
        ["Pune Innova for Outstation"],
        ["Innova Taxi Booking"],
        ["Innova on Rent for Outstation"],
        ["Innova Crysta Outstation Charges"],
        ["Innova Outstation Rentals"],
        ["Innova Crysta Cab Booking"],
        ["8 Seater Innova on Rent in Pune"],
        ["Innova Booking for Marriage in Pune"],
        ["Innova Cab for Rent in Pune"],
        ["Innova Cab for Outstation"],
        ["Innova Cab Service in Pune"],
        ["Innova Car Taxi in PCMC"],
        ["Innova Crysta Booking in Pune"],
        ["Innova Crysta Cab"],
        ["Innova Crysta for Taxi"],
        ["Innova Crysta Taxi Booking"],
        ["Innova Crysta Taxi Price"],
        ["Innova Crysta Taxi Price per Km"],
        ["Innova for Rent Outstation"],
        ["Innova for Outstation Trip"],
        ["Innova for Taxi"],
        ["Innova Rent per Kilometer"],
        ["Innova Taxi for Outstation"],
        ["Innova Taxi Rates for Outstation"],
        ["Online Innova Taxi Booking"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Spacious Innova Travel",
            WhyChoosedescription: "Virendra Cab provides spacious Innova options for families, groups and corporate travellers who need comfortable seating and sufficient luggage space during their journey."
        },
        {
            WhyChooseheading: "Outstation-Friendly Vehicle",
            WhyChoosedescription: "The Innova is well suited for longer road journeys from Pune to hill stations, pilgrimage destinations, business cities and holiday locations across Maharashtra and beyond."
        },
        {
            WhyChooseheading: "Innova and Innova Crysta Options",
            WhyChoosedescription: "Travellers can choose between suitable Innova and Innova Crysta arrangements according to their preferred comfort level, passenger count, luggage and trip requirements."
        },
        {
            WhyChooseheading: "Airport Transfer Convenience",
            WhyChoosedescription: "Spacious Innova cabs are useful for airport pickups and drops when passengers are travelling with multiple bags, family members or a larger group."
        },
        {
            WhyChooseheading: "Ideal for Family Groups",
            WhyChoosedescription: "Families can travel together in one spacious vehicle instead of arranging multiple smaller cars, making holidays, pilgrimages and intercity trips easier to organize."
        },
        {
            WhyChooseheading: "Wedding and Event Travel",
            WhyChoosedescription: "Innova bookings are suitable for weddings, family functions and special events where guests need comfortable transportation between hotels, venues, homes, stations and airports."
        },
        {
            WhyChooseheading: "PCMC Pickup Support",
            WhyChoosedescription: "Passengers from Pimpri Chinchwad and surrounding areas can arrange Innova transportation for local requirements, airport travel and outstation journeys."
        },
        {
            WhyChooseheading: "Flexible Booking Arrangements",
            WhyChoosedescription: "One-way trips, round journeys, rentals, airport transfers and outstation bookings can be planned according to the destination, travel schedule and vehicle requirements."
        }
    ]
};



const faqData = [
    {
        question: "How can I book Pune Innova Cabs with Virendra Cab?",
        answer: "Pune Innova Cabs can be booked by sharing your pickup location, destination, travel date, preferred timing, and passenger details. Virendra Cab can arrange the vehicle for local travel, airport transfers, family trips, corporate journeys, or outstation routes based on your requirements."
    },
    {
        question: "Are Innova cabs available for outstation travel from Pune?",
        answer: "Innova cabs can be suitable for longer journeys from Pune to destinations such as Mumbai, Goa, Mahabaleshwar, Nashik, Shirdi, Kolhapur, Aurangabad, Hyderabad, and other cities. One-way as well as return travel can be planned according to the itinerary."
    },
    {
        question: "Can I hire an Innova cab in Pune for a family trip?",
        answer: "Families can choose an Innova for trips where comfortable seating and luggage space are important. The vehicle can be arranged for weekend holidays, family functions, sightseeing tours, and multi-day journeys departing from Pune."
    },
    {
        question: "Can Pune Innova Cabs be booked for airport transfers?",
        answer: "Airport transportation can be arranged with an Innova for pickups or drops between Pune Airport and different parts of the city. The booking can be scheduled around your flight timing, particularly when traveling with family members and multiple bags."
    },
    {
        question: "Is an Innova suitable for group travel from Pune?",
        answer: "An Innova can be a practical choice for small groups traveling together, especially when passengers want to stay in one vehicle. The available seating and luggage arrangement can be considered based on the size of your group and the length of the journey."
    },
    {
        question: "Can I book an Innova cab for a wedding or family function in Pune?",
        answer: "Innova rentals can be arranged for weddings, receptions, family functions, guest transportation, and other special occasions. Multiple pickup and drop locations can be discussed in advance when transportation is needed for relatives or guests."
    },
    {
        question: "Are Pune Innova Cabs available for multi-day trips?",
        answer: "Multi-day Innova bookings can be planned for vacations, pilgrimage tours, business travel, and sightseeing itineraries. The journey can cover several destinations while keeping the same vehicle throughout the planned travel schedule."
    },
    {
        question: "Can I use an Innova cab for sightseeing around Pune?",
        answer: "An Innova can be booked for family sightseeing around Pune and nearby destinations. Travelers can plan visits to places such as Shaniwar Wada, Aga Khan Palace, Sinhagad Fort, Mulshi, or other locations according to their preferred itinerary."
    },
    {
        question: "Is an Innova available for one-way trips from Pune?",
        answer: "One-way Innova travel can be arranged when you need transportation from Pune to another city without requiring the same cab for the return journey. This option can work well for relocation, business travel, airport transfers, and planned intercity trips."
    },
    {
        question: "How early should I book Pune Innova Cabs?",
        answer: "Advance booking is useful when an Innova is required for weekends, holidays, weddings, airport travel, or long-distance journeys. Providing your travel date and vehicle requirement early can help with planning the preferred pickup time and trip arrangement."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Pranav Kulkarni",
        feedback: "Our family selected an Innova for a long trip from Pune because we had several passengers and quite a few bags. The spacious setup made the journey comfortable, and having everyone travel together was much more convenient for us.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Sakshi Jadhav",
        feedback: "I needed an Innova for a family function where relatives had to travel together from Pune. The vehicle worked well for the group, and coordinating the pickup was straightforward. It made the transportation part of the event much easier to manage.",
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
  "name": "Pune Innova Cabs",
  "image": "https://www.virendracabs.com/assets/images/pune-innova-cabs.webp",
  "description": "Pune Innova Cabs provide comfortable and spacious private transportation for families, groups, corporate travellers, airport passengers and customers planning outstation journeys from Pune. Virendra Cab supports travellers searching for Innova Taxi, Book Innova for Outstation, Innova Taxi Near Me Pune, Innova Cab Booking, Innova Booking Near Me Pimpri, Innova Car Rental for Outstation, Innova for Airport Drop, Book Innova Crysta for Outstation, Innova Crysta Taxi, Innova Cab Rental and Innova Outstation with suitable vehicle options based on passenger count, luggage and travel requirements. Innova and Innova Crysta cabs are useful for longer journeys where passengers prefer a spacious cabin, comfortable seating and private door-to-door transportation. Pune Innova Cab Booking can be arranged for local travel, airport transfers, full-day requirements, business trips, family functions, sightseeing and outstation journeys. Customers searching for Innova Taxi Near Me in Pune or Innova Booking Near Me in Pimpri can enquire about pickup from their home, office, hotel, railway station or another convenient location. Outstation Innova rental can be planned for destinations such as Mumbai, Lonavala, Mahabaleshwar, Nashik, Shirdi, Goa, Kolhapur, Satara, Solapur, Hyderabad, Indore and other cities according to the travel itinerary. Customers looking for Innova Rental Price in Pune, Innova Cab Fare or Innova Outstation Charges can contact Virendra Cab for the latest applicable fare, as pricing depends on vehicle type, route, distance, duration, trip category and mileage arrangement. One-way and round-trip cab options can be discussed for intercity travel, while full-day and hourly rental arrangements can be considered for local requirements. Innova for Airport Drop is suitable for passengers travelling from Pune to Pune Airport with family members or multiple pieces of luggage, while airport pickup services can also be arranged for arriving passengers. Book Innova Crysta for Outstation travel when additional comfort and a premium cabin experience are preferred for longer journeys. The vehicles can be useful for family holidays, corporate travel, wedding transportation, group outings and pilgrimage trips. Advance Pune Innova Cab Booking allows passengers to plan pickup according to their preferred schedule and travel requirements. Virendra Cab offers flexible Innova and Innova Crysta rental support for local, airport and outstation transportation from Pune and nearby Pimpri-Chinchwad areas.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.virendracabs.com/pune-innova-cabs"
  }
};






    return (
        <div>
<Helmet>
  <title>
    Pune Innova Cabs | Innova Taxi Service Pune | +91 9022549022
  </title>

  <meta
    name="description"
    content="Book Pune Innova Cabs for airport, local and outstation travel. Get Innova and Innova Crysta rental options for families, groups, corporate trips and long-distance journeys."
  />

  <meta
    name="keywords"
    content="Pune Innova Cabs, Innova Taxi, Book Innova for Outstation, Innova Taxi Near Me Pune, Innova Cab Booking, Innova Booking Near Me Pimpri, Innova Car Rental for Outstation, Innova for Airport Drop, Book Innova Crysta for Outstation, Innova Crysta Taxi, Innova Cab Rental, Innova Outstation, Innova Taxi Pune, Innova Cab Pune, Innova Rental Pune, Innova Car Rental Pune, Innova Hire Pune, Innova Cab Hire Pune, Innova Taxi Booking Pune, Innova Car Booking Pune, Innova Cab Booking Online Pune, Innova Outstation Cab Pune, Innova Outstation Taxi Pune, Innova Outstation Rental Pune, Innova Outstation Car Rental Pune, Innova One Way Cab Pune, Innova Round Trip Cab Pune, Innova Private Cab Pune, Innova Family Cab Pune, Innova Group Cab Pune, Innova Corporate Cab Pune, Innova Business Cab Pune, Innova Airport Cab Pune, Innova Airport Taxi Pune, Innova Airport Drop Pune, Innova Airport Pickup Pune, Pune Airport Innova Cab, Pune Airport Innova Taxi, Innova Full Day Rental Pune, Innova Hourly Rental Pune, Innova Local Cab Pune, Innova Local Taxi Pune, Innova Sightseeing Cab Pune, Innova Tour Cab Pune, Innova Wedding Car Pune, Innova Pilgrimage Cab Pune, Innova Rental Price Pune, Innova Cab Fare Pune, Innova Taxi Fare Pune, Innova Outstation Fare Pune, Innova Rental Charges Pune, Innova Crysta Pune, Innova Crysta Cab Pune, Innova Crysta Taxi Pune, Innova Crysta Rental Pune, Innova Crysta Hire Pune, Innova Crysta Cab Booking Pune, Innova Crysta Outstation Pune, Innova Crysta Outstation Cab Pune, Innova Crysta Outstation Rental Pune, Innova Crysta One Way Cab Pune, Innova Crysta Round Trip Cab Pune, Innova Crysta Airport Cab Pune, Innova Crysta Airport Taxi Pune, Innova Crysta Family Cab Pune, Innova Crysta Corporate Cab Pune, Innova Crysta Tour Cab Pune, Innova Crysta Rental Price Pune, Best Innova Cab Pune, Best Innova Taxi Pune, Reliable Innova Cab Pune, Affordable Innova Rental Pune, Innova Taxi Near Me Pimpri, Innova Cab Near Me Pimpri, Innova Rental Near Me Pimpri, Innova Booking Near Me Pimpri Chinchwad, Pimpri Innova Cab, Pimpri Innova Taxi, Pimpri Chinchwad Innova Cab, Pimpri Chinchwad Innova Taxi, Pimpri Chinchwad Innova Rental, Pune to Mumbai Innova Cab, Pune to Lonavala Innova Cab, Pune to Mahabaleshwar Innova Cab, Pune to Nashik Innova Cab, Pune to Shirdi Innova Cab, Pune to Goa Innova Cab, Pune to Kolhapur Innova Cab, Pune to Satara Innova Cab, Pune to Solapur Innova Cab, Pune to Hyderabad Innova Cab, Pune to Indore Innova Cab"
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
                            <img src='/images/keyword/108.jpg' alt='img' className='img-fluid' />
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

export default Puneinnovacabs ;