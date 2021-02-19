import React from "react"
import SingleNavButton from "./SingleNavButton";
import {Image, Button, ButtonGroup, Box, Center} from "@chakra-ui/react"
import sampleImage from "../Images/Portraits/6Z0A6780 2.jpg"
import instagram from "../Images/socials/instagram-brands.svg"
import youtube from "../Images/socials/youtube-brands.svg"
import spotify from "../Images/socials/spotify-brands.svg"
import applemusic from "../Images/socials/itunes-brands.svg"

function SocialButtonsBar() {
    return (
        <Center>
            <div style={{display: "flex", marginTop: 60, marginBottom: 80, flexWrap: "wrap", justifyContent: "center"}}>
                <div style={{display: "flex", marginRight: 40, marginLeft: 40, marginBottom: 40}}>
                    <Box as={"Button"}
                         backgroundColor={"transparent"}
                         width={10}
                         height={10}
                         onClick={() => window.open("https://www.instagram.com/sugar.drive/", "_blank")}
                    >
                        <Image src={instagram}/>
                    </Box>

                </div>
                <div style={{display: "flex", marginRight: 40, marginLeft: 40, marginBottom: 40}}>
                    <Box as={"Button"}
                         backgroundColor={"transparent"}
                         width={10}
                         height={10}
                         onClick={() => window.open("https://www.youtube.com/channel/UC5yMP3PAdIRovMl76dABP0w", "_blank")}
                    >
                        <Image src={youtube} w={10}/>
                    </Box>
                </div>
                <div style={{display: "flex", marginRight: 40, marginLeft: 40, marginBottom: 40}}>
                    <Box as={"Button"}
                         backgroundColor={"transparent"}
                         width={10}
                         height={10}
                         onClick={() => window.open("https://open.spotify.com/artist/7nn4RW0cHVVdPQ7WuJndjZ?si=DFWTF0ibR8qjPGHkHpZT5A", "_blank")}
                    >
                        <Image src={spotify} w={10}/>
                    </Box>
                </div>
                <div style={{display: "flex", marginRight: 40, marginLeft: 40, marginBottom: 40}}>
                    <Box as={"button"}
                         width={10}
                         height={10}
                         backgroundColor={"transparent"}
                         onClick={() => window.open("https://music.apple.com/us/artist/sugar-drive/1521946743", "_blank")}
                    >
                        <Image src={applemusic}/>
                    </Box>
                </div>
            </div>
        </Center>

    )

}

export default SocialButtonsBar