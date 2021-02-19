import React from "react"
import sideBySide from "../Images/Gallery/sideBySide.webp"
import slantedSunset from "../Images/Gallery/slantedSunset.jpg"

function About() {
    return (
        <div style={{display: "flex", justifyContent: "center", alignContent: "center", marginBottom: -50, marginTop: -40, flexWrap: "wrap"}}>
            <div style={{
                textAlign: "center",
                color: "black",
                fontFamily: "typeface-abril-ftface",
                fontSize: 20,
                marginTop: 50,
                marginLeft: 50,
                marginRight: 50
            }}>
                <h1>. . .</h1>
            <p>Maxx Principale and Joey Laderer, are two childhood friends from Aliso Viejo, California and are the co-founders of Sugar Drive. The two bandmates are at the forefront of their genre, alt-indie/rock; while daringly combining a dying style of play with the beats of our current era. Their unique chemistry along with their understanding of past and present musical trends leaves us all questioning how long they have until they go mainstream. The musicianship of this duo is a must listen as they come together to create groundbreaking music for us all to hear.</p>
                <h1>. . .</h1>
            </div>
            <div style={{margin: 50}}>
            <img src={sideBySide} width={300}/>
            </div>
            <div style={{margin: 50}}>
                <img src={slantedSunset} width={300}/>
            </div>
        </div>
    )
}

export default About