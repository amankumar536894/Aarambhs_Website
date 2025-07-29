import React, { useState, useEffect } from "react";
import './AllVenusPage.css'
import Header from "../../../components/Website/Header/Header";
import Footer from "../../../components/Website/Footer/Footer";
import Filter from "../../../components/Website/Filter/Filter";
import AllVenusBox from "../../../components/Website/AllVenusBox/AllVenusBox";
import GoToTop from "../../../components/Website/GoToTop/GoToTop";

const AllVenusPage = () => {
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/venues`);
        if (!response.ok) {
          throw new Error('Failed to fetch venues');
        }
        const data = await response.json();
        if (data.success) {
          setVenues(data.data);
        } else {
          setError(data.message || 'Failed to fetch venues');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVenues();
  }, []);

  return (
    <>
      <div className="allvenuspage">
        <GoToTop/>
        <Header />
        <Filter />
        <AllVenusBox venues={venues} loading={loading} error={error} />
        <Footer />
      </div>
    </>
  );
};

export default AllVenusPage;
