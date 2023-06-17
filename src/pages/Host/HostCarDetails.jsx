import React from "react"
import { useParams, Link } from "react-router-dom"
export default function HostCarDetails(){
    const params=useParams()
    const[hostCar, setHostCar]=React.useState([])
    React.useEffect(()=>{
        fetch( `/api/host/vans/${params.id}`)
        .then(res=>res.json())
        .then(data=>setHostCar(data.vans))
    }
    ,[])

    return(
        <section className="entire-car-container">
            <Link to=".." relative="path" className="back-btn">--Back to Cars</Link>
                <div className="host-car-detail">
                    <img className="host-car-img" src={hostCar.imageUrl} />
                    <div className="host-detail-text"> 
                    <p className={hostCar.type}>{hostCar.type}</p>
                   
                        <h3>{hostCar.name}</h3>
                        <h4>${hostCar.price}/day</h4>
                    </div>
                </div>
        </section>
    )

}