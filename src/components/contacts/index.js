import React from 'react'
import './contacts.scss'

function Contacts() {
    return (
        <div id="contacts" className="contacts">
            <div className="contacts__form">
                <div  className="contacts__form__body">
                    <h1>Contact Us</h1>
                    <input className="contacts__form__body__input" type="text" placeholder="Name"/>
                    <input className="contacts__form__body__input" type="text" placeholder="Email"/>
                    <div  className="contacts__form__body__button" >Message</div>
                </div>
            </div>
            <div className="contacts__img">
                <img className="contacts__img__image" src="https://ibrainrobotics.com/images/smart/living-room.jpg" alt="iot" />
            </div>
        </div>
    )
}

export default Contacts
