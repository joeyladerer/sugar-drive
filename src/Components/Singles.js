import React from "react"
import ReleaseBlock from "./ReleaseBlock";
import {Box} from "@chakra-ui/react";
import ParanoiaCover from "../Images/Gallery/paranoiacover_v1.webp"
import PurgatoryCover from "../Images/Gallery/PurgatoryCover.png"
import StarstruckCover from "../Images/Gallery/starstruckCover.jpeg"
import TheAmericanDreamCover from "../Images/Gallery/TheAmericanDreamCover.jpeg"
import ChainedInLoveCover from "../Images/Gallery/ChainedInLoveCover.jpeg"
import TrafficCover from "../Images/Gallery/TrafficCover.jpg"

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
            <ReleaseBlock
                image={StarstruckCover}
                title={"Starstruck"}
                release={"january 14, 2021"}
                description={"Starstruck is a heartbroken song about losing a girl in the midst of a warm summer night. This song takes you on a roller coaster of feelings that will surely bring you down in electric fashion. Maxx Principale wrote this song after the end of a very short relationship in Boise, Idaho."}
            />
            <ReleaseBlock
                image={TheAmericanDreamCover}
                title={"The American Dream"}
                release={"september 4, 2020"}
                description={"The American Dream is the opening song to the album, American Dreams. This classic rock song is from the perspective of a New York bum observing the lives of hardworking pawns who are economically controlled by large corporations. The unnamed individual was broken by his employer, causing him to quit his job and fall to the streets of New York, where his clinically insane mind overtakes him with lonely thoughts and hopeful aspirations. A clash heavy song using a rough sample of a lick Maxx made was transformed into a trademark rock song with dueling solos from both band members, Joey and Maxx. "}
            />
            <ReleaseBlock
                image={ChainedInLoveCover}
                title={"Chained in Love"}
                release={"august 14, 2020"}
                description={"Chained in Love is a catchy pop induced rock song covering the topic of withdrawal and addiction. It shows how powerful substances are and how easily they can take over one's life, causing them to either kick it to the curb or crash and burn with their internal clock stopping its tick. This song’s flanged lead guitar is followed by long and advanced drum notes, using the ticking of a clock in parts of the songs breaks. The song ends on a peak singing performance by Joey with a short but moving solo. "}
            />
            <ReleaseBlock
                image={TrafficCover}
                title={"Traffic"}
                release={"july 24, 2020"}
                description={"Traffic, Sugar Drive's debut single, may have a laid back vibe, but is ultimately a song of frustration and disappointment. This was the first song Joey and Maxx every produced together from concept to completion in their room in Aliso Viejo, California."}
            />
        </Box>
    )
}

export default Singles