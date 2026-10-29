
import React from 'react';
import BusRatesTable from './BusRatesTable';


const Packages = () => {
  return (
   <div>



       <section className="vir-breadcrumb-hero">
  <div className="vir-breadcrumb-container">
    <div className="vir-breadcrumb-content">
      <span className="vir-breadcrumb-label">
        VIRENDRA CABS
      </span>

      <h1>Packages</h1>
    </div>
  </div>

  <div className="vir-breadcrumb-bottom-line" />
</section>








       


    {/* <CabRatesTable/> */}
<BusRatesTable/>

<div className="rules-guidelines container">
  {/* <ul className="rules-list">
  <li>  Driver Allowance will charge extra.</li>
  <li>  Cab running km is limited to 300 km per day.</li>
  <li>  Time starts from 6:00 AM to 10:00 PM, and the cab must be free at 10:00 PM. After 10:00 PM, extra charges apply. Night charges apply from 12:00 AM to 6:00 AM.</li>
  <li>  Time and km will be calculated from our office to office.</li>
  <li>  Interstate taxes, toll taxes, parking, and service tax are charged as actuals.</li>
  <li>  Extra charges will apply for extra km and hours. Government taxes will be charged as per government rules.</li>
  <li>  The charges quoted above are calculated based on the current fuel prices. Any hike in fuel prices will result in a variation in rates.</li>
</ul> */}
<div className="rules-section">
  <h4 className="rules-title">Rules & Guidelines</h4>


<ul className="rules-list">
  <li>
    <span className="dot">✔</span>
    Driver allowance will be charged extra.
  </li>

  <li>
    <span className="dot">✔</span>
    Cab running limit is 300 km per day.
  </li>

  <li>
    <span className="dot">✔</span>
    Service time is from <b>6:00 AM to 10:00 PM</b>.
    Extra charges apply after 10:00 PM.
    Night charges apply from 12:00 AM to 6:00 AM.
  </li>

  <li>
    <span className="dot">✔</span>
    Time and distance are calculated on an office-to-office basis.
  </li>

  <li>
    <span className="dot">✔</span>
    Toll tax, parking charges, interstate taxes, and applicable taxes will be charged as actuals.
  </li>

  <li>
    <span className="dot">✔</span>
    Extra kilometre and extra hour charges will apply as per usage.
  </li>

  <li>
    <span className="dot">✔</span>
    Fuel price changes may affect the final rental rates.
  </li>
</ul>

</div>

</div>

   </div>
  );
};

export default Packages;
