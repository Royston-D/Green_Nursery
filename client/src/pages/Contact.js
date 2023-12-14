import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiCurrentLocation } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/Plant_Contact.jpg"
            alt="contactus"
            style={{ width: "75%", marginLeft: "2%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2 text-center " >
            Any query feel free to call anytime 
          </p>
          <p className="mt-3">
            <BiMailSend /> : testadmin@greennursery.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : +91- 9182734655
          </p>
          <p className="mt-3">
            <BiCurrentLocation /> : Theni, Tamil Nadu.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
