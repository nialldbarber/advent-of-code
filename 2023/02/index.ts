import { readInputFromFile } from '../lib/read-file'

const CUBE_LIMITS: Record<string, number> = {
  red: 12,
  green: 13,
  blue: 14,
}

function determineLimit(str: string) {
  const [num, color] = str.split(' ')
  return Number(num) <= CUBE_LIMITS[color]
}

async function determineIfGameIsValid() {
  try {
    const results: Array<number> = []
    const data = await readInputFromFile()
    data?.forEach((row, index) => {
      const formattedGame = row.substring(row.indexOf(':') + 1)
      const games = formattedGame
        .split(';')
        .map((game) => game.trim())
      const isRowValid = games.every((game) => {
        return game.split(',').every((item) => {
          const [num, color] = item.trim().split(' ')
          return determineLimit(`${num} ${color}`)
        })
      })
      results.push(isRowValid ? index + 1 : 0)
    })
    return results.reduce((acc, curr) => acc + curr, 0)
  } catch (error) {
    console.error(error)
  }
}

determineIfGameIsValid().then(console.log)

// 90501505
