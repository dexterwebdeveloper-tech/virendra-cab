import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Pmcemployeetransporttaion() {



const cardData = {
    keyword: "PMC Employee Transportation Services in Pune",
    headingDescription: "PMC Employee Transportation Services in Pune by Virendra Cab provides organized mobility solutions for Pune Municipal Corporation staff, employees, officers, and departmental teams. Daily pickup and drop, office commuting, monthly cab arrangements, shuttle services, official vehicle hiring, airport transfers, and duty travel can be planned around employee locations, office schedules, departmental requirements, and passenger capacity.",
    topPlaces: [
        {
            title: "Swargate",
            description: "PMC employee transportation around Swargate can support staff travelling to municipal offices and other official locations through planned pickup and drop routes aligned with working hours and regular commuting requirements."
        },
        {
            title: "Kothrud",
            description: "Staff transportation from Kothrud can be arranged for PMC employees requiring dependable daily connectivity to municipal offices, departmental locations, meetings, and official assignments."
        },
        {
            title: "Yerawada",
            description: "PMC employee cab services in Yerawada can support regular office commuting and departmental travel with suitable vehicles planned around reporting times, employee locations, and scheduled duties."
        },
        {
            title: "Bibwewadi",
            description: "Employee transportation from Bibwewadi can connect PMC staff with workplaces and official destinations through recurring pickup and drop arrangements designed around daily office schedules."
        },
        {
            title: "Kondhwa",
            description: "PMC staff travelling from Kondhwa can use planned cab transportation for office commuting, departmental meetings, field assignments, and other official travel requirements."
        },
        {
            title: "Warje",
            description: "Employee pickup and drop services from Warje can be organized around municipal office timings and staff travel patterns, providing convenient transportation for regular and duty-based requirements."
        },
        {
            title: "Vishrantwadi",
            description: "PMC transportation from Vishrantwadi can support employees travelling to different municipal and administrative locations with scheduled vehicles and route-based daily commuting arrangements."
        },
        {
            title: "Dhanori",
            description: "Staff cab services from Dhanori can provide planned connectivity for PMC employees travelling to offices, departmental locations, meetings, and official programmes across Pune."
        },
        {
            title: "Pashan",
            description: "PMC employee transportation from Pashan can be coordinated for regular office commuting and official duties, with vehicle selection based on passenger count, route distance, and schedule."
        },
        {
            title: "Dhankawadi",
            description: "Employee pickup and drop from Dhankawadi can be planned for PMC staff working across municipal departments, offices, and field locations, helping organize recurring daily transportation."
        }
    ],
    services: [
        {
            name: "PMC employee transportation services in Pune",
            description: "PMC employee transportation services in Pune provide structured daily mobility for Pune Municipal Corporation employees, staff, officers, and departmental teams. Pickup points, office destinations, reporting times, and vehicle requirements can be coordinated according to regular work schedules."
        },
        {
            name: "PMC staff transportation Pune",
            description: "PMC staff transportation in Pune helps organize commuting for employees travelling between residential areas and municipal workplaces. Suitable cabs and larger passenger vehicles can be arranged according to staff numbers, routes, and working hours."
        },
        {
            name: "PMC employee cab service Pune",
            description: "PMC employee cab service in Pune offers convenient transportation for municipal employees travelling to offices, departmental locations, meetings, and assigned duties. Routes and schedules can be structured around employee locations and official reporting requirements."
        },
        {
            name: "PMC staff cab service Pune",
            description: "PMC staff cab service in Pune supports regular workforce movement through scheduled pickup and drop arrangements. Vehicle allocation can be planned according to employee numbers, route distance, office timings, and recurring travel requirements."
        },
        {
            name: "PMC employee pickup and drop Pune",
            description: "PMC employee pickup and drop in Pune provides planned transportation between staff residences and municipal offices. Pickup points and reporting schedules can be coordinated to create a more consistent daily commuting arrangement for employees."
        },
        {
            name: "PMC office transportation Pune",
            description: "PMC office transportation in Pune supports employees and staff travelling to municipal offices, administrative locations, meetings, and departmental facilities. Transportation can be organized for regular commuting as well as specific official requirements."
        },
        {
            name: "PMC employee taxi service Pune",
            description: "PMC employee taxi service in Pune provides flexible transportation for staff travelling to and from municipal workplaces and official destinations. Cabs can be arranged for recurring routes, individual duties, meetings, and scheduled departmental travel."
        },
        {
            name: "Pune Municipal Corporation employee transport",
            description: "Pune Municipal Corporation employee transport can be organized for daily staff commuting, departmental movement, field assignments, meetings, and official duties. Vehicle requirements can be matched with employee numbers, schedules, and the nature of the journey."
        },
        {
            name: "PMC vehicle rental service Pune",
            description: "PMC vehicle rental service in Pune provides suitable cars and passenger vehicles for municipal staff, officers, departments, and authorized official travel. Rental arrangements can be considered for daily, monthly, assignment-based, or recurring requirements."
        },
        {
            name: "PMC staff pickup and drop service",
            description: "PMC staff pickup and drop service helps municipal employees travel between residential areas and assigned workplaces through scheduled transportation. Routes can be planned according to employee clusters, office timings, and regular duty schedules."
        },
        {
            name: "PMC government employee cab service Pune",
            description: "PMC government employee cab service in Pune supports authorized municipal employees with transportation for office commuting, departmental meetings, field duties, and scheduled official travel. Suitable vehicles can be arranged according to the passenger and route requirements."
        },
        {
            name: "PMC monthly cab service Pune",
            description: "PMC monthly cab service in Pune is suitable for recurring staff transportation and official vehicle requirements. Monthly arrangements can be planned around working days, vehicle category, driver support, route frequency, and departmental usage."
        },
        {
            name: "PMC office cab booking Pune",
            description: "PMC office cab booking in Pune allows municipal departments and authorized staff to arrange transportation in advance for office commuting, meetings, inspections, field visits, and other official requirements. Booking details can be organized around destination and schedule."
        },
        {
            name: "PMC staff shuttle service Pune",
            description: "PMC staff shuttle service in Pune provides an efficient option for moving multiple employees along common routes. Shuttle arrangements can connect residential areas, designated pickup points, municipal offices, and departmental locations according to recurring schedules."
        },
        {
            name: "PMC employee travel service Pune",
            description: "PMC employee travel service in Pune supports staff movement for office work, departmental meetings, field inspections, official programmes, and intercity assignments. Vehicles can be arranged according to passenger numbers, travel distance, and duty requirements."
        },
        {
            name: "PMC corporate transportation Pune",
            description: "PMC corporate transportation in Pune provides structured vehicle support for administrative teams, staff movement, office travel, meetings, and official requirements. Transportation plans can be customized around workforce size, routes, and recurring schedules."
        },
        {
            name: "PMC official vehicle rental Pune",
            description: "PMC official vehicle rental in Pune provides chauffeur-driven transportation for authorized officers, employees, departments, and official guests. Vehicles can be arranged for meetings, field duties, airport transfers, inspections, and other scheduled assignments."
        },
        {
            name: "PMC department cab service Pune",
            description: "PMC department cab service in Pune helps individual municipal departments organize transportation for employees, officers, field teams, meetings, and official programmes. Vehicle deployment can be planned around departmental schedules and travel requirements."
        },
        {
            name: "PMC employee bus service Pune",
            description: "PMC employee bus service in Pune is suitable for transporting larger groups of municipal staff along recurring routes. Group vehicles can be considered for office commuting, departmental movement, training programmes, and scheduled employee travel."
        },
        {
            name: "PMC staff vehicle hiring Pune",
            description: "PMC staff vehicle hiring in Pune provides departments with access to suitable vehicles for regular employee movement, office travel, field assignments, meetings, and official duties. Vehicle type and service duration can be selected according to operational needs."
        },
        {
            name: "PMC duty vehicle service Pune",
            description: "PMC duty vehicle service in Pune supports authorized staff and officers travelling for inspections, meetings, field work, municipal programmes, and other official duties. Vehicle scheduling can be coordinated around reporting locations and assignment timings."
        },
        {
            name: "PMC transport contractor Pune",
            description: "PMC transport contractor services in Pune can support departments requiring recurring vehicle deployment for employee transportation and official travel. Fleet size, vehicle categories, driver arrangements, contract duration, and operating schedules can be discussed according to the requirement."
        },
        {
            name: "PMC employee airport transfer Pune",
            description: "PMC employee airport transfer in Pune provides transportation between municipal offices, residences, hotels, and Pune Airport for employees, officers, and authorized official guests. Pickup and drop timings can be coordinated around flight schedules and official programmes."
        },
        {
            name: "Affordable PMC employee transportation Pune",
            description: "Affordable PMC employee transportation in Pune provides practical options for recurring staff commuting while considering route distance, passenger numbers, vehicle category, and service frequency. Departments can select arrangements suited to their regular transportation requirements."
        },
        {
            name: "Reliable PMC staff transportation Pune",
            description: "Reliable PMC staff transportation in Pune focuses on organized employee mobility through scheduled pickup and drop services, suitable vehicles, and professional chauffeur support. Transportation can be planned around office timings, staff locations, and recurring departmental requirements."
        }
    ],
    tableData: [
        ["PMC employee transportation services in Pune"],
        ["PMC staff transportation Pune"],
        ["PMC employee cab service Pune"],
        ["PMC staff cab service Pune"],
        ["PMC employee pickup and drop Pune"],
        ["PMC office transportation Pune"],
        ["PMC employee taxi service Pune"],
        ["Pune Municipal Corporation employee transport"],
        ["PMC vehicle rental service Pune"],
        ["PMC staff pickup and drop service"],
        ["PMC government employee cab service Pune"],
        ["PMC monthly cab service Pune"],
        ["PMC office cab booking Pune"],
        ["PMC staff shuttle service Pune"],
        ["PMC employee travel service Pune"],
        ["PMC corporate transportation Pune"],
        ["PMC official vehicle rental Pune"],
        ["PMC department cab service Pune"],
        ["PMC employee bus service Pune"],
        ["PMC staff vehicle hiring Pune"],
        ["PMC duty vehicle service Pune"],
        ["PMC transport contractor Pune"],
        ["PMC employee airport transfer Pune"],
        ["Affordable PMC employee transportation Pune"],
        ["Reliable PMC staff transportation Pune"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Dedicated Employee Mobility",
            WhyChoosedescription: "Virendra Cab can organize transportation specifically around the commuting requirements of PMC employees, staff, and authorized personnel. Routes, pickup points, reporting times, and workplace destinations can be coordinated for regular travel."
        },
        {
            WhyChooseheading: "Route-Based Pickup & Drop",
            WhyChoosedescription: "Municipal staff travelling from different parts of Pune can be grouped into practical transportation routes. Pickup and drop schedules can be structured around employee locations, office timings, and recurring departmental requirements."
        },
        {
            WhyChooseheading: "Flexible Vehicle Selection",
            WhyChoosedescription: "Cars, SUVs, and larger passenger vehicles can be considered according to the size of the employee group and nature of the journey. This allows departments to select a practical vehicle arrangement for individual or group transportation."
        },
        {
            WhyChooseheading: "Monthly Transportation Support",
            WhyChoosedescription: "Departments with ongoing employee travel requirements can discuss monthly cab arrangements for recurring office transportation. Service planning can account for working days, route schedules, passenger capacity, vehicle type, and driver requirements."
        },
        {
            WhyChooseheading: "Department-Wise Coordination",
            WhyChoosedescription: "Different PMC departments may have different reporting times, field requirements, and travel patterns. Transportation can be planned around individual departmental schedules for office commuting, inspections, meetings, and official assignments."
        },
        {
            WhyChooseheading: "Staff Shuttle & Group Travel",
            WhyChoosedescription: "When several employees travel along similar routes, shuttle-style transportation or larger passenger vehicles can provide a practical option. Group travel can be arranged for regular office commuting, training, meetings, and departmental programmes."
        },
        {
            WhyChooseheading: "Official Duty & Airport Travel",
            WhyChoosedescription: "Employee transportation can extend beyond daily office commuting to include official duties, airport transfers, meetings, inspections, and scheduled travel. Vehicles can be arranged around the specific timing and destination requirements of each assignment."
        },
        {
            WhyChooseheading: "Professional & Reliable Support",
            WhyChoosedescription: "Virendra Cab focuses on organized scheduling, suitable vehicle allocation, and professional chauffeur support for recurring municipal transportation. Departments can communicate their staff movement requirements and plan a transportation structure around their operational needs."
        }
    ]
};

const faqData = [
    {
        question: "What are PMC Employee Transportation Services in Pune?",
        answer: "PMC Employee Transportation Services in Pune are intended for the daily and official travel needs of Pune Municipal Corporation employees and authorized staff. Virendra Cab can arrange suitable transportation for office commuting, staff pickup and drop, departmental visits, field duties, meetings, and other scheduled movements."
    },
    {
        question: "How can PMC staff book employee transportation in Pune?",
        answer: "PMC staff transportation can be planned by sharing the employee pickup location, PMC office or department location, travel date, working hours, number of passengers, and vehicle requirement. Virendra Cab can review these details to discuss a suitable transportation arrangement."
    },
    {
        question: "Can PMC Employee Transportation Services be used for daily office commuting?",
        answer: "Yes, regular employee transportation can be arranged for staff travelling between their residential areas and PMC offices. Pickup and drop schedules can be planned around office timings, employee locations, and the frequency of the required service."
    },
    {
        question: "Does PMC employee transportation include pickup and drop services?",
        answer: "PMC employee pickup and drop can be organized for employees who require scheduled transportation to and from their workplace. Routes can be discussed based on staff locations, office addresses, shift timings, and the number of employees travelling on each route."
    },
    {
        question: "Can PMC departments arrange vehicles for official field duties?",
        answer: "Department-specific transportation can be considered for inspections, field visits, project-related travel, meetings, administrative assignments, and other authorized duties. The vehicle requirement can be planned according to the department's itinerary and expected usage."
    },
    {
        question: "Is a driver provided with PMC Employee Transportation Services in Pune?",
        answer: "Driver-assisted transportation can be arranged for PMC employees and official staff. This can be useful for regular commuting as well as duties that require travel between multiple municipal offices, project sites, inspection locations, or other official destinations."
    },
    {
        question: "Can PMC employee transportation be arranged on a monthly basis?",
        answer: "Monthly transportation arrangements can be discussed when a department or office requires recurring employee travel. The service can be planned around the expected number of working days, employee routes, pickup points, office timings, and vehicle requirements."
    },
    {
        question: "Can PMC employees use transportation for Pune Airport transfers?",
        answer: "Yes, airport transportation can be arranged for authorized PMC employees travelling for official purposes. A cab can be scheduled for transfers between Pune Airport and municipal offices, residential locations, hotels, or other destinations included in the official itinerary."
    },
    {
        question: "Can larger groups of PMC employees use bus transportation?",
        answer: "Larger groups may require a bus or another suitable group vehicle instead of individual cars. PMC employee transportation can be discussed according to the number of passengers, route, pickup points, office schedule, and frequency of travel."
    },
    {
        question: "How can I arrange reliable PMC Employee Transportation Services in Pune?",
        answer: "To plan reliable employee transportation, provide complete information about employee numbers, pickup areas, PMC office locations, working hours, travel frequency, and preferred vehicle type. Virendra Cab can use these details to understand the transportation requirement and discuss an appropriate service arrangement."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Dinesh Kharade",
        feedback: "Our team needed regular transportation between employee pickup areas and the PMC office. The planned cab arrangement helped us keep the daily commuting schedule more organized and made the journey easier for the staff.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Aarti Deshmukh",
        feedback: "For an official departmental assignment, our staff had to travel between several locations in Pune. Having a dedicated transportation arrangement made it simpler to coordinate the team's movements throughout the working day.",
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
  "name": "PMC Employee Transportation Services in Pune",
  "image": "https://virendracabs.com/assets/images/pmc-employee-transportation-services-in-pune.webp",
  "description": "PMC Employee Transportation Services in Pune are designed for organized daily commuting requirements of authorized municipal employees, staff members and teams traveling to PMC offices, departments and assigned work locations. Virendra Cab provides structured employee transportation arrangements covering regular pickup and drop schedules, office commuting, departmental travel, field assignments and other authorized work-related transportation needs. PMC staff transportation Pune can be coordinated according to employee pickup points, reporting times, office locations and route requirements, helping create a more convenient daily travel system for staff. PMC employee cab service Pune is suitable for employees who need dependable transportation between residential areas and municipal workplaces, while PMC staff cab service Pune can support scheduled movement for teams working across different shifts or locations. PMC employee pickup and drop Pune arrangements can be planned around morning reporting and evening departure timings, with route planning based on employee locations and operational requirements. PMC office transportation Pune can also support travel between municipal offices, project sites, inspection locations, meetings, training venues and other authorized destinations. PMC employee taxi service Pune can be arranged for individual or group travel depending on the number of passengers and vehicle requirements. Multiple cabs may be coordinated when employees are distributed across different parts of Pune, while dedicated vehicles can be considered for specific routes or recurring transportation schedules. The service can also support authorized airport, railway station and outstation travel connected with official duties, meetings or departmental assignments. Vehicle categories, route plans, service duration and deployment schedules can be discussed according to the organization's transportation requirements. Final fare and availability depend on vehicle type, passenger count, route distance, pickup and drop locations, operating hours, waiting time, tolls, parking and the overall itinerary. Virendra Cab can coordinate reliable employee transportation solutions for PMC-related office commuting and authorized staff travel requirements across Pune and nearby areas.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "31286"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://virendracabs.com/pmc-employee-transportation-services-in-pune"
  }
};







    return (
        <div>

<Helmet>
  <title>
    PMC Employee Transportation Services in Pune | PMC Staff Transportation Pune | +91 9022549022
  </title>

  <meta
    name="description"
    content="PMC Employee Transportation Services in Pune for staff pickup and drop, office commuting, municipal employee cab services, departmental travel and scheduled transportation."
  />

  <meta
    name="keywords"
    content="PMC employee transportation services in Pune, PMC staff transportation Pune, PMC employee cab service Pune, PMC staff cab service Pune, PMC employee pickup and drop Pune, PMC office transportation Pune, PMC employee taxi service Pune, PMC staff taxi service Pune, PMC employee transport Pune, PMC staff transport Pune, PMC employee transportation service Pune, PMC staff transportation service Pune, PMC employee car rental Pune, PMC staff car rental Pune, PMC employee vehicle rental Pune, PMC staff vehicle rental Pune, PMC employee cab booking Pune, PMC staff cab booking Pune, PMC employee taxi booking Pune, PMC staff taxi booking Pune, PMC office cab service Pune, PMC office taxi service Pune, PMC office cab booking Pune, PMC employee office transportation Pune, PMC staff office transportation Pune, PMC employee office cab Pune, PMC staff office cab Pune, PMC employee daily transportation Pune, PMC staff daily transportation Pune, PMC employee daily cab service Pune, PMC staff daily cab service Pune, PMC employee daily pickup and drop Pune, PMC staff daily pickup and drop Pune, PMC employee commute service Pune, PMC staff commute service Pune, PMC employee travel service Pune, PMC staff travel service Pune, PMC employee shuttle service Pune, PMC staff shuttle service Pune, PMC employee shift transportation Pune, PMC staff shift transportation Pune, PMC employee morning pickup Pune, PMC employee evening drop Pune, PMC staff pickup service Pune, PMC staff drop service Pune, PMC employee dedicated cab Pune, PMC staff dedicated cab Pune, PMC employee chauffeur service Pune, PMC staff chauffeur service Pune, PMC departmental transportation Pune, PMC department cab service Pune, PMC department taxi service Pune, PMC department vehicle rental Pune, PMC official employee transport Pune, PMC official staff transportation Pune, PMC field staff transportation Pune, PMC field visit cab service Pune, PMC inspection transportation Pune, PMC meeting transportation Pune, PMC training transportation Pune, PMC airport transfer Pune, PMC railway station transfer Pune, PMC outstation employee transportation Pune"
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

export default Pmcemployeetransporttaion ;