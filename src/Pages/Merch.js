import React from "react"
import {Box} from "@chakra-ui/react"
import MerchBox from "../Components/MerchBox";
import onTree from "../Images/Gallery/onTree.webp"

function Merch() {
    return (
        <div>
            <Box textAlign={"center"} marginBottom={10}>
                <h1 style={{
                    color: "black",
                    fontFamily: "typeface-abril-ftface",
                    fontSize: 30
                }}>reach out to sugardrivemusic@gmail.com to purchase merch!</h1>
            </Box>
            <Box marginBottom={-5}>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                <MerchBox
                    title={"Antics and Optics T-Shirt -"}
                    image={onTree}
                    price={"$15"}
                />
            </div>
            </Box>


        </div>
    )
}

export default Merch