import React from "react"
import ReleaseBlock from "./ReleaseBlock";
import {Box} from "@chakra-ui/react";
import ADCover from "../Images/Gallery/ADCover.webp"
import AnticsCover from "../Images/Gallery/antics-cover-reducedsize.png"

function Albums() {
    return (
        <Box>
            <ReleaseBlock
                image={AnticsCover}
                title={"Antics and Optics"}
                release={"march 4, 2021"}
                description={"Antics and Optics is Sugar Drive’s second album. This album was recorded through the winter of 2020 to the spring of 2021. Antics and Optics’ lyrics were written over the course of the last 3 years, including some of Maxx’s earliest works. “A&O” has a broad variety of subgenres within its rock style with deep underlying meanings, from the plaguing message of sin in “Purgatory”, to the classic heartbreak songs like “Starstruck”, “Alone Together”, and “Cajun Girl”. The peak of the album being the naturally whimsical experience of “Paranoia”, followed by the encouragingly optimistic message of “Sometimes” ending on the vibrant extravaganza tribute song to the great Frank Zappa in “Live from Frank Zappa’s funeral”. The album was produced both in Berkeley and Aliso Viejo, California, using a microphone, amps, instruments, a synthesizer pedal, and Logic Pro X."}
            />
            <ReleaseBlock
                image={ADCover}
                title={"American Dreams"}
                release={"october 2, 2020"}
                description={"American Dreams is Sugar Drive’s debut album. The entire album was written and recorded through the summer of 2020. American Dreams has a wide variety of music, from the classic rock style of  “The American Dream” and “Chained in Love”, to the groovy “Last Time”,  ending on the soft hum of  “The Nest/Eagle Fly”.  The entire album was produced in one bedroom, using only a microphone, an amp, some instruments, and Logic Pro X. "}
            />
        </Box>
    )
}

export default Albums