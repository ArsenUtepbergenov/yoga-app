type Time = { seconds: number }

export function range(start: number, end: number) {
  const result = []

  for (let i = start; i < end; i++) {
    result.push(i)
  }

  return result
}

export function getFullDate(value: Time) {
  const date = new Date(value.seconds * 1000)

  return date.toLocaleDateString('ru-RU')
}

export function getTime(value: Time) {
  const date = new Date(value.seconds * 1000)

  const time = date.toLocaleTimeString('ru-RU', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
  })

  return time
}

export function getDate(value: Time) {
  const date = new Date(value.seconds * 1000)
  const day = date.getDate()

  return day
}

export function checkTime(from: Time, to: Time) {
  const f = new Date(from.seconds * 1000)
  const t = new Date(to.seconds * 1000)

  return f.getTime() < t.getTime()
}
