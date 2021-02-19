import React from "react"
import {Button} from "@chakra-ui/react";
import {Link} from "react-router-dom";

function ToggleOnAlbums() {
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <Button
                backgroundColor={"transparent"}
                borderColor={"transparent"}
                fontFamily={"typeface-abril-ftface"}
                width={100}
                color={"black"}
                _hover={{backgroundColor: "transparent", color: "#D4B3B4"}}
            >albums</Button>
            <Link to={"/music/singles"}>
            <Button
                backgroundColor={"transparent"}
                borderColor={"transparent"}
                fontFamily={"typeface-abril-ftface"}
                width={100}
                color={"darkgray"}
                _hover={{backgroundColor: "transparent", color: "#D4B3B4"}}
                variant={"ghost"}
            >singles</Button>
            </Link>
        </div>
    )
}

export default ToggleOnAlbums