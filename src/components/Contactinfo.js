import React, { useState } from "react";
import { Link } from "react-router-dom";


const Contactinfo = (props) => {
    let currentid = window.location.href.split(":")[3];
    var name = "";
    var number = "";

    if (props) {
        props.contacts.map((item) => {
            if (item.id == currentid) {
                name = item.name;
                number = item.number;
            }
        })
    }

    return (
        <div>
            <div> <Link to={"/"}>
                <button className="ui button blue right" >Go Back</button></Link>
            </div>
            <div className="ui card centered">
                <div className="content">
                    <div className="header">{name}</div>
                    <div >{number}</div>
                </div>
            </div>
        </div>

    )
}

export default Contactinfo;