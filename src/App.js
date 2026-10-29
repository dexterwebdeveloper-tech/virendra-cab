
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from './components/Header';
import HeroSection from './components/HeroSlider';
import AboutSection from './components/AboutSection';
import TermsConditions from './components/TermsConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import ServicesSection from './pages/ServicesSection';
import OurFleets from './pages/OurFleets';
import ContactInfo from './pages/ContactInfo';
import Enquiry from './pages/Enquiry';
import Career from './components/Career';
import Gallery from './pages/Gallery';
import OnlinePayment from './components/OnlinePayment';
import Packages from './pages/Packages';
import Footer from './components/Footer';
import Punetomumbaiairportcabs from './pages/Pune to Mumbai Airport Cab';
import ScrollToTop from './components/ScrollToTop';
import Puneoutstaationcabs from './pages/Pune to Outstations Cabs';
import Punetomahabaleshwarcab from './pages/Pune to Mahabaleshwar Cab';
import Punetolonavalacab from './pages/Pune to Lonavala Cab';
import Punetomatherancabs from './pages/Pune to Matheran Cabs';
import Punetofivejyotilingadarshancab from './pages/Pune to 5 Jyotirlinga Darshan Cab';
import Punetobhimashankarcab from './pages/Pune to Bhimashankar Cab';
import Punetoaurangabadcabservice from './pages/Pune to Aurangabad Cab Service';
import Punetonashikcabservice from './pages/Pune to Nashik Cab Service';
import Punetokolhapurcab from './pages/Pune to Kolhapur Cab Service';
import Punetoalibaugcab from './pages/Pune to Alibaug Cab';
import Punetogoacabservice from './pages/Pune to Goa Cab Service';
import Goatopunecabservice from './pages/Goa to Pune Cabs';
import Innovacrystacabinpune from './pages/Innova Crysta Cab in Pune';
import Ertigaonrentinpune from './pages/Ertiga On Rent in Pune';
import Punetoashtavinayakcabs from './pages/Pune to Ashtavinayak Cabs';
import Punetogoacabs from './pages/Pune to Goa Cabs';
import Punetojnyotilingadarshancab from './pages/Pune to Jyotirlinga Darshan Package';
import Punetoakkalkotcabs from './pages/Pune to Akkalkot Cabs';
import Punetopandharcabs from './pages/Pune to Pandharpur Cab';
import Punetogrishneshwarcabs from './pages/Pune to Grishneshwar Jyotirlinga Cab';
import Punetomumbaicabs from './pages/Pune to Mumbai Cabs';
import Innovacrystaonrentinpune from './pages/Innova Crysta On Rent in Pune';
import Ertigahireinpune from './pages/Ertiga Hire in Pune';
import Punetoshrivardhancab from './pages/Pune to Shrivardhan Cab';
import Punetojyotibacab from './pages/Pune to Jyotiba Cab';
import Punetoshirdicab from './pages/Pune to Shirdi Cab';
import Sedancabservice from './pages/Sedan Cab Service';
import Hyundaixcentcabinpune from './pages/Hyundai Xcent Cabs in Pune';
import Swiftdzireonrentinpune from './pages/Swift Dzire On Rent in Pune';
import Auracabserviceipune from './pages/Aura Cab Service in Pune';
import Punedarshansedancab from './pages/Pune Darshan Sedan Cab Booking';
import Punetoayodhyatourpacjage from './pages/Pune to Ayodhya Tour Package';
import Punetomahabaleshwarsedan from './pages/Pune to Mahabaleshwar Sedan Cab';
import Puneairportcabsedan from './pages/Pune Airport Cab Sedan Service';
import Punetoshirdisedancabs from './pages/Pune to Shirdi Sedan Cabs';
import Sedancabbookingpune from './pages/Sedan Cab Booking Pune';
import Punehyundaiauracab from './pages/Pune Hyundai Aura Cab';
import Punetolonavalacabsedan from './pages/Pune to Lonavala Sedan Cabs';
import Onlinesedancabbookingpune from './pages/Online Sedan Cab Booking Pune';
import Punetovidhrabhcabservice from './pages/Pune to Vidarbha Cab Service';
import Punetohyderabadcab from './pages/Pune to Hyderabad Cab';
import Punetoujjainccab from './pages/Pune to Ujjain Cab';
import Corporatecabservicepune from './pages/Corporate Cab Service Pune';
import Punerailwaystationcab from './pages/Pune Railway Station Cab Service';
import Cheapcabserviceinpune from './pages/Cheap Cab Service in Pune';
import Onlinecabbookingpune from './pages/Online Cab Booking Pune';
import Punetobanglorecab from './pages/Pune to Bangalore Cab';
import Punetogujratcab from './pages/Pune to Gujarat Cab Service';
import Punetonagpurcab from './pages/Pune to Nagpur Cab';
import Punetoahmednagaracab from './pages/Pune to Ahmednagar Cab';
import Punetolaturcab from './pages/Pune to Latur Cab';
import Punetomumbaidarshancab from './pages/Pune to Mumbai Darshan Cab';
import Punetosataracab from './pages/Pune to Satara Cab';
import Punetosanglicab from './pages/Pune to Sangli Cab';
import Punetosolapurcab from './pages/Pune to Solapur Cab';
import Puneairportcab from './pages/Pune Airport Cab';
import Puneoutstationcabs from './pages/Pune to Outstation Cabs';
import Punetoeajsthancab from './pages/Pune to Rajasthan Cab';
import Punetosambhajinagar from './pages/Pune to Sambhajinagar Cab';
import Punetodhulecabs from './pages/Pune to Dhule Cab';
import Punetojalnacab from './pages/Pune to Jalna Cab';
import Innovacrytstaonrentinpune from './pages/Innova Crysta On Rent Pune';
import Punetotelannganacab from './pages/Pune to Telangana Cab';
import Punetoindorecab from './pages/Pune to Indore Cab';
import Punetaxiservices from './pages/Pune Taxi Service';
import Bestcabserviceinpune from './pages/Best Cab Service in Pune';
import Puneonewaycabservices from './pages/Pune One Way Cab Service';
import Punelocalandoutstationcab from './pages/Pune Local and Outstation Cab';
import Punetojalgaoncabservice from './pages/Pune to Jalgaon Cab Service';
import Punetothanecab from './pages/Pune to Thane Cab';
import Punetopanvelcab from './pages/Pune to Panvel Cabs';
import Punetonandedcab from './pages/Pune to Nanded Cab Service';
import Punetosuratcab from './pages/Pune to Surat Cab';
import Punetoahmedabadcab from './pages/Pune to Ahmedabad Cab';
import Punetomahabaleshwartaxi from './pages/Pune to Mahabaleshwar Taxi';
import Puntolgatpuricab from './pages/Pune to Igatpuri Taxi';
import Punetotamhinighat from './pages/Pune to Tamhini Ghat Cab';
import Punetotrimbkeshwarcab from './pages/Pune to Trimbakeshwar Cab Service';
import Punetoashtavinayakdarshan from './pages/Pune to Ashtavinayak Darshan Cab';
import Punetojejuriservice from './pages/Pune to Jejuri Cab Service';
import Punetoaundhnagnathcab from './pages/Pune to Aundha Nagnath Cab';
import Punetokonkandarshancab from './pages/Pune to Konkan Darshan Cab';
import Mumbaiairporttopunecab from './pages/Mumbai Airport to Pune Cab';
import Mumbaiairportcabservoce from './pages/Mumbai Airport Cab Service';
import Navimumbaiairportcab from './pages/Navi Mumbai Airport Cab';
import Cabserviceinnavimumbai from './pages/Cab Service in Navi Mumbai';
import Innovacrystaonrentinmumbai from './pages/Innova Crysta On Rent in Mumbai';
import Ertigaonrentinmumbai from './pages/Ertiga On Rent in Mumbai';
import Mumbaitomahabaleshwarcab from './pages/Mumbai to Mahabaleshwar Cab';
import Cabserviceinthane from './pages/Cab Service in Thane';
import Mumbaitogoacab from './pages/Mumbai to Goa Cab';
import Cabserviceinpimprichichwad from './pages/Cab Service in Pimpri Chinchwad';
import Puneinnovacabs from './pages/Pune Innova Cabs';
import Bestouttstationcabservice from './pages/Best Outstation Cab Service in Pune';
import Punetopanchganicabs from './pages/Pune to Panchgani Cabs';
import Hinnjewadicabservice from './pages/Hinjewadi Cab Service';
import Navimumbaiinternatinalairport from './pages/Navi Mumbai International Airport Cabs';
import Cabserviceinkharadi from './pages/Cab Service in Kharadi';
import Cabserviceinwagholi from './pages/Cab Service in Wagholi';
import Cabserviceinmundhwa from './pages/Cab Service in Mundhwa';
import Cabserviceinkalyaninagar from './pages/Cab Service in Kalyani Nagar';
import Cabserviceinkothrud from './pages/Cab Service in Kothrud';
import Punetoahilyanagarcabs from './pages/Pune to Ahilyanagar Cabs';
import Punetoshirdicabchange from './pages/Pune to Shirdi Cab Charges';
import Onewaycabpunetomumbai from './pages/One Way Cab Pune to Mumbai';
import Punetomumbaiinternatinal from './pages/Pune to Mumbai International Airport Cab';
import { ViewTransition } from 'react';
import Virendracabservice from './pages/Virendra Cabs Services Pune';
import Taxiserviceinpune from './pages/Taxi Service in Pune';
import Cheapestcabserviceinpune from './pages/Cheapest Cab Service in Pune';
import Cabserviceinravetpune from './pages/Cab Service in Ravet Pune';
import Cabbookinginpune from './pages/Cab Booking in Pune';
import Weddingcarrentaloune from './pages/Wedding Car Rental Pune';
import ContactButtons from './components/ContactButtons';

function App() {
  return (
    <Router>
      <ContactButtons />
      <ScrollToTop />
<Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about-us" element={<AboutSection />} />
        <Route path="/term-condition" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/our-fleet" element={<OurFleets />} />
        <Route path="/contact-us" element={<ContactInfo />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/career" element={<Career />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/Online-Payment" element={<OnlinePayment />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/pune-to-mumbai-airport-cab" element={<Punetomumbaiairportcabs />} />



<Route path="/pune-to-outstations-cabs" element={<Puneoutstaationcabs />} />
<Route path="/pune-to-mahabaleshwar-cab" element={<Punetomahabaleshwarcab />} />
<Route path="/pune-to-lonavala-cab" element={<Punetolonavalacab />} />
<Route path="/pune-to-matheran-cabs" element={<Punetomatherancabs />} />
<Route path="/pune-to-5-jyotirlinga-darshan-cab" element={<Punetofivejyotilingadarshancab />} />
<Route path="/pune-to-bhimashankar-cab" element={<Punetobhimashankarcab />} />
<Route path="/pune-to-aurangabad-cab-service" element={<Punetoaurangabadcabservice />} />
<Route path="/pune-to-nashik-cab-service" element={<Punetonashikcabservice />} />
<Route path="/pune-to-kolhapur-cab-service" element={<Punetokolhapurcab />} />
<Route path="/pune-to-alibaug-cab" element={<Punetoalibaugcab />} />
<Route path="/pune-to-goa-cab-service" element={<Punetogoacabservice />} />
<Route path="/goa-to-pune-cabs" element={<Goatopunecabservice />} />
<Route path="/innova-crysta-cab-in-pune" element={<Innovacrystacabinpune />} />
<Route path="/ertiga-on-rent-in-pune" element={<Ertigaonrentinpune />} />
<Route path="/pune-to-ashtavinayak-cabs" element={<Punetoashtavinayakcabs />} />
<Route path="/pune-to-goa-cabs" element={<Punetogoacabs />} />
<Route path="/pune-to-jyotirlinga-darshan-package" element={<Punetojnyotilingadarshancab />} />
<Route path="/pune-to-akkalkot-cabs" element={<Punetoakkalkotcabs />} />
<Route path="/pune-to-pandharpur-cab" element={<Punetopandharcabs />} />
<Route path="/pune-to-grishneshwar-jyotirlinga-cab" element={<Punetogrishneshwarcabs />} />
<Route path="/pune-to-mumbai-cabs" element={<Punetomumbaicabs />} />
<Route path="/innova-crysta-on-rent-in-pune" element={<Innovacrystaonrentinpune />} />
<Route path="/ertiga-hire-in-pune" element={<Ertigahireinpune />} />
<Route path="/pune-to-shrivardhan-cab" element={<Punetoshrivardhancab />} />
<Route path="/pune-to-jyotiba-cab" element={<Punetojyotibacab />} />
<Route path="/pune-to-shirdi-cab" element={<Punetoshirdicab />} />
<Route path="/sedan-cab-service" element={<Sedancabservice />} />
<Route path="/hyundai-xcent-cabs-in-pune" element={<Hyundaixcentcabinpune />} />
<Route path="/swift-dzire-on-rent-in-pune" element={<Swiftdzireonrentinpune />} />
<Route path="/aura-cab-service-in-pune" element={<Auracabserviceipune />} />
<Route path="/pune-darshan-sedan-cab-booking" element={<Punedarshansedancab />} />
<Route path="/pune-to-ayodhya-tour-package" element={<Punetoayodhyatourpacjage />} />
<Route path="/pune-to-mahabaleshwar-sedan-cab" element={<Punetomahabaleshwarsedan />} />
<Route path="/pune-airport-cab-sedan-service" element={<Puneairportcabsedan/>} />
<Route path="/pune-to-shirdi-sedan-cabs" element={<Punetoshirdisedancabs />} />
<Route path="/sedan-cab-booking-pune" element={<Sedancabbookingpune />} />
<Route path="/pune-hyundai-aura-cab" element={<Punehyundaiauracab />} />



<Route path="/pune-to-lonavala-sedan-cabs" element={<Punetolonavalacabsedan />} />
<Route path="/online-sedan-cab-booking-pune" element={<Onlinesedancabbookingpune />} />
<Route path="/pune-to-vidarbha-cab-service" element={<Punetovidhrabhcabservice />} />
<Route path="/pune-to-hyderabad-cab" element={<Punetohyderabadcab />} />
<Route path="/pune-to-ujjain-cab" element={<Punetoujjainccab />} />
<Route path="/corporate-cab-service-pune" element={<Corporatecabservicepune />} />
<Route path="/pune-railway-station-cab-service" element={<Punerailwaystationcab />} />
<Route path="/cheap-cab-service-in-pune" element={<Cheapcabserviceinpune />} />
<Route path="/online-cab-booking-pune" element={<Onlinecabbookingpune />} />
<Route path="/pune-to-bangalore-cab" element={<Punetobanglorecab />} />
<Route path="/pune-to-gujarat-cab-service" element={<Punetogujratcab />} />
<Route path="/pune-to-nagpur-cab" element={<Punetonagpurcab />} />
<Route path="/pune-to-ahmednagar-cab" element={<Punetoahmednagaracab />} />
<Route path="/pune-to-latur-cab" element={<Punetolaturcab />} />
<Route path="/pune-to-mumbai-darshan-cab" element={<Punetomumbaidarshancab />} />
<Route path="/pune-to-satara-cab" element={<Punetosataracab />} />
<Route path="/pune-to-sangli-cab" element={<Punetosanglicab />} />
<Route path="/pune-to-solapur-cab" element={<Punetosolapurcab />} />
<Route path="/pune-airport-cab" element={<Puneairportcab />} />
<Route path="/pune-to-outstation-cabs" element={<Puneoutstationcabs />} />
<Route path="/pune-to-rajasthan-cab" element={<Punetoeajsthancab />} />
<Route path="/pune-to-sambhajinagar-cab" element={<Punetosambhajinagar />} />
<Route path="/pune-to-dhule-cab" element={<Punetodhulecabs />} />
<Route path="/pune-to-jalna-cab" element={<Punetojalnacab />} />
<Route path="/innova-crysta-on-rent-pune" element={<Innovacrytstaonrentinpune />} />
<Route path="/pune-to-telangana-cab" element={<Punetotelannganacab />} />
<Route path="/pune-to-indore-cab" element={<Punetoindorecab />} />
<Route path="/pune-taxi-service" element={<Punetaxiservices />} />
<Route path="/best-cab-service-in-pune" element={<Bestcabserviceinpune />} />
<Route path="/pune-one-way-cab-service" element={<Puneonewaycabservices />} />
<Route path="/pune-local-and-outstation-cab" element={<Punelocalandoutstationcab />} />
<Route path="/pune-to-jalgaon-cab-service" element={<Punetojalgaoncabservice />} />
<Route path="/pune-to-thane-cab" element={<Punetothanecab />} />









<Route path="/pune-to-panvel-cabs" element={<Punetopanvelcab />} />
<Route path="/pune-to-nanded-cab-service" element={<Punetonandedcab />} />
<Route path="/pune-to-surat-cab" element={<Punetosuratcab />} />
<Route path="/pune-to-ahmedabad-cab" element={<Punetoahmedabadcab />} />
<Route path="/pune-to-mahabaleshwar-taxi" element={<Punetomahabaleshwartaxi />} />
<Route path="/pune-to-igatpuri-taxi" element={<Puntolgatpuricab />} />
<Route path="/pune-to-tamhini-ghat-cab" element={<Punetotamhinighat />} />
<Route path="/pune-to-trimbakeshwar-cab-service" element={<Punetotrimbkeshwarcab />} />
<Route path="/pune-to-ashtavinayak-darshan-cab" element={<Punetoashtavinayakdarshan />} />
<Route path="/pune-to-jejuri-cab-service" element={<Punetojejuriservice />} />
<Route path="/pune-to-aundha-nagnath-cab" element={<Punetoaundhnagnathcab />} />
<Route path="/pune-to-konkan-darshan-cab" element={<Punetokonkandarshancab />} />
<Route path="/mumbai-airport-to-pune-cab" element={<Mumbaiairporttopunecab />} />
<Route path="/mumbai-airport-cab-service" element={<Mumbaiairportcabservoce />} />
<Route path="/navi-mumbai-airport-cab" element={<Navimumbaiairportcab />} />
<Route path="/cab-service-in-navi-mumbai" element={<Cabserviceinnavimumbai />} />
<Route path="/innova-crysta-on-rent-in-mumbai" element={<Innovacrystaonrentinmumbai />} />
<Route path="/ertiga-on-rent-in-mumbai" element={<Ertigaonrentinmumbai />} />
<Route path="/mumbai-to-mahabaleshwar-cab" element={<Mumbaitomahabaleshwarcab />} />
<Route path="/cab-service-in-thane" element={<Cabserviceinthane />} />
<Route path="/mumbai-to-goa-cab" element={<Mumbaitogoacab />} />
<Route path="/cab-service-in-pimpri-chinchwad" element={<Cabserviceinpimprichichwad />} />
<Route path="/pune-innova-cabs" element={<Puneinnovacabs />} />
<Route path="/best-outstation-cab-service-in-pune" element={<Bestouttstationcabservice />} />
<Route path="/pune-to-panchgani-cabs" element={<Punetopanchganicabs />} />
<Route path="/hinjewadi-cab-service" element={<Hinnjewadicabservice />} />
<Route path="/navi-mumbai-international-airport-cabs" element={<Navimumbaiinternatinalairport />} />
<Route path="/cab-service-in-kharadi" element={<Cabserviceinkharadi />} />
<Route path="/cab-service-in-wagholi" element={<Cabserviceinwagholi />} />
<Route path="/cab-service-in-mundhwa" element={<Cabserviceinmundhwa />} />
<Route path="/cab-service-in-kalyani-nagar" element={<Cabserviceinkalyaninagar />} />
<Route path="/cab-service-in-kothrud" element={<Cabserviceinkothrud />} />
<Route path="/pune-to-ahilyanagar-cabs" element={<Punetoahilyanagarcabs />} />
<Route path="/pune-to-shirdi-cab-charges" element={<Punetoshirdicabchange />} />
<Route path="/one-way-cab-pune-to-mumbai" element={<Onewaycabpunetomumbai />} />
<Route path="/pune-to-mumbai-international-airport-cab" element={<Punetomumbaiinternatinal />} />
<Route path="/virendra-cabs-services-pune" element={<Virendracabservice />} />
<Route path="/taxi-service-in-pune" element={<Taxiserviceinpune />} />
<Route path="/cheapest-cab-service-in-pune" element={<Cheapestcabserviceinpune />} />
<Route path="/cab-service-in-ravet-pune" element={<Cabserviceinravetpune />} />
<Route path="/cab-booking-in-pune" element={<Cabbookinginpune />} />
<Route path="/wedding-car-rental-pune" element={<Weddingcarrentaloune />} />
      </Routes>



      <Footer />
    </Router>
  );
}

export default App;
