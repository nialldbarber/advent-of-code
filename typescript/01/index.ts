import { data } from './data'
import { formatString } from '../utils'

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
  return highestScore.sort((a, z) => z - a)[0]
}

const answer = findHighestScore(data)
console.log(answer)
