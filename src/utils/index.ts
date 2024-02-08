export function pxToRem(px: number): string {
  return px / 16 + "rem";
}
export function formatNumbers(num: number): string {
  const strings = String(num).split("").reverse();
  if (strings.length > 9) {
    strings.splice(0, 9);
    return `${strings.reverse().join("")}B`;
  } else if (strings.length > 6) {
    strings.splice(0, 6);
    return `${strings.reverse().join("")}M`;
  } else if (strings.length > 5) {
    strings.splice(0, 3);
    return `${strings.reverse().join("")}K`;
  } else {
    let res = [];
    for (let i = 2; i < strings.length; i += 4) {
      res.push(strings.splice(i + 1, 0, ` `))
    }
    return res.reverse().join("");
  }

}
export const getBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};
