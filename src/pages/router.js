import React  from 'react'
import {Switch,Route} from 'react-router-dom'
import loadable from "@loadable/component";
import NotFound from "./notFound";
import PrivateRouter from "./PrivateRouter";

const Home = loadable(() => import("./home"),<Loading/>);
const About = loadable(() => import("./About"),<Loading/>);

 function Router() {
    return (
        <Switch>
            <PrivateRouter exact path="/" component={Home}/>
            <PrivateRouter exact path="/about" component={About}/>
            <Route path='*' component={NotFound}/>
        </Switch>
    )
}


function Loading() {
    return (<div>loading...</div>)
}

export default  React.memo(Router)
