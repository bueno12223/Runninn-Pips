export const formatCurreny = (value) => {
  return Math.floor(value).toFixed(2)
}

export function subtractSeconds (date, seconds) {
  // make copy with Date() constructor
  const dateCopy = new Date(date)

  dateCopy.setSeconds(date.getSeconds() - seconds)

  return dateCopy
}
