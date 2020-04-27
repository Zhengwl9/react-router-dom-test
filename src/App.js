import React from "react";
import {BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch} from "react-router-dom";
import LoginPage from "./pages/Login";
import Routers from './pages/router'
export default function Nesting() {
    return (
        <Router>
            <Switch>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <Route path="/">
                    <App/>
                </Route>
            </Switch>
        </Router>
    );
}

function App() {
    let { path, url } = useRouteMatch();
    return (
        <div  style={{display:'flex'}}>
            <div style={{padding: "10px", width: "30%", background: "#f0f0f0"}}>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    <li><Link to={`${url}`}>Home</Link></li>
                    <li><Link to="/test">Test</Link></li>
                </ul>
            </div>
            <div style={{ flex: 1, padding: "10px" }}>
                <Routers/>
            </div>
        </div>


    );
}


