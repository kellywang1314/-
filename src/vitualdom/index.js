//react vitual dom的实现

// dom对象表示
function Element(tagname,props,children){
    this.tagname = tagname
    this.props = props
    this.children = children
}
//js对象渲染成dom
Element.prototype.render = function(){
    let dom = document.createElement(this.tagname)
    let props = this.props
    for(let propsName in props){
        dom.setAttribute(propsName,props[propsName])
    }
    this.children.forEach((child) => {
        let ch = child instanceof Object ? new Element(child.tagName,child.props,child.children) : child
        let childEl = (ch instanceof Element)
            ? ch.render()
            :document.createTextNode(ch)
        dom.appendChild(childEl)
    })
    return dom
    
}

//实例，也是虚拟dom的结构
let ul = new Element('ul', {id: 'list'}, [
    {tagName: 'li', props: {class: 'item'}, children: ["Item 1"]},
    {tagName: 'li', props: {class: 'item'}, children: ["Item 2"]},
    {tagName: 'li', props: {class: 'item'}, children: ["Item 3"]}
])

ulRoot = ul.render()

//diff算法




