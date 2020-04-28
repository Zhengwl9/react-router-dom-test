import React from 'react'
import { Form, Input, Button } from 'antd'
import {useObserver} from 'mobx-react'
import loginLogic from '../../mobx/login'
function LoginPage(props) {
    const {handleLogin,loading} =loginLogic;
    function handleLoginSuc(values){
        handleLogin(values).then(()=>{
            props.history.push('/')
        })
    }
    return useObserver(
       ()=>(
        <Form
        name="basic"
        onFinish={(values)=>{handleLoginSuc(values)}}
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
            <Button type="primary" htmlType="submit" loading={loading}>Submit</Button>
        </Form.Item>
    </Form>
       )
    );
}

export default LoginPage;
