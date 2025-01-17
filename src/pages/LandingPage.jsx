import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

export default function LandingPage(){
    const router = useNavigate();
    return(
        <div className="landingpagecontiner">
            <nav>
                <div className="navheader">
                    <h2>Apna Video Call</h2>
                </div>
                <div className="navlist">
                    <p onClick={()=>{
                        window.location.href="/trtrt";
                    }}>Join as Guest</p>
                    <p onClick={()=>{router("/auth")}}>Register</p>
                   <div role="button"  onClick={()=>{router("/auth")}}>
                    <p>Login</p></div>
                </div>
            </nav>

            <div className="landingMainContainer">
                <div>
                    <h1><span style={{color:"orange"}}>Connect</span> With your loved Ones</h1>
                    <p>Cover a distance by Apna Video Call</p>
                    <div role="button">
                        <Link to={"/auth"}>Get started</Link>
                    </div>

                </div>
                <div>
                    <img src="mobile.png" alt=""></img>
                </div>
            </div>
        </div>
    )
}