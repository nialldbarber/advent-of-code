export const formatString = (data: string) => data.split(/\r?\n/)

export async function readInputFromFile() {
  try {
    const file = Bun.file('input.txt')
    const data = await file.text()
    return formatString(data)
  } catch (error) {
    console.error(error)
  }
}
