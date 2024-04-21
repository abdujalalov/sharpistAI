import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import HeaderVideo from "../components/HeaderVideo/HeaderVideo";
import TestHeader from "../components/TestHeader/TestHeader";
import Brands from "../components/Brands/Brands";
import Footer from "../components/Footer/Footer";
import Info from "../components/Info/Info";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <HeaderVideo />
      <TestHeader />
      <Brands />
      <Info />
      <Footer />
    </div>
  );
};

export default Home;
