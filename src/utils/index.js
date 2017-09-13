export function format(date, fmt) {
  const obj = {
    'y{1,4}': date.getFullYear(),
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (const exp in obj) {
    if (new RegExp(`(${exp})`).test(fmt)) {
      const res = obj[exp].toString()
      const $1 = RegExp.$1
      fmt = fmt.replace($1, `0000${res}`.substr(res.length + 4 - $1.length))
    }
  }
  return fmt
}
