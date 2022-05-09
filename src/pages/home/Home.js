import React from "react";
import Featured from "../../components/Featured/Featured";
import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/MailList/MailList";
import Navbar from "../../components/Navbar";
import Property from "../../components/Property/Property";
import "./Home.css";
function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <Property />
        <h1 className="homeTitle">Home Guest Love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
