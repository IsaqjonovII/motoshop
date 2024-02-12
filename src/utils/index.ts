export function pxToRem(px: number): string {
  return px / 16 + "rem";
}
export function formatNumbers(num: number): string {
  let absNum = Math.abs(num);
  const suffixes = ["", "K", "M", "B"];
  let suffixIndex = 0;
  while (absNum >= 1000 && suffixIndex < suffixes.length - 1) {
    absNum /= 1000;
    suffixIndex++;
  }
  const formattedNum = absNum.toFixed(0);
  return `${formattedNum}${suffixes[suffixIndex]}`;
}

export const getBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};
