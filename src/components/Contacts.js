import React from 'react'
import MapComponent from "./Map";
const Contacts = (props) =>{
    return(
        <div className={"contacts"}>
            <div className={"container"}>
            <div className={"contactsTelAndEmail"}>
                <a href={"#"}>+380988535361</a>
                <a href={"#"}>+380981234567</a>
            </div>
            <div className={"contactsAddress"}>
                <a href={"#"}>м.Харків вул. Академіка павлова 23</a>
                <a href={"#"}>м.Харків вул. Героїв праці 56</a>
            </div>
            <div className={"contactsMessengers"}>
                <a href={"#"}>Telegram</a>
                <a href={"#"}>Viber</a>
                <a href={"#"}>Instagram</a>
            </div>
                <MapComponent/>
            </div>
        </div>
    )
}
export default Contacts