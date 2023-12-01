export async function readInputFromFile() {
  const file = Bun.file('input.txt')
  const str = await file.text();
  return str;
}
