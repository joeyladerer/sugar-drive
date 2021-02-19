import React from "react"
import {Box} from "@chakra-ui/react"
import coolSky from "./Gallery/coolSky.jpg"
import slantedSunset from "./Gallery/slantedSunset.jpg"
import purgatoryEmpty from "./Gallery/purgatoryEmpty.JPG"
import babies from "./Gallery/babies.JPG"
import withBongo from "./Gallery/withBongo.jpeg"
import handsUp from "./Gallery/handsUp.JPG"
import paranoiaCover from "./Gallery/ParanoiaCover.png"
import onTree from "./Gallery/onTree.jpg"
import withGuitars from "./Gallery/withGuitars.jpg"
import sideBySide from "./Gallery/sideBySide.jpg"
import letsFight from "./Gallery/letsFight.JPG"
import eatPlane from "./Gallery/eatPlane.JPG"
import helecopter from "./Gallery/helecopter.JPG"

function Gallery() {
    return (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
            <Box margin={3}>
            <img src={onTree} width={525} />
            </Box>
            <Box margin={3}>
                <img src={slantedSunset} width={350} />
            </Box>
            <Box margin={3}>
                <img src={coolSky} width={525} />
            </Box>

            <Box margin={3}>
                <img src={babies} width={507} />
            </Box>
            <Box margin={3}>
                <img src={purgatoryEmpty} width={380} />
            </Box>
            <Box margin={3}>
                <img src={withBongo} width={507} />
            </Box>
            <Box margin={3}>
                <img src={sideBySide} width={415} />
            </Box>
            <Box margin={3}>
                <img src={handsUp} width={554} />
            </Box>
            <Box margin={3}>
                <img src={paranoiaCover} width={415} />
            </Box>
            <Box margin={3}>
                <img src={eatPlane} width={500} />
            </Box>
            <Box margin={3}>
                <img src={withGuitars} width={375} />
            </Box>
            <Box margin={3}>
                <img src={helecopter} width={500} />
            </Box>
        </div>
    )
}

export default Gallery