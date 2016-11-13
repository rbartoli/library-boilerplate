import { expect } from 'chai'
import library from '../src'


describe('public api', () => {
  let instance

  beforeEach(() => {
  })

  it('should expose init method', () => {
    const actual = instance.init
    const expected = 'function'

    expect(actual).to.be.a(expected)
  })
})
