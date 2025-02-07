export const generateRandomChartData = (
  interval: '24h' | '7d' | '30d' | 'all_time' | string
) => {
  const data = []
  const now = new Date()
  const startDate = new Date(now)

  switch (interval) {
    case '24h':
      startDate.setHours(now.getHours() - 24)
      break
    case '7d':
      startDate.setDate(now.getDate() - 7)
      break
    case '30d':
      startDate.setDate(now.getDate() - 30)
      break
    case 'all_time':
      startDate.setFullYear(now.getFullYear() - 1)
      break
  }

  for (let i = 0; i < 100; i++) {
    const date = new Date(startDate.getTime() + i * (1000 * 60 * 60))
    data.push({
      date: date.toISOString(),
      value: Math.random() * 30,
    })
  }
  return data
}
