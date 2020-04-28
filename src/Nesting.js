import {Route, Switch} from "react-router-dom";
import LoginPage from "./pages/Login";
import React from "react";
import App from "./App";
export default function Nesting() {
    return (
        <Switch>
            <Route exact path="/login" component={LoginPage}/>
            <Route path="/" component={App}/>
        </Switch>
    );
}