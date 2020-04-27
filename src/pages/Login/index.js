import React, {Component} from 'react';
import { createBrowserHistory } from 'history';
import {Link} from "react-router-dom";

const history = createBrowserHistory();
function LoginPage() {
    return (
        <div>
            <p>You must log in to view the page at</p>
            <Link to="/">登录</Link>
        </div>
    );
}

export default LoginPage;