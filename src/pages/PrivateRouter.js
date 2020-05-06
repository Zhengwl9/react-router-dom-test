import React from "react";
import {Route,Redirect} from 'react-router-dom';
import loginLogic from '../mobx/login';
import {observer} from 'mobx-react';
function PrivateRouter(props) {
    const {isLogin} = loginLogic;
    const { component: Component, ...rest } = props;
    return (
        <Route
            {...rest}
            render={(props) => isLogin ? <Component {...props} /> : <Redirect to={{pathname:'/login'}} />}
        />
    );
}
export default observer(PrivateRouter)
