import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Weddingcarrentaloune() {



const cardData = {
    keyword: "Wedding Car Rental Pune",
    headingDescription: "Virendra Cab provides wedding car rental in Pune for couples, families, wedding planners, and guests who need comfortable and well-organized transportation for marriage events. Customers can arrange chauffeur-driven cars for bridal entry, groom entry, wedding ceremonies, receptions, guest transfers, hotel pickups, and venue transportation. From premium sedans and SUVs to luxury wedding car options, Virendra Cab helps customers select suitable vehicles according to their event schedule, group requirements, style preferences, and planned wedding transportation needs.",
    topPlaces: [
        {
            title: "Pune Wedding Venues",
            description: "Convenient wedding car arrangements for ceremonies and receptions across Pune, with suitable vehicles for couples, family members, and wedding guests."
        },
        {
            title: "Koregaon Park",
            description: "Premium chauffeur-driven wedding transportation for couples and guests attending marriage events, receptions, and celebrations around Koregaon Park."
        },
        {
            title: "Kalyani Nagar",
            description: "Wedding car rental options for bridal arrivals, groom transportation, family movements, and guest transfers around wedding venues in Kalyani Nagar."
        },
        {
            title: "Viman Nagar",
            description: "Useful for arranging wedding cars, hotel transfers, airport connections, and guest transportation for marriage functions taking place around Viman Nagar."
        },
        {
            title: "Baner",
            description: "Wedding transportation solutions for couples and guests attending ceremonies, receptions, and pre-wedding functions in Baner."
        },
        {
            title: "Hinjewadi",
            description: "Private and chauffeur-driven wedding transportation for families and guests travelling between residential areas, hotels, and wedding venues in and around Hinjewadi."
        },
        {
            title: "Pune Airport",
            description: "Wedding guest pickup and drop services for relatives and guests arriving in Pune by flight, with vehicle choices suitable for different luggage and group requirements."
        },
        {
            title: "Shivajinagar",
            description: "Convenient wedding transportation from Shivajinagar for guests travelling to marriage venues, hotels, receptions, and family functions across Pune."
        },
        {
            title: "Hadapsar",
            description: "Suitable wedding car arrangements for families and guests travelling between Hadapsar, hotels, residential locations, and wedding venues."
        },
        {
            title: "Kothrud",
            description: "Chauffeur-driven wedding cars for bridal and groom transportation, family travel, guest transfers, and wedding venue connections from Kothrud."
        }
    ],
    services: [
        {
            name: "Wedding Car Rental Pune",
            description: "Virendra Cab offers wedding car rental in Pune for bridal transportation, groom arrivals, family movements, wedding ceremonies, receptions, and guest transfers. Customers can select suitable cars according to their event schedule and transportation requirements."
        },
        {
            name: "Wedding Car Hire in Pune",
            description: "Wedding car hire in Pune provides couples and families with dedicated transportation for important marriage events. Cars can be arranged for venue transfers, ceremonial arrivals, hotel movements, and wedding-day travel."
        },
        {
            name: "Wedding Car Booking Pune",
            description: "Wedding car booking in Pune allows couples and families to reserve suitable vehicles ahead of their marriage functions. Customers can discuss the event date, venue, timing, vehicle preference, and required duration."
        },
        {
            name: "Bridal Car Rental Pune",
            description: "Bridal car rental in Pune is designed for comfortable and stylish transportation of the bride between her residence, hotel, ceremony venue, reception, and other planned wedding locations."
        },
        {
            name: "Groom Car Rental Pune",
            description: "Groom car rental in Pune provides dedicated transportation for the groom during wedding-day movements, including venue arrival, procession-related travel, hotel transfers, and other scheduled functions."
        },
        {
            name: "Luxury Wedding Car Rental Pune",
            description: "Luxury wedding car rental in Pune is suitable for couples looking for an elegant vehicle for their special day. Chauffeur-driven premium cars can be planned around the ceremony, reception, photography, and venue schedule."
        },
        {
            name: "Premium Wedding Cars Pune",
            description: "Premium wedding cars in Pune can add a sophisticated touch to bridal and groom transportation. Vehicle selection can be discussed according to the desired appearance, passenger requirements, event style, and planned usage."
        },
        {
            name: "Affordable Wedding Car Rental Pune",
            description: "Affordable wedding car rental in Pune provides practical transportation choices for couples and families working within a planned event budget. Customers can select vehicles according to the required duration and wedding itinerary."
        },
        {
            name: "Wedding Chauffeur Service Pune",
            description: "Wedding chauffeur service in Pune provides professional driver-assisted transportation for couples, family members, and guests. The service is useful when customers want to focus on their event instead of managing the vehicle themselves."
        },
        {
            name: "Wedding Car with Driver Pune",
            description: "Wedding car with driver in Pune is suitable for bridal arrivals, groom transportation, reception travel, and venue transfers. Chauffeur-driven arrangements provide convenient transportation throughout the planned wedding schedule."
        },
        {
            name: "Wedding Day Car Hire Pune",
            description: "Wedding day car hire in Pune helps couples organize transportation for the complete schedule of important functions. Vehicles can be planned around ceremony timings, venue changes, photography sessions, and reception movements."
        },
        {
            name: "Marriage Car Rental Pune",
            description: "Marriage car rental in Pune supports transportation requirements for wedding ceremonies, receptions, family functions, and guest movements. Customers can select suitable cars based on the event plan and number of travellers."
        },
        {
            name: "Bride Entry Car Rental Pune",
            description: "Bride entry car rental in Pune provides a dedicated vehicle for the bride's arrival at the wedding venue. Customers can choose an elegant car and coordinate the timing with the ceremony schedule."
        },
        {
            name: "Groom Entry Car Rental Pune",
            description: "Groom entry car rental in Pune offers a dedicated vehicle for the groom's arrival at the wedding venue. The booking can be coordinated around the procession, ceremony timing, and preferred vehicle style."
        },
        {
            name: "Vintage Wedding Car Rental Pune",
            description: "Vintage wedding car rental in Pune is suitable for couples seeking a classic appearance for their marriage transportation and photographs. Vehicle availability and event requirements can be discussed before booking."
        },
        {
            name: "BMW Wedding Car Rental Pune",
            description: "BMW wedding car rental in Pune is an option for couples looking for a premium vehicle for bridal or groom transportation. Availability, usage duration, chauffeur requirements, and venue schedule can be discussed during booking."
        },
        {
            name: "Mercedes Wedding Car Rental Pune",
            description: "Mercedes wedding car rental in Pune provides an elegant chauffeur-driven option for couples and special wedding transportation. The vehicle can be planned for ceremony arrival, reception travel, photography, or other event movements."
        },
        {
            name: "Audi Wedding Car Rental Pune",
            description: "Audi wedding car rental in Pune can be arranged for couples seeking a premium car for their wedding-day transportation. Customers can discuss the event timing, pickup location, venue, and required rental duration."
        },
        {
            name: "Jaguar Wedding Car Rental Pune",
            description: "Jaguar wedding car rental in Pune is suitable for customers seeking a distinctive premium vehicle for their special occasion. Booking requirements can include ceremony transportation, reception arrival, photography, and chauffeur service."
        },
        {
            name: "Luxury Sedan for Wedding Pune",
            description: "A luxury sedan for wedding events in Pune provides comfortable and stylish transportation for the bride, groom, or close family members. Vehicle use can be planned around the ceremony and reception schedule."
        },
        {
            name: "SUV Wedding Car Rental Pune",
            description: "SUV wedding car rental in Pune is useful when families or wedding parties require additional seating and luggage capacity. SUVs can support guest movement, family transportation, and longer venue transfers."
        },
        {
            name: "Wedding Guest Transportation Pune",
            description: "Wedding guest transportation in Pune helps families coordinate travel for relatives and invited guests between hotels, residences, ceremony venues, reception locations, and the airport."
        },
        {
            name: "Wedding Transportation Service Pune",
            description: "Wedding transportation service in Pune supports complete event mobility, including bridal and groom cars, family vehicles, guest transfers, airport pickups, hotel transportation, and venue-to-venue travel."
        },
        {
            name: "Wedding Car Rental Near Me Pune",
            description: "Customers searching for wedding car rental near them in Pune can share their event location and required vehicle type to arrange convenient transportation. The service can be planned around the wedding venue and schedule."
        },
        {
            name: "Wedding Car Rental Packages Pune",
            description: "Wedding car rental packages in Pune can be planned around the duration and transportation requirements of the event. Customers can discuss vehicle usage for ceremonies, receptions, guest transfers, and multiple wedding functions."
        },
        {
            name: "Wedding Car Booking with Driver Pune",
            description: "Wedding car booking with driver in Pune provides chauffeur-driven transportation for couples, families, and guests. The booking can be organized according to the wedding itinerary, vehicle requirement, pickup points, and event timings."
        }
    ],
    tableData: [
        ["Wedding Car Rental Pune"],
        ["Wedding Car Hire in Pune"],
        ["Wedding Car Booking Pune"],
        ["Bridal Car Rental Pune"],
        ["Groom Car Rental Pune"],
        ["Luxury Wedding Car Rental Pune"],
        ["Premium Wedding Cars Pune"],
        ["Affordable Wedding Car Rental Pune"],
        ["Wedding Chauffeur Service Pune"],
        ["Wedding Car with Driver Pune"],
        ["Wedding Day Car Hire Pune"],
        ["Marriage Car Rental Pune"],
        ["Bride Entry Car Rental Pune"],
        ["Groom Entry Car Rental Pune"],
        ["Vintage Wedding Car Rental Pune"],
        ["BMW Wedding Car Rental Pune"],
        ["Mercedes Wedding Car Rental Pune"],
        ["Audi Wedding Car Rental Pune"],
        ["Jaguar Wedding Car Rental Pune"],
        ["Luxury Sedan for Wedding Pune"],
        ["SUV Wedding Car Rental Pune"],
        ["Wedding Guest Transportation Pune"],
        ["Wedding Transportation Service Pune"],
        ["Wedding Car Rental Near Me Pune"],
        ["Wedding Car Rental Packages Pune"],
        ["Wedding Car Booking with Driver Pune"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Elegant Wedding Transportation",
            WhyChoosedescription: "Virendra Cab provides wedding transportation options designed around the special requirements of couples and families. Customers can select suitable cars for bridal arrivals, groom entries, ceremonies, receptions, and planned venue transfers."
        },
        {
            WhyChooseheading: "Chauffeur-Driven Convenience",
            WhyChoosedescription: "With chauffeur-driven wedding cars, couples and family members can focus on their celebrations instead of managing the vehicle. Driver-assisted transportation is suitable for venue arrivals, hotel transfers, and scheduled wedding functions."
        },
        {
            WhyChooseheading: "Multiple Wedding Car Choices",
            WhyChoosedescription: "Customers can enquire about sedan, SUV, luxury, premium, or other suitable wedding car categories according to their event style and transportation needs. Vehicle selection can be matched with passenger capacity and planned usage."
        },
        {
            WhyChooseheading: "Dedicated Bridal and Groom Cars",
            WhyChoosedescription: "Separate wedding car arrangements can be planned for the bride and groom when required. This allows families to coordinate ceremonial arrivals, entry timings, photography requirements, and transfers between different wedding locations."
        },
        {
            WhyChooseheading: "Guest Transportation Support",
            WhyChoosedescription: "Wedding guests often travel between hotels, residences, ceremony venues, reception halls, and airports. Virendra Cab can support planned guest transportation according to the number of travellers and event schedule."
        },
        {
            WhyChooseheading: "Advance Wedding Booking",
            WhyChoosedescription: "Booking wedding transportation in advance gives couples and families more time to discuss vehicle preferences, event timings, pickup locations, and required rental duration. This is especially useful for weddings with multiple functions."
        },
        {
            WhyChooseheading: "Flexible Event Usage",
            WhyChoosedescription: "Wedding cars can be planned for specific ceremonies or longer event schedules depending on the customer's requirements. Transportation may include bridal entry, groom entry, reception travel, photography locations, and hotel transfers."
        },
        {
            WhyChooseheading: "Convenient Pune-Wide Coverage",
            WhyChoosedescription: "Wedding transportation can be coordinated across different Pune areas, including Baner, Hinjewadi, Kothrud, Hadapsar, Kalyani Nagar, Koregaon Park, Viman Nagar, and other event locations based on the planned itinerary."
        }
    ]
};

const faqData = [
    {
        question: "How can I book a Wedding Car Rental in Pune with Virendra Cab?",
        answer: "For wedding car rental in Pune, you can share the event date, pickup location, venue, required vehicle type, rental duration, and number of trips. Virendra Cab can then help plan the transportation according to the wedding schedule and vehicle requirements."
    },
    {
        question: "What types of cars can be rented for weddings in Pune?",
        answer: "Wedding transportation can be planned with different vehicle categories depending on the occasion, passenger count, and desired comfort level. Sedan, Ertiga, Innova, and Innova Crysta options can be considered for different wedding-related travel needs."
    },
    {
        question: "Can I rent a car for the bride and groom in Pune?",
        answer: "Yes, a suitable car can be arranged for bride and groom transportation between the residence, wedding venue, reception location, hotel, or other event points. The vehicle selection can be discussed according to the couple's preferences and schedule."
    },
    {
        question: "Is Wedding Car Rental Pune available for guest transportation?",
        answer: "Wedding guests can also be accommodated through cab arrangements for hotel transfers, venue transportation, railway station pickups, airport transfers, and movement between different functions. Multiple vehicles can be considered when several guests require transportation."
    },
    {
        question: "Can I book a wedding car for multiple functions in Pune?",
        answer: "Yes, transportation can be planned for different functions such as engagement ceremonies, haldi, mehendi, wedding ceremonies, receptions, and other family events. Sharing the complete event schedule helps in coordinating the required vehicle timings."
    },
    {
        question: "Can Virendra Cab provide wedding transportation from Pune to another city?",
        answer: "Wedding-related travel can be arranged between Pune and nearby or outstation destinations when guests or family members need intercity transportation. Routes to Mumbai, Nashik, Satara, Mahabaleshwar, Kolhapur, and other locations can be planned based on the event requirements."
    },
    {
        question: "How long can I rent a wedding car in Pune?",
        answer: "The rental duration can be planned according to the wedding itinerary, ranging from transportation for specific transfers to arrangements covering several hours or multiple events. The required usage period should be discussed while making the reservation."
    },
    {
        question: "Can wedding cars be booked for airport and railway station pickups?",
        answer: "Wedding guests arriving in Pune can use cab arrangements for airport and railway station transfers to hotels or wedding venues. Providing arrival details in advance helps coordinate the pickup location and expected timing."
    },
    {
        question: "How early should I reserve a Wedding Car Rental in Pune?",
        answer: "Advance reservation is recommended for wedding transportation because dates can involve several vehicles, venues, and scheduled functions. Sharing the event plan early gives more time to discuss suitable vehicles and organize the required travel arrangements."
    },
    {
        question: "What details are needed to arrange a Wedding Car Rental Pune booking?",
        answer: "Useful booking details include the wedding date, pickup and drop locations, venue addresses, rental duration, passenger requirements, number of vehicles, preferred car category, and timing of each function. These details help Virendra Cab plan transportation around the wedding itinerary."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Parth Kulkarni",
        feedback: "We arranged an Innova for our family during a wedding in Pune, including hotel transfers and venue travel. Having the vehicle planned around the function timings made it much easier for our relatives to move between locations.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Ruchika Bhosale",
        feedback: "For my cousin's wedding, we needed a comfortable car for several trips between the hotel and ceremony venue. The booking was discussed according to our schedule, and the vehicle worked well for the family members travelling together.",
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
  "name": "Wedding Car Rental Pune",
  "image": "https://www.virendracabs.com/assets/images/wedding-car-rental-pune.webp",
  "description": "Wedding Car Rental Pune from Virendra Cab provides chauffeur-driven transportation for weddings, marriage functions, bridal transfers, groom transportation, reception events and related celebrations. Customers searching for Wedding Car Rental Pune, Wedding Car Hire in Pune or Wedding Car Booking Pune can arrange a suitable vehicle according to the event schedule, passenger requirements and preferred level of comfort. Bridal Car Rental Pune is suitable for transporting the bride between the residence, wedding venue, hotel, reception location and other planned destinations, while Groom Car Rental Pune can be arranged for groom entry, venue transfers and wedding-day transportation. Luxury Wedding Car Rental Pune and Premium Wedding Cars Pune options can be discussed for customers looking for a more comfortable and sophisticated vehicle for their special occasion. Affordable Wedding Car Rental Pune is also available for customers who want dependable wedding transportation while keeping the vehicle selection aligned with their event budget. Wedding Chauffeur Service Pune provides a professional driver for customers who prefer to focus on the ceremony and celebrations rather than driving themselves. Wedding Car with Driver Pune is suitable for couples, families and guests who require dedicated transportation during different parts of the wedding schedule. Wedding Day Car Hire Pune can be planned for venue arrival, departure, photography sessions, hotel transfers, reception transportation and other wedding-related movements. Marriage Car Rental Pune can also support traditional wedding ceremonies, destination-style functions, engagement events, receptions and family celebrations. Depending on availability and requirements, customers can enquire about suitable Sedan, SUV, premium car, Innova or Innova Crysta options for different wedding transportation needs. Multiple vehicles can be arranged when transportation is required for the bride, groom, family members, guests or wedding coordinators. The service can also be useful for airport transfers for outstation guests arriving in Pune for the wedding. Customers can provide the wedding date, pickup location, venue, required duration, number of vehicles and preferred car category when making an enquiry. Advance booking is recommended for wedding transportation so that vehicle availability can be coordinated with the event schedule. The final rental quotation depends on the selected vehicle, duration, pickup and drop locations, travel requirements, event schedule and applicable waiting or additional charges. Virendra Cab provides flexible wedding transportation options for customers looking for comfortable, chauffeur-driven and professionally planned Wedding Car Rental Pune services.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.virendracabs.com/wedding-car-rental-pune"
  }
};





    return (
        <div>



<Helmet>
  <title>
    Wedding Car Rental Pune | Wedding Car Hire in Pune | +91 9022549022
  </title>

  <meta
    name="description"
    content="Book Wedding Car Rental Pune for bridal, groom, marriage and reception transportation. Choose chauffeur-driven wedding cars and enquire about suitable vehicles."
  />

  <meta
    name="keywords"
    content="Wedding car rental Pune, Wedding car hire in Pune, Wedding car booking Pune, Bridal car rental Pune, Groom car rental Pune, Luxury wedding car rental Pune, Premium wedding cars Pune, Affordable wedding car rental Pune, Wedding chauffeur service Pune, Wedding car with driver Pune, Wedding day car hire Pune, Marriage car rental Pune, Wedding taxi service Pune, Wedding cab service Pune, Wedding transportation Pune, Wedding car service Pune, Marriage car hire Pune, Marriage car booking Pune, Marriage car with driver Pune, Bridal car hire Pune, Bridal car booking Pune, Bridal car with driver Pune, Groom car hire Pune, Groom car booking Pune, Groom car with driver Pune, Luxury bridal car Pune, Luxury groom car Pune, Luxury marriage car Pune, Premium wedding car hire Pune, Premium wedding car booking Pune, Premium bridal car rental Pune, Premium groom car rental Pune, Affordable wedding car hire Pune, Budget wedding car rental Pune, Cheap wedding car hire Pune, Wedding chauffeur driven car Pune, Wedding car chauffeur Pune, Chauffeur car rental Pune for wedding, Wedding car rental with driver Pune, Wedding car hire with driver Pune, Wedding day taxi Pune, Wedding day cab Pune, Marriage day car rental Pune, Marriage day car hire Pune, Wedding venue car rental Pune, Wedding venue transfer Pune, Wedding reception car rental Pune, Reception car hire Pune, Wedding guest transportation Pune, Wedding guest cab service Pune, Bride and groom car Pune, Bride entry car Pune, Groom entry car Pune, Bridal entry car rental Pune, Groom entry car rental Pune, Wedding hotel transfer Pune, Wedding airport transfer Pune, Wedding event car rental Pune, Wedding function car rental Pune, Wedding ceremony car Pune, Wedding photography car Pune, Wedding procession car Pune, Pune wedding transportation service, Pune marriage transportation service, Wedding car booking near me Pune, Bridal car booking near me Pune, Luxury wedding car booking Pune, Premium car rental for wedding Pune, Sedan wedding car Pune, SUV wedding car Pune, Innova wedding car Pune, Innova Crysta wedding car Pune"
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
                            <img src='/images/keyword/127.jpg' alt='img' className='img-fluid' />
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

export default Weddingcarrentaloune ;