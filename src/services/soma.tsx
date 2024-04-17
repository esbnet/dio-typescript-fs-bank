export function soma(num: number): number {
  return num + 1;
}

export function subtrair(num: number): number {
  return num - 1;
}

export function multiplicar(num: number, multiplier: number): number | string {
  if (multiplier === 2 || multiplier === 3) {
    return num * multiplier;
  }

  return "Multiplicador não aceito";
}
