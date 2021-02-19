import React from "react"
import ReleaseBlock from "./ReleaseBlock";
import {Box} from "@chakra-ui/react";
import ADCover from "../Images/Gallery/ADCover.webp"

function Albums() {
    return (
        <Box>
            <ReleaseBlock
                image={ADCover}
                title={"American Dreams"}
                release={"october 2, 2020"}
                description={"American Dreams is Sugar Drive’s debut album. The entire album was writted and recorded through the summer of 2020. American Dreams has a wide variety of music, from the classic rock style of  “The American Dream” and “Chained in Love”, to the groovy “Last Time”,  ending on the soft hum of  “The Nest/Eagle Fly”.  The entire album was produced in one bedroom, using only a microphone, an amp, some instruments, and Logic Pro X. "}
            />
        </Box>
    )
}

export default Albums