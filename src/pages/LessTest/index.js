import React, {Component} from 'react';
import style from './index.less'
class LessTest extends Component {
    render() {
        return (
            <div>
                <h3>LessTest</h3>
                <div className={style.myDiv}>
                    dkfjakg
                </div>

                <div id={style.header}>
                    <a >这是a标签</a>
                </div>
                <div className={style.banner}>
                    banner
                </div>
                <div className={style.test}>
                    test
                </div>
                <nav>
                    <ul>
                        <li>11</li>
                        <li>22</li>
                    </ul>
                </nav>
                <table className={style.someClass}>
                    <thead>
                        <tr><th>1</th></tr>
                        <tr><th>2</th></tr>
                        <tr><th>3</th></tr>
                        <tr><th>4</th></tr>
                    </thead>
                </table>
                <div className={style.replacement}>
                    replacement
                </div>
                <div id={style.b}>
                    b
                </div>
                <div className={style.some}>
                    <div className={style.selector}>
                        <div>
                            djggj
                        </div>
                    </div>
                </div>
                <div className={style.myTest1}>
                    dggg
                </div>
                <div className={style.myTest2}>
                    myTest2
                </div>

            </div>
        );
    }
}

export default LessTest;