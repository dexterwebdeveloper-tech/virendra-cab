import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Punetoshrivardhancab() {




const cardData = {
    keyword: "Pune to Shrivardhan Cab",
    headingDescription: "Pune to Shrivardhan Cab from Virendra Cab is a convenient private travel option for families, couples, and groups planning a coastal trip to Shrivardhan and nearby Konkan destinations. Travellers can choose suitable vehicle options such as an Innova Crysta or Ertiga according to passenger count, luggage, and journey requirements. The service can also be planned for Shrivardhan Beach, Harihareshwar, Ganpatipule, Sawantwadi, Ratnagiri, and broader Konkan sightseeing routes. Whether the requirement is a simple cab booking, a beach tour package, a multi-destination Konkan darshan journey, or a comfortable outstation trip, Virendra Cab helps travellers organize their route with flexible pickup, travel, and return arrangements from Pune.",

    topPlaces: [
        {
            title: "Shrivardhan Beach",
            description: "Shrivardhan Beach is a key destination for travellers planning a coastal getaway from Pune, with private cab travel providing convenient transportation for families and groups."
        },
        {
            title: "Harihareshwar",
            description: "Harihareshwar can be combined with a Shrivardhan journey for a coastal and pilgrimage-focused trip, making it suitable for a private multi-destination cab itinerary."
        },
        {
            title: "Diveagar Beach",
            description: "Diveagar Beach is a popular Konkan stop that can be included in a Shrivardhan-area sightseeing plan for travellers looking to explore multiple coastal locations."
        },
        {
            title: "Harihareshwar Temple",
            description: "The Harihareshwar Temple can be included in a private Konkan travel itinerary, particularly for families combining beach visits with religious sightseeing."
        },
        {
            title: "Ganpatipule",
            description: "Ganpatipule is suitable for travellers extending their coastal journey beyond Shrivardhan, with an Innova or Ertiga providing practical transportation for families and groups."
        },
        {
            title: "Ratnagiri",
            description: "Ratnagiri can be covered as part of a longer Konkan route from Pune, offering travellers the flexibility to combine coastal sightseeing with intercity travel."
        },
        {
            title: "Sawantwadi",
            description: "Sawantwadi can be included in an extended Konkan road journey for travellers planning a longer coastal itinerary from Pune with private cab transportation."
        },
        {
            title: "Konkan Coast",
            description: "A private cab makes it convenient to explore multiple destinations along the Konkan coast, with the itinerary adaptable to the travel duration and preferred sightseeing stops."
        },
        {
            title: "Shrivardhan Town",
            description: "Shrivardhan town provides convenient access to nearby beaches, temples, and coastal attractions, making it a practical base for a private sightseeing journey."
        },
        {
            title: "Pune",
            description: "Pune serves as the starting point for Shrivardhan and Konkan road trips, with pickup arrangements suitable for families, groups, and travellers carrying luggage."
        }
    ],

    services: [
        {
            name: "Pune to Shrivardhan Cab Booking",
            description: "Pune to Shrivardhan cab booking allows travellers to arrange private transportation in advance for family trips, beach holidays, weekend travel, and planned Konkan journeys."
        },
        {
            name: "Pune to Shrivardhan Innova Crysta",
            description: "Pune to Shrivardhan Innova Crysta service is suitable for families and groups seeking spacious seating and useful luggage capacity during the longer coastal road journey."
        },
        {
            name: "Pune to Shrivardhan Ertiga Car Booking",
            description: "Pune to Shrivardhan Ertiga car booking provides a practical 7-seater option for families and small groups travelling together to the Konkan coast."
        },
        {
            name: "Pune to Shrivardhan Beach Cab",
            description: "Pune to Shrivardhan Beach cab service offers private transportation for travellers planning a coastal getaway, with suitable options for families, couples, and small groups."
        },
        {
            name: "Pune to Shrivardhan Beach Cab Fare",
            description: "Travellers checking Pune to Shrivardhan Beach cab fare can consider the selected vehicle, route distance, travel duration, and one-way or return requirements when planning their journey."
        },
        {
            name: "Pune to Shrivardhan Beach Innova Crysta",
            description: "An Innova Crysta for Pune to Shrivardhan Beach travel is suitable for larger families and groups who prefer additional space for passengers and luggage during the coastal trip."
        },
        {
            name: "Pune to Shrivardhan Beach Innova Cabs",
            description: "Pune to Shrivardhan Beach Innova cabs provide a comfortable private travel option for families and groups planning a beach holiday or extended Konkan itinerary."
        },
        {
            name: "Pune to Shrivardhan Beach Ertiga Cabs",
            description: "Ertiga cabs from Pune to Shrivardhan Beach are suitable for small groups and families looking for convenient 7-seater transportation for their coastal journey."
        },
        {
            name: "Pune to Shrivardhan Beach Package",
            description: "A Pune to Shrivardhan Beach package can be planned around the preferred travel duration, sightseeing requirements, vehicle type, and return schedule for a convenient coastal getaway."
        },
        {
            name: "Pune to Shrivardhan Beach Tour Package",
            description: "Pune to Shrivardhan Beach tour packages can include private cab transportation with flexible sightseeing arrangements for travellers planning a relaxed family or group holiday."
        },
        {
            name: "Pune to Harihareshwar Cab",
            description: "Pune to Harihareshwar cab service is useful for travellers visiting the coastal temple town, with private transportation suitable for family trips and religious sightseeing."
        },
        {
            name: "Pune to Harihareshwar Cab Booking",
            description: "Advance Pune to Harihareshwar cab booking helps travellers organize a private vehicle for their planned coastal journey and coordinate the trip with nearby Shrivardhan destinations."
        },
        {
            name: "Pune to Harihareshwar Innova Crysta",
            description: "Pune to Harihareshwar Innova Crysta travel is suitable for families and groups requiring comfortable seating and additional luggage space for a longer outstation journey."
        },
        {
            name: "Pune to Ganpatipule Cabs",
            description: "Pune to Ganpatipule cabs provide private transportation for travellers planning a coastal holiday, pilgrimage visit, or extended Konkan road trip."
        },
        {
            name: "Pune to Konkan Innova Cab",
            description: "A Pune to Konkan Innova cab is a practical option for families and groups exploring multiple coastal destinations, particularly when luggage and passenger comfort are important."
        },
        {
            name: "Pune to Mahabaleshwar Innova Rate",
            description: "Travellers comparing the Pune to Mahabaleshwar Innova rate can consider vehicle type, travel distance, duration, and itinerary requirements when planning their private cab journey."
        },
        {
            name: "Pune to Konkan Darshan Cab",
            description: "Pune to Konkan darshan cab service can be planned for travellers wishing to visit multiple coastal, religious, and sightseeing destinations through a flexible private itinerary."
        },
        {
            name: "Pune to Sawantwadi Cab",
            description: "Pune to Sawantwadi cab service is suitable for travellers planning a longer Konkan journey, family visit, or multi-destination coastal road trip."
        },
        {
            name: "Pune to Ratnagiri Cab Price",
            description: "Customers checking the Pune to Ratnagiri cab price can compare their travel requirements based on route distance, vehicle selection, journey duration, and whether the trip is one-way or return."
        }
    ],

    tableData: [
        ["Pune to Shrivardhan Cab Booking"],
        ["Pune to Shrivardhan Innova Crysta"],
        ["Pune to Shrivardhan Ertiga Car Booking"],
        ["Pune to Shrivardhan Beach Cab"],
        ["Pune to Shrivardhan Beach Cab Fare"],
        ["Pune to Shrivardhan Beach Innova Crysta"],
        ["Pune to Shrivardhan Beach Innova Cabs"],
        ["Pune to Shrivardhan Beach Ertiga Cabs"],
        ["Pune to Shrivardhan Beach Package"],
        ["Pune to Shrivardhan Beach Tour Package"],
        ["Pune to Harihareshwar Cab"],
        ["Pune to Harihareshwar Cab Booking"],
        ["Pune to Harihareshwar Innova Crysta"],
        ["Pune to Ganpatipule Cabs"],
        ["Pune to Konkan Innova Cab"],
        ["Pune to Mahabaleshwar Innova Rate"],
        ["Pune to Konkan Darshan Cab"],
        ["Pune to Sawantwadi Cab"],
        ["Pune to Ratnagiri Cab Price"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Dedicated Shrivardhan Travel",
            WhyChoosedescription: "Virendra Cab provides private travel planning for Pune to Shrivardhan journeys, making it easier for families and groups to organize a comfortable coastal road trip."
        },
        {
            WhyChooseheading: "Beach And Coastal Sightseeing",
            WhyChoosedescription: "Travellers can plan visits to Shrivardhan Beach and nearby Konkan destinations according to their preferred sightseeing schedule and available travel time."
        },
        {
            WhyChooseheading: "Multiple Vehicle Choices",
            WhyChoosedescription: "Innova Crysta and Ertiga options provide flexibility for different group sizes, luggage requirements, and comfort preferences during longer Konkan journeys."
        },
        {
            WhyChooseheading: "Flexible Multi-Destination Routes",
            WhyChoosedescription: "The itinerary can be extended to destinations such as Harihareshwar, Ganpatipule, Ratnagiri, and Sawantwadi when travellers want to explore more of the Konkan region."
        },
        {
            WhyChooseheading: "Suitable For Family Holidays",
            WhyChoosedescription: "Private cab travel allows families to remain together throughout the journey, making it convenient for beach holidays, religious visits, weekend trips, and sightseeing."
        },
        {
            WhyChooseheading: "Comfortable Long-Distance Travel",
            WhyChoosedescription: "A spacious private vehicle provides practical seating and luggage capacity for the extended road journey between Pune and coastal destinations."
        },
        {
            WhyChooseheading: "Tour Package Flexibility",
            WhyChoosedescription: "Travellers can plan one-way travel, return journeys, beach packages, or broader Konkan darshan itineraries based on their preferred duration and destinations."
        },
        {
            WhyChooseheading: "Advance Booking Convenience",
            WhyChoosedescription: "Advance cab booking helps organize the preferred vehicle and travel schedule before weekend trips, holidays, family vacations, and planned Konkan sightseeing journeys."
        }
    ]
};


const faqData = [
    {
        question: "Can I book a Pune to Shrivardhan cab with Virendra Cab?",
        answer: "Virendra Cab can arrange private cab travel from Pune to Shrivardhan according to your travel date, pickup location, passenger count, luggage, and preferred vehicle category. The journey can be planned for family trips, weekend holidays, or personal travel."
    },
    {
        question: "Is a one-way cab available from Pune to Shrivardhan?",
        answer: "Travellers who only require transportation from Pune to Shrivardhan can enquire about a one-way cab. The pickup point, destination, departure time, passenger count, and vehicle requirements can be discussed before confirming the trip."
    },
    {
        question: "Can I book a round-trip cab from Pune to Shrivardhan?",
        answer: "A round-trip cab can be considered for travellers planning to explore Shrivardhan and return to Pune. The stay duration, return date, sightseeing requirements, and preferred travel schedule can be discussed while arranging the journey."
    },
    {
        question: "Can I visit Shrivardhan Beach by cab from Pune?",
        answer: "A private cab can be used for a coastal trip to Shrivardhan Beach and nearby attractions. Travellers can discuss a sightseeing itinerary covering beaches, temples, viewpoints, and other suitable places according to their available time."
    },
    {
        question: "What type of cab is suitable for a Pune to Shrivardhan trip?",
        answer: "The suitable vehicle depends on the number of passengers, luggage, journey duration, and comfort preferences. Virendra Cab can discuss appropriate cab options after understanding the complete requirements of your Shrivardhan journey."
    },
    {
        question: "Can families travel from Pune to Shrivardhan by private cab?",
        answer: "Families can enquire about private cab transportation by sharing their group size, luggage requirements, Pune pickup location, travel date, and preferred departure time. Vehicle selection can then be considered according to the family's needs."
    },
    {
        question: "Can I get pickup from different Pune areas for Shrivardhan travel?",
        answer: "Pickup arrangements can be discussed from Pune areas such as Baner, Wakad, Hinjewadi, Kothrud, Hadapsar, Viman Nagar, Pimpri-Chinchwad, and other suitable residential or commercial locations."
    },
    {
        question: "Is Pune to Shrivardhan cab suitable for a weekend getaway?",
        answer: "Shrivardhan can be planned as a coastal getaway from Pune for travellers interested in beaches, temples, and relaxed sightseeing. A private cab allows the group to plan the journey around its preferred departure and return schedule."
    },
    {
        question: "Can I include Harihareshwar or Diveagar in a Shrivardhan cab trip?",
        answer: "Travellers can discuss combining Shrivardhan with nearby coastal destinations such as Harihareshwar and Diveagar when the available travel time allows it. The preferred route and sightseeing stops can be considered while planning the itinerary."
    },
    {
        question: "What details are required to book a Pune to Shrivardhan cab?",
        answer: "Passengers can provide their Pune pickup address, Shrivardhan destination, travel date, preferred departure time, number of travellers, luggage details, one-way or round-trip requirement, sightseeing plans, and preferred vehicle type."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Omkar Deshmukh",
        feedback: "Our family planned a coastal trip from Pune to Shrivardhan and wanted private transportation for the journey. Virendra Cab coordinated the pickup, passenger details, and sightseeing requirements according to our weekend plan.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Priya Sawant",
        feedback: "A group of friends wanted to explore Shrivardhan and nearby beaches without depending on multiple transport options. The cab arrangement through Virendra Cab made it easier to plan our route and travel schedule from Pune.",
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
  "name": "Pune to Shrivardhan Cab",
  "image": "https://www.virendracabs.com/assets/images/pune-to-shrivardhan-cab.webp",
  "description": "Pune to Shrivardhan Cab is a convenient travel option for families, couples, groups and travelers planning a coastal getaway from Pune to Shrivardhan. Virendra Cab provides private cab booking options for customers searching for Pune to Shrivardhan Cab Booking, Pune to Shrivardhan Innova Crysta and Pune to Shrivardhan Ertiga Car Booking. The service is suitable for beach trips, weekend holidays, family vacations, sightseeing and comfortable outstation travel. Passengers looking for a Pune to Shrivardhan Beach Cab can arrange a dedicated vehicle with pickup timing and travel requirements planned according to their itinerary. Innova Crysta rental is suitable for larger families and groups looking for additional seating comfort and luggage space, while Ertiga car booking can be considered for smaller groups and family journeys. Travelers can also plan one-way or round-trip transportation depending on their stay duration and return schedule. The route can be arranged for direct travel to Shrivardhan and can also be customized for nearby coastal destinations when required. Current cab fare depends on the selected vehicle, trip type, travel date, distance and additional travel requirements, so passengers can contact Virendra Cab for the latest fare details. Advance booking makes it easier to confirm pickup arrangements, vehicle preference and return requirements before the journey. Whether the purpose is a Shrivardhan beach visit, weekend trip, family vacation or coastal sightseeing plan, Virendra Cab offers a practical private cab option from Pune to Shrivardhan.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.virendracabs.com/pune-to-shrivardhan-cab"
  }
};



    return (
        <div>

<Helmet>
  <title>
    Pune to Shrivardhan Cab | Pune to Shrivardhan Cab Booking | +91 9022549022
  </title>

  <meta
    name="description"
    content="Book Pune to Shrivardhan Cab for beach trips, family holidays and coastal sightseeing. Choose Innova Crysta or Ertiga car booking options with Virendra Cab."
  />

  <meta
    name="keywords"
    content="Pune to Shrivardhan Cab, Pune to Shrivardhan Cab Booking, Pune to Shrivardhan Innova Crysta, Pune to Shrivardhan Ertiga Car Booking, Pune to Shrivardhan Beach Cab, Pune to Shrivardhan Taxi, Pune to Shrivardhan Taxi Service, Pune to Shrivardhan Cab Service, Pune to Shrivardhan Cab Fare, Pune to Shrivardhan Taxi Fare, Pune to Shrivardhan One Way Cab, Pune to Shrivardhan Round Trip Cab, Pune to Shrivardhan Outstation Cab, Cab from Pune to Shrivardhan, Taxi from Pune to Shrivardhan, Pune Shrivardhan Car Rental, Pune Shrivardhan Taxi Booking, Shrivardhan Cab from Pune, Shrivardhan Beach Taxi Pune, Pune to Shrivardhan Private Cab, Pune to Shrivardhan Travel Cab, Pune to Shrivardhan Innova Rental, Pune to Shrivardhan Ertiga Rental, Pune to Shrivardhan Family Cab, Pune to Shrivardhan Beach Taxi, Pune to Shrivardhan Tour Cab"
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
                            <img src='/images/keyword/28.jpg' alt='img' className='img-fluid' />
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

export default Punetoshrivardhancab ;