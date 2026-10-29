import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Punetoshirdicab() {



const cardData = {
    keyword: "Pune to Shirdi Cab",
    headingDescription: "Pune to Shirdi Cab from Virendra Cab is a convenient private travel option for devotees, families, and groups planning a pilgrimage to Shirdi Sai Baba Temple. Travellers can choose suitable arrangements for one-way travel, round trips, airport transfers, or complete car packages according to their schedule and passenger requirements. The journey can be planned with different vehicle options depending on group size, luggage, and comfort preferences. Virendra Cab also supports pickup from Pune Airport and other Pune locations, making it easier to organize direct travel to Shirdi. Whether you need a simple cab booking, a return journey, or a planned pilgrimage package by car, the service can be arranged around your preferred travel dates and itinerary.",

    topPlaces: [
        {
            title: "Shirdi Sai Baba Temple",
            description: "Shirdi Sai Baba Temple is the primary pilgrimage destination for this route, and private cab travel from Pune provides devotees with a convenient way to plan their darshan journey."
        },
        {
            title: "Dwarkamai",
            description: "Dwarkamai is an important spiritual site in Shirdi that can be included in a planned pilgrimage itinerary along with the main Sai Baba Temple."
        },
        {
            title: "Chavadi",
            description: "Chavadi is another significant Shirdi landmark that devotees can visit during their pilgrimage, making it a useful stop in a private cab itinerary."
        },
        {
            title: "Gurusthan",
            description: "Gurusthan can be included in the Shirdi darshan schedule for travellers who want to explore important spiritual places associated with Sai Baba."
        },
        {
            title: "Khandoba Temple",
            description: "Khandoba Temple is a notable religious stop in Shirdi and can be incorporated into a family or group pilgrimage planned by private cab."
        },
        {
            title: "Shani Shingnapur",
            description: "Travellers can combine Shirdi with Shani Shingnapur for an extended religious journey, creating a broader pilgrimage itinerary from Pune."
        },
        {
            title: "Nashik",
            description: "Nashik can be added to a longer Pune-Shirdi travel plan for devotees and families interested in combining temple visits and regional sightseeing."
        },
        {
            title: "Trimbakeshwar",
            description: "Trimbakeshwar can be included in an extended religious route with Shirdi for travellers planning a multi-destination pilgrimage by private vehicle."
        },
        {
            title: "Pune Airport",
            description: "Pune Airport provides a convenient pickup point for travellers arriving by flight who want to continue directly towards Shirdi by private cab."
        },
        {
            title: "Shirdi",
            description: "Shirdi serves as the main destination for the journey, with private cab travel allowing families and groups to plan their arrival, local visits, and return schedule conveniently."
        }
    ],

    services: [
        {
            name: "Pune to Shirdi Taxi",
            description: "Pune to Shirdi taxi service provides private transportation for devotees, families, and groups travelling to Shirdi for Sai Baba darshan and related pilgrimage visits."
        },
        {
            name: "Pune to Shirdi Cab Package",
            description: "A Pune to Shirdi cab package can be planned according to the travel duration, vehicle requirement, number of passengers, and preferred one-way or return itinerary."
        },
        {
            name: "Pune to Shirdi Cab Charges",
            description: "Travellers checking Pune to Shirdi cab charges can consider the selected vehicle, journey type, travel distance, and additional itinerary requirements when planning their trip."
        },
        {
            name: "Pune to Shirdi Cab Fare",
            description: "Pune to Shirdi cab fare can vary according to vehicle selection, travel schedule, route requirements, and whether the journey is one-way or round trip."
        },
        {
            name: "Pune to Shirdi Cab One Way",
            description: "Pune to Shirdi one-way cab service is suitable for devotees who need private transportation to Shirdi without requiring the same vehicle for their return journey."
        },
        {
            name: "Pune to Shirdi Taxi Fare",
            description: "Travellers comparing Pune to Shirdi taxi fare can evaluate their requirements based on the vehicle type, passenger count, journey duration, and selected travel arrangement."
        },
        {
            name: "Pune to Shirdi Cab Service",
            description: "Pune to Shirdi cab service offers a convenient private travel option for families, devotees, and groups planning a direct pilgrimage journey from Pune."
        },
        {
            name: "Pune to Shirdi Cab Booking Service",
            description: "Pune to Shirdi cab booking service helps travellers arrange their private vehicle in advance for planned darshan, family travel, airport transfers, or outstation journeys."
        },
        {
            name: "Pune to Shirdi Taxi Drop",
            description: "Pune to Shirdi taxi drop service is useful for travellers who require direct transportation from Pune to their hotel, accommodation, or preferred drop location in Shirdi."
        },
        {
            name: "Pune Airport to Shirdi Cab",
            description: "Pune Airport to Shirdi cab service is convenient for passengers arriving at the airport and continuing directly to Shirdi without arranging separate local transportation."
        },
        {
            name: "Pune to Shirdi Car Rental",
            description: "Pune to Shirdi car rental provides a private travel option for families and groups who prefer dedicated transportation for their pilgrimage journey."
        },
        {
            name: "Pune to Shirdi Cab Booking",
            description: "Advance Pune to Shirdi cab booking allows devotees to organize their preferred vehicle and travel schedule before the planned pilgrimage date."
        },
        {
            name: "Pune to Shirdi Cab Price",
            description: "Customers comparing Pune to Shirdi cab price can consider the journey type, vehicle category, passenger count, and travel requirements when selecting a suitable cab."
        },
        {
            name: "Pune to Shirdi Car",
            description: "A Pune to Shirdi car service offers private transportation for devotees and families seeking a comfortable journey from Pune to the Shirdi pilgrimage destination."
        },
        {
            name: "Cab Service from Pune to Shirdi",
            description: "Cab service from Pune to Shirdi is suitable for direct pilgrimage travel, family trips, and group journeys where passengers prefer to travel together in a private vehicle."
        },
        {
            name: "Pune to Shirdi Cab Booking Rates",
            description: "Travellers checking Pune to Shirdi cab booking rates can compare their requirements based on vehicle type, travel distance, journey schedule, and one-way or return arrangements."
        },
        {
            name: "Pune Airport to Shirdi Taxi",
            description: "Pune Airport to Shirdi taxi service provides direct transportation for airport passengers travelling onward to Shirdi for religious visits, family travel, or planned stays."
        },
        {
            name: "Pune to Shirdi Cab Service Rates",
            description: "Pune to Shirdi cab service rates can be considered according to the chosen vehicle, route, travel duration, and specific requirements of the pilgrimage journey."
        },
        {
            name: "Pune to Shirdi Package by Car",
            description: "A Pune to Shirdi package by car can be arranged for devotees who want private transportation with a planned itinerary covering the journey and return requirements."
        },
        {
            name: "Pune to Shirdi Cabs Round Trip",
            description: "Pune to Shirdi round-trip cabs are useful for devotees who want the convenience of planned transportation for both the onward journey and return trip."
        },
        {
            name: "Pune Airport to Shirdi Cab Price",
            description: "Travellers checking Pune Airport to Shirdi cab price can consider the selected vehicle, passenger count, luggage requirements, and journey arrangement when planning airport-to-Shirdi travel."
        },
        {
            name: "Pune Airport to Shirdi Airport",
            description: "Pune Airport to Shirdi Airport travel requirements can be planned according to the passenger's flight and onward transportation schedule, with private cab arrangements available for the road journey."
        },
        {
            name: "Pune Airport to Shirdi Cab Fare",
            description: "Pune Airport to Shirdi cab fare depends on the selected travel arrangement, vehicle category, route, and passenger requirements, making it useful to plan the journey in advance."
        },
        {
            name: "Pune Airport to Shirdi Cab Service",
            description: "Pune Airport to Shirdi cab service provides direct private transportation for passengers who want to continue their pilgrimage journey immediately after arriving at Pune Airport."
        },
        {
            name: "Pune to Shirdi Cab Cost",
            description: "Customers comparing Pune to Shirdi cab cost can evaluate vehicle selection, travel distance, one-way or return requirements, and any additional itinerary needs."
        },
        {
            name: "Pune to Shirdi Car Package",
            description: "A Pune to Shirdi car package is suitable for families and devotees who want a planned private vehicle for their pilgrimage journey and associated travel requirements."
        },
        {
            name: "Pune to Shirdi Taxi Charges",
            description: "Pune to Shirdi taxi charges can be assessed according to the selected vehicle, route, journey type, and duration so travellers can plan their pilgrimage transportation accordingly."
        },
        {
            name: "Shirdi Pune Cab",
            description: "Shirdi Pune cab service is useful for devotees and travellers returning from Shirdi who need private transportation back to Pune after completing their pilgrimage."
        },
        {
            name: "Taxi Service from Pune to Shirdi",
            description: "Taxi service from Pune to Shirdi provides a private and convenient travel option for devotees, families, and groups planning a direct journey to the Sai Baba pilgrimage destination."
        }
    ],

    tableData: [
        ["Pune to Shirdi Taxi"],
        ["Pune to Shirdi Cab Package"],
        ["Pune to Shirdi Cab Charges"],
        ["Pune to Shirdi Cab Fare"],
        ["Pune to Shirdi Cab One Way"],
        ["Pune to Shirdi Taxi Fare"],
        ["Pune to Shirdi Cab Service"],
        ["Pune to Shirdi Cab Booking Service"],
        ["Pune to Shirdi Taxi Drop"],
        ["Pune Airport to Shirdi Cab"],
        ["Pune to Shirdi Car Rental"],
        ["Pune to Shirdi Cab Booking"],
        ["Pune to Shirdi Cab Price"],
        ["Pune to Shirdi Car"],
        ["Cab Service from Pune to Shirdi"],
        ["Pune to Shirdi Cab Booking Rates"],
        ["Pune Airport to Shirdi Taxi"],
        ["Pune to Shirdi Cab Service Rates"],
        ["Pune to Shirdi Package by Car"],
        ["Pune to Shirdi Cabs Round Trip"],
        ["Pune Airport to Shirdi Cab Price"],
        ["Pune Airport to Shirdi Airport"],
        ["Pune Airport to Shirdi Cab Fare"],
        ["Pune Airport to Shirdi Cab Service"],
        ["Pune to Shirdi Cab Cost"],
        ["Pune to Shirdi Car Package"],
        ["Pune to Shirdi Taxi Charges"],
        ["Shirdi Pune Cab"],
        ["Taxi Service from Pune to Shirdi"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Dedicated Shirdi Pilgrimage Travel",
            WhyChoosedescription: "Virendra Cab provides private transportation focused on Pune to Shirdi journeys, making it convenient for devotees and families to plan their Sai Baba pilgrimage."
        },
        {
            WhyChooseheading: "One-Way And Round-Trip Options",
            WhyChoosedescription: "Travellers can select a one-way cab when only the onward journey is required or arrange a round trip when they prefer planned transportation for both Pune and Shirdi."
        },
        {
            WhyChooseheading: "Convenient Airport Transfers",
            WhyChoosedescription: "Passengers arriving at Pune Airport can arrange direct transportation to Shirdi, reducing the need to coordinate separate vehicles before beginning their pilgrimage."
        },
        {
            WhyChooseheading: "Flexible Car Packages",
            WhyChoosedescription: "Car packages can be planned according to the journey duration, passenger count, vehicle preference, and additional religious or sightseeing stops included in the itinerary."
        },
        {
            WhyChooseheading: "Suitable For Families And Groups",
            WhyChoosedescription: "Private cab travel allows family members and groups to remain together throughout the journey, with luggage space and travel breaks planned around their requirements."
        },
        {
            WhyChooseheading: "Shirdi And Nearby Pilgrimage Routes",
            WhyChoosedescription: "Travellers can extend their journey to destinations such as Shani Shingnapur, Nashik, or Trimbakeshwar when planning a broader religious itinerary from Pune."
        },
        {
            WhyChooseheading: "Flexible Pickup And Drop Planning",
            WhyChoosedescription: "The journey can be organized around suitable Pune pickup points and preferred Shirdi drop locations, helping travellers coordinate their accommodation and darshan schedule."
        },
        {
            WhyChooseheading: "Advance Booking Convenience",
            WhyChoosedescription: "Advance cab booking makes it easier to organize the preferred vehicle and travel schedule for temple visits, weekends, holidays, and planned family pilgrimage trips."
        }
    ]
};

const faqData = [
    {
        question: "How can I book a Pune to Shirdi cab with Virendra Cab?",
        answer: "Virendra Cab can arrange a private cab from Pune to Shirdi based on your travel date, pickup point, passenger count, luggage, and preferred vehicle. The journey can be planned for Sai Baba darshan, family travel, or a dedicated pilgrimage."
    },
    {
        question: "Is one-way Pune to Shirdi cab service available?",
        answer: "Travellers who only need transportation from Pune to Shirdi can enquire about a one-way cab. The pickup location, departure time, destination details, and vehicle category can be discussed before confirming the trip."
    },
    {
        question: "Can I book a round-trip cab from Pune to Shirdi?",
        answer: "A round-trip cab is suitable for devotees who want to complete their Shirdi visit and return to Pune. The return timing can be planned according to the expected temple visit, waiting period, and overall itinerary."
    },
    {
        question: "Can the cab take us directly to Sai Baba Temple in Shirdi?",
        answer: "The cab can be planned for travel to Shirdi with the route and drop-off requirements discussed during booking. Travellers visiting Shri Saibaba Sansthan Temple can coordinate their journey around their preferred darshan schedule."
    },
    {
        question: "Which cab is suitable for a Pune to Shirdi family trip?",
        answer: "Vehicle selection depends on the number of family members, luggage, travel duration, and comfort preferences. Virendra Cab can discuss suitable vehicle options after receiving the complete requirements for the Shirdi journey."
    },
    {
        question: "Can senior citizens travel comfortably from Pune to Shirdi by cab?",
        answer: "Families travelling with senior citizens can consider a private cab so that the journey can be organised around their preferred departure time and comfort requirements. Passenger details and mobility considerations can be shared while making the enquiry."
    },
    {
        question: "Can I get pickup from different areas of Pune for Shirdi travel?",
        answer: "Pickup arrangements can be discussed from Pune areas including Kothrud, Baner, Wakad, Hinjewadi, Hadapsar, Viman Nagar, Pimpri-Chinchwad, and other suitable residential or commercial locations."
    },
    {
        question: "Can I include other pilgrimage places with a Pune to Shirdi cab?",
        answer: "Travellers can discuss combining Shirdi with other religious destinations when the available time permits. The preferred temples, sightseeing stops, route requirements, and return schedule can be considered while preparing the travel plan."
    },
    {
        question: "Is Pune to Shirdi cab useful for a same-day pilgrimage?",
        answer: "A same-day Shirdi trip can be discussed depending on the preferred departure time, darshan plans, waiting requirements, and return schedule. Travellers can share their itinerary so the cab arrangement can be planned accordingly."
    },
    {
        question: "What information is required to book a Pune to Shirdi cab?",
        answer: "Passengers can provide their Pune pickup address, Shirdi destination, travel date, preferred departure time, number of travellers, luggage details, one-way or round-trip requirement, and preferred vehicle type when making a booking enquiry."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Ganesh Jadhav",
        feedback: "Our parents wanted to visit Shirdi for Sai Baba darshan, so we arranged a private cab from Pune instead of using multiple transport options. Virendra Cab coordinated the pickup and travel details according to our family's requirements.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Nandini Kulkarni",
        feedback: "A group of us planned a Shirdi pilgrimage from Pune and needed a convenient return arrangement after darshan. The cab booking process was straightforward, and having dedicated transportation helped us manage the trip according to our schedule.",
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
  "name": "Pune to Shirdi Cab",
  "image": "https://www.virendracabs.com/assets/images/pune-to-shirdi-cab.webp",
  "description": "Pune to Shirdi Cab is a convenient private travel option for devotees, families and travelers planning a pilgrimage from Pune to Shirdi. Virendra Cab provides cab booking support for passengers searching for Pune to Shirdi Taxi, Pune to Shirdi Cab Package and Pune to Shirdi One Way Cab. The service is suitable for Sai Baba darshan, family pilgrimage trips, weekend visits and planned religious tours, with flexible travel arrangements based on the passenger's preferred schedule. Travelers comparing Pune to Shirdi Cab Charges or Pune to Shirdi Cab Fare can contact Virendra Cab for current fare details based on the selected vehicle, travel date, pickup location, route and trip type. One-way cab arrangements are suitable for passengers who only require transportation to Shirdi, while round-trip options can be planned for travelers who want to complete darshan and return to Pune according to their schedule. Families and groups can enquire about suitable vehicle options depending on passenger count and luggage requirements. The journey can also be combined with nearby religious destinations when passengers are planning a broader Maharashtra pilgrimage itinerary. Advance booking allows travelers to confirm pickup timing, vehicle preference and return requirements before departure. Whether the purpose is Sai Baba darshan, a family temple visit or an outstation pilgrimage, Virendra Cab offers a practical and comfortable way to arrange private road transportation from Pune to Shirdi.",
  "brand": {
    "@type": "Brand",
    "name": "Virendra Cab"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Cab Fare",
    "availability": "https://schema.org/InStock",
    "url": "https://www.virendracabs.com/pune-to-shirdi-cab"
  }
};






    return (
        <div>

<Helmet>
  <title>
    Pune to Shirdi Cab | Pune to Shirdi Cab Package | +91 9022549022
  </title>

  <meta
    name="description"
    content="Book Pune to Shirdi Cab for Sai Baba darshan and pilgrimage travel. Get Pune to Shirdi Taxi, cab package and one-way travel options with Virendra Cab."
  />

  <meta
    name="keywords"
    content="Pune to Shirdi Cab, Pune to Shirdi Taxi, Pune to Shirdi Cab Package, Pune to Shirdi Cab Charges, Pune to Shirdi Cab Fare, Pune to Shirdi Cab One Way, Pune to Shirdi Taxi Service, Pune to Shirdi Cab Service, Pune to Shirdi Cab Booking, Pune to Shirdi Taxi Fare, Pune to Shirdi One Way Cab, Pune to Shirdi Round Trip Cab, Pune to Shirdi Outstation Cab, Cab from Pune to Shirdi, Taxi from Pune to Shirdi, Pune Shirdi Car Rental, Pune Shirdi Taxi Booking, Shirdi Cab from Pune, Shirdi Darshan Cab Pune, Sai Baba Darshan Cab Pune, Pune to Shirdi Private Cab, Pune to Shirdi Travel Cab, Pune to Shirdi Tour Package, Pune to Shirdi Pilgrimage Cab, Pune to Shirdi Temple Taxi, Pune Shirdi Cab Package, Pune Shirdi One Way Taxi"
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
                            <img src='/images/keyword/32.jpg' alt='img' className='img-fluid' />
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

export default Punetoshirdicab ;