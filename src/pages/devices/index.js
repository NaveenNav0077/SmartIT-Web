import React from 'react'
import './devices.scss';

function Devices() {
    return (
        <div className="devicesPage">
            <div className="devicesPage__sidebar">
                <div className="devicesPage__sidebar__HeaderElements">Devices</div>
                <div className="devicesPage__sidebar__elements">Quick Access</div>
                <div className="devicesPage__sidebar__elements">Homes</div>
                <div className="devicesPage__sidebar__elements">Rooms</div>
            </div>
            <div className="devicesPage__devices">
                <div className="devicesPage__devices__body">
                    <div className="devicesPage__devices__body__variyngCard">
                 
                    </div>

                    <div className="devicesPage__devices__body__variyngCard">
                 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Devices;