const mocha = require('mocha')
const expect = require('chai').expect
const sort = require('../sort')

describe('sort function', () => {
    it('sorts a given array into an array of ascending order', () => {
        expect(sort([-1, 5, 0, 1050, -20])).to.deep.equal([-20, -1, 0, 5, 1050])
    })
})