import React from "react";
import Routers from './pages/router'
import {Layout, Menu,Button } from 'antd'
import style from './app.scss'
import {useObserver} from 'mobx-react'
import MenuTree from './components/MenuTree'
import loginLogic from './mobx/login';
import {getFilterAuth} from './common/funcs'
const { Header, Content, Footer, Sider } = Layout;

function App(props) {
    const {userInfo,handleLogOut} =loginLogic;
    return useObserver(() => (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider>
                <div className={style.logo} />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    {getFilterAuth().map(item=> item &&  MenuTree(item))}
                </Menu>
            </Sider>
            <Layout className={style.siteLayout}>
                <Header className={style.siteLayoutBackground} style={{ padding: 0,textAlign:'right' }} >
                    欢迎您：{userInfo.username}
                    &emsp;
                    <Button type="primary" onClick={()=>{handleLogOut(props)}}>登出</Button>
                </Header>
                <Content style={{ margin: '16px' }}>
                    <div style={{ padding: 24, minHeight: 360 }}>
                        <Routers/>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    ))
}

export default App


