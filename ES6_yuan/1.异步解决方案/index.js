

function getPermission(useName,callback){
    
    setTimeout(()=>{
        var res = Math.random()
        if(res<0.1){  
            callback('error',null) //网络中断
        }else if(res>0.5){
            callback(null,false)  //没有权限
        }else{
            callback(null,true)  //有权限
        }
    },1000)


}

//文章
getPermission('LLF',function(err,result){
    if(err){
        //提示网络中断
    } else if(result){
        //有权限
    }else{
        //没有权限
    }   
})

//留言
getPermission('TL',function(err,result){
    if(err){
        //提示网络中断
    } else if(result){
        //有权限
    }else{
        //没有权限
    }   
})


// node回调模式
// 1.所有回调函数不能作为属性出现
// 2.所有回调函数必须作为函数最后的参数
// 3.所有回调函数必须有两个参数，第一个参数表示错误，第二个参数表示结果



