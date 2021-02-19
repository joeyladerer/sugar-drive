import React from "react"
import ToggleBar from "./ToggleBar";
import Singles from "./Singles";

function DisplaySingles() {
    return (
        <div>
        <ToggleBar type={"singles"}/>
        <Singles/>
        </div>
    )
}
export default DisplaySingles