//es5实现继承

//原型链继承
function Super(){

}
function Sub(){
    Super.call(this)
}
Sub.prototype = new Super() //要将它赋值为new Super()，而不是直接等于Super.prototype,否则后面两行对Sub.prototype的操作，会连父类的原型Super.prototype一起修改掉。
//Sub.prototype = Object.create(Super.prototype)
Sub.prototype.constructor = Sub


