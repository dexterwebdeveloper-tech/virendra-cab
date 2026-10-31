import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Vipcabserviceinpuneairport() {



const cardData = {
    keyword: "VIP Cab Service in Pune Airport",
    headingDescription: "VIP Cab Service in Pune Airport by Virendra Cab is designed for travellers, executives, corporate guests, and important visitors who expect comfortable, punctual, and professional airport transportation. From premium arrival pickups and departure drops to chauffeur-driven luxury sedans, SUVs, and executive vehicles, the service can be arranged around flight schedules, passenger requirements, luggage, and travel preferences.",
    topPlaces: [
        {
            title: "Hinjewadi",
            description: "Pune Airport transfers to Hinjewadi are suitable for corporate executives, technology professionals, visiting clients, and business guests requiring a comfortable and timely journey between the airport and major IT hubs."
        },
        {
            title: "Koregaon Park",
            description: "VIP airport transportation to Koregaon Park provides a convenient option for premium hotel guests, executives, business visitors, and private travellers looking for a professionally managed airport arrival or departure."
        },
        {
            title: "Kalyani Nagar",
            description: "Airport pickups and drops for Kalyani Nagar can be arranged for senior professionals, corporate guests, and travellers staying at premium properties, with vehicle selection based on comfort and luggage needs."
        },
        {
            title: "Baner",
            description: "Pune Airport to Baner transfers are useful for executives, business travellers, and private guests who prefer chauffeur-driven transportation with planned pickup timings and comfortable premium vehicles."
        },
        {
            title: "Magarpatta City",
            description: "VIP airport travel to Magarpatta can support corporate visitors, professionals, and executive travellers attending meetings or working at nearby business and technology facilities."
        },
        {
            title: "Viman Nagar",
            description: "Viman Nagar airport transportation offers quick and convenient connectivity for travellers staying near the airport, visiting corporate offices, or requiring a premium chauffeur-driven transfer after landing."
        },
        {
            title: "Hadapsar",
            description: "VIP airport cab arrangements between Pune Airport and Hadapsar are suitable for business travellers, employees, executives, and guests who require comfortable transportation at scheduled arrival or departure times."
        },
        {
            title: "Aundh",
            description: "Airport transfers to Aundh can be arranged for private travellers, senior professionals, visiting guests, and families seeking a more comfortable alternative for their journey to or from Pune Airport."
        },
        {
            title: "Pimpri-Chinchwad",
            description: "VIP airport transportation to Pimpri-Chinchwad is useful for industrial executives, corporate teams, visiting clients, and travellers requiring spacious vehicles for longer airport journeys with luggage."
        },
        {
            title: "Deccan",
            description: "Pune Airport transfers to Deccan can accommodate executives, hotel guests, private travellers, and business visitors who want a professionally coordinated airport pickup or departure drop."
        }
    ],
    services: [
        {
            name: "VIP cab service in Pune airport",
            description: "VIP cab service in Pune airport provides premium transportation for executives, business guests, private travellers, and important visitors arriving at or departing from Pune Airport. Vehicle selection can be planned according to passenger count, luggage, flight timing, and the desired level of comfort."
        },
        {
            name: "Pune airport VIP taxi service",
            description: "Pune airport VIP taxi service is designed for travellers who prefer a more comfortable and professional airport journey. Chauffeur-driven cars can be arranged for arrivals, departures, corporate guests, executive travel, and private airport transportation."
        },
        {
            name: "VIP airport pickup Pune",
            description: "VIP airport pickup in Pune can be scheduled around the passenger's flight arrival, terminal requirements, luggage, and destination. A suitable premium vehicle and professional chauffeur can help make the transition from the airport to a hotel, residence, office, or business location more convenient."
        },
        {
            name: "VIP airport drop Pune",
            description: "VIP airport drop in Pune provides professionally arranged transportation from homes, hotels, offices, and business locations to Pune Airport. Pickup timing can be planned according to flight schedules so travellers have a comfortable and organized journey to the terminal."
        },
        {
            name: "Luxury airport transfer Pune",
            description: "Luxury airport transfer in Pune offers chauffeur-driven transportation for travellers seeking enhanced comfort and a premium experience. Suitable cars can be arranged for executives, VIP guests, corporate visitors, special occasions, and private airport journeys."
        },
        {
            name: "Premium airport cab Pune",
            description: "Premium airport cab service in Pune combines comfortable vehicles with professional chauffeur support for airport pickups and drops. It is suitable for executives, corporate travellers, visiting guests, and private passengers who prefer a higher level of travel comfort."
        },
        {
            name: "VIP car rental Pune airport",
            description: "VIP car rental at Pune Airport gives travellers access to suitable premium vehicles for airport transfers, executive movement, business travel, and private transportation. Rental arrangements can be discussed according to duration, destination, vehicle category, and chauffeur requirements."
        },
        {
            name: "VIP chauffeur service Pune airport",
            description: "VIP chauffeur service at Pune Airport is suitable for executives, senior professionals, corporate guests, and important visitors who require a professionally driven vehicle. Chauffeur support allows passengers to travel comfortably without managing airport traffic or parking themselves."
        },
        {
            name: "Executive airport taxi Pune",
            description: "Executive airport taxi service in Pune provides comfortable transportation for senior managers, business leaders, corporate guests, and professionals travelling for meetings or assignments. Premium sedans and SUVs can be selected according to passenger and luggage requirements."
        },
        {
            name: "Private airport cab Pune",
            description: "Private airport cab service in Pune offers dedicated transportation for individuals, families, executives, and business guests without sharing the vehicle with other passengers. The journey can be arranged directly between the airport and the preferred destination."
        },
        {
            name: "Luxury sedan airport transfer Pune",
            description: "Luxury sedan airport transfers in Pune are suitable for individual executives, couples, senior professionals, and VIP guests who value a refined and comfortable cabin. Chauffeur-driven sedans can be arranged for both arrivals and departures."
        },
        {
            name: "Luxury SUV airport transfer Pune",
            description: "Luxury SUV airport transfers in Pune provide additional cabin and luggage space for executive groups, families, corporate guests, and travellers carrying multiple bags. SUVs are especially practical when comfort and capacity are important for the airport journey."
        },
        {
            name: "BMW airport pickup Pune",
            description: "BMW airport pickup in Pune provides a premium chauffeur-driven option for executives, VIP guests, corporate visitors, and special arrivals. Vehicle availability can be confirmed according to the travel date, flight schedule, passenger requirements, and selected BMW model."
        },
        {
            name: "Mercedes airport taxi Pune",
            description: "Mercedes airport taxi service in Pune offers a premium transportation option for senior executives, important guests, corporate delegations, and travellers seeking an elevated airport experience. Chauffeur-driven service can be arranged for arrivals and departures."
        },
        {
            name: "Audi airport transfer Pune",
            description: "Audi airport transfer in Pune is suitable for executive travel, premium guest movement, business visits, and private airport transportation. A chauffeur-driven Audi can provide a comfortable and professional environment for travellers during their airport journey."
        },
        {
            name: "VIP guest airport pickup Pune",
            description: "VIP guest airport pickup in Pune helps companies, hotels, event organizers, and private hosts arrange professional transportation for important visitors. The service can be coordinated around flight schedules, destination details, luggage, and appropriate vehicle selection."
        },
        {
            name: "Corporate VIP airport transfer Pune",
            description: "Corporate VIP airport transfer in Pune is designed for senior executives, visiting directors, clients, business partners, and important corporate guests. Premium chauffeur-driven vehicles can be arranged for airport arrival and departure requirements with attention to timing and comfort."
        },
        {
            name: "Premium Pune airport transportation",
            description: "Premium Pune airport transportation provides comfortable mobility for executives, private travellers, corporate guests, and visitors requiring dependable airport connectivity. Vehicle categories can be matched to passenger count, luggage, destination, and the occasion."
        },
        {
            name: "VIP cab booking Pune airport",
            description: "VIP cab booking at Pune Airport allows travellers to plan their airport journey in advance with the preferred vehicle category, pickup or drop location, travel timing, and passenger details. Advance planning is particularly useful for early departures, late arrivals, and important business travel."
        },
        {
            name: "Airport luxury car hire Pune",
            description: "Airport luxury car hire in Pune is suitable for travellers who want a premium vehicle for airport pickup, drop, or onward transportation. Luxury sedans and SUVs can be arranged with professional chauffeur support based on availability and travel requirements."
        },
        {
            name: "VIP arrival pickup Pune airport",
            description: "VIP arrival pickup at Pune Airport provides a convenient transfer for executives, corporate guests, families, and private travellers after landing. Pickup arrangements can be coordinated around the flight schedule, luggage collection, passenger count, and final destination."
        },
        {
            name: "VIP departure drop Pune airport",
            description: "VIP departure drop to Pune Airport helps travellers reach the terminal through a planned chauffeur-driven transfer. Pickup timing can be coordinated according to flight schedules, travel distance, luggage, and the required vehicle category."
        },
        {
            name: "Professional airport chauffeur Pune",
            description: "Professional airport chauffeur service in Pune provides trained driver support for VIP, executive, corporate, and private airport travel. A professionally driven vehicle allows passengers to focus on business calls, schedules, luggage, or personal arrangements during the journey."
        },
        {
            name: "24/7 VIP airport cab Pune",
            description: "24/7 VIP airport cab service in Pune is suitable for early-morning departures, late-night arrivals, irregular flight schedules, and business travellers who require airport transportation outside conventional hours. Bookings can be planned around the passenger's actual travel schedule."
        },
        {
            name: "Affordable VIP airport taxi Pune",
            description: "Affordable VIP airport taxi service in Pune provides travellers with an opportunity to choose a premium airport transfer according to their budget, vehicle preference, and travel requirements. Different vehicle categories can be considered to balance comfort, convenience, and overall trip needs."
        }
    ],
    tableData: [
        ["VIP cab service in Pune airport"],
        ["Pune airport VIP taxi service"],
        ["VIP airport pickup Pune"],
        ["VIP airport drop Pune"],
        ["Luxury airport transfer Pune"],
        ["Premium airport cab Pune"],
        ["VIP car rental Pune airport"],
        ["VIP chauffeur service Pune airport"],
        ["Executive airport taxi Pune"],
        ["Private airport cab Pune"],
        ["Luxury sedan airport transfer Pune"],
        ["Luxury SUV airport transfer Pune"],
        ["BMW airport pickup Pune"],
        ["Mercedes airport taxi Pune"],
        ["Audi airport transfer Pune"],
        ["VIP guest airport pickup Pune"],
        ["Corporate VIP airport transfer Pune"],
        ["Premium Pune airport transportation"],
        ["VIP cab booking Pune airport"],
        ["Airport luxury car hire Pune"],
        ["VIP arrival pickup Pune airport"],
        ["VIP departure drop Pune airport"],
        ["Professional airport chauffeur Pune"],
        ["24/7 VIP airport cab Pune"],
        ["Affordable VIP airport taxi Pune"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Premium Airport Experience",
            WhyChoosedescription: "Virendra Cab focuses on providing a comfortable and professionally coordinated airport journey for executives, VIP guests, corporate travellers, and private passengers. Vehicle selection can be matched to the occasion, passenger count, luggage, and desired level of comfort."
        },
        {
            WhyChooseheading: "Professional Chauffeur Support",
            WhyChoosedescription: "Chauffeur-driven transportation allows passengers to travel without handling airport traffic, parking, or navigation themselves. Professional driver support is particularly useful for executives, visiting guests, senior professionals, and travellers with demanding schedules."
        },
        {
            WhyChooseheading: "Arrival & Departure Transfers",
            WhyChoosedescription: "Both airport pickup and airport drop requirements can be arranged according to the traveller's flight schedule. This makes the service suitable for incoming guests, departing executives, business travellers, families, and private passengers."
        },
        {
            WhyChooseheading: "Luxury Vehicle Choices",
            WhyChoosedescription: "Travellers can select from suitable sedan and SUV categories depending on passenger requirements and the nature of the journey. Premium options can be considered for executive travel, corporate hosting, VIP guests, and special airport occasions."
        },
        {
            WhyChooseheading: "Corporate Guest Handling",
            WhyChoosedescription: "Businesses can arrange airport transportation for visiting clients, senior management, directors, delegates, and other important guests. A dedicated chauffeur-driven vehicle provides a professional way to manage airport-to-office, hotel, or event transportation."
        },
        {
            WhyChooseheading: "Convenient Flight-Based Planning",
            WhyChoosedescription: "Airport transportation can be planned around the traveler's flight details, pickup time, destination, and luggage requirements. Advance coordination helps make airport journeys more organized, particularly when the traveller has an important meeting or tight schedule after arrival."
        },
        {
            WhyChooseheading: "Round-the-Clock Availability",
            WhyChoosedescription: "Airport travel often takes place outside normal business hours, including early departures and late-night arrivals. VIP cab arrangements can be planned around the actual flight schedule so travellers can request transportation for different travel timings."
        },
        {
            WhyChooseheading: "Comfort With Practical Pricing",
            WhyChoosedescription: "VIP transportation does not have to mean selecting the most expensive vehicle for every journey. Virendra Cab can help travellers consider an appropriate vehicle category based on comfort expectations, passenger count, luggage, destination, and overall travel requirements."
        }
    ]
};


const faqData = [
    {
        question: "What is VIP Cab Service in Pune Airport?",
        answer: "VIP Cab Service in Pune Airport is a premium private transportation option for passengers who prefer a comfortable and convenient airport transfer. Virendra Cab can arrange airport pickups and drops for business executives, families, visiting guests, and travelers with specific comfort requirements."
    },
    {
        question: "How can I book a VIP Cab Service in Pune Airport?",
        answer: "To book a VIP cab from Pune Airport, provide your flight details, pickup or drop location, travel date, expected arrival or departure time, passenger count, and preferred vehicle type. These details help Virendra Cab coordinate the airport journey according to your schedule."
    },
    {
        question: "Can VIP cab service pick up passengers from Pune Airport?",
        answer: "Yes, a VIP cab can be arranged for passengers arriving at Pune Airport. The service can be planned for transfers to hotels, business offices, residential locations, railway stations, or other destinations across Pune and nearby areas."
    },
    {
        question: "Can I book a VIP cab to Pune Airport from another city?",
        answer: "Airport drop services can be arranged from Pune and nearby cities or towns for passengers travelling to Pune Airport. Outstation travelers can also discuss suitable pickup arrangements when they need a private vehicle for their airport departure."
    },
    {
        question: "Which vehicles are suitable for VIP airport transfers in Pune?",
        answer: "The vehicle can be selected according to passenger count, luggage, travel distance, and comfort preference. Premium sedans and spacious SUVs such as an Innova or Innova Crysta may be considered for VIP airport transportation."
    },
    {
        question: "Is a driver provided with VIP Cab Service in Pune Airport?",
        answer: "Driver-assisted service can be arranged for VIP airport transfers, allowing passengers to focus on their flight schedule rather than driving or navigating traffic. This option can be useful for executives, families, senior travelers, and visiting guests."
    },
    {
        question: "Can corporate executives use VIP Cab Service at Pune Airport?",
        answer: "Corporate travelers can use VIP airport cabs for executive pickups, client transfers, business visits, conferences, and office transportation. The cab can be scheduled around the passenger's flight timing and onward business itinerary."
    },
    {
        question: "Can I use VIP Cab Service in Pune Airport for hotel transfers?",
        answer: "Yes, VIP airport transportation can be arranged between Pune Airport and hotels across Pune. It can be particularly useful for business guests, tourists, wedding guests, and visitors who want a private vehicle for their airport-to-hotel journey."
    },
    {
        question: "Can VIP Cab Service from Pune Airport be used for outstation travel?",
        answer: "Passengers arriving at Pune Airport can arrange onward outstation travel to destinations such as Mumbai, Lonavala, Mahabaleshwar, Nashik, Shirdi, or other cities. The journey can be planned according to the final destination and travel requirements."
    },
    {
        question: "How early should I reserve a VIP Cab Service in Pune Airport?",
        answer: "Advance reservation is recommended when the airport transfer is connected with an important business meeting, wedding, tour, or tight travel schedule. Providing the flight number, arrival or departure time, passenger count, and destination in advance helps with better trip planning."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Karan Mehta",
        feedback: "A VIP cab was arranged for my arrival at Pune Airport before a series of business meetings. Having a private vehicle ready for the airport-to-office transfer made the day's schedule much easier to manage.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Radhika Patil",
        feedback: "Our family needed a comfortable airport transfer after arriving in Pune with several bags. The VIP cab provided a convenient way to continue our journey from Pune Airport to our hotel without arranging multiple vehicles.",
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
  "name": "VIP Cab Service in Pune Airport",
  "image": "https://virendracabs.com/assets/images/vip-cab-service-in-pune-airport.webp",
  "description": "VIP Cab Service in Pune Airport is a premium chauffeur-driven airport transportation service for business travellers, corporate executives, visiting guests, families and passengers who prefer a comfortable and well-organized airport transfer. Virendra Cab provides VIP airport pickup and drop arrangements from Pune Airport with travel planned around the passenger's flight schedule. Pune airport VIP taxi service is suitable for business meetings, corporate travel, hotel transfers, private journeys, special occasions and executive transportation. VIP airport pickup Pune can be arranged for passengers arriving at the airport, with the pickup schedule coordinated according to the provided flight details and destination. VIP airport drop Pune is suitable for travellers who need a convenient transfer from their residence, office, hotel or meeting venue to Pune Airport. Luxury airport transfer Pune offers a premium travel experience for passengers seeking spacious vehicles and professional chauffeur-driven transportation. Premium airport taxi Pune can be arranged for individuals, executives and small groups travelling between the airport and important locations across Pune and nearby areas. VIP airport cab Pune can also be used for hotel transfers, corporate guest transportation, conferences, events and business appointments. Luxury car rental with chauffeur Pune provides an option for passengers who need a vehicle beyond a single airport journey, including full-day business travel and local movement. Airport transfers can be planned as one-way or round-trip bookings depending on the travel itinerary. Customers can share their flight details, pickup or drop location, travel date, passenger count and preferred vehicle category to receive a customized quotation. Final charges depend on the selected vehicle, travel distance, waiting requirements, route, tolls, parking and overall itinerary. Virendra Cab provides organized VIP airport transportation from Pune Airport to residential, corporate, hotel and commercial destinations across Pune and surrounding areas.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "29753"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://virendracabs.com/vip-cab-service-in-pune-airport"
  }
};




    return (
        <div>

<Helmet>
  <title>
    VIP Cab Service in Pune Airport | Pune Airport VIP Taxi Service | +91 9022549022
  </title>

  <meta
    name="description"
    content="VIP Cab Service in Pune Airport for premium pickup and drop, luxury airport transfers, executive travel, corporate guests and chauffeur-driven airport transportation."
  />

  <meta
    name="keywords"
    content="VIP cab service in Pune airport, Pune airport VIP taxi service, VIP airport pickup Pune, VIP airport drop Pune, Luxury airport transfer Pune, Premium airport taxi Pune, VIP airport cab Pune, VIP airport transfer Pune, VIP taxi Pune airport, VIP car rental Pune airport, VIP car hire Pune airport, Luxury cab Pune airport, Luxury taxi Pune airport, Premium cab Pune airport, Premium taxi Pune airport, Executive airport cab Pune, Executive airport taxi Pune, Corporate airport transfer Pune, Corporate airport cab Pune, Corporate airport taxi Pune, Business airport transfer Pune, Business class cab Pune airport, VIP airport pickup service Pune, VIP airport drop service Pune, Pune airport luxury car rental, Pune airport chauffeur service, Pune airport chauffeur driven car, Luxury car with driver Pune airport, Premium car rental with driver Pune, VIP airport transportation Pune, Executive airport transportation Pune, VIP airport transfer service Pune, Premium airport transfer service Pune, Luxury airport pickup Pune, Luxury airport drop Pune, Premium airport pickup Pune, Premium airport drop Pune, VIP airport cab booking Pune, VIP airport taxi booking Pune, Pune airport cab booking VIP, Pune airport taxi booking VIP, VIP airport car service Pune, VIP airport travel Pune, VIP airport transfer to Pune city, Pune airport hotel transfer VIP, Pune airport corporate transfer, Pune airport business transfer, Pune airport guest transportation, Pune airport executive transfer, VIP cab near Pune airport, Luxury taxi near Pune airport"
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
                            <img src='/images/keyword/135.jpeg' alt='img' className='img-fluid' />
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

export default Vipcabserviceinpuneairport ;