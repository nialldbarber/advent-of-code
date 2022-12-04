import { formatString } from '../utils'
import { data } from './data'

type Case = 'lowercase' | 'uppercase'

const priorityList = () => {
  const setPriorityList = (typeCase: Case = 'lowercase') => {
    let priorityList: Record<string, number> = {}
    const alphabet = [...'abcdefghijklmnopqrstuvwxyz']

    for (const [index, letter] of alphabet.entries()) {
      const key = typeCase === 'lowercase' ? letter : letter.toUpperCase()
      const value = typeCase === 'lowercase' ? index + 1 : index + 27
      priorityList[key] = value
    }

    return priorityList
  }
  const lowerCaseList = setPriorityList()
  const upperCaseList = setPriorityList('uppercase')
  return { ...lowerCaseList, ...upperCaseList }
}

const sumOfPriorities = (data: string) => {
  let total = 0
  const formattedData = formatString(data)
  const getPriorityList = priorityList()

  for (const line of formattedData) {
    let formatted = line.split('')
    let half = Math.ceil(formatted.length / 2)
    let firstHalf = formatted.slice(0, half)
    let secondHalf = formatted.slice(half)

    const prioriityLetter = firstHalf.filter((letter) =>
      secondHalf.includes(letter)
    )[0]
    total += getPriorityList[prioriityLetter]
  }
  return total
}
const total = sumOfPriorities(data)
console.log(total)
