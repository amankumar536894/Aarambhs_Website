import React, {useState} from "react";
import "./Filter.css";

const filterdata = [
    {
        filtername: "No. of Guests",
        filteroptions: ["<100", "100-250", "250-500", "500-1000", ">1000"],
    },
    {
        filtername: "Room Count",
        filteroptions: ["<30", "30-60", "61-100", "100-200", "200-1000"],
    },
    {
        filtername: "Price per plate (Rs)",
        filteroptions: [
            "< ₹ 1,000",
            "₹ 1,000 - ₹ 1,500",
            "₹ 1,500- ₹ 2,000",
            "₹ 2,000 - ₹ 3,000",
            ">₹ 3,000",
        ],
    },
    {
        filtername: "Rental Cost",
        filteroptions: ['< ₹ 1Lakh', '₹1Lakh - ₹ 2 Lakh', '₹ 2 Lakhs - ₹ 4 Lakhs', '₹ 4 Lakhs - ₹ 6 Lakhs', '> ₹ 6 Lakhs']
    },
    {
        filtername: "Venue Type",
        filteroptions: ['Banquet Halls', 'Marriage Garden / Lawns', '4 Star & Above Wedding Hotels', '5 Star Hotels', '3 Star Hotels with Banquets']
    },
    {
        filtername: "Space",
        filteroptions: ['Indoor', 'Outdoor', 'Poolside', 'Terrace / Rooftop']
    },
    {
        filtername: "Rating",
        filteroptions: ['All Ratings', 'Rates <4', 'Rated 4+', 'Rated 4.5+', 'Rated 4.8+']
    },
];

const Filter = () => {

    const [filteropen, setFilteropen] = useState(false)

    return (
        <>
            <div className="filter">
                {filterdata.map((item) => {
                    return (
                        <div className="filteritemsmain">

                            <div className="filtertitleeach" onClick={()=>{setFilteropen(!filteropen)}}>
                                <p>{item.filtername}</p>
                                <i className="fa-solid fa-angle-down" />
                            </div>

                            <div style={{ height: filteropen ? 'auto' : '0' }} className="filtereachoptionbox">
                                {item.filteroptions.map((item) => {
                                    return (
                                        <div className="filtereachbox">
                                            <input type="checkbox" />
                                            <p>{item}</p>
                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Filter;
