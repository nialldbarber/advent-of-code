import { data } from './data'
import { formatString } from '../utils'

const factoryTest = (arr: any[]) => {
  const test = (arr: any[]) => {
    let yo = []
    for (const item of arr) {
      yo.push({
        first: item.split('-')[0],
        last: item.split('-')[1],
      })
    }

    if (
      yo[0].first >= yo[1].first &&
      yo[0].last <= yo[1].last
    ) {
      return true
    }

    return false
  }

  return test(arr) || test(arr.reverse())
}

export const t = (data: string) => {
  let total = 0
  const formatted = formatString(data)
  for (const item of formatted) {
    const test = factoryTest(item.split(','))
    // console.log(item, test)
    if (test) total += 1
  }
  return total
}

const total = t(data)
console.log(total)
