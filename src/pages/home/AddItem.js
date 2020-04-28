import React from 'react'
import './AddItem.scss'
import {Button,Input} from 'antd'

function AddItem(props) {
    const {addItem,name,handleChangeName} = props;
    return (
        <div className="addItem">
            <Input className="addItemInput" value={name} onChange={handleChangeName}/>
            <br/><br/>
            <Button onClick={addItem} type="primary">增加</Button>
        </div>
    );
}


export default (AddItem);