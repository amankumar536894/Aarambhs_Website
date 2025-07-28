import React, { useState } from 'react'
import '../AdminCitySection/AdminCitySection.css'
import '../AdminVendorsSection/AdminVendorsSection.css'
import './AdminTeamSection.css'
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
} from "lucide-react";

const teams = [
    { managing_city: "Mumbai", contact_name: "Rohan", vendor_type: "laser", email: "tcornelis0@surveymonkey.com", contact_number: "313-777-1366", whatsapp_number: "733-434-9318", status: "active" },
    { managing_city: "Delhi", contact_name: "Priya", vendor_type: "diners-club-international", email: "rcollumbine1@berkeley.edu", contact_number: "983-523-8338", whatsapp_number: "819-247-2954", status: "active" },
    { managing_city: "Bangalore", contact_name: "Arjun", vendor_type: "americanexpress", email: "ljoel2@addthis.com", contact_number: "404-123-5602", whatsapp_number: "168-467-2720", status: "active" },
    { managing_city: "Hyderabad", contact_name: "Meena", vendor_type: "diners-club-carte-blanche", email: "gilott3@eventbrite.com", contact_number: "629-352-1763", whatsapp_number: "308-163-5512", status: "active" },
    { managing_city: "Pune", contact_name: "Ravi", vendor_type: "diners-club-carte-blanche", email: "lboost4@plala.or.jp", contact_number: "830-849-2811", whatsapp_number: "462-941-8842", status: "active" },
    { managing_city: "Ahmedabad", contact_name: "Sunita", vendor_type: "mastercard", email: "hglasscoe5@aol.com", contact_number: "563-960-6072", whatsapp_number: "110-319-7569", status: "active" },
    { managing_city: "Kolkata", contact_name: "Deepak", vendor_type: "china-unionpay", email: "dbeartup6@npr.org", contact_number: "598-807-5567", whatsapp_number: "444-920-1155", status: "active" },
    { managing_city: "Chennai", contact_name: "Anjali", vendor_type: "diners-club-enroute", email: "ehayth7@shinystat.com", contact_number: "429-132-0093", whatsapp_number: "385-652-9263", status: "active" },
    { managing_city: "Jaipur", contact_name: "Karan", vendor_type: "laser", email: "lmcnuff8@studiopress.com", contact_number: "736-453-9167", whatsapp_number: "756-380-0461", status: "active" },
    { managing_city: "Lucknow", contact_name: "Neha", vendor_type: "instapayment", email: "mwaldram9@ycombinator.com", contact_number: "566-296-6469", whatsapp_number: "388-844-9511", status: "active" },
    { managing_city: "Indore", contact_name: "Siddharth", vendor_type: "diners-club-international", email: "sgemnetta@youtu.be", contact_number: "330-210-9623", whatsapp_number: "962-377-3792", status: "active" },
    { managing_city: "Bhopal", contact_name: "Kavita", vendor_type: "diners-club-us-ca", email: "kroyansb@yellowbook.com", contact_number: "684-701-0213", whatsapp_number: "528-907-8772", status: "active" },
    { managing_city: "Nagpur", contact_name: "Aman", vendor_type: "instapayment", email: "kzellandc@joomla.org", contact_number: "668-287-2205", whatsapp_number: "232-274-5019", status: "active" },
    { managing_city: "Visakhapatnam", contact_name: "Ritika", vendor_type: "visa-electron", email: "htellenbrokd@msu.edu", contact_number: "627-584-9138", whatsapp_number: "976-554-9627", status: "active" },
    { managing_city: "Surat", contact_name: "Suresh", vendor_type: "china-unionpay", email: "sandrosike@opera.com", contact_number: "498-900-8083", whatsapp_number: "266-283-8745", status: "active" },
    { managing_city: "Patna", contact_name: "Divya", vendor_type: "visa-electron", email: "vdavidouf@etsy.com", contact_number: "354-602-9568", whatsapp_number: "561-818-8022", status: "active" },
    { managing_city: "Chandigarh", contact_name: "Aditya", vendor_type: "jcb", email: "jzinkg@google.co.uk", contact_number: "134-945-3804", whatsapp_number: "435-729-3766", status: "active" },
    { managing_city: "Ranchi", contact_name: "Pooja", vendor_type: "instapayment", email: "acrackerh@gov.uk", contact_number: "318-127-8183", whatsapp_number: "595-694-6641", status: "active" },
    { managing_city: "Coimbatore", contact_name: "Nikhil", vendor_type: "diners-club-carte-blanche", email: "jdunni@themeforest.net", contact_number: "206-501-0937", whatsapp_number: "695-230-2371", status: "active" },
    { managing_city: "Kanpur", contact_name: "Sneha", vendor_type: "instapayment", email: "nwridej@hhs.gov", contact_number: "754-739-3892", whatsapp_number: "174-715-0268", status: "active" }
];



const AdminTeamSection = () => {
    const [formon, setFormon] = useState(false)

    return (
        <>
            <div className="adminteamsection">
                <div className="coursepagemain">
                    <div>
                        <h1 className="coursepagemaintitle">Teams Management</h1>
                        <p className="coursemainpara">
                            Manage your Teams.
                        </p>
                    </div>
                    <button onClick={() => { setFormon(!formon) }} className="courseadbtn">
                        <Plus size={20} />
                        <span>Add Team</span>
                    </button>
                </div>

                <div className='adminsearchcontainer'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-search-icon lucide-search adminsearchicon"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
                    <input type='text' placeholder='Search Team' />
                </div>

                <div className="coursescontainer">
                    {teams.map((item) => {
                        return (
                            <div className="coursesbox">
                                <div className="leftcoursebox">
                                    <div className="eachboxtitle">
                                        <p className="coursenametitle">
                                            {item.contact_name}
                                        </p>
                                        <p className="facultydesignation">{item.managing_city}</p>
                                    </div>
                                    <div className="courseperboxdowndetail">
                                        <p className="coursedurationbox">Contact Number: {item.contact_number}</p>
                                        <p className="coursedepartmentbox">
                                            Email: {item.email}
                                        </p>
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
                    <form className="addteamforminner" onClick={(e) => { e.stopPropagation() }}>
                        <svg onClick={() => { setFormon(!formon) }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-x-icon lucide-x cutadminformicon"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        <input className='addteamforminput' type="text" placeholder='Team Name' />
                        <input className='addteamforminput' type="text" placeholder='Team Email' />
                        <div className="twoinputinone">
                            <input className='addteamforminput halfwidth' type="text" placeholder='Team Contact Number' />
                            <input className='addteamforminput halfwidth' type="text" placeholder='Team Whatsapp Number' />
                        </div>
                        <div className="twoinputinone">
                            <input className='addteamforminput' type="text" placeholder='City Assigned' />
                            <select className='addteamforminput teamstatusform'>
                                <option value="active">Active</option>
                                <option value="active">pending</option>
                                <option value="active">Suspended</option>
                            </select>
                        </div>

                        <button className='addteamformbtn'>Add Team</button>
                    </form>
                </div>



            </div>
        </>
    )
}

export default AdminTeamSection
