//render.js

import compile from './compile.js'
//渲染一个虚拟节点（将文本节点的虚拟节点进行编译）
export default function render(vnode, envObj) {
    if (vnode.realDom.nodeType === Node.TEXT_NODE) {
        var result = compile(vnode.template, envObj)
        if (result !== vnode.realDom.nodeValue) {
            vnode.realDom.nodeValue = result //将vnode.template编译将编译结果设置到realDom.nodevalue中
        }
    } else {
        for (var i = 0; i < vnode.children.length; i++) {
            var childNode = vnode.children[i]
            render(childNode, envObj)
        }
    }
}