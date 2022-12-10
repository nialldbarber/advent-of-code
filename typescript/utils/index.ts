import fs from 'fs'
import path from 'path'

export const formatString = (data: string) =>
  data.split(/\r?\n/)

export const getDataFromFile = (dir: string) => {
  return fs.readFileSync(path.resolve(dir, './data.txt'), {
    encoding: 'utf8',
  })
}
