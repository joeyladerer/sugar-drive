import React from "react"
import {Box} from "@chakra-ui/react";

function TopText() {
    return (
        <Box textAlign={"center"}>
            <p style={{
                color: "black",
                fontFamily: "typeface-abril-ftface",
                fontSize: 100,
                marginBottom: -30
            }}>SUGAR DRIVE</p>
            <Box marginBottom={8}>
                <p style={{
                    color: "black",
                    fontFamily: "typeface-abril-ftface",
                    fontSize: 30,
                    marginBottom: -10
                }}>Antics and Optics, out now</p>
            </Box>
        </Box>
    )
}

export default TopText