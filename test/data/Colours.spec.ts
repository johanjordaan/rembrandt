import { expect } from 'chai'

import {
  isObject
} from 'lodash'

import { 
  Colours,
} from '../../src/data/Colours'


describe('Colours', () => {
  it('should be an array of ColourModels', () => {
    expect(isObject(Colours)).to.equal(true)
  })
})