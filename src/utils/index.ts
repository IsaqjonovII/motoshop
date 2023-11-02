export function pxToRem(px: number): string {
  return px / 16 + "rem";
}
export function formatNumbers(num: number): string {
  const strings = String(num).split("").reverse();
  for (let i = 2; i < strings.length; i += 4) {
    strings.splice(i + 1, 0, ` `);
  }
  return strings.reverse().join("");
}