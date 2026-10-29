import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer footer-four pt-4 m-0 p-0">
      {/* Footer Top */}
      <div className="footer-top aos" data-aos="fade-up p-0 m-0 w-100">
        <div className="container m0 p-0">
          <div className="row">
            {/* Footer Contact */}
       <div className="col-lg-3">
  <div className="footer-contact footer-widget">
    <div className="footer-logo mb-3">
      <img src="/images/logo.jpg" className="img-fluid aos" alt="logo" />
    </div>

    <div className="footer-contact-info">
      <p className="text-white">
        Virendra Cabs provides reliable and comfortable cab services in Pune and across Maharashtra for family trips, corporate travel, weddings, airport transfers, local sightseeing, and outstation journeys.
      </p>

      {/* Phone */}

   <p className="d-flex align-items-center mb-2">
        <i className="fas fa-phone-alt me-2" style={{ color: "#CF191F" }}></i>
        <a href="tel:+919022549022 " style={{ color: "#fff", textDecoration: "none" }}>+91 9022549022 </a>
      </p>
      {/* Address */}
      <p className="d-fle align-items-start text-white">
        
        <h6 className="text-white"><i className="fas fa-map-marker-alt me-2 mt-1 text-white" style={{ color: "#CF191F" }}></i>Virendra Cabs</h6>
        
                  Office No.5, 3rd Floor                 
                  Kahitij Apartment, Kaspate Wasti,
                  Wakad Pune, Maharashtra- 411057 

      </p>



      
    </div>
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5757.9817211650125!2d73.8899227!3d18.6820154!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c9001b8c003b%3A0xb16b90e74a55080e!2z4KSV4KWD4KSq4KS-4KSV4KWB4KSC4KScICjgpIngpK7gpYfgpLYg4KSu4KS54KS-4KSw4KS-4KScIOCkpuCktuCksOCkpeClhyk!5e1!3m2!1sen!2sin!4v1789301541475!5m2!1sen!2sin" width="100%"
            height="250" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
  
      




    <li className="d-flex gap-3">
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram text-white"></i>
              </a>

              <a href="https://www.facebook.com/prof" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f text-white"></i>
              </a>

              <a href="https://x.com/" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter text-white"></i>
              </a>

               <a href="https://in.pinterest.com//" target="_blank" rel="noreferrer">
                <i className="fab fa-pinterest-p text-white"></i>
              </a>
            </li>
  </div>
</div>

            {/* Footer Menus */}
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="footer-widget footer-menu">
                    <h5 className="footer-title">Our Services</h5>
                    <ul  className="p-0">
            

<li><Link to="/pune-to-mumbai-airport-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Mumbai Airport Cab</Link></li>
<li><Link to="/pune-to-outstations-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Outstations Cabs</Link></li>
<li><Link to="/pune-to-mahabaleshwar-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Mahabaleshwar Cab</Link></li>
<li><Link to="/pune-to-lonavala-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Lonavala Cab</Link></li>
<li><Link to="/pune-to-matheran-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Matheran Cabs</Link></li>
<li><Link to="/pune-to-5-jyotirlinga-darshan-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to 5 Jyotirlinga Darshan Cab</Link></li>
<li><Link to="/pune-to-bhimashankar-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Bhimashankar Cab</Link></li>
<li><Link to="/pune-to-aurangabad-cab-service"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Aurangabad Cab Service</Link></li>
<li><Link to="/pune-to-nashik-cab-service"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Nashik Cab Service</Link></li>
<li><Link to="/pune-to-kolhapur-cab-service"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Kolhapur Cab Service</Link></li>
<li><Link to="/pune-to-alibaug-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Alibaug Cab</Link></li>
<li><Link to="/pune-to-goa-cab-service"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Goa Cab Service</Link></li>
<li><Link to="/goa-to-pune-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Goa to Pune Cabs</Link></li>
<li><Link to="/innova-crysta-cab-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Innova Crysta Cab in Pune</Link></li>
<li><Link to="/ertiga-on-rent-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Ertiga On Rent in Pune</Link></li>
<li><Link to="/pune-to-ashtavinayak-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Ashtavinayak Cabs</Link></li>
<li><Link to="/pune-to-goa-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Goa Cabs</Link></li>
<li><Link to="/pune-to-jyotirlinga-darshan-package"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Jyotirlinga Darshan Package</Link></li>
<li><Link to="/pune-to-akkalkot-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Akkalkot Cabs</Link></li>
<li><Link to="/pune-to-pandharpur-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Pandharpur Cab</Link></li>
<li><Link to="/pune-to-grishneshwar-jyotirlinga-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Grishneshwar Jyotirlinga Cab</Link></li>
<li><Link to="/pune-to-mumbai-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Mumbai Cabs</Link></li>
<li><Link to="/innova-crysta-on-rent-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Innova Crysta On Rent in Pune</Link></li>
<li><Link to="/ertiga-hire-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Ertiga Hire in Pune</Link></li>
<li><Link to="/pune-to-shrivardhan-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Shrivardhan Cab</Link></li>
<li><Link to="/pune-to-jyotiba-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Jyotiba Cab</Link></li>
<li><Link to="/pune-to-shirdi-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Shirdi Cab</Link></li>
<li><Link to="/sedan-cab-service"><i className="fa-solid fa-taxi darkcolor"></i> Sedan Cab Service</Link></li>
<li><Link to="/hyundai-xcent-cabs-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Hyundai Xcent Cabs in Pune</Link></li>
<li><Link to="/swift-dzire-on-rent-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Swift Dzire On Rent in Pune</Link></li>
                  <li><Link to="/aura-cab-service-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Aura Cab Service in Pune</Link></li>
<li><Link to="/pune-darshan-sedan-cab-booking"><i className="fa-solid fa-taxi darkcolor"></i> Pune Darshan Sedan Cab Booking</Link></li>
<li><Link to="/pune-to-ayodhya-tour-package"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Ayodhya Tour Package</Link></li>
<li><Link to="/pune-to-mahabaleshwar-sedan-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Mahabaleshwar Sedan Cab</Link></li>
<li><Link to="/pune-airport-cab-sedan-service"><i className="fa-solid fa-taxi darkcolor"></i> Pune Airport Cab Sedan Service</Link></li>
<li><Link to="/pune-to-shirdi-sedan-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Shirdi Sedan Cabs</Link></li>
<li><Link to="/sedan-cab-booking-pune"><i className="fa-solid fa-taxi darkcolor"></i> Sedan Cab Booking Pune</Link></li>
<li><Link to="/pune-hyundai-aura-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune Hyundai Aura Cab</Link></li>

                  
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="footer-widget footer-menu">
                    <h5 className="footer-title">Our Services</h5>
  <ul className="p-0">
<li><Link to="/pune-to-lonavala-sedan-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Lonavala Sedan Cabs</Link></li>
<li><Link to="/online-sedan-cab-booking-pune"><i className="fa-solid fa-taxi darkcolor"></i> Online Sedan Cab Booking Pune</Link></li>
<li><Link to="/pune-to-vidarbha-cab-service"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Vidarbha Cab Service</Link></li>
<li><Link to="/pune-to-hyderabad-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Hyderabad Cab</Link></li>
<li><Link to="/pune-to-ujjain-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Ujjain Cab</Link></li>
<li><Link to="/corporate-cab-service-pune"><i className="fa-solid fa-taxi darkcolor"></i> Corporate Cab Service Pune</Link></li>
<li><Link to="/pune-railway-station-cab-service"><i className="fa-solid fa-taxi darkcolor"></i> Pune Railway Station Cab Service</Link></li>
<li><Link to="/cheap-cab-service-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Cheap Cab Service in Pune</Link></li>
<li><Link to="/online-cab-booking-pune"><i className="fa-solid fa-taxi darkcolor"></i> Online Cab Booking Pune</Link></li>
<li><Link to="/pune-to-bangalore-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Bangalore Cab</Link></li>
<li><Link to="/pune-to-gujarat-cab-service"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Gujarat Cab Service</Link></li>
<li><Link to="/pune-to-nagpur-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Nagpur Cab</Link></li>
<li><Link to="/pune-to-ahmednagar-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Ahmednagar Cab</Link></li>
<li><Link to="/pune-to-latur-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Latur Cab</Link></li>
<li><Link to="/pune-to-mumbai-darshan-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Mumbai Darshan Cab</Link></li>
<li><Link to="/pune-to-satara-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Satara Cab</Link></li>
<li><Link to="/pune-to-sangli-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Sangli Cab</Link></li>
<li><Link to="/pune-to-solapur-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Solapur Cab</Link></li>
<li><Link to="/pune-airport-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune Airport Cab</Link></li>
<li><Link to="/pune-to-outstation-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Outstation Cabs</Link></li>
<li><Link to="/pune-to-rajasthan-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Rajasthan Cab</Link></li>
<li><Link to="/pune-to-sambhajinagar-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Sambhajinagar Cab</Link></li>
<li><Link to="/pune-to-dhule-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Dhule Cab</Link></li>
<li><Link to="/pune-to-jalna-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Jalna Cab</Link></li>
<li><Link to="/innova-crysta-on-rent-pune"><i className="fa-solid fa-taxi darkcolor"></i> Innova Crysta On Rent Pune</Link></li>
<li><Link to="/pune-to-telangana-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Telangana Cab</Link></li>
<li><Link to="/pune-to-indore-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Indore Cab</Link></li>
<li><Link to="/pune-taxi-service"><i className="fa-solid fa-taxi darkcolor"></i> Pune Taxi Service</Link></li>
<li><Link to="/best-cab-service-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Best Cab Service in Pune</Link></li>
<li><Link to="/pune-one-way-cab-service"><i className="fa-solid fa-taxi darkcolor"></i> Pune One Way Cab Service</Link></li>
<li><Link to="/pune-local-and-outstation-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune Local and Outstation Cab</Link></li>
<li><Link to="/pune-to-jalgaon-cab-service"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Jalgaon Cab Service</Link></li>
                  <li><Link to="/pune-to-thane-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Thane Cab</Link></li>
<li><Link to="/pune-to-panvel-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Panvel Cabs</Link></li>

<li><Link to="/pune-to-nanded-cab-service"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Nanded Cab Service</Link></li>

<li><Link to="/pune-to-surat-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Surat Cab</Link></li>

<li><Link to="/pune-to-ahmedabad-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Ahmedabad Cab</Link></li>
<li><Link to="/pune-to-mahabaleshwar-taxi"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Mahabaleshwar Taxi</Link></li>

                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="footer-widget footer-menu">
                    <h5 className="footer-title">Our Services</h5>
                    <ul className="p-0">
<li><Link to="/pune-to-igatpuri-taxi"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Igatpuri Taxi</Link></li>
<li><Link to="/pune-to-tamhini-ghat-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Tamhini Ghat Cab</Link></li>
<li><Link to="/pune-to-trimbakeshwar-cab-service"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Trimbakeshwar Cab Service</Link></li>
<li><Link to="/pune-to-ashtavinayak-darshan-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Ashtavinayak Darshan Cab</Link></li>
<li><Link to="/pune-to-jejuri-cab-service"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Jejuri Cab Service</Link></li>
<li><Link to="/pune-to-aundha-nagnath-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Aundha Nagnath Cab</Link></li>
<li><Link to="/pune-to-konkan-darshan-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Konkan Darshan Cab</Link></li>
<li><Link to="/mumbai-airport-to-pune-cab"><i className="fa-solid fa-taxi darkcolor"></i> Mumbai Airport to Pune Cab</Link></li>
<li><Link to="/mumbai-airport-cab-service"><i className="fa-solid fa-taxi darkcolor"></i> Mumbai Airport Cab Service</Link></li>
<li><Link to="/navi-mumbai-airport-cab"><i className="fa-solid fa-taxi darkcolor"></i> Navi Mumbai Airport Cab</Link></li>
<li><Link to="/cab-service-in-navi-mumbai"><i className="fa-solid fa-taxi darkcolor"></i> Cab Service in Navi Mumbai</Link></li>
<li><Link to="/innova-crysta-on-rent-in-mumbai"><i className="fa-solid fa-taxi darkcolor"></i> Innova Crysta On Rent in Mumbai</Link></li>
<li><Link to="/ertiga-on-rent-in-mumbai"><i className="fa-solid fa-taxi darkcolor"></i> Ertiga On Rent in Mumbai</Link></li>
<li><Link to="/mumbai-to-mahabaleshwar-cab"><i className="fa-solid fa-taxi darkcolor"></i> Mumbai to Mahabaleshwar Cab</Link></li>
<li><Link to="/cab-service-in-thane"><i className="fa-solid fa-taxi darkcolor"></i> Cab Service in Thane</Link></li>
<li><Link to="/mumbai-to-goa-cab"><i className="fa-solid fa-taxi darkcolor"></i> Mumbai to Goa Cab</Link></li>
<li><Link to="/cab-service-in-pimpri-chinchwad"><i className="fa-solid fa-taxi darkcolor"></i> Cab Service in Pimpri Chinchwad</Link></li>
<li><Link to="/pune-innova-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Pune Innova Cabs</Link></li>
<li><Link to="/best-outstation-cab-service-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Best Outstation Cab Service in Pune</Link></li>
<li><Link to="/pune-to-panchgani-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Panchgani Cabs</Link></li>
<li><Link to="/hinjewadi-cab-service"><i className="fa-solid fa-taxi darkcolor"></i> Hinjewadi Cab Service</Link></li>
<li><Link to="/navi-mumbai-international-airport-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Navi Mumbai International Airport Cabs</Link></li>
<li><Link to="/cab-service-in-kharadi"><i className="fa-solid fa-taxi darkcolor"></i> Cab Service in Kharadi</Link></li>
<li><Link to="/cab-service-in-wagholi"><i className="fa-solid fa-taxi darkcolor"></i> Cab Service in Wagholi</Link></li>
<li><Link to="/cab-service-in-mundhwa"><i className="fa-solid fa-taxi darkcolor"></i> Cab Service in Mundhwa</Link></li>
<li><Link to="/cab-service-in-kalyani-nagar"><i className="fa-solid fa-taxi darkcolor"></i> Cab Service in Kalyani Nagar</Link></li>
<li><Link to="/cab-service-in-kothrud"><i className="fa-solid fa-taxi darkcolor"></i> Cab Service in Kothrud</Link></li>
<li><Link to="/pune-to-ahilyanagar-cabs"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Ahilyanagar Cabs</Link></li>
<li><Link to="/pune-to-shirdi-cab-charges"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Shirdi Cab Charges</Link></li>
<li><Link to="/one-way-cab-pune-to-mumbai"><i className="fa-solid fa-taxi darkcolor"></i> One Way Cab Pune to Mumbai</Link></li>
<li><Link to="/pune-to-mumbai-international-airport-cab"><i className="fa-solid fa-taxi darkcolor"></i> Pune to Mumbai International Airport Cab</Link></li>
<li><Link to="/virendra-cabs-services-pune"><i className="fa-solid fa-taxi darkcolor"></i> Virendra Cabs Services Pune</Link></li>
<li><Link to="/taxi-service-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Taxi Service in Pune</Link></li>
<li><Link to="/cheapest-cab-service-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Cheapest Cab Service in Pune</Link></li>
<li><Link to="/cab-service-in-ravet-pune"><i className="fa-solid fa-taxi darkcolor"></i> Cab Service in Ravet Pune</Link></li>
<li><Link to="/cab-booking-in-pune"><i className="fa-solid fa-taxi darkcolor"></i> Cab Booking in Pune</Link></li>
<li><Link to="/wedding-car-rental-pune"><i className="fa-solid fa-taxi darkcolor"></i> Wedding Car Rental Pune</Link></li>
        </ul>
                  </div>
                </div>
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
              All Rights Reserved &copy;  <span className="darkcolorrr">Virendra Cabs</span> <span id="date">{new Date().getFullYear()}</span>{' '}
                <span href="#"> Developed By </span> <a href="https://www.dexterintelligence.com/" className='d-inline' target="_blank" rel="noopener noreferrer">
                <span className="darkcolorrr">&nbsp;Dexter Intelligence</span>
              </a> | Hosted By <a href="https://www.urvahosting.com/" className='d-inline ' target="_blank" rel="noopener noreferrer">
                <span className="darkcolorrr">&nbsp;Urva Hosting</span>
              </a>
              </p>
              </div>
              {/* <div className="col-lg-4">
                <div className="payment-list">
                  <a href="javascript:void(0);">
                    <img src="/img/icons/payment-01.svg" alt="img" />
                  </a>
                  <a href="javascript:void(0);">
                    <img src="/img/icons/payment-02.svg" alt="img" />
                  </a>
                  <a href="javascript:void(0);">
                    <img src="/img/icons/payment-03.svg" alt="img" />
                  </a>
                </div>
              </div> */}
              {/* <div className="col-lg-4">
                <ul className="privacy-link">
                  <li><a href="privacy-policy.html">Privacy</a></li>
                  <li><a href="terms-condition.html">Terms & Condition</a></li>
                  <li><a href="javascript:void(0);">Refund Policy</a></li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


