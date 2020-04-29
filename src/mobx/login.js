import {observable, action, runInAction} from 'mobx';
import {login} from '../services/login'
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
    handleLogin(values){
        this.loading=true;
        const data={username:values.username,auth: [ '01', '0101' ,'0102','03']}
        let result=login(data);
        result.then((res)=>{
            if(res.code===200){
                runInAction(()=>{
                    this.isLogin=true;
                    this.userInfo={username:values.username,auth:['home','test']};
                    this.loading=false;
                    sessionStorage.setItem('userInfo',JSON.stringify(this.userInfo));
                })
            }
        })
        return result;
    }
    @action.bound
    handleLogOut(){
        this.isLogin=false;
        this.userInfo={}
        sessionStorage.removeItem('userInfo');
    }
}
export default new Login();