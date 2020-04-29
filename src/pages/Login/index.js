import React from 'react'
import { Form, Input, Button } from 'antd'
import {observer} from 'mobx-react'
import loginLogic from '../../mobx/login'
function LoginPage(props) {
    const {handleLogin,isLogin,loading} =loginLogic;
    let login=(values)=>{
        let result=handleLogin(values)
        result.then(()=>{
            props.history.push('/')
        })
    }
    return (
        <Form
            name="basic"
            onFinish={(values)=>{login(values)}}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item label="Password"
                       name="password"
                       rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>Submit{isLogin}</Button>
            </Form.Item>
        </Form>
    );
}

export default observer(LoginPage);
