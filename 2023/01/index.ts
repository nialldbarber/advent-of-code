export const formatString = (data: string) => data.split(/\r?\n/)

export function stripNonDigits(value: string | number) {
  if (typeof value === 'string') {
    return value.replace(/\D+/g, '')
  }
  return value.toString().replace(/\d+/g, '')
}

export function stripNonNumbers(value: string | number) {
  if (typeof value === 'string') {
    const numberWordsToDigits: Record<string, string> = {
      one: '1',
      two: '2',
      three: '3',
      four: '4',
      five: '5',
      six: '6',
      seven: '7',
      oneight: '8',
      eight: '8',
      nine: '9',
    }

    return value.replace(
      /oneight|one|two|three|four|five|six|seven|eight|nine/gi,
      (matched) => {
        return numberWordsToDigits[matched.toLowerCase()]
      }
    )
  }
  return value.toString()
}

export function getBookends(str: string) {
  return `${str.at(0)}${str.at(-1)}`
}

export async function readInputFromFile() {
  try {
    const file = Bun.file('input.txt')
    const data = await file.text()
    return formatString(data)
  } catch (error) {
    console.error(error)
  }
}

async function accumulateValuesPartOne() {
  try {
    const data = await readInputFromFile()
    return data?.reduce((total, curr) => {
      const bookends = getBookends(stripNonDigits(curr))
      return total + Number(bookends)
    }, 0)
  } catch (error) {
    console.error(error)
  }
}

async function accumulateValuesPartTwo() {
  try {
    const data = await readInputFromFile()
    return data?.reduce((total, curr) => {
      const formatNumbers = stripNonNumbers(curr)
      const bookends = getBookends(stripNonDigits(formatNumbers))
      return total + Number(bookends)
    }, 0)
  } catch (error) {
    console.error(error)
  }
}

accumulateValuesPartOne().then(console.log)
accumulateValuesPartTwo().then(console.log)
