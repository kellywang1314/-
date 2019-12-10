/* let Lazyman = require('./lazyman')
let expect = require('chai').expect

describe('lazyman类测试',function(){
    let lazyman = new Lazyman("Tony")
    //beforeEach(() => lazyman = new Lazyman('Tony'))
    it('调用类实例输出Hi! This is name',funciton(){
        expect(lazyman).toBe('Hi,This is Tony')
    })
})
 */

let Lazyman = require('../src/lazyman/lazyman')
let expect = require('chai').expect
require('mocha-sinon')


//代码存在异步，加done
describe('lazytest',() => {
  function lazy(name){
    return new Lazyman("Tony")
  }
  let cls = lazy('Tony')
  it('new lazyman',(done)=>{
    expect(cls.inputname).to.be.equal(`Hi,This is Tony`)
    done()
  })

  it('sleep',(done)=>{
    cls.sleep(2).eat('dinner')
    expect(cls.inputname).to.be.equal(`Hi,This is Tony`)
    expect(cls.time).to.be.equal(`Wake up 10`)
    expect(cls.eatsome).to.be.equal(`Eat dinner`)
    done()
  })
})

