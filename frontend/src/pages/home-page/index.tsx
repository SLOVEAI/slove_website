import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import "../../index.css";

const HomePage = () => {
  return (
    <div className="bg-black h-screen">
      <Navigation />
      <h1 className="text-white">Home page</h1>
      <Footer />
    </div>
  );
};

export { HomePage };
