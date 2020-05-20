
function VNode(realDom, template) {
    this.realDom = realDom;
    this.template = template;
    this.children = []
}

export default function createVNode(realDom) {
    var root = new VNode(realDom, '')
    if (realDom.nodeType === Node.TEXT_NODE) {
        //判断真实节点是否是文本节点
        //如果是文本节点，需要记录文本节点的值到虚拟节点
        root.template = realDom.nodeValue;
    } else {
        // 不是文本节点，循坏真实节点的子节点
        for (var i = 0; i < realDom.childNodes.length; i++) {
            var childRealNode = realDom.childNodes[i]
            var vNode = createVNode(childRealNode) //递归创建子节点的虚拟节点
            root.children.push(vNode)
        }
    }
    return root;
}


