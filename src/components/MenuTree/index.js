import {Menu} from "antd";
import {Link} from "react-router-dom";
import React from "react";
import { PieChartOutlined,UserOutlined,} from '@ant-design/icons';
const { SubMenu } = Menu;
export default function MenuTree(props) {
    const {title,key,path,children,} =props;
    if(children && children.length){
        return (
            <SubMenu
                key={key}
                title={<span><UserOutlined /><span>{title}</span></span>}
            >
                {children.map(item=>MenuTree(item))}
            </SubMenu>
        )
    }
    return (
        <Menu.Item key={key}>
            <PieChartOutlined />
            <Link to={path}>{title}</Link>
        </Menu.Item>
    )
}