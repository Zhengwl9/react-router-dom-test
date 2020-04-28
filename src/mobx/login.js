import {observable, action, runInAction} from 'mobx';
let userInfo = sessionStorage.getItem('userInfo');
userInfo = userInfo ? JSON.parse(userInfo) : '';
class Login{
    @observable
    loading=false;
    @observable
    isLogin=!!userInfo;
    @observable
    userInfo=userInfo || {};
    @action.bound
    handleLogin(values,props){
        this.loading=true;
        setTimeout(()=>{
            runInAction(()=>{
                this.isLogin=true;
                this.userInfo={username:values.username,auth:['home','test']};
                this.loading=false;
                sessionStorage.setItem('userInfo',JSON.stringify(this.userInfo));
                props.history.push('/')
            })
        },1000)
    }
    @action.bound
    handleLogOut(props){
        this.isLogin=false;
        this.userInfo={}
        sessionStorage.removeItem('userInfo');
        props.history.push('/login')
    }
}
export default new Login();