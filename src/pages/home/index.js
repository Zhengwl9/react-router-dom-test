import React, {Component} from 'react';
import {observer} from 'mobx-react'
import homeLogic from '../../mobx/home'
import AddItem from './AddItem'
import './index.scss'
import Items from './Items'
import {Button} from 'antd'
@observer
class Index extends Component {
    render() {
        const {handleDelete,lists,addItem,name,handleChangeName} = homeLogic;
        return (
            <div>
                <Items
                    lists={lists}
                    handleDelete={handleDelete}
                />
                <AddItem
                    addItem={addItem}
                    name={name}
                    handleChangeName={handleChangeName}
                />
                <br/>
                <Button onClick={()=>{this.props.history.push('/test')}}>去test</Button>
            </div>
        );
    }
}

export default Index;