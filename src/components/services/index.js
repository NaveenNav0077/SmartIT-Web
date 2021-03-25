import React from 'react';
import './services.scss';
import { Link } from 'react-scroll';
import { FaMobile } from 'react-icons/fa';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import WifiIcon from '@material-ui/icons/Wifi';

function Services() {
    return (
        <div className="services" id="services">
            <div className="services__text">
                <h1 className="services__text__h1">SMART HOME</h1>
                <p className="services__text__p">Control any thing from any where, at the tap of your smartphone.</p>
            </div>
            <div className="services__fields">
                <div  className="services__fields__circle">
                    <div className="services__fields__circle__icon"><FaMobile size={50} /></div>
                    <h3 className="services__fields__circle__h3">Manage Centerly</h3>
                </div>

                <div  className="services__fields__circle">
                    <div className="services__fields__circle__icon"><WifiIcon /></div>
                    <h3 className="services__fields__circle__h3">Eassy Conectivity</h3>
                </div>

                <div  className="services__fields__circle">
                    <div className="services__fields__circle__icon"><AiOutlineAppstoreAdd size={50} /></div>
                    <h3 className="services__fields__circle__h3">Smart Application</h3>
                </div>
            </div>
            <div className="services__btn">
                <Link to="contacts" smooth={true}>Reuest a demo</Link>
            </div>
        </div>
    )
}

export default Services
