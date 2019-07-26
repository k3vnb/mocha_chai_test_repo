const divide = require('../index')
const expect = require('chai').expect

describe('divide function', () => {
    it('should divide positive integers correctly', () => {
        const   a = 8,
                b = 4,
                expectedAnswer = 2
        const   actualAnswer = divide(a, b)
        expect(actualAnswer).to.equal(expectedAnswer)
    })
    it('should throw an error when divide by zero', () => {
        const   a = 8,
                b = 0
        const fn = () => {divide(a,b)}
        // don't invoke the func  ie expect(fn()).to.throw() -- Node will incorrectly handle the thrown error for our testing purposes
        expect(fn).to.throw()
    })
})