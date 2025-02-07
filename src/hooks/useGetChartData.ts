import { useEffect, useState } from 'react'
import { generateRandomChartData } from './useGenerateRandomChartData'

export const useChartData = (
  selectedTimeRange: '24h' | '7d' | '30d' | 'all_time'
) => {
  const [chartData, setChartData] = useState<{ date: string; value: number }[]>(
    []
  )

  useEffect(() => {
    let generatedData = generateRandomChartData(selectedTimeRange)
    setChartData(generatedData)
    localStorage.setItem('chartData', JSON.stringify(generatedData))

    const storedData = localStorage.getItem('chartData')
    if (storedData) {
      const parsedData = JSON.parse(storedData)
      setChartData(parsedData)
    } else {
      console.log('ошибка при получение данных')
    }
  }, [selectedTimeRange])

  return chartData
}
