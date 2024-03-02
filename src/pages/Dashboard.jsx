import React from "react";
import SideBar from "../components/SideNav/SideBar";
import Header from "../components/Navbar/Header";
import Main from "../components/Main/Main";
import CreateStatus from "../components/Main/CreateStatus";

const Dashboard = ()=> {
    return (
        // 
        <div>
            <div id="wrapper">
                {/* Header here */}
                <Header></Header>

                {/* Sidebar here */}
                <SideBar></SideBar>

                {/* Main area here */}
                <Main></Main>
            </div>

            {/* Create status component */}
            {/* <CreateStatus></CreateStatus> */}
        </div>
    )
}

export default Dashboard;