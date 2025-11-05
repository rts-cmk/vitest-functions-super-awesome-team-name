import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { findLongestWord, charCount, mergeSortedArrays, groupBy, debounce, flattenArray } from "./premade-functions.js";

describe("findLongestWord", () => {

	it("does the function return with anything", () => {
		expect(findLongestWord("There should be a ice cream van somewhere around here.")).toBeDefined()
	})

	it("does the function return the longest word", () => {
		expect(findLongestWord("There should be a ice cream van somewhere around here.")).toBe("somewhere")
	})

})

describe("charCount", () => {

	it("does the function return with anything", () => {
		expect(charCount("There should be a ice cream van somewhere around here.")).toBeDefined()
	})

	it("does the function return a object", () => {
		expect(charCount("There should be a ice cream van somewhere around here.")).toBeTypeOf("object")
	})

	it("does the returned object contain anything", () => {
		expect(charCount("There should be a ice cream van somewhere around here.")).toHaveProperty("T")
	})

	it("does the returned object contain whats expected", () => {
		expect(charCount("There should be a ice cream van somewhere around here.")).toEqual({
			" ": 9,
			".": 1,
			"T": 1,
			"a": 4,
			"b": 1,
			"c": 2,
			"d": 2,
			"e": 10,
			"h": 4,
			"i": 1,
			"l": 1,
			"m": 2,
			"n": 2,
			"o": 3,
			"r": 5,
			"s": 2,
			"u": 2,
			"v": 1,
			"w": 1,
		})
	})

})

describe("mergeSortedArrays", () => {

	it("does the function return with anything", () => {
		expect(mergeSortedArrays(["hello", "new"], ["world", "!"])).toBeDefined()
	})

	it("does the returned array equal the expected array", () => {
		expect(mergeSortedArrays(["hello", "new"], ["world", "!"])).toEqual(["hello", "new", "world", "!"])
	})

})

describe("flattenArray", () => {

	it("does the function return with anything", () => {
		expect(flattenArray([1, [2, 3], [4, [5, 6]]])).toBeDefined()
	})

	it("does the returned array equal the expected array", () => {
		expect(flattenArray([1, [2, 3], [4, [5, 6]]])).toEqual([1, 2, 3, 4, 5, 6])
	})

})

describe("groupBy", () => {

	it("does the function return with anything", () => {
		expect(groupBy([{ txt: "repairs" }, { txt: "tools" }, { txt: "items" }], "txt")).toBeDefined()
	})

	it("does the returned array equal the expected array", () => {
		expect(groupBy([{ txt: "repairs", id: 1 }, { txt: "tools", id: 2 }, { txt: "items", id: 3 }], "id")).toEqual(
			{
				1: [{ txt: 'repairs', id: 1 }],
				2: [{ txt: 'tools', id: 2 }],
				3: [{ txt: 'items', id: 3 }]
			}
		)
	})

})

describe("debounce", () => {
	let mock
	let debounced

	beforeEach(() => {
		vi.useFakeTimers()
		mock = vi.fn(() => "2 seconds after")
		debounced = debounce(mock, 2000)
	})

	afterEach(() => {
		vi.useRealTimers()
		vi.clearAllMocks()
	})

	it("should return a function", () => {
		expect(debounced).toBeTypeOf("function")
	})

	it("should not call the function immediately", () => {
		debounced()
		expect(mock).not.toHaveBeenCalled()
	})

	it("should call the function after the delay", () => {
		debounced()
		vi.advanceTimersByTime(1999)
		expect(mock).not.toHaveBeenCalled()

		vi.advanceTimersByTime(1)
		expect(mock).toHaveBeenCalledTimes(1)
	})
})