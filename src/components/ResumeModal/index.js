import React, { useEffect, useState } from 'react';
import icon from '../../assets/SilverHelix.png'
import './style.css'


export default function About() {

    return (
        <div id="modal-resume" className="modal blue-gradient">
            <div className="card blue-gradient">
                <div className="modal-content">
                    <h4>Download</h4>
                    <p>G.Fite Resume - 2021.pdf</p>
                </div>
                <div className="blue-gradient card-action center-align">
                    <a href="./assets/G.Fite Resume - 2021.pdf" className="modal-close" download>Download</a>
                    <a href="#!" className="modal-close ">Cancel</a>
                </div>
            </div>
        </div>
    )
}