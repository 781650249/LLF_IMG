
function proxyProp(originalObj, targetObj, prop, callback) {
    if (typeof originalObj[prop] === 'object') {
        var newTarget = {}  //新的要代理该属性的对象
        createResponsive(originalObj[prop], newTarget, callback);
        Object.defineProperty(targetObj, prop, {
            get: function () {
                return newTarget
            },
            set: function (value) {
                originObj[prop] = value;
                newTarget = value;
                callback && callback(prop)
            }
        })
    } else {
        Object.defineProperty(targetObj, prop, {
            get: function () {
                return originalObj[prop]
            },
            set: function (value) {
                originalObj[prop] = value;
                callback && callback(prop)
            }
        })
    }

}



//将原始对象的所有属性，提取到代理对象中
//原始对象 代理对象  当代理对象的属性被赋值的时候，需要运行的回调函数

export default function createResponsive(originalObj, targetObj, callback) {
    for (var prop in originalObj) {
        proxyProp(originalObj, targetObj, prop, callback)
    }
}

/*
originObj:
{
            name: 'monica',
            age: 18,
            addr: {
                province: '黑龙江',
                city: '哈尔滨'
            }
}
targetObj:
{
            代理name
            代理age
            代理newTarget

}
newTarget:
{
           代理province
           代理city
}
*/