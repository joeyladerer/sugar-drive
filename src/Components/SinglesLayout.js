import React from "react"
import {Box, Button} from "@chakra-ui/react";
import TitleDescription from "./TitleDescription";
import ADCover from "../Pages/Gallery/ADCover.jpeg";

function SinglesLayout(props) {
    return (
        <Box>
            <div style={{
                display: "flex",
                justifyContent: "center",
            }}>
                <Box marginRight={10}>
                    <TitleDescription
                        title={props.title}
                        release={props.release}
                        description={props.description}/>
                </Box>
                <Box marginLeft={10}>
                    <img src={props.image} width={400}/>
                </Box>
            </div>
        </Box>
    )
}

export default SinglesLayout
