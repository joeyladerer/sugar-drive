import React from "react"
import {Box, Button, ButtonGroup, Divider} from "@chakra-ui/react"
import TitleDescription from "./TitleDescription";
import ADCover from "../Images/Gallery/ADCover.jpeg"
import SinglesLayout from "./SinglesLayout";

function ReleaseBlock(props) {
    return (
        <Box marginBottom={5}>
        <SinglesLayout
            image={props.image}
            title={props.title}
            release={props.release}
            description={props.description}/>
        </Box>
    )
}

export default ReleaseBlock