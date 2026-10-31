import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Govermentofficecabservice() {



const cardData = {
    keyword: "Government Office Cab Service in Pune",
    headingDescription: "Government Office Cab Service in Pune by Virendra Cab provides organized transportation for government employees, officers, departments, official guests, and administrative teams. Vehicles can be arranged for daily office commuting, official duties, airport transfers, departmental visits, meetings, and outstation assignments, with flexible options for individual cars, monthly requirements, and coordinated government fleet transportation.",
    topPlaces: [
        {
            title: "Mantralaya Mumbai",
            description: "Pune to Mantralaya transportation can support government officers and official teams travelling for administrative meetings, departmental work, consultations, and scheduled government assignments."
        },
        {
            title: "Navi Mumbai",
            description: "Government office transportation to Navi Mumbai is suitable for official meetings, departmental visits, administrative work, and scheduled travel between government locations with comfortable chauffeur-driven vehicles."
        },
        {
            title: "Thane",
            description: "Official cab arrangements between Pune and Thane can support government employees, officers, and departmental representatives attending meetings, inspections, and administrative programmes."
        },
        {
            title: "Nashik",
            description: "Government staff travelling to Nashik can use planned cab transportation for official visits, inspections, departmental meetings, conferences, and regional administrative assignments."
        },
        {
            title: "Jalgaon",
            description: "Pune to Jalgaon government transportation can be arranged for longer official journeys involving departmental work, field visits, inspections, and scheduled government programmes."
        },
        {
            title: "Amravati",
            description: "Government officers and staff travelling to Amravati can use suitable chauffeur-driven vehicles for official assignments, meetings, administrative visits, and regional government duties."
        },
        {
            title: "Akola",
            description: "Official transportation to Akola can accommodate government employees, officers, and visiting departmental teams requiring comfortable intercity travel for meetings, inspections, and field assignments."
        },
        {
            title: "Aurangabad",
            description: "Government office travel from Pune to Aurangabad can support administrative meetings, inspections, conferences, departmental programmes, and official visits with planned vehicle arrangements."
        },
        {
            title: "Solapur",
            description: "Pune to Solapur cab transportation is suitable for government staff handling regional duties, official meetings, field inspections, and scheduled departmental programmes."
        },
        {
            title: "Satara",
            description: "Government transportation to Satara can be arranged for officers, staff, and official guests attending administrative meetings, inspections, programmes, and other scheduled government activities."
        }
    ],
    services: [
        {
            name: "Government office cab service in Pune",
            description: "Government office cab service in Pune provides organized transportation for government employees, officers, departments, and official guests travelling between residences, offices, meeting venues, and administrative locations. Vehicle arrangements can be structured around daily schedules and official requirements."
        },
        {
            name: "Government office taxi service Pune",
            description: "Government office taxi service in Pune offers practical transportation for official meetings, departmental visits, employee commuting, field assignments, and administrative travel. Suitable vehicles can be booked according to passenger requirements, destination, and duty schedule."
        },
        {
            name: "Government staff cab service Pune",
            description: "Government staff cab service in Pune supports regular commuting for employees working in government offices, departments, institutions, and administrative facilities. Pickup and drop routes can be planned around working hours, employee locations, and office destinations."
        },
        {
            name: "Government employee transportation Pune",
            description: "Government employee transportation in Pune helps departments coordinate daily staff movement through planned routes and scheduled vehicles. Transportation can be arranged for regular office commuting, shift requirements, meetings, and official assignments."
        },
        {
            name: "Government office car rental Pune",
            description: "Government office car rental in Pune provides vehicles for official duties, meetings, inspections, airport transfers, and departmental travel. Cars can be arranged for individual officers, staff members, official guests, or longer-duration requirements."
        },
        {
            name: "Government department cab service Pune",
            description: "Government department cab service in Pune is suitable for departments requiring organized transportation for employees, officers, field teams, meetings, inspections, and official programmes. Vehicle deployment can be planned according to department schedules and passenger requirements."
        },
        {
            name: "Government official vehicle service Pune",
            description: "Government official vehicle service in Pune supports authorized government travel for meetings, inspections, administrative duties, airport movements, and intercity assignments. Suitable vehicles and chauffeur support can be coordinated around the official itinerary."
        },
        {
            name: "Government office pickup and drop Pune",
            description: "Government office pickup and drop in Pune provides convenient daily transportation between employee residences and government workplaces. Routes, reporting times, and drop schedules can be planned according to office timings and staff locations."
        },
        {
            name: "Government staff transportation Pune",
            description: "Government staff transportation in Pune helps departments manage regular employee movement through scheduled cabs and appropriate vehicle categories. The service can support daily office travel, meetings, field duties, and recurring departmental routes."
        },
        {
            name: "Government contract taxi service Pune",
            description: "Government contract taxi service in Pune can support departments requiring transportation over an agreed period for official duties, employee movement, meetings, inspections, and recurring travel. Vehicle categories and service duration can be structured around the contractual requirement."
        },
        {
            name: "Government monthly cab rental Pune",
            description: "Government monthly cab rental in Pune is suitable for departments and offices requiring vehicles for extended official use. Monthly arrangements can be planned around vehicle category, driver requirement, duty schedule, travel frequency, and assignment duration."
        },
        {
            name: "Government office vehicle hiring Pune",
            description: "Government office vehicle hiring in Pune provides suitable cars and SUVs for administrative duties, staff movement, official meetings, inspections, and field visits. Vehicles can be allocated according to the office's travel pattern and operational requirements."
        },
        {
            name: "Government sedan rental Pune",
            description: "Government sedan rental in Pune offers a comfortable option for individual officers, official guests, meetings, airport transfers, and departmental travel. Sedans can be arranged for short assignments, full-day duties, or recurring official transportation."
        },
        {
            name: "Government SUV rental Pune",
            description: "Government SUV rental in Pune provides additional space for officers, field teams, official guests, and longer assignments where passenger or luggage capacity is important. SUVs can be selected according to route, passenger count, and duty requirements."
        },
        {
            name: "Government Innova cab service Pune",
            description: "Government Innova cab service in Pune is suitable for staff groups, officers, official delegations, airport transfers, and outstation assignments. Its spacious cabin makes it practical for passengers travelling with luggage or requiring additional seating comfort."
        },
        {
            name: "Government duty cab service Pune",
            description: "Government duty cab service in Pune provides transportation for scheduled official duties, inspections, meetings, field visits, administrative work, and government programmes. Vehicles can be assigned according to duty timings, locations, and duration."
        },
        {
            name: "Government officer car rental Pune",
            description: "Government officer car rental in Pune provides chauffeur-driven transportation for authorized officers travelling to meetings, departments, field locations, airports, and official events. Vehicle selection can be based on the officer's itinerary and travel requirements."
        },
        {
            name: "Government office airport transfer Pune",
            description: "Government office airport transfer in Pune supports officers, employees, official guests, and departmental representatives travelling between government offices and Pune Airport. Pickup and drop schedules can be coordinated around flight timings and official programmes."
        },
        {
            name: "Government transport contractor Pune",
            description: "Government transport contractor services in Pune can support departments seeking organized vehicle deployment for recurring official transportation. Fleet requirements, vehicle categories, driver arrangements, service duration, and operational schedules can be discussed according to the assignment."
        },
        {
            name: "Government vehicle booking Pune",
            description: "Government vehicle booking in Pune allows offices and authorized personnel to arrange transportation in advance for meetings, field visits, inspections, airport travel, official programmes, and outstation duties. Booking details can be planned around the itinerary and vehicle requirement."
        },
        {
            name: "Government office travel service Pune",
            description: "Government office travel service in Pune provides transportation for employees, officers, guests, and departmental teams travelling for official purposes. Local and outstation arrangements can be coordinated according to the schedule, destination, passenger count, and duty requirement."
        },
        {
            name: "Government fleet cab service Pune",
            description: "Government fleet cab service in Pune helps departments coordinate multiple vehicles for employee transportation, official duties, inspections, airport movements, and government programmes. Fleet deployment can be structured around vehicle categories, routes, and the number of passengers."
        },
        {
            name: "Government employee pickup and drop Pune",
            description: "Government employee pickup and drop in Pune supports daily commuting between residential areas and government offices. Routes and timings can be organized around employee locations, office reporting hours, and regular departmental schedules."
        },
        {
            name: "Affordable government taxi service Pune",
            description: "Affordable government taxi service in Pune gives departments a practical transportation option while considering vehicle type, travel distance, service duration, and frequency. Suitable arrangements can be discussed for regular staff movement, official duties, and departmental travel."
        },
        {
            name: "Reliable government office cab Pune",
            description: "Reliable government office cab service in Pune focuses on organized transportation for official duties, staff commuting, meetings, airport transfers, and field assignments. Planned scheduling, appropriate vehicles, and professional chauffeur support help simplify recurring government travel."
        }
    ],
    tableData: [
        ["Government office cab service in Pune"],
        ["Government office taxi service Pune"],
        ["Government staff cab service Pune"],
        ["Government employee transportation Pune"],
        ["Government office car rental Pune"],
        ["Government department cab service Pune"],
        ["Government official vehicle service Pune"],
        ["Government office pickup and drop Pune"],
        ["Government staff transportation Pune"],
        ["Government contract taxi service Pune"],
        ["Government monthly cab rental Pune"],
        ["Government office vehicle hiring Pune"],
        ["Government sedan rental Pune"],
        ["Government SUV rental Pune"],
        ["Government Innova cab service Pune"],
        ["Government duty cab service Pune"],
        ["Government officer car rental Pune"],
        ["Government office airport transfer Pune"],
        ["Government transport contractor Pune"],
        ["Government vehicle booking Pune"],
        ["Government office travel service Pune"],
        ["Government fleet cab service Pune"],
        ["Government employee pickup and drop Pune"],
        ["Affordable government taxi service Pune"],
        ["Reliable government office cab Pune"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Organized Government Transportation",
            WhyChoosedescription: "Virendra Cab can coordinate transportation for government offices, departments, officers, employees, and official guests according to planned travel schedules. Vehicle arrangements can be structured for daily commuting as well as individual official assignments."
        },
        {
            WhyChooseheading: "Flexible Duty-Based Vehicles",
            WhyChoosedescription: "Different official duties may require different vehicle categories. Sedans, SUVs, and spacious Innova vehicles can be considered according to passenger numbers, luggage, travel distance, and the nature of the assignment."
        },
        {
            WhyChooseheading: "Daily Staff Pickup & Drop",
            WhyChoosedescription: "Government employees with regular office schedules can use planned pickup and drop arrangements based on residential locations, office destinations, reporting times, and recurring routes. This helps create a more organized daily commuting system."
        },
        {
            WhyChooseheading: "Monthly & Contract Options",
            WhyChoosedescription: "Departments with recurring transportation requirements can discuss monthly or contract-based vehicle arrangements. Service planning can take into account duration, vehicle category, driver requirements, official usage, and expected travel frequency."
        },
        {
            WhyChooseheading: "Professional Chauffeur Support",
            WhyChoosedescription: "Chauffeur-driven vehicles allow officers and employees to focus on official responsibilities while travelling. Drivers can coordinate journeys around reporting times, scheduled destinations, meetings, airport movements, and field assignments."
        },
        {
            WhyChooseheading: "Airport & Outstation Connectivity",
            WhyChoosedescription: "Government travel may involve airport transfers and journeys to other cities for meetings, inspections, and administrative duties. Suitable vehicles can be arranged for both Pune-based travel and planned outstation assignments."
        },
        {
            WhyChooseheading: "Departmental Fleet Coordination",
            WhyChoosedescription: "When an official programme requires several vehicles, fleet transportation can be planned around passenger groups, reporting points, destinations, and duty schedules. This provides departments with a structured approach to handling multiple transportation requirements."
        },
        {
            WhyChooseheading: "Practical & Reliable Service",
            WhyChoosedescription: "Government offices often require transportation that is easy to schedule and suitable for recurring official use. Virendra Cab focuses on appropriate vehicle selection, professional driver support, planned scheduling, and practical arrangements based on each department's requirements."
        }
    ]
};

const faqData = [
    {
        question: "What is Government Office Cab Service in Pune?",
        answer: "Government Office Cab Service in Pune is a transportation solution for government departments, offices, officials, and authorized staff who need vehicles for regular or occasional official travel. Virendra Cab can arrange cars for office commuting, meetings, inspections, field visits, airport transfers, and other scheduled duties."
    },
    {
        question: "How can a government office book cab service in Pune?",
        answer: "A government office can share the required pickup locations, office address, travel dates, passenger details, working hours, and vehicle requirements with Virendra Cab. For recurring transportation, the expected schedule and service duration can also be discussed beforehand."
    },
    {
        question: "Can government offices use cab services for daily employee transportation?",
        answer: "Yes, government offices can consider cab services for regular transportation of authorized employees and officials. Pickup and drop arrangements can be planned according to office timings, employee locations, and the approved transportation requirement."
    },
    {
        question: "Is driver-assisted cab service available for government offices in Pune?",
        answer: "Driver-assisted cabs can be arranged for government office transportation. This can be useful for officials who need to travel between offices, field locations, meetings, inspections, railway stations, airports, and other destinations during their working schedule."
    },
    {
        question: "Can Government Office Cab Service in Pune be used for official meetings?",
        answer: "Government offices can use rental cabs for official meetings, conferences, training programs, departmental visits, inspections, and scheduled events. Transportation can be coordinated around government offices, meeting venues, hotels, and other required locations."
    },
    {
        question: "Can government officials hire cabs for field visits in Pune?",
        answer: "Cab services can be considered for authorized field visits involving multiple locations across Pune and nearby areas. A driver-assisted vehicle can provide convenient transportation when officials need to visit project sites, departmental offices, inspection locations, or other official destinations."
    },
    {
        question: "Can government offices arrange airport and railway station transfers?",
        answer: "Yes, government office cab services can be planned for Pune Airport and Pune Railway Station transfers. Vehicles can be scheduled for officials or authorized visitors according to arrival and departure timings and their onward official itinerary."
    },
    {
        question: "Are government office cabs available for outstation official travel from Pune?",
        answer: "Outstation cab arrangements can be considered for official journeys from Pune to destinations such as Mumbai, Nashik, Satara, Kolhapur, Aurangabad, and other locations. The trip can be planned according to the official schedule and travel duration."
    },
    {
        question: "Can a government office hire a cab for full-day official use?",
        answer: "Full-day cab rental can be useful when an official assignment includes several meetings, inspections, field visits, or departmental locations. The vehicle can remain available according to the agreed schedule so that planned movements can be handled more conveniently."
    },
    {
        question: "How early should a government office book cab service in Pune?",
        answer: "Advance planning is recommended for official programs, inspections, conferences, airport transfers, and recurring office transportation. Sharing the itinerary, passenger count, pickup points, and required timings early helps Virendra Cab understand and plan the transportation requirement."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Mahesh Patil",
        feedback: "Our office required a cab for an official field visit covering several locations in Pune. The driver-assisted arrangement made it easier for our team to follow the planned schedule and travel between the different sites.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Anjali Shinde",
        feedback: "We arranged transportation for an official visitor arriving at Pune Airport and travelling to our government office. The cab service helped us coordinate the airport transfer and onward journey according to the planned schedule.",
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
  "name": "Government Office Cab Service in Pune",
  "image": "https://virendracabs.com/assets/images/government-office-cab-service-in-pune.webp",
  "description": "Government Office Cab Service in Pune is designed for government departments, public offices, officials, employees and authorized staff members who require organized transportation for regular office commuting and official travel. Virendra Cab provides government office cab arrangements for daily employee movement, departmental visits, meetings, inspections, field assignments, airport transfers and other authorized transportation requirements. Government office taxi service Pune can be arranged according to office timings, employee schedules, pickup locations and destination requirements. Government staff cab service Pune is suitable for departments that need convenient transportation for staff traveling between residential areas, government offices and designated work locations. Government employee transportation Pune can support regular morning pickup and evening drop schedules as well as selected shift-based requirements. Government office car rental Pune may be planned for individual officials, departmental teams or recurring office transportation depending on the required vehicle category and duration. Government department cab service Pune can also support official meetings, inter-department visits, conferences, inspections, training programs and authorized field travel. Dedicated chauffeur-driven vehicles can be considered for senior officials or specific official assignments, while multiple cabs can be coordinated when several employees need transportation from different areas of Pune. Office pickup and drop routes can be discussed based on employee locations, reporting times, office addresses and daily travel requirements. Government office transportation can also be arranged for railway station and airport transfers, intercity official travel and scheduled government programs. Vehicle availability and final fare depend on the selected vehicle, route distance, number of passengers, operating duration, waiting requirements, tolls, parking and itinerary. Virendra Cab can coordinate structured cab and car rental solutions for authorized government office transportation requirements throughout Pune and nearby areas.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "33761"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://virendracabs.com/government-office-cab-service-in-pune"
  }
};




    return (
        <div>

<Helmet>
  <title>
    Government Office Cab Service in Pune | Government Office Taxi Service Pune | +91 9022549022
  </title>

  <meta
    name="description"
    content="Government Office Cab Service in Pune for staff transportation, employee pickup and drop, departmental travel, official meetings, inspections, airport transfers and government office requirements."
  />

  <meta
    name="keywords"
    content="Government office cab service in Pune, Government office taxi service Pune, Government staff cab service Pune, Government employee transportation Pune, Government office car rental Pune, Government department cab service Pune, Government office transport service Pune, Government employee cab service Pune, Government employee taxi service Pune, Government staff transportation Pune, Government staff taxi service Pune, Government office vehicle rental Pune, Government office car hire Pune, Government department taxi service Pune, Government department vehicle rental Pune, Government department car rental Pune, Government official cab service Pune, Government official taxi service Pune, Government official car rental Pune, Government official vehicle hire Pune, Government employee pickup and drop Pune, Government staff pickup and drop Pune, Government office pickup and drop Pune, Government office transportation Pune, Government office cab booking Pune, Government office taxi booking Pune, Government staff cab booking Pune, Government employee cab booking Pune, Government office commute service Pune, Government employee commute service Pune, Government office travel service Pune, Government staff travel service Pune, Government employee travel service Pune, Government departmental transportation Pune, Government department transportation service Pune, Government field visit cab service Pune, Government inspection cab service Pune, Government meeting cab service Pune, Government conference transportation Pune, Government training program cab Pune, Government official meeting transportation Pune, Government airport transfer cab Pune, Government railway station transfer Pune, Government airport pickup cab Pune, Government airport drop cab Pune, Government official airport transfer Pune, Government outstation cab service Pune, Government official outstation taxi Pune, Government vehicle hiring service Pune, Government fleet cab service Pune, Government fleet vehicle rental Pune, Government dedicated car rental Pune, Government chauffeur driven car Pune, Government office dedicated cab Pune, Government office monthly cab service Pune, Government employee daily cab service Pune, Government office shift cab service Pune, Government staff transport cab Pune"
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
                            <img src='/images/keyword/132.jpeg' alt='img' className='img-fluid' />
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

export default Govermentofficecabservice ;