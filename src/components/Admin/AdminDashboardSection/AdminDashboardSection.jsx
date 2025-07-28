import React, {useState} from 'react'
import './AdminDashboardSection.css'
import { BookOpen, Users, Calendar, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import profilepic from "../../../assets/images/profilepic.webp";

const AdminDashboardSection = () => {
    const [profileon, setProfileon] = useState(false)

    const stats = [
        { title: "Total Vendors", value: "24", icon: BookOpen, color: "#9A0940" },
        { title: "Total Users", value: "156", icon: Users, color: "#9A0940" },
        { title: "Active Booking", value: "7", icon: Calendar, color: "#9A0940" },
        { title: "Total Blogs", value: "7", icon: FileText, color: "#9A0940" },
    ];

    const recentActivities = [
        {
            action: 'New user "Nishant" added',
            time: "2 hours ago",
            type: "course",
        },
        {
            action: "New vendor 'Rajesh' added",
            time: "1 day ago",
            type: "faculty",
        },
        {
            action: "amit added as a photographer",
            time: "2 days ago",
            type: "event",
        },
        {
            action: "New venue 'The Grand Palace' added",
            time: "3 days ago",
            type: "exam",
        },
        {
            action: "Ravi booked Hotel palace",
            time: "1 week ago",
            type: "blog",
        },
    ];

    const upcomingEvents = [
        {
            title: "Annual Technical Symposium",
            date: "March 15, 2025",
            type: "Conference",
        },
        {
            title: "Faculty Development Program",
            date: "March 20, 2025",
            type: "Workshop",
        },
        {
            title: "Student Placement Drive",
            date: "March 25, 2025",
            type: "Career",
        },
        {
            title: "Research Paper Presentation",
            date: "April 2, 2025",
            type: "Academic",
        },
    ];


    return (
        <>
            <div className="dash" onClick={()=>{setProfileon(false)}}>
                <div className="dashboard-header">
                    <div>
                        <h1>Admin Dashboard</h1>
                        <p className='dashboard-header-text'>Welcome back! Here's what's happening at the Aarambhs.</p>
                    </div>

                    <div className="header-actions">
                        <img onClick={(e)=>{e.stopPropagation();setProfileon(!profileon)}} className='profilepicimg' src={profilepic} />
                        <div className={`profile-details ${profileon ? 'profile-details-active' : ''}`}>
                            <div className='profiledetaailstopmain'>
                                <img className='profile-details-img' src={profilepic} />
                                <div className='profile-details-text'>
                                    <p className='profile-details-text-name'>Admin</p>
                                    <p className='profile-details-text-email'>admin@gmail.com</p>
                                </div>
                            </div>
                            <div className="profile-moreoptions">Logout</div>
                        </div>
                    </div>
                </div>

                <div className="stats-grid">
                    {stats.map((stat, index) => {
                        const IconComponent = stat.icon;
                        return (
                            <div key={index} className={`stat-card `}>
                                <div className="stat-content">
                                    <div>
                                        <p className="stat-title">{stat.title}</p>
                                        <p className="stat-value">{stat.value}</p>
                                    </div>
                                    <div

                                        className="stat-icon"
                                    >
                                        <IconComponent size={24} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="quick-actions">
                    <h2>Quick Actions</h2>
                    <div className="actions-grid">


                        <Link className='link' to="/admin/vendors">
                            <button className="action-button blue">
                                <BookOpen size={20} />
                                <span>Vendor</span>
                            </button>
                        </Link>


                        <Link className='link' to="/admin/users">
                            <button className="action-button emerald">
                                <Users size={20} />
                                <span>User</span>
                            </button>
                        </Link>


                        <Link className='link' to="/admin/city">
                            <button className="action-button amber">
                                <Calendar size={20} />
                                <span>Add City</span>
                            </button>
                        </Link>


                        <Link className='link' to="/admin/blogs">
                            <button className="action-button purple">
                                <FileText size={20} />
                                <span>Post Blog</span>
                            </button>
                        </Link>


                    </div>
                </div>

                <div className="content-grid">
                    {/* Recent Activities */}
                    <div className="content-card">
                        <h2>Recent Activities</h2>
                        <div className="activities-list">
                            {recentActivities.map((activity, index) => (
                                <div key={index} className="activity-item">
                                    <div className="activity-indicator"></div>
                                    <div className="activity-details">
                                        <p className="activity-action">{activity.action}</p>
                                        <p className="activity-time">{activity.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="content-card">
                        <h2>Upcoming Events</h2>
                        <div className="events-list">
                            {upcomingEvents.map((event, index) => (
                                <div key={index} className="event-item">
                                    <div>
                                        <p className="event-title">{event.title}</p>
                                        <p className="event-date">{event.date}</p>
                                    </div>
                                    <span className="event-type">{event.type}</span>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default AdminDashboardSection
