import React from 'react';
import AdminNavbar from "../Navbar/AdminNavbar";
import DashboardBar from "../Navbar/DashboardBar";

const Admin = ({children}) => {
    return (
        <div
            className={`relative mx-auto min-h-screen max-w-screen-2xl scroll-smooth bg-[url('https://images.unsplash.com/photo-1586074299757-dc655f18518c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGJ1dGNoZXIlMjBwYXBlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60')] bg-center  bg-cover transition duration-1000 `}
        >
            <AdminNavbar/>
            <DashboardBar />
            {children}
        </div>
    );
};

export default Admin;
