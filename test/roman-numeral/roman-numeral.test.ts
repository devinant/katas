import { convert } from "../../src/roman-numeral/roman-numeral"

describe("roman numeral", () => {
  it.each([
    ["I", 1],
    ["II", 2],
    ["III", 3],
    ["IV", 4],
    ["V", 5],
    ["VI", 6],
    ["VII", 7],
    ["VIII", 8],
    ["IX", 9],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
    ["XXXIX", 39],
    ["CCXLVI", 246],
    ["DCCLXXXIX", 789],
    ["MMCDXXI", 2421],
    ["CLX", 160],
    ["CCVII", 207],
    ["MIX", 1009],
    ["MLXVI", 1066],
    ["MDCCLXXVI", 1776],
    ["MCMXVIII", 1918],
    ["MCMLIV", 1954],
    ["MMXIV", 2014],
    ["MMMXIV", 3014],
  ])("should be numeral %s given number %s", (numeral: string, number: number) => {
    expect(convert(number)).toBe(numeral)
  })

  it("should throw an out of range exception given values below zero", () => {
    expect(() => convert(-1)).toThrowError(new Error("Number is out of range"))
  })

  it("should throw an out of range exception given value over 3999", () => {
    expect(() => convert(5000)).toThrowError(new Error("Number is out of range"))
  })
})
