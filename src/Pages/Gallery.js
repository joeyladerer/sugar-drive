import React from "react"
import {Box} from "@chakra-ui/react"
import coolSky from "../Images/Gallery/coolSky.webp"
import slantedSunset from "../Images/Gallery/slantedSunset.jpg"
import purgatoryEmpty from "../Images/Gallery/purgatoryEmpty.webp"
import babies from "../Images/Gallery/babies.webp"
import withBongo from "../Images/Gallery/withBongo.jpeg"
import handsUp from "../Images/Gallery/handsUp.webp"
import paranoiaCover from "../Images/Gallery/paranoiacover_v1.webp"
import onTree from "../Images/Gallery/onTree.webp"
import withGuitars from "../Images/Gallery/withGuitars.jpg"
import sideBySide from "../Images/Gallery/sideBySide.webp"
import eatPlane from "../Images/Gallery/eatPlane.webp"
import helecopter from "../Images/Gallery/helecopter.webp"

function Gallery() {
    return (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
            <Box margin={3} _hover={{boxShadow: "3px 5px 7px gray"}}>
            <img src={onTree} width={525} />
            </Box>
            <Box margin={3} _hover={{boxShadow: "3px 5px 7px gray"}}>
                <img src={slantedSunset} width={350} />
            </Box>
            <Box margin={3} _hover={{boxShadow: "3px 5px 7px gray"}}>
                <img src={coolSky} width={525} />
            </Box>

            <Box margin={3} _hover={{boxShadow: "3px 5px 7px gray"}}>
                <img src={babies} width={507} />
            </Box>
            <Box margin={3} _hover={{boxShadow: "3px 5px 7px gray"}}>
                <img src={purgatoryEmpty} width={380} />
            </Box>
            <Box margin={3} _hover={{boxShadow: "3px 5px 7px gray"}}>
                <img src={withBongo} width={507} />
            </Box>
            <Box margin={3} _hover={{boxShadow: "3px 5px 7px gray"}}>
                <img src={sideBySide} width={415} />
            </Box>
            <Box margin={3} _hover={{boxShadow: "3px 5px 7px gray"}}>
                <img src={handsUp} width={554} />
            </Box>
            <Box margin={3} _hover={{boxShadow: "3px 5px 7px gray"}}>
                <img src={paranoiaCover} width={415} />
            </Box>
            <Box margin={3} _hover={{boxShadow: "3px 5px 7px gray"}}>
                <img src={eatPlane} width={500} />
            </Box>
            <Box margin={3} _hover={{boxShadow: "5px 5px 7px gray"}}>
                <img src={withGuitars} width={375} />
            </Box>
            <Box margin={3} _hover={{boxShadow: "3px 5px 7px gray"}}>
                <img src={helecopter} width={500} />
            </Box>
        </div>
    )
}

export default Gallery