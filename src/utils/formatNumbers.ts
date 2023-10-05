export const numberFormat = (value: string) => {
  return parseFloat(value).toFixed(2).replace('.', ',')
}
