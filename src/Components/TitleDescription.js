import React from "react"
import {Box} from "@chakra-ui/react"

function TitleDescription(props) {
    return (
        <div style={{textAlign: "center"}}>
            <Box marginTop={5}
                style={{
                    color: "black",
                    fontFamily: "typeface-abril-ftface",
                    fontSize: 60,
                    marginBottom: -30}}
            >{props.title}</Box>
            <Box marginTop={3}
                style={{
                    color: "black",
                    fontFamily: "typeface-abril-ftface",
                    fontSize: 27,
                    marginBottom: -30}}
            >released {props.release}</Box>
            <Box margin={10} width={500}
                style={{
                    color: "black",
                    fontFamily: "typeface-abril-ftface",
                    fontSize: 20,
                    marginBottom: -30}}
            >{props.description}</Box>
        </div>
    )
}

export default TitleDescription