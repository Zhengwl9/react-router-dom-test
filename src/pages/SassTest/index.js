import React, {Component} from 'react';
import style from './index.scss'
class SassTest extends Component {
    render() {
        return (
            <div>
                <div className={style.box}>
                    <div>SassTest1</div>
                    <div>SassTest2</div>
                    <div>SassTest3</div>
                </div>
                <div className={style.testDiv}>
                    <div>testDiv1</div>
                    <div>testDiv2</div>
                </div>
            </div>

        );
    }
}

export default SassTest;