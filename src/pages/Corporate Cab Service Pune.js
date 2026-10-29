import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Corporatecabservicepune() {



const cardData = {
    keyword: "Corporate Cab Service Pune",
    headingDescription: "Corporate Cab Service Pune provides organized and dependable employee transportation solutions for companies, offices, IT businesses and corporate teams across Pune and Pimpri Chinchwad. Virendra Cab offers dedicated corporate taxi services, employee pickup and drop arrangements, office commute solutions, airport transfers, executive travel and monthly cab plans based on business requirements. Companies can choose suitable vehicles for employees, executives and visiting professionals while planning transportation around office shifts, working hours, meetings and business schedules. With advance corporate cab booking, flexible fleet options and structured travel arrangements, businesses can simplify daily employee mobility and provide a comfortable transportation experience.",
    topPlaces: [
        {
            title: "Hinjewadi IT Park",
            description: "Hinjewadi is a major corporate and technology destination where employee pickup and drop transportation can support IT professionals working across different shifts."
        },
        {
            title: "Pimpri Chinchwad",
            description: "Corporate transportation across Pimpri Chinchwad helps companies manage regular employee commutes between residential areas, offices and industrial business locations."
        },
        {
            title: "Kharadi",
            description: "Kharadi is an important business and IT destination where companies can arrange scheduled employee transportation and executive cab services."
        },
        {
            title: "Magarpatta City",
            description: "Magarpatta City is suitable for office commute and employee transportation arrangements serving professionals working in corporate and technology offices."
        },
        {
            title: "Viman Nagar",
            description: "Viman Nagar provides convenient access to business offices, hotels and Pune Airport, making it useful for employee and corporate airport transportation."
        },
        {
            title: "Pune Airport",
            description: "Corporate airport cab services can help employees, executives and visiting business professionals travel between Pune Airport and company locations."
        },
        {
            title: "Baner",
            description: "Baner has a strong mix of commercial offices and business establishments where scheduled corporate cab services can support daily employee mobility."
        },
        {
            title: "Wakad",
            description: "Wakad is a strategic corporate and residential area where employee pickup and drop services can connect staff with workplaces across Pune and PCMC."
        },
        {
            title: "Hadapsar",
            description: "Hadapsar is an established business and commercial area where companies can arrange regular office transportation for employees and corporate visitors."
        }
    ],
    services: [
        {
            name: "Corporate Cab Service Pune",
            description: "Virendra Cab provides corporate cab services in Pune for companies that require organized employee transportation, office commute support, executive travel and scheduled business mobility."
        },
        {
            name: "Business Cab Service Pune",
            description: "Business cab service in Pune offers private transportation for employees, executives and professionals travelling to offices, meetings, client locations and other business destinations."
        },
        {
            name: "Employee Transport Pune",
            description: "Employee transport services in Pune help companies manage regular staff movement between residential locations and workplaces through planned pickup and drop arrangements."
        },
        {
            name: "Office Cab Service Pune",
            description: "Office cab service in Pune supports daily employee commuting with scheduled vehicles that can be arranged around office timings, shifts and workplace requirements."
        },
        {
            name: "Corporate Taxi Pune",
            description: "Corporate taxi service in Pune provides dedicated transportation for employees, managers, executives and business visitors who need comfortable travel for professional purposes."
        },
        {
            name: "Company Cab Service Pune",
            description: "Company cab service in Pune helps businesses organize employee transportation through suitable vehicles and planned travel schedules for regular office commuting."
        },
        {
            name: "Staff Transportation Pune",
            description: "Staff transportation in Pune can be arranged for companies requiring dependable employee movement across residential areas, office locations and different work shifts."
        },
        {
            name: "Corporate Cab Booking Pune",
            description: "Corporate cab booking in Pune allows businesses to plan employee and executive transportation in advance according to office schedules, pickup locations and vehicle requirements."
        },
        {
            name: "Executive Cab Service Pune",
            description: "Executive cab service in Pune provides a premium private travel option for senior professionals, visiting clients and executives attending meetings or business events."
        },
        {
            name: "Corporate Travel Cab Pune",
            description: "Corporate travel cab service in Pune is suitable for meetings, conferences, client visits, business tours and other professional journeys requiring dedicated transportation."
        },
        {
            name: "Monthly Cab Service Pune",
            description: "Monthly cab service in Pune is useful for businesses that require recurring employee transportation and prefer planned cab arrangements for regular office travel."
        },
        {
            name: "Employee Pickup Drop Pune",
            description: "Employee pickup and drop service in Pune helps companies coordinate daily staff transportation between residential areas and workplaces according to defined schedules."
        },
        {
            name: "Corporate Fleet Pune",
            description: "Corporate fleet solutions in Pune help businesses arrange multiple vehicles for employee transportation, executive travel and different office commute requirements."
        },
        {
            name: "Premium Corporate Cab Pune",
            description: "Premium corporate cab service in Pune provides comfortable private transportation for executives, clients and employees who require a higher level of travel convenience."
        },
        {
            name: "Office Commute Cab Pune",
            description: "Office commute cab service in Pune supports regular employee travel with planned transportation between residential areas, offices and business parks."
        },
        {
            name: "Corporate Cab Service Pune",
            description: "Corporate Cab Service Pune offers organized transportation solutions for companies seeking employee commute, executive travel, airport transfers and scheduled business cab requirements."
        },
        {
            name: "Corporate Cab Services In Pune",
            description: "Corporate Cab Services in Pune can support businesses with recurring staff transportation, office commute requirements, executive movement and professional travel arrangements."
        },
        {
            name: "Corporate Taxi Service Pune",
            description: "Corporate Taxi Service Pune provides private transportation for employees, executives and business visitors travelling between offices, hotels, airports and client locations."
        },
        {
            name: "Employee Transportation Service Pune",
            description: "Employee Transportation Service Pune helps organizations coordinate regular staff movement through planned pickup and drop services designed around workplace timings and employee locations."
        },
        {
            name: "Corporate Car Rental Pune",
            description: "Corporate Car Rental Pune provides businesses with vehicle options for employee travel, executive movement, meetings, client visits and other scheduled corporate requirements."
        },
        {
            name: "Office Cab Service Pune",
            description: "Office Cab Service Pune provides practical transportation for daily employee commuting, helping companies arrange private vehicles according to workplace schedules and staff requirements."
        },
        {
            name: "Business Cab Service Pune",
            description: "Business Cab Service Pune supports professionals travelling for meetings, conferences, client visits, office transfers and other corporate activities across the city."
        },
        {
            name: "Corporate Travel Service Pune",
            description: "Corporate Travel Service Pune provides organized cab transportation for business meetings, employee movement, airport transfers, conferences and professional travel requirements."
        },
        {
            name: "Staff Pickup And Drop Service Pune",
            description: "Staff Pickup and Drop Service Pune helps companies manage scheduled employee transportation between homes and workplaces, including recurring office and shift-based travel."
        },
        {
            name: "Corporate Cab Booking Pune",
            description: "Corporate Cab Booking Pune enables companies to plan employee and executive travel in advance with suitable vehicles, pickup schedules and destination details."
        },
        {
            name: "Best Corporate Cab Service In Pune",
            description: "Companies comparing the best corporate cab service in Pune can consider vehicle availability, employee travel requirements, scheduling flexibility, corporate support and overall transportation convenience."
        },
        {
            name: "Employee Transport Service Near Me Pune",
            description: "Employee transport service near me in Pune can help businesses arrange convenient pickup and drop transportation for staff working in nearby offices, IT parks and commercial areas."
        },
        {
            name: "Office Pickup And Drop Cab Pune",
            description: "Office pickup and drop cab service in Pune supports regular employee commuting by coordinating transportation between staff residences and company workplaces."
        },
        {
            name: "Corporate Taxi Booking Pune",
            description: "Corporate taxi booking in Pune provides businesses with an organized way to arrange transportation for employees, executives, clients and visiting professionals."
        },
        {
            name: "Business Travel Cab Service Pune",
            description: "Business travel cab service in Pune is suitable for meetings, client appointments, conferences, airport journeys and other professional travel where private transportation is preferred."
        },
        {
            name: "Corporate Airport Cab Pune",
            description: "Corporate airport cab service in Pune helps companies arrange airport transportation for employees, executives, clients and business guests travelling through Pune Airport."
        },
        {
            name: "Cab Service For Companies Pune",
            description: "Cab service for companies in Pune provides flexible transportation support for employee commuting, executive travel, office transfers, airport trips and corporate events."
        },
        {
            name: "Staff Transportation In Pune",
            description: "Staff transportation in Pune allows organizations to coordinate employee travel through scheduled cab arrangements suited to different office locations, shifts and pickup zones."
        },
        {
            name: "Corporate Cab Service Pimpri Chinchwad",
            description: "Corporate cab service in Pimpri Chinchwad supports companies with employee pickup and drop, office commute and business travel solutions across major commercial and industrial areas."
        },
        {
            name: "Corporate Taxi Service PCMC",
            description: "Corporate Taxi Service PCMC provides private transportation for employees, executives and business visitors travelling across Pimpri Chinchwad and nearby corporate destinations."
        },
        {
            name: "Employee Transport Service Pimpri Chinchwad",
            description: "Employee Transport Service Pimpri Chinchwad helps businesses organize staff movement between residential areas, offices and workplaces with planned pickup and drop arrangements."
        },
        {
            name: "Office Cab Service Pimpri Chinchwad",
            description: "Office Cab Service Pimpri Chinchwad provides convenient transportation for employees travelling to and from offices, industrial units and business parks across the PCMC region."
        },
        {
            name: "Corporate Car Rental PCMC",
            description: "Corporate Car Rental PCMC offers businesses suitable vehicles for employee movement, executive travel, client visits, meetings and other professional transportation needs."
        },
        {
            name: "Business Cab Service Pimpri Chinchwad",
            description: "Business Cab Service Pimpri Chinchwad provides dedicated travel for professionals attending meetings, office visits, client appointments and business activities throughout the PCMC area."
        },
        {
            name: "Staff Transportation Service PCMC",
            description: "Staff Transportation Service PCMC helps companies coordinate recurring employee travel with suitable vehicles and schedules for office shifts and daily workplace commuting."
        },
        {
            name: "Corporate Cab Booking Pimpri Chinchwad",
            description: "Corporate Cab Booking Pimpri Chinchwad allows organizations to arrange employee and executive transportation in advance according to pickup points, schedules and destination requirements."
        },
        {
            name: "IT Company Cab Service PCMC",
            description: "IT Company Cab Service PCMC provides transportation support for technology companies requiring employee commute solutions, shift-based travel and convenient pickup and drop arrangements."
        },
        {
            name: "Executive Cab Service Pimpri Chinchwad",
            description: "Executive Cab Service Pimpri Chinchwad offers a premium private travel option for senior employees, company representatives, clients and business guests travelling within the PCMC region."
        }
    ],
    tableData: [
        ["Corporate Cab Service Pune"],
        ["Business Cab Service Pune"],
        ["Employee Transport Pune"],
        ["Office Cab Service Pune"],
        ["Corporate Taxi Pune"],
        ["Company Cab Service Pune"],
        ["Staff Transportation Pune"],
        ["Corporate Cab Booking Pune"],
        ["Executive Cab Service Pune"],
        ["Corporate Travel Cab Pune"],
        ["Monthly Cab Service Pune"],
        ["Employee Pickup Drop Pune"],
        ["Corporate Fleet Pune"],
        ["Premium Corporate Cab Pune"],
        ["Office Commute Cab Pune"],
        ["Corporate Cab Service Pune"],
        ["Corporate Cab Services In Pune"],
        ["Corporate Taxi Service Pune"],
        ["Employee Transportation Service Pune"],
        ["Corporate Car Rental Pune"],
        ["Office Cab Service Pune"],
        ["Business Cab Service Pune"],
        ["Corporate Travel Service Pune"],
        ["Staff Pickup And Drop Service Pune"],
        ["Corporate Cab Booking Pune"],
        ["Best Corporate Cab Service In Pune"],
        ["Employee Transport Service Near Me Pune"],
        ["Office Pickup And Drop Cab Pune"],
        ["Corporate Taxi Booking Pune"],
        ["Business Travel Cab Service Pune"],
        ["Corporate Airport Cab Pune"],
        ["Cab Service For Companies Pune"],
        ["Staff Transportation In Pune"],
        ["Corporate Cab Service Pimpri Chinchwad"],
        ["Corporate Taxi Service PCMC"],
        ["Employee Transport Service Pimpri Chinchwad"],
        ["Office Cab Service Pimpri Chinchwad"],
        ["Corporate Car Rental PCMC"],
        ["Business Cab Service Pimpri Chinchwad"],
        ["Staff Transportation Service PCMC"],
        ["Corporate Cab Booking Pimpri Chinchwad"],
        ["IT Company Cab Service PCMC"],
        ["Executive Cab Service Pimpri Chinchwad"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Dedicated Employee Transportation",
            WhyChoosedescription: "Virendra Cab provides organized employee transportation solutions for companies that need dependable daily commuting support between staff residences and office locations across Pune."
        },
        {
            WhyChooseheading: "Flexible Corporate Fleet",
            WhyChoosedescription: "Businesses can select suitable vehicle categories according to employee capacity, executive travel requirements, luggage needs and the number of people travelling for a particular assignment."
        },
        {
            WhyChooseheading: "Pickup And Drop Coordination",
            WhyChoosedescription: "Planned pickup and drop arrangements help companies manage recurring employee travel while coordinating transportation around office timings, shift schedules and workplace locations."
        },
        {
            WhyChooseheading: "Pune And PCMC Coverage",
            WhyChoosedescription: "Corporate transportation can support major business areas across Pune and Pimpri Chinchwad, making it practical for organizations with employees working from different office locations."
        },
        {
            WhyChooseheading: "Executive Travel Support",
            WhyChoosedescription: "Premium cab options are suitable for senior employees, executives, clients and visiting professionals who require comfortable private transportation for meetings and business activities."
        },
        {
            WhyChooseheading: "Airport Transportation",
            WhyChoosedescription: "Dedicated corporate airport cab arrangements help companies coordinate employee and client transfers to and from Pune Airport according to planned business and flight schedules."
        },
        {
            WhyChooseheading: "Recurring Travel Plans",
            WhyChoosedescription: "Monthly and regular cab arrangements provide a practical solution for organizations that require consistent transportation support rather than arranging every employee journey separately."
        },
        {
            WhyChooseheading: "Business Travel Convenience",
            WhyChoosedescription: "Corporate cab services can be used for meetings, conferences, client visits, office transfers and other professional travel, giving businesses a flexible transportation option for different work requirements."
        }
    ]
};

const faqData = [
    {
        question: "Can I book a Corporate Cab Service in Pune with Virendra Cab?",
        answer: "Virendra Cab can arrange corporate cab transportation in Pune according to office requirements, employee travel schedules, pickup locations, passenger count, and preferred vehicle categories. The service can be planned for meetings, office visits, client appointments, and regular business travel."
    },
    {
        question: "What types of corporate travel can be handled in Pune?",
        answer: "Corporate cab requirements can include employee transportation, business meetings, client visits, airport transfers, office-to-office travel, conferences, site visits, and other professional journeys within Pune or to nearby destinations."
    },
    {
        question: "Can companies arrange airport transfers through a corporate cab service?",
        answer: "Businesses can enquire about cab arrangements for employee and client airport transfers in Pune. Pickup or drop locations, flight schedules, passenger details, luggage requirements, and preferred vehicle categories can be shared while planning the journey."
    },
    {
        question: "Is corporate cab service available for regular employee transportation?",
        answer: "Companies requiring recurring employee transportation can discuss their regular routes, working hours, pickup points, drop locations, and passenger requirements. The travel plan can be structured according to the organization's transportation needs."
    },
    {
        question: "Can I book corporate cabs for client meetings in Pune?",
        answer: "Private cab arrangements can be considered for clients, business partners, and visiting professionals attending meetings in Pune. The pickup location, meeting venue, timing, passenger count, and vehicle preference can be discussed before the journey."
    },
    {
        question: "Which Pune areas can be covered for corporate cab bookings?",
        answer: "Corporate cab requirements can be discussed for areas such as Hinjewadi, Kharadi, Viman Nagar, Baner, Wakad, Kothrud, Hadapsar, Magarpatta, Pimpri-Chinchwad, and other suitable business or residential locations across Pune."
    },
    {
        question: "Can a corporate cab be booked for outstation business travel from Pune?",
        answer: "Businesses can enquire about private cab transportation from Pune to nearby and long-distance business destinations such as Mumbai, Nashik, Aurangabad, Kolhapur, Ahmedabad, Surat, or other locations according to their travel requirements."
    },
    {
        question: "What vehicle options are suitable for corporate travel?",
        answer: "Vehicle selection can depend on the number of executives travelling, luggage requirements, journey duration, and the level of comfort preferred for the trip. Virendra Cab can discuss suitable vehicle categories based on the company's specific requirement."
    },
    {
        question: "Can companies arrange cabs for corporate events and conferences?",
        answer: "Cab arrangements can be planned for conferences, exhibitions, seminars, corporate events, training programs, and business gatherings. Multiple pickup points, event schedules, passenger numbers, and destination details can be discussed while organizing the transportation."
    },
    {
        question: "What details are required to book a Corporate Cab Service Pune?",
        answer: "Companies can provide the pickup and drop locations, travel date, reporting time, number of passengers, employee or client travel details, luggage requirements, vehicle preference, and whether the requirement is one-time or recurring when making a booking enquiry."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Sagar Kulkarni",
        feedback: "Our company needed transportation for employees travelling between different Pune office locations and client meetings. Virendra Cab discussed the routes, timings, passenger requirements, and vehicle preferences before arranging the corporate travel.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Priyanka Bendre",
        feedback: "A visiting client needed airport pickup followed by business meetings in Pune. The cab arrangement was coordinated around the travel schedule and meeting locations, giving us a convenient option for managing the day's corporate transportation.",
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
  "name": "Corporate Cab Service Pune",
  "image": "https://www.virendracabs.com/assets/images/corporate-cab-service-pune.webp",
  "description": "Corporate Cab Service Pune provides convenient private transportation solutions for companies, offices, employees, executives and business travelers across Pune. Virendra Cab offers corporate and business travel support for organizations searching for Corporate Cab Service Pune, Business Cab Service Pune and Corporate Taxi Pune. Employee Transport Pune can be arranged for regular office commuting, scheduled shifts, employee pickup and drop requirements, and planned transportation between residential areas and workplaces. Office Cab Service Pune is suitable for companies that need dependable transportation for employees, meetings, client visits, business events and daily office travel. Company Cab Service Pune can support organizations with dedicated cab arrangements based on their operational schedules and transportation requirements. Staff Transportation Pune is useful for businesses managing regular employee movement across different shifts and pickup locations. Corporate Cab Booking Pune allows companies and business travelers to coordinate vehicle requirements in advance, while Executive Cab Service Pune can be considered for senior executives, clients, visitors and professionals who prefer a comfortable private vehicle. The service can also be planned for airport transfers, intercity business travel, conferences, corporate meetings and other official journeys. Sedan and other suitable vehicle options can be discussed according to passenger count, luggage requirements, route and comfort preferences. Companies can enquire about recurring or individual transportation requirements depending on their business needs. Current cab charges depend on vehicle type, distance, duration, route and service requirements, so businesses can contact Virendra Cab for the latest fare details and availability. Advance scheduling helps coordinate pickup points, travel timings and destination information for smoother corporate transportation in Pune.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.virendracabs.com/corporate-cab-service-pune"
  }
};



    return (
        <div>

<Helmet>
  <title>
    Corporate Cab Service Pune | Business Cab Service Pune | +91 9022549022
  </title>

  <meta
    name="description"
    content="Corporate Cab Service Pune for employee transport, office travel, business trips, airport transfers and executive transportation. Book corporate taxis with Virendra Cab."
  />

  <meta
    name="keywords"
    content="Corporate Cab Service Pune, Business Cab Service Pune, Employee Transport Pune, Office Cab Service Pune, Corporate Taxi Pune, Company Cab Service Pune, Staff Transportation Pune, Corporate Cab Booking Pune, Executive Cab Service Pune, Corporate Car Rental Pune, Corporate Taxi Booking Pune, Corporate Employee Transportation Pune, Employee Cab Service Pune, Employee Pickup Drop Pune, Office Employee Transport Pune, Staff Cab Service Pune, Staff Cab Booking Pune, Company Taxi Service Pune, Business Taxi Service Pune, Business Cab Booking Pune, Corporate Car Hire Pune, Corporate Outstation Cab Pune, Corporate Airport Cab Pune, Corporate Airport Taxi Pune, Executive Taxi Service Pune, Executive Car Rental Pune, Corporate Travel Cab Pune, Corporate Transportation Service Pune, Office Transportation Pune, Employee Pickup and Drop Service Pune"
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
                            <img src='/images/keyword/49.jpg' alt='img' className='img-fluid' />
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

export default Corporatecabservicepune ;