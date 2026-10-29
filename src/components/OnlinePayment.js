
import React, { useState } from "react";
import "./OnlinePayment.css";

// Replace with Virendra Cabs' verified merchant UPI ID.
// Leave empty until you have confirmed the correct UPI ID.
const MERCHANT_UPI_ID = "";
const MERCHANT_NAME = "Virendra Cabs";

const WHATSAPP_NUMBER = "919022549022";

const initialForm = {
  fullname: "",
  phone: "",
  bookingId: "",
  amount: "",
  paymentMethod: "upi",
  transactionId: "",
  paymentDate: "",
  message: "",
};

const OnlinePayment = () => {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");
  const [showPayment, setShowPayment] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
    setCopied(false);

    if (
      ["fullname", "phone", "bookingId", "amount"].includes(name)
    ) {
      setShowPayment(false);
    }
  };

  const validateBooking = () => {
    if (!form.fullname.trim()) {
      return "Please enter your full name.";
    }

    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\D/g, ""))) {
      return "Please enter a valid 10-digit mobile number.";
    }

    if (!form.bookingId.trim()) {
      return "Please enter your booking reference.";
    }

    const amount = Number(form.amount);

    if (!Number.isFinite(amount) || amount <= 0) {
      return "Please enter a valid payment amount.";
    }

    if (!MERCHANT_UPI_ID) {
      return "Online UPI payment is not configured yet. Please contact Virendra Cabs for verified payment details.";
    }

    return "";
  };

  const handleProceed = (e) => {
    e.preventDefault();

    const validationError = validateBooking();

    if (validationError) {
      setError(validationError);
      return;
    }

    setShowPayment(true);
  };

  const upiUrl = MERCHANT_UPI_ID
    ? `upi://pay?${new URLSearchParams({
        pa: MERCHANT_UPI_ID,
        pn: MERCHANT_NAME,
        am: Number(form.amount || 0).toFixed(2),
        cu: "INR",
        tn: `Booking ${form.bookingId.trim()}`,
      }).toString()}`
    : "";

  const copyUpiId = async () => {
    if (!MERCHANT_UPI_ID) return;

    try {
      await navigator.clipboard.writeText(MERCHANT_UPI_ID);
      setCopied(true);
    } catch {
      setError("Unable to copy. Please copy the UPI ID manually.");
    }
  };

  const sendPaymentDetails = () => {
    const phone = form.phone.replace(/\D/g, "");

    if (!form.fullname.trim() || !/^[6-9]\d{9}$/.test(phone)) {
      setError("Please enter your name and a valid mobile number.");
      return;
    }

    if (!form.bookingId.trim()) {
      setError("Please enter your booking reference.");
      return;
    }

    if (!form.transactionId.trim()) {
      setError("Please enter the transaction / UTR number.");
      return;
    }

    if (!form.paymentDate) {
      setError("Please select the payment date.");
      return;
    }

    if (!Number.isFinite(Number(form.amount)) || Number(form.amount) <= 0) {
      setError("Please enter a valid payment amount.");
      return;
    }

    const message = [
      "💳 *PAYMENT VERIFICATION REQUEST*",
      "*VIRENDRA CABS*",
      "",
      "👤 *CUSTOMER DETAILS*",
      `Name: ${form.fullname.trim()}`,
      `Mobile: +91 ${phone}`,
      `Booking Reference: ${form.bookingId.trim()}`,
      "",
      "💰 *PAYMENT DETAILS*",
      `Amount: ₹${Number(form.amount).toFixed(2)}`,
      `Payment Method: UPI`,
      `Transaction / UTR ID: ${form.transactionId.trim()}`,
      `Payment Date: ${form.paymentDate}`,
      "",
      "📝 *ADDITIONAL MESSAGE*",
      form.message.trim() || "No additional message",
      "",
      "Please verify this transaction and confirm receipt of payment.",
      "",
      "Thank you!",
    ].join("\n");

    window.location.href =
      `https://wa.me/${WHATSAPP_NUMBER}?text=` +
      encodeURIComponent(message);
  };

  return (
    <main className="vpay-page">

      {/* HERO */}
      <section className="vpay-hero">
        <div className="container">
          <div className="vpay-hero-content">
            <span className="vpay-eyebrow">
              <i className="fas fa-credit-card"></i>
              VIRENDRA CABS
            </span>

            <h1>
              Online <span>Payment</span>
            </h1>

            <p>
              Conveniently initiate your cab booking payment
              and share your transaction details with our
              team for verification.
            </p>

            <div className="vpay-breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <strong>Online Payment</strong>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="vpay-section">
        <div className="container">
          <div className="vpay-section-heading">
            <span>PAYMENT CENTRE</span>
            <h2>
              Pay for Your <em>Cab Booking</em>
            </h2>
            <p>
              Enter your confirmed booking details and
              the amount provided by Virendra Cabs.
            </p>
          </div>

          <div className="row g-4 align-items-stretch">

            {/* LEFT PAYMENT FORM */}
            <div className="col-12 col-lg-8">
              <div className="vpay-form-card">

                <div className="vpay-card-heading">
                  <div className="vpay-card-heading-icon">
                    <i className="fas fa-receipt"></i>
                  </div>
                  <div>
                    <span>STEP 01</span>
                    <h3>Booking & Payment Details</h3>
                  </div>
                </div>

                <form onSubmit={handleProceed}>
                  <div className="row g-3">

                    <div className="col-12 col-md-6">
                      <label className="vpay-label">
                        Customer Name *
                      </label>
                      <input
                        type="text"
                        className="form-control vpay-input"
                        name="fullname"
                        placeholder="Enter full name"
                        value={form.fullname}
                        onChange={handleChange}
                        maxLength={100}
                        required
                      />
                    </div>

                    <div className="col-12 col-md-6">
                      <label className="vpay-label">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        className="form-control vpay-input"
                        name="phone"
                        placeholder="10-digit mobile number"
                        value={form.phone}
                        onChange={handleChange}
                        inputMode="numeric"
                        pattern="[6-9][0-9]{9}"
                        maxLength={10}
                        required
                      />
                    </div>

                    <div className="col-12 col-md-6">
                      <label className="vpay-label">
                        Booking Reference *
                      </label>
                      <input
                        type="text"
                        className="form-control vpay-input"
                        name="bookingId"
                        placeholder="Booking ID / Reference"
                        value={form.bookingId}
                        onChange={handleChange}
                        maxLength={80}
                        required
                      />
                    </div>

                    <div className="col-12 col-md-6">
                      <label className="vpay-label">
                        Payment Amount (₹) *
                      </label>
                      <input
                        type="number"
                        className="form-control vpay-input"
                        name="amount"
                        placeholder="Enter amount"
                        min="1"
                        step="0.01"
                        value={form.amount}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <div className="vpay-method-title">
                        Select Payment Method
                      </div>

                      <div className="vpay-method-card">
                        <div className="vpay-method-icon">
                          <i className="fas fa-mobile-alt"></i>
                        </div>
                        <div>
                          <strong>UPI Payment</strong>
                          <p>
                            Pay using a compatible UPI app
                          </p>
                        </div>
                        <span className="vpay-method-check">
                          ✓
                        </span>
                      </div>
                    </div>

                    {error && (
                      <div className="col-12">
                        <div
                          className="alert alert-danger"
                          role="alert"
                        >
                          {error}
                        </div>
                      </div>
                    )}

                    <div className="col-12">
                      <button
                        type="submit"
                        className="vpay-proceed-btn"
                      >
                        <i className="fas fa-arrow-right"></i>
                        Proceed to UPI Payment
                      </button>
                    </div>

                  </div>
                </form>

                {/* UPI PAYMENT DETAILS */}
                {showPayment && (
                  <div className="vpay-payment-panel">
                    <div className="vpay-payment-panel-heading">
                      <span>STEP 02</span>
                      <h3>Complete Your Payment</h3>
                      <p>
                        Check the recipient name and amount
                        in your UPI app before approving.
                      </p>
                    </div>

                    <div className="vpay-amount-display">
                      <span>PAYMENT AMOUNT</span>
                      <strong>
                        ₹{Number(form.amount).toLocaleString(
                          "en-IN",
                          {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }
                        )}
                      </strong>
                    </div>

                    <div className="vpay-upi-details">
                      <span>Merchant UPI ID</span>
                      <div>
                        <strong>{MERCHANT_UPI_ID}</strong>
                        <button
                          type="button"
                          onClick={copyUpiId}
                        >
                          {copied ? "Copied!" : "Copy"}
                        </button>
                      </div>
                    </div>

                    <a
                      className="vpay-upi-btn"
                      href={upiUrl}
                    >
                      <i className="fas fa-mobile-alt"></i>
                      Open UPI App to Pay
                    </a>

                    <p className="vpay-upi-note">
                      The payment is completed in your UPI
                      app, not on this website. Return here
                      after making the payment to submit
                      your transaction details.
                    </p>
                  </div>
                )}

              </div>
            </div>

            {/* RIGHT INFORMATION */}
            <div className="col-12 col-lg-4">
              <aside className="vpay-info-card">
                <div className="vpay-info-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>

                <h3>Payment Assistance</h3>
                <p>
                  Need help with your cab booking payment?
                  Contact Virendra Cabs before making
                  any transfer.
                </p>

                <div className="vpay-info-item">
                  <i className="fas fa-phone-alt"></i>
                  <div>
                    <span>CALL US</span>
                    <a href="tel:+919022549022">
                      +91 90225 49022
                    </a>
                  </div>
                </div>

                <div className="vpay-info-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <span>EMAIL US</span>
                    <a href="mailto:booking@virendracabs.com">
                      booking@virendracabs.com
                    </a>
                  </div>
                </div>

                <div className="vpay-info-divider"></div>

                <h4>Before You Pay</h4>

                <ul>
                  <li>Confirm your booking with our team.</li>
                  <li>Verify the correct payment amount.</li>
                  <li>Check the UPI recipient details.</li>
                  <li>Keep your transaction reference.</li>
                  <li>Never share your UPI PIN or OTP.</li>
                </ul>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    "Hello Virendra Cabs, I need assistance with my booking payment."
                  )}`}
                  className="vpay-help-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp"></i>
                  WhatsApp Support
                </a>
              </aside>
            </div>
          </div>

          {/* PAYMENT VERIFICATION */}
          <div className="vpay-verification">
            <div className="vpay-verification-header">
              <span>STEP 03</span>
              <h3>Already Made a Payment?</h3>
              <p>
                Submit your transaction details on WhatsApp
                so our team can verify your payment.
              </p>
            </div>

            <div className="row g-3">

              <div className="col-12 col-md-4">
                <label className="vpay-label">
                  Transaction / UTR Number *
                </label>
                <input
                  type="text"
                  className="form-control vpay-input"
                  name="transactionId"
                  placeholder="Enter transaction reference"
                  value={form.transactionId}
                  onChange={handleChange}
                  maxLength={100}
                />
              </div>

              <div className="col-12 col-md-4">
                <label className="vpay-label">
                  Payment Date *
                </label>
                <input
                  type="date"
                  className="form-control vpay-input"
                  name="paymentDate"
                  value={form.paymentDate}
                  onChange={handleChange}
                  max={new Date().toLocaleDateString("en-CA")}
                />
              </div>

              <div className="col-12 col-md-4">
                <label className="vpay-label">
                  Additional Message
                </label>
                <input
                  type="text"
                  className="form-control vpay-input"
                  name="message"
                  placeholder="Optional note"
                  value={form.message}
                  onChange={handleChange}
                  maxLength={300}
                />
              </div>

              <div className="col-12 text-center">
                <button
                  type="button"
                  className="vpay-confirm-btn"
                  onClick={sendPaymentDetails}
                >
                  <i className="fab fa-whatsapp"></i>
                  Send Payment Details on WhatsApp
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default OnlinePayment;
