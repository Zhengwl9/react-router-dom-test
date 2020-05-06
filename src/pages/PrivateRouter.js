import React from "react";
import {Route,Redirect} from 'react-router-dom';
import loginLogic from '../mobx/login';
import {observer} from 'mobx-react';
import {getFilterAuth} from '../common/funcs'
function PrivateRouter(props) {
    const {isLogin} = loginLogic;
    const { component: Component, ...rest } = props;
    getFilterAuth();
    return (
        <Route
            {...rest}
            render={(props) => isLogin ? <Component {...props} /> : <Redirect to={{pathname:'/login'}} />}
        />
    );
}
export default observer(PrivateRouter)
