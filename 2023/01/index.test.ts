import { describe, expect, test } from "bun:test";
import { formatString } from ".";

const testCase = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;

describe("Day 1", () => {
	describe("formatString()", () => {
		test("it should format a text file into an array of strings", () => {
			expect(formatString(testCase)).toEqual([
				"two1nine",
				"eightwothree",
				"abcone2threexyz",
				"xtwone3four",
				"4nineeightseven2",
				"zoneight234",
				"7pqrstsixteen",
			]);
		});
	});

	describe("removeChars()", () => {});
});
