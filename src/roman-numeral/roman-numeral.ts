export function convert(number: number): string {
  if (number < 0 || number > 3999) {
    throw new Error("Number is out of range")
  }

  return [
    ["M", "MM", "MMM"][Math.floor(number / 1000) - 1],
    ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"][Math.floor((number % 1000) / 100) - 1],
    ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"][Math.floor((number % 100) / 10) - 1],
    ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"][Math.floor(number % 10) - 1],
  ].join("")
}
