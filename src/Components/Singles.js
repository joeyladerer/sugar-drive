import React from "react"
import ReleaseBlock from "./ReleaseBlock";
import {Box} from "@chakra-ui/react";
import ADCover from "../Pages/Gallery/ADCover.jpeg"
import ParanoiaCover from "../Pages/Gallery/ParanoiaCover.png"
import PurgatoryCover from "../Pages/Gallery/PurgatoryCover.png"

function Singles() {
    return (
        <Box>
            <ReleaseBlock
                image={ParanoiaCover}
                title={"Paranoia"}
                release={"february 12, 2021"}
                description={"Paranoia is a song that takes you on a trip to the forest. This psychedelic rock starts off slow and light hearted before building into an eerie, uncomfortable guitar solo section, and ultimately closes with a loud, big chorus. This song was written four years ago by Maxx Principale on a trip in Yosemite; it was the first song he ever wrote."}
            />
            <ReleaseBlock
                image={PurgatoryCover}
                title={"Purgatory"}
                release={"january 29, 2021"}
                description={"The dark side of Sugar Drive's lyrics come out on this song, Purgatory. Purgatory is an aggressive, fierce rock song that starts strong and finishes strong, with a guitar solo in 7/8 time placed in the middle. Its dark nature is matched by the screaming guitars and drums throughout the song."}
            />
        </Box>
    )
}

export default Singles