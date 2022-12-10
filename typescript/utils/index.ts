import fs from 'fs'
import path from 'path'

export const formatString = (data: string) =>
  data.split(/\r?\n/)

export type FormattedString = ReturnType<
  typeof formatString
>

export const getDataFromFile = (dir: string) =>
  fs.readFileSync(path.resolve(dir, './data.txt'), {
    encoding: 'utf8',
  })

type Direction = 'ascending' | 'descending'

export const sortedItems = (
  arr: any[],
  direction: Direction = 'ascending'
) =>
  arr.sort((a, z) =>
    direction === 'descending' ? z - a : a - z
  )

export const sliceOfData = (
  arr: any[],
  from: number = 0,
  to: number = 0
) => arr.slice(from, to)

export const pickItem = (arr: any[], index: number) =>
  arr[index]

export const add = (arr: any[]) =>
  arr.reduce((item, total) => item + total, 0)
