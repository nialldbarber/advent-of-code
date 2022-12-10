import {
  formatString,
  getDataFromFile,
  pickItem,
  sortedItems,
} from '../utils'

/**
 * The provided data is split into chunks representing
 * what each elf is carrying. This task requires you
 * to find the elf carrying the most amount of calories.
 */

export const findHighestScore = (data: string) => {
  let total = 0
  let highestScore = []
  const formattedData = formatString(data)
  for (const item of formattedData) {
    if (item !== '') {
      total += Number(item)
    } else {
      highestScore.push(total)
      total = 0
    }
  }
  const sortDescending = sortedItems(
    highestScore,
    'descending'
  )
  return pickItem(sortDescending, 0)
}

const data = getDataFromFile(__dirname)
const answer = findHighestScore(data)
console.log(answer)
