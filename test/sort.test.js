const Bubble = require('../src/Sort/bubble')
const Quick = require('../src/Sort/quick')
const Binsearch = require('../src/Sort/binsearch')
const expect = require('chai').expect

describe('排序',()=>{
    it('冒泡',()=>{
        expect(Bubble([2,3,4,1,8,9,0,1]).toString()).to.be.equal([0,1,1,2,3,4,8,9].toString() )
    })

    it('快排',()=>{
        expect(Quick([2,3,4,1,8,9,0,1]).toString() ).to.be.equal([0,1,1,2,3,4,8,9].toString() )
    })

    it('二分查找',()=>{
        expect(Binsearch([0,1,1,2,3,4,8,9],0,7,2)).to.be.equal(3)
    })
})
