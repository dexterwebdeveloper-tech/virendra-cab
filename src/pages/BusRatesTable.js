
import React from "react";

const BusRatesTable = () => {
  const WHATSAPP_NUMBER = "919022549022";

  const ratesData = [
    {
      vehicle: "Swift Dzire",
      type: "Sedan",
      seating: "4+1 Seater",
      rate: "12/KM",
      driver: "Extra",
      parking: "Extra",
    },
    {
      vehicle: "Maruti Ertiga",
      type: "SUV",
      seating: "6+1 Seater",
      rate: "14/KM",
      driver: "Extra",
      parking: "Extra",
    },
    {
      vehicle: "Hyundai Aura",
      type: "Sedan",
      seating: "4+1 Seater",
      rate: "12/KM",
      driver: "Extra",
      parking: "Extra",
    },
    {
      vehicle: "Maruti Suzuki Ciaz",
      type: "Sedan",
      seating: "4+1 Seater",
      rate: "13/KM",
      driver: "Extra",
      parking: "Extra",
    },
    {
      vehicle: "Toyota Rumion",
      type: "MPV",
      seating: "6+1 Seater",
      rate: "14/KM",
      driver: "Extra",
      parking: "Extra",
    },
    {
      vehicle: "Kia Carens",
      type: "MPV",
      seating: "6+1 / 7+1 Seater",
      rate: "17/KM & 18/KM",
      driver: "Extra",
      parking: "Extra",
    },
    {
      vehicle: "Innova Cab",
      type: "SUV",
      seating: "6+1 Seater",
      rate: "18/KM",
      driver: "Extra",
      parking: "Extra",
    },
    {
      vehicle: "Innova Crysta",
      type: "Premium SUV",
      seating: "6+1 Seater",
      rate: "21/KM",
      driver: "Extra",
      parking: "Extra",
    },
    {
      vehicle: "10 Seater Urbania",
      type: "Urbania",
      seating: "10 Seater",
      rate: "ON CALL",
      driver: "Extra",
      parking: "Extra",
    },
    {
      vehicle: "13 Seater Urbania",
      type: "Urbania",
      seating: "13 Seater",
      rate: "ON CALL",
      driver: "Extra",
      parking: "Extra",
    },
    {
      vehicle: "17 Seater Urbania",
      type: "Urbania",
      seating: "17 Seater",
      rate: "ON CALL",
      driver: "Extra",
      parking: "Extra",
    },
    {
      vehicle: "17 Seater Tempo Traveller",
      type: "Tempo Traveller",
      seating: "17 Seater",
      rate: "ON CALL",
      driver: "Extra",
      parking: "Extra",
    },
    {
      vehicle: "20 Seater Tempo Traveller",
      type: "Tempo Traveller",
      seating: "20 Seater",
      rate: "ON CALL",
      driver: "Extra",
      parking: "Extra",
    },
    {
      vehicle: "Mini Bus",
      type: "Bus",
      seating: "20 Seater",
      rate: "ON CALL",
      driver: "Extra",
      parking: "Extra",
    },
    {
      vehicle: "32 Seater Bus",
      type: "Bus",
      seating: "32 Seater",
      rate: "ON CALL",
      driver: "Extra",
      parking: "Extra",
    },
    {
      vehicle: "40 Seater Bus",
      type: "Bus",
      seating: "40 Seater",
      rate: "ON CALL",
      driver: "Extra",
      parking: "Extra",
    },
    {
      vehicle: "45 Seater AC Bus",
      type: "AC Bus",
      seating: "45 Seater",
      rate: "ON CALL",
      driver: "Extra",
      parking: "Extra",
    },
  ];

  const handleWhatsAppClick = (vehicle, rate) => {
    const message = `Hello Virendra Cabs,

I would like to enquire about vehicle rental.

Vehicle: ${vehicle}
Listed Rate: ${rate === "ON CALL" ? "Please provide quotation" : `₹${rate}`}

Please share vehicle availability, rental charges, driver allowance, toll, parking and booking details.

Thank you!`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const getVehicleIcon = (type) => {
    if (type === "Bus" || type === "AC Bus") {
      return <i className="fa-solid fa-bus"></i>;
    }

    if (type === "Urbania" || type === "Tempo Traveller") {
      return <i className="fa-solid fa-van-shuttle"></i>;
    }

    return <i className="fa-solid fa-car-side"></i>;
  };

  return (
    <>
      <style>{`
        .virRatesSection {
          position: relative;
          padding: 75px 15px;
          overflow: hidden;
          background:
            radial-gradient(circle at 5% 10%, rgba(8,123,184,.12), transparent 28%),
            radial-gradient(circle at 95% 90%, rgba(245,130,32,.12), transparent 28%),
            linear-gradient(135deg,#e9f6ff,#f8fcff 52%,#fff3e7);
          font-family: "Segoe UI", Arial, sans-serif;
        }

        .virRatesSection * {
          box-sizing: border-box;
        }

        .virRatesContainer {
          position: relative;
          z-index: 1;
          max-width: 1250px;
          margin: auto;
        }

        .virRatesHeader {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 25px;
          margin-bottom: 35px;
        }

        .virRatesHeading {
          max-width: 750px;
        }

        .virRatesBadge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 16px;
          margin-bottom: 17px;
          border-radius: 30px;
          color: white;
          background: linear-gradient(135deg,#087bb8,#082b4d);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.3px;
          text-transform: uppercase;
        }

        .virRatesTitle {
          color: #082b4d;
          font-size: clamp(29px,4vw,43px);
          font-weight: 900;
          line-height: 1.2;
          margin: 0 0 13px;
        }

        .virRatesTitle span {
          color: #f58220;
        }

        .virRatesSubtitle {
          color: #536c80;
          font-size: 14px;
          line-height: 1.9;
          margin: 0;
        }

        .virRateInfo {
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 17px 20px;
          background: linear-gradient(135deg,#082b4d,#087bb8);
          color: white;
          border-radius: 15px;
          box-shadow: 0 12px 25px rgba(8,43,77,.15);
        }

        .virRateInfoIcon {
          width: 44px;
          height: 44px;
          flex: 0 0 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f58220;
          border-radius: 12px;
          font-size: 19px;
        }

        .virRateInfoText {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .virRateInfoText strong {
          font-size: 12px;
          font-weight: 800;
        }

        .virRateInfoText span {
          color: #e1f2ff;
          font-size: 12px;
        }

        .virTableCard {
          overflow: hidden;
          background: white;
          border: 1px solid #c9e4f5;
          border-radius: 22px;
          box-shadow: 0 18px 45px rgba(8,43,77,.10);
        }

        .virTableResponsive {
          width: 100%;
          overflow-x: auto;
        }

        .virTableResponsive::-webkit-scrollbar {
          height: 7px;
        }

        .virTableResponsive::-webkit-scrollbar-thumb {
          background: #087bb8;
          border-radius: 10px;
        }

        .virBusTable {
          width: 100%;
          min-width: 900px;
          border-collapse: collapse;
        }

        .virBusTable thead {
          background: linear-gradient(110deg,#082b4d,#075b91);
        }

        .virBusTable th {
          padding: 20px 15px;
          color: white;
          text-align: center;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .5px;
          white-space: nowrap;
        }

        .virBusTable th:first-child {
          padding-left: 25px;
          text-align: left;
        }

        .virBusTable tbody tr {
          border-bottom: 1px solid #e2edf5;
          transition: background .25s ease;
        }

        .virBusTable tbody tr:nth-child(4n+1) {
          background: #eaf6ff;
        }

        .virBusTable tbody tr:nth-child(4n+2) {
          background: #ffffff;
        }

        .virBusTable tbody tr:nth-child(4n+3) {
          background: #fff3e6;
        }

        .virBusTable tbody tr:nth-child(4n+4) {
          background: #f2f8fc;
        }

        .virBusTable tbody tr:hover {
          background: #d9efff;
          box-shadow: inset 4px 0 #f58220;
        }

        .virBusTable tbody tr:last-child {
          border-bottom: none;
        }

        .virBusTable td {
          padding: 15px 13px;
          text-align: center;
          color: #344f63;
          font-size: 12px;
          font-weight: 600;
        }

        .virBusTable td:first-child {
          padding-left: 25px;
          text-align: left;
        }

        .virVehicle {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .virVehicleIcon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 43px;
          height: 43px;
          flex: 0 0 43px;
          border-radius: 12px;
          background: linear-gradient(135deg,#087bb8,#082b4d);
          color: white;
          font-size: 17px;
        }

        .virVehicleInfo {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .virVehicleInfo strong {
          color: #082b4d;
          font-size: 12px;
          font-weight: 800;
          line-height: 1.4;
        }

        .virVehicleInfo small {
          color: #e37617;
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .5px;
        }

        .virSeater {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 11px;
          border-radius: 20px;
          color: #075487;
          background: #dff1ff;
          border: 1px solid #c5e5fa;
          font-size: 11px;
          font-weight: 800;
          white-space: nowrap;
        }

        .virSeater i {
          color: #087bb8;
        }

        .virRateAmount {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 9px 13px;
          border-radius: 9px;
          background: #e1f3ff;
          color: #075487;
          font-size: 13px;
          font-weight: 900;
          white-space: nowrap;
        }

        .virOnCall {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 9px 13px;
          border-radius: 9px;
          background: #082b4d;
          color: white;
          font-size: 10px;
          font-weight: 900;
          white-space: nowrap;
        }

        .virOnCall i {
          color: #ffac65;
        }

        .virExtra {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #536c80;
          font-size: 12px;
          font-weight: 700;
          white-space: nowrap;
        }

        .virExtra i {
          color: #f58220;
        }

        .virBookBtn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-width: 115px;
          padding: 11px 15px;
          border: none;
          border-radius: 10px;
          background: linear-gradient(135deg,#f58220,#dc650b);
          color: white;
          font-size: 11px;
          font-weight: 800;
          cursor: pointer;
          transition: .25s ease;
          box-shadow: 0 7px 17px rgba(245,130,32,.17);
        }

        .virBookBtn:hover {
          background: linear-gradient(135deg,#087bb8,#082b4d);
          transform: translateY(-2px);
        }

        .virRatesFooter {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 15px;
          margin-top: 27px;
        }

        .virRatesFooter span {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #526a7e;
          font-size: 12px;
          font-weight: 700;
        }

        .virRatesFooter i {
          color: #f58220;
        }

        .virRateNote {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-top: 25px;
          padding: 19px 21px;
          background: #e2f3ff;
          border: 1px solid #bfdef1;
          border-left: 4px solid #087bb8;
          border-radius: 12px;
          color: #47647b;
          font-size: 13px;
          line-height: 1.8;
        }

        .virRateNote i {
          color: #087bb8;
          font-size: 17px;
          margin-top: 3px;
        }

        .virContactBottom {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 22px;
          padding: 22px;
          background: linear-gradient(110deg,#082b4d,#087bb8);
          color: white;
          border-radius: 14px;
        }

        .virContactBottom > i {
          color: #ffad66;
          font-size: 20px;
        }

        .virContactBottom span {
          font-size: 13px;
          font-weight: 700;
        }

        .virContactBottom > a:not(.virContactWhatsApp) {
          color: white;
          text-decoration: none;
          font-size: 19px;
          font-weight: 900;
        }

        .virContactWhatsApp {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 11px 20px;
          background: #f58220;
          border-radius: 9px;
          color: white;
          text-decoration: none;
          font-size: 12px;
          font-weight: 800;
          transition: .25s;
        }

        .virContactWhatsApp:hover {
          background: white;
          color: #082b4d;
        }

        @media (max-width: 991px) {
          .virRatesHeader {
            flex-direction: column;
            align-items: flex-start;
          }

          .virRateInfo {
            width: 100%;
          }
        }

        @media (max-width: 576px) {
          .virRatesSection {
            padding: 45px 10px;
          }

          .virRatesTitle {
            font-size: 29px;
          }

          .virRatesSubtitle {
            font-size: 12px;
          }

          .virTableCard {
            border-radius: 15px;
          }

          .virBusTable th {
            padding: 15px 10px;
            font-size: 10px;
          }

          .virBusTable td {
            padding: 13px 10px;
          }

          .virBusTable th:first-child,
          .virBusTable td:first-child {
            padding-left: 14px;
          }

          .virVehicleIcon {
            width: 36px;
            height: 36px;
            flex-basis: 36px;
          }

          .virContactBottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>

      <section className="virRatesSection">
        <div className="virRatesContainer">

          {/* HEADER */}
          <div className="virRatesHeader">
            <div className="virRatesHeading">
              <span className="virRatesBadge">
                <i className="fa-solid fa-car-side"></i>
                Virendra Cabs Fleet
              </span>

              <h2 className="virRatesTitle">
                Cab, SUV, Traveller &{" "}
                <span>Bus Rental Rates</span>
              </h2>

              <p className="virRatesSubtitle">
                Explore Virendra Cabs rental rates for
                Swift Dzire, Ertiga, Hyundai Aura,
                Kia Carens, Innova Crysta, Force Urbania,
                Tempo Traveller and Mini Bus in Pune.
                Choose the right vehicle for airport
                transfers, local travel, outstation trips,
                corporate journeys, weddings and group tours.
              </p>
            </div>

            <div className="virRateInfo">
              <div className="virRateInfoIcon">
                <i className="fa-solid fa-headset"></i>
              </div>

              <div className="virRateInfoText">
                <strong>Need a Custom Quote?</strong>
                <span>Call +91 90225 49022</span>
              </div>
            </div>
          </div>

          {/* TABLE */}
          <div className="virTableCard">
            <div className="virTableResponsive">
              <table className="virBusTable">
                <thead>
                  <tr>
                    <th>Vehicle</th>
                    <th>Capacity</th>
                    <th>Rental Rate</th>
                    <th>Driver Allowance</th>
                    <th>Toll / Parking</th>
                    <th>Enquiry</th>
                  </tr>
                </thead>

                <tbody>
                  {ratesData.map((row) => (
                    <tr key={row.vehicle}>

                      {/* VEHICLE */}
                      <td>
                        <div className="virVehicle">
                          <div className="virVehicleIcon">
                            {getVehicleIcon(row.type)}
                          </div>

                          <div className="virVehicleInfo">
                            <strong>{row.vehicle}</strong>
                            <small>{row.type}</small>
                          </div>
                        </div>
                      </td>

                      {/* SEATING */}
                      <td>
                        <span className="virSeater">
                          <i className="fa-solid fa-users"></i>
                          {row.seating}
                        </span>
                      </td>

                      {/* RENTAL RATE */}
                      <td>
                        {row.rate === "ON CALL" ? (
                          <span className="virOnCall">
                            <i className="fa-solid fa-phone"></i>
                            ON CALL
                          </span>
                        ) : (
                          <span className="virRateAmount">
                            ₹{row.rate}
                          </span>
                        )}
                      </td>

                      {/* DRIVER */}
                      <td>
                        <span className="virExtra">
                          <i className="fa-solid fa-user-tie"></i>
                          {row.driver}
                        </span>
                      </td>

                      {/* PARKING */}
                      <td>
                        <span className="virExtra">
                          <i className="fa-solid fa-square-parking"></i>
                          {row.parking}
                        </span>
                      </td>

                      {/* WHATSAPP */}
                      <td>
                        <button
                          type="button"
                          className="virBookBtn"
                          onClick={() =>
                            handleWhatsAppClick(
                              row.vehicle,
                              row.rate
                            )
                          }
                        >
                          <i className="fa-brands fa-whatsapp"></i>
                          Get Quote
                        </button>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FLEET FEATURES */}
          <div className="virRatesFooter">
            <span>
              <i className="fa-solid fa-check-circle"></i>
              Sedan Cab Rental
            </span>

            <span>
              <i className="fa-solid fa-check-circle"></i>
              SUV & Innova Rental
            </span>

            <span>
              <i className="fa-solid fa-check-circle"></i>
              Urbania & Tempo Traveller
            </span>

            <span>
              <i className="fa-solid fa-check-circle"></i>
              Mini Bus & AC Bus Rental
            </span>
          </div>

          {/* NOTE */}
          <div className="virRateNote">
            <i className="fa-solid fa-circle-info"></i>

            <span>
              <strong>Important:</strong> Listed rental
              rates are indicative and subject to
              confirmation. Driver allowance, toll,
              parking and other applicable charges are
              extra. Final pricing may vary depending
              on travel date, pickup and drop location,
              trip duration, route, minimum kilometres
              and vehicle availability. Contact Virendra
              Cabs for an updated quotation.
            </span>
          </div>

          {/* CONTACT */}
          <div className="virContactBottom">
            <i className="fa-solid fa-phone-volume"></i>

            <span>For Booking & Enquiries:</span>

            <a href="tel:+919022549022">
              +91 90225 49022
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Hello Virendra Cabs, I would like to enquire about your cab and bus rental rates."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="virContactWhatsApp"
            >
              <i className="fa-brands fa-whatsapp"></i>
              WhatsApp Us
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default BusRatesTable;
