import { formatString } from './index'

const input = `123
wfsdf
egrgegs
25kjdfg
dfgiuw`

describe('utils', () => {
  describe('formatString()', () => {
    expect(formatString(input)).toEqual([
      '123',
      'wfsdf',
      'egrgegs',
      '25kjdfg',
      'dfgiuw',
    ])
  })
})
