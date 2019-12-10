module.exports =  class Lazyman{
    constructor(name){
        this.name = name
        this.inputname 
        this.time
        this.eatsome
        this.tasks = []
        const task = () => {
            console.log(`Hi,This is ${this.name}`)
            this.inputname = `Hi,This is ${this.name}`
            this.next()
        }
        this.tasks.push(task)
        setTimeout(()=>{
            this.next()
        },0) 
    }

    next(){
        const task = this.tasks.shift()
        task && task()
    }

    sleep(time){
        this._sleep(0,time)
        return this
    }

    sleepFirst(time){
        this._sleep(1,time)
        return this
    }
    _sleep(isfirst,time){
        const task = ()=>{
            setTimeout(() => {
                console.log(`Wake up ${time}`)
                this.time = `Wake up ${time}`
                this.next()
            },time*1000)
        }
        if(isfirst){
            this.tasks.unshift(task)
        }else{
            this.tasks.push(task)
        }
    }

    eat(some){
        const task = ()=>{
            console.log(`Eat ${some}`)
            this.eatsome = `Eat ${some}`
            this.next()
        }
        this.tasks.push(task)
        return this
    }
    
}

  


