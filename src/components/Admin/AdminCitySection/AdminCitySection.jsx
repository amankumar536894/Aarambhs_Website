import React, { useState } from 'react'
import '../AdminCitySection/AdminCitySection.css'
import '../AdminVendorsSection/AdminVendorsSection.css'
import './AdminCitySection.css'

import {
    Plus,
    Edit,
    Trash2,
    Trash,
    BookOpen,
    DollarSign,
    FileText,
    Users,
    SquarePen,
    Search
} from "lucide-react";
import states from '../../../States'



const cities = [
    { "id": 1, "city": "Mumbai", "state": "Maharashtra", "status": "active", "managing_team": "Rohan Mehta" },
    { "id": 2, "city": "Delhi", "state": "Delhi", "status": "inactive", "managing_team": "Anita Sharma" },
    { "id": 3, "city": "Bengaluru", "state": "Karnataka", "status": "active", "managing_team": "Vikram Rao" },
    { "id": 4, "city": "Hyderabad", "state": "Telangana", "status": "pending", "managing_team": "Pooja Reddy" },
    { "id": 5, "city": "Ahmedabad", "state": "Gujarat", "status": "active", "managing_team": "Hardik Patel" },
    { "id": 6, "city": "Chennai", "state": "Tamil Nadu", "status": "inactive", "managing_team": "Meena Krishnan" },
    { "id": 7, "city": "Kolkata", "state": "West Bengal", "status": "active", "managing_team": "Arjun Sen" },
    { "id": 8, "city": "Pune", "state": "Maharashtra", "status": "inactive", "managing_team": "Nisha Joshi" },
    { "id": 9, "city": "Jaipur", "state": "Rajasthan", "status": "active", "managing_team": "Rahul Yadav" },
    { "id": 10, "city": "Lucknow", "state": "Uttar Pradesh", "status": "pending", "managing_team": "Sanjay Verma" },
    { "id": 11, "city": "Kanpur", "state": "Uttar Pradesh", "status": "active", "managing_team": "Deepika Mishra" },
    { "id": 12, "city": "Nagpur", "state": "Maharashtra", "status": "inactive", "managing_team": "Ajay Deshmukh" },
    { "id": 13, "city": "Indore", "state": "Madhya Pradesh", "status": "active", "managing_team": "Sneha Jain" },
    { "id": 14, "city": "Thane", "state": "Maharashtra", "status": "active", "managing_team": "Ritika Kapoor" },
    { "id": 15, "city": "Bhopal", "state": "Madhya Pradesh", "status": "pending", "managing_team": "Manish Sinha" },
    { "id": 16, "city": "Visakhapatnam", "state": "Andhra Pradesh", "status": "inactive", "managing_team": "Lakshmi Rao" },
    { "id": 17, "city": "Patna", "state": "Bihar", "status": "active", "managing_team": "Amitabh Singh" },
    { "id": 18, "city": "Vadodara", "state": "Gujarat", "status": "active", "managing_team": "Kajal Trivedi" },
    { "id": 19, "city": "Ludhiana", "state": "Punjab", "status": "inactive", "managing_team": "Harpreet Kaur" },
    { "id": 20, "city": "Agra", "state": "Uttar Pradesh", "status": "active", "managing_team": "Ravi Saxena" }
]




const AdminCitySection = () => {
    const [formon, setFormon] = useState(false)
    const [selectstate, setSelectstate] = useState('')

    console.log(formon)


    return (
        <>
            <div className="admincitysection">
                <div className="coursepagemain">
                    <div>
                        <h1 className="coursepagemaintitle">Cities Management</h1>
                        <p className="coursemainpara">
                            Manage Cities.
                        </p>
                    </div>
                    <button onClick={() => { setFormon(!formon) }} className="courseadbtn">
                        <Plus size={20} />
                        <span>Add City</span>
                    </button>
                </div>

                <div className='adminsearchcontainer'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search-icon lucide-search adminsearchicon"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
                    <input type='text' placeholder='Search City' />
                </div>

                <div className="coursescontainer">
                    {cities.map((item) => {
                        return (
                            <div className="coursesbox">
                                <div className="leftcoursebox">
                                    <div className="eachboxtitle">
                                        <p className="coursenametitle">
                                            {item.city}
                                        </p>
                                        <p className="facultydesignation">{item.state}</p>
                                    </div>
                                    <div className="courseperboxdowndetail">
                                        <p className="coursedurationbox">Managing Team  : {item.managing_team}</p>
                                    </div>
                                </div>
                                <div className="rightcoursebox">
                                    <div className="courseeditbtn">
                                        <p>{item.status}</p>
                                    </div>
                                    <div className="courseeditbtn">
                                        <SquarePen className="editdelete" />
                                        <p>Edit</p>
                                    </div>
                                    <div className="coursedeletebtn">
                                        <Trash className="editdelete" />
                                        <p>Delete</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>



                <div onClick={() => { setFormon(!formon) }} className={`addteamformpannel ${formon ? 'formon' : ''}`}>
                    <div className="addteamforminner" onClick={(e) => { e.stopPropagation() }}>
                        <svg onClick={() => { setFormon(!formon) }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-x-icon lucide-x cutadminformicon"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>


                        <div className="twoinputinone">

                            <select className='addteamforminput halfwidth' value={selectstate} onChange={(e) => setSelectstate(e.target.value)}>

                                <option value="">Select State</option>
                                {Object.keys(states).map((state) => (
                                    <option key={state} value={state}>{state}</option>
                                ))}
                                
                            </select>

                            <select className='addteamforminput halfwidth'>
                                <option value="">Select City</option>
                                {selectstate && states[selectstate]?.map((city) => (
                                    <option key={city} value={city}>{city}</option>
                                ))}
                            </select>

                        </div>

                        <div className="twoinputinone">
                            <select className='addteamforminput teamstatusform'>
                                <option value="active">Active</option>
                                <option value="active">pending</option>
                                <option value="active">Suspended</option>
                            </select>
                        </div>

                        <button className='addteamformbtn'>Add Team</button>
                    </div>
                </div>


            </div>
        </>
    )
}

export default AdminCitySection
