import { findHighestScore } from './index'

const inputOne = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
`

describe('findHighestScore()', () => {
  it('should find the highest score of inputOne', () => {
    expect(findHighestScore(inputOne)).toBe(24000)
  })
})
