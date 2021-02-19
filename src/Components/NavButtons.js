import React from "react"
import {Button, ButtonGroup} from "@chakra-ui/react"
import SingleNavButton from "./SingleNavButton";
import {Link} from "react-router-dom"

function NavButtons() {
    return (
        <div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
            <Link to={"/"}>
                <SingleNavButton text={"home"}/>
            </Link>
            <Link to={"/music"}>
            <SingleNavButton text={"music"}/>
            </Link>
            <Link to={"/about"}>
                <SingleNavButton text={"about"}/>
            </Link>
            <Link to={"/gallery"}>
                <SingleNavButton text={"gallery"}/>
            </Link>
            <Link to={"/merch"}>
                <SingleNavButton text={"merch"}/>
            </Link>
        </div>
    )
}

export default NavButtons
