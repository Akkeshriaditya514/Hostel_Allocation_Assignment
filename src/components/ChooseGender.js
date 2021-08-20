import React from 'react'
import female from './female.png'
import male from './male.png'



export default function ChooseGender() {
   
    return (
        <div className="card-header" >
            <h1>Choose your Hostel</h1>
            <div className="card-container">
                <a style={{textDecoration:"none",color:"white"}} href="/hostel" className="card-female">
                    <img src={female} alt="female" width="90rem" height="90rem" style={{marginTop:20}}></img>
                    <h3 style={{textDecoration:"none",color:"black"}}>females Hostel</h3>
                </a>
                <a style={{textDecoration:"none",color:"white"}}href="/hostelB" className="card-male">
                    <img src={male} alt="male" width="90rem" height="90rem" style={{marginTop:20}}></img>
                    <h3 style={{textDecoration:"none",color:"black"}}>males Hostel</h3>
                </a>
            </div>
        </div>
    )
}
