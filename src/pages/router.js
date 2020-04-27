import React, { Component } from 'react'
import {Switch,Route,useRouteMatch} from 'react-router-dom'
import Home from './home/index'
import NotFound from "./notFound";
import LoginPage from "./Login";

 function Router() {
    let { path, url } = useRouteMatch();
    let a=3;
    return (
        <Switch>
            {a>0?<Route exact path={path} component={Home}/>:null}
            {a>0?<Route exact path="/test" component={Test}/>:null}
            {a>0?<Route exact path="/test1" component={Test1}/>:null}
            {a>0?null:<Route exact path="/test2" component={Test2}/>}
            <Route component={NotFound}/>
        </Switch>
    )
}


class Test extends Component {
    render() {
        return (
            <div>Test</div>
        );
    }
}

class Test1 extends Component {
    render() {
        return (
            <div>Test</div>
        );
    }
}


class Test2 extends Component {
    render() {
        return (
            <div>Test</div>
        );
    }
}

export default  React.memo(Router)
