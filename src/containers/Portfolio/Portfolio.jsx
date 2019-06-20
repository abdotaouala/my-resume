import React, {useState} from 'react';
import Profile from './../../views/Profile/Profile';
import Experiences from './../../views/Experiences/Experiences';
import Projects from './../../views/Projects/Projects';
import Blogs from './../../views/Blogs/Blogs';
import Technologies from './../../views/Technologies/Technologies';
import {ProfileContext} from "./../../contexts";
import {Route} from "react-router-dom";

const routing = (
    <>
        <Route path="/" component={Profile} exact/>
        <Route path="/experiences" component={Experiences}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/blogs" component={Blogs}/>
        <Route path="/technologies" component={Technologies}/>
    </>
);
const Portfolio=()=>{
    const [showModal,setShowModal]=useState(false);

    const handleShow=()=>{
        setShowModal(!showModal);
    }

    const context={
        showModal:showModal,
        handleShowModal:handleShow
    }

    return (
        <ProfileContext.Provider value={context}>
            {routing}
        </ProfileContext.Provider>  
    )
}

export default Portfolio;
