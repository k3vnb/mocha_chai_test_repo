const mocha = require('mocha')
const expect = require('chai').expect
const diff = require('../arrayDiff.js')

describe('diff function', () => {
    it('returns an empty array if array b contain all the same elements as array a', () => {
        expect(diff([-50, 2, 0, 'roger rabbit', 50, 5000], [-50, 2, 0, 'roger rabbit', 50, 5000])).to.deep.equal([])
    })
    it('returns an array that matches array a, if array b contains no same elements as array a', () => {
        expect(diff([-50, 2, 0, 'roger rabbit', 50, 5000], [-2, 'jessica rabbit', 12, 50001])).to.deep.equal([-50, 2, 0, 'roger rabbit', 50, 5000])
    })
    it('returns an array of common elements if only some elements are present in both array a and array b', () => {
        expect(diff([-50, 2, 0, 'roger rabbit', 50, 5000], [-2, 'jessica rabbit', 0, 12, 5000])).to.deep.equal([-50, 2, 'roger rabbit', 50])
    })
    it('should remove 1 from [1,2,3]', () => {
        expect(diff([1, 2, 3], [1])).to.not.include(1)
    })
})