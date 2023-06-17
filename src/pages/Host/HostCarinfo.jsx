import React from "react";
import { useOutletContext } from "react-router-dom";
export default function HostCarInfo(){
    const {hostCar}=useOutletContext()
    return(<><div className="info-container"><h3 className="bold-text">Name:</h3>
    <p>{hostCar.name}</p>
    </div>
    <div className="info-container"><h3 className="bold-text">Category:</h3>
    <p>{hostCar.type}</p>
    </div>
    <div className="info-container"><h3 className="bold-text">Visiblity:</h3>
    <p>Public</p></div>
    </>)
}