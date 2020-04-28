import React from 'react'
import {Button} from "antd";
function Items(props) {
    const {lists,handleDelete} =props;
    return (
        <ul>
            {
                lists.map((item, i) =>
                    <li key={item}>
                        {item} &emsp;
                        <Button onClick={() => {handleDelete(i)}}>删除</Button>
                    </li>
                )
            }
        </ul>
    )
}
export default Items;