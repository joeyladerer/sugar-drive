import React from "react"
import {Button} from "@chakra-ui/react";
import {Link} from "react-router-dom";

function ToggleOnSingles() {
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <Link to={"/music"}>
            <Button
                backgroundColor={"transparent"}
                borderColor={"transparent"}
                fontFamily={"typeface-abril-ftface"}
                width={100}
                color={"darkgray"}
                _hover={{backgroundColor: "transparent", color: "#D4B3B4"}}
            >albums</Button>
            </Link>
            <Button
                backgroundColor={"transparent"}
                borderColor={"transparent"}
                fontFamily={"typeface-abril-ftface"}
                width={100}
                color={"black"}
                _hover={{backgroundColor: "transparent", color: "#D4B3B4"}}
                variant={"ghost"}
            >singles</Button>
        </div>
    )
}

export default ToggleOnSingles