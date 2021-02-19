import React from "react"
import {Button} from "@chakra-ui/react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ToggleOnSingles from "./ToggleOnSingles";
import ToggleOnAlbums from "./ToggleOnAlbums";

function ToggleBar(props) {
    if (props.type==="albums") {
        return (
            <ToggleOnAlbums/>
        )
    } else {
        return (
            <ToggleOnSingles/>
        )
    }
}

export default ToggleBar