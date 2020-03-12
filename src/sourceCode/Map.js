// key-value对
let obj= new Map([
    ['0','a'],
    ['1','b']
])
obj.get('0')
obj.has('0')
obj.set('2','c')

// map实现
function Map(arr=[]){
    this.items = {}
    if(arr && arr.length){
        arr.forEach((item) => {
            this.items[item[0]] = item[1]
        })
    }
}
Map.prototype = {
    constructor: Map,
    size: Object.keys(this.items).length,
    set:(key,value) => {
        this.items[key] = value
    },
    has: (value) => {
        return this.items.hasOwnProperty(value)
    }
}

