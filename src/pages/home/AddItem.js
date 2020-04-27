import React,{Component} from 'react'
import './AddItem.scss'
import {Button,Input} from 'antd'
import {observer} from 'mobx-react'
import homeLogic from '../../mobx/home'

@observer
class AddItem extends Component {
    render() {
        const {addItem,name,handleChangeName} = homeLogic;
        return (
            <div className="addItem">
                <Input className="addItemInput" value={name} onChange={handleChangeName}/>
                <br/><br/>
                <Button onClick={addItem} type="primary">增加</Button>
            </div>
        );
    }
}

export default AddItem;