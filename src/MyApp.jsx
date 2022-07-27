
import React from "react";
import { Avatar, ShellBar, ShellBarItem } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/add.js";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";



function MyApp() {

const navigate = useNavigate();
const handleLogoClick = () => {
  navigate("./");
};


    return (
        <>
            <ShellBar
                primaryTitle="My App"
                logo={<img src="https://st4.depositphotos.com/33133132/38031/v/1600/depositphotos_380310194-stock-illustration-creative-brain-logo-design-brainstorm.jpg" />}
                profile={<Avatar>
                    <img src="https://pusheen.com/wp-content/uploads/2020/12/What-Sweet-Quiz-SocialResults_Donut-1-e1608220861325.jpg" />
                </Avatar>}
                onLogoClick={handleLogoClick}
            >
                <ShellBarItem icon="add" text="Add" />
            </ShellBar>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/detail" element={<Detail />} />
                <Route path="/" element={<Navigate replace to="/home" />} />
            </Routes>
        </>

    )

}

export default MyApp;