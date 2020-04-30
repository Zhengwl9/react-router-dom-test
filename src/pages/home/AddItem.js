import React from 'react'
import style from './AddItem.scss'
import {Button,Input} from 'antd'

function AddItem(props) {
    const {addItem,name,handleChangeName} = props;
    return (
        <div >
            <Input className={style.addItemInput} value={name} onChange={handleChangeName} onPressEnter={addItem}/>
            &nbsp;
            <Button onClick={addItem} type="primary">增加</Button>
        </div>
    );
}


export default AddItem;