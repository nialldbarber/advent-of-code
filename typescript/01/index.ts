import {
  add,
  formatString,
  getDataFromFile,
  pickItem,
  sliceOfData,
  sortedItems,
} from '../utils'

/**
 * First part:
 * The provided data is split into chunks representing
 * what each elf is carrying. This task requires you
 * to find the elf carrying the most amount of calories.
 *
 * Second part:
 * So the elf with the most amount of calories doesn't
 * run out of snacks (unacceptable!), we need to find
 * the top three elves carrying the most amount of
 * calories, so that there is a backup.
 */

type HighestCalorieCount = number[]
type Range = [number, number]

const formatAndPickItem = (
  score: HighestCalorieCount,
  index: number,
  sliceData?: Range
): number => {
  const sortDescending = sortedItems(score, 'descending')
  if (sliceData) {
    const getFromRange = sliceOfData(score, ...sliceData)
    return add(getFromRange)
  }
  return pickItem(sortDescending, index)
}

export const findHighestCalorieCount = (
  data: string,
  range?: Range
) => {
  let total = 0
  let highestCalorieCount: HighestCalorieCount = []
  const formattedData = formatString(data)
  for (const item of formattedData) {
    if (item !== '') {
      total += Number(item)
    } else {
      highestCalorieCount.push(total)
      total = 0
    }
  }
  const highest = range
    ? formatAndPickItem(highestCalorieCount, 0, range)
    : formatAndPickItem(highestCalorieCount, 0)
  return highest
}

const data = getDataFromFile(__dirname)

const firstPart = findHighestCalorieCount(data)
const secondPart = findHighestCalorieCount(data, [0, 3])

console.log(firstPart)
console.log(secondPart)
