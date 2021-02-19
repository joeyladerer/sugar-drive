import React from "react"
import {Box, Center} from "@chakra-ui/react"

function MerchBox(props) {
    return (
        <Box>
            <Center>
                <img src={props.image} width={300}/>
            </Center>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", alignContent: "space-around"}}>
                <h1 style={{
                    color: "black",
                    fontFamily: "typeface-abril-ftface",
                    fontSize: 20,
                }}>{props.title} -</h1>
                <h1 style={{
                    color: "black",
                    fontFamily: "typeface-abril-ftface",
                    fontSize: 20,
                }}>- ${props.price}</h1>
            </div>

        </Box>

    )
}

export default MerchBox