import React from "react";

const ContactUs = () => {
  return (
    <div className="flex w-full h-full items-center justify-center p-8">
      <div className=" p-8 bg-white w-full rounded shadow">
        <h2>Contact Us</h2>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <p>Contact Us for Bookings, at:</p>
            <span>Phone: +233 20 111 3004</span>
            <span>Email: ghexplorexperts@gmail.com</span>
            <span>Website: ghexplorexperts.com</span>
          </div>
          <div className="flex flex-col">
            <h3>Locate us</h3>
            <span>KL67, Kakumdo, Cape Coast,</span>
            <span>Central Region, Ghana.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
