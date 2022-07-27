
import React from "react";
import { Avatar, ShellBar, ShellBarItem } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/add.js";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";



function MyApp() {

    

    return (
        <>
            <ShellBar
                primaryTitle="My App"
                logo={<img src="https://st4.depositphotos.com/33133132/38031/v/1600/depositphotos_380310194-stock-illustration-creative-brain-logo-design-brainstorm.jpg" />}
                profile={<Avatar>
                    <img src="https://pusheen.com/wp-content/uploads/2020/12/What-Sweet-Quiz-SocialResults_Donut-1-e1608220861325.jpg" />
                </Avatar>}
            >
                <ShellBarItem icon="add" text="Add" />
            </ShellBar>

        </>

    )

}

export default MyApp;