import { observable, action, runInAction } from 'mobx';
let userInfo = sessionStorage.getItem('userInfo');
userInfo = userInfo ? JSON.parse(userInfo) : '';
class Login {
    @observable
    loading = false;
    @observable
    isLogin = !!userInfo;
    @observable
    userInfo = userInfo || {};
    @action.bound
    async handleLogin(values) {
        this.loading = true;
        // await $for.post('')
        await true
        runInAction(() => {
            this.isLogin = true;
            this.userInfo = { username: values.username, auth: ['home', 'test'] };
            this.loading = false;
            sessionStorage.setItem('userInfo', JSON.stringify(this.userInfo));
        })
    }
    @action.bound
    handleLogOut() {
        this.isLogin = false;
        this.userInfo = {}
        sessionStorage.removeItem('userInfo');
    }
}
export default new Login();