import React  from 'react'
import {Switch,Route} from 'react-router-dom'
import loadable from "@loadable/component";
import PrivateRouter from "./PrivateRouter";
import NotFound from "./notFound";
import Home from './home'

const About = loadable(() => import("./About"),<Loading/>);
const User = loadable(() => import("./User"),<Loading/>);
 function Router() {
    return (
        <Switch>
            <PrivateRouter exact path="/" component={Home}/>
            <PrivateRouter exact path="/about" component={About}/>
            <PrivateRouter exact path="/user" component={User}/>
            <Route path='*' component={NotFound}/>
        </Switch>
    )
}


function Loading() {
    return (<div>loading...</div>)
}

export default Router