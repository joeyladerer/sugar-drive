import React from "react"
import {Button, ButtonGroup} from "@chakra-ui/react"

function SingleNavButton(props) {
    return (
        <div style={{marginRight: 40, marginLeft: 40, marginTop: 4, marginBottom:30}}>
        <Button width={170}
            colorScheme="white"
            color={"black"}
            variant={"outline"}
        >{props.text}</Button>
        </div>
    )
}

export default SingleNavButton