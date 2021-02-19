import React from "react"
import ReleaseBlock from "../Components/ReleaseBlock"
import ToggleBar from "../Components/ToggleBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Box} from "@chakra-ui/react"
import Singles from "../Components/Singles";
import ToggleOnSingles from "../Components/ToggleOnSingles";
import ToggleOnAlbums from "../Components/ToggleOnAlbums";
import DisplayAlbums from "../Components/DisplayAlbums";
import DisplaySingles from "../Components/DisplaySingles";

function Music() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path={"/music/singles"} component={DisplaySingles}/>
                    <Route path={"/music/"} exact component={DisplayAlbums}/>
                </Switch>
            </Router>
        </div>
    )
}

export default Music