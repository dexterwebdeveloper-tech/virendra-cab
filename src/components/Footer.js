// import React from "react";
// import { Link } from "react-router-dom";
// const Footer = () => {
//   return (
//     <footer className="footer footer-four pt-4 m-0 p-0">
//       {/* Footer Top */}
//       <div className="footer-top aos" data-aos="fade-up p-0 m-0 w-100">
//         <div className="container m0 p-0">
//           <div className="row">
//             {/* Footer Contact */}
//             <div className="col-lg-3">
//               <div className="footer-contact footer-widget">
//                 <div className="footer-logo mb-3">
//                   <img src="/images/logo.jpg" className="img-fluid aos" alt="logo" />
//                 </div>

//                 <div className="footer-contact-info">
//                   <p className="text-white">
//                     Virendra Cabs provides reliable and comfortable cab services in Pune and across Maharashtra for family trips, corporate travel, weddings, airport transfers, local sightseeing, and outstation journeys.
//                   </p>

//                   {/* Phone */}

//                   <p className="d-flex align-items-center mb-2">
//                     <i className="fas fa-phone-alt me-2" style={{ color: "#CF191F" }}></i>
//                     <a href="tel:+919022549022 " style={{ color: "#fff", textDecoration: "none" }}>+91 9022549022 </a>
//                   </p>
//                   {/* Address */}
//                   <p className="d-fle align-items-start text-white">

//                     <h6 className="text-white"><i className="fas fa-map-marker-alt me-2 mt-1 text-white" style={{ color: "#CF191F" }}></i>Virendra Cabs</h6>

//                     Office No.5, 3rd Floor
//                     Kahitij Apartment, Kaspate Wasti,
//                     Wakad Pune, Maharashtra- 411057

//                   </p>




//                 </div>

//                 <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1876.062957050103!2d73.77314913130665!3d18.597322609686465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDM1JzUwLjQiTiA3M8KwNDYnMjkuNCJF!5e1!3m2!1sen!2sin!4v1793275272067!5m2!1sen!2sin" width="100%"
//                   height="250" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>








//                 <li className="d-flex gap-3">
//                   <a href="https://www.instagram.com/virendracabs/" target="_blank" rel="noreferrer">
//                     <i className="fab fa-instagram text-white"></i>
//                   </a>

//                   <a href="https://www.facebook.com/profile.php?id=61595689545132" target="_blank" rel="noreferrer">
//                     <i className="fab fa-facebook-f text-white"></i>
//                   </a>

//                   <a href="https://x.com/virendracabs" target="_blank" rel="noreferrer">
//                     <i className="fab fa-twitter text-white"></i>
//                   </a>

//                   <a href="https://www.pinterest.com/virendracabs/" target="_blank" rel="noreferrer">
//                     <i className="fab fa-pinterest-p text-white"></i>
//                   </a>

//                   <a
//                     href="https://www.youtube.com/"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <i className="fab fa-youtube text-white"></i>
//                   </a>
//                 </li>
//               </div>
//             </div>

//             {/* Footer Menus */}
//             <div className="col-lg-9">
//               <div className="row">
//                 <div className="col-lg-4 col-md-6">
//                   <div className="footer-widget footer-menu">
//                     <h5 className="footer-title">Our Services</h5>
//                     <ul className="p-0">


//                       <li><Link to="/pune-to-mumbai-airport-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Mumbai Airport Cab</Link></li>
//                       <li><Link to="/pune-to-outstations-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Outstations Cabs</Link></li>
//                       <li><Link to="/pune-to-mahabaleshwar-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Mahabaleshwar Cab</Link></li>
//                       <li><Link to="/pune-to-lonavala-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Lonavala Cab</Link></li>
//                       <li><Link to="/pune-to-matheran-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Matheran Cabs</Link></li>
//                       <li><Link to="/pune-to-5-jyotirlinga-darshan-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to 5 Jyotirlinga Darshan Cab</Link></li>
//                       <li><Link to="/pune-to-bhimashankar-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Bhimashankar Cab</Link></li>
//                       <li><Link to="/pune-to-aurangabad-cab-service"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Aurangabad Cab Service</Link></li>
//                       <li><Link to="/pune-to-nashik-cab-service"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Nashik Cab Service</Link></li>
//                       <li><Link to="/pune-to-kolhapur-cab-service"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Kolhapur Cab Service</Link></li>
//                       <li><Link to="/pune-to-alibaug-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Alibaug Cab</Link></li>
//                       <li><Link to="/pune-to-goa-cab-service"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Goa Cab Service</Link></li>
//                       <li><Link to="/goa-to-pune-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Goa to Pune Cabs</Link></li>
//                       <li><Link to="/innova-crysta-cab-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Innova Crysta Cab in Pune</Link></li>
//                       <li><Link to="/ertiga-on-rent-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Ertiga On Rent in Pune</Link></li>
//                       <li><Link to="/pune-to-ashtavinayak-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Ashtavinayak Cabs</Link></li>
//                       <li><Link to="/pune-to-goa-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Goa Cabs</Link></li>
//                       <li><Link to="/pune-to-jyotirlinga-darshan-package"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Jyotirlinga Darshan Package</Link></li>
//                       <li><Link to="/pune-to-akkalkot-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Akkalkot Cabs</Link></li>
//                       <li><Link to="/pune-to-pandharpur-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Pandharpur Cab</Link></li>
//                       <li><Link to="/pune-to-grishneshwar-jyotirlinga-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Grishneshwar Jyotirlinga Cab</Link></li>
//                       <li><Link to="/pune-to-mumbai-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Mumbai Cabs</Link></li>
//                       <li><Link to="/innova-crysta-on-rent-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Innova Crysta On Rent in Pune</Link></li>
//                       <li><Link to="/ertiga-hire-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Ertiga Hire in Pune</Link></li>
//                       <li><Link to="/pune-to-shrivardhan-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Shrivardhan Cab</Link></li>
//                       <li><Link to="/pune-to-jyotiba-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Jyotiba Cab</Link></li>
//                       <li><Link to="/pune-to-shirdi-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Shirdi Cab</Link></li>
//                       <li><Link to="/sedan-cab-service"><i className="fa-solid fa-taxi darkcolor"></i> Sedan Cab Service</Link></li>
//                       <li><Link to="/hyundai-xcent-cabs-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Hyundai Xcent Cabs in Pune</Link></li>
//                       <li><Link to="/swift-dzire-on-rent-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Swift Dzire On Rent in Pune</Link></li>
//                       <li><Link to="/aura-cab-service-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Aura Cab Service in Pune</Link></li>
//                       <li><Link to="/pune-darshan-sedan-cab-booking"><i className="fa-solid fa-taxi darkcolor"></i> Pune Darshan Sedan Cab Booking</Link></li>
//                       <li><Link to="/pune-to-ayodhya-tour-package"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Ayodhya Tour Package</Link></li>
//                       <li><Link to="/pune-to-mahabaleshwar-sedan-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Mahabaleshwar Sedan Cab</Link></li>
//                       <li><Link to="/pune-airport-cab-sedan-service"><i className="fa-solid fa-taxi darkcolor"></i> Pune Airport Cab Sedan Service</Link></li>
//                       <li><Link to="/pune-to-shirdi-sedan-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Shirdi Sedan Cabs</Link></li>
//                       <li><Link to="/sedan-cab-booking-pune"><i className="fa-solid fa-taxi darkcolor"></i> Sedan Cab Booking Pune</Link></li>
//                       <li><Link to="/pune-hyundai-aura-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune Hyundai Aura Cab</Link></li>


//                     </ul>
//                   </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6">
//                   <div className="footer-widget footer-menu">
//                     <h5 className="footer-title">Our Services</h5>
//                     <ul className="p-0">
//                       <li><Link to="/pune-to-lonavala-sedan-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Lonavala Sedan Cabs</Link></li>
//                       <li><Link to="/online-sedan-cab-booking-pune"><i className="fa-solid fa-taxi darkcolor"></i> Online Sedan Cab Booking Pune</Link></li>
//                       <li><Link to="/pune-to-vidarbha-cab-service"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Vidarbha Cab Service</Link></li>
//                       <li><Link to="/pune-to-hyderabad-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Hyderabad Cab</Link></li>
//                       <li><Link to="/pune-to-ujjain-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Ujjain Cab</Link></li>
//                       <li><Link to="/corporate-cab-service-pune"><i className="fa-solid fa-taxi darkcolor"></i> Corporate Cab Service Pune</Link></li>
//                       <li><Link to="/pune-railway-station-cab-service"><i className="fa-solid fa-taxi darkcolor"></i> Pune Railway Station Cab Service</Link></li>
//                       <li><Link to="/cheap-cab-service-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Cheap Cab Service in Pune</Link></li>
//                       <li><Link to="/online-cab-booking-pune"><i className="fa-solid fa-taxi darkcolor"></i> Online Cab Booking Pune</Link></li>
//                       <li><Link to="/pune-to-bangalore-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Bangalore Cab</Link></li>
//                       <li><Link to="/pune-to-gujarat-cab-service"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Gujarat Cab Service</Link></li>
//                       <li><Link to="/pune-to-nagpur-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Nagpur Cab</Link></li>
//                       <li><Link to="/pune-to-ahmednagar-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Ahmednagar Cab</Link></li>
//                       <li><Link to="/pune-to-latur-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Latur Cab</Link></li>
//                       <li><Link to="/pune-to-mumbai-darshan-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Mumbai Darshan Cab</Link></li>
//                       <li><Link to="/pune-to-satara-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Satara Cab</Link></li>
//                       <li><Link to="/pune-to-sangli-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Sangli Cab</Link></li>
//                       <li><Link to="/pune-to-solapur-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Solapur Cab</Link></li>
//                       <li><Link to="/pune-airport-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune Airport Cab</Link></li>
//                       <li><Link to="/pune-to-outstation-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Outstation Cabs</Link></li>
//                       <li><Link to="/pune-to-rajasthan-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Rajasthan Cab</Link></li>
//                       <li><Link to="/pune-to-sambhajinagar-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Sambhajinagar Cab</Link></li>
//                       <li><Link to="/pune-to-dhule-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Dhule Cab</Link></li>
//                       <li><Link to="/pune-to-jalna-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Jalna Cab</Link></li>
//                       <li><Link to="/innova-crysta-on-rent-pune"><i className="fa-solid fa-taxi darkcolor"></i> Innova Crysta On Rent Pune</Link></li>
//                       <li><Link to="/pune-to-telangana-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Telangana Cab</Link></li>
//                       <li><Link to="/pune-to-indore-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Indore Cab</Link></li>
//                       <li><Link to="/pune-taxi-service"><i className="fa-solid fa-taxi darkcolor"></i> Pune Taxi Service</Link></li>
//                       <li><Link to="/best-cab-service-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Best Cab Service in Pune</Link></li>
//                       <li><Link to="/pune-one-way-cab-service"><i className="fa-solid fa-taxi darkcolor"></i> Pune One Way Cab Service</Link></li>
//                       <li><Link to="/pune-local-and-outstation-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune Local and Outstation Cab</Link></li>
//                       <li><Link to="/pune-to-jalgaon-cab-service"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Jalgaon Cab Service</Link></li>
//                       <li><Link to="/pune-to-thane-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Thane Cab</Link></li>
//                       <li><Link to="/pune-to-panvel-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Panvel Cabs</Link></li>

//                       <li><Link to="/pune-to-nanded-cab-service"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Nanded Cab Service</Link></li>

//                       <li><Link to="/pune-to-surat-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Surat Cab</Link></li>

//                       <li><Link to="/pune-to-ahmedabad-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Ahmedabad Cab</Link></li>
//                       <li><Link to="/pune-to-mahabaleshwar-taxi"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Mahabaleshwar Taxi</Link></li>

//                     </ul>
//                   </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6">
//                   <div className="footer-widget footer-menu">
//                     <h5 className="footer-title">Our Services</h5>
//                     <ul className="p-0">
//                       <li><Link to="/pune-to-igatpuri-taxi"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Igatpuri Taxi</Link></li>
//                       <li><Link to="/pune-to-tamhini-ghat-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Tamhini Ghat Cab</Link></li>
//                       <li><Link to="/pune-to-trimbakeshwar-cab-service"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Trimbakeshwar Cab Service</Link></li>
//                       <li><Link to="/pune-to-ashtavinayak-darshan-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Ashtavinayak Darshan Cab</Link></li>
//                       <li><Link to="/pune-to-jejuri-cab-service"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Jejuri Cab Service</Link></li>
//                       <li><Link to="/pune-to-aundha-nagnath-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Aundha Nagnath Cab</Link></li>
//                       <li><Link to="/pune-to-konkan-darshan-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Konkan Darshan Cab</Link></li>
//                       <li><Link to="/mumbai-airport-to-pune-cab"><i className="fa-solid fa-taxi darkcolor"></i> Mumbai Airport to Pune Cab</Link></li>
//                       <li><Link to="/mumbai-airport-cab-service"><i className="fa-solid fa-taxi darkcolor"></i> Mumbai Airport Cab Service</Link></li>
//                       <li><Link to="/navi-mumbai-airport-cab"><i className="fa-solid fa-taxi darkcolor"></i> Navi Mumbai Airport Cab</Link></li>
//                       <li><Link to="/cab-service-in-navi-mumbai"><i className="fa-solid fa-taxi darkcolor"></i> Cab Service in Navi Mumbai</Link></li>
//                       <li><Link to="/innova-crysta-on-rent-in-mumbai"><i className="fa-solid fa-taxi darkcolor"></i> Innova Crysta On Rent in Mumbai</Link></li>
//                       <li><Link to="/ertiga-on-rent-in-mumbai"><i className="fa-solid fa-taxi darkcolor"></i> Ertiga On Rent in Mumbai</Link></li>
//                       <li><Link to="/mumbai-to-mahabaleshwar-cab"><i className="fa-solid fa-taxi darkcolor"></i> Mumbai to Mahabaleshwar Cab</Link></li>
//                       <li><Link to="/cab-service-in-thane"><i className="fa-solid fa-taxi darkcolor"></i> Cab Service in Thane</Link></li>
//                       <li><Link to="/mumbai-to-goa-cab"><i className="fa-solid fa-taxi darkcolor"></i> Mumbai to Goa Cab</Link></li>
//                       <li><Link to="/cab-service-in-pimpri-chinchwad"><i className="fa-solid fa-taxi darkcolor"></i> Cab Service in Pimpri Chinchwad</Link></li>
//                       <li><Link to="/pune-innova-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Pune Innova Cabs</Link></li>
//                       <li><Link to="/best-outstation-cab-service-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Best Outstation Cab Service in Pune</Link></li>
//                       <li><Link to="/pune-to-panchgani-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Panchgani Cabs</Link></li>
//                       <li><Link to="/hinjewadi-cab-service"><i className="fa-solid fa-taxi darkcolor"></i> Hinjewadi Cab Service</Link></li>
//                       <li><Link to="/navi-mumbai-international-airport-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Navi Mumbai International Airport Cabs</Link></li>
//                       <li><Link to="/cab-service-in-kharadi"><i className="fa-solid fa-taxi darkcolor"></i> Cab Service in Kharadi</Link></li>
//                       <li><Link to="/cab-service-in-wagholi"><i className="fa-solid fa-taxi darkcolor"></i> Cab Service in Wagholi</Link></li>
//                       <li><Link to="/cab-service-in-mundhwa"><i className="fa-solid fa-taxi darkcolor"></i> Cab Service in Mundhwa</Link></li>
//                       <li><Link to="/cab-service-in-kalyani-nagar"><i className="fa-solid fa-taxi darkcolor"></i> Cab Service in Kalyani Nagar</Link></li>
//                       <li><Link to="/cab-service-in-kothrud"><i className="fa-solid fa-taxi darkcolor"></i> Cab Service in Kothrud</Link></li>
//                       <li><Link to="/pune-to-ahilyanagar-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Ahilyanagar Cabs</Link></li>
//                       <li><Link to="/pune-to-shirdi-cab-charges"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Shirdi Cab Charges</Link></li>
//                       <li><Link to="/one-way-cab-pune-to-mumbai"><i className="fa-solid fa-taxi darkcolor"></i> One Way Cab Pune to Mumbai</Link></li>
//                       <li><Link to="/pune-to-mumbai-international-airport-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Mumbai International Airport Cab</Link></li>
//                       <li><Link to="/virendra-cabs-services-pune"><i className="fa-solid fa-taxi darkcolor"></i> Virendra Cabs Services Pune</Link></li>
//                       <li><Link to="/taxi-service-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Taxi Service in Pune</Link></li>
//                       <li><Link to="/cheapest-cab-service-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Cheapest Cab Service in Pune</Link></li>
//                       <li><Link to="/cab-service-in-ravet-pune"><i className="fa-solid fa-taxi darkcolor"></i> Cab Service in Ravet Pune</Link></li>
//                       <li><Link to="/cab-booking-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Cab Booking in Pune</Link></li>
//                       <li><Link to="/wedding-car-rental-pune"><i className="fa-solid fa-taxi darkcolor"></i> Wedding Car Rental Pune</Link></li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="footer-bottom">
//         <div className="container">
//           <div className="copyright">
//             <div className="row align-items-center row-gap-3 text-center">
//               <div className="col-12">
//                 <p className="copyright-text text-white">
//                   All Rights Reserved &copy;  <span className="darkcolorrr">Virendra Cabs</span> <span id="date">{new Date().getFullYear()}</span>{' '}
//                   <span href="#"> Developed By </span> <a href="https://www.dexterintelligence.com/" className='d-inline' target="_blank" rel="noopener noreferrer">
//                     <span className="darkcolorrr">&nbsp;Dexter Intelligence</span>
//                   </a> | Hosted By <a href="https://www.urvahosting.com/" className='d-inline ' target="_blank" rel="noopener noreferrer">
//                     <span className="darkcolorrr">&nbsp;Urva Hosting</span>
//                   </a>
//                 </p>
//               </div>
              
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;






import React from "react";
import { Link } from "react-router-dom";
import "./FooterScroll.css";

const serviceColumns = [
  [
    ["Pune to Mumbai Airport Cab", "/pune-to-mumbai-airport-cab"],
    ["Pune to Outstations Cabs", "/pune-to-outstations-cabs"],
    ["Pune to Mahabaleshwar Cab", "/pune-to-mahabaleshwar-cab"],
    ["Pune to Lonavala Cab", "/pune-to-lonavala-cab"],
    ["Pune to Matheran Cabs", "/pune-to-matheran-cabs"],
    ["Pune to 5 Jyotirlinga Darshan Cab", "/pune-to-5-jyotirlinga-darshan-cab"],
    ["Pune to Bhimashankar Cab", "/pune-to-bhimashankar-cab"],
    ["Pune to Aurangabad Cab Service", "/pune-to-aurangabad-cab-service"],
    ["Pune to Nashik Cab Service", "/pune-to-nashik-cab-service"],
    ["Pune to Kolhapur Cab Service", "/pune-to-kolhapur-cab-service"],
    ["Pune to Alibaug Cab", "/pune-to-alibaug-cab"],
    ["Pune to Goa Cab Service", "/pune-to-goa-cab-service"],
    ["Goa to Pune Cabs", "/goa-to-pune-cabs"],
    ["Innova Crysta Cab in Pune", "/innova-crysta-cab-in-pune"],
    ["Ertiga On Rent in Pune", "/ertiga-on-rent-in-pune"],
    ["Pune to Ashtavinayak Cabs", "/pune-to-ashtavinayak-cabs"],
    ["Pune to Goa Cabs", "/pune-to-goa-cabs"],
    ["Pune to Jyotirlinga Darshan Package", "/pune-to-jyotirlinga-darshan-package"],
    ["Pune to Akkalkot Cabs", "/pune-to-akkalkot-cabs"],
    ["Pune to Pandharpur Cab", "/pune-to-pandharpur-cab"],
    ["Pune to Grishneshwar Jyotirlinga Cab", "/pune-to-grishneshwar-jyotirlinga-cab"],
    ["Pune to Mumbai Cabs", "/pune-to-mumbai-cabs"],
    ["Innova Crysta On Rent in Pune", "/innova-crysta-on-rent-in-pune"],
    ["Ertiga Hire in Pune", "/ertiga-hire-in-pune"],
    ["Pune to Shrivardhan Cab", "/pune-to-shrivardhan-cab"],
    ["Pune to Jyotiba Cab", "/pune-to-jyotiba-cab"],
    ["Pune to Shirdi Cab", "/pune-to-shirdi-cab"],
    ["Sedan Cab Service", "/sedan-cab-service"],
    ["Hyundai Xcent Cabs in Pune", "/hyundai-xcent-cabs-in-pune"],
    ["Swift Dzire On Rent in Pune", "/swift-dzire-on-rent-in-pune"],
    ["Aura Cab Service in Pune", "/aura-cab-service-in-pune"],
    ["Pune Darshan Sedan Cab Booking", "/pune-darshan-sedan-cab-booking"],
    ["Pune to Ayodhya Tour Package", "/pune-to-ayodhya-tour-package"],
    ["Pune to Mahabaleshwar Sedan Cab", "/pune-to-mahabaleshwar-sedan-cab"],
    ["Pune Airport Cab Sedan Service", "/pune-airport-cab-sedan-service"],
    ["Pune to Shirdi Sedan Cabs", "/pune-to-shirdi-sedan-cabs"],
    ["Sedan Cab Booking Pune", "/sedan-cab-booking-pune"],
    ["Pune Hyundai Aura Cab", "/pune-hyundai-aura-cab"],
  ],
  [
    ["Pune to Lonavala Sedan Cabs", "/pune-to-lonavala-sedan-cabs"],
    ["Online Sedan Cab Booking Pune", "/online-sedan-cab-booking-pune"],
    ["Pune to Vidarbha Cab Service", "/pune-to-vidarbha-cab-service"],
    ["Pune to Hyderabad Cab", "/pune-to-hyderabad-cab"],
    ["Pune to Ujjain Cab", "/pune-to-ujjain-cab"],
    ["Corporate Cab Service Pune", "/corporate-cab-service-pune"],
    ["Pune Railway Station Cab Service", "/pune-railway-station-cab-service"],
    ["Cheap Cab Service in Pune", "/cheap-cab-service-in-pune"],
    ["Online Cab Booking Pune", "/online-cab-booking-pune"],
    ["Pune to Bangalore Cab", "/pune-to-bangalore-cab"],
    ["Pune to Gujarat Cab Service", "/pune-to-gujarat-cab-service"],
    ["Pune to Nagpur Cab", "/pune-to-nagpur-cab"],
    ["Pune to Ahmednagar Cab", "/pune-to-ahmednagar-cab"],
    ["Pune to Latur Cab", "/pune-to-latur-cab"],
    ["Pune to Mumbai Darshan Cab", "/pune-to-mumbai-darshan-cab"],
    ["Pune to Satara Cab", "/pune-to-satara-cab"],
    ["Pune to Sangli Cab", "/pune-to-sangli-cab"],
    ["Pune to Solapur Cab", "/pune-to-solapur-cab"],
    ["Pune Airport Cab", "/pune-airport-cab"],
    ["Pune to Outstation Cabs", "/pune-to-outstation-cabs"],
    ["Pune to Rajasthan Cab", "/pune-to-rajasthan-cab"],
    ["Pune to Sambhajinagar Cab", "/pune-to-sambhajinagar-cab"],
    ["Pune to Dhule Cab", "/pune-to-dhule-cab"],
    ["Pune to Jalna Cab", "/pune-to-jalna-cab"],
    ["Innova Crysta On Rent Pune", "/innova-crysta-on-rent-pune"],
    ["Pune to Telangana Cab", "/pune-to-telangana-cab"],
    ["Pune to Indore Cab", "/pune-to-indore-cab"],
    ["Pune Taxi Service", "/pune-taxi-service"],
    ["Best Cab Service in Pune", "/best-cab-service-in-pune"],
    ["Pune One Way Cab Service", "/pune-one-way-cab-service"],
    ["Pune Local and Outstation Cab", "/pune-local-and-outstation-cab"],
    ["Pune to Jalgaon Cab Service", "/pune-to-jalgaon-cab-service"],
    ["Pune to Thane Cab", "/pune-to-thane-cab"],
    ["Pune to Panvel Cabs", "/pune-to-panvel-cabs"],
    ["Pune to Nanded Cab Service", "/pune-to-nanded-cab-service"],
    ["Pune to Surat Cab", "/pune-to-surat-cab"],
    ["Pune to Ahmedabad Cab", "/pune-to-ahmedabad-cab"],
    ["Pune to Mahabaleshwar Taxi", "/pune-to-mahabaleshwar-taxi"],
  ],
  [
    ["Pune to Igatpuri Taxi", "/pune-to-igatpuri-taxi"],
    ["Pune to Tamhini Ghat Cab", "/pune-to-tamhini-ghat-cab"],
    ["Pune to Trimbakeshwar Cab Service", "/pune-to-trimbakeshwar-cab-service"],
    ["Pune to Ashtavinayak Darshan Cab", "/pune-to-ashtavinayak-darshan-cab"],
    ["Pune to Jejuri Cab Service", "/pune-to-jejuri-cab-service"],
    ["Pune to Aundha Nagnath Cab", "/pune-to-aundha-nagnath-cab"],
    ["Pune to Konkan Darshan Cab", "/pune-to-konkan-darshan-cab"],
    ["Mumbai Airport to Pune Cab", "/mumbai-airport-to-pune-cab"],
    ["Mumbai Airport Cab Service", "/mumbai-airport-cab-service"],
    ["Navi Mumbai Airport Cab", "/navi-mumbai-airport-cab"],
    ["Cab Service in Navi Mumbai", "/cab-service-in-navi-mumbai"],
    ["Innova Crysta On Rent in Mumbai", "/innova-crysta-on-rent-in-mumbai"],
    ["Ertiga On Rent in Mumbai", "/ertiga-on-rent-in-mumbai"],
    ["Mumbai to Mahabaleshwar Cab", "/mumbai-to-mahabaleshwar-cab"],
    ["Cab Service in Thane", "/cab-service-in-thane"],
    ["Mumbai to Goa Cab", "/mumbai-to-goa-cab"],
    ["Cab Service in Pimpri Chinchwad", "/cab-service-in-pimpri-chinchwad"],
    ["Pune Innova Cabs", "/pune-innova-cabs"],
    ["Best Outstation Cab Service in Pune", "/best-outstation-cab-service-in-pune"],
    ["Pune to Panchgani Cabs", "/pune-to-panchgani-cabs"],
    ["Hinjewadi Cab Service", "/hinjewadi-cab-service"],
    ["Navi Mumbai International Airport Cabs", "/navi-mumbai-international-airport-cabs"],
    ["Cab Service in Kharadi", "/cab-service-in-kharadi"],
    ["Cab Service in Wagholi", "/cab-service-in-wagholi"],
    ["Cab Service in Mundhwa", "/cab-service-in-mundhwa"],
    ["Cab Service in Kalyani Nagar", "/cab-service-in-kalyani-nagar"],
    ["Cab Service in Kothrud", "/cab-service-in-kothrud"],
    ["Pune to Ahilyanagar Cabs", "/pune-to-ahilyanagar-cabs"],
    ["Pune to Shirdi Cab Charges", "/pune-to-shirdi-cab-charges"],
    ["One Way Cab Pune to Mumbai", "/one-way-cab-pune-to-mumbai"],
    ["Pune to Mumbai International Airport Cab", "/pune-to-mumbai-international-airport-cab"],
    ["Virendra Cabs Services Pune", "/virendra-cabs-services-pune"],
    ["Taxi Service in Pune", "/taxi-service-in-pune"],
    ["Cheapest Cab Service in Pune", "/cheapest-cab-service-in-pune"],
    ["Cab Service in Ravet Pune", "/cab-service-in-ravet-pune"],
    ["Cab Booking in Pune", "/cab-booking-in-pune"],
    ["Wedding Car Rental Pune", "/wedding-car-rental-pune"],
  ],
];

const Footer = () => {
  return (
    <footer className="footer footer-four pt-4 m-0 p-0">

      {/* Footer Top */}
      <div className="footer-top aos" data-aos="fade-up">
        <div className="container m0 p-0">
          <div className="row">

            {/* Footer Contact */}
            <div className="col-lg-3">
              <div className="footer-contact footer-widget">

                <div className="footer-logo mb-3">
                  <img
                    src="/images/logo.jpg"
                    className="img-fluid aos"
                    alt="Virendra Cabs Logo"
                  />
                </div>

                <div className="footer-contact-info">
                  <p className="text-white">
                    Virendra Cabs provides reliable and comfortable
                    cab services in Pune and across Maharashtra
                    for family trips, corporate travel, weddings,
                    airport transfers, local sightseeing,
                    and outstation journeys.
                  </p>

                  {/* Phone */}
                  <p className="d-flex align-items-center mb-2">
                    <i
                      className="fas fa-phone-alt me-2"
                      style={{ color: "#CF191F" }}
                    ></i>

                    <a
                      href="tel:+919022549022"
                      style={{
                        color: "#fff",
                        textDecoration: "none",
                      }}
                    >
                      +91 9022549022
                    </a>
                  </p>

                  {/* Address */}
                  <div className="text-white mb-3">
                    <h6 className="text-white">
                      <i
                        className="fas fa-map-marker-alt me-2"
                        style={{ color: "#CF191F" }}
                      ></i>
                      Virendra Cabs
                    </h6>

                    <p className="text-white">
                      Office No.5, 3rd Floor,
                      Kahitij Apartment, Kaspate Wasti,
                      Wakad Pune, Maharashtra - 411057
                    </p>
                  </div>
                </div>

                {/* Google Map */}
                <iframe
                  title="Virendra Cabs Location"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1876.062957050103!2d73.77314913130665!3d18.597322609686465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDM1JzUwLjQiTiA3M8KwNDYnMjkuNCJF!5e1!3m2!1sen!2sin!4v1793275272067!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>

                {/* Social Media */}
                <ul className="d-flex gap-3 mt-3 p-0 list-unstyled">
                  <li>
                    <a
                      href="https://www.instagram.com/virendracabs/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram text-white"></i>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.facebook.com/profile.php?id=61595689545132"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Facebook"
                    >
                      <i className="fab fa-facebook-f text-white"></i>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://x.com/virendracabs"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Twitter"
                    >
                      <i className="fab fa-twitter text-white"></i>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.pinterest.com/virendracabs/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Pinterest"
                    >
                      <i className="fab fa-pinterest-p text-white"></i>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://youtu.be/6AWZG1Og498"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="YouTube"
                    >
                      <i className="fab fa-youtube text-white"></i>
                    </a>
                  </li>
                </ul>

              </div>
            </div>

            {/* Footer Services */}
            <div className="col-lg-9">
              <div className="row">

                {serviceColumns.map((services, columnIndex) => (
                  <div
                    className="col-lg-4 col-md-6"
                    key={columnIndex}
                  >
                    <div className="footer-widget footer-menu">

                      <h5 className="footer-title">
                        Our Services
                      </h5>

                      {/* Independent Scrollable List */}
                      <ul
                        className="p-0 footer-service-scroll"
                        aria-label={`Our Services Column ${columnIndex + 1}`}
                      >
                        {services.map(([name, path]) => (
                          <li key={path}>
                            <Link to={path}>
                              <i className="fa-solid fa-taxi darkcolor"></i>
                              {" "}
                              {name}
                            </Link>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="copyright">
            <div className="row align-items-center row-gap-3 text-center">
              <div className="col-12">

                <p className="copyright-text text-white">
                  All Rights Reserved &copy;{" "}

                  <span className="darkcolorrr">
                    Virendra Cabs
                  </span>{" "}

                  <span id="date">
                    {new Date().getFullYear()}
                  </span>{" "}

                  <span>Developed By </span>

                  <a
                    href="https://www.dexterintelligence.com/"
                    className="d-inline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="darkcolorrr">
                      &nbsp;Dexter Intelligence
                    </span>
                  </a>

                  {" | Hosted By "}

                  <a
                    href="https://www.urvahosting.com/"
                    className="d-inline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="darkcolorrr">
                      &nbsp;Urva Hosting
                    </span>
                  </a>
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
