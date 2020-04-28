import React from "react";
import Routers from './pages/router'
import {Layout, Menu,Button } from 'antd'
import './app.css'
import leftMenu from "./common/leftMenu";
import {useObserver} from 'mobx-react'
import MenuTree from './components/MenuTree'
import loginLogic from './mobx/login';
const { Header, Content, Footer, Sider } = Layout;

function App(props) {
    const {userInfo,handleLogOut} =loginLogic;
    return useObserver(() => (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    {leftMenu.map(item=>MenuTree(item))}
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0,textAlign:'right' }} >
                    欢迎您：{userInfo.username}
                    &emsp;
                    <Button onClick={()=>{handleLogOut(props)}}>登出</Button>
                </Header>
                <Content style={{ margin: '16px' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <Routers/>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    ))
}

export default App


