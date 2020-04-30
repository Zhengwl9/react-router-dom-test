import React from 'react'
import style from './index.scss'
import {Input} from "antd";
import classNames from 'classnames'
const { Search } = Input;

function User() {
    return (
        <div>
            <header className={style.header}>
                <Search
                    className={style.searchInput}
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    enterButton
                />
            </header>
            <div className={style.myTestBox}>
                <p className={style.testFont}>这是我的字体</p>
                <a href="https://www.baidu.com">去百度</a>
                <div className={style.testDiv}/>
            </div>

            <div className={classNames(style.seriousError,)}>
                出错了！
            </div>

            <p className={style.myText}>这是我的文字</p>

        </div>
    )
}
export default User;