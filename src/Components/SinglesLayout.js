import React from "react"
import {Box, Button} from "@chakra-ui/react";
import TitleDescription from "./TitleDescription";
import ADCover from "../Images/Gallery/ADCover.jpeg";

function SinglesLayout(props) {
    return (
        <Box>
            <div style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap-reverse"
            }}>
                <Box marginBottom={59}>
                    <TitleDescription
                        title={props.title}
                        release={props.release}
                        description={props.description}/>
                </Box>
                <Box marginBottom={-19} marginTop={5} marginLeft={5} marginRight={5}>
                    <img src={props.image} width={350}/>
                </Box>
            </div>
        </Box>
    )
}

export default SinglesLayout
