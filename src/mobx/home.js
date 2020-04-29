import {observable, action} from 'mobx'
import {getList} from '../services/home'

class Home {
    @observable
    lists = ["apple"];
    @observable
    name = '';
    @action.bound
    getList = () => {
        getList().then((res) => {
            if(res.code===200){
                this.lists = res.data;
            }
        })
    }
    @action.bound
    addItem = () => {
        this.lists.push(this.name);
        this.name = '';
    }
    @action.bound
    handleChangeName = (e) => {
        this.name = e.target.value;
    }
    @action.bound
    handleDelete = (i) => {
        this.lists = this.lists.filter((item, k) => k !== i)
        // this.lists.splice(i, 1);
    }
}

export default new Home();