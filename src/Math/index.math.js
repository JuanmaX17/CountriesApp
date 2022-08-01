export function calculteDot(number) {
  const strNumber = String(number).split('');
  for (let i = strNumber.length - 4; i > 0; i -= 3) strNumber[i] += '.';
  return strNumber.join('');
}
