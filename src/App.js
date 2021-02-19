import logo from './logo.svg';
import './App.css';
import {Box, Center, Button, ButtonGroup} from "@chakra-ui/react"
import mainImage from "./Images/Portraits/6Z0A6780 2.jpg"
import TopText from "./Components/TopText.js"
import NavButtons from "./Components/NavButtons.js"
import SocialButtonsBar from "./Components/SocialButtonsBar.js"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import HomePage from "./Pages/HomePage.js"
import Music from "./Pages/Music.js"
import About from "./Pages/About"
import Gallery from "./Pages/Gallery"
import Merch from "./Pages/Merch"
import React from "react";

function App() {
    return (
        <Router>
            <div>
                <Center>
                    <Link to={"/"}>
                        <TopText/>
                    </Link>
                </Center>
                <Center>
                    <NavButtons/>
                </Center>
                <Switch>
                    <Route path={"/"} exact component={HomePage}/>
                    <Route path={"/music"} component={Music}/>
                    <Route path={"/about"} component={About}/>
                    <Route path={"/gallery"} component={Gallery}/>
                    <Route path={"/merch"} component={Merch}/>
                </Switch>
                <Center>
                    <SocialButtonsBar/>
                </Center>
            </div>
        </Router>

    );
}

export default App;
