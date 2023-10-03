import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title="About us - Ecommerce app">
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to Ecommerce, where shopping meets simplicity! We're more than just an online marketplace; we're your go-to destination for hassle-free, secure, and delightful shopping experiences.
          </p>
        </div>
      </div>
    </Layout>
  );
};

Layout.defaultProps = {
    title: "Ecommerce app - shope now",
    description: "mern stack project",
    keywords: "mern,react,node,mongodb",
    author: "Teja",
};

export default About;
