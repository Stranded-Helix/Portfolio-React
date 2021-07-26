import React, { useEffect, useState } from 'react';
import icon from '../../assets/SilverHelix.png'
import './style.css'


export default function NavBar() {

    return (
        <nav className="transparent-background nav-wrapper">
            <div className="space-between nav-size">
                <a href="#" className="brand-logo logo-container logo-size">
                    <img className="logo-image" src={icon}></img>
                </a>
                <ul className="space-between">
                    <li className="nav-bar-margin"><a className="card-link" href="#Major-projects">Major Projects</a></li>
                    <li className="nav-bar-margin"><a className="card-link" href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}