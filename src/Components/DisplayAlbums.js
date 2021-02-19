import React from "react"
import ToggleBar from "./ToggleBar";
import Albums from "./Albums";

function DisplayAlbums() {
    return (
        <div>
            <ToggleBar type={"albums"}/>
            <Albums/>
        </div>
    )
}

export default DisplayAlbums