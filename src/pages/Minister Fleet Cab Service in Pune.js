import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Ministeerfleetscabservice() {



const cardData = {
    keyword: "Minister Fleet Cab Service in Pune",
    headingDescription: "Minister Fleet Cab Service in Pune by Virendra Cab is designed for official visits, government programmes, VIP movements, airport transfers, public events, and scheduled duty travel. Suitable sedans, SUVs, and spacious vehicles can be coordinated with professional chauffeurs for ministers, official guests, delegations, and accompanying staff, with fleet planning based on itinerary, passenger requirements, travel duration, and vehicle category.",
    topPlaces: [
        {
            title: "Chakan",
            description: "Minister and official fleet transportation to Chakan can support industrial visits, government programmes, administrative meetings, and scheduled official movements with suitable vehicles planned around the day's itinerary."
        },
        {
            title: "Talegaon",
            description: "Fleet cab arrangements for Talegaon are suitable for official visits, institutional programmes, industrial area travel, and government delegations requiring coordinated vehicle movement."
        },
        {
            title: "Gahunje",
            description: "Official transportation to Gahunje can be organized for public events, meetings, programmes, and visiting dignitaries, with vehicle arrangements planned according to passenger and schedule requirements."
        },
        {
            title: "Lavasa",
            description: "Ministerial and VIP travel to Lavasa can be coordinated for official meetings, conferences, events, and scheduled visits where comfortable chauffeur-driven transportation is required."
        },
        {
            title: "Alandi",
            description: "Fleet transportation to Alandi can support official programmes, public gatherings, administrative visits, and guest movement with suitable cars arranged according to the planned itinerary."
        },
        {
            title: "Bhimashankar",
            description: "Official journeys towards Bhimashankar can be arranged for government visits, inspections, programmes, and special assignments, with spacious vehicles available for longer routes and accompanying personnel."
        },
        {
            title: "Panchgani",
            description: "Minister and government VIP transportation to Panchgani can accommodate official meetings, events, inspections, and guest travel while allowing vehicle selection according to passenger count and journey requirements."
        },
        {
            title: "Karad",
            description: "Pune to Karad fleet transportation is useful for official programmes, administrative visits, public events, and regional government assignments requiring planned intercity vehicle support."
        },
        {
            title: "Sangli",
            description: "Government and ministerial travel to Sangli can be coordinated for official engagements, meetings, public programmes, and regional visits with comfortable vehicles and professional chauffeur support."
        },
        {
            title: "Belgaum",
            description: "Long-distance official travel from Pune to Belgaum can be arranged for government delegations, meetings, events, and ministerial assignments requiring dependable chauffeur-driven transportation."
        }
    ],
    services: [
        {
            name: "Minister fleet cab service in Pune",
            description: "Minister fleet cab service in Pune provides coordinated transportation for official visits, government programmes, public events, airport movements, meetings, and scheduled duty assignments. Multiple vehicle categories can be arranged according to the itinerary, passenger requirements, and duration of service."
        },
        {
            name: "Minister car rental Pune",
            description: "Minister car rental in Pune offers suitable chauffeur-driven vehicles for official duties, government meetings, public programmes, inspections, and intercity assignments. Vehicle selection can be planned according to the official schedule and required level of comfort."
        },
        {
            name: "Minister vehicle rental Pune",
            description: "Minister vehicle rental in Pune supports planned official transportation with sedans, SUVs, and spacious passenger vehicles. Arrangements can be structured for single-day programmes, extended visits, airport transfers, and multi-location itineraries."
        },
        {
            name: "Minister convoy car service Pune",
            description: "Minister convoy car service in Pune can coordinate multiple vehicles for official movements, delegations, accompanying staff, and scheduled programmes. Fleet composition can be planned around passenger numbers, itinerary requirements, and the different transportation roles required during an official visit."
        },
        {
            name: "Minister fleet management Pune",
            description: "Minister fleet management in Pune focuses on coordinating multiple vehicles around a planned official itinerary. Vehicle allocation, reporting times, driver coordination, route schedules, standby requirements, and changes to the programme can be managed according to the agreed transportation plan."
        },
        {
            name: "Government minister car service Pune",
            description: "Government minister car service in Pune provides chauffeur-driven transportation for official meetings, administrative programmes, government events, airport transfers, and regional visits. Appropriate vehicle categories can be arranged based on the nature and duration of the official assignment."
        },
        {
            name: "Minister transportation service Pune",
            description: "Minister transportation service in Pune supports official travel across meetings, public programmes, inspections, conferences, airport transfers, and outstation visits. A planned fleet approach helps coordinate vehicles for principals, guests, staff, and other authorized members of the delegation."
        },
        {
            name: "Minister official vehicle booking Pune",
            description: "Minister official vehicle booking in Pune allows transportation to be arranged in advance around the minister's itinerary, reporting location, programme timings, and destination requirements. Vehicle categories can be selected according to passenger count and the nature of the official journey."
        },
        {
            name: "Minister VIP cab service Pune",
            description: "Minister VIP cab service in Pune provides professionally coordinated transportation for official guests, senior representatives, visiting dignitaries, and government delegations. Chauffeur-driven cars and SUVs can be selected according to comfort, passenger capacity, and itinerary requirements."
        },
        {
            name: "Minister luxury car rental Pune",
            description: "Minister luxury car rental in Pune is suitable for important official guests, senior representatives, ceremonial programmes, and executive-level government travel. Premium sedans and SUVs can be arranged when a more refined and comfortable vehicle is required."
        },
        {
            name: "Minister security fleet transportation Pune",
            description: "Minister security fleet transportation in Pune focuses on coordinating the transportation vehicles required around an official itinerary. Vehicle deployment can be discussed according to the authorized programme, accompanying personnel, reporting points, and operational transportation requirements."
        },
        {
            name: "Minister escort vehicle rental Pune",
            description: "Minister escort vehicle rental in Pune provides additional vehicles for official fleet movements and accompanying personnel when required as part of a planned itinerary. Fleet size and vehicle categories can be organized according to the approved transportation requirement."
        },
        {
            name: "Minister Innova rental Pune",
            description: "Minister Innova rental in Pune offers a spacious and practical vehicle option for official travel, delegation movement, airport transfers, and longer journeys. Its passenger and luggage capacity makes it useful when additional cabin space is required."
        },
        {
            name: "Minister Fortuner rental Pune",
            description: "Minister Fortuner rental in Pune provides an SUV option for official travel, intercity assignments, inspections, and VIP movement where a higher-capacity vehicle is preferred. Chauffeur-driven arrangements can be planned around the official schedule."
        },
        {
            name: "Minister SUV fleet Pune",
            description: "Minister SUV fleet service in Pune helps organize multiple SUV vehicles for official programmes, delegation movement, outstation travel, and multi-location schedules. Fleet composition can be adjusted according to passenger numbers and itinerary requirements."
        },
        {
            name: "Minister sedan rental Pune",
            description: "Minister sedan rental in Pune provides comfortable vehicles for official meetings, airport transfers, administrative visits, and executive travel. Sedans can be allocated according to the number of passengers and the specific requirements of the official programme."
        },
        {
            name: "Government VIP fleet service Pune",
            description: "Government VIP fleet service in Pune supports organized transportation for official guests, senior representatives, government delegations, and scheduled programmes. Multiple vehicle categories can be coordinated to accommodate principals, guests, staff, and accompanying personnel."
        },
        {
            name: "Minister airport pickup Pune",
            description: "Minister airport pickup in Pune can be scheduled around flight arrival details and the onward official itinerary. Suitable chauffeur-driven vehicles can be arranged for the minister, accompanying guests, staff, and luggage requirements."
        },
        {
            name: "Minister airport drop Pune",
            description: "Minister airport drop in Pune provides planned transportation from a residence, government office, hotel, venue, or official location to Pune Airport. Pickup timing can be coordinated around the scheduled departure and the distance to the terminal."
        },
        {
            name: "Minister official duty car Pune",
            description: "Minister official duty car service in Pune is suitable for government meetings, inspections, public programmes, administrative duties, and scheduled official travel. Daily or assignment-based arrangements can be planned according to the itinerary and vehicle requirements."
        },
        {
            name: "Minister guest transportation Pune",
            description: "Minister guest transportation in Pune helps arrange comfortable travel for visiting officials, government representatives, delegates, and other authorized guests attending official programmes. Vehicle selection can be based on group size, destination, and schedule."
        },
        {
            name: "Political VIP car rental Pune",
            description: "Political VIP car rental in Pune provides chauffeur-driven transportation for authorized political representatives, guests, meetings, events, and scheduled programmes. Suitable sedans and SUVs can be arranged according to the travel itinerary and passenger requirements."
        },
        {
            name: "Government fleet vehicle hiring Pune",
            description: "Government fleet vehicle hiring in Pune provides organizations with access to suitable vehicles for official programmes, departmental assignments, field visits, meetings, and recurring transportation requirements. Vehicle deployment can be structured around duration, category, and approved usage."
        },
        {
            name: "Minister chauffeur service Pune",
            description: "Minister chauffeur service in Pune provides professionally driven vehicles for official duties, airport transfers, meetings, events, and intercity travel. Driver coordination can be arranged around reporting times, scheduled destinations, and changes in the official itinerary."
        },
        {
            name: "Professional minister fleet service Pune",
            description: "Professional minister fleet service in Pune combines vehicle coordination, chauffeur support, scheduling, and fleet planning for official programmes. The transportation arrangement can be customized for single-day visits, multi-location schedules, delegations, and extended assignments."
        }
    ],
    tableData: [
        ["Minister fleet cab service in Pune"],
        ["Minister car rental Pune"],
        ["Minister vehicle rental Pune"],
        ["Minister convoy car service Pune"],
        ["Minister fleet management Pune"],
        ["Government minister car service Pune"],
        ["Minister transportation service Pune"],
        ["Minister official vehicle booking Pune"],
        ["Minister VIP cab service Pune"],
        ["Minister luxury car rental Pune"],
        ["Minister security fleet transportation Pune"],
        ["Minister escort vehicle rental Pune"],
        ["Minister Innova rental Pune"],
        ["Minister Fortuner rental Pune"],
        ["Minister SUV fleet Pune"],
        ["Minister sedan rental Pune"],
        ["Government VIP fleet service Pune"],
        ["Minister airport pickup Pune"],
        ["Minister airport drop Pune"],
        ["Minister official duty car Pune"],
        ["Minister guest transportation Pune"],
        ["Political VIP car rental Pune"],
        ["Government fleet vehicle hiring Pune"],
        ["Minister chauffeur service Pune"],
        ["Professional minister fleet service Pune"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Coordinated Official Fleet",
            WhyChoosedescription: "Virendra Cab can coordinate multiple vehicles around a planned ministerial or government itinerary, helping arrange transportation for principals, official guests, accompanying staff, and other authorized members of a delegation."
        },
        {
            WhyChooseheading: "Professional Chauffeur Support",
            WhyChoosedescription: "Professional chauffeur-driven transportation allows officials to focus on meetings, programmes, and other responsibilities while the assigned driver handles the journey. Reporting times and destination changes can be communicated as part of the travel plan."
        },
        {
            WhyChooseheading: "Multiple Vehicle Categories",
            WhyChoosedescription: "Sedans, SUVs, Innova vehicles, and other suitable categories can be considered according to passenger requirements and the nature of the assignment. This makes it possible to build a fleet around both individual and group transportation needs."
        },
        {
            WhyChooseheading: "Itinerary-Based Planning",
            WhyChoosedescription: "Official schedules can involve multiple venues, meetings, airport movements, and regional visits in a single day. Vehicle deployment can therefore be planned around reporting points, programme timings, travel distances, and expected duration."
        },
        {
            WhyChooseheading: "Airport & Official Transfers",
            WhyChoosedescription: "Airport pickup and drop services can be integrated into a wider official transportation plan. Flight schedules, onward destinations, luggage requirements, and accompanying passengers can be considered while arranging the appropriate vehicle."
        },
        {
            WhyChooseheading: "Fleet Support for Delegations",
            WhyChoosedescription: "Government and ministerial programmes may involve guests, representatives, staff, and multiple passengers travelling between different locations. A coordinated fleet arrangement helps assign suitable vehicles according to the size and structure of the delegation."
        },
        {
            WhyChooseheading: "Local & Intercity Travel",
            WhyChoosedescription: "Official responsibilities can require travel beyond Pune for meetings, inspections, public programmes, and regional assignments. Virendra Cab can arrange suitable chauffeur-driven vehicles for both Pune-based schedules and planned outstation journeys."
        },
        {
            WhyChooseheading: "Flexible Duty Arrangements",
            WhyChoosedescription: "Transportation requirements can vary from a short official programme to a full-day or multi-day itinerary. Vehicle arrangements can be discussed according to duty duration, number of vehicles, passenger requirements, and the overall schedule."
        }
    ]
};


const faqData = [
    {
        question: "What is a Minister Fleet Cab Service in Pune?",
        answer: "Minister Fleet Cab Service in Pune is intended for organized transportation requirements involving ministers, government representatives, officials, support teams, and other authorized personnel. Virendra Cab can be considered for scheduled movements, meetings, airport transfers, official programs, and intercity travel."
    },
    {
        question: "How can I arrange a Minister Fleet Cab Service in Pune?",
        answer: "To plan a minister fleet cab arrangement, share the travel date, pickup locations, destinations, number of vehicles, passenger requirements, expected timings, and itinerary with Virendra Cab. Advance information helps in coordinating transportation for a multi-location official schedule."
    },
    {
        question: "Can Minister Fleet Cab Service in Pune handle multiple vehicles?",
        answer: "Fleet requirements can involve multiple cars when an official program requires transportation for several personnel or separate movement schedules. The number and category of vehicles can be discussed according to the itinerary, passenger count, and operational requirements."
    },
    {
        question: "Can minister fleet cars be used for official meetings in Pune?",
        answer: "Yes, fleet vehicles can be arranged for official meetings, government programs, conferences, inspections, administrative visits, and other scheduled activities. Vehicles can be coordinated around offices, hotels, event venues, and other locations included in the official itinerary."
    },
    {
        question: "Is driver-assisted service available for minister fleet transportation in Pune?",
        answer: "Driver-assisted transportation can be arranged for official fleet requirements. Having drivers assigned to the vehicles can help coordinate planned movements between multiple destinations during meetings, events, inspections, and other official programs."
    },
    {
        question: "Can Minister Fleet Cab Service be arranged for Pune Airport transfers?",
        answer: "Fleet vehicles can be planned for airport pickup and drop requirements involving Pune Airport. Such arrangements can be useful when several officials, staff members, or accompanying personnel need coordinated transportation according to arrival and departure schedules."
    },
    {
        question: "Can a minister fleet cab be hired for outstation travel from Pune?",
        answer: "Outstation fleet transportation can be discussed for official journeys from Pune to Mumbai, Nashik, Kolhapur, Satara, Aurangabad, or other destinations. The vehicle schedule can be structured around the official itinerary and expected duration."
    },
    {
        question: "What types of vehicles can be included in a minister fleet service in Pune?",
        answer: "Vehicle selection depends on the passenger requirement, luggage, official itinerary, and desired level of comfort. Cars and SUVs can be considered for different members of an official group, while the final vehicle arrangement should be planned according to the specific requirement."
    },
    {
        question: "Can Minister Fleet Cab Service in Pune cover a full-day official program?",
        answer: "A fleet arrangement can be planned for full-day official programs involving several meetings, site visits, conferences, inspections, or public events. Multiple vehicles and coordinated schedules can be discussed when different members need transportation at different times."
    },
    {
        question: "How early should I book Minister Fleet Cab Service in Pune?",
        answer: "Advance planning is strongly recommended for official programs because fleet requirements may involve multiple vehicles, drivers, pickup points, and fixed schedules. Sharing the complete itinerary early gives Virendra Cab more information to organize the required transportation arrangement."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Ajay Deshpande",
        feedback: "Our official program required several vehicles to move the team between meetings and scheduled venues in Pune. The fleet arrangement helped us coordinate the different movements more efficiently throughout the day.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Sneha Kulkarni",
        feedback: "We needed coordinated transportation for an official visit involving airport pickup and multiple locations. The vehicle arrangement was organized around our itinerary and made the overall travel schedule easier to manage.",
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
  "name": "Minister Fleet Cab Service in Pune",
  "image": "https://virendracabs.com/assets/images/minister-fleet-cab-service-in-pune.webp",
  "description": "Minister Fleet Cab Service in Pune is a coordinated vehicle rental solution for official visits, public events, government programs, conferences, meetings and other authorized transportation requirements involving senior officials and accompanying teams. Virendra Cab provides chauffeur-driven vehicle arrangements that can be planned according to the size of the delegation, travel schedule, vehicle category and route. Minister car rental Pune can be arranged for local official movement, airport transfers, hotel transfers, meeting venues, event locations and outstation assignments. Minister vehicle rental Pune is suitable when multiple vehicles are required for an organized itinerary involving officials, staff, security personnel, support teams or accompanying guests. Minister convoy car service Pune can be coordinated as a multi-vehicle transportation arrangement based on the approved travel plan and operational requirements. Minister fleet cab service Pune can include different vehicle categories for principal guests, accompanying officials and support staff, helping the overall transportation plan remain organized. Fleet vehicle arrangements can be scheduled for airport pickup and drop, government events, public programs, corporate-government meetings, official inspections, conferences and intercity travel. Dedicated chauffeur-driven vehicles may also be arranged for full-day or multi-day official requirements. Customers can share the event schedule, number of passengers, required vehicles, pickup points, destinations, travel dates and expected deployment duration to discuss a suitable fleet transportation arrangement. Vehicle availability and final commercial terms depend on the requested vehicle categories, number of vehicles, distance, duration, route, waiting requirements, tolls, parking and the overall itinerary. Virendra Cab can coordinate structured fleet transportation across Pune and nearby destinations for authorized official and institutional travel requirements.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "36428"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://virendracabs.com/minister-fleet-cab-service-in-pune"
  }
};






    return (
        <div>
<Helmet>
  <title>
    Minister Fleet Cab Service in Pune | Minister Car Rental Pune | +91 9022549022
  </title>

  <meta
    name="description"
    content="Minister Fleet Cab Service in Pune for authorized official visits, government programs, conferences, airport transfers, multi-vehicle requirements and coordinated fleet travel."
  />

  <meta
    name="keywords"
    content="Minister fleet cab service in Pune, Minister car rental Pune, Minister vehicle rental Pune, Minister convoy car service Pune, Minister fleet transportation Pune, Minister fleet rental Pune, Minister car hire Pune, Minister vehicle hire Pune, Minister cab service Pune, Minister taxi service Pune, Minister official car service Pune, Minister official vehicle rental Pune, Minister official cab service Pune, Minister convoy rental Pune, Minister convoy vehicle service Pune, Minister convoy cab service Pune, Minister fleet vehicle hire Pune, Minister fleet car hire Pune, Minister fleet taxi service Pune, Minister fleet transportation service Pune, Minister delegation transport Pune, Minister official travel Pune, Minister event transportation Pune, Minister government event cab Pune, Minister government program transport Pune, Minister conference transportation Pune, Minister airport transfer Pune, Minister airport pickup Pune, Minister airport drop Pune, Minister hotel transfer Pune, Minister meeting transportation Pune, Minister official visit car Pune, Minister official tour vehicle Pune, Minister inspection vehicle Pune, Minister roadshow vehicle service Pune, Minister multi car rental Pune, Minister multiple vehicle rental Pune, Minister fleet booking Pune, Minister convoy booking Pune, Minister car booking Pune, Minister vehicle booking Pune, Minister cab booking Pune, Minister chauffeur service Pune, Minister chauffeur driven car Pune, Minister dedicated car rental Pune, Minister full day car rental Pune, Minister outstation car rental Pune, Minister fleet hire service Pune, Minister convoy transportation Pune, Official fleet cab service Pune, Official convoy car service Pune, Government fleet car rental Pune, Government convoy vehicle service Pune"
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
                            <img src='/images/keyword/136.jpeg' alt='img' className='img-fluid' />
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

export default Ministeerfleetscabservice ;