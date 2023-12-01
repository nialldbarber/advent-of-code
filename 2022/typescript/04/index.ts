import {
  formatString,
  FormattedString,
  getDataFromFile,
} from '../utils'

const splitBy = (str: string, delimeter: string) =>
  str.split(delimeter)

const findContainingPairsFactory = (data: string) => {
  const findContainingPairs = (reversed?: boolean) => {
    let total = 0
    const formattedString: FormattedString = reversed
      ? formatString(data).reverse()
      : formatString(data)
    for (const item of formattedString) {
      const [baseCase, testCase] = splitBy(item, ',')
      const [baseLeft, baseRight] = splitBy(baseCase, '-')
      const [testLeft, testRight] = splitBy(testCase, '-')

      if (testLeft >= baseLeft && testRight <= baseRight) {
        total += 1
      }
    }
    return total
  }
  return findContainingPairs() + findContainingPairs(true)
}

const data = getDataFromFile(__dirname)
const outcome = findContainingPairsFactory(data)

console.log(outcome)
