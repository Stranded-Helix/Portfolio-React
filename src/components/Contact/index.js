import React, { useEffect, useState } from 'react';
import icon from '../../assets/SilverHelix.png'
import './style.css';
import {Card} from 'react-bootstrap';


export default function Contact() {

    const spanner = {span: 6, offset: 3}

    return (
        <div>
            <h4 class="title color-neutral">Contact Me</h4>
            <Card id="contact" className="card horizontal">
                <div className="card-stacked blue-gradient">
                    <div className="space-around">
                        <a className="card-link" href="https://www.linkedin.com/in/garrett-fite-07a74096/">Linkedin</a>
                        <a className="card-link" href="https://github.com/Stranded-Helix">GitHub</a>
                        <a className="card-link" href="mailto: garrett.fite@gmail.com">Garrett.fite@gmail.com</a>
                        <a className="card-link" >817-933-1634</a>
                    </div>
                </div>
            </Card>
        </div>

    )
}