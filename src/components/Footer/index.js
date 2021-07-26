import React, { useEffect, useState } from 'react';
import './style.css';
import {Card} from 'react-bootstrap';


export default function Contact() {

    const spanner = {span: 6, offset: 3}

    return (
        <div>
            <Card id="contact" className="card horizontal">
                <div className="card-stacked blue-gradient space-around">
                    <h4>Garrett Fite</h4>
                    <h4>2021</h4>
                </div>
            </Card>
        </div>

    )
}