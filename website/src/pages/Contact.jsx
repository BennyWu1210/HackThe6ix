import React from "react";
import Navbar from "../components/Navbar";
import "./Contact.css"

export default function Contact() {
    return (
        <div>
            <Navbar color="red"></Navbar>
            <h1 className="header">Contact Us!</h1>
            <p className="sigma">
                Furry Finder is a website created with the intention of helping owners 
                find their lost pets. With the help of others, the success rate of 
                finding preciously lost pets are higher. This Emmy-winning website 
                is globally recognized for single-handedly eradicating the stray cat 
                population in Istanbul by 78%. 
            </p>
            <p className="alpha">
                If you have any questions, concerns, compliments, or reviews, you may 
                call our customer service number at: 1-382-596-8277 or email us at 
                furryfinder@wearehackerone@gmail.com. We are happy to help!
            </p>
        </div>
    );
}
