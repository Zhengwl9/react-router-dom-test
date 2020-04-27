import React, {Component} from 'react';
import {observer} from 'mobx-react'
import homeLogic from '../../mobx/home'
import AddItem from './AddItem'
import './index.scss'
import {Button} from 'antd'
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
@observer
class Index extends Component {
    render() {
        const {handleDelete,lists} = homeLogic;
        return (
            <div className="home">
                <ul>
                    {
                        lists.map((item, i) =>
                            <li key={item}>{item} &emsp; <Button onClick={() => {
                                handleDelete(i)
                            }}>删除</Button></li>)
                    }
                </ul>
                <AddItem/>
                <Button onClick={()=>{
                    history.push({
                        pathname:'/test'
                    })
                }}>去test</Button>
            </div>
        );
    }
}

export default Index;