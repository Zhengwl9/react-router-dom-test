import leftMenu from "./leftMenu";
function getFilterAuth(currentAuth) {
    currentAuth = currentAuth || ['home','test','about','user'];
    let hash = currentAuth.reduce((curr,item) => {
         curr[item]=1;
         return curr;
    },{});
    function recursion(arr) {
        if(arr.length){
           return arr.map(item => {
                if(hash[item.key]){
                    if(item.children && item.children.length){
                        return {...item,children:recursion(item.children)}
                    }else{
                        return item;
                    }
                }
            })
        }
    }
    console.log(recursion(leftMenu));
}


export {getFilterAuth}