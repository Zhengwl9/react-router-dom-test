import React from 'react'
import { Result, Button } from 'antd';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
export default function NotFound() {
    const handleBack=()=>{
        history.goBack();
    }
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={
                <Button type="primary" onClick={handleBack}>Back Home</Button>
            }
        />
    )
}