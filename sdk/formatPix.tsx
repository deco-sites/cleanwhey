export function formatPix(price: number, porcentage: number, valueMax: number) {
  const valueDiscont = price * porcentage;
  const descontPix = price - valueDiscont;

  if (valueDiscont >= valueMax) {
    return price - valueMax;
  }
  return descontPix;
}
