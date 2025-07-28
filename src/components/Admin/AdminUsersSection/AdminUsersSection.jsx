import React from 'react'
import '../AdminCitySection/AdminCitySection.css'
import '../AdminVendorsSection/AdminVendorsSection.css'
import './AdminUsersSection.css'
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

const vendors= [{ "brand_name": "Flashdog", "contact_name": "Tomlin", "vendor_type": "laser", "email": "tcornelis0@surveymonkey.com", "contact_number": "313-777-1366", "whatsapp_number": "733-434-9318", "status": "active" },
{ "brand_name": "Fivespan", "contact_name": "Regan", "vendor_type": "diners-club-international", "email": "rcollumbine1@berkeley.edu", "contact_number": "983-523-8338", "whatsapp_number": "819-247-2954", "status": "active" },
{ "brand_name": "Tazz", "contact_name": "Lucky", "vendor_type": "americanexpress", "email": "ljoel2@addthis.com", "contact_number": "404-123-5602", "whatsapp_number": "168-467-2720", "status": "active" },
{ "brand_name": "Yakitri", "contact_name": "Garrick", "vendor_type": "diners-club-carte-blanche", "email": "gilott3@eventbrite.com", "contact_number": "629-352-1763", "whatsapp_number": "308-163-5512", "status": "active" },
{ "brand_name": "Trilia", "contact_name": "Linc", "vendor_type": "diners-club-carte-blanche", "email": "lboost4@plala.or.jp", "contact_number": "830-849-2811", "whatsapp_number": "462-941-8842", "status": "active" },
{ "brand_name": "Eare", "contact_name": "Hildegaard", "vendor_type": "mastercard", "email": "hglasscoe5@aol.com", "contact_number": "563-960-6072", "whatsapp_number": "110-319-7569", "status": "active" },
{ "brand_name": "Tagtune", "contact_name": "Diego", "vendor_type": "china-unionpay", "email": "dbeartup6@npr.org", "contact_number": "598-807-5567", "whatsapp_number": "444-920-1155", "status": "active" },
{ "brand_name": "Skinte", "contact_name": "Emiline", "vendor_type": "diners-club-enroute", "email": "ehayth7@shinystat.com", "contact_number": "429-132-0093", "whatsapp_number": "385-652-9263", "status": "active" },
{ "brand_name": "Eayo", "contact_name": "Louisette", "vendor_type": "laser", "email": "lmcnuff8@studiopress.com", "contact_number": "736-453-9167", "whatsapp_number": "756-380-0461", "status": "active" },
{ "brand_name": "Quire", "contact_name": "Maybelle", "vendor_type": "instapayment", "email": "mwaldram9@ycombinator.com", "contact_number": "566-296-6469", "whatsapp_number": "388-844-9511", "status": "active" },
{ "brand_name": "Zooveo", "contact_name": "Sasha", "vendor_type": "diners-club-international", "email": "sgemnetta@youtu.be", "contact_number": "330-210-9623", "whatsapp_number": "962-377-3792", "status": "active" },
{ "brand_name": "Podcat", "contact_name": "Karie", "vendor_type": "diners-club-us-ca", "email": "kroyansb@yellowbook.com", "contact_number": "684-701-0213", "whatsapp_number": "528-907-8772", "status": "active" },
{ "brand_name": "Dablist", "contact_name": "Kory", "vendor_type": "instapayment", "email": "kzellandc@joomla.org", "contact_number": "668-287-2205", "whatsapp_number": "232-274-5019", "status": "active" },
{ "brand_name": "Yotz", "contact_name": "Henri", "vendor_type": "visa-electron", "email": "htellenbrokd@msu.edu", "contact_number": "627-584-9138", "whatsapp_number": "976-554-9627", "status": "active" },
{ "brand_name": "Topiczoom", "contact_name": "Stewart", "vendor_type": "china-unionpay", "email": "sandrosike@opera.com", "contact_number": "498-900-8083", "whatsapp_number": "266-283-8745", "status": "active" },
{ "brand_name": "Riffpath", "contact_name": "Vivian", "vendor_type": "visa-electron", "email": "vdavidouf@etsy.com", "contact_number": "354-602-9568", "whatsapp_number": "561-818-8022", "status": "active" },
{ "brand_name": "Miboo", "contact_name": "Jacques", "vendor_type": "jcb", "email": "jzinkg@google.co.uk", "contact_number": "134-945-3804", "whatsapp_number": "435-729-3766", "status": "active" },
{ "brand_name": "Jabberbean", "contact_name": "Abbye", "vendor_type": "instapayment", "email": "acrackerh@gov.uk", "contact_number": "318-127-8183", "whatsapp_number": "595-694-6641", "status": "active" },
{ "brand_name": "Jayo", "contact_name": "Jammie", "vendor_type": "diners-club-carte-blanche", "email": "jdunni@themeforest.net", "contact_number": "206-501-0937", "whatsapp_number": "695-230-2371", "status": "active" },
{ "brand_name": "Rhyloo", "contact_name": "Nydia", "vendor_type": "instapayment", "email": "nwridej@hhs.gov", "contact_number": "754-739-3892", "whatsapp_number": "174-715-0268", "status": "active" }
]

const AdminUsersSection = () => {
    return (
        <>
            <div className="adminusersection">
                <div className="coursepagemain">
                    <div>
                        <h1 className="coursepagemaintitle">Users Management</h1>
                    </div>
                </div>

                <div className='adminsearchcontainer'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-search-icon lucide-search adminsearchicon"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
                    <input type='text' placeholder='Search Users' />
                </div>

                <div className="coursescontainer">
                    {vendors.map((item) => {
                        return (
                            <div className="coursesbox">
                                <div className="leftcoursebox">
                                    <div className="eachboxtitle">
                                        <p className="coursenametitle">
                                            {item.brand_name}
                                        </p>
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
            </div>
        </>
    )
}

export default AdminUsersSection
