import React from "react";
import "./Mainsection.css";

const Mainsection = () => {
  const citylist = [
    "Delhi",
    "Mumbai",
    "Kolkata",
    "Bengaluru",
    "Chennai",
    "Hyderabad",
    "Ahmedabad",
    "Surat",
    "Pune",
    "Jaipur",
  ];

  const eventtype = [
    "Wedding Venues",
    "Wedding Photographer",
    "Bridal Makeup Artists",
    "Wedding Decorators",
    "Wedding Planner",
    "Bridal Mehandi Artists",
    "Wedding Catering",
    "Wedding Cards",
    "DJ",
  ];

  return (
    <div className="mainsection">
      <div className="mainsectioncontent">
        <p className="maintitle">
          Har Rishte ka Shubh Aarambh, har sapna saakaar - Aarambhs ke sath
        </p>
        <div className="maininputfield">
          <select className="eventtypebox">
            <option value="" disabled selected>
              Select Event Type
            </option>
            {eventtype.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <select className="citybox">
            <option value="" disabled selected>
              Select City
            </option>
            {citylist.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <div className="mainsearchbtn">
            <i className="fa-light fa-magnifying-glass" />
            <p>Search</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainsection;
