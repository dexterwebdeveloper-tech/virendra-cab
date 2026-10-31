import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Employeetransportation() {



const cardData = {
    keyword: "Employee Transportation Services in Pune",
    headingDescription: "Virendra Cab provides organized employee transportation services in Pune for companies, offices, IT teams, industrial units, and corporate workforces. Our employee travel solutions can be planned around office locations, employee pickup points, shift timings, route requirements, and daily workforce movement, with suitable cars, SUVs, and larger vehicles available for different group sizes.",
    topPlaces: [
        {
            title: "Pimple Saudagar",
            description: "Employee transportation from Pimple Saudagar can be arranged for companies requiring regular office pickup and drop services, with route planning designed around employee locations, reporting times, and scheduled shifts."
        },
        {
            title: "Nigdi",
            description: "Staff members travelling from Nigdi can use coordinated employee cab and shuttle services for daily office commutes, helping companies organize dependable transportation across fixed routes and working schedules."
        },
        {
            title: "Akurdi",
            description: "Akurdi is a convenient pickup area for workforce transportation plans covering corporate offices, industrial locations, and nearby business zones, with vehicles selected according to employee strength and route requirements."
        },
        {
            title: "Dehu Road",
            description: "Employee transportation from Dehu Road can support businesses with teams travelling toward Pune and PCMC workplaces, including scheduled pickups, return drops, and shift-based commuting arrangements."
        },
        {
            title: "Tathawade",
            description: "Tathawade employees can benefit from organized daily cab and shuttle movements connecting residential areas with offices, campuses, and commercial workplaces according to predefined schedules."
        },
        {
            title: "Balewadi",
            description: "Corporate teams based around Balewadi can arrange employee pickup and drop transportation with route coordination, comfortable vehicles, and flexible schedules suitable for regular office commuting."
        },
        {
            title: "Bavdhan",
            description: "Employee travel plans from Bavdhan can be structured around multiple pickup points and office destinations, making it practical for organizations managing recurring staff movement throughout the week."
        },
        {
            title: "Sus",
            description: "Regular employee transportation from Sus can connect staff with offices and business locations across Pune through planned cab routes, scheduled pickups, and return journeys based on workplace timings."
        },
        {
            title: "Lohegaon",
            description: "Companies with employees travelling from Lohegaon can use organized cab services for office commutes and airport-related workforce movement, with schedules coordinated around reporting and departure requirements."
        },
        {
            title: "NIBM",
            description: "NIBM provides another useful residential pickup zone for employee transportation plans, allowing companies to coordinate staff movement through suitable cabs, SUVs, and larger vehicles according to daily requirements."
        }
    ],
    services: [
        {
            name: "Employee transportation services in Pune",
            description: "Employee transportation services in Pune are planned for companies that need consistent workforce movement between residential pickup points and office locations. Virendra Cab can coordinate regular routes, suitable vehicle categories, pickup schedules, and return drops according to employee numbers and operational requirements."
        },
        {
            name: "Employee cab service Pune",
            description: "Employee cab service in Pune provides a practical option for companies requiring comfortable daily transportation for individual employees or small groups. Routes can be organized around employee locations, office timings, and designated pickup points to make everyday commuting more structured."
        },
        {
            name: "Staff transportation service Pune",
            description: "Staff transportation service in Pune supports businesses with recurring employee movement across office, commercial, and industrial locations. Vehicle selection and route planning can be adjusted according to workforce size, shift patterns, travel distance, and the number of daily trips required."
        },
        {
            name: "Employee pickup and drop Pune",
            description: "Employee pickup and drop in Pune can be arranged around fixed office schedules, employee residential areas, and designated route points. This helps organizations maintain a planned commute system for morning pickups, evening drops, and different shift requirements."
        },
        {
            name: "Office transportation service Pune",
            description: "Office transportation service in Pune is suitable for organizations that want a dependable arrangement for moving employees between their homes and workplaces. Daily routes can be coordinated according to office reporting times, employee locations, and return journey schedules."
        },
        {
            name: "Corporate employee transportation Pune",
            description: "Corporate employee transportation in Pune can be structured for IT companies, corporate offices, service businesses, and other organizations with regular workforce travel requirements. Customized vehicle and route arrangements help accommodate different employee volumes and working schedules."
        },
        {
            name: "Employee taxi service Pune",
            description: "Employee taxi service in Pune offers convenient cab-based transportation for employees travelling to and from work. Cars can be assigned according to route requirements, passenger numbers, and scheduled pickup and drop timings for regular corporate commuting."
        },
        {
            name: "Staff cab service Pune",
            description: "Staff cab service in Pune helps companies arrange recurring transportation for employees across residential and workplace routes. The service can support individual pickup points, shared routes, scheduled drops, and different operational shifts."
        },
        {
            name: "Daily employee transportation Pune",
            description: "Daily employee transportation in Pune is designed for businesses requiring regular home-to-office and office-to-home travel throughout the working week. Routes and vehicle deployment can be planned around employee schedules to create an organized daily commute."
        },
        {
            name: "Monthly employee cab service Pune",
            description: "Monthly employee cab service in Pune provides companies with a recurring transportation arrangement instead of handling individual rides every day. Monthly plans can be discussed around route requirements, vehicle categories, workforce size, and expected transportation frequency."
        },
        {
            name: "IT employee transportation Pune",
            description: "IT employee transportation in Pune can support technology companies with scheduled commuting for employees working across different shifts and office timings. Cab and group vehicle options can be coordinated for regular routes between residential areas and IT workplaces."
        },
        {
            name: "Company staff transportation Pune",
            description: "Company staff transportation in Pune helps organizations manage routine employee travel through planned cab, SUV, and group transportation options. Routes can be designed around workforce locations, office schedules, and the number of employees travelling on each route."
        },
        {
            name: "Corporate staff pickup and drop Pune",
            description: "Corporate staff pickup and drop in Pune can be customized for businesses that require scheduled transportation between employee residences and corporate workplaces. Multiple pickup points and return routes can be incorporated according to workforce requirements."
        },
        {
            name: "Employee shuttle service Pune",
            description: "Employee shuttle service in Pune is useful for companies with larger teams travelling along common routes. Shuttle arrangements can reduce the need for individual trips by coordinating employees through shared pickup points and planned workplace schedules."
        },
        {
            name: "Office commute cab service Pune",
            description: "Office commute cab service in Pune gives employees a convenient way to travel regularly between residential areas and workplaces. Route planning can consider office timings, employee pickup clusters, traffic conditions, and return schedules for smoother daily operations."
        },
        {
            name: "AC employee cab service Pune",
            description: "AC employee cab service in Pune provides comfortable transportation for staff during daily office travel, particularly when employees have longer routes or multiple pickup points. Suitable air-conditioned vehicles can be assigned according to passenger requirements and route conditions."
        },
        {
            name: "Female employee transportation Pune",
            description: "Female employee transportation in Pune can be planned around specific workplace schedules, designated pickup locations, and suitable travel arrangements. Companies can discuss route requirements and operational preferences when arranging regular transportation for female employees."
        },
        {
            name: "Night shift employee cab service Pune",
            description: "Night shift employee cab service in Pune supports businesses operating beyond conventional office hours, including IT, BPO, healthcare, manufacturing, and other shift-based workplaces. Transportation can be coordinated around late-night pickups, early-morning drops, and changing shift schedules."
        },
        {
            name: "Day shift employee transportation Pune",
            description: "Day shift employee transportation in Pune helps companies coordinate morning employee pickups and scheduled return journeys based on standard working hours. Routes can be grouped according to employee locations and office reporting requirements."
        },
        {
            name: "Employee airport transfer Pune",
            description: "Employee airport transfer in Pune is suitable when corporate staff need transportation between workplaces, residences, and Pune Airport. Pickup and drop schedules can be coordinated around flight timings, reporting requirements, luggage, and employee travel plans."
        },
        {
            name: "Employee bus rental Pune",
            description: "Employee bus rental in Pune is a practical option for organizations transporting larger teams to offices, industrial units, campuses, or corporate facilities. Bus capacity and deployment can be selected according to workforce size, route distance, and daily transportation requirements."
        },
        {
            name: "Staff vehicle rental Pune",
            description: "Staff vehicle rental in Pune allows companies to arrange suitable vehicles for recurring workforce movement. Depending on the requirement, organizations can discuss cars, SUVs, tempo travellers, or larger group vehicles for regular staff transportation."
        },
        {
            name: "Affordable employee transportation Pune",
            description: "Affordable employee transportation in Pune can be planned by matching vehicle capacity, route coverage, pickup points, and trip frequency with the company's actual workforce requirements. Shared routes and suitable vehicle selection can help businesses evaluate practical transportation options."
        },
        {
            name: "Reliable employee cab service Pune",
            description: "Reliable employee cab service in Pune focuses on organized scheduling, appropriate vehicle deployment, professional drivers, and consistent route coordination. Companies can structure transportation plans around employee locations and working hours to support dependable daily commuting."
        },
        {
            name: "Professional staff transportation Pune",
            description: "Professional staff transportation in Pune is designed for organizations seeking a structured approach to employee mobility. Virendra Cab can coordinate vehicle requirements, pickup routes, office schedules, and recurring travel arrangements to support regular workforce transportation."
        }
    ],
    tableData: [
        ["Employee transportation services in Pune"],
        ["Employee cab service Pune"],
        ["Staff transportation service Pune"],
        ["Employee pickup and drop Pune"],
        ["Office transportation service Pune"],
        ["Corporate employee transportation Pune"],
        ["Employee taxi service Pune"],
        ["Staff cab service Pune"],
        ["Daily employee transportation Pune"],
        ["Monthly employee cab service Pune"],
        ["IT employee transportation Pune"],
        ["Company staff transportation Pune"],
        ["Corporate staff pickup and drop Pune"],
        ["Employee shuttle service Pune"],
        ["Office commute cab service Pune"],
        ["AC employee cab service Pune"],
        ["Female employee transportation Pune"],
        ["Night shift employee cab service Pune"],
        ["Day shift employee transportation Pune"],
        ["Employee airport transfer Pune"],
        ["Employee bus rental Pune"],
        ["Staff vehicle rental Pune"],
        ["Affordable employee transportation Pune"],
        ["Reliable employee cab service Pune"],
        ["Professional staff transportation Pune"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Route Planning Around Employee Locations",
            WhyChoosedescription: "Employee transportation can be organized around residential pickup zones, office destinations, common travel corridors, and designated pickup points so that companies have a structured daily commute arrangement."
        },
        {
            WhyChooseheading: "Support for Multiple Work Shifts",
            WhyChoosedescription: "Day shifts, night shifts, rotational schedules, and extended working hours can require different transportation timings. Service planning can be adjusted according to the company's actual shift requirements."
        },
        {
            WhyChooseheading: "Suitable Vehicles for Different Teams",
            WhyChoosedescription: "From individual employee cabs to SUVs, tempo travellers, and buses, vehicle selection can be matched with passenger count and route requirements so companies can choose a practical transportation setup."
        },
        {
            WhyChooseheading: "Comfortable Daily Commutes",
            WhyChoosedescription: "Regular employees may spend significant time travelling between home and work. Air-conditioned vehicles and suitable seating arrangements can make recurring office transportation more comfortable and convenient."
        },
        {
            WhyChooseheading: "Professional Driver Support",
            WhyChoosedescription: "Professional drivers help manage routine employee transportation while following planned routes and scheduled pickup and drop timings, giving companies a more organized approach to daily workforce mobility."
        },
        {
            WhyChooseheading: "Corporate and IT Workforce Support",
            WhyChoosedescription: "Employee transport requirements can vary between IT companies, corporate offices, manufacturing units, service businesses, and other workplaces. Transportation plans can be adapted to different workforce sizes and operating schedules."
        },
        {
            WhyChooseheading: "Regular and Monthly Transportation Options",
            WhyChoosedescription: "Businesses with recurring staff travel can discuss daily or monthly transportation arrangements based on their routes, employee numbers, vehicle requirements, and expected frequency of service."
        },
        {
            WhyChooseheading: "Flexible Employee Mobility Solutions",
            WhyChoosedescription: "Workforce requirements can change because of new employees, revised shifts, additional office routes, airport travel, or larger teams. Transportation arrangements can be discussed and adjusted according to changing business needs."
        }
    ]
};

const faqData = [
    {
        question: "What are Employee Transportation Services in Pune?",
        answer: "Employee Transportation Services in Pune provide organized travel solutions for staff commuting between their homes and workplaces. Virendra Cab can arrange transportation for regular office pickup and drop, shift-based travel, corporate movements, meetings, and other employee transportation requirements."
    },
    {
        question: "How can a company arrange employee transportation in Pune?",
        answer: "A company can share employee pickup areas, office locations, working hours, number of passengers, and required service frequency with Virendra Cab. Based on these details, suitable cab routes and transportation arrangements can be discussed for the workforce."
    },
    {
        question: "Can Employee Transportation Services in Pune be used for daily office pickup and drop?",
        answer: "Yes, daily employee pickup and drop can be organized for staff who regularly travel between residential areas and their workplace. Routes can be planned according to employee locations, office timings, and the number of people using the transportation service."
    },
    {
        question: "Are employee cab services available for different shifts in Pune?",
        answer: "Employee cab arrangements can be considered for different working schedules, including morning, evening, rotational, and late shifts. The pickup and drop plan can be discussed according to employee locations and the company's shift timings."
    },
    {
        question: "Can multiple employees travel together in one office cab?",
        answer: "Yes, employees living in nearby areas can potentially share a vehicle when their routes and timings are compatible. Grouping employees along practical routes can help organize regular commuting while reducing the need for separate vehicles."
    },
    {
        question: "Does Virendra Cab provide driver-assisted employee transportation?",
        answer: "Driver-assisted transportation can be arranged for employees travelling to and from the workplace. This allows staff to focus on their daily commute while the vehicle follows the planned pickup and drop schedule."
    },
    {
        question: "Can Employee Transportation Services be arranged for IT companies in Pune?",
        answer: "IT companies, BPOs, manufacturing businesses, service organizations, and other workplaces can consider employee transportation in Pune. Routes can be planned around office locations and employee clusters in areas such as Hinjewadi, Wakad, Kharadi, Hadapsar, Baner, and other business zones."
    },
    {
        question: "Can companies arrange monthly employee cab services in Pune?",
        answer: "Monthly employee transportation can be discussed for companies requiring recurring staff commuting throughout the working month. The arrangement can take into account service frequency, employee count, pickup points, office timings, and required vehicle categories."
    },
    {
        question: "Can employee transportation be used for airport or business travel?",
        answer: "Yes, employee transportation can also cover official airport transfers, business meetings, conferences, training programs, and company events. Separate travel requirements can be planned when employees need transportation beyond their regular office commute."
    },
    {
        question: "What information is needed to arrange Employee Transportation Services in Pune?",
        answer: "Useful information includes employee pickup locations, office address, shift timings, passenger count, service days, preferred vehicle type, and whether the requirement is one-time or recurring. Providing these details helps Virendra Cab understand the company's transportation needs and plan the service accordingly."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Harshad Pawar",
        feedback: "Our company needed regular pickup and drop transportation for employees living across different parts of Pune. The cab arrangement gave us a more structured way to manage daily commuting around our office timings.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Riya Kapse",
        feedback: "We arranged employee transportation for a team working on different shifts. Coordinating the pickup locations and timings through one service made the daily travel planning much simpler for our staff.",
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
  "name": "Employee Transportation Services in Pune",
  "image": "https://virendracabs.com/assets/images/employee-transportation-services-in-pune.webp",
  "description": "Employee Transportation Services in Pune are designed to help companies manage regular staff commuting with organized cab and taxi arrangements between employee pickup points and office locations. Virendra Cab provides employee transportation solutions for corporate offices, IT companies, business establishments, industrial units, commercial workplaces and organizations that require scheduled daily travel for their staff. Employee cab service Pune can be planned around office reporting times, shift schedules, employee residential areas and designated workplace locations. Staff transportation service Pune supports convenient daily commuting for employees traveling to and from work, while employee pickup and drop Pune arrangements can be coordinated according to route requirements and operating schedules. Office transportation service Pune is suitable for businesses looking for structured transportation for morning pickups, evening drops, shift-based travel and selected extended-hour requirements. Corporate employee transportation Pune can include multiple cabs for teams working across different areas, dedicated vehicles for specific routes and recurring transportation arrangements based on employee strength. Employee taxi service Pune can be used for individual or group commuting, while staff cab service Pune provides a practical option for companies managing regular employee mobility. Daily employee transportation Pune can be organized with predefined pickup locations, drop points and reporting times to make recurring office travel easier to coordinate. The service can also support night shifts, early morning schedules, late office hours, employee transfers between company locations, business park travel and authorized airport or railway station transportation. Companies can share the number of employees, pickup areas, office address, shift timings, vehicle preferences and required service frequency to discuss an appropriate transportation plan. Multiple vehicle categories may be considered depending on passenger capacity and route requirements. Final fare and vehicle availability depend on route distance, passenger count, vehicle type, service duration, waiting requirements, tolls, parking and the overall transportation schedule. Virendra Cab can coordinate reliable employee transportation services across Pune and nearby areas for businesses seeking regular, organized and convenient staff commuting solutions.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "35419"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://virendracabs.com/employee-transportation-services-in-pune"
  }
};





    return (
        <div>


<Helmet>
  <title>
    Employee Transportation Services in Pune | Employee Cab Service Pune | +91 9022549022
  </title>

  <meta
    name="description"
    content="Employee Transportation Services in Pune for daily staff commuting, office pickup and drop, corporate employee travel, shift transportation and scheduled cab services."
  />

  <meta
    name="keywords"
    content="Employee transportation services in Pune, Employee cab service Pune, Staff transportation service Pune, Employee pickup and drop Pune, Office transportation service Pune, Corporate employee transportation Pune, Employee taxi service Pune, Staff cab service Pune, Daily employee transportation Pune, Employee transport service Pune, Employee transportation service Pune, Staff transportation Pune, Staff transport service Pune, Employee car rental Pune, Employee vehicle rental Pune, Employee cab booking Pune, Employee taxi booking Pune, Staff cab booking Pune, Staff taxi service Pune, Office cab service Pune, Office taxi service Pune, Office pickup and drop Pune, Corporate employee cab service Pune, Corporate staff transportation Pune, Corporate staff cab service Pune, Corporate employee taxi service Pune, Company employee transportation Pune, Company staff transportation Pune, Company cab service Pune, Company employee cab service Pune, Daily employee cab service Pune, Daily employee pickup and drop Pune, Daily staff transportation Pune, Daily staff cab service Pune, Employee daily commute Pune, Staff daily commute Pune, Employee commute service Pune, Staff commute service Pune, Employee office cab Pune, Staff office cab Pune, Employee office transportation Pune, Staff office transportation Pune, Employee shift transportation Pune, Staff shift transportation Pune, Employee night shift cab Pune, Night shift employee transportation Pune, Employee morning pickup Pune, Employee evening drop Pune, Employee pickup service Pune, Employee drop service Pune, Dedicated employee cab Pune, Dedicated staff cab Pune, Dedicated office transportation Pune, Monthly employee transportation Pune, Monthly staff cab service Pune, Regular employee transportation Pune, Regular office pickup and drop Pune, Employee shuttle service Pune, Staff shuttle service Pune, Corporate shuttle service Pune, IT employee transportation Pune, IT staff cab service Pune, IT company employee transport Pune, Business employee transportation Pune, Employee airport transfer Pune, Employee railway station transfer Pune, Employee outstation transportation Pune"
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

export default Employeetransportation ;