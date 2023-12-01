export const formatString = (data: string) => data.split(/\r?\n/);

export function removeChars(value: string | number) {
	if (typeof value === "string") {
		return value.replace(/\D+/g, "");
	}
	return value.toString().replace(/\d+/g, "");
}

export function getBookends(str: string) {
	return `${str.at(0)}${str.at(-1)}`;
}

export async function readInputFromFile() {
	try {
		const file = Bun.file("input.txt");
		const data = await file.text();
		return formatString(data);
	} catch (error) {
		console.error(error);
	}
}

async function accumulateValuesPartOne() {
	try {
		const data = await readInputFromFile();
		return data?.reduce((total, curr) => {
			const bookends = getBookends(removeChars(curr));
			return total + Number(bookends);
		}, 0);
	} catch (error) {
		console.error(error);
	}
}

accumulateValuesPartOne().then(console.log);
