import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Green Nursery "}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/Plant_About.jpg"
            alt="contactus"
            style={{ width: "70%" , marginLeft: "15%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            We Sell Plants which can decorate your home.
          </p>
          <p className="text-justify mt-2">
            This App can be used to Check Facts about Plants.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
