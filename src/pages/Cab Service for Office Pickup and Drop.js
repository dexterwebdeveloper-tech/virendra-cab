import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Cabserviceforofficepickup() {



const cardData = {
    keyword: "Cab Service for office Pickup and Drop",
    headingDescription: "Cab Service for office Pickup and Drop by Virendra Cab provides organized daily transportation for employees, staff, IT professionals, and corporate teams across Pune. Pickup and drop schedules can be planned around office locations, employee routes, shift timings, and passenger requirements, with suitable sedans, SUVs, and air-conditioned vehicles available for regular, monthly, day-shift, and night-shift commuting needs.",
    topPlaces: [
        {
            title: "Wagholi",
            description: "Office pickup and drop transportation in Wagholi can support employees travelling to business parks, offices, and corporate locations across Pune with planned routes and convenient daily commuting arrangements."
        },
        {
            title: "Kharadi",
            description: "Employee cab services between Kharadi and residential areas can be organized around IT office schedules, morning and evening shifts, and regular corporate commuting requirements."
        },
        {
            title: "Bhosari MIDC",
            description: "Staff transportation to Bhosari MIDC is suitable for employees working in manufacturing, engineering, logistics, and industrial units requiring dependable daily pickup and drop arrangements."
        },
        {
            title: "Talawade",
            description: "Office cab services for Talawade can connect employees with technology and industrial workplaces through route-based transportation planned according to working hours and employee locations."
        },
        {
            title: "Ranjangaon",
            description: "Employee transportation to Ranjangaon can support industrial and manufacturing staff with scheduled vehicles for longer daily commutes, shift operations, and regular workplace travel."
        },
        {
            title: "Sanaswadi",
            description: "Corporate staff travelling to Sanaswadi can use planned pickup and drop arrangements designed around office timings, industrial operations, employee routes, and recurring transportation requirements."
        },
        {
            title: "Shikrapur",
            description: "Office transportation to Shikrapur can be coordinated for employees working in industrial and commercial areas, with vehicle selection based on route distance and passenger requirements."
        },
        {
            title: "Daund",
            description: "Daily employee cab arrangements for Daund can help staff travelling longer distances to workplaces through planned schedules, comfortable vehicles, and route-based transportation."
        },
        {
            title: "Jejuri",
            description: "Employee pickup and drop services to Jejuri can support industrial and corporate workforce movement with suitable vehicles arranged around office timings and recurring travel schedules."
        },
        {
            title: "Shirwal",
            description: "Corporate employee transportation to Shirwal is suitable for staff working in industrial and business locations, with planned daily routes and vehicle options selected according to the workforce requirement."
        }
    ],
    services: [
        {
            name: "Cab service for office pickup and drop",
            description: "Cab service for office pickup and drop provides employees with convenient transportation between their homes and workplaces on a planned schedule. Routes can be organized according to employee locations, office timings, passenger count, and recurring daily requirements."
        },
        {
            name: "Office pickup and drop cab service Pune",
            description: "Office pickup and drop cab service in Pune helps companies arrange structured employee commuting with suitable vehicles and professional drivers. Pickup points, office destinations, shift timings, and route requirements can be coordinated for regular workforce transportation."
        },
        {
            name: "Employee pickup and drop service Pune",
            description: "Employee pickup and drop service in Pune is designed for businesses that need dependable daily transportation for staff. Individual routes, multiple pickup locations, morning and evening schedules, and different office shifts can be incorporated into the travel plan."
        },
        {
            name: "Office taxi service Pune",
            description: "Office taxi service in Pune provides practical transportation for employees travelling to and from workplaces. Companies can arrange regular cab movement based on office timings, employee residential areas, route distance, and the number of passengers using the service."
        },
        {
            name: "Corporate employee transportation Pune",
            description: "Corporate employee transportation in Pune supports organizations with daily staff commuting, shift-based travel, and scheduled office routes. Suitable vehicles can be deployed according to workforce size, pickup points, office locations, and operational schedules."
        },
        {
            name: "Staff pickup and drop cab Pune",
            description: "Staff pickup and drop cab service in Pune helps businesses organize daily workforce transportation through planned routes and scheduled vehicles. The service can accommodate different employee locations, office timings, and passenger requirements."
        },
        {
            name: "Daily office cab service Pune",
            description: "Daily office cab service in Pune provides recurring transportation for employees who travel to the same workplace on regular working days. Pickup and drop timings can be structured around office reporting hours, employee routes, and shift schedules."
        },
        {
            name: "Company employee cab service Pune",
            description: "Company employee cab service in Pune gives organizations a convenient way to manage routine workforce mobility. Cabs can be assigned to employees or routes according to working hours, passenger volume, residential locations, and office destinations."
        },
        {
            name: "Office commute taxi Pune",
            description: "Office commute taxi service in Pune helps employees travel between residential areas and business locations without relying on personal vehicles. Regular transportation can be planned around fixed routes, office timings, and employee pickup requirements."
        },
        {
            name: "Employee transportation service Pune",
            description: "Employee transportation service in Pune provides structured mobility for companies with regular staff commuting requirements. Route planning, vehicle selection, pickup schedules, and drop locations can be coordinated according to the organization's workforce and operating hours."
        },
        {
            name: "IT office cab service Pune",
            description: "IT office cab service in Pune supports employees working in technology parks and corporate offices with planned transportation for regular and shift-based schedules. Vehicles can be arranged around employee locations, office timings, and recurring IT workforce routes."
        },
        {
            name: "Corporate staff transportation Pune",
            description: "Corporate staff transportation in Pune helps businesses coordinate daily employee movement through scheduled cabs and suitable vehicle categories. The arrangement can support multiple office routes, different shifts, and varying staff transportation requirements."
        },
        {
            name: "Monthly office cab service Pune",
            description: "Monthly office cab service in Pune provides businesses with a longer-term transportation arrangement for employees and staff. Monthly schedules can be structured around working days, office routes, vehicle categories, passenger count, and regular pickup and drop requirements."
        },
        {
            name: "Office route cab service Pune",
            description: "Office route cab service in Pune focuses on recurring employee routes between residential areas and workplaces. Companies can plan fixed or customized routes based on employee locations, office reporting times, shift patterns, and passenger capacity."
        },
        {
            name: "Employee shuttle service Pune",
            description: "Employee shuttle service in Pune offers a practical option for organizations transporting multiple staff members along common routes. Shuttle arrangements can be planned between residential clusters, transit points, offices, IT parks, and industrial locations."
        },
        {
            name: "AC office cab service Pune",
            description: "AC office cab service in Pune provides employees with a more comfortable commuting environment throughout the year. Air-conditioned sedans and SUVs can be selected according to route distance, passenger requirements, and company transportation needs."
        },
        {
            name: "Sedan office pickup and drop Pune",
            description: "Sedan office pickup and drop in Pune is suitable for individuals and small employee groups who require comfortable daily transportation. Sedans can be allocated for recurring routes based on employee locations, office timings, and travel distance."
        },
        {
            name: "SUV office cab service Pune",
            description: "SUV office cab service in Pune offers additional space for employees travelling together or carrying work-related luggage. SUVs are suitable for longer routes, group commuting, and corporate transportation requirements where additional seating and cabin space are useful."
        },
        {
            name: "Female employee transportation Pune",
            description: "Female employee transportation in Pune can be arranged for regular office commuting with planned pickup and drop schedules. Companies can coordinate routes, shift timings, vehicle requirements, and driver arrangements according to their employee transportation policies."
        },
        {
            name: "Night shift employee cab Pune",
            description: "Night shift employee cab service in Pune supports staff working late or overnight schedules with planned transportation between homes and workplaces. Routes can be coordinated around shift reporting and closing times for convenient employee movement."
        },
        {
            name: "Day shift office cab service Pune",
            description: "Day shift office cab service in Pune helps employees reach workplaces according to regular morning and daytime reporting schedules. Pickup locations and routes can be planned to create a consistent daily commute for staff."
        },
        {
            name: "Office airport pickup and drop Pune",
            description: "Office airport pickup and drop service in Pune is suitable for employees, executives, and visiting business guests travelling between corporate offices and Pune Airport. Transportation can be coordinated around flight schedules, luggage, passenger requirements, and office timings."
        },
        {
            name: "Affordable employee cab service Pune",
            description: "Affordable employee cab service in Pune provides companies with practical transportation options while considering route distance, vehicle category, passenger volume, and service frequency. Businesses can select an arrangement suited to their recurring commuting requirements."
        },
        {
            name: "Reliable office transportation Pune",
            description: "Reliable office transportation in Pune helps companies maintain organized daily employee movement through planned routes, scheduled pickups, suitable vehicles, and professional driver support. The service can be structured around regular office and shift requirements."
        },
        {
            name: "Professional office cab service Pune",
            description: "Professional office cab service in Pune provides businesses with organized employee transportation supported by experienced drivers and suitable vehicles. Daily routes, pickup points, office locations, shift schedules, and recurring travel requirements can be coordinated for smoother commuting."
        }
    ],
    tableData: [
        ["Cab service for office pickup and drop"],
        ["Office pickup and drop cab service Pune"],
        ["Employee pickup and drop service Pune"],
        ["Office taxi service Pune"],
        ["Corporate employee transportation Pune"],
        ["Staff pickup and drop cab Pune"],
        ["Daily office cab service Pune"],
        ["Company employee cab service Pune"],
        ["Office commute taxi Pune"],
        ["Employee transportation service Pune"],
        ["IT office cab service Pune"],
        ["Corporate staff transportation Pune"],
        ["Monthly office cab service Pune"],
        ["Office route cab service Pune"],
        ["Employee shuttle service Pune"],
        ["AC office cab service Pune"],
        ["Sedan office pickup and drop Pune"],
        ["SUV office cab service Pune"],
        ["Female employee transportation Pune"],
        ["Night shift employee cab Pune"],
        ["Day shift office cab service Pune"],
        ["Office airport pickup and drop Pune"],
        ["Affordable employee cab service Pune"],
        ["Reliable office transportation Pune"],
        ["Professional office cab service Pune"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Planned Employee Routes",
            WhyChoosedescription: "Virendra Cab can organize office transportation around employee residential locations, workplace destinations, pickup points, reporting times, and regular travel patterns. This makes daily commuting easier to coordinate for companies with multiple staff routes."
        },
        {
            WhyChooseheading: "Day & Night Shift Support",
            WhyChoosedescription: "Businesses operating across different working hours can arrange transportation around morning, daytime, evening, and night shifts. Pickup and drop schedules can be structured according to the actual reporting and closing times of employees."
        },
        {
            WhyChooseheading: "Comfortable AC Vehicles",
            WhyChoosedescription: "Air-conditioned sedans and SUVs can be selected according to passenger numbers, route distance, and employee comfort requirements. Companies can choose a practical vehicle mix when different teams require different transportation arrangements."
        },
        {
            WhyChooseheading: "Professional Driver Support",
            WhyChoosedescription: "Experienced drivers provide dedicated support for regular office commuting and employee transportation. Professional driving helps employees travel comfortably while companies can focus on managing their workforce rather than individual daily travel arrangements."
        },
        {
            WhyChooseheading: "Flexible Monthly Arrangements",
            WhyChoosedescription: "Organizations with recurring transportation requirements can discuss monthly office cab arrangements based on working days, routes, employee count, and vehicle categories. This provides a structured approach for businesses that need ongoing staff transportation."
        },
        {
            WhyChooseheading: "Suitable for IT & Corporate Offices",
            WhyChoosedescription: "The service can support IT companies, corporate offices, business parks, industrial units, and other organizations where employees need regular transportation. Routes can be developed around office locations and workforce travel patterns."
        },
        {
            WhyChooseheading: "Airport & Business Transfers",
            WhyChoosedescription: "In addition to regular employee commuting, office transportation can include airport pickup and drop requirements for executives, employees, and visiting guests. Transfers can be coordinated around flight schedules and office travel plans."
        },
        {
            WhyChooseheading: "Practical Transportation Planning",
            WhyChoosedescription: "Employee travel needs can vary by route, shift, passenger count, and working schedule. Virendra Cab can help companies consider suitable vehicle categories and route arrangements so their office transportation remains practical, comfortable, and organized."
        }
    ]
};


const faqData = [
    {
        question: "What is Cab Service for Office Pickup and Drop in Pune?",
        answer: "Cab Service for Office Pickup and Drop provides scheduled transportation for employees travelling between their homes and workplaces. Virendra Cab can arrange suitable cars for individual employees, small teams, or recurring office travel based on pickup locations, working hours, and daily schedules."
    },
    {
        question: "How can a company arrange Cab Service for Office Pickup and Drop?",
        answer: "Companies can share employee pickup areas, office location, shift timings, number of passengers, and required service days with Virendra Cab. Based on these details, the transportation requirement can be planned around the organization's regular office schedule."
    },
    {
        question: "Can office pickup and drop cabs be arranged for daily employee transportation?",
        answer: "Yes, recurring cab arrangements can be considered for employees who travel to and from the office regularly. Pickup and drop schedules can be planned according to working hours, employee locations, and the company's transportation requirements."
    },
    {
        question: "Is Cab Service for Office Pickup and Drop available for different shifts?",
        answer: "Office transportation can be planned for employees working in different shifts, including morning, afternoon, evening, or late-hour schedules. The exact arrangement can be discussed according to employee pickup points and the company's shift timings."
    },
    {
        question: "Can multiple employees share the same cab for office travel?",
        answer: "Multiple employees travelling along similar routes can be accommodated through a shared cab arrangement when suitable. Grouping employees by nearby pickup locations can help create a practical route for regular office pickup and drop requirements."
    },
    {
        question: "Does Virendra Cab provide driver-assisted office pickup and drop service?",
        answer: "Driver-assisted transportation can be arranged for office employees so they can travel between their pickup locations and workplace without handling the driving themselves. This can be useful for companies managing recurring employee transportation."
    },
    {
        question: "Can office pickup and drop service be arranged for IT companies in Pune?",
        answer: "IT companies and other businesses can consider employee cab services for regular transportation between residential areas and office locations. Routes can be planned around employee clusters, office timings, and locations across Pune and nearby business areas."
    },
    {
        question: "Can companies use cab services for employees working at different office locations?",
        answer: "Yes, transportation requirements involving multiple office locations can be discussed with Virendra Cab. Separate routes or pickup schedules may be planned depending on employee numbers, destinations, working hours, and the overall transportation structure."
    },
    {
        question: "Can office pickup and drop cabs be used for employees travelling from nearby areas outside Pune?",
        answer: "Employees living in nearby towns or areas outside central Pune can also be considered for office transportation when the route is practical. Locations such as Pimpri-Chinchwad, Hinjewadi, Wakad, Talegaon, and surrounding areas may be included depending on the company's requirement."
    },
    {
        question: "How early should a company arrange Cab Service for Office Pickup and Drop?",
        answer: "It is advisable to discuss recurring office transportation requirements in advance, particularly when several employees or multiple shifts are involved. Providing pickup locations, office addresses, shift timings, and passenger details helps Virendra Cab plan the service more effectively."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Nikhil Bhosale",
        feedback: "Our office needed regular transportation for employees travelling from different parts of Pune. The pickup and drop arrangement helped us organize daily commuting more conveniently around the team's working hours.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Pooja Jadhav",
        feedback: "Managing transportation for our employees was becoming difficult with changing office timings. The cab arrangement gave our team a more structured way to handle daily pickup and drop travel between home and the workplace.",
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
  "name": "Cab Service for Office Pickup and Drop",
  "image": "https://virendracabs.com/assets/images/cab-service-for-office-pickup-and-drop.webp",
  "description": "Cab Service for Office Pickup and Drop in Pune is designed for companies that need dependable daily transportation for employees traveling between their homes and workplaces. Virendra Cab provides organized office pickup and drop cab arrangements for businesses, offices, IT companies, corporate campuses, industrial units and commercial establishments across Pune. Office pickup and drop cab service Pune can be planned around employee shift timings, pickup locations, office addresses and route requirements, making regular commuting more convenient for staff. Employee pickup and drop service Pune is suitable for morning and evening shifts as well as general office schedules, extended working hours and selected business travel requirements. Office taxi service Pune can be arranged for individual employees or coordinated employee transportation based on the number of passengers and required routes. Businesses can discuss recurring transportation requirements, employee pickup points, drop locations, reporting times and vehicle preferences to create a practical commuting plan. Dedicated cabs, multiple vehicles and route-based transportation can be considered for organizations with larger employee groups. The service can also support airport-area offices, IT parks, commercial zones, industrial locations and offices situated across different parts of Pune. Regular office transportation helps employees avoid the inconvenience of arranging separate daily rides while giving companies a more structured approach to staff mobility. Vehicle availability and final fare depend on route distance, number of employees, vehicle category, pickup and drop points, operating hours, waiting requirements and service duration. Virendra Cab can coordinate office transportation solutions for companies looking for consistent employee pickup and drop services in Pune and nearby areas.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "28517"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://virendracabs.com/cab-service-for-office-pickup-and-drop"
  }
};


    return (
        <div>


<Helmet>
  <title>
    Cab Service for Office Pickup and Drop | Office Pickup and Drop Cab Service Pune | +91 9022549022
  </title>

  <meta
    name="description"
    content="Cab Service for Office Pickup and Drop in Pune for employee commuting, daily office travel, shift transportation, corporate routes and reliable pickup and drop requirements."
  />

  <meta
    name="keywords"
    content="Cab service for office pickup and drop, Office pickup and drop cab service Pune, Employee pickup and drop service Pune, Office taxi service Pune, Office cab service Pune, Employee cab service Pune, Employee taxi service Pune, Office pickup service Pune, Office drop service Pune, Employee transportation service Pune, Employee transport Pune, Corporate employee cab service Pune, Corporate office pickup and drop Pune, Corporate cab service for employees Pune, Daily office cab service Pune, Daily employee pickup and drop Pune, Office commute cab service Pune, Office transportation service Pune, Staff pickup and drop service Pune, Staff transportation service Pune, Employee shuttle service Pune, Office shuttle service Pune, Company employee transport Pune, Company cab service Pune, Company office taxi service Pune, Employee travel service Pune, Office travel cab Pune, Employee commute service Pune, Corporate employee transportation Pune, IT employee pickup and drop Pune, IT company cab service Pune, IT office transportation Pune, Business employee transport Pune, Employee transport cab Pune, Employee pickup cab Pune, Employee drop cab Pune, Office route cab service Pune, Office shift cab service Pune, Employee shift transportation Pune, Morning office pickup cab Pune, Evening office drop cab Pune, Night shift employee cab Pune, Corporate staff transportation Pune, Dedicated office cab service Pune, Dedicated employee cab Pune, Monthly office cab service Pune, Regular office pickup and drop Pune, Office cab booking Pune, Employee cab booking Pune, Office taxi booking Pune, Employee taxi booking Pune, Office transportation cab Pune, Employee transportation taxi Pune"
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
                            <img src='/images/keyword/131.jpeg' alt='img' className='img-fluid' />
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

export default Cabserviceforofficepickup ;