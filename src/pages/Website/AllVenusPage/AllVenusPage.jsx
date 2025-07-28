import React from "react";
import './AllVenusPage.css'
import Header from "../../../components/Website/Header/Header";
import Footer from "../../../components/Website/Footer/Footer";
import Filter from "../../../components/Website/Filter/Filter";
import AllVenusBox from "../../../components/Website/AllVenusBox/AllVenusBox";
 
import venuedata from '../../../VenueData/VenueData'
import GoToTop from "../../../components/Website/GoToTop/GoToTop";


const AllVenusPage = () => {


  return (
    <>
      <div className="allvenuspage">
        <GoToTop/>
        <Header />
        <Filter />
        <AllVenusBox api={venuedata} />
        <Footer />
      </div>
    </>
  );
};

export default AllVenusPage;
