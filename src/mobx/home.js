import {observable,action} from 'mobx'

class Home{
    @observable
    lists=["apple"];
    @observable
    name='';
    @action.bound
    addItem=function () {
        this.lists.push(this.name);
        this.name='';
    }
    @action.bound
    handleChangeName=function (e) {
        this.name=e.target.value;
    }
    @action.bound
    handleDelete=function (i) {
        this.lists.splice(i,1)
    }
}

export default new Home();