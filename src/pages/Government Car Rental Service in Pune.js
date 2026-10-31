import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Govermentcarrentalservice() {



const cardData = {
    keyword: "Government Car Rental Service in Pune",
    headingDescription: "Government Car Rental Service in Pune provides a practical transportation solution for government departments, public-sector offices, official staff and authorized institutional requirements. Professional vehicle hiring can support daily office duties, meetings, inspections, field visits, airport transfers, interdepartmental travel and scheduled official assignments. With options such as sedans, SUVs, Innova and Ertiga along with driver-supported rentals, departments can select transportation according to duty requirements, passenger capacity, route and contract duration.",
    topPlaces: [
        {
            title: "Mumbai",
            description: "Mumbai is a frequent destination for official meetings, departmental coordination and institutional work from Pune. A hired government vehicle can provide convenient point-to-point transportation for officers and staff travelling between the two cities."
        },
        {
            title: "Nashik",
            description: "Government officials and departmental teams may require transportation to Nashik for inspections, meetings and field assignments. A dedicated rental car provides flexibility for scheduled visits and return journeys."
        },
        {
            title: "Kolhapur",
            description: "Kolhapur can be covered comfortably for official inspections, administrative work and interdepartmental meetings. Government vehicle rental allows staff to maintain a planned travel schedule without depending on public transport."
        },
        {
            title: "Nagpur",
            description: "Nagpur is an important destination for longer official journeys, conferences and administrative assignments. A suitable sedan or SUV with driver can support multi-day government travel with convenient point-to-point movement."
        },
        {
            title: "Aurangabad",
            description: "Official teams travelling towards Aurangabad for inspections, meetings or institutional activities can use a dedicated rental vehicle. Comfortable transportation is especially useful when multiple locations need to be covered during the assignment."
        },
        {
            title: "Satara",
            description: "Satara is suitable for government field visits, site inspections and administrative duties from Pune. A rental car with driver can provide scheduled transportation for officers travelling to different locations during the day."
        },
        {
            title: "Solapur",
            description: "Solapur can be included in longer official travel plans involving government departments, field officers and institutional teams. A dedicated vehicle provides flexibility for planned stops and return travel."
        },
        {
            title: "Ahmednagar",
            description: "Ahmednagar is a practical destination for departmental inspections, government meetings and field assignments. Car rental with driver can help officials manage their itinerary while travelling between offices and project locations."
        },
        {
            title: "Mahabaleshwar",
            description: "Mahabaleshwar may be required for official site visits, conferences, training programs or institutional travel. An SUV or sedan with driver can offer convenient road transportation for officers and small teams."
        },
        {
            title: "Lonavala",
            description: "Lonavala can serve as a destination for official meetings, training programs, inspections and institutional events. A dedicated government rental vehicle allows staff to travel according to their scheduled duty timings."
        }
    ],
    services: [
        {
            name: "Government car rental service in Pune",
            description: "Government car rental service in Pune supports official transportation requirements for departments, public offices and institutional teams. Vehicles can be arranged for local duties, meetings, inspections, airport transfers and other authorized government assignments."
        },
        {
            name: "Government vehicle rental Pune",
            description: "Government vehicle rental Pune provides access to suitable cars for scheduled official movement. Departments can select vehicle categories according to passenger requirements, travel distance, duty schedule and duration of engagement."
        },
        {
            name: "Government cab service Pune",
            description: "Government cab service Pune is suitable for officers and staff requiring dependable transportation for official meetings, field visits, administrative duties and interoffice travel. Driver-supported service can simplify daily movement."
        },
        {
            name: "Government car hire Pune",
            description: "Government car hire Pune offers a convenient option for departments requiring vehicles on a daily, temporary or longer contractual basis. Cars can be used for official travel within Pune as well as approved outstation assignments."
        },
        {
            name: "Government taxi service Pune",
            description: "Government taxi service Pune can support scheduled official journeys, airport transfers, meetings and field assignments. Suitable vehicles can be selected according to passenger numbers and the nature of the government duty."
        },
        {
            name: "Government transport service Pune",
            description: "Government transport service Pune helps departments organize official road transportation for officers, employees and authorized visitors. Vehicle arrangements can be planned around duty schedules, destinations and recurring travel requirements."
        },
        {
            name: "Government office car rental Pune",
            description: "Government office car rental Pune provides dedicated transportation for routine office duties, official meetings, inspections and local administrative travel. Monthly or as-required arrangements can be considered based on departmental needs."
        },
        {
            name: "Government department vehicle hiring Pune",
            description: "Government department vehicle hiring Pune is suitable for departments that require regular transportation for officers, field staff, inspections and official programs. Vehicle usage can be organized around departmental schedules and assigned duties."
        },
        {
            name: "Government staff car rental Pune",
            description: "Government staff car rental Pune provides transportation for employees and officials travelling for authorized work. Comfortable vehicles with professional drivers can help staff reach offices, meetings, sites and other official destinations."
        },
        {
            name: "Government employee transportation Pune",
            description: "Government employee transportation Pune can support scheduled movement of staff between offices, project locations, training venues and official events. Vehicle selection can be adjusted according to group size and transportation frequency."
        },
        {
            name: "Government vehicle booking Pune",
            description: "Government vehicle booking Pune allows departments to plan transportation in advance for meetings, inspections, field visits and official programs. Sharing the duty schedule and vehicle requirement helps organize an appropriate booking."
        },
        {
            name: "Government fleet management Pune",
            description: "Government fleet management Pune can help organizations coordinate multiple hired vehicles for recurring official requirements. Proper scheduling of sedans, SUVs and other vehicles can support regular staff movement and departmental duties."
        },
        {
            name: "Government contract car rental Pune",
            description: "Government contract car rental Pune is suitable for departments requiring vehicles under longer-term service arrangements. Contract-based transportation can be structured around recurring official duties, vehicle categories and required usage patterns."
        },
        {
            name: "Government monthly car rental Pune",
            description: "Government monthly car rental Pune provides a convenient option for offices that need consistent vehicle availability throughout the month. Monthly arrangements can support regular local duties, meetings, inspections and scheduled official travel."
        },
        {
            name: "Government car rental with driver Pune",
            description: "Government car rental with driver Pune offers an organized transportation solution for officials who require a dedicated vehicle for official duties. Driver-supported travel can assist with planned office visits, meetings, inspections and field assignments."
        },
        {
            name: "Government sedan rental Pune",
            description: "Government sedan rental Pune is suitable for individual officers, small teams and routine official travel. Sedans can be used for city meetings, airport transfers, departmental visits and selected outstation assignments."
        },
        {
            name: "Government SUV rental Pune",
            description: "Government SUV rental Pune is useful when officials require additional cabin space, luggage capacity or a vehicle suited to longer field assignments. SUVs can support inspections, site visits and multi-location official travel."
        },
        {
            name: "Government Innova rental Pune",
            description: "Government Innova rental Pune provides a practical vehicle option for official teams requiring comfortable seating and additional space. It can be arranged for meetings, field visits, airport transfers and longer government assignments."
        },
        {
            name: "Government Ertiga rental Pune",
            description: "Government Ertiga rental Pune is suitable for small to medium-sized official groups needing a comfortable vehicle for local and outstation duties. Its seating arrangement can support staff travel while keeping transportation coordinated."
        },
        {
            name: "Government official car booking Pune",
            description: "Government official car booking Pune supports scheduled transportation for authorized officers and official guests. Vehicles can be planned for meetings, inspections, conferences, airport transfers and other institutional requirements."
        },
        {
            name: "Government duty vehicle rental Pune",
            description: "Government duty vehicle rental Pune can be arranged for field duties, inspections, administrative assignments and official travel schedules. Departments can select suitable vehicles according to the nature and duration of the duty."
        },
        {
            name: "Government tender car rental Pune",
            description: "Government tender car rental Pune is relevant for departments and public institutions sourcing vehicle services through formal procurement processes. Vehicle categories, contract duration, driver requirements and documentation can be aligned with applicable tender conditions."
        },
        {
            name: "Government vehicle outsourcing Pune",
            description: "Government vehicle outsourcing Pune allows departments to obtain transportation support without independently managing every aspect of vehicle operation. Outsourced arrangements can cover vehicles, drivers and scheduled official transportation requirements."
        },
        {
            name: "Government transport contractor Pune",
            description: "Government transport contractor Pune services can support departments requiring organized vehicle deployment for official assignments. Transportation requirements can be coordinated according to approved schedules, vehicle categories and contractual conditions."
        },
        {
            name: "Affordable government car rental Pune",
            description: "Affordable government car rental Pune provides departments with a practical way to compare vehicle options according to duty requirements and budget considerations. Suitable arrangements can be selected for daily, monthly, temporary or official outstation use."
        }
    ],
    tableData: [
        ["Government car rental service in Pune"],
        ["Government vehicle rental Pune"],
        ["Government cab service Pune"],
        ["Government car hire Pune"],
        ["Government taxi service Pune"],
        ["Government transport service Pune"],
        ["Government office car rental Pune"],
        ["Government department vehicle hiring Pune"],
        ["Government staff car rental Pune"],
        ["Government employee transportation Pune"],
        ["Government vehicle booking Pune"],
        ["Government fleet management Pune"],
        ["Government contract car rental Pune"],
        ["Government monthly car rental Pune"],
        ["Government car rental with driver Pune"],
        ["Government sedan rental Pune"],
        ["Government SUV rental Pune"],
        ["Government Innova rental Pune"],
        ["Government Ertiga rental Pune"],
        ["Government official car booking Pune"],
        ["Government duty vehicle rental Pune"],
        ["Government tender car rental Pune"],
        ["Government vehicle outsourcing Pune"],
        ["Government transport contractor Pune"],
        ["Affordable government car rental Pune"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Official Duty Transportation",
            WhyChoosedescription: "Dedicated cars can support government officers and staff during meetings, inspections, field visits, administrative duties and other authorized official assignments."
        },
        {
            WhyChooseheading: "Multiple Vehicle Options",
            WhyChoosedescription: "Departments can select from suitable sedan, SUV, Innova and Ertiga options depending on passenger count, luggage requirements, travel distance and nature of the duty."
        },
        {
            WhyChooseheading: "Driver-Supported Service",
            WhyChoosedescription: "A car rental with driver provides a convenient transportation arrangement for officials, allowing them to focus on meetings, documentation, inspections and other responsibilities during travel."
        },
        {
            WhyChooseheading: "Monthly Rental Availability",
            WhyChoosedescription: "Recurring government transportation requirements can be planned through monthly arrangements where suitable, helping offices maintain consistent vehicle availability for regular official duties."
        },
        {
            WhyChooseheading: "Local and Outstation Travel",
            WhyChoosedescription: "Vehicles can be used for Pune city duties as well as planned outstation assignments, giving departments flexibility when officials need to travel to different locations."
        },
        {
            WhyChooseheading: "Suitable for Departmental Requirements",
            WhyChoosedescription: "Vehicle arrangements can be organized around departmental schedules, staff movement, inspections, official meetings, training programs and other institutional transportation needs."
        },
        {
            WhyChooseheading: "Flexible Vehicle Deployment",
            WhyChoosedescription: "Cars can be selected according to the assignment, from compact sedan requirements for individual officers to larger SUVs and MUVs for teams and longer field duties."
        },
        {
            WhyChooseheading: "Planned Contract Support",
            WhyChoosedescription: "For recurring transportation requirements, departments can discuss suitable contractual arrangements covering vehicle usage, driver support, duration and official travel schedules."
        }
    ]
};


const faqData = [
    {
        question: "What is included in a Government Car Rental Service in Pune?",
        answer: "Government Car Rental Service in Pune is suitable for official travel requirements such as departmental visits, meetings, inspections, conferences, airport transfers, and other authorized journeys. Virendra Cab can arrange suitable cars based on the travel schedule, passenger requirement, and destination."
    },
    {
        question: "How can I book a Government Car Rental Service in Pune?",
        answer: "To enquire about a government car rental in Pune, share the pickup location, travel date, destination, number of passengers, expected usage hours, and whether the requirement is local or outstation. These details help Virendra Cab understand the official transportation requirement."
    },
    {
        question: "Can government departments hire cars for official duties in Pune?",
        answer: "Yes, government departments and officials can consider rental cars for official duties within Pune and for travel to other locations. Vehicles can be used for meetings, field visits, inspections, administrative work, conferences, and scheduled official programs."
    },
    {
        question: "Is a driver provided with government car rental services in Pune?",
        answer: "Driver-assisted rental can be arranged for government and official travel requirements. Having a dedicated driver can be useful when the itinerary includes multiple offices, inspection locations, meetings, or other scheduled stops during the day."
    },
    {
        question: "Can I hire a rental car for government meetings and conferences in Pune?",
        answer: "A rental car can be arranged for attending government meetings, conferences, seminars, training programs, and official events in Pune. Pickup and drop locations can be planned around offices, hotels, conference venues, railway stations, or Pune Airport."
    },
    {
        question: "Are government rental cars available for outstation official travel from Pune?",
        answer: "Outstation car rental can be considered for official journeys from Pune to cities such as Mumbai, Nashik, Kolhapur, Satara, Aurangabad, or other destinations. The vehicle arrangement can be planned according to the official itinerary and expected travel duration."
    },
    {
        question: "Can a government car rental be booked for full-day official use in Pune?",
        answer: "Full-day rental can be useful when an official schedule involves several locations throughout Pune. The car may be used for office visits, inspections, meetings, site visits, and other planned movements during the agreed rental period."
    },
    {
        question: "Can government officials use rental cars for airport and railway transfers?",
        answer: "Yes, government officials can arrange rental cars for transfers to and from Pune Airport or Pune Railway Station. This can be useful when an official visit involves scheduled arrivals, departures, meetings, or onward travel to another location."
    },
    {
        question: "What type of cars can be used for government rental requirements in Pune?",
        answer: "The suitable vehicle depends on the number of passengers, luggage, journey distance, and nature of the official assignment. Virendra Cab can help identify an appropriate car category after receiving the travel and usage details."
    },
    {
        question: "How early should I book a Government Car Rental Service in Pune?",
        answer: "Advance booking is advisable when the vehicle is required for inspections, conferences, official tours, airport transfers, or multi-location schedules. Sharing the complete itinerary early allows the rental arrangement to be planned around the required date and timing."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Rajendra Kulkarni",
        feedback: "A car was arranged for our official work in Pune involving several meetings at different locations. The driver-assisted service made it easier to follow the day's schedule without worrying about local transportation.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Priyanka Deshmukh",
        feedback: "For an official visit involving Pune Airport and multiple office locations, we selected a rental car through Virendra Cab. The transportation arrangement was convenient and helped us manage the scheduled movements comfortably.",
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
  "name": "Government Car Rental Service in Pune",
  "image": "https://virendracabs.com/assets/images/government-car-rental-service-in-pune.webp",
  "description": "Government Car Rental Service in Pune is designed for government departments, public offices, administrative teams, official delegations and employees who require dependable vehicle arrangements for official travel. Virendra Cab provides chauffeur-driven government vehicle rental options for office visits, departmental meetings, inspections, field duties, official tours, conferences, airport transfers and intercity assignments. Government vehicle rental Pune can be arranged according to the number of passengers, journey duration and official travel schedule, with suitable cars available for individual officers, small teams and larger groups. Government cab service Pune is useful for planned as well as recurring transportation requirements, including movement between government offices, project locations, railway stations, airports, hotels and meeting venues. Government Car Hire Pune can support one-way journeys, round trips, full-day bookings and multi-day official travel while allowing the itinerary to be organized around departmental requirements. Government taxi service Pune is suitable for authorized official movement, scheduled appointments and local city travel, while Government Transport Service Pune can be coordinated for field visits and outstation assignments. Government office car rental Pune offers a practical option for departments that need vehicles for employees, visiting officials, inspection teams and official programs. Customers can share the pickup location, destination, travel date, passenger count and required vehicle type to receive a customized quotation for their government travel requirement. The applicable fare depends on vehicle selection, distance, duration, route, tolls, parking and the overall itinerary. Virendra Cab can coordinate government-focused car rental requirements across Pune and nearby areas with flexible booking arrangements for local and outstation official travel.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "34827"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://virendracabs.com/government-car-rental-service-in-pune"
  }
};








    return (
        <div>
<Helmet>
  <title>
    Government Car Rental Service in Pune | Government Vehicle Rental Pune | +91 9022549022
  </title>

  <meta
    name="description"
    content="Government Car Rental Service in Pune for official travel, government offices, departmental visits, inspections, airport transfers, field duties and outstation assignments."
  />

  <meta
    name="keywords"
    content="Government car rental service in Pune, Government vehicle rental Pune, Government cab service Pune, Government car hire Pune, Government taxi service Pune, Government transport service Pune, Government office car rental Pune, Government car rental Pune, Government vehicle hire Pune, Government cab rental Pune, Government taxi rental Pune, Government transport rental Pune, Government office vehicle rental Pune, Government department car rental Pune, Government employee cab service Pune, Government official car rental Pune, Government official vehicle hire Pune, Government staff transport Pune, Government office cab service Pune, Government department transport service Pune, Government vehicle booking Pune, Government car booking Pune, Government taxi booking Pune, Government vehicle rental service Pune, Government car hire service Pune, Government cab hire Pune, Government office transport Pune, Government official travel cab Pune, Government field visit car rental Pune, Government inspection vehicle rental Pune, Government meeting car rental Pune, Government conference transport Pune, Government airport transfer Pune, Government railway station transfer Pune, Government outstation car rental Pune, Government car rental for official travel Pune, Government vehicle rental for official duty Pune, Government taxi for official travel Pune, Government car rental for government employees Pune, Government vehicle hire for government officers Pune, Government office car hire Pune, Government department cab rental Pune, Government fleet rental Pune, Government transportation service Pune, Government vehicle service Pune"
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

export default Govermentcarrentalservice ;