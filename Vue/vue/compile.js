//compile.js

function getFragments(template) {
    var match = template.match(/{{[^}]+}}/g);
    return match || [];      //['{{name}}','{{age}}']
}

function getValue(fragment, envObj) {
    var exp = fragment.replace("{{", "").replace("}}", "");
    var props = exp.split('.')  //存在obj.name 将表达式分割成一个属性数组
    var obj = envObj;
    for (var i = 0; i < props.length; i++) {
        obj = obj[props[i]]   //循坏拿到对象最里面的值
    }
    return obj;
}

//根绝模板和环境对象，得到编译结果
export default function compile(template, envObj) {
    //提前模板中的 {{xxx}}
    var frag = getFragments(template);
    var result = template
    for (var i = 0; i < frag.length; i++) {
        var frags = frag[i];
        result = result.replace(frags, getValue(frags, envObj))
    }
    return result
}