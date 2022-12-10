import { formatString, getDataFromFile } from '../utils'

const GAME_MAP: Record<string, number> = {
  X: 1, //'Rock' === +1
  Y: 2, // 'Paper' === +2
  Z: 3, // 'Scissors' === +3
}

const determineWin = (args: string): number => {
  let [opponent, me] = args.split(' ')
  let total = GAME_MAP[me]

  // Rock
  if (opponent === 'A') {
    if (me === 'X') {
      total += 3
    } else if (me === 'Y') {
      total += 6
    } else {
      total += 0
    }
  }

  // Paper
  if (opponent === 'B') {
    if (me === 'X') {
      total += 0
    } else if (me === 'Y') {
      total += 3
    } else {
      total += 6
    }
  }

  // Scissors
  if (opponent === 'C') {
    if (me === 'X') {
      total += 6
    } else if (me === 'Y') {
      total += 0
    } else {
      total += 3
    }
  }

  return total
}

const findTotalScoreRockPaperScissors = (data: string) => {
  let total = 0
  const formattedData = formatString(data)
  for (const item of formattedData) {
    const runningTotal = determineWin(item)
    total += runningTotal
  }

  return total
}

const data = getDataFromFile(__dirname)
const total = findTotalScoreRockPaperScissors(data)
console.log(total)
