import React,{useState} from 'react';
import Profile from './../../views/Profile/Profile';
import { ProfileContext } from "./../../contexts";
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
             <Profile />
        </ProfileContext.Provider>  
    )
}

export default Portfolio;