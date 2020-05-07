Function.prototype.kcall=function (cxt) {
    var result;
    var args=[];
    for(var i=1;i<arguments.length;i++){
        args.push(arguments[i])
    }
    if(cxt == undefined){
        result=eval('this('+args+')');
    }else{
        cxt.fn = this;
        result=eval('cxt.fn('+args+')');
        delete cxt.fn;
    }
    return result;
}




function test(age) {
    console.log(this.name);
    console.log(age);
    console.log("------------------");
    return {}
}

var obj={
    name:'Lucy'
}

console.log(test.call(null,18));
console.log(test.kcall(null,20));
