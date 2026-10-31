import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Corporatecarrentalservice() {



const cardData = {
    keyword: "Corporate Car Rental Services in Pune",
    headingDescription: "Corporate Car Rental Services in Pune by Virendra Cab are designed for businesses that need dependable transportation for employees, executives, clients, airport transfers, meetings, and regular office travel. With flexible vehicle options, professional drivers, and arrangements for daily, monthly, and outstation requirements, companies can organize comfortable and punctual travel according to their schedules and operational needs.",
    topPlaces: [
        {
            title: "Hyderabad",
            description: "Corporate travel between Pune and Hyderabad can be arranged for meetings, business visits, project assignments, client interactions, and executive movement with suitable chauffeur-driven vehicles."
        },
        {
            title: "Bengaluru",
            description: "Business teams travelling to Bengaluru can choose comfortable corporate transportation for technology meetings, office visits, conferences, employee movement, and scheduled intercity journeys."
        },
        {
            title: "Ahmedabad",
            description: "Pune to Ahmedabad corporate travel is suitable for industrial visits, client meetings, business conferences, and long-distance employee or executive movement with planned vehicle support."
        },
        {
            title: "Surat",
            description: "Corporate travellers heading to Surat can use dependable outstation transportation for business appointments, textile and industrial visits, client meetings, and scheduled company travel."
        },
        {
            title: "Vadodara",
            description: "Business journeys between Pune and Vadodara can be coordinated for corporate meetings, plant visits, project work, employee travel, and executive assignments with comfortable vehicles."
        },
        {
            title: "Indore",
            description: "Pune to Indore transportation provides a practical option for corporate teams handling business meetings, regional operations, site visits, and recurring professional travel."
        },
        {
            title: "Goa",
            description: "Corporate travel to Goa can be organized for conferences, business events, team programs, client visits, and executive journeys with vehicles selected according to passenger and luggage requirements."
        },
        {
            title: "Jaipur",
            description: "Long-distance corporate journeys from Pune to Jaipur can support business conferences, executive visits, company events, client meetings, and planned professional travel."
        },
        {
            title: "Jodhpur",
            description: "Companies arranging travel to Jodhpur can use comfortable outstation cab arrangements for business visits, project requirements, corporate events, and executive transportation."
        },
        {
            title: "Delhi",
            description: "Pune to Delhi corporate transportation is useful for senior executives, business delegations, client meetings, conferences, and extended professional assignments requiring dependable intercity travel."
        }
    ],
    services: [
        {
            name: "Corporate car rental services in Pune",
            description: "Corporate car rental services in Pune provide businesses with flexible chauffeur-driven transportation for meetings, employee movement, client visits, office requirements, airport travel, and regular business journeys. Vehicle selection can be planned according to passenger count, travel duration, route, and corporate usage."
        },
        {
            name: "Corporate cab service Pune",
            description: "Corporate cab service in Pune supports scheduled and on-demand travel for employees, managers, clients, and visiting business professionals. Comfortable vehicles and professional drivers help companies coordinate daily transportation while keeping travel arrangements convenient and organized."
        },
        {
            name: "Corporate taxi service Pune",
            description: "Corporate taxi service in Pune is suitable for office commuting, business meetings, site visits, airport transfers, and local professional travel. Companies can arrange transportation based on required timings, destinations, passenger numbers, and recurring business schedules."
        },
        {
            name: "Corporate car hire Pune",
            description: "Corporate car hire in Pune offers businesses access to suitable vehicles for short-term assignments, full-day requirements, executive movement, client handling, and scheduled corporate travel. Chauffeur-driven options make business journeys easier to coordinate without depending on employees to drive."
        },
        {
            name: "Company car rental Pune",
            description: "Company car rental in Pune helps organizations arrange dedicated or requirement-based vehicles for employees, managers, executives, and business guests. Rental plans can be aligned with office schedules, meetings, airport movements, project visits, and other professional transportation needs."
        },
        {
            name: "Employee cab service Pune",
            description: "Employee cab service in Pune supports regular workforce transportation through planned pickup and drop arrangements. Businesses can organize routes around office timings, employee locations, shift schedules, and recurring travel requirements for smoother daily commuting."
        },
        {
            name: "Corporate transportation Pune",
            description: "Corporate transportation in Pune covers a broad range of business mobility requirements, including employee movement, executive travel, client transfers, airport pickups, office commuting, meetings, and company events. Customized vehicle arrangements help organizations manage different travel needs through one transportation solution."
        },
        {
            name: "Business car rental Pune",
            description: "Business car rental in Pune is designed for professionals attending meetings, client appointments, conferences, office visits, and project assignments. Chauffeur-driven cars provide a comfortable environment for travelling executives while allowing them to focus on their work during the journey."
        },
        {
            name: "Office cab service Pune",
            description: "Office cab service in Pune helps companies manage employee travel between residential areas and workplaces with planned pickup and drop schedules. Suitable vehicle arrangements can support regular office commuting, multiple employee routes, and different working shifts."
        },
        {
            name: "Corporate travel service Pune",
            description: "Corporate travel service in Pune supports employees, executives, clients, and business guests across local and outstation routes. Transportation can be organized for meetings, conferences, airport journeys, site visits, business tours, and other professional travel requirements."
        },
        {
            name: "Monthly corporate car rental Pune",
            description: "Monthly corporate car rental in Pune is useful for companies requiring vehicles for extended assignments, executive mobility, sales teams, project staff, or recurring business travel. Long-term arrangements can be planned around vehicle category, usage pattern, driver requirement, and duration."
        },
        {
            name: "Corporate vehicle leasing Pune",
            description: "Corporate vehicle leasing in Pune provides businesses with a practical transportation arrangement for longer-duration vehicle requirements. Companies can discuss suitable vehicle categories, usage patterns, driver support, contract duration, and operational requirements before finalizing an arrangement."
        },
        {
            name: "Corporate fleet management Pune",
            description: "Corporate fleet management in Pune helps organizations coordinate multiple vehicles used for employee transportation, executive movement, airport transfers, and business travel. Route planning, vehicle allocation, scheduling, driver coordination, and regular service monitoring can be organized according to company requirements."
        },
        {
            name: "Employee pickup and drop Pune",
            description: "Employee pickup and drop in Pune can be arranged around office locations, residential pickup points, working hours, and shift timings. Planned transportation helps businesses maintain smoother employee movement while providing convenient daily commuting support."
        },
        {
            name: "Staff transportation service Pune",
            description: "Staff transportation service in Pune is suitable for organizations managing regular employee movement across offices, industrial areas, IT parks, and operational locations. Vehicle deployment can be structured according to passenger volume, routes, reporting times, and recurring schedules."
        },
        {
            name: "Corporate airport transfer Pune",
            description: "Corporate airport transfer in Pune provides scheduled pickup and drop transportation for executives, employees, clients, and visiting business guests. Flight timing, luggage requirements, pickup location, and suitable vehicle category can be considered while arranging airport travel."
        },
        {
            name: "Executive car rental Pune",
            description: "Executive car rental in Pune is suited to senior management, business leaders, visiting clients, and important corporate guests who require a comfortable and professional travel experience. Premium sedans and SUVs can be selected according to the occasion and passenger requirements."
        },
        {
            name: "Corporate sedan rental Pune",
            description: "Corporate sedan rental in Pune offers a practical option for individual executives, employees, client visits, meetings, and airport transportation. Comfortable chauffeur-driven sedans can be arranged for hourly, daily, recurring, or specific corporate travel requirements."
        },
        {
            name: "Corporate SUV rental Pune",
            description: "Corporate SUV rental in Pune provides additional space and comfort for executives, small business teams, client groups, and outstation assignments. SUVs are suitable for longer journeys, site visits, airport travel, and professional trips where additional passenger or luggage capacity is useful."
        },
        {
            name: "Corporate Innova rental Pune",
            description: "Corporate Innova rental in Pune is suitable for team travel, executive groups, airport transfers, client transportation, and longer business journeys. The spacious cabin makes it a practical choice when companies need comfortable transportation for multiple passengers and luggage."
        },
        {
            name: "Company employee transportation Pune",
            description: "Company employee transportation in Pune helps organizations coordinate regular workforce movement through structured pickup and drop services. Routes, reporting points, office timings, shift schedules, and vehicle requirements can be planned to support dependable daily commuting."
        },
        {
            name: "IT company cab service Pune",
            description: "IT company cab service in Pune supports employees working across technology offices, business parks, and extended shifts. Transportation can be planned around office timings, employee pickup points, shift requirements, and recurring routes to make daily workplace travel more manageable."
        },
        {
            name: "Corporate outstation taxi Pune",
            description: "Corporate outstation taxi service from Pune is suitable for client visits, plant inspections, business meetings, conferences, project assignments, and executive travel to nearby and distant cities. Vehicles can be selected according to journey length, passenger count, and luggage requirements."
        },
        {
            name: "Corporate car rental with driver Pune",
            description: "Corporate car rental with driver in Pune gives businesses a convenient chauffeur-driven transportation option for employees, executives, clients, airport transfers, meetings, and outstation journeys. Professional driver support allows travellers to focus on work instead of managing the road journey."
        },
        {
            name: "Affordable corporate cab service Pune",
            description: "Affordable corporate cab service in Pune offers businesses a practical way to manage regular transportation while considering vehicle type, travel frequency, route distance, and usage requirements. Companies can discuss suitable packages for employee movement, office travel, airport transfers, and business journeys."
        }
    ],
    tableData: [
        ["Corporate car rental services in Pune"],
        ["Corporate cab service Pune"],
        ["Corporate taxi service Pune"],
        ["Corporate car hire Pune"],
        ["Company car rental Pune"],
        ["Employee cab service Pune"],
        ["Corporate transportation Pune"],
        ["Business car rental Pune"],
        ["Office cab service Pune"],
        ["Corporate travel service Pune"],
        ["Monthly corporate car rental Pune"],
        ["Corporate vehicle leasing Pune"],
        ["Corporate fleet management Pune"],
        ["Employee pickup and drop Pune"],
        ["Staff transportation service Pune"],
        ["Corporate airport transfer Pune"],
        ["Executive car rental Pune"],
        ["Corporate sedan rental Pune"],
        ["Corporate SUV rental Pune"],
        ["Corporate Innova rental Pune"],
        ["Company employee transportation Pune"],
        ["IT company cab service Pune"],
        ["Corporate outstation taxi Pune"],
        ["Corporate car rental with driver Pune"],
        ["Affordable corporate cab service Pune"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Business-Focused Transportation",
            WhyChoosedescription: "Virendra Cab understands that corporate travel depends on punctual reporting, comfortable vehicles, professional conduct, and dependable scheduling. Transportation can be organized around the specific requirements of employees, executives, clients, and business visitors."
        },
        {
            WhyChooseheading: "Flexible Corporate Packages",
            WhyChoosedescription: "Companies can discuss daily, hourly, monthly, recurring, and long-term transportation requirements based on their travel patterns. Flexible arrangements make it easier to select a suitable vehicle and service structure for different business needs."
        },
        {
            WhyChooseheading: "Professional Chauffeur Support",
            WhyChoosedescription: "Experienced drivers support corporate journeys with a professional approach and familiarity with business travel requirements. Chauffeur-driven transportation allows employees and executives to concentrate on calls, meetings, preparation, or other work while travelling."
        },
        {
            WhyChooseheading: "Employee Travel Coordination",
            WhyChoosedescription: "Regular employee transportation can be planned around office locations, pickup points, shift timings, and recurring routes. This makes Virendra Cab suitable for organizations that need structured daily staff movement rather than occasional cab bookings."
        },
        {
            WhyChooseheading: "Executive Vehicle Options",
            WhyChoosedescription: "Sedans, SUVs, and spacious vehicles such as Innova can be selected according to the nature of the corporate journey. Executive and client-facing requirements can be matched with a more suitable vehicle category for a comfortable business travel experience."
        },
        {
            WhyChooseheading: "Airport & Client Transfers",
            WhyChoosedescription: "Corporate airport transportation can be coordinated for employees, senior executives, clients, and visiting business guests. Pickup and drop requirements can be planned around flight schedules, luggage, reporting locations, and required vehicle capacity."
        },
        {
            WhyChooseheading: "Local and Outstation Coverage",
            WhyChoosedescription: "Business requirements may involve travel within Pune as well as journeys to other cities for meetings, projects, conferences, plant visits, and client appointments. Corporate cab arrangements can therefore be planned for both local and outstation requirements."
        },
        {
            WhyChooseheading: "Reliable Support for Companies",
            WhyChoosedescription: "Virendra Cab focuses on making corporate transportation easier to coordinate through clear travel requirements, appropriate vehicle selection, professional drivers, and planned scheduling. Businesses can communicate their recurring or one-time requirements and arrange transportation accordingly."
        }
    ]
};


const faqData = [
    {
        question: "What are Corporate Car Rental Services in Pune?",
        answer: "Corporate Car Rental Services in Pune are designed for companies that need reliable transportation for employees, executives, clients, meetings, airport transfers, conferences, site visits, and business events. Virendra Cab can arrange suitable cars based on the company's travel schedule and passenger requirements."
    },
    {
        question: "How can a company book Corporate Car Rental Services in Pune?",
        answer: "Companies can share their pickup locations, destinations, travel dates, passenger details, required vehicle category, and expected usage duration with Virendra Cab. For recurring requirements, the travel schedule can also be discussed in advance to plan the transportation arrangement."
    },
    {
        question: "Can corporate car rental in Pune be used for employee transportation?",
        answer: "Yes, corporate rental cars can be used for employee movement between offices, client locations, meetings, training programs, events, and other business destinations. Multiple pickup and drop points can be considered when planning the daily transportation requirement."
    },
    {
        question: "Are Corporate Car Rental Services in Pune available for airport transfers?",
        answer: "Corporate car rentals can be arranged for Pune Airport transfers as well as airport journeys involving nearby cities. Business travelers, visiting executives, clients, and employees can use private cars for scheduled pickups and drops based on their flight timings."
    },
    {
        question: "Can companies hire cars for business meetings and conferences in Pune?",
        answer: "A corporate rental car can be useful for transporting executives and employees to business meetings, conferences, seminars, exhibitions, and training programs. Vehicles can be scheduled around office locations, hotels, conference venues, and other planned stops."
    },
    {
        question: "Can I book a corporate rental car from Pune for outstation business travel?",
        answer: "Outstation corporate travel can be arranged from Pune to destinations such as Mumbai, Nashik, Kolhapur, Satara, Aurangabad, or other business locations. One-way, round-trip, and multi-day requirements can be discussed according to the company's itinerary."
    },
    {
        question: "Is a driver provided with corporate car rental services in Pune?",
        answer: "Driver-assisted corporate car rental can be arranged for companies that prefer convenient transportation for employees, executives, and clients. A dedicated driving arrangement can be particularly useful when the itinerary includes several meetings or locations."
    },
    {
        question: "Can corporate cars be hired for client transportation in Pune?",
        answer: "Businesses can arrange rental cars for receiving clients, visiting executives, business partners, or guests. Transfers between Pune Airport, railway stations, hotels, offices, and meeting venues can be planned according to the visitor's schedule."
    },
    {
        question: "Can companies use Corporate Car Rental Services in Pune for full-day requirements?",
        answer: "Full-day corporate car rental can be considered when employees or executives need transportation across several locations during working hours. The vehicle can support office visits, meetings, site inspections, client appointments, and other scheduled business movements."
    },
    {
        question: "How early should a company book Corporate Car Rental Services in Pune?",
        answer: "Advance planning is recommended for conferences, business events, airport transfers, employee programs, and outstation assignments. Providing the travel schedule, number of passengers, locations, and vehicle preference early helps Virendra Cab plan the rental arrangement more effectively."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Ritesh Kulkarni",
        feedback: "Our company needed transportation for executives attending meetings at different locations in Pune. The corporate car rental arrangement made it easier to coordinate the day's schedule and gave our team a convenient way to move between appointments.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Shalini Bhosale",
        feedback: "We arranged a car for a visiting client who was travelling between Pune Airport, the hotel, and our office. The private corporate travel arrangement helped us manage the visitor's schedule comfortably without arranging separate rides.",
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
  "name": "Corporate Car Rental Services in Pune",
  "image": "https://virendracabs.com/assets/images/corporate-car-rental-services-in-pune.webp",
  "description": "Corporate Car Rental Services in Pune provide organized transportation support for companies, offices, business teams, employees, executives and visiting clients who need reliable chauffeur-driven vehicles for professional travel. Virendra Cab offers corporate car rental arrangements for daily office commuting, employee transportation, client meetings, business appointments, airport transfers, railway station transfers, conferences, corporate events and outstation business trips. Corporate cab service Pune can be arranged for individual employees as well as teams travelling between offices, hotels, industrial areas, airports and meeting venues. Businesses can choose flexible local, full-day, recurring or outstation transportation arrangements based on their operational requirements. Corporate car hire Pune is suitable for executive movement, client visits, official meetings and scheduled business travel, while employee cab service Pune can support regular pickup and drop requirements for staff. Dedicated corporate vehicles can also be arranged for companies that require transportation for a defined period or recurring office duties. Corporate taxi service Pune offers a convenient option for airport transfers, business meetings and local professional travel, while corporate outstation cab Pune can support intercity assignments, conferences and site visits. Vehicle requirements can be planned according to passenger count, travel schedule, vehicle category and service duration. Companies can share their office locations, employee transportation requirements, travel routes and preferred booking schedule to discuss a suitable corporate transportation arrangement. Final charges depend on vehicle type, distance, duration, route, waiting time, tolls, parking and the overall travel plan. Virendra Cab provides corporate-focused transportation solutions across Pune and nearby business areas for companies seeking structured and convenient car rental services.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "32174"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://virendracabs.com/corporate-car-rental-services-in-pune"
  }
};





    return (
        <div>

<Helmet>
  <title>
    Corporate Car Rental Services in Pune | Corporate Cab Service Pune | +91 9022549022
  </title>

  <meta
    name="description"
    content="Corporate Car Rental Services in Pune for employee transportation, business travel, client meetings, airport transfers, office travel, corporate events and outstation requirements."
  />

  <meta
    name="keywords"
    content="Corporate car rental services in Pune, Corporate cab service Pune, Corporate car rental Pune, Corporate taxi service Pune, Corporate cab rental Pune, Corporate car hire Pune, Corporate taxi hire Pune, Corporate vehicle rental Pune, Corporate transport service Pune, Corporate transportation Pune, Corporate employee transport Pune, Employee cab service Pune, Employee transportation service Pune, Office cab service Pune, Office car rental Pune, Company car rental Pune, Company cab service Pune, Business car rental Pune, Business cab service Pune, Corporate chauffeur service Pune, Corporate chauffeur driven car Pune, Corporate travel cab Pune, Corporate travel taxi Pune, Corporate airport transfer Pune, Corporate airport cab Pune, Corporate airport taxi Pune, Corporate railway station transfer Pune, Corporate outstation cab Pune, Corporate outstation taxi Pune, Corporate local cab Pune, Corporate car booking Pune, Corporate cab booking Pune, Corporate taxi booking Pune, Corporate vehicle hiring Pune, Corporate car hire with driver Pune, Dedicated corporate car Pune, Dedicated corporate cab Pune, Monthly corporate car rental Pune, Monthly corporate cab service Pune, Long term corporate car rental Pune, Employee pickup drop service Pune, Office employee transport Pune, Corporate staff transportation Pune, Corporate client transportation Pune, Business meeting cab Pune, Corporate event transportation Pune, Corporate conference cab Pune, Corporate guest transportation Pune, Executive corporate cab Pune, Corporate fleet rental Pune"
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
                            <img src='/images/keyword/134.jpeg' alt='img' className='img-fluid' />
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

export default Corporatecarrentalservice ;