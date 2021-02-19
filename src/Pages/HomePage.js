import React from "react"
import {Center} from "@chakra-ui/react";
import mainImage from "../Images/Portraits/6Z0A6780 2.jpg";
import SocialButtonsBar from "../Components/SocialButtonsBar";

function HomePage() {
    return (
        <div>
            <Center>
                <img src={mainImage} width={1200} style={{boxShadow: "3px 5px 7px gray"}}/>
            </Center>

        </div>
    )
}


export default HomePage