import { readInputFromFile } from '../lib/read-file'

export function stripNonDigits(value: string | number) {
  if (typeof value === 'string') {
    return value.replace(/\D+/g, '')
  }
  return value.toString().replace(/\d+/g, '')
}

export function convertNumberStringToNumber(value: string) {
  const numberMap: Record<string, any> = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  }
  const regex = new RegExp(Object.keys(numberMap).join('|'), 'g')
  return value.replace(regex, (match) => numberMap[match])
}

export function getBookends(str: string) {
  return `${str.at(0)}${str.at(-1)}`
}

async function calibrationValueOne() {
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

async function calibrationValueTwo() {
  try {
    const data = await readInputFromFile()
    return data?.reduce((total, curr) => {
      const formatNumbers = convertNumberStringToNumber(curr)
      const strip = stripNonDigits(formatNumbers)
      const bookends = getBookends(strip)
      return total + Number(bookends)
    }, 0)
  } catch (error) {
    console.error(error)
  }
}

calibrationValueOne().then(console.log)
calibrationValueTwo().then(console.log)
